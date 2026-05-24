const TYPES = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"];

const TYPE_COLORS = {
  Normal:"#a8a77a", Fire:"#ee8130", Water:"#6390f0", Electric:"#f7d02c", Grass:"#7ac74c", Ice:"#96d9d6",
  Fighting:"#c22e28", Poison:"#a33ea1", Ground:"#e2bf65", Flying:"#a98ff3", Psychic:"#f95587", Bug:"#a6b91a",
  Rock:"#b6a136", Ghost:"#735797", Dragon:"#6f35fc", Dark:"#705746", Steel:"#b7b7ce", Fairy:"#d685ad"
};

const TYPE_CHART = {
  Normal:{Rock:.5,Ghost:0,Steel:.5}, Fire:{Fire:.5,Water:.5,Grass:2,Ice:2,Bug:2,Rock:.5,Dragon:.5,Steel:2},
  Water:{Fire:2,Water:.5,Grass:.5,Ground:2,Rock:2,Dragon:.5}, Electric:{Water:2,Electric:.5,Grass:.5,Ground:0,Flying:2,Dragon:.5},
  Grass:{Fire:.5,Water:2,Grass:.5,Poison:.5,Ground:2,Flying:.5,Bug:.5,Rock:2,Dragon:.5,Steel:.5},
  Ice:{Fire:.5,Water:.5,Grass:2,Ice:.5,Ground:2,Flying:2,Dragon:2,Steel:.5},
  Fighting:{Normal:2,Ice:2,Poison:.5,Flying:.5,Psychic:.5,Bug:.5,Rock:2,Ghost:0,Dark:2,Steel:2,Fairy:.5},
  Poison:{Grass:2,Poison:.5,Ground:.5,Rock:.5,Ghost:.5,Steel:0,Fairy:2},
  Ground:{Fire:2,Electric:2,Grass:.5,Poison:2,Flying:0,Bug:.5,Rock:2,Steel:2},
  Flying:{Electric:.5,Grass:2,Fighting:2,Bug:2,Rock:.5,Steel:.5},
  Psychic:{Fighting:2,Poison:2,Psychic:.5,Dark:0,Steel:.5},
  Bug:{Fire:.5,Grass:2,Fighting:.5,Poison:.5,Flying:.5,Psychic:2,Ghost:.5,Dark:2,Steel:.5,Fairy:.5},
  Rock:{Fire:2,Ice:2,Fighting:.5,Ground:.5,Flying:2,Bug:2,Steel:.5},
  Ghost:{Normal:0,Psychic:2,Ghost:2,Dark:.5},
  Dragon:{Dragon:2,Steel:.5,Fairy:0},
  Dark:{Fighting:.5,Psychic:2,Ghost:2,Dark:.5,Fairy:.5},
  Steel:{Fire:.5,Water:.5,Electric:.5,Ice:2,Rock:2,Steel:.5,Fairy:2},
  Fairy:{Fire:.5,Fighting:2,Poison:.5,Dragon:2,Dark:2,Steel:.5}
};

