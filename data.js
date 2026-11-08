/* GRF Edits content, extracted from ../index.html. Shared by every design model. */
window.GRF = {
 "total": 182,
 "author": "TEYS",
 "disclaimer": {
  "en": [
   {
    "text": [
     "Private repository for archiving .GRF edits.",
     "Edits that require paid access (ASTE) will not be uploaded.",
     "If you have any contribution to offer, feel free to send me an email."
    ]
   },
   {
    "text": [
     "Most of the files available here require GRFEditor (by Tokeiburu).",
     "How to merge:"
    ],
    "steps": [
     "Open GRF Editor.",
     "Click EDIT, then MERGE.",
     "In OLDER GRF, select data.grf",
     "In NEWER GRF, select the desired edit",
     "Press MERGE."
    ],
    "link": "https://github.com/Tokeiburu/GRFEditor"
   },
   {
    "text": [
     "For PRIVATE servers, it's recommended to use the data.ini method. It will probably look something like this:"
    ],
    "before": "[Data]\n0=PrivateServerName.grf\n1=data.grf\n2=RandomName1.grf\n3=RandomName2.grf\n4=RandomName3.grf",
    "after": "[Data]\n0=ChosenEdits.grf\n1=PrivateServerName.grf\n2=data.grf\n3=RandomName1.grf\n4=RandomName2.grf\n5=RandomName3.grf"
   }
  ],
  "pt-BR": [
   {
    "text": [
     "Repositório privado para arquivar edições de .GRF.",
     "Edições que exigem acesso pago (ASTE) não serão enviadas.",
     "Se quiser contribuir com algo, fique à vontade para me mandar um e-mail."
    ]
   },
   {
    "text": [
     "A maioria dos arquivos daqui requer o GRFEditor (by Tokeiburu).",
     "Como fazer o merge:"
    ],
    "steps": [
     "Abra o GRF Editor.",
     "Clique em EDIT e depois em MERGE.",
     "Em OLDER GRF, selecione data.grf",
     "Em NEWER GRF, selecione a edição desejada",
     "Clique em MERGE."
    ],
    "link": "https://github.com/Tokeiburu/GRFEditor"
   },
   {
    "text": [
     "Em servidores PRIVATES, é recomendado usar o método pelo data.ini. Provavelmente estará parecido com isso:"
    ],
    "before": "[Data]\n0=NomeDoServerPrivate.grf\n1=data.grf\n2=NomeAleatorio1.grf\n3=NomeAleatorio2.grf\n4=NomeAleatorio3.grf",
    "after": "[Data]\n0=EdicoesEscolhidas.grf\n1=NomeDoServerPrivate.grf\n2=data.grf\n3=NomeAleatorio1.grf\n4=NomeAleatorio2.grf\n5=NomeAleatorio3.grf"
   }
  ]
 },
 "sections": [
  {
   "id": "restart",
   "title": "Utilities",
   "parent": null,
   "note": "Tools and add-ons. Some might not work anymore.",
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "RO Cooldown Overlay",
       "href": "https://github.com/tassiocarlini/RO-Cooldown-Overlay",
       "desc": null,
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    }
   ]
  },
  {
   "id": "mapedits",
   "title": "Map edits",
   "parent": null,
   "note": "Many of these may be slightly out of date with new maps. Use at your own discretion.",
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "No Trees",
       "href": "http://www.mediafire.com/file/53d5gq27cqj0866/No_Trees.grf",
       "desc": "Removes all bushes and trees",
       "badge": null,
       "images": []
      },
      {
       "name": "No Water",
       "href": "http://www.mediafire.com/file/n8oe2qusqhiu2nr/No_Water.grf",
       "desc": "Removes all water in-game",
       "badge": null,
       "images": []
      },
      {
       "name": "Extra Zoom",
       "href": "http://www.mediafire.com/file/4g25cxjdnad2s63/Extra_Zoom.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Mini-maps",
       "href": "http://www.mediafire.com/file/eqo2u6lu9mfwlri/Mini-maps.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Mini-maps 2",
       "href": "http://www.mediafire.com/file/k5tn5npo3q9j8yv/Mini-maps2.grf",
       "desc": "Alternate set of mini-maps, many have gutterlines.",
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "mapedits-gray-flat-maps",
     "title": "Gray flat maps",
     "note": "No lines, no special shit.",
     "kind": "list",
     "items": [
      {
       "name": "Gray Map",
       "href": "http://www.mediafire.com/file/8ch87uhou2dgnxu/sak_gray.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Townless Gray Map",
       "href": "http://www.mediafire.com/file/czwyuicfa8qz2r7/sak_gray_townless.grf",
       "desc": "Towns have been removed and will look normal.",
       "badge": null,
       "images": []
      },
      {
       "name": "Blue Map",
       "href": "http://www.mediafire.com/file/qad5ync77d1xqcd/sak_blue.grf",
       "desc": "Gray map, but blue color",
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "mapedits-tiled-flat-maps",
     "title": "Tiled flat maps",
     "note": "GRF Editor can generate these, but here are some pregenerated ones. Unless made for your specific server, tile maps can have minor issues where a map differs. This is more common on private servers.",
     "kind": "list",
     "items": [
      {
       "name": "Tiled Map",
       "href": "http://www.mediafire.com/file/ro3fih19zv1t7r5/Tilemap.grf",
       "desc": "Gray colored with tiles. These can be semi-custom made. Color easily swapped.",
       "badge": null,
       "images": []
      },
      {
       "name": "Townless Tiled",
       "href": "http://www.mediafire.com/file/suk211qv4zi5sl9/Tilemap_Townless.grf",
       "desc": "Same as above without towns.",
       "badge": null,
       "images": []
      },
      {
       "name": "Tiled Map with Gutterlines",
       "href": "http://www.mediafire.com/file/wmnh61k5t3rnmep/Tilemap_Gutterlines.grf",
       "desc": "Gray colored with tiles. These can be semi-custom made. Color easily swapped.",
       "badge": null,
       "images": []
      },
      {
       "name": "Townless Tiled Map with Gutterlines",
       "href": "http://www.mediafire.com/file/r087feafesclci1/Tilemap_Gutterlines_Townless.grf",
       "desc": "Same as above without towns.",
       "badge": null,
       "images": []
      },
      {
       "name": "Tiled Map for NovaRO",
       "href": "http://www.mediafire.com/file/czv9mkebkkk1oeh/Tilemap_Nova.grf",
       "desc": "Tile map generated for NovaRO. May work elsewhere. Blue color.",
       "badge": null,
       "images": []
      },
      {
       "name": "Poring Pink Tiled Map for NovaRO",
       "href": "http://www.mediafire.com/file/ijow8qayndjngw6/Tilemap_Nova_Pink.grf",
       "desc": null,
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "mapedits-gato-cat-flat-maps",
     "title": "GATO Cat flat maps",
     "note": "An alternative, stylistic \"gray map\" from GATO Cat. Won't work with every map due to different RO versions.",
     "kind": "list",
     "items": [
      {
       "name": "Sunlight",
       "href": "https://www.mediafire.com/file/ac11kepeebwb9o9/Sunlight.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Moonlight",
       "href": "https://www.mediafire.com/file/rzb6ut4db7xlpix/Moonlight.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Niflheim",
       "href": "https://www.mediafire.com/file/hzybi8vk5d5estx/Niflheim.grf",
       "desc": null,
       "badge": null,
       "images": []
      }
     ],
     "figure": {
      "src": "assets/gato_flat_map.png",
      "w": 520,
      "h": 410,
      "alt": "Preview of the GATO Cat flat maps"
     }
    }
   ]
  },
  {
   "id": "effectedits",
   "title": "Effect edits",
   "parent": null,
   "note": null,
   "groups": [
    {
     "id": "effectedits-simplified",
     "title": "Simplified effects",
     "note": "Removes skill effects client side, keeping only the ones listed. Other effects may still show through shared files. If you use this with any other effect edit, merge this one first, or it will overwrite them.",
     "kind": "list",
     "items": [
      {
       "name": "Simplified Effects V5",
       "href": "http://www.mediafire.com/file/r87dhbjj1r1lnto/Simplified_Effects_V5.grf",
       "desc": "Keeps only: LP, Pneuma, SW, Sanc, Warp Portals, Traps, Strings, SP Song, Slow Song, CP/Loki's, Sight & Ruwach, Monk Spheres, Quagmire",
       "badge": "Merge first",
       "images": []
      },
      {
       "name": "Simplified Effects V6",
       "href": "http://www.mediafire.com/file/ripjyojqqcpm1hc/Simplified_Effects_V6.grf",
       "desc": "Keeps only: Warp Portals, Traps, Sight & Ruwach, Monk Spheres",
       "badge": "Merge first",
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "effect-tweaks",
     "title": "Individual effects",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Small Sight/Ruwach",
       "href": "http://www.mediafire.com/file/k01dun6ou7rsgj5/Small_Sight_Ruwach.grf",
       "desc": "Makes the sight/ruwach effect smaller",
       "badge": null,
       "images": []
      },
      {
       "name": "No Casting Circles",
       "href": "http://www.mediafire.com/file/ro5780u73q7h7g7/No_Casting_Circles.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "High Visibility Traps",
       "href": "http://www.mediafire.com/file/h85z1ly8d02v3ws/High_Visibility_Traps.grf",
       "desc": "Ankle Snare and SP trap are neon green.",
       "badge": null,
       "images": []
      },
      {
       "name": "High Visibility Traps 2",
       "href": "http://www.mediafire.com/file/ekz171unw14lde6/High_Visibility_Traps2.grf",
       "desc": "Ankle Snare and SP trap are white.",
       "badge": null,
       "images": []
      },
      {
       "name": "Rare MVP",
       "href": "http://www.mediafire.com/file/p8hbczt8rfbuzko/Rare_MVP.grf",
       "desc": "MVP effect says Rare now.",
       "badge": null,
       "images": []
      },
      {
       "name": "Skill Icon Traps",
       "href": "http://www.mediafire.com/file/yizzb03b9ttjr2k/Skill_Icon_Traps.grf",
       "desc": "Traps show as skill icons on the ground.",
       "badge": null,
       "images": [
        {
         "src": "assets/skill_icon_traps.jpg",
         "w": 96,
         "h": 86,
         "pixel": false
        }
       ]
      },
      {
       "name": "Subtle Aura",
       "href": "http://www.mediafire.com/file/suwd32n18aagx7b/Subtle_Aura.grf",
       "desc": "Not as blinding as most auras",
       "badge": null,
       "images": [
        {
         "src": "assets/subtle_aura.jpg",
         "w": 199,
         "h": 129,
         "pixel": false
        }
       ]
      },
      {
       "name": "Strip Effects Pack",
       "href": "http://www.mediafire.com/file/c6s3xn4iopchotq/Strip_Pack.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/strip_armor.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/strip_helm.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/strip_shield.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/strip_weapon.png",
         "w": 128,
         "h": 64,
         "pixel": false
        }
       ]
      },
      {
       "name": "Stat Boost Status Icons Pack",
       "href": "http://www.mediafire.com/file/8gj9o7zkbkcnm90/Stat_Status_Icons.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/agi_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        },
        {
         "src": "assets/dex_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        },
        {
         "src": "assets/int_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        },
        {
         "src": "assets/luk_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        },
        {
         "src": "assets/str_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        },
        {
         "src": "assets/vit_gogi.png",
         "w": 64,
         "h": 64,
         "pixel": true
        }
       ]
      },
      {
       "name": "Priest Effects Pack",
       "href": "http://www.mediafire.com/file/27r32tg5ka1hhv2/Priest_Pack.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/priest_pack_lexaeterna.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/priest_pack_lexdivina.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/priest_pack_suffragium.png",
         "w": 128,
         "h": 64,
         "pixel": false
        },
        {
         "src": "assets/priest_pack_impositio.png",
         "w": 128,
         "h": 64,
         "pixel": false
        }
       ]
      },
      {
       "name": "Priest Effects Pack 2",
       "href": "http://www.mediafire.com/file/ix2f46ebzku3qlj/Priest_Pack2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/priest_pack_lexdivina2.png",
         "w": 192,
         "h": 108,
         "pixel": false
        },
        {
         "src": "assets/priest_pack_suffragium2.png",
         "w": 192,
         "h": 108,
         "pixel": false
        },
        {
         "src": "assets/priest_pack_impositio2.png",
         "w": 192,
         "h": 108,
         "pixel": false
        }
       ]
      },
      {
       "name": "Simplified Soul Link",
       "href": "http://www.mediafire.com/file/eduuiirijm54msq/Simplified_Soul_Link.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/simplified_soul_link.png",
         "w": 153,
         "h": 94,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    },
    {
     "id": "stonecurse",
     "title": "Stone curse",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Stone Curse 1",
       "href": "http://www.mediafire.com/file/izmlpyflwyeu4e6/Stone_Curse1.grf",
       "desc": "Makes original effect more opaque and visible.",
       "badge": null,
       "images": []
      },
      {
       "name": "Stone Curse 2",
       "href": "http://www.mediafire.com/file/cyp2nk75wd857p1/Stone_Curse2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/stone_curse2.png",
         "w": 293,
         "h": 116,
         "pixel": false
        }
       ]
      },
      {
       "name": "Stone Curse 3",
       "href": "http://www.mediafire.com/file/oba8jpw815bphf4/Stone_Curse3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/stone_curse3.png",
         "w": 74,
         "h": 150,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    },
    {
     "id": "effect-more",
     "title": "Quagmire, hiding and falcons",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Block Quagmire",
       "href": "http://www.mediafire.com/file/rm18mj5gqofjood/Block_Quagmire.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/block_quagmire.png",
         "w": 324,
         "h": 150,
         "pixel": false
        }
       ]
      },
      {
       "name": "Labeled Quagmire",
       "href": "http://www.mediafire.com/file/t23o83nqvxj1voq/Labeled_Quagmire.grf/",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/labeled_quagmire.png",
         "w": 64,
         "h": 64,
         "pixel": false
        }
       ]
      },
      {
       "name": "Hide Arrow 1",
       "href": "http://www.mediafire.com/file/af5c94luif2qsoq/Hide_Arrow.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/hide_arrow.gif",
         "w": 45,
         "h": 111,
         "pixel": false
        }
       ]
      },
      {
       "name": "Hide Arrow 2",
       "href": "http://www.mediafire.com/file/q012zss5438s23g/Hide_Arrow2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/hide_arrow2.gif",
         "w": 40,
         "h": 115,
         "pixel": false
        }
       ]
      },
      {
       "name": "No Hide Effect",
       "href": "http://www.mediafire.com/file/o9lfrr2fc5p6l1y/Hide_Effectless.grf",
       "desc": "No dust, no arrow, just blank",
       "badge": null,
       "images": []
      },
      {
       "name": "Owl Falcon",
       "href": "http://www.mediafire.com/file/827qj129r4dqer1/Owl_Falcon.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/owl_falcon.gif",
         "w": 60,
         "h": 80,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    }
   ]
  },
  {
   "id": "songs",
   "title": "Song edits",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Short Songs Sound Effects",
       "href": "http://www.mediafire.com/file/cjkjd3jxb7nz00y/Short_Songs.grf",
       "desc": "Bard/Dancer songs shortened to a few seconds. Contains common woe songs.",
       "badge": null,
       "images": []
      },
      {
       "name": "Silent Songs",
       "href": "http://www.mediafire.com/file/vhseu05s6jvahyt/Silent_Songs.grf",
       "desc": "Bard/Dancer songs silenced.",
       "badge": null,
       "images": []
      },
      {
       "name": "Shrunken Gem Song",
       "href": "http://www.mediafire.com/file/dhxxn4cguglr18n/Shrunk_GemSong.grf",
       "desc": "Makes the gems in the effect smaller. Does not affect actual gem items.",
       "badge": null,
       "images": []
      },
      {
       "name": "Block Songs",
       "href": "http://www.mediafire.com/file/91qce2qvx0a7a7a/Block_Songs.grf",
       "desc": "Changes the images used for Bragi, Idun, Service for You, and Fortune's kiss.",
       "badge": null,
       "images": [
        {
         "src": "assets/block_bragi.png",
         "w": 99,
         "h": 36,
         "pixel": true
        },
        {
         "src": "assets/block_idun.png",
         "w": 99,
         "h": 36,
         "pixel": true
        },
        {
         "src": "assets/block_service.png",
         "w": 99,
         "h": 36,
         "pixel": true
        },
        {
         "src": "assets/block_kiss.png",
         "w": 99,
         "h": 36,
         "pixel": true
        }
       ]
      },
      {
       "name": "Alternative Fortune Kiss",
       "href": "http://www.mediafire.com/file/i5stdbpkn9g1r79/Alternative_FortuneKiss.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_fortunekiss.png",
         "w": 45,
         "h": 36,
         "pixel": true
        }
       ]
      },
      {
       "name": "Alternative Fortune Kiss 2",
       "href": "http://www.mediafire.com/file/369g5038k3dwx8i/Alternative_FortuneKiss2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_fortunekiss2.png",
         "w": 45,
         "h": 39,
         "pixel": true
        }
       ]
      }
     ],
     "figure": null
    }
   ]
  },
  {
   "id": "statuseffect",
   "title": "Status effects",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Text Status Effects",
       "href": "http://www.mediafire.com/file/76cj6oa1no0kn0y/Status_Effects.grf",
       "desc": "Overlays text on top of the character.",
       "badge": null,
       "images": [
        {
         "src": "assets/status-stun.gif",
         "w": 168,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-sleep.gif",
         "w": 198,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-frozen.gif",
         "w": 228,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-curse.gif",
         "w": 198,
         "h": 50,
         "pixel": true
        }
       ]
      },
      {
       "name": "Text Status Effects 2",
       "href": "http://www.mediafire.com/file/2bj9xx7dk8vx30z/Status_Effects2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/status-stun2.gif",
         "w": 198,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-sleep2.gif",
         "w": 198,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-frozen2.gif",
         "w": 228,
         "h": 50,
         "pixel": true
        },
        {
         "src": "assets/status-curse2.gif",
         "w": 198,
         "h": 50,
         "pixel": true
        }
       ]
      },
      {
       "name": "Text Status Effects 3",
       "href": "http://www.mediafire.com/file/288q4ljclb4uqdq/Status_Effects3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/status-stun3.gif",
         "w": 124,
         "h": 44,
         "pixel": true
        },
        {
         "src": "assets/status-sleep3.gif",
         "w": 140,
         "h": 46,
         "pixel": true
        },
        {
         "src": "assets/status-frozen3.gif",
         "w": 140,
         "h": 42,
         "pixel": true
        }
       ]
      },
      {
       "name": "Text Status Effects 4",
       "href": "http://www.mediafire.com/file/f3o64njyekviea8/Status_Effects4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/status-stun4.gif",
         "w": 50,
         "h": 66,
         "pixel": false
        },
        {
         "src": "assets/status-sleep4.gif",
         "w": 62,
         "h": 84,
         "pixel": false
        },
        {
         "src": "assets/status-frozen4.gif",
         "w": 104,
         "h": 121,
         "pixel": false
        },
        {
         "src": "assets/status-snare4.gif",
         "w": 80,
         "h": 89,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    },
    {
     "id": "statuseffect-status-effect-emotes",
     "title": "Status effect emotes",
     "note": "You cannot use these at the same time, they will overwrite each other as they are editting the same file. While they can be \"merged\", that requires much more work than I will provide here atm. Also, these will affect the actual emotes when normally used in game.",
     "kind": "list",
     "items": [
      {
       "name": "Silence",
       "href": "http://www.mediafire.com/file/8qbwjvhxdw14kq9/emotion_silence.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/emotion_silence.gif",
         "w": 124,
         "h": 68,
         "pixel": true
        }
       ]
      },
      {
       "name": "Silence 2",
       "href": "http://www.mediafire.com/file/5p6l27y7e6njl9w/Emotion_Silence2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/emotion_silence2.gif",
         "w": 124,
         "h": 50,
         "pixel": true
        }
       ]
      },
      {
       "name": "Confusion",
       "href": "http://www.mediafire.com/file/h4dj239ibygdd1c/emotion_confusion.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/emotion_confusion.gif",
         "w": 246,
         "h": 66,
         "pixel": true
        }
       ]
      }
     ],
     "figure": null
    }
   ]
  },
  {
   "id": "tarotcard",
   "title": "Tarot cards",
   "parent": "Effect edits",
   "note": "Certain cards are completely invisible.",
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Tarot Cards",
       "href": "http://www.mediafire.com/file/rohrrekx8hbda2x/Tarot_Cards.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 2",
       "href": "http://www.mediafire.com/file/63r0c68e18tt71z/Tarot_Cards2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards2.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 3",
       "href": "http://www.mediafire.com/file/3d41z2s763r8w77/Tarot_Cards3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards3.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 4",
       "href": "http://www.mediafire.com/file/1zctnnzx0lz0mzd/Tarot_Cards4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards4.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 5",
       "href": "http://www.mediafire.com/file/xdce2aa2b3gmxr8/Tarot_Cards5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards5.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 6",
       "href": "http://www.mediafire.com/file/97tsgcnzodstj34/Tarot_Cards6.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards6.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 7",
       "href": "http://www.mediafire.com/file/it3cmadv8o2asbz/Tarot_Cards7.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards7.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 8",
       "href": "http://www.mediafire.com/file/zrp234roz7qb4mo/Tarot_Cards8.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards8.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 9",
       "href": "http://www.mediafire.com/file/aqtbd39a0o6jtbk/Tarot_Cards9.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards9.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Tarot Cards 10",
       "href": "http://www.mediafire.com/file/1qsudh41d9w8ih6/Tarot_Cards10.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/tarot_cards10.gif",
         "w": 85,
         "h": 170,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      103,
      170
     ]
    }
   ]
  },
  {
   "id": "pneuma",
   "title": "Pneuma",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Pneuma",
       "href": "http://www.mediafire.com/file/5y3yqg5qn35a0f6/Pneuma.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/pneuma.png",
         "w": 92,
         "h": 127,
         "pixel": false
        }
       ]
      },
      {
       "name": "Pneuma 2",
       "href": "http://www.mediafire.com/file/qtgbfe2kfbtdgw2/Pneuma2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/pneuma2.png",
         "w": 193,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Pneuma 3",
       "href": "http://www.mediafire.com/file/b4oaz7elnz78m05/Pneuma3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/pneuma3.png",
         "w": 177,
         "h": 165,
         "pixel": false
        }
       ]
      },
      {
       "name": "Pneuma 4",
       "href": "http://www.mediafire.com/file/dd7sxkyw2xdoahp/Pneuma4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/pneuma4.png",
         "w": 112,
         "h": 170,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      211,
      170
     ]
    }
   ]
  },
  {
   "id": "spiderweb",
   "title": "Spiderweb",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Spiderweb",
       "href": "http://www.mediafire.com/file/gzfm8agq0v1kq4d/Spiderweb.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 2",
       "href": "http://www.mediafire.com/file/9ni96ndhizhuiev/Spiderweb2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb2.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 3",
       "href": "http://www.mediafire.com/file/dvckf8kmoeeviee/Spiderweb3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb3.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 4",
       "href": "http://www.mediafire.com/file/du7apfko6uq1a27/Spiderweb4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb4.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 5",
       "href": "http://www.mediafire.com/file/swhvqcwnveq6thc/Spiderweb5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb5.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 6",
       "href": "http://www.mediafire.com/file/1f88bojqq2kzc46/Spiderweb6.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb6.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 7",
       "href": "http://www.mediafire.com/file/ydqqlf4zsddc6gv/Spiderweb7.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb7.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      },
      {
       "name": "Spiderweb 8",
       "href": "http://www.mediafire.com/file/7x194agioevrgzr/Spiderweb8.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/spiderweb8.png",
         "w": 219,
         "h": 170,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      237,
      170
     ]
    }
   ]
  },
  {
   "id": "lexaeterna",
   "title": "Lex Aeterna",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Lex Aeterna 1",
       "href": "http://www.mediafire.com/file/c11t1mcencfzreu/Lex_Aeterna1.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lexaeterna1.png",
         "w": 121,
         "h": 77,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lex Aeterna 2",
       "href": "http://www.mediafire.com/file/3865c4l8ogal8ba/Lex_Aeterna2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lexaeterna2.png",
         "w": 121,
         "h": 77,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lex Aeterna 3",
       "href": "http://www.mediafire.com/file/rrfs134w4y9dslt/Lex_Aeterna3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lexaeterna3.png",
         "w": 121,
         "h": 77,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lex Aeterna 4",
       "href": "http://www.mediafire.com/file/u7mjryx77g3eydg/Lex_Aeterna4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lexaeterna4.png",
         "w": 121,
         "h": 77,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lex Aeterna 5",
       "href": "http://www.mediafire.com/file/keedoz6vieai05k/Lex_Aeterna5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lexaeterna5.png",
         "w": 121,
         "h": 77,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      139,
      77
     ]
    }
   ]
  },
  {
   "id": "dispell",
   "title": "Dispell",
   "parent": "Effect edits",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Dispell 1",
       "href": "http://www.mediafire.com/file/r2pq2mucemtzzd8/Dispell1.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell1.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 2",
       "href": "http://www.mediafire.com/file/gvyxajuymw19e3b/Dispell2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell2.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 3",
       "href": "http://www.mediafire.com/file/lycxkk8l2jcig2o/Dispell3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell3.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 4",
       "href": "http://www.mediafire.com/file/b481yckzz9tah3q/Dispell4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell4.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 5",
       "href": "http://www.mediafire.com/file/rxmax99rb3rmm7j/Dispell5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell5.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 6",
       "href": "http://www.mediafire.com/file/43qcjt0onrvvsg1/Dispell6.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell6.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 7",
       "href": "http://www.mediafire.com/file/v030nz1j9zhn4iq/Dispell7.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell7.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 8",
       "href": "http://www.mediafire.com/file/kp2v65wep6ygx5x/Dispell8.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell8.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 9",
       "href": "http://www.mediafire.com/file/rsz205mqb042z58/Dispell9.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell9.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 10",
       "href": "http://www.mediafire.com/file/c0e527czbgq99g6/Dispell10.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell10.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 11",
       "href": "http://www.mediafire.com/file/10ootxm217hxh4c/Dispell11.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell11.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 12",
       "href": "http://www.mediafire.com/file/3qaqp4e135diyx3/Dispell12.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell12.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 13",
       "href": "http://www.mediafire.com/file/l8cq18d657mxf3m/Dispell13.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell13.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 14",
       "href": "http://www.mediafire.com/file/y58ozomppdhfimx/Dispell14.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell14.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 15",
       "href": "http://www.mediafire.com/file/74w2bn59z1ndy7b/Dispell15.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell15.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      },
      {
       "name": "Dispell 16",
       "href": "http://www.mediafire.com/file/7c1r71g910zcc13/Dispell16.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/dispell16.jpg",
         "w": 200,
         "h": 100,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      218,
      100
     ]
    }
   ]
  },
  {
   "id": "miscedits",
   "title": "Miscellaneous",
   "parent": null,
   "note": null,
   "groups": [
    {
     "id": "misc-characters",
     "title": "Characters, pets and monsters",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "No Hats",
       "href": "http://www.mediafire.com/file/r2ia0n81ra6nl71/No_Hats.grf",
       "desc": "No hats will be displayed on any character.",
       "badge": null,
       "images": []
      },
      {
       "name": "No Pet and Monster Talk",
       "href": "http://www.mediafire.com/file/c12gjnf2dddulad/No_Pet_Monster_Talk.grf",
       "desc": "No more chat spam!",
       "badge": null,
       "images": []
      },
      {
       "name": "Baby Warg",
       "href": "http://www.mediafire.com/file/9n32t9gp26a3g35/babbywarg.grf",
       "desc": "Shrinks Warg to 50% size.",
       "badge": null,
       "images": []
      },
      {
       "name": "Baby Warg 2",
       "href": "http://www.mediafire.com/file/d8yvaonyvif2pes/babbywargs.grf",
       "desc": "More warg shrinkage. More complete.",
       "badge": null,
       "images": []
      },
      {
       "name": "Baby falcons",
       "href": "http://www.mediafire.com/file/7k0u545kn6mpar8/babbyfalcons.grf",
       "desc": "Small falcons",
       "badge": null,
       "images": []
      },
      {
       "name": "Invisible Sprite Marble",
       "href": "http://www.mediafire.com/file/eqinxpoabp1wckd/Invisible_Sprite_Marble.grf",
       "desc": "Removes the Cat Ghosts from your character.",
       "badge": null,
       "images": []
      },
      {
       "name": "Big Tombstone",
       "href": "http://www.mediafire.com/file/lzw1e51m410vvpp/Big_Tombstone.grf",
       "desc": "Makes tombstone bigger.",
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "misc-damage",
     "title": "Damage numbers",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Tiny Damage Numbers",
       "href": "http://www.mediafire.com/file/dg5ce50hpb57ygh/Tiny_Damage_Numbers.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "No Damage Numbers",
       "href": "http://www.mediafire.com/file/e140mog93b4bsjj/No_Damage_Numbers.grf",
       "desc": null,
       "badge": null,
       "images": []
      },
      {
       "name": "Rainbow Damage Numbers",
       "href": "http://www.mediafire.com/file/8lru65973x3s9hi/Rainbow_Damage_Numbers.grf",
       "desc": null,
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "misc-miss",
     "title": "Miss text",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Small Miss Text",
       "href": "http://www.mediafire.com/file/8pjvtma9d3d6d5a/Miss_Text_Small.grf",
       "desc": "Text when missing is smaller.",
       "badge": null,
       "images": []
      },
      {
       "name": "Dots Miss Text",
       "href": "http://www.mediafire.com/file/todlgj6rqm39gx8/Miss_Text_Dots.grf",
       "desc": "Text when missing is \"....\".",
       "badge": null,
       "images": []
      },
      {
       "name": "Fail Miss Text",
       "href": "http://www.mediafire.com/file/mgl3tvs6333icci/Miss_Text_Fail.grf",
       "desc": "Text when missing is \"FAIL\".",
       "badge": null,
       "images": []
      },
      {
       "name": "Nope Miss Text",
       "href": "http://www.mediafire.com/file/p6x5651hclddpxa/Miss_Text_Nope.grf",
       "desc": "Text when missing is \"NOPE\".",
       "badge": null,
       "images": []
      },
      {
       "name": "Blank Miss Text",
       "href": "http://www.mediafire.com/file/vnd7vblwyb8hhm8/Miss_Text_Blank.grf",
       "desc": "No miss text at all.",
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    },
    {
     "id": "misc-interface",
     "title": "Interface",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Square Menu",
       "href": "http://www.mediafire.com/file/m4vyb7cwmku1d65/SquareMenu.grf",
       "desc": "Uses the new menu icons from kro under the exp window.",
       "badge": null,
       "images": [
        {
         "src": "assets/menu.png",
         "w": 215,
         "h": 113,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    },
    {
     "id": "misc-mvps",
     "title": "MVPs and WoE",
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "Big MVPs (lua)",
       "href": "http://www.mediafire.com/file/gscef2uv8rd1cc1/Big_MVPs.grf",
       "desc": "Makes certain MVPs/mini-bosses bigger. Uses a lua file to adjust bio3 monsters. May cause errors on servers with custom lua files.",
       "badge": null,
       "images": []
      },
      {
       "name": "Big MVPs (lua)",
       "href": "http://www.mediafire.com/file/ll7o66dx70lq1df/Big_MVPs_lualess.grf",
       "desc": "Makes certain MVPs/mini-bosses bigger. Has no lua files, should work on majority of servers.",
       "badge": null,
       "images": []
      },
      {
       "name": "Arrowed MVPs",
       "href": "http://www.mediafire.com/file/4t4u4hjf8fjju94/Arrowed_MVPs.grf",
       "desc": "Makes certain MVPs/mini-bosses have a giant arrow over them.",
       "badge": null,
       "images": []
      },
      {
       "name": "Small Slaves",
       "href": "http://www.mediafire.com/file/cs5axeclc61l14o/Small_Slaves.grf",
       "desc": "Shrinks the slaves of certain MVPs or mini-bosses.",
       "badge": null,
       "images": []
      },
      {
       "name": "Big MVPs with elements (no lua)",
       "href": "https://www.mediafire.com/file/vgrm26cfcl9466r/Big_MVPs_with_Elements_lualess.grf/file",
       "desc": "Big MVPs with their element. Lua-less. By Ed",
       "badge": null,
       "images": []
      },
      {
       "name": "No Animation Monsters",
       "href": "http://www.mediafire.com/file/79lt55whyjgwjuj/No_Animation_Monsters.grf",
       "desc": "Monsters have no animations. If you're going to use the MVP edit too, you'll need to use that one second.",
       "badge": null,
       "images": []
      },
      {
       "name": "Small WoE-Stones",
       "href": "http://www.mediafire.com/file/ckpatl1sygxxw29/Small_WoE_Stones.grf",
       "desc": "Shrinks flags, stones, emps, etc. Prevents players hiding under them. Includes alternate barricade below.",
       "badge": null,
       "images": []
      },
      {
       "name": "Alternate Barricade",
       "href": "http://www.mediafire.com/file/ka5xsofnh38wh8n/Alternate_Barricade.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alternate_barricade.gif",
         "w": 52,
         "h": 54,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null
    },
    {
     "id": "miscedits-grids",
     "title": "Grids",
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Alternate Grid",
       "href": "http://www.mediafire.com/file/lbbs6rd72r6y945/Alternate_Grid.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_grid.png",
         "w": 138,
         "h": 140,
         "pixel": false
        }
       ]
      },
      {
       "name": "Alternate Grid 2",
       "href": "http://www.mediafire.com/file/e6m69pleeavn8zo/Alternate_Grid2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_grid2.png",
         "w": 138,
         "h": 140,
         "pixel": false
        }
       ]
      },
      {
       "name": "Alternate Grid 3",
       "href": "http://www.mediafire.com/file/qqsvhxta65pye3z/Alternate_Grid3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_grid3.png",
         "w": 138,
         "h": 140,
         "pixel": false
        }
       ]
      },
      {
       "name": "Alternate Grid 4",
       "href": "http://www.mediafire.com/file/z7bq96tj85zjk3y/Alternate_Grid4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_grid4.png",
         "w": 138,
         "h": 140,
         "pixel": false
        }
       ]
      },
      {
       "name": "Alternate Grid 5",
       "href": "http://www.mediafire.com/file/7pe9i8oh4ap27s4/Alternate_Grid5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/alt_grid5.png",
         "w": 138,
         "h": 140,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      166,
      140
     ]
    },
    {
     "id": "miscedits-lock-on-markers",
     "title": "Lock-on markers",
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Lockon",
       "href": "http://www.mediafire.com/file/6dr1yvd7x87kyvc/Lockon.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lockon 2",
       "href": "http://www.mediafire.com/file/6mhmhoymssdypsh/Lockon2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon2.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lockon 3",
       "href": "http://www.mediafire.com/file/wnvewgxsmn9cvla/Lockon3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon3.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lockon 4",
       "href": "http://www.mediafire.com/file/62z8rzd1k28zkt3/Lockon4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon4.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lockon 5",
       "href": "http://www.mediafire.com/file/471ljq203g913ke/Lockon5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon5.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      },
      {
       "name": "Lockon 6",
       "href": "http://www.mediafire.com/file/rhl3paflicr9pbf/Lockon6.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/lockon6.png",
         "w": 128,
         "h": 128,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      146,
      128
     ]
    }
   ]
  },
  {
   "id": "bigcards",
   "title": "Big card sprites",
   "parent": null,
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Big Card",
       "href": "http://www.mediafire.com/file/03fy0xc6n935wql/Big_Card.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 2",
       "href": "http://www.mediafire.com/file/ibumg9o8s3bwrur/Big_Card2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card2.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 3",
       "href": "http://www.mediafire.com/file/t550c4nx8h3yxmt/Big_Card3.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card3.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 4",
       "href": "http://www.mediafire.com/file/rc5aai7j7ynu7x9/Big_Card4.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card4.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 5",
       "href": "http://www.mediafire.com/file/p0lvd2d9i2e2blt/Big_Card5.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card5.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 6",
       "href": "http://www.mediafire.com/file/xplweo3dpxmmo6l/Big_Card6.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card6.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 7",
       "href": "http://www.mediafire.com/file/7wt6eqqd72nyg2h/Big_Card7.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card7.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 8",
       "href": "http://www.mediafire.com/file/kojo34i8ls6qtan/Big_Card8.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card8.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 9",
       "href": "http://www.mediafire.com/file/u4ucgc5vdi6m95p/Big_Card9.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card9.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 10",
       "href": "http://www.mediafire.com/file/e6enxegilla0s9l/Big_Card10.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card10.gif",
         "w": 143,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 11",
       "href": "http://www.mediafire.com/file/io7iidmlre86ukv/Big_Card11.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card11.gif",
         "w": 150,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 12",
       "href": "http://www.mediafire.com/file/qbf2hhbqkfhfywu/Big_Card12.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card12.gif",
         "w": 145,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Big Card 13",
       "href": "http://www.mediafire.com/file/02t677aal8u7osk/Big_Card13.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/big_card13.gif",
         "w": 146,
         "h": 110,
         "pixel": true
        }
       ]
      },
      {
       "name": "Super Big Card",
       "href": "http://www.mediafire.com/file/xne21w0irzs2dot/Super_Big_Card.grf/",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/super_big_card.gif",
         "w": 150,
         "h": 110,
         "pixel": false
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      168,
      110
     ]
    }
   ]
  },
  {
   "id": "cursors",
   "title": "Cursors",
   "parent": null,
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Black",
       "href": "http://www.mediafire.com/file/s43tmxd5ptpd1aw/Cursor_Black.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_black.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Blue",
       "href": "http://www.mediafire.com/file/vpa21i273eof1a1/Cursor_Blue.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_blue.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Blue 2",
       "href": "http://www.mediafire.com/file/1j36wjqfyyb264q/Cursor_Blue2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_blue2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Dark Purple",
       "href": "http://www.mediafire.com/file/l0jm2rymrvbj1q1/Cursor_Dark_Purple.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_dark_purple.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Full green",
       "href": "http://www.mediafire.com/file/46ppd4bn0ccjnb2/Cursor_Full_Green.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_full_green.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Green",
       "href": "http://www.mediafire.com/file/31ktxbu7rtjbr7k/Cursor_Green.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_green.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Green 2",
       "href": "http://www.mediafire.com/file/57uadvrskrucqxn/Cursor_Green2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_green2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Light Blue",
       "href": "http://www.mediafire.com/file/bm683s43osv2v4t/Cursor_Light_Blue.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_light_blue.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Orange",
       "href": "http://www.mediafire.com/file/mtrh70o9c1j5bt2/Cursor_Orange.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_orange.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Pink",
       "href": "http://www.mediafire.com/file/d5qapek7o1gozod/Cursor_Pink.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_pink.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Purple",
       "href": "http://www.mediafire.com/file/ocxolk2j5kkk1ax/Cursor_Purple.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_purple.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Purple 2",
       "href": "http://www.mediafire.com/file/cz14oeckr1pto23/Cursor_Purple2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_purple2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Red",
       "href": "http://www.mediafire.com/file/hzdad6fdbz649v2/Cursor_Red.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_red.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Red 2",
       "href": "http://www.mediafire.com/file/7dwml6m7asq0il3/Cursor_Red2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_red2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Teal",
       "href": "http://www.mediafire.com/file/6ea3xremcrrhg7s/Cursor_Teal.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_teal.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Violet",
       "href": "http://www.mediafire.com/file/07m4v1n1bcnpqcm/Cursor_Violet.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_violet.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "White",
       "href": "http://www.mediafire.com/file/nv1nvus5g4g1h4c/Cursor_White.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_white.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "White 2",
       "href": "http://www.mediafire.com/file/96xz9yybzzq50he/Cursor_White2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_white2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Yellow",
       "href": "http://www.mediafire.com/file/fc6im5aupugh6vs/Cursor_Yellow.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/cursor_yellow.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      92,
      62
     ]
    }
   ]
  },
  {
   "id": "cursors2",
   "title": "New kRO cursors",
   "parent": "Cursors",
   "note": null,
   "groups": [
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "grid",
     "items": [
      {
       "name": "Black",
       "href": "http://www.mediafire.com/file/2xat3k4c6sn9tx1/CursorNew_Black.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Black.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Blue",
       "href": "http://www.mediafire.com/file/rn55o8iaay7bntd/CursorNew_Blue.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Blue.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Blue 2",
       "href": "http://www.mediafire.com/file/jp3e5nxq6ut3aw9/CursorNew_Blue2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Blue2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Dark Purple",
       "href": "http://www.mediafire.com/file/gusybp7sb4m00xf/CursorNew_Dark_Purple.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Dark_Purple.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Green",
       "href": "http://www.mediafire.com/file/1kczh29fn1hobq1/CursorNew_Green.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Green.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Light Blue",
       "href": "http://www.mediafire.com/file/0nag11y652ff37z/CursorNew_Light_Blue.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Light_Blue.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Orange",
       "href": "http://www.mediafire.com/file/m4v3v0faknkkziy/CursorNew_Orange.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Orange.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Pink",
       "href": "http://www.mediafire.com/file/yxcmfm258frsaa8/CursorNew_Pink.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Pink.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Pink 2",
       "href": "http://www.mediafire.com/file/mf6cywyq12vkob7/CursorNew_Pink2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Pink2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Purple",
       "href": "http://www.mediafire.com/file/yo4jn9pn2nu6ovz/CursorNew_Purple.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Purple.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Red",
       "href": "http://www.mediafire.com/file/bjdculjf3unufeq/CursorNew_Red.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Red.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Red 2",
       "href": "http://www.mediafire.com/file/mjau8vs2wpma2rh/CursorNew_Red2.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Red2.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Teal",
       "href": "http://www.mediafire.com/file/6745j4fodk6456d/CursorNew_Teal.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Teal.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Violet",
       "href": "http://www.mediafire.com/file/0impc3ksu81cr14/CursorNew_Violet.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Violet.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "White",
       "href": "http://www.mediafire.com/file/xure4qnaa5hda6g/CursorNew_White.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_White.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      },
      {
       "name": "Yellow",
       "href": "http://www.mediafire.com/file/31biyq1hdoh1c4p/CursorNew_Yellow.grf",
       "desc": null,
       "badge": null,
       "images": [
        {
         "src": "assets/CursorNew_Yellow.gif",
         "w": 44,
         "h": 62,
         "pixel": true
        }
       ]
      }
     ],
     "figure": null,
     "tile": [
      92,
      62
     ]
    },
    {
     "id": null,
     "title": null,
     "note": null,
     "kind": "list",
     "items": [
      {
       "name": "White Cursor w/ Box Around Target",
       "href": "http://www.mediafire.com/file/0607ac6sd1fe14p/Cursor_White_Box.grf",
       "desc": null,
       "badge": null,
       "images": []
      }
     ],
     "figure": null
    }
   ]
  }
 ]
};
