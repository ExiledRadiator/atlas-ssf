(function(e){function a(a){for(var s,n,o=a[0],u=a[1],d=a[2],m=0,p=[];m<o.length;m++)n=o[m],t[n]&&p.push(t[n][0]),t[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(a);while(p.length)p.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,a=0;a<i.length;a++){for(var r=i[a],s=!0,o=1;o<r.length;o++){var u=r[o];0!==t[u]&&(s=!1)}s&&(i.splice(a--,1),e=n(n.s=r[0]))}return e}var s={},t={app:0},i=[];function n(a){if(s[a])return s[a].exports;var r=s[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,a,r){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)n.d(r,s,function(a){return e[a]}.bind(null,s));return r},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/atlas-ssf/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=a,o=o.slice();for(var d=0;d<o.length;d++)a(o[d]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,a,r){e.exports=r("56d7")},"034f":function(e,a,r){"use strict";var s=r("64a9"),t=r.n(s);t.a},"29c4":function(e,a,r){"use strict";var s=r("bea4"),t=r.n(s);t.a},"3e6a":function(e,a,r){"use strict";var s=r("ab17"),t=r.n(s);t.a},4510:function(e,a,r){"use strict";var s=r("b585"),t=r.n(s);t.a},"56d7":function(e,a,r){"use strict";r.r(a);r("cadf"),r("551c"),r("097d");var s=r("2b0e"),t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"app"}},[r("CharacterSelection",{on:{"items-loaded":e.updateItems}}),r("AtlasProgress",{attrs:{items:e.items,mapCounts:e.mapCounts}})],1)])},i=[],n=r("f499"),o=r.n(n),u=(r("ac6a"),r("b6d0")),d=r.n(u),c=r("774e"),m=r.n(c),p=(r("7f7f"),r("6762"),r("2fdb"),r("7514"),r("6c7b"),function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",[r("a",{staticClass:"big-link",on:{click:e.toggleAllHidden}},[e._v(e._s(e.hideAll?"Unhide all":"Hide all"))])]),r("div",{staticClass:"tiers"},e._l(e.tiers,function(a){return r("div",{staticClass:"tier",class:{shaded:e.shadeBackground(a.number)}},[r("div",[r("h3",[e._v("Tier "+e._s(a.number)+" ")]),r("a",{on:{click:function(r){e.toggleClicked(a.number)}}},[e.allChecked[a.number-1]?r("span",[e._v("Uncheck all")]):r("span",[e._v("Check all")])]),r("a",{on:{click:function(r){e.toggleHidden(a.number)}}},[e.tierHidden[a.number-1]?r("span",[e._v("Unhide")]):r("span",[e._v("Hide")])])]),r("table",{class:{hidden:e.tierHidden[a.number-1]}},[r("thead",[r("th",{staticClass:"checkbox centered"},[e._v("Have")]),r("th",{staticClass:"checkbox centered"},[e._v("Compl.")]),r("th",{staticClass:"checkbox centered"},[e._v("Bonused")]),r("th",{staticClass:"map left"},[e._v("Map")]),r("th",{staticClass:"left"},[e._v(e._s(a.notes))])]),r("tbody",e._l(e.mapsInTier(a.number),function(s){return r("tr",{key:s.id},[r("td",{staticClass:"checkbox centered",class:"tier-"+a.number},[r("input",{attrs:{type:"checkbox",id:"have-"+s.id},domProps:{checked:e.have[s.id]},on:{input:e.updateHave}})]),r("td",{staticClass:"checkbox centered",class:"tier-"+a.number},[r("input",{attrs:{type:"checkbox",id:"completed-"+s.id},domProps:{checked:e.completed[s.id]},on:{input:e.updateCompleted}})]),r("td",{staticClass:"checkbox centered",class:"tier-"+a.number},[r("input",{attrs:{type:"checkbox",id:"bonused-"+s.id},domProps:{checked:e.bonused[s.id]},on:{input:e.updateBonused}})]),r("td",{staticClass:"map left",class:{done:e.completed[s.id]}},[e._v(e._s(s.name))]),r("td",{staticClass:"left",class:{done:e.have[s.id]}},[s.upgradesFrom.length>0?r("div",e._l(s.upgradesFrom,function(a,t){return r("MapDisplay",{attrs:{length:s.upgradesFrom.length,index:t,mapName:a,hasMap:e.hasMap(a),mapCount:e.mapCount(a)}})}),1):e._e(),e.completed[s.id]?r("div"):e._e()])])}),0)])])}),0)])}),l=[],g=r("e814"),h=r.n(g),f=(r("28a5"),[{id:0,name:"Atoll",tier:1,upgradesFrom:[],upgradesTo:["Arid Lake","Iceberg"],isUnique:!1},{id:1,name:"Channel",tier:1,upgradesFrom:[],upgradesTo:["Armoury","Thicket"],isUnique:!1},{id:2,name:"Flooded Mine",tier:1,upgradesFrom:[],upgradesTo:["Dungeon"],isUnique:!1},{id:3,name:"Ramparts",tier:1,upgradesFrom:[],upgradesTo:["Pen"],isUnique:!1},{id:4,name:"Arid Lake",tier:2,upgradesFrom:["Atoll"],upgradesTo:["Fungal Hollow","Grotto"],isUnique:!1},{id:5,name:"Iceberg",tier:2,upgradesFrom:["Atoll"],upgradesTo:["Grotto","Cursed Crypt"],isUnique:!1},{id:6,name:"Armoury",tier:2,upgradesFrom:["Channel"],upgradesTo:["Graveyard","Excavation"],isUnique:!1},{id:7,name:"Thicket",tier:2,upgradesFrom:["Channel"],upgradesTo:["Desert","Excavation"],isUnique:!1},{id:8,name:"Dungeon",tier:2,upgradesFrom:["Flooded Mine"],upgradesTo:["Shipyard","Peninsula"],isUnique:!1},{id:9,name:"Pen",tier:2,upgradesFrom:["Ramparts"],upgradesTo:["Bone Crypt","Cage"],isUnique:!1},{id:10,name:"Fungal Hollow",tier:3,upgradesFrom:["Arid Lake"],upgradesTo:["Marshes","Lighthouse"],isUnique:!1},{id:11,name:"Grotto",tier:3,upgradesFrom:["Arid Lake","Iceberg"],upgradesTo:["Lighthouse"],isUnique:!1},{id:12,name:"Cursed Crypt",tier:3,upgradesFrom:["Iceberg"],upgradesTo:["Crater"],isUnique:!1},{id:13,name:"Graveyard",tier:3,upgradesFrom:["Armoury"],upgradesTo:["Glacier"],isUnique:!1},{id:14,name:"Excavation",tier:3,upgradesFrom:["Armoury","Thicket"],upgradesTo:["Glacier","Strand"],isUnique:!1},{id:15,name:"Desert",tier:3,upgradesFrom:["Thicket"],upgradesTo:["Spider Lair","Strand"],isUnique:!1},{id:16,name:"Shipyard",tier:3,upgradesFrom:["Dungeon"],upgradesTo:["Lookout","Courtyard"],isUnique:!1},{id:17,name:"Peninsula",tier:3,upgradesFrom:["Dungeon"],upgradesTo:["Courtyard"],isUnique:!1},{id:18,name:"Bone Crypt",tier:3,upgradesFrom:["Pen"],upgradesTo:["Barrows","Beach"],isUnique:!1},{id:19,name:"Cage",tier:3,upgradesFrom:["Pen"],upgradesTo:["Beach"],isUnique:!1},{id:20,name:"Marshes",tier:4,upgradesFrom:["Fungal Hollow"],upgradesTo:["Underground Sea","Jungle Valley"],isUnique:!1},{id:21,name:"Lighthouse",tier:4,upgradesFrom:["Fungal Hollow","Grotto"],upgradesTo:["Jungle Valley"],isUnique:!1},{id:22,name:"Crater",tier:4,upgradesFrom:["Cursed Crypt"],upgradesTo:["Jungle Valley","Mausoleum"],isUnique:!1},{id:23,name:"Glacier",tier:4,upgradesFrom:["Graveyard","Excavation"],upgradesTo:["Alleyways"],isUnique:!1},{id:24,name:"Strand",tier:4,upgradesFrom:["Desert","Excavation"],upgradesTo:["Maze"],isUnique:!1},{id:25,name:"Spider Lair",tier:4,upgradesFrom:["Desert"],upgradesTo:["Maze","Port"],isUnique:!1},{id:26,name:"Lookout",tier:4,upgradesFrom:["Shipyard"],upgradesTo:["Residence"],isUnique:!1},{id:27,name:"Courtyard",tier:4,upgradesFrom:["Shipyard","Peninsula"],upgradesTo:["Gardens"],isUnique:!1},{id:28,name:"Barrows",tier:4,upgradesFrom:["Bone Crypt"],upgradesTo:["Vaal Pyramid"],isUnique:!1},{id:29,name:"Beach",tier:4,upgradesFrom:["Bone Crypt","Cage"],upgradesTo:["Vaal Pyramid","City Square"],isUnique:!1},{id:30,name:"Underground Sea",tier:5,upgradesFrom:["Marshes"],upgradesTo:["Volcano"],isUnique:!1},{id:31,name:"Jungle Valley",tier:5,upgradesFrom:["Marshes","Crater"],upgradesTo:["Precinct"],isUnique:!1},{id:32,name:"Mausoleum",tier:5,upgradesFrom:["Crater"],upgradesTo:["Precinct","Sulphur Vents"],isUnique:!1},{id:33,name:"Alleyways",tier:5,upgradesFrom:["Glacier"],upgradesTo:["Ashen Wood"],isUnique:!1},{id:34,name:"Maze",tier:5,upgradesFrom:["Strand","Spider Lair"],upgradesTo:["Academy"],isUnique:!1},{id:35,name:"Port",tier:5,upgradesFrom:["Spider Lair"],upgradesTo:["Academy","Haunted Mansion"],isUnique:!1},{id:36,name:"Residence",tier:5,upgradesFrom:["Lookout"],upgradesTo:["Phantasmagoria","Temple"],isUnique:!1},{id:37,name:"Gardens",tier:5,upgradesFrom:["Courtyard"],upgradesTo:["Wharf","Temple"],isUnique:!1},{id:38,name:"Vaal Pyramid",tier:5,upgradesFrom:["Barrows","Beach"],upgradesTo:["Canyon"],isUnique:!1},{id:39,name:"City Square",tier:5,upgradesFrom:["Beach"],upgradesTo:["Fields"],isUnique:!1},{id:40,name:"Volcano",tier:6,upgradesFrom:["Underground Sea"],upgradesTo:["Lava Chamber"],isUnique:!1},{id:41,name:"Precinct",tier:6,upgradesFrom:["Jungle Valley","Mausoleum"],upgradesTo:["Conservatory","Geode"],isUnique:!1},{id:42,name:"Sulphur Vents",tier:6,upgradesFrom:["Mausoleum"],upgradesTo:["Geode"],isUnique:!1},{id:43,name:"Ashen Wood",tier:6,upgradesFrom:["Alleyways"],upgradesTo:["Primordial Pool"],isUnique:!1},{id:44,name:"Academy",tier:6,upgradesFrom:["Maze","Port"],upgradesTo:["Underground River"],isUnique:!1},{id:45,name:"Haunted Mansion",tier:6,upgradesFrom:["Port"],upgradesTo:["Underground River","Cells"],isUnique:!1},{id:46,name:"Phantasmagoria",tier:6,upgradesFrom:["Residence"],upgradesTo:["Bazaar","Arcade"],isUnique:!1},{id:47,name:"Temple",tier:6,upgradesFrom:["Residence","Gardens"],upgradesTo:["Toxic Sewer","Arcade"],isUnique:!1},{id:48,name:"Wharf",tier:6,upgradesFrom:["Gardens"],upgradesTo:["Toxic Sewer"],isUnique:!1},{id:49,name:"Canyon",tier:6,upgradesFrom:["Vaal Pyramid"],upgradesTo:["Ghetto"],isUnique:!1},{id:50,name:"Fields",tier:6,upgradesFrom:["City Square"],upgradesTo:["Dunes"],isUnique:!1},{id:51,name:"Lava Chamber",tier:7,upgradesFrom:["Volcano"],upgradesTo:["Overgrown Ruin"],isUnique:!1},{id:52,name:"Conservatory",tier:7,upgradesFrom:["Precinct"],upgradesTo:["Sepulchre"],isUnique:!1},{id:53,name:"Geode",tier:7,upgradesFrom:["Sulphur Vents"],upgradesTo:["Mineral Pools"],isUnique:!1},{id:54,name:"Primordial Pool",tier:7,upgradesFrom:["Ashen  Wood"],upgradesTo:["Promenade"],isUnique:!1},{id:55,name:"Underground River",tier:7,upgradesFrom:["Academy","Haunted Mansion"],upgradesTo:["Laboratory"],isUnique:!1},{id:56,name:"Cells",tier:7,upgradesFrom:["Haunted Mansion"],upgradesTo:["Laboratory"],isUnique:!1},{id:57,name:"Bazaar",tier:7,upgradesFrom:["Phantasmagoria"],upgradesTo:["Shore","Arachnid Nest"],isUnique:!1},{id:58,name:"Arcade",tier:7,upgradesFrom:["Phantasmagoria","Temple"],upgradesTo:["Arachnid Nest"],isUnique:!1},{id:59,name:"Toxic Sewer",tier:7,upgradesFrom:["Wharf","Temple"],upgradesTo:["Mud Geyser"],isUnique:!1},{id:60,name:"Ghetto",tier:7,upgradesFrom:["Canyon"],upgradesTo:["Wasteland"],isUnique:!1},{id:61,name:"Dunes",tier:7,upgradesFrom:["Fields"],upgradesTo:["Orchard","Infested Valley"],isUnique:!1},{id:62,name:"Overgrown Ruin",tier:8,upgradesFrom:["Lava Chamber"],upgradesTo:["Waterways"],isUnique:!1},{id:63,name:"Sepulchre",tier:8,upgradesFrom:["Conservatory"],upgradesTo:["Arena"],isUnique:!1},{id:64,name:"Mineral Pools",tier:8,upgradesFrom:["Geode"],upgradesTo:["Museum"],isUnique:!1},{id:65,name:"Promenade",tier:8,upgradesFrom:["Primordial Pool"],upgradesTo:["Vault"],isUnique:!1},{id:66,name:"Laboratory",tier:8,upgradesFrom:["Underground River","Cells"],upgradesTo:["Moon Temple"],isUnique:!1},{id:67,name:"Shore",tier:8,upgradesFrom:["Bazaar"],upgradesTo:["Relic Chambers"],isUnique:!1},{id:68,name:"Arachnid Nest",tier:8,upgradesFrom:["Bazaar","Arcade"],upgradesTo:["Ancient City"],isUnique:!1},{id:69,name:"Mud Geyser",tier:8,upgradesFrom:["Toxic Sewer"],upgradesTo:["Scriptorium"],isUnique:!1},{id:70,name:"Wasteland",tier:8,upgradesFrom:["Ghetto"],upgradesTo:["Cemetery"],isUnique:!1},{id:71,name:"Orchard",tier:8,upgradesFrom:["Dunes"],upgradesTo:["Waste Pool"],isUnique:!1},{id:72,name:"Infested Valley",tier:8,upgradesFrom:["Dunes"],upgradesTo:["Tropical Island"],isUnique:!1},{id:73,name:"Waterways",tier:9,upgradesFrom:["Overgrown Ruin"],upgradesTo:["Belfry"],isUnique:!1},{id:74,name:"Arena",tier:9,upgradesFrom:["Sepulchre"],upgradesTo:["Leyline","Coral Ruins"],isUnique:!1},{id:75,name:"Museum",tier:9,upgradesFrom:["Mineral Pools"],upgradesTo:["Coral Ruins"],isUnique:!1},{id:76,name:"Vault",tier:9,upgradesFrom:["Promenade"],upgradesTo:["Coves"],isUnique:!1},{id:77,name:"Moon Temple",tier:9,upgradesFrom:["Laboratory"],upgradesTo:["Pit"],isUnique:!1},{id:78,name:"Relic Chambers",tier:9,upgradesFrom:["Shore"],upgradesTo:["Plaza"],isUnique:!1},{id:79,name:"Ancient City",tier:9,upgradesFrom:["Arachnid Nest"],upgradesTo:["Plaza"],isUnique:!1},{id:80,name:"Scriptorium",tier:9,upgradesFrom:["Mud Geyser"],upgradesTo:["Plateau"],isUnique:!1},{id:81,name:"Cemetery",tier:9,upgradesFrom:["Wasteland"],upgradesTo:["Pier"],isUnique:!1},{id:82,name:"Waste Pool",tier:9,upgradesFrom:["Orchard"],upgradesTo:["Pier","Spider Forest"],isUnique:!1},{id:83,name:"Tropical Island",tier:9,upgradesFrom:["Infested Valley"],upgradesTo:["Estuary","Spider Forest"],isUnique:!1},{id:84,name:"Belfry",tier:10,upgradesFrom:["Waterways"],upgradesTo:["Arachnid Tomb"],isUnique:!1},{id:85,name:"Leyline",tier:10,upgradesFrom:["Arena"],upgradesTo:["Crystal Ore","Mesa"],isUnique:!1},{id:86,name:"Coral Ruins",tier:10,upgradesFrom:["Arena","Museum"],upgradesTo:["Crystal Ore"],isUnique:!1},{id:87,name:"Coves",tier:10,upgradesFrom:["Vault"],upgradesTo:["Burial Chambers"],isUnique:!1},{id:88,name:"Pit",tier:10,upgradesFrom:["Moon Temple"],upgradesTo:["Park"],isUnique:!1},{id:89,name:"Plaza",tier:10,upgradesFrom:["Relic Chambers","Ancient City"],upgradesTo:["Siege"],isUnique:!1},{id:90,name:"Plateau",tier:10,upgradesFrom:["Scriptorium"],upgradesTo:["Bog"],isUnique:!1},{id:91,name:"Pier",tier:10,upgradesFrom:["Cemetery","Waste Pool"],upgradesTo:["Factory"],isUnique:!1},{id:92,name:"Spider Forest",tier:10,upgradesFrom:["Tropical Island","Waste Pool"],upgradesTo:["Chateau","Factory"],isUnique:!1},{id:93,name:"Estuary",tier:10,upgradesFrom:["Tropical Island"],upgradesTo:["Chateau","Lair"],isUnique:!1},{id:94,name:"Arachnid Tomb",tier:11,upgradesFrom:["Belfry"],upgradesTo:["Villa"],isUnique:!1},{id:95,name:"Mesa",tier:11,upgradesFrom:["Leyline"],upgradesTo:["Colonnade"],isUnique:!1},{id:96,name:"Crystal Ore",tier:11,upgradesFrom:["Leyline","Coral Ruins"],upgradesTo:["Colonnade"],isUnique:!1},{id:97,name:"Burial Chambers",tier:11,upgradesFrom:["Coves"],upgradesTo:["Necropolis"],isUnique:!1},{id:98,name:"Park",tier:11,upgradesFrom:["Pit"],upgradesTo:["Defiled Cathedral"],isUnique:!1},{id:99,name:"Siege",tier:11,upgradesFrom:["Plaza"],upgradesTo:["Malformation"],isUnique:!1},{id:100,name:"Bog",tier:11,upgradesFrom:["Plateau"],upgradesTo:["Arsenal","Overgrown Shrine"],isUnique:!1},{id:101,name:"Factory",tier:11,upgradesFrom:["Pier","Spider Forest"],upgradesTo:["Ivory Temple"],isUnique:!1},{id:102,name:"Chateau",tier:11,upgradesFrom:["Estuary","Spider Forest"],upgradesTo:["Castle Ruins"],isUnique:!1},{id:103,name:"Lair",tier:11,upgradesFrom:["Estuary"],upgradesTo:["Castle Ruins"],isUnique:!1},{id:104,name:"Villa",tier:12,upgradesFrom:["Arachnid Tomb"],upgradesTo:["Acid Caverns","Reef"],isUnique:!1},{id:105,name:"Colonnade",tier:12,upgradesFrom:["Crystal Ore","Mesa"],upgradesTo:["Core"],isUnique:!1},{id:106,name:"Necropolis",tier:12,upgradesFrom:["Burial Chambers"],upgradesTo:["Racecourse"],isUnique:!1},{id:107,name:"Defiled Cathedral",tier:12,upgradesFrom:["Park"],upgradesTo:["Caldera"],isUnique:!1},{id:108,name:"Malformation",tier:12,upgradesFrom:["Siege"],upgradesTo:["Colosseum"],isUnique:!1},{id:109,name:"Arsenal",tier:12,upgradesFrom:["Bog"],upgradesTo:["Shrine"],isUnique:!1},{id:110,name:"Overgrown Shrine",tier:12,upgradesFrom:["Bog"],upgradesTo:["Shrine"],isUnique:!1},{id:111,name:"Ivory Temple",tier:12,upgradesFrom:["Factory"],upgradesTo:["Dig"],isUnique:!1},{id:112,name:"Castle Ruins",tier:12,upgradesFrom:["Chateau","Lair"],upgradesTo:["Crimson Temple"],isUnique:!1},{id:113,name:"Acid Caverns",tier:13,upgradesFrom:["Villa"],upgradesTo:["Dark Forest"],isUnique:!1},{id:114,name:"Reef",tier:13,upgradesFrom:["Villa"],upgradesTo:["Dark Forest"],isUnique:!1},{id:115,name:"Core",tier:13,upgradesFrom:["Colonnade"],upgradesTo:["Dark Forest"],isUnique:!1},{id:116,name:"Racecourse",tier:13,upgradesFrom:["Necropolis"],upgradesTo:["Palace"],isUnique:!1},{id:117,name:"Caldera",tier:13,upgradesFrom:["Defiled Cathedral"],upgradesTo:["Basilica","Sunken City"],isUnique:!1},{id:118,name:"Colosseum",tier:13,upgradesFrom:["Malformation"],upgradesTo:["Courthouse"],isUnique:!1},{id:119,name:"Shrine",tier:13,upgradesFrom:["Arsenal"],upgradesTo:["Courthouse","Carcass"],isUnique:!1},{id:120,name:"Dig",tier:13,upgradesFrom:["Ivory Temple"],upgradesTo:["Terrace"],isUnique:!1},{id:121,name:"Crimson Temple",tier:13,upgradesFrom:["Castle Ruins"],upgradesTo:["Terrace"],isUnique:!1},{id:122,name:"Dark Forest",tier:14,upgradesFrom:["Acid Caverns","Reef","Core"],upgradesTo:["Tower"],isUnique:!1},{id:123,name:"Palace",tier:14,upgradesFrom:["Racecourse"],upgradesTo:["Desert Spring"],isUnique:!1},{id:124,name:"Sunken City",tier:14,upgradesFrom:["Caldera"],upgradesTo:["Lava Lake"],isUnique:!1},{id:125,name:"Basilica",tier:14,upgradesFrom:["Caldera"],upgradesTo:["Lava Lake"],isUnique:!1},{id:126,name:"Courthouse",tier:14,upgradesFrom:["Colosseum","Shrine"],upgradesTo:["Primordial Blocks"],isUnique:!1},{id:127,name:"Carcass",tier:14,upgradesFrom:["Shrine"],upgradesTo:["Primordial Blocks"],isUnique:!1},{id:128,name:"Terrace",tier:14,upgradesFrom:["Crimson Temple","Dig"],upgradesTo:["Summit"],isUnique:!1},{id:129,name:"Tower",tier:15,upgradesFrom:["Dark Forest"],upgradesTo:["Lair of the Hydra"],isUnique:!1},{id:130,name:"Desert Spring",tier:15,upgradesFrom:["Palace"],upgradesTo:["Pit of the Chimera"],isUnique:!1},{id:131,name:"Lava Lake",tier:15,upgradesFrom:["Palace","Basilica","Sunken City"],upgradesTo:["Pit of the Chimera"],isUnique:!1},{id:132,name:"Primordial Blocks",tier:15,upgradesFrom:["Carcass","Courthouse"],upgradesTo:["Maze of the Minotaur"],isUnique:!1},{id:133,name:"Summit",tier:15,upgradesFrom:["Crimson Temple","Dig"],upgradesTo:["Forge of the Phoenix"],isUnique:!1},{id:134,name:"Lair of the Hydra",tier:16,upgradesFrom:["Tower"],upgradesTo:["The Shaper's Realm"],isUnique:!1},{id:135,name:"Pit of the Chimera",tier:16,upgradesFrom:["Desert Spring","Lava Lake"],upgradesTo:["The Shaper's Realm"],isUnique:!1},{id:136,name:"Maze of the Minotaur",tier:16,upgradesFrom:["Primordial Blocks"],upgradesTo:["The Shaper's Realm"],isUnique:!1},{id:137,name:"Forge of the Phoenix",tier:16,upgradesFrom:["Summit"],upgradesTo:["The Shaper's Realm"],isUnique:!1},{id:138,name:"The Shaper's Realm",tier:17,upgradesFrom:["Lair of the Hydra","Pit of the Chimera","Maze of the Minotaur","Forge of the Phoenix"],upgradesTo:[""],isUnique:!1}]),v=f,T=[{number:1,notes:"Drops in / Upgrades from"},{number:2,notes:"Drops in / Upgrades from"},{number:3,notes:"Drops in / Upgrades from"},{number:4,notes:"Drops in / Upgrades from"},{number:5,notes:"Drops in / Upgrades from"},{number:6,notes:"Drops in / Upgrades from"},{number:7,notes:"Drops in / Upgrades from"},{number:8,notes:"Drops in / Upgrades from"},{number:9,notes:"Drops in / Upgrades from"},{number:10,notes:"Drops in / Upgrades from"},{number:11,notes:"Drops in / Upgrades from"},{number:12,notes:"Drops in / Upgrades from"},{number:13,notes:"Drops in / Upgrades from"},{number:14,notes:"Drops in / Upgrades from"},{number:15,notes:"Drops in / Upgrades from"},{number:16,notes:"Drops in / Upgrades from"},{number:17,notes:"Drops in / Upgrades from"}],C=T,y=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("span",[e.hasMap?r("span",{staticClass:"dot icon"}):e._e(),e.mapCount>=3?r("span",{staticClass:"icon"},[e._v("↑")]):e._e(),r("span",[e._v(e._s(e.mapName))]),e.addComma?r("span",[e._v(", ")]):e._e()])},F=[],U=(r("c5f6"),{name:"MapDisplay",props:{length:{type:Number,required:!0},mapName:{type:String,required:!0},index:{type:Number,required:!0},hasMap:{type:Boolean,required:!0},mapCount:{type:Number,required:!0}},computed:{addComma:function(){return this.index+1<this.length}}}),b=U,q=(r("3e6a"),r("2877")),S=Object(q["a"])(b,y,F,!1,null,null,null),k=S.exports,P={name:"AtlasProgress",components:{MapDisplay:k},props:["items","mapCounts"],data:function(){return{have:this.items,completed:new Array(150).fill(!1),bonused:new Array(150).fill(!1),allChecked:new Array(17).fill(!1),tierHidden:new Array(17).fill(!1),hideAll:!1,tierColumns:2}},methods:{mapsInTier:function(e){return v.filter(function(a){return a.tier==e})},updateHave:function(e){var a=_(e.target.id);this.have.splice(a,1,e.target.checked),localStorage.setItem("haveMaps",this.have)},updateCompleted:function(e){var a=_(e.target.id);this.completed.splice(a,1,e.target.checked),localStorage.setItem("completedMaps",this.completed)},updateBonused:function(e){var a=_(e.target.id);this.bonused.splice(a,1,e.target.checked),localStorage.setItem("bonusedMaps",this.bonused)},toggleClicked:function(e){var a=this,r=m()(document.getElementsByClassName("tier-"+e)),s=this.allChecked[e-1],t=this.maps.filter(function(a){return a.tier==e});r.forEach(function(e){return e.checked=!s}),this.allChecked.splice(e-1,1,!s),t.forEach(function(e){a.have.splice(e.id,1,!s),a.completed.splice(e.id,1,!s),a.bonused.splice(e.id,1,!s)}),localStorage.setItem("haveMaps",this.have),localStorage.setItem("completedMaps",this.completed),localStorage.setItem("bonusedMaps",this.bonused),localStorage.setItem("allChecked",this.allChecked)},toggleHidden:function(e){var a=this.tierHidden[e-1];this.tierHidden.splice(e-1,1,!a),localStorage.setItem("tierHidden",this.tierHidden)},toggleAllHidden:function(){this.hideAll=!this.hideAll,this.tierHidden=new Array(17).fill(this.hideAll)},hasMap:function(e){var a=this.maps.filter(function(a){return a.name==e});return!!a[0]&&this.have[a[0].id]},mapCount:function(e){var a=this.maps.filter(function(a){return a.name==e});if(0==a.length)return 0;var r,s=a[0].id;return r=this.mapCounts[s]?this.mapCounts[s]:0,r},shadeBackground:function(e){var a,r=Math.ceil(e/this.tierColumns);return a=this.tierColumns%2==0?r%2==1&&e%2==0||r%2==0&&e%2==1:r%2==1&&e%2==0||r%2==0&&e%2==0,a},onResize:function(){window.innerWidth<800?this.tierColumns=1:this.tierColumns=2}},computed:{maps:function(){return v},tiers:function(){return C}},watch:{items:function(e){this.have=e}},created:function(){var e=localStorage.haveMaps,a=localStorage.completedMaps,r=localStorage.bonusedMaps,s=localStorage.allChecked,t=localStorage.tierHidden;if(e){var i=e.split(",").map(function(e){return I(e)});this.have=i}if(a){var n=a.split(",").map(function(e){return I(e)});this.completed=n}if(r){var o=r.split(",").map(function(e){return I(e)});this.bonused=o}if(s){var u=s.split(",").map(function(e){return I(e)});this.allChecked=u}if(t){var d=t.split(",").map(function(e){return I(e)});this.tierHidden=d}window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}};function _(e){var a=e.indexOf("-"),r=h()(e.slice(a+1));return r}function I(e){return"true"==e}var M=P,w=(r("4510"),Object(q["a"])(M,p,l,!1,null,null,null)),A=w.exports,x=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"inputs"},[r("div",{staticClass:"input",attrs:{id:"account"}},[r("fieldset",[r("legend",[e._v("Account Information")]),e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.sessionId,expression:"sessionId"}],attrs:{type:"text",placeholder:"0e6c4a14d10240be23a4d6bb265accaa",id:"sessionId"},domProps:{value:e.sessionId},on:{input:function(a){a.target.composing||(e.sessionId=a.target.value)}}}),r("label",{staticClass:"text",attrs:{for:"accountName"}},[e._v("Account Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.accountName,expression:"accountName"}],attrs:{type:"text",placeholder:"account name",id:"accountName"},domProps:{value:e.accountName},on:{input:function(a){a.target.composing||(e.accountName=a.target.value)}}})]),r("button",{staticClass:"input",attrs:{type:"button"},on:{click:e.getCharacters}},[e._v("Load Characters")])]),r("div",{staticClass:"input",attrs:{id:"characters"}},[r("label",{staticClass:"text",attrs:{for:"characterList"}},[e._v("Characters")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.character,expression:"character"}],attrs:{id:"characterList"},on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.character=a.target.multiple?r:r[0]},e.characterChanged]}},[r("option",{attrs:{disabled:""}},[e._v("--Select a character--")]),e._l(e.characters,function(a){return r("option",{domProps:{value:a}},[e._v("\n        "+e._s(a.name)+" ("+e._s(a.league)+")\n      ")])})],2)]),r("LegendDisplay",{attrs:{id:"legend"}}),r("div",{staticClass:"input big",attrs:{id:"locations"}},[r("fieldset",[r("legend",[e._v("Locations to include")]),r("div",{staticClass:"stashes",attrs:{id:"stashes"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.character.name,expression:"character.name"}],staticClass:"stash"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.stashes,expression:"stashes"}],staticClass:"stash-checkbox",attrs:{type:"checkbox",id:"inventory",value:"inv"},domProps:{checked:Array.isArray(e.stashes)?e._i(e.stashes,"inv")>-1:e.stashes},on:{change:function(a){var r=e.stashes,s=a.target,t=!!s.checked;if(Array.isArray(r)){var i="inv",n=e._i(r,i);s.checked?n<0&&(e.stashes=r.concat([i])):n>-1&&(e.stashes=r.slice(0,n).concat(r.slice(n+1)))}else e.stashes=t}}}),r("label",{staticClass:"checkbox",attrs:{for:"inventory",checked:""}},[e._v("Character Inventory")])]),e._l(e.stashTabs,function(a){return r("div",{key:a.id,staticClass:"stash"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.stashes,expression:"stashes"}],staticClass:"stash-checkbox",attrs:{type:"checkbox",id:a.n},domProps:{value:a.i,checked:Array.isArray(e.stashes)?e._i(e.stashes,a.i)>-1:e.stashes},on:{change:function(r){var s=e.stashes,t=r.target,i=!!t.checked;if(Array.isArray(s)){var n=a.i,o=e._i(s,n);t.checked?o<0&&(e.stashes=s.concat([n])):o>-1&&(e.stashes=s.slice(0,o).concat(s.slice(o+1)))}else e.stashes=i}}}),r("label",{staticClass:"checkbox",attrs:{for:a.n}},[e._v(e._s(a.n))])])})],2)]),r("button",{staticClass:"input",attrs:{type:"button"},on:{click:e.getItems}},[e._v("Load Maps")]),e._m(1)])],1)},D=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("label",{staticClass:"text",attrs:{for:"sessionId"}},[e._v("POESESSID "),r("a",{attrs:{href:"what-is-a-session-id.html"}},[e._v("What's this?")])])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"note",attrs:{id:"notes"}},[e._v("\n        Note: Clicking 'Load Maps' will overwrite the checkboxes in the 'Have' column."),r("br"),r("b",[e._v("Also Note")]),e._v(": Premium 'Maps' stash tabs currently don't return any information.  GGG plz.\n    ")])}],L=(r("96cf"),r("3b8d")),N=r("d225"),R=r("b0b4"),B=r("bc3a"),O=r.n(B),E=function(){function e(a,r){Object(N["a"])(this,e),this.accountName=a,this.sessionId=r,this.promises=[],this.request=O.a.create({baseURL:"https://radiator.host/api"})}return Object(R["a"])(e,[{key:"getCharacters",value:function(){var e=Object(L["a"])(regeneratorRuntime.mark(function e(){var a,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a="characters",r=new FormData,r.set("accountName",this.accountName),r.set("sessionId",this.sessionId),e.next=6,this.request.post(a,r);case 6:return s=e.sent,e.abrupt("return",s.data);case 8:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()},{key:"getStashes",value:function(){var e=Object(L["a"])(regeneratorRuntime.mark(function e(a){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="stashes",e.next=3,this.request.get(r,{params:{accountName:this.accountName,sessionId:this.sessionId,league:a,tabs:1}});case 3:return s=e.sent,e.abrupt("return",s.data.tabs);case 5:case"end":return e.stop()}},e,this)}));function a(a){return e.apply(this,arguments)}return a}()},{key:"getItems",value:function(){var e=Object(L["a"])(regeneratorRuntime.mark(function e(a,r){var s,t,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.promises=[],s="stashes",r.includes("inv")&&this.getInventory(a),r.forEach(function(e){var r=h()(e);isNaN(r)||i.promises.push(i.request.get(s,{params:{accountName:i.accountName,sessionId:i.sessionId,league:a.league,tabs:0,tabIndex:r}}))}),e.next=6,O.a.all(this.promises);case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e,this)}));function a(a,r){return e.apply(this,arguments)}return a}()},{key:"getInventory",value:function(e){var a="items",r=new FormData;r.set("accountName",this.accountName),r.set("sessionId",this.sessionId),r.set("character",e.name),this.promises.push(this.request.post(a,r))}}]),e}(),H=E,G=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("fieldset",[r("legend",[e._v("Legend")]),r("div",{attrs:{id:"legend-details"}},[r("span",{staticClass:"dot icon symbol"}),r("span",[e._v("You have this map")]),r("span",{staticClass:"symbol"},[e._v("↑")]),r("span",[e._v("You have 3 or more of this map and can use the upgrade recipe")]),r("span",{staticClass:"grey symbol"},[e._v("Drops in")]),r("span",[e._v("You have this map and don't need to run lower tier where it drops")]),r("span",{staticClass:"grey symbol"},[e._v("Map name")]),r("span",[e._v("You've completed this map")])])])])}],z={name:"LegendDisplay"},j=z,W=(r("29c4"),Object(q["a"])(j,G,V,!1,null,"5d0252b6",null)),J=W.exports,$={name:"CharacterSelection",components:{LegendDisplay:J},data:function(){return{sessionId:"",accountName:"",characters:[],character:"--Select a character--",stashes:["inv"],stashTabs:[],foundMaps:[],api:null}},methods:{characterChanged:function(){var e=this;localStorage.setItem("character",o()(this.character)),this.api.getStashes(this.character.league).then(function(a){e.stashTabs=a,localStorage.setItem("stashTabs",o()(e.stashTabs))}).catch(function(e){console.log(e.response)})},addMaps:function(e){if(e.data){var a;a=e.data.character?e.data.items.filter(function(e){return"MainInventory"===e.inventoryId}):e.data.items;var r=a.filter(function(e){return e.category.maps&&e.typeLine.includes("Map")});this.foundMaps=this.foundMaps.concat(r)}},getCharacters:function(){var e=this;this.api=new H(this.accountName,this.sessionId),this.api.getCharacters().then(function(a){e.characters=a,e.character=a.find(function(e){return e.lastActive}),localStorage.setItem("sessionId",e.sessionId),localStorage.setItem("accountName",e.accountName),localStorage.setItem("characters",o()(e.characters)),localStorage.setItem("character",o()(e.character))}).then(function(){return e.api.getStashes(e.character.league)}).then(function(a){e.stashTabs=a,localStorage.setItem("stashTabs",o()(e.stashTabs))}).catch(function(a){var r=a.request.responseURL;r.includes("/api/characters")?(console.log("Error retrieving characters.  Confirm your POESESSID and account name"),e.characters=[],e.character="--Select a character--",e.stashTabs=[],localStorage.setItem("characters",o()(e.characters)),localStorage.setItem("character",o()(e.character)),localStorage.setItem("stashTabs",o()(e.stashTabs))):r.includes("/api/stashes")&&console.log("Error retrieving stashes.  Confirm your account name is correct.")})},getItems:function(){var e=this;this.foundMaps=[],this.api.getItems(this.character,this.stashes).then(function(a){a.forEach(function(a){return e.addMaps(a)}),e.$emit("items-loaded",e.foundMaps),localStorage.setItem("stashes",o()(e.stashes))}).catch(function(e){console.log(e)})}},created:function(){var e=localStorage.getItem("sessionId"),a=localStorage.getItem("accountName"),r=JSON.parse(localStorage.getItem("characters")),s=JSON.parse(localStorage.getItem("character")),t=JSON.parse(localStorage.getItem("stashTabs")),i=JSON.parse(localStorage.getItem("stashes"));e&&(this.sessionId=e),a&&(this.accountName=a),r&&(this.characters=r),s&&(this.character=s),t&&(this.stashTabs=t),this.api||this.sessionId&&this.accountName&&(this.api=new H(this.accountName,this.sessionId)),i&&(this.stashes=i)}},Y=$,K=(r("da79"),Object(q["a"])(Y,x,D,!1,null,null,null)),Q=K.exports,X={name:"app",components:{AtlasProgress:A,CharacterSelection:Q},data:function(){return{items:new Array(150).fill(!1),mapCounts:{}}},methods:{updateItems:function(e){var a=new Array(150).fill(!1),r=e.map(function(e){var a=v.find(function(a){return e.typeLine.includes(a.name)});if(a)return a.id}),s=m()(new d.a(r));s.forEach(function(e){return a[e]=!0}),this.items=a,localStorage.setItem("haveMaps",this.items);var t=r.reduce(function(e,a){return e[a]=(e[a]||0)+1,e},{});this.mapCounts=t,localStorage.setItem("mapCounts",o()(this.mapCounts))}},created:function(){var e=localStorage.getItem("mapCounts");e&&(this.mapCounts=e)}},Z=X,ee=(r("034f"),Object(q["a"])(Z,t,i,!1,null,null,null)),ae=ee.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(ae)}}).$mount("#app")},"64a9":function(e,a,r){},a921:function(e,a,r){},ab17:function(e,a,r){},b585:function(e,a,r){},bea4:function(e,a,r){},da79:function(e,a,r){"use strict";var s=r("a921"),t=r.n(s);t.a}});
//# sourceMappingURL=app.eae69901.js.map