const POKEDEX_TSV = `1	Rowlet	Grass/Flying
2	Dartrix	Grass/Flying
3	Decidueye	Grass/Fighting
4	Cyndaquil	Fire
5	Quilava	Fire
6	Typhlosion	Fire/Ghost
7	Oshawott	Water
8	Dewott	Water
9	Samurott	Water/Dark
10	Bidoof	Normal
11	Bibarel	Normal/Water
12	Starly	Normal/Flying
13	Staravia	Normal/Flying
14	Staraptor	Normal/Flying
15	Shinx	Electric
16	Luxio	Electric
17	Luxray	Electric
18	Wurmple	Bug
19	Silcoon	Bug
20	Beautifly	Bug/Flying
21	Cascoon	Bug
22	Dustox	Bug/Poison
23	Ponyta	Fire
24	Rapidash	Fire
25	Eevee	Normal
26	Vaporeon	Water
27	Jolteon	Electric
28	Flareon	Fire
29	Espeon	Psychic
30	Umbreon	Dark
31	Leafeon	Grass
32	Glaceon	Ice
33	Sylveon	Fairy
34	Zubat	Poison/Flying
35	Golbat	Poison/Flying
36	Crobat	Poison/Flying
37	Drifloon	Ghost/Flying
38	Drifblim	Ghost/Flying
39	Kricketot	Bug
40	Kricketune	Bug
41	Buizel	Water
42	Floatzel	Water
43	Burmy	Bug
44	Wormadam	Bug/Grass
45	Mothim	Bug/Flying
46	Geodude	Rock/Ground
47	Graveler	Rock/Ground
48	Golem	Rock/Ground
49	Stantler	Normal
50	Wyrdeer	Normal/Psychic
51	Munchlax	Normal
52	Snorlax	Normal
53	Paras	Bug/Grass
54	Parasect	Bug/Grass
55	Pichu	Electric
56	Pikachu	Electric
57	Raichu	Electric
58	Abra	Psychic
59	Kadabra	Psychic
60	Alakazam	Psychic
61	Chimchar	Fire
62	Monferno	Fire/Fighting
63	Infernape	Fire/Fighting
64	Buneary	Normal
65	Lopunny	Normal
66	Cherubi	Grass
67	Cherrim	Grass
68	Psyduck	Water
69	Golduck	Water
70	Combee	Bug/Flying
71	Vespiquen	Bug/Flying
72	Scyther	Bug/Flying
73	Kleavor	Bug/Rock
74	Scizor	Bug/Steel
75	Heracross	Bug/Fighting
76	Mime Jr.	Psychic/Fairy
77	Mr. Mime	Psychic/Fairy
78	Aipom	Normal
79	Ambipom	Normal
80	Magikarp	Water
81	Gyarados	Water/Flying
82	Shellos	Water
83	Gastrodon	Water/Ground
84	Qwilfish	Dark/Poison
85	Overqwil	Dark/Poison
86	Happiny	Normal
87	Chansey	Normal
88	Blissey	Normal
89	Budew	Grass/Poison
90	Roselia	Grass/Poison
91	Roserade	Grass/Poison
92	Carnivine	Grass
93	Petilil	Grass
94	Lilligant	Grass/Fighting
95	Tangela	Grass
96	Tangrowth	Grass
97	Barboach	Water/Ground
98	Whiscash	Water/Ground
99	Croagunk	Poison/Fighting
100	Toxicroak	Poison/Fighting
101	Ralts	Psychic/Fairy
102	Kirlia	Psychic/Fairy
103	Gardevoir	Psychic/Fairy
104	Gallade	Psychic/Fighting
105	Yanma	Bug/Flying
106	Yanmega	Bug/Flying
107	Hippopotas	Ground
108	Hippowdon	Ground
109	Pachirisu	Electric
110	Stunky	Poison/Dark
111	Skuntank	Poison/Dark
112	Teddiursa	Normal
113	Ursaring	Normal
114	Ursaluna	Ground/Normal
115	Goomy	Dragon
116	Sliggoo	Steel/Dragon
117	Goodra	Steel/Dragon
118	Onix	Rock/Ground
119	Steelix	Steel/Ground
120	Rhyhorn	Ground/Rock
121	Rhydon	Ground/Rock
122	Rhyperior	Ground/Rock
123	Bonsly	Rock
124	Sudowoodo	Rock
125	Lickitung	Normal
126	Lickilicky	Normal
127	Togepi	Fairy
128	Togetic	Fairy/Flying
129	Togekiss	Fairy/Flying
130	Turtwig	Grass
131	Grotle	Grass
132	Torterra	Grass/Ground
133	Porygon	Normal
134	Porygon2	Normal
135	Porygon-Z	Normal
136	Gastly	Ghost/Poison
137	Haunter	Ghost/Poison
138	Gengar	Ghost/Poison
139	Spiritomb	Ghost/Dark
140	Murkrow	Dark/Flying
141	Honchkrow	Dark/Flying
142	Unown	Psychic
143	Spheal	Ice/Water
144	Sealeo	Ice/Water
145	Walrein	Ice/Water
146	Remoraid	Water
147	Octillery	Water
148	Skorupi	Poison/Bug
149	Drapion	Poison/Dark
150	Growlithe	Fire/Rock
151	Arcanine	Fire/Rock
152	Glameow	Normal
153	Purugly	Normal
154	Machop	Fighting
155	Machoke	Fighting
156	Machamp	Fighting
157	Chatot	Normal/Flying
158	Duskull	Ghost
159	Dusclops	Ghost
160	Dusknoir	Ghost
161	Piplup	Water
162	Prinplup	Water
163	Empoleon	Water/Steel
164	Mantyke	Water/Flying
165	Mantine	Water/Flying
166	Basculin	Water
167	Basculegion	Water/Ghost
168	Vulpix	Fire
169	Ninetales	Fire
170	Tentacool	Water/Poison
171	Tentacruel	Water/Poison
172	Finneon	Water
173	Lumineon	Water
174	Magby	Fire
175	Magmar	Fire
176	Magmortar	Fire
177	Magnemite	Electric/Steel
178	Magneton	Electric/Steel
179	Magnezone	Electric/Steel
180	Bronzor	Steel/Psychic
181	Bronzong	Steel/Psychic
182	Elekid	Electric
183	Electabuzz	Electric
184	Electivire	Electric
185	Gligar	Ground/Flying
186	Gliscor	Ground/Flying
187	Gible	Dragon/Ground
188	Gabite	Dragon/Ground
189	Garchomp	Dragon/Ground
190	Nosepass	Rock
191	Probopass	Rock/Steel
192	Voltorb	Electric/Grass
193	Electrode	Electric/Grass
194	Rotom	Electric/Ghost
195	Chingling	Psychic
196	Chimecho	Psychic
197	Misdreavus	Ghost
198	Mismagius	Ghost
199	Cleffa	Fairy
200	Clefairy	Fairy
201	Clefable	Fairy
202	Sneasel	Fighting/Poison
203	Sneasler	Fighting/Poison
204	Weavile	Dark/Ice
205	Snorunt	Ice
206	Glalie	Ice
207	Froslass	Ice/Ghost
208	Cranidos	Rock
209	Rampardos	Rock
210	Shieldon	Rock/Steel
211	Bastiodon	Rock/Steel
212	Swinub	Ice/Ground
213	Piloswine	Ice/Ground
214	Mamoswine	Ice/Ground
215	Bergmite	Ice
216	Avalugg	Ice/Rock
217	Snover	Grass/Ice
218	Abomasnow	Grass/Ice
219	Zorua	Normal/Ghost
220	Zoroark	Normal/Ghost
221	Rufflet	Normal/Flying
222	Braviary	Psychic/Flying
223	Riolu	Fighting
224	Lucario	Fighting/Steel
225	Uxie	Psychic
226	Mesprit	Psychic
227	Azelf	Psychic
228	Heatran	Fire/Steel
229	Regigigas	Normal
230	Cresselia	Psychic
231	Tornadus	Flying
232	Thundurus	Electric/Flying
233	Landorus	Ground/Flying
234	Enamorus	Fairy/Flying
235	Dialga	Steel/Dragon
236	Palkia	Water/Dragon
237	Giratina	Ghost/Dragon
238	Arceus	Normal
239	Phione	Water
240	Manaphy	Water
241	Shaymin	Grass
242	Darkrai	Dark`;

const POKEDEX = POKEDEX_TSV.trim().split("\n").map(row => {
  const [num, name, types] = row.split("\t");
  return {num:+num, name, types:types.split("/")};
});

const balls = [
  ["Poke Ball","Standard","1 Apricorn + 1 Tumblestone","Baseline field ball."],
  ["Great Ball","Standard","1 Apricorn + 1 Tumblestone + 1 Iron Chunk","Reliable mid-game default."],
  ["Ultra Ball","Standard","1 Apricorn + 2 Tumblestones + 2 Iron Chunks","Best standard catch rate."],
  ["Heavy Ball","Heavy","1 Apricorn + 1 Black Tumblestone","Short range, better if target has not noticed you."],
  ["Leaden Ball","Heavy","1 Apricorn + 1 Black Tumblestone + 1 Iron Chunk","Upgraded heavy ball."],
  ["Gigaton Ball","Heavy","1 Apricorn + 2 Black Tumblestones + 2 Iron Chunks","Best heavy-family alpha tool."],
  ["Feather Ball","Long range","1 Apricorn + 1 Sky Tumblestone","Fast, flat trajectory."],
  ["Wing Ball","Long range","1 Apricorn + 1 Sky Tumblestone + 1 Iron Chunk","Better long-range catch rate."],
  ["Jet Ball","Long range","1 Apricorn + 2 Sky Tumblestones + 2 Iron Chunks","Best for flying or distant targets."],
  ["Origin Ball","Story","Provided by story","Scripted use for the final Dialga/Palkia Origin catch."]
];

