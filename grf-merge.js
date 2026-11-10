// Joins GRF files (version 0x200) into one, in the browser. Used by the "download selected" button.
// File data is copied as it is (still compressed); only the file table is rebuilt.
// When two GRFs hold the same path, the one that comes later in the list wins.
window.GRFMerge=(function(){
  var HEAD=46, MAGIC='Master of Magic';
  var pipe=function(bytes,stream){
    return new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer().then(function(b){return new Uint8Array(b);});};
  // read(): header key + the list of files of one GRF (ArrayBuffer)
  var read=function(buf){
    var u=new Uint8Array(buf), v=new DataView(buf), i;
    for(i=0;i<MAGIC.length;i++) if(u[i]!==MAGIC.charCodeAt(i)) throw new Error('not a GRF');
    if(v.getUint32(42,true)!==0x200) throw new Error('unsupported GRF version');
    var off=HEAD+v.getUint32(30,true), n=v.getUint32(38,true)-v.getUint32(34,true)-7, csz=v.getUint32(off,true);
    return pipe(u.subarray(off+8,off+8+csz),new DecompressionStream('deflate')).then(function(t){
      var tv=new DataView(t.buffer,t.byteOffset,t.byteLength), files=[], p=0;
      for(i=0;i<n&&p<t.length;i++){
        var e=t.indexOf(0,p); if(e<0) break;
        var name=t.subarray(p,e+1), key=''; p=e+1;
        for(var j=0;j<name.length-1;j++) key+=String.fromCharCode(name[j]);
        var aligned=tv.getUint32(p+4,true), flags=t[p+12], pos=tv.getUint32(p+13,true);
        // name (with its 0 byte), then 13 bytes: compressed size, aligned size, real size, flags
        if(flags&1) files.push({key:key.toLowerCase().replace(/\//g,'\\'),name:name,meta:t.subarray(p,p+13),data:u.subarray(HEAD+pos,HEAD+pos+aligned)});
        p+=17;
      }
      return {key:u.slice(16,30),files:files};
    });
  };
  // merge(): list of ArrayBuffers -> Promise of a Blob with the joined GRF
  var merge=function(bufs){
    return Promise.all(bufs.map(read)).then(function(grfs){
      var all=new Map();
      grfs.forEach(function(g){g.files.forEach(function(f){all.delete(f.key); all.set(f.key,f);});});
      var list=Array.from(all.values()), size=0, tlen=0;
      list.forEach(function(f){tlen+=f.name.length+17;});
      var table=new Uint8Array(tlen), tv=new DataView(table.buffer), p=0;
      list.forEach(function(f){
        table.set(f.name,p); p+=f.name.length;
        table.set(f.meta,p); p+=13;
        tv.setUint32(p,size,true); p+=4; size+=f.data.length;
      });
      return pipe(table,new CompressionStream('deflate')).then(function(ct){
        var head=new Uint8Array(HEAD), hv=new DataView(head.buffer), th=new Uint8Array(8), thv=new DataView(th.buffer);
        for(var i=0;i<MAGIC.length;i++) head[i]=MAGIC.charCodeAt(i);
        head.set(grfs[0].key,16);
        hv.setUint32(30,size,true); hv.setUint32(34,0,true); hv.setUint32(38,list.length+7,true); hv.setUint32(42,0x200,true);
        thv.setUint32(0,ct.length,true); thv.setUint32(4,table.length,true);
        return new Blob([head].concat(list.map(function(f){return f.data;}),[th,ct]),{type:'application/octet-stream'});
      });
    });
  };
  return {read:read,merge:merge};
})();