const ranks = [
  ["1 Star",20,"Heavy Ball, Revive"],
  ["2 Star",30,"Feather Ball, Super Potion"],
  ["3 Star",40,"Great Ball"],
  ["4 Star",50,"Leaden Ball, Hyper Potion"],
  ["5 Star",65,"Wing Ball"],
  ["6 Star",80,"Ultra Ball"],
  ["7 Star",100,"Gigaton Ball"],
  ["8 Star",100,"Jet Ball"],
  ["9 Star",100,"Rare Candy"],
  ["10 Star",100,"Full Star rank, strongest rewards"]
];

const recipes = [
  ["Poke Ball","Ball","1 Apricorn + 1 Tumblestone"],
  ["Great Ball","Ball","1 Apricorn + 1 Tumblestone + 1 Iron Chunk"],
  ["Ultra Ball","Ball","1 Apricorn + 2 Tumblestones + 2 Iron Chunks"],
  ["Heavy Ball","Ball","1 Apricorn + 1 Black Tumblestone"],
  ["Leaden Ball","Ball","1 Apricorn + 1 Black Tumblestone + 1 Iron Chunk"],
  ["Gigaton Ball","Ball","1 Apricorn + 2 Black Tumblestones + 2 Iron Chunks"],
  ["Feather Ball","Ball","1 Apricorn + 1 Sky Tumblestone"],
  ["Wing Ball","Ball","1 Apricorn + 1 Sky Tumblestone + 1 Iron Chunk"],
  ["Jet Ball","Ball","1 Apricorn + 2 Sky Tumblestones + 2 Iron Chunks"],
  ["Potion","Heal","1 Oran Berry + 1 Medicinal Leek"],
  ["Super Potion","Heal","1 Potion + 1 Pep-Up Plant"],
  ["Hyper Potion","Heal","1 Super Potion + 1 Vivichoke"],
  ["Max Potion","Heal","1 Sitrus Berry + 1 Kings Leaf"],
  ["Full Restore","Heal","1 Max Potion + 1 Full Heal"],
  ["Revive","Heal","1 Vivichoke + 2 Medicinal Leeks"],
  ["Max Revive","Heal","1 Revive + 2 Kings Leaf"],
  ["Remedy","Heal","2 Bugwort"],
  ["Fine Remedy","Heal","1 Remedy + 1 Pep-Up Plant"],
  ["Superb Remedy","Heal","1 Fine Remedy + 1 Vivichoke"],
  ["Full Heal","Heal","1 Cheri Berry + 1 Pecha Berry + 1 Rawst Berry + 1 Aspear Berry"],
  ["Smoke Bomb","Stealth","1 Caster Fern + 1 Sootfoot Root"],
  ["Scatter Bang","Stealth","1 Pop Pod + 1 Caster Fern"],
  ["Sticky Glob","Stealth","1 Spoiled Apricorn + 1 Mud Ball + 1 Caster Fern"],
  ["Mushroom Cake","Food","1 Springy Mushroom + 1 Cake-Lure Base"],
  ["Honey Cake","Food","1 Dazzling Honey + 1 Cake-Lure Base"],
  ["Grain Cake","Food","1 Hearty Grains + 1 Cake-Lure Base"],
  ["Bean Cake","Food","1 Plump Beans + 1 Cake-Lure Base"],
  ["Salt Cake","Food","1 Crunchy Salt + 1 Cake-Lure Base"],
  ["Star Piece","Sell","3 Red Shards + 3 Blue Shards + 3 Green Shards + 1 Stardust"]
];

const starters = [
  {name:"Hisuian Decidueye", types:["Grass","Fighting"], img:"decidueye-hisuian", text:"Physical attacker. Fighting STAB helps into Rock, Steel, Ice, Dark, and Normal. Watch the 4x Flying weakness."},
  {name:"Hisuian Typhlosion", types:["Fire","Ghost"], img:"typhlosion-hisuian", text:"Fast special attacker. Fire/Ghost coverage is clean for story fights and common Steel/Ghost targets."},
  {name:"Hisuian Samurott", types:["Water","Dark"], img:"samurott-hisuian", text:"Mixed attacker with Ceaseless Edge utility. Useful into Fire, Rock, Ground, Ghost, and Psychic."}
];

const meta = [
  {name:"Ursaluna", role:"Sweeper Bulky", types:["Ground","Normal"], stats:[130,140,105,45,80,50], moves:"Headlong Rush, High Horsepower, Play Rough, Crunch", note:"Premier physical wallbreaker. Slow but absurdly strong."},
  {name:"Garchomp", role:"Sweeper Coverage", types:["Dragon","Ground"], stats:[108,130,95,80,85,102], moves:"Earth Power or Bulldoze, Dragon Claw, Slash, Rock Slide", note:"Best speed-to-power mix for late story and alphas."},
  {name:"Togekiss", role:"Coverage Bulky", types:["Fairy","Flying"], stats:[85,50,95,120,115,80], moves:"Moonblast, Air Slash, Aura Sphere, Flamethrower", note:"Excellent Volo answer, especially against Garchomp and Spiritomb."},
  {name:"Hisuian Zoroark", role:"Sweeper Coverage", types:["Normal","Ghost"], stats:[55,100,60,125,60,110], moves:"Bitter Malice, Shadow Ball, Hyper Voice, Flamethrower", note:"Fast special attacker with three immunities."},
  {name:"Lucario", role:"Sweeper Coverage", types:["Fighting","Steel"], stats:[70,110,70,115,70,90], moves:"Aura Sphere, Close Combat, Flash Cannon, Bullet Punch", note:"Flexible mixed attacker with useful Steel resistances."},
  {name:"Hisuian Goodra", role:"Bulky Coverage", types:["Steel","Dragon"], stats:[80,100,100,110,150,60], moves:"Dragon Pulse, Flash Cannon, Shelter, Hydro Pump", note:"One of the safest defensive pivots in Hisui."},
  {name:"Hisuian Lilligant", role:"Sweeper", types:["Grass","Fighting"], stats:[70,105,75,50,75,105], moves:"Victory Dance, Leaf Blade, Drain Punch, Poison Jab", note:"Fast setup attacker; a valuable addition missing from many shortlists."},
  {name:"Gengar", role:"Sweeper Coverage", types:["Ghost","Poison"], stats:[60,65,60,130,75,110], moves:"Shadow Ball, Hex, Venoshock, Dark Pulse", note:"Fast special damage, available once Haunter gets a Linking Cord."},
  {name:"Luxray", role:"Early Coverage", types:["Electric"], stats:[80,120,79,95,79,70], moves:"Thunder Fang, Wild Charge, Crunch, Ice Fang", note:"Early-game carry with strong Attack and useful Dark coverage."},
  {name:"Gyarados", role:"Bulky Sweeper", types:["Water","Flying"], stats:[95,125,79,60,100,81], moves:"Aqua Tail, Crunch, Ice Fang, Hurricane", note:"Easy early alpha option and good mixed bulk."},
  {name:"Electivire", role:"Coverage Sweeper", types:["Electric"], stats:[75,123,67,95,85,95], moves:"Thunder Punch, Wild Charge, Ice Punch, Fire Punch", note:"Best physical Electric option."},
  {name:"Mamoswine", role:"Sweeper Coverage", types:["Ice","Ground"], stats:[110,130,80,70,60,80], moves:"High Horsepower, Icicle Crash, Ice Shard, Rock Slide", note:"Great into Dragons, Flying, Electric, and late-game threats."},
  {name:"Cresselia", role:"Bulky", types:["Psychic"], stats:[120,70,120,75,130,85], moves:"Lunar Blessing, Psychic, Moonblast, Ice Beam", note:"Post-game defensive anchor with excellent sustain."}
];

const hisuian = [
  ["Growlithe / Arcanine","Fire/Rock","Cobalt Coastlands","Use Fire Stone."],
  ["Voltorb / Electrode","Electric/Grass","Coronet Highlands","Use Leaf Stone, not Thunder Stone."],
  ["Typhlosion","Fire/Ghost","Starter final form","Quilava evolves at level 36."],
  ["Samurott","Water/Dark","Starter final form","Dewott evolves at level 36."],
  ["Decidueye","Grass/Fighting","Starter final form","Dartrix evolves at level 36."],
  ["Lilligant","Grass/Fighting","Crimson Mirelands","Petilil + Sun Stone."],
  ["Zorua / Zoroark","Normal/Ghost","Alabaster Icelands","Zorua evolves at level 30."],
  ["Sliggoo / Goodra","Steel/Dragon","Crimson Mirelands / Coronet Highlands","Sliggoo evolves in rain or fog at level 50."],
  ["Avalugg","Ice/Rock","Alabaster Icelands","Bergmite evolves at level 37."],
  ["Braviary","Psychic/Flying","Alabaster Icelands","Rufflet evolves at level 54."],
  ["Sneasel / Sneasler","Fighting/Poison","Coronet Highlands / Alabaster Icelands","Razor Claw during daytime."],
  ["Qwilfish / Overqwil","Dark/Poison","Cobalt Coastlands","Use Strong Style Barb Barrage 20 times."],
  ["Ursaluna","Ground/Normal","Crimson Mirelands","Ursaring + Peat Block during full moon."],
  ["Wyrdeer","Normal/Psychic","Obsidian Fieldlands","Use Agile Style Psyshield Bash 20 times."],
  ["Basculegion","Water/Ghost","Cobalt Coastlands","Take 294+ recoil damage without fainting."],
  ["Kleavor","Bug/Rock","Obsidian Fieldlands","Scyther + Black Augurite."],
  ["Enamorus","Fairy/Flying","Crimson Mirelands post-game","Catch after Tornadus, Thundurus, and Landorus."]
];

const evolutions = [
  ["Linking Cord","Kadabra -> Alakazam; Machoke -> Machamp; Haunter -> Gengar; Graveler -> Golem","Merit shop, distortions, request rewards"],
  ["Metal Coat","Onix -> Steelix; Scyther -> Scizor","Merit shop, distortions"],
  ["Black Augurite","Scyther -> Kleavor","Graveler drops, distortions, Ursaluna digging"],
  ["Protector","Rhydon -> Rhyperior","Merit shop, distortions"],
  ["Upgrade","Porygon -> Porygon2","Distortions"],
  ["Dubious Disc","Porygon2 -> Porygon-Z","Distortions"],
  ["Magmarizer","Magmar -> Magmortar","Merit shop, distortions"],
  ["Electirizer","Electabuzz -> Electivire","Merit shop, distortions"],
  ["Reaper Cloth","Dusclops -> Dusknoir","Merit shop, distortions"],
  ["Peat Block","Ursaring -> Ursaluna during full moon","Ursaluna digging"],
  ["Razor Claw","Hisuian Sneasel -> Sneasler by day; Johto Sneasel -> Weavile by night","Merit shop, distortions"],
  ["Razor Fang","Gligar -> Gliscor at night","Merit shop, distortions"],
  ["Shiny Stone","Togetic -> Togekiss; Roselia -> Roserade","Distortions, item nodes"],
  ["Moon Stone","Clefairy -> Clefable","Distortions, item nodes"],
  ["Sun Stone","Petilil -> Hisuian Lilligant","Distortions, item nodes"],
  ["Leaf Stone","Hisuian Voltorb -> Electrode; Eevee -> Leafeon","Distortions, item nodes"],
  ["Ice Stone","Eevee -> Glaceon; Alolan Vulpix -> Alolan Ninetales","Alabaster Icelands, distortions"],
  ["Dawn Stone","Male Kirlia -> Gallade; female Snorunt -> Froslass","Distortions, item nodes"],
  ["Move condition","Stantler, Qwilfish, Basculin, Piloswine, Lickitung, Tangela, Aipom, Yanma, Bonsly, Mime Jr.","Use required move/style or know move, then evolve manually"]
];

const mapData = {
  "Obsidian Fieldlands":[
    ["Alpha","Alpha Rapidash","Horseshoe Plains","Early high-level Fire alpha; use grass and back strikes.",25,32],
    ["Alpha","Alpha Snorlax","Sandgem Flats","Bulky alpha and strong early catch if rank allows.",58,43],
    ["Alpha","Alpha Gyarados","Lake Verity","Water route target; Feather/Wing/Jet Balls help.",27,72],
    ["Story","Kleavor arena","Grandtree Arena","First Noble fight.",73,22],
    ["Request","Request 19: Peculiar Ponyta","Horseshoe Plains","Guaranteed shiny Ponyta request after unlocking.",34,36],
    ["Legendary","Mesprit","Lake Verity","Post-game lake guardian.",20,78],
    ["Legendary","Landorus","Ramanas Island","Appears after Request 94 starts.",66,78],
    ["Farm","Early research loop","Horseshoe Plains","Bidoof, Starly, Shinx, Wurmple, Kricketot.",38,50],
    ["Legendary","Shaymin","Floaro Gardens","Request 92 with Sword/Shield save data.",62,26]
  ],
  "Crimson Mirelands":[
    ["Alpha","Alpha Ursaring","Ursa's Ring","Useful route for Ursaring and Peat Block planning.",53,44],
    ["Alpha","Alpha Hippowdon","Sludge Mound","Ground alpha, aggressive.",28,58],
    ["Alpha","Alpha Togekiss","Cottonsedge Prairie","Airborne target; use long-range balls.",76,32],
    ["Story","Lilligant arena","Brava Arena","Second Noble fight.",70,68],
    ["Request","Request 37: The Sea's Legend prep","Various","Catch/bring Buizel, Mantyke, and Overqwil for the Cobalt trigger.",44,72],
    ["Legendary","Azelf","Lake Valor","Post-game lake guardian.",18,77],
    ["Legendary","Enamorus","Scarlet Bog","Appears after Tornadus, Thundurus, and Landorus are caught.",36,35],
    ["Farm","Ursaluna digging route","Scarlet Bog to Ursa's Ring","Peat Blocks, stones, shards, and sellables.",47,55]
  ],
  "Cobalt Coastlands":[
    ["Alpha","Alpha Machamp","Veilstone Cape","Strong Fighting option.",70,22],
    ["Alpha","Alpha Dusknoir","Deadwood Haunt","Night ghost alpha.",53,64],
    ["Alpha","Alpha Tentacruel","Lunker's Lair","Water route alpha.",35,58],
    ["Story","Arcanine arena","Firespit Island","Third Noble fight and Heatran location later.",78,70],
    ["Request","Request 37: Manaphy","Seaside Hollow","Pass between the sea spires at evening with Buizel, Mantyke, and Overqwil.",42,76],
    ["Legendary","Heatran","Firespit Island","Post-game plate mission.",82,72],
    ["Legendary","Thundurus","Sand's Reach waters","Storm weather after Incarnate Forces begins.",32,28],
    ["Farm","Pearl route","Seagrass Haven","Pearls, Water types, and sea catches.",27,66]
  ],
  "Coronet Highlands":[
    ["Alpha","Alpha Garchomp","Clamberclaw Cliffs","Level 62 powerhouse.",72,36],
    ["Alpha","Alpha Electivire","Cloudcap Pass","High-value Electric alpha.",46,24],
    ["Alpha","Alpha Clefable","Fabled Spring","Night spawn, Fairy coverage.",32,70],
    ["Story","Electrode arena","Moonview Arena","Fourth Noble fight.",78,18],
    ["Request","Request 67: Clefairy's Moonlit Dance","Fabled Spring","Unlocks reliable Clefairy night activity.",34,72],
    ["Legendary","Cresselia","Moonview Arena","Post-game plate mission.",78,20],
    ["Legendary","Darkrai","Clamberclaw Cliffs","Request 93 with BDSP save data.",66,48],
    ["Farm","Gible and ore route","Wayward Cave / Cliffs","Gible line, Tumblestones, Iron Chunks.",56,46]
  ],
  "Alabaster Icelands":[
    ["Alpha","Alpha Garchomp","Avalanche Slopes","One of the highest fixed alpha levels.",65,68],
    ["Alpha","Alpha Gallade / Gardevoir","Snowfall Hot Spring","Excellent Psychic/Fairy/Fighting catches.",42,52],
    ["Alpha","Alpha Mamoswine","Bonechill Wastes","Big Ice/Ground physical attacker.",28,66],
    ["Story","Avalugg arena","Icepeak Arena","Fifth Noble fight.",73,20],
    ["Legendary","Uxie","Lake Acuity","Post-game lake guardian; eye answer is 60131.",22,26],
    ["Legendary","Regigigas","Snowpoint Temple","Requires Icicle, Stone, and Iron Plates, not Regi trio catches.",62,36],
    ["Legendary","Giratina","Turnback Cave path","After Volo, found in Spring Path area.",40,80],
    ["Farm","Zorua tunnels","Bonechill Wastes","Hisuian Zorua/Zoroark and late-game Ice types.",34,72]
  ],
  "Jubilife Village":[
    ["Story","Galaxy Hall","Center","Laventon reports, rank ups, request board.",50,38],
    ["Farm","Craftworks","Village center","Buy recipe unlocks.",42,50],
    ["Farm","Training Grounds","Northwest","Zisu move tutoring and mastery practice.",28,30],
    ["Farm","Trading Post","West gate","Merit Points for evolution items.",20,56],
    ["Farm","Pastures","East side","Storage and bulk release for Grit.",70,50],
    ["Request","Request board","Galaxy Hall","Most request chains start or update here.",51,42]
  ]
};

const nobles = [
  ["Kleavor","Bug/Rock","Water or Rock","Dodge through axe swings. Throw balms after jump-stomp recovery."],
  ["Hisuian Lilligant","Grass/Fighting","Flying, Psychic, Fire, Fairy","Flying is 4x effective. Throw after dash and dance recovery."],
  ["Hisuian Arcanine","Fire/Rock","Water, Ground, Fighting","Avoid corners on the arena edge. Water is the cleanest battle answer."],
  ["Hisuian Electrode","Electric/Grass","Fire, Ice, Poison, Bug","Ground is immune to Electric but not super-effective into Grass. Use cover, punish explosion recovery."],
  ["Hisuian Avalugg","Ice/Rock","Fighting, Steel, Rock, Water, Grass, Ground","Fighting and Steel are 4x effective. Long recoveries give the safest balm windows."]
];

const requests = [
  [19,"A Peculiar Ponyta","Obsidian Fieldlands","Guaranteed shiny Ponyta tutorial request."],
  [22,"Eerie Apparitions in the Night","All regions","Spiritomb wisps; required for Spiritomb."],
  [37,"The Sea's Legend","Cobalt Coastlands","Manaphy and Phione. Bring Buizel, Mantyke, Overqwil; pass the spires at evening."],
  [66,"The Sea's Legend","Cobalt Coastlands","Manaphy and Phione. Bring Buizel, Mantyke, Overqwil; pass the spires at evening."],
  [67,"The Clefairy's Moonlit Dance","Coronet Highlands","Clefairy at Fabled Spring during full moon night."],
  [69,"Gone Astray in the Highlands","Coronet Highlands","Ursaluna tracking request."],
  [74,"A Bit of Help from Blissey","Alabaster Icelands","Useful Blissey encounter and reward."],
  [86,"Gone Astray in the Icelands","Alabaster Icelands","Late rescue route and rare rewards."],
  [89,"The Diamond Clan's Treasure","Crimson Mirelands","Adaman battle and Adamant Crystal."],
  [90,"The Pearl Clan's Treasure","Alabaster Icelands","Irida battle and Lustrous Globe."],
  [92,"A Token of Gratitude","Obsidian Fieldlands","Shaymin; requires Sword/Shield save data."],
  [93,"The Darksome Nightmare","Coronet Highlands","Darkrai; requires BDSP save data."],
  [94,"Incarnate Forces of Hisui","Multiple regions","Tornadus, Thundurus, Landorus, then Enamorus."]
];

const legendaries = [
  ["Uxie","Lake Acuity","Post-game plate mission. Eye answer: 60131."],
  ["Mesprit","Lake Verity","Post-game plate mission."],
  ["Azelf","Lake Valor","Post-game plate mission."],
  ["Heatran","Firespit Island","Use mud balls to remove its shield, then battle."],
  ["Regigigas","Snowpoint Temple","Needs Icicle Plate, Stone Plate, and Iron Plate. Regirock, Regice, and Registeel are not catchable in PLA."],
  ["Cresselia","Moonview Arena","Post-game plate mission."],
  ["Tornadus","Alabaster Icelands","Appears in blizzard weather after Request 94 starts."],
  ["Thundurus","Cobalt Coastlands","Appears during thunderstorm over water."],
  ["Landorus","Obsidian Fieldlands","Ramanas Island after Request 94 starts."],
  ["Enamorus","Crimson Mirelands","Scarlet Bog after the other three forces."],
  ["Dialga / Palkia","Temple of Sinnoh","Story and post-story Origin formes depend on clan choice."],
  ["Giratina","Spring Path / Turnback Cave","After defeating Volo."],
  ["Manaphy + Phione","Seaside Hollow","Request 37."],
  ["Shaymin","Floaro Gardens","Request 92, Sword/Shield save data."],
  ["Darkrai","Clamberclaw Cliffs","Request 93, BDSP save data."],
  ["Arceus","Temple of Sinnoh","Catch all required Pokemon, receive Azure Flute, complete final trial."]
];

const shinyRows = [
  ["Normal encounter","1","1/4096"],
  ["Research Level 10","2","1/2048"],
  ["Perfect dex entry","3","1/1365"],
  ["Shiny Charm only","4","1/1024"],
  ["Research 10 + Shiny Charm","5","1/819"],
  ["Perfect + Shiny Charm","7","1/585"],
  ["Mass Outbreak base","26","1/158"],
  ["Mass Outbreak + Research 10 + Charm","30","1/137"],
  ["Massive Mass Outbreak base","13","1/315"],
  ["Massive Mass Outbreak + Research 10 + Charm","17","1/241"]
];

const regions = [
  ["Jubilife Village","Galaxy Hall, Craftworks, Training Grounds, Trading Post, Pastures, general store."],
  ["Obsidian Fieldlands","Early research route, Kleavor, Mesprit, Landorus, Shaymin, alpha Snorlax and Rapidash."],
  ["Crimson Mirelands","Ursaluna digging, Lilligant, Azelf, Enamorus, Togepi, Petilil, Ursaring."],
  ["Cobalt Coastlands","Basculegion routes, Arcanine, Manaphy, Heatran, Thundurus, Growlithe."],
  ["Coronet Highlands","Sneasler routes, Electrode, Cresselia, Darkrai, Gible line, Clefairy, Electabuzz."],
  ["Alabaster Icelands","Braviary routes, Avalugg, Uxie, Regigigas, Giratina, Zorua, Mamoswine."]
];

function $(id){ return document.getElementById(id); }

function typeChips(types) {
  return types.map(type => `<span class="type-chip" style="background:${TYPE_COLORS[type]}">${type}</span>`).join("");
}

function spriteName(name) {
  const map = {
    "Hisuian Decidueye":"decidueye-hisuian","Hisuian Typhlosion":"typhlosion-hisuian","Hisuian Samurott":"samurott-hisuian",
    "Hisuian Zoroark":"zoroark-hisuian","Hisuian Goodra":"goodra-hisuian","Hisuian Lilligant":"lilligant-hisuian",
    "Hisuian Arcanine":"arcanine-hisuian"
  };
  return map[name] || name.toLowerCase().replaceAll(".","").replaceAll(" ","-");
}

function spriteUrl(name) {
  return `https://img.pokemondb.net/sprites/scarlet-violet/normal/${spriteName(name)}.png`;
}

function renderTable(id, headers, rows) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderCards() {
  if ($("starterCards")) $("starterCards").innerHTML = starters.map(p => `<article class="card"><header><img src="${spriteUrl(p.name)}" alt="${p.name} sprite"><div><h3>${p.name}</h3>${typeChips(p.types)}</div></header><p>${p.text}</p></article>`).join("");
  if ($("nobleCards")) $("nobleCards").innerHTML = nobles.map(n => `<article class="card"><h3>${n[0]}</h3>${typeChips(n[1].split("/"))}<p><strong>Battle answers:</strong> ${n[2]}</p><p>${n[3]}</p></article>`).join("");
  if ($("regionCards")) $("regionCards").innerHTML = regions.map(r => `<article class="card"><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join("");
}

function renderMeta() {
  if (!$("metaCards")) return;
  const q = $("metaSearch").value.toLowerCase();
  const role = $("metaRole").value;
  $("metaCards").innerHTML = meta.filter(p => {
    const text = `${p.name} ${p.role} ${p.moves} ${p.note}`.toLowerCase();
    return text.includes(q) && (role === "all" || p.role.includes(role));
  }).map(p => {
    const labels = ["HP","Atk","Def","SpA","SpD","Spe"];
    const bars = p.stats.map((s,i) => `<div class="stat-bar"><span>${labels[i]}</span><span class="bar-track"><span class="bar-fill" style="width:${Math.min(100, s / 150 * 100)}%"></span></span><span>${s}</span></div>`).join("");
    return `<article class="card"><header><img src="${spriteUrl(p.name)}" alt="${p.name} sprite"><div><h3>${p.name}</h3>${typeChips(p.types)}<br>${p.role.split(" ").map(r => `<span class="tag">${r}</span>`).join("")}</div></header><div class="stat-bars">${bars}</div><p><strong>Moves:</strong> ${p.moves}</p><p>${p.note}</p></article>`;
  }).join("");
}

function renderRecipes() {
  if (!$("recipeTable")) return;
  const q = $("recipeSearch").value.toLowerCase();
  const cat = $("recipeCategory").value;
  const rows = recipes.filter(r => (cat === "all" || r[1] === cat) && r.join(" ").toLowerCase().includes(q));
  renderTable("recipeTable", ["Item","Category","Materials"], rows);
}

function renderDex() {
  if (!$("pokedexGrid")) return;
  const q = $("dexSearch").value.toLowerCase();
  const type = $("dexType").value;
  $("pokedexGrid").innerHTML = POKEDEX.filter(p => {
    return p.name.toLowerCase().includes(q) && (type === "all" || p.types.includes(type));
  }).map(p => `<div class="dex-card"><strong>#${String(p.num).padStart(3,"0")} ${p.name}</strong>${typeChips(p.types)}</div>`).join("");
}

function damageMultiplier(attack, defenderTypes) {
  return defenderTypes.reduce((mult, def) => mult * (TYPE_CHART[attack]?.[def] ?? 1), 1);
}

function renderTypeButtons() {
  if (!$("typeButtons")) return;
  $("typeButtons").innerHTML = TYPES.map(t => `<button class="type-button" data-type="${t}" style="background:${TYPE_COLORS[t]}">${t}</button>`).join("");
}

function renderCoverage() {
  if (!$("coverageTable") || !$("coverageSummary")) return;
  const selected = [...document.querySelectorAll(".type-button.selected")].map(b => b.dataset.type);
  const rows = POKEDEX.map(p => {
    const best = selected.length ? Math.max(...selected.map(type => damageMultiplier(type, p.types))) : 1;
    return {...p, best};
  });
  const weak = rows.filter(r => r.best >= 2).length;
  const neutral = rows.filter(r => r.best === 1).length;
  const resisted = rows.filter(r => r.best > 0 && r.best < 1).length;
  const immune = rows.filter(r => r.best === 0).length;
  $("coverageSummary").innerHTML = [
    ["Super effective", weak], ["Neutral only", neutral], ["Resisted best hit", resisted], ["Immune to selected", immune]
  ].map(([label, val]) => `<div><strong>${val}</strong><span>${label}</span></div>`).join("");
  renderTable("coverageTable", ["No.","Pokemon","Types","Best hit"], rows
    .sort((a,b) => b.best - a.best || a.num - b.num)
    .map(p => [`#${String(p.num).padStart(3,"0")}`, p.name, typeChips(p.types), `${p.best}x`]));
}

function renderMap() {
  if (!$("regionMap") || !$("regionSelect")) return;
  const region = $("regionSelect").value;
  const enabled = new Set([...document.querySelectorAll(".map-controls input:checked")].map(i => i.value));
  const points = mapData[region].filter(p => enabled.has(p[0]));
  $("regionMap").innerHTML = `<div class="map-label">${region}</div>` + points.map((p,i) => `<button class="marker" data-index="${i}" data-kind="${p[0]}" style="left:${p[4]}%;top:${p[5]}%" title="${p[1]}">${p[0][0]}</button>`).join("");
  const setDetail = index => {
    const p = points[index] || points[0];
    if (!p) {
      $("mapDetails").innerHTML = "<h3>No markers</h3><p>Enable at least one layer.</p>";
      return;
    }
    document.querySelectorAll(".marker").forEach((m,i) => m.classList.toggle("active", i === index));
    $("mapDetails").innerHTML = `<span class="tag">${p[0]}</span><h3>${p[1]}</h3><p><strong>${p[2]}</strong></p><p>${p[3]}</p><div class="map-list">${points.map((x,i) => `<button data-list-index="${i}">${x[1]} <span class="tag">${x[0]}</span></button>`).join("")}</div>`;
    document.querySelectorAll("[data-list-index]").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.listIndex)));
  };
  document.querySelectorAll(".marker").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.index)));
  setDetail(0);
}

function renderStaticTables() {
  renderTable("ballTable", ["Ball","Family","Craft cost","Best use"], balls);
  renderTable("rankTable", ["Rank","Obedience level","Notable unlocks"], ranks);
  renderTable("hisuianTable", ["Pokemon","Type","Location","Method / notes"], hisuian);
  renderTable("evolutionTable", ["Item / method","Evolutions","Source / condition"], evolutions);
  renderTable("requestTable", ["No.","Request","Region","Why it matters"], requests);
  renderTable("legendaryTable", ["Pokemon","Location","Method / correction"], legendaries);
  renderTable("shinyTable", ["Condition","Rolls","Approx odds"], shinyRows);
}

const pageLinks = [
  {title:"Core Guide", url:"guide.html", kind:"Category", text:"Walkthrough, catching, battle styles, Star Rank, Nobles, and general tips."},
  {title:"Items & Crafting", url:"items.html", kind:"Category", text:"Poke Balls, recipes, Grit, money, XP, and farming."},
  {title:"Pokemon", url:"pokemon.html", kind:"Category", text:"Starters, viable teams, Hisuian forms, evolutions, and the full dex."},
  {title:"Maps", url:"maps.html", kind:"Category", text:"Interactive regional maps for alphas, requests, story, legendaries, and farming."},
  {title:"Coverage Calculator", url:"calculator.html", kind:"Tool", text:"Attack type coverage against all 242 Hisui Pokemon."},
  {title:"Requests & Post-Game", url:"requests.html", kind:"Category", text:"Requests, legendaries, shiny odds, post-game, and Arceus prep."}
];

function renderHomeCards() {
  if (!$("homeCards")) return;
  $("homeCards").innerHTML = pageLinks.map(page => `<a class="home-card" href="${page.url}"><strong>${page.title}</strong><span>${page.text}</span></a>`).join("");
}

function renderPokemonDetail() {
  const mount = $("pokemonDetail");
  if (!mount) return;
  const params = new URLSearchParams(location.search);
  const wanted = params.get("pokemon");
  if (!wanted) return;
  const normalized = wanted.toLowerCase().replace(/[^a-z0-9]/g, "");
  const dex = POKEDEX.find(p => p.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized);
  if (!dex) {
    mount.innerHTML = `<h2>Pokemon not found</h2><p>Try the search bar or browse the full Hisui Pokedex below.</p>`;
    return;
  }
  const viable = meta.find(p => p.name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(normalized) || normalized.includes(p.name.toLowerCase().replace(/[^a-z0-9]/g, "")));
  const weaknesses = TYPES.map(type => [type, damageMultiplier(type, dex.types)]).filter(([,mult]) => mult > 1).sort((a,b) => b[1] - a[1]);
  const resists = TYPES.map(type => [type, damageMultiplier(type, dex.types)]).filter(([,mult]) => mult < 1).sort((a,b) => a[1] - b[1]);
  mount.innerHTML = `<div class="pokemon-detail">
    <img src="${spriteUrl(viable?.name || dex.name)}" alt="${dex.name} sprite">
    <div>
      <p class="eyebrow">Hisui #${String(dex.num).padStart(3,"0")}</p>
      <h2>${dex.name}</h2>
      <p>${typeChips(dex.types)}</p>
      ${viable ? `<p><strong>Recommended role:</strong> ${viable.role}</p><p><strong>Moves:</strong> ${viable.moves}</p><p>${viable.note}</p>` : `<p>This page has verified typing for ${dex.name}. Detailed moveset notes are focused on the most practical story and post-game Pokemon below.</p>`}
      <p><strong>Weak to:</strong> ${weaknesses.length ? weaknesses.map(([t,m]) => `${t} ${m}x`).join(", ") : "No standard weakness"}</p>
      <p><strong>Resists / immune:</strong> ${resists.length ? resists.map(([t,m]) => `${t} ${m}x`).join(", ") : "No resistances"}</p>
    </div>
  </div>`;
}

function searchIndex() {
  const pokemonItems = POKEDEX.map(p => ({title:p.name, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Pokemon", text:`#${String(p.num).padStart(3,"0")} ${p.types.join("/")}`}));
  const metaItems = meta.map(p => ({title:`${p.name} moveset`, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Moveset", text:p.moves}));
  const mapItems = Object.entries(mapData).flatMap(([region, points]) => points.map(p => ({title:p[1], url:`maps.html?region=${encodeURIComponent(region)}`, kind:p[0], text:`${region}: ${p[2]}`})));
  const requestItems = requests.map(r => ({title:`Request ${r[0]}: ${r[1]}`, url:"requests.html", kind:"Request", text:r[3]}));
  const itemItems = [...balls.map(b => ({title:b[0], url:"items.html", kind:"Ball", text:b[3]})), ...recipes.map(r => ({title:r[0], url:"items.html", kind:r[1], text:r[2]}))];
  return [...pageLinks, ...pokemonItems, ...metaItems, ...mapItems, ...requestItems, ...itemItems];
}

function wireGlobalSearch() {
  const input = $("globalSearch");
  const box = $("searchResults");
  if (!input || !box) return;
  const items = searchIndex();
  const close = () => box.classList.remove("open");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      close();
      return;
    }
    const results = items.filter(item => `${item.title} ${item.kind} ${item.text}`.toLowerCase().includes(q)).slice(0, 10);
    box.innerHTML = results.length ? results.map(item => `<a class="search-result" href="${item.url}"><span><strong>${item.title}</strong><br><small>${item.text}</small></span><small>${item.kind}</small></a>`).join("") : `<div class="search-result"><span>No matches</span></div>`;
    box.classList.add("open");
  });
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const first = box.querySelector("a");
      if (first) {
        event.preventDefault();
        location.href = first.href;
      }
    }
    if (event.key === "Escape") close();
  });
  input.form?.addEventListener("submit", event => event.preventDefault());
  document.addEventListener("click", event => {
    if (!event.target.closest(".global-search")) close();
  });
}

function wireSearch() {
  if ($("recipeSearch")) $("recipeSearch").addEventListener("input", renderRecipes);
  if ($("recipeCategory")) $("recipeCategory").addEventListener("change", renderRecipes);
  if ($("metaSearch")) $("metaSearch").addEventListener("input", renderMeta);
  if ($("metaRole")) $("metaRole").addEventListener("change", renderMeta);
  if ($("dexSearch")) $("dexSearch").addEventListener("input", renderDex);
  if ($("dexType")) $("dexType").addEventListener("change", renderDex);
  if ($("regionSelect")) $("regionSelect").addEventListener("change", renderMap);
  document.querySelectorAll(".map-controls input").forEach(input => input.addEventListener("change", renderMap));
  if ($("typeButtons")) $("typeButtons").addEventListener("click", e => {
    if (e.target.matches(".type-button")) {
      e.target.classList.toggle("selected");
      renderCoverage();
    }
  });
  wireGlobalSearch();
}

function init() {
  renderStaticTables();
  renderCards();
  renderHomeCards();
  renderPokemonDetail();
  renderRecipes();
  renderMeta();
  renderTypeButtons();
  if ($("dexType")) $("dexType").innerHTML = `<option value="all">All types</option>` + TYPES.map(t => `<option>${t}</option>`).join("");
  const regionParam = new URLSearchParams(location.search).get("region");
  if (regionParam && $("regionSelect") && mapData[regionParam]) $("regionSelect").value = regionParam;
  renderDex();
  renderMap();
  renderCoverage();
  wireSearch();
}

init();
