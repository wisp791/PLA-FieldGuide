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

const SPRITE_OVERRIDES = {
  Togekiss: "https://img.pokemondb.net/sprites/sword-shield/normal/togekiss.png",
  Roserade: "https://img.pokemondb.net/sprites/sword-shield/normal/roserade.png"
};

const MAP_IMAGES = {
  "Obsidian Fieldlands": "250px-Obsidian_Fieldlands_Map.png",
  "Crimson Mirelands": "Crimson Mirelands Map.jpg",
  "Cobalt Coastlands": "Cobalt Coastlands Map.jpg",
  "Coronet Highlands": "Coronet Highlands Map.jpg",
  "Alabaster Icelands": "Alabaster Icelands-Map.jpg"
};

const MAP_ASPECTS = {
  "Obsidian Fieldlands": "1 / 1",
  "Crimson Mirelands": "1 / 1",
  "Cobalt Coastlands": "1 / 1",
  "Coronet Highlands": "1 / 1",
  "Alabaster Icelands": "1 / 1",
  "Jubilife Village": "1 / 1"
};

const MOVE_TYPE_MAP = {
  "Absorb":"Grass","Acid Armor":"Poison","Acid Spray":"Poison","Aerial Ace":"Flying","Air Cutter":"Flying","Air Slash":"Flying","Ancient Power":"Rock","Aqua Jet":"Water","Aqua Tail":"Water","Astonish":"Ghost","Aura Sphere":"Fighting",
  "Baby-Doll Eyes":"Fairy","Barb Barrage":"Poison","Bite":"Dark","Bitter Malice":"Ghost","Bleakwind Storm":"Flying","Blizzard":"Ice","Brave Bird":"Flying","Bubble":"Water","Bug Buzz":"Bug","Bulk Up":"Fighting","Bulldoze":"Ground","Bullet Punch":"Steel",
  "Calm Mind":"Psychic","Ceaseless Edge":"Dark","Charge Beam":"Electric","Chloroblast":"Grass","Close Combat":"Fighting","Confusion":"Psychic","Cross Poison":"Poison","Crunch":"Dark","Crush Grip":"Normal",
  "Dark Pulse":"Dark","Dark Void":"Dark","Dazzling Gleam":"Fairy","Dire Claw":"Poison","Double Hit":"Normal","Double-Edge":"Normal","Draco Meteor":"Dragon","Dragon Claw":"Dragon","Dragon Pulse":"Dragon","Drain Punch":"Fighting","Draining Kiss":"Fairy",
  "Earth Power":"Ground","Ember":"Fire","Energy Ball":"Grass","Esper Wing":"Psychic","Extrasensory":"Psychic",
  "Fairy Wind":"Fairy","False Swipe":"Normal","Fire Blast":"Fire","Fire Fang":"Fire","Fire Punch":"Fire","Flame Wheel":"Fire","Flamethrower":"Fire","Flare Blitz":"Fire","Flash Cannon":"Steel","Focus Energy":"Normal",
  "Giga Impact":"Normal","Gust":"Flying",
  "Head Smash":"Rock","Headlong Rush":"Ground","Hex":"Ghost","Hidden Power":"Normal","High Horsepower":"Ground","Hurricane":"Flying","Hydro Pump":"Water","Hyper Beam":"Normal","Hypnosis":"Psychic",
  "Ice Ball":"Ice","Ice Beam":"Ice","Ice Fang":"Ice","Ice Punch":"Ice","Ice Shard":"Ice","Icicle Crash":"Ice","Icy Wind":"Ice","Infernal Parade":"Ghost","Iron Defense":"Steel","Iron Head":"Steel","Iron Tail":"Steel",
  "Judgment":"Normal",
  "Leaf Blade":"Grass","Leaf Storm":"Grass","Leafage":"Grass","Leech Life":"Bug","Liquidation":"Water","Lunar Blessing":"Psychic",
  "Mach Punch":"Fighting","Magma Storm":"Fire","Magical Leaf":"Grass","Megahorn":"Bug","Mimic":"Normal","Moonblast":"Fairy","Mountain Gale":"Ice","Mud Bomb":"Ground","Mud-Slap":"Ground","Mystical Fire":"Fire","Mystical Power":"Psychic",
  "Nasty Plot":"Dark","Night Slash":"Dark",
  "Octazooka":"Water","Ominous Wind":"Ghost","Outrage":"Dragon","Overheat":"Fire",
  "Petal Dance":"Grass","Pin Missile":"Bug","Play Rough":"Fairy","Poison Gas":"Poison","Poison Jab":"Poison","Poison Powder":"Poison","Poison Sting":"Poison","Powder Snow":"Ice","Power Gem":"Rock","Power Shift":"Normal","Psycho Cut":"Psychic","Psychic":"Psychic","Psyshield Bash":"Psychic",
  "Quick Attack":"Normal",
  "Raging Fury":"Fire","Recover":"Normal","Rest":"Psychic","Roar of Time":"Dragon","Rock Slide":"Rock","Rock Smash":"Fighting","Rollout":"Rock","Roost":"Flying",
  "Sandsear Storm":"Ground","Seed Flare":"Grass","Self-Destruct":"Normal","Shadow Ball":"Ghost","Shadow Claw":"Ghost","Shadow Force":"Ghost","Shadow Sneak":"Ghost","Shelter":"Steel","Silver Wind":"Bug","Slash":"Normal","Sleep Powder":"Grass","Sludge Bomb":"Poison","Snarl":"Dark","Soft-Boiled":"Normal","Spacial Rend":"Dragon","Spark":"Electric","Spikes":"Ground","Splash":"Normal","Spore":"Grass","Springtide Storm":"Fairy","Steel Beam":"Steel","Stealth Rock":"Rock","Stone Axe":"Rock","Stone Edge":"Rock","Struggle":"Normal","Struggle Bug":"Bug","Stun Spore":"Grass","Swift":"Normal","Swords Dance":"Normal",
  "Tackle":"Normal","Take Heart":"Psychic","Teleport":"Psychic","Thunder":"Electric","Thunder Fang":"Electric","Thunder Punch":"Electric","Thunder Shock":"Electric","Thunder Wave":"Electric","Thunderbolt":"Electric","Tri Attack":"Normal","Triple Arrows":"Fighting","Twister":"Dragon",
  "Venoshock":"Poison","Victory Dance":"Fighting","Volt Tackle":"Electric",
  "Water Pulse":"Water","Wave Crash":"Water","Wild Charge":"Electric","Wildbolt Storm":"Electric","Wood Hammer":"Grass",
  "X-Scissor":"Bug",
  "Zen Headbutt":"Psychic"
};

const MOVE_ACCURACY = {
  "Air Slash":95, "Aqua Tail":90, "Barb Barrage":100, "Blizzard":70, "Bleakwind Storm":80, "Ceaseless Edge":90,
  "Chloroblast":95, "Dark Void":50, "Draco Meteor":90, "Fire Blast":85, "Fire Fang":95, "Giga Impact":90,
  "Head Smash":80, "Hurricane":70, "Hydro Pump":80, "Hypnosis":70, "Ice Fang":95, "Icicle Crash":90,
  "Infernal Parade":100, "Iron Tail":75, "Leaf Storm":90, "Magma Storm":75, "Megahorn":85, "Mountain Gale":85,
  "Mud Bomb":85, "Octazooka":85, "Overheat":90, "Play Rough":90, "Poison Gas":90, "Raging Fury":100,
  "Roar of Time":90, "Rock Slide":90, "Sandsear Storm":80, "Seed Flare":85, "Sleep Powder":75, "Spacial Rend":95,
  "Springtide Storm":80, "Steel Beam":95, "Stone Edge":80, "Stun Spore":75, "Thunder":70, "Thunder Fang":95,
  "Thunder Wave":90, "Triple Arrows":100, "Wildbolt Storm":80, "Zen Headbutt":90
};

const NEVER_RECOMMENDED_MOVES = new Set(["Giga Impact", "Hyper Beam"]);

const MOVE_PROFILE_HINTS = {
  Decidueye:["Leaf Blade","Triple Arrows","Psycho Cut","Brave Bird"],
  "Hisuian Decidueye":["Leaf Blade","Triple Arrows","Psycho Cut","Brave Bird"],
  Luxray:["Thunder Wave","Wild Charge","Crunch","Ice Fang"],
  Staraptor:["Brave Bird","Close Combat","Roost","Aerial Ace"],
  Gyarados:["Aqua Tail","Crunch","Ice Fang","Water Pulse"],
  Lilligant:["Victory Dance","Leaf Blade","Drain Punch","Poison Jab"],
  "Hisuian Lilligant":["Victory Dance","Leaf Blade","Drain Punch","Poison Jab"],
  Roserade:["Energy Ball","Sludge Bomb","Dazzling Gleam","Shadow Ball"],
  Gardevoir:["Moonblast","Psychic","Hypnosis","Aura Sphere"],
  Gengar:["Shadow Ball","Sludge Bomb","Thunderbolt","Dark Pulse"],
  Infernape:["Raging Fury","Close Combat","Thunder Punch","Bulk Up"],
  Rhyperior:["High Horsepower","Rock Slide","Megahorn","Ice Punch"],
  Ursaluna:["Headlong Rush","Play Rough","Crunch","High Horsepower"],
  Garchomp:["Dragon Claw","Outrage","Rock Slide","Poison Jab"],
  Togekiss:["Moonblast","Air Slash","Aura Sphere","Flamethrower"],
  Goodra:["Shelter","Dragon Pulse","Flash Cannon","Flamethrower"],
  "Hisuian Goodra":["Shelter","Dragon Pulse","Flash Cannon","Flamethrower"]
};

const STATUS_SUPPORT_MOVES = new Set(["Thunder Wave", "Hypnosis", "Sleep Powder", "Stun Spore", "Spore", "Poison Powder", "Poison Gas"]);
const SETUP_SUPPORT_MOVES = new Set(["Swords Dance", "Calm Mind", "Nasty Plot", "Bulk Up", "Victory Dance", "Focus Energy", "Shelter", "Power Shift"]);
const HIGH_CRIT_MOVES = new Set(["Leaf Blade", "Psycho Cut", "Night Slash", "Shadow Claw", "Stone Edge", "Cross Poison", "Spacial Rend"]);
const STATUS_PAYOFF_MOVES = new Set(["Hex", "Infernal Parade", "Venoshock"]);
const SPECIAL_EFFECT_ATTACKS = new Set([
  "Triple Arrows", "Ceaseless Edge", "Stone Axe", "Infernal Parade", "Bitter Malice", "Dire Claw", "Barb Barrage",
  "Mystical Fire", "Mystical Power", "Esper Wing", "Ominous Wind", "Silver Wind", "Ancient Power", "Hex", "Venoshock",
  "Thunder Fang", "Ice Fang", "Fire Fang", "Spark", "Water Pulse", "Charge Beam", "Icy Wind", "Snarl",
  "Acid Spray", "Bulldoze", "Rock Smash", "Aqua Jet", "Shadow Sneak", "Quick Attack", "Draining Kiss"
]);

const STARTER_MOVESETS = {
  "Decidueye":["Triple Arrows","Leaf Blade","Brave Bird","Shadow Claw"],
  "Hisuian Decidueye":["Triple Arrows","Leaf Blade","Brave Bird","Shadow Claw"],
  "Typhlosion":["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
  "Hisuian Typhlosion":["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
  "Samurott":["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"],
  "Hisuian Samurott":["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"]
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

const TEAM_STORAGE_KEY = "plaSavedTeams";
let selectedRecommendationSlot = 0;
const mapViewState = {region:"", scale:1, x:0, y:0, dragging:false, startX:0, startY:0, originX:0, originY:0};

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
  {name:"Hisuian Decidueye", types:["Grass","Fighting"], img:"decidueye-hisuian", stats:[88,112,80,95,95,60], text:"Physical attacker. Fighting STAB helps into Rock, Steel, Ice, Dark, and Normal. Watch the 4x Flying weakness."},
  {name:"Hisuian Typhlosion", types:["Fire","Ghost"], img:"typhlosion-hisuian", stats:[73,84,78,119,85,95], text:"Fast special attacker. Fire/Ghost coverage is clean for story fights and common Steel/Ghost targets."},
  {name:"Hisuian Samurott", types:["Water","Dark"], img:"samurott-hisuian", stats:[90,108,80,100,65,85], text:"Mixed attacker with Ceaseless Edge utility. Useful into Fire, Rock, Ground, Ghost, and Psychic."}
];

const meta = [
  {name:"Staraptor", role:"Early Sweeper", types:["Normal","Flying"], stats:[85,120,70,50,60,100], moves:"Brave Bird, Close Combat, Aerial Ace, Roost", note:"Very early Starly line with high Attack, good Speed, and Fighting coverage for Rock, Ice, Steel, and Normal."},
  {name:"Gyarados", role:"Early Bulky Sweeper", types:["Water","Flying"], stats:[95,125,79,60,100,81], moves:"Aqua Tail, Crunch, Ice Fang, Water Pulse", note:"Easy early Magikarp evolution or alpha catch. Good bulk and excellent coverage into Fire, Ground, Dragon, and Psychic/Ghost targets."},
  {name:"Hisuian Lilligant", role:"Midgame Sweeper", types:["Grass","Fighting"], stats:[70,105,75,50,75,105], moves:"Victory Dance, Leaf Blade, Drain Punch, Poison Jab", note:"Available from Petilil in Crimson Mirelands. Fast setup attacker with practical STAB coverage for the middle of the story."},
  {name:"Roserade", role:"Midgame Coverage", types:["Grass","Poison"], stats:[60,70,65,125,105,90], moves:"Energy Ball, Sludge Bomb, Dazzling Gleam, Shadow Ball", note:"Strong special option from Budew/Roselia with good availability and useful Fairy/Ghost coverage from tutoring."},
  {name:"Gardevoir", role:"Midgame Coverage", types:["Psychic","Fairy"], stats:[68,65,65,125,115,80], moves:"Psychic, Moonblast, Aura Sphere, Thunderbolt", note:"Ralts line becomes a reliable special attacker before late-game legendaries. Fairy STAB helps heavily into Dark and Dragon threats."},
  {name:"Gengar", role:"Midgame Sweeper Coverage", types:["Ghost","Poison"], stats:[60,65,60,130,75,110], moves:"Shadow Ball, Hex, Venoshock, Dark Pulse", note:"Fast special damage once Haunter gets a Linking Cord. Best when you want Ghost/Poison pressure before post-game."},
  {name:"Infernape", role:"Late Sweeper Coverage", types:["Fire","Fighting"], stats:[76,104,71,104,71,108], moves:"Raging Fury, Close Combat, Thunder Punch, Shadow Claw", note:"Ramanas Island catch is late, but still available before the hardest post-story fights. High Speed and mixed offenses keep it useful."},
  {name:"Rhyperior", role:"Late Bulky Sweeper", types:["Ground","Rock"], stats:[115,140,130,55,55,40], moves:"High Horsepower, Rock Slide, Ice Punch, Megahorn", note:"Rhydon is available in Coronet Highlands, then Protector evolution gives huge physical bulk and power."},
  {name:"Ursaluna", role:"Late Sweeper Bulky", types:["Ground","Normal"], stats:[130,140,105,45,80,50], moves:"Headlong Rush, High Horsepower, Play Rough, Crunch", note:"Premier physical wallbreaker after Peat Block access. Slow, but the raw damage is unmatched."},
  {name:"Garchomp", role:"Late Sweeper Coverage", types:["Dragon","Ground"], stats:[108,130,95,80,85,102], moves:"Dragon Claw, Earth Power, Rock Slide, Poison Jab", note:"Outstanding speed-to-power mix from Coronet Highlands onward. Strong into alphas and late story fights."},
  {name:"Togekiss", role:"Late Coverage Bulky", types:["Fairy","Flying"], stats:[85,50,95,120,115,80], moves:"Moonblast, Air Slash, Aura Sphere, Flamethrower", note:"Excellent late-story answer to Dragon and Dark targets, but it needs Togepi friendship and a Shiny Stone."},
  {name:"Hisuian Goodra", role:"Late Bulky Coverage", types:["Steel","Dragon"], stats:[80,100,100,110,150,60], moves:"Dragon Pulse, Flash Cannon, Shelter, Flamethrower", note:"One of the safest defensive pivots once Sliggoo can evolve in rain or fog at level 50."}
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

const natures = [
  ["Hardy","-","-"],["Lonely","Attack","Defense"],["Brave","Attack","Speed"],["Adamant","Attack","Sp. Atk"],["Naughty","Attack","Sp. Def"],
  ["Bold","Defense","Attack"],["Docile","-","-"],["Relaxed","Defense","Speed"],["Impish","Defense","Sp. Atk"],["Lax","Defense","Sp. Def"],
  ["Timid","Speed","Attack"],["Hasty","Speed","Defense"],["Serious","-","-"],["Jolly","Speed","Sp. Atk"],["Naive","Speed","Sp. Def"],
  ["Modest","Sp. Atk","Attack"],["Mild","Sp. Atk","Defense"],["Quiet","Sp. Atk","Speed"],["Bashful","-","-"],["Rash","Sp. Atk","Sp. Def"],
  ["Calm","Sp. Def","Attack"],["Gentle","Sp. Def","Defense"],["Sassy","Sp. Def","Speed"],["Careful","Sp. Def","Sp. Atk"],["Quirky","-","-"]
];

const mapData = {
  "Obsidian Fieldlands":[
    ["Alpha","Alpha Rapidash","Horseshoe Plains","Early high-level Fire alpha; use grass and back strikes.",25,32],
    ["Alpha","Alpha Stantler","Deertrack Heights","Normal alpha on the early heights route.",39,32],
    ["Alpha","Alpha Staravia","Windswept Run","Flying alpha near the central river route.",50,37],
    ["Alpha","Alpha Bibarel","Tidewater Dam","Low-level alpha near the river; good first alpha catch.",45,56],
    ["Alpha","Alpha Floatzel","Worn Bridge","Fast Water alpha along the river crossing.",52,48],
    ["Alpha","Alpha Kricketune","Nature's Pantry","Early Bug alpha and an easy research target.",57,63],
    ["Alpha","Alpha Heracross","Grueling Grove","Strong Bug/Fighting alpha in the woods.",76,28],
    ["Alpha","Alpha Lopunny","The Heartwood","Mobile Normal alpha near forest routes.",69,46],
    ["Alpha","Alpha Parasect","Nature's Pantry","Bug/Grass alpha near mushroom and forest checks.",61,57],
    ["Alpha","Alpha Scyther","Grandtree Arena approach","Bug/Flying alpha near the Kleavor route.",70,26],
    ["Alpha","Alpha Graveler","Oreburrow Tunnel","Rock/Ground alpha in the tunnel route.",47,29],
    ["Alpha","Alpha Golbat","Oreburrow Tunnel","Poison/Flying alpha in cave routes.",42,25],
    ["Alpha","Alpha Magikarp","Obsidian Falls waters","Water alpha; low threat but unusual fixed alpha.",80,45],
    ["Alpha","Alpha Luxio","Floaro Gardens","Aggressive Electric alpha near Shinx territory.",57,24],
    ["Alpha","Alpha Alakazam","Sandgem Flats","High-level Psychic alpha; approach carefully.",62,38],
    ["Alpha","Alpha Snorlax","Sandgem Flats","Bulky alpha and strong early catch if rank allows.",58,43],
    ["Alpha","Alpha Gyarados","Lake Verity","Water route target; Feather/Wing/Jet Balls help.",27,72],
    ["Alpha","Alpha Blissey","Obsidian Falls","High-HP alpha and strong XP target.",83,42],
    ["Alpha","Alpha Infernape","Ramanas Island","Post-game Fire/Fighting alpha.",69,82],
    ["Story","Kleavor arena","Grandtree Arena","First Noble fight.",73,22],
    ["Story","Heights Camp","Deertrack Heights","Important early base camp and route reset point.",43,30],
    ["Request","Request 19: Peculiar Ponyta","Horseshoe Plains","Guaranteed shiny Ponyta request after unlocking.",34,36],
    ["Request","Mushroom Cake request","Nature's Pantry","Unlocks useful food-lure crafting.",54,66],
    ["Request","Bothersome Bidoof route","Village gate / Fieldlands","Bidoof request targets begin near the first route.",31,49],
    ["Legendary","Mesprit","Lake Verity","Post-game lake guardian.",20,78],
    ["Legendary","Landorus","Ramanas Island","Appears after Request 94 starts.",66,78],
    ["Farm","Early research loop","Horseshoe Plains","Bidoof, Starly, Shinx, Wurmple, Kricketot.",38,50],
    ["Farm","Apricorn and Tumblestone route","Fieldlands Camp loop","Fast loop for basic ball materials.",48,40],
    ["Farm","Cherubi tree checks","The Heartwood / Nature's Pantry","Shake trees for Cherubi and Cherrim research.",71,53],
    ["Legendary","Shaymin","Floaro Gardens","Request 92 with Sword/Shield save data.",62,26]
  ],
  "Crimson Mirelands":[
    ["Alpha","Alpha Skuntank","Scarlet Bog","Poison/Dark alpha near marsh routes.",36,55],
    ["Alpha","Alpha Carnivine","Gapejaw Bog","Aggressive Grass alpha near bog grass.",55,70],
    ["Alpha","Alpha Onix","Cloudpool Ridge","Large Rock/Ground alpha on the ridge route.",39,24],
    ["Alpha","Alpha Raichu","Golden Lowlands","Electric alpha near the Mirelands lowlands.",29,42],
    ["Alpha","Alpha Vespiquen","Cottonsedge Prairie","Bug/Flying alpha near Combee routes.",64,34],
    ["Alpha","Alpha Rhyhorn","Bolderoll Slope","Early Ground/Rock alpha.",52,34],
    ["Alpha","Alpha Ursaring","Ursa's Ring","Useful route for Ursaring and Peat Block planning.",64,58],
    ["Alpha","Alpha Pachirisu","Golden Lowlands","Electric alpha tied to a request route.",32,49],
    ["Alpha","Alpha Hippowdon","Sludge Mound","Ground alpha, aggressive.",30,66],
    ["Alpha","Alpha Lickilicky","Shrouded Ruins","Bulky Normal alpha near ruins route.",48,38],
    ["Alpha","Alpha Roserade","Cloudpool Ridge","Grass/Poison alpha, usually checked near high ground.",43,25],
    ["Alpha","Alpha Yanmega","Droning Meadow","Flying Bug alpha, useful for research and XP.",67,47],
    ["Alpha","Alpha Togekiss","Cottonsedge Prairie","Airborne target; use long-range balls.",68,36],
    ["Alpha","Alpha Tangrowth","Gapejaw Bog","Large Grass alpha near wetland routes.",57,72],
    ["Alpha","Alpha Toxicroak","Holm of Trials","Poison/Fighting alpha in late Mirelands route.",72,74],
    ["Alpha","Alpha Torterra","Holm of Trials","Grass/Ground alpha in the late Mirelands route.",76,79],
    ["Alpha","Alpha Sliggoo","Holm of Trials","Steel/Dragon alpha near late Mirelands water routes.",70,71],
    ["Alpha","Alpha Whiscash","Lake Valor waters","Water/Ground alpha near the lake.",82,28],
    ["Story","Lilligant arena","Brava Arena","Second Noble fight.",75,30],
    ["Story","Diamond Settlement","Settlement","Main story hub for Diamond Clan events.",31,31],
    ["Request","Request 37: The Fragrance of Nostalgic Herbs","Gapejaw Bog","Bring Risa a Tangela, the Pokemon covered in blue-vine herbs.",56,69],
    ["Request","Pachirisu battle request","Golden Lowlands","Request route for Pachirisu strategy.",32,50],
    ["Request","Croagunk medicine request","Gapejaw Bog","Croagunk research and medicine request area.",52,66],
    ["Legendary","Azelf","Lake Valor","Post-game lake guardian.",84,22],
    ["Legendary","Enamorus","Scarlet Bog","Appears after Tornadus, Thundurus, and Landorus are caught.",38,54],
    ["Farm","Ursaluna digging route","Scarlet Bog to Ursa's Ring","Peat Blocks, stones, shards, and sellables.",51,56]
  ],
  "Cobalt Coastlands":[
    ["Alpha","Alpha Purugly","Crossing Slope","Early Coastlands Normal alpha.",29,32],
    ["Alpha","Alpha Machoke","Castaway Shore","Fighting alpha near shore routes.",70,22],
    ["Alpha","Alpha Ambipom","Aipom Hill","Fast Normal alpha near cliff route.",46,26],
    ["Alpha","Alpha Walrein","Ginkgo Landing coastline","Bulky Ice/Water alpha on the beach.",22,44],
    ["Alpha","Alpha Octillery","Castaway Shore","Water alpha near shoreline routes.",40,48],
    ["Alpha","Alpha Gastrodon","Seagrass Haven shore","Water/Ground alpha, easy to route with sea checks.",31,61],
    ["Alpha","Alpha Drapion","Ginkgo Landing / sandbar route","Poison/Dark alpha on the Coastlands route.",29,48],
    ["Alpha","Alpha Golduck","Bathing Lagoon","Water alpha near lagoon routes.",48,53],
    ["Alpha","Alpha Chansey","Tombolo Walk","Rare bulky Normal alpha.",60,58],
    ["Alpha","Alpha Empoleon","Islespy Shore","Water/Steel alpha at the far shore.",66,24],
    ["Alpha","Alpha Qwilfish","Tranquility Cove","Dark/Poison alpha in sea routes.",47,42],
    ["Alpha","Alpha Mothim","Spring Path approach","Bug/Flying alpha in the Coastlands route.",57,30],
    ["Alpha","Alpha Dusknoir","Deadwood Haunt","Night ghost alpha.",53,64],
    ["Alpha","Alpha Ninetales","Firespit Island","Fire alpha near volcano route.",84,61],
    ["Alpha","Alpha Tentacruel","Lunker's Lair","Water route alpha.",35,58],
    ["Alpha","Alpha Gyarados","Sand's Reach waters","High-level sea alpha; use Basculegion routing.",29,22],
    ["Alpha","Alpha Mantine","Tranquility Cove","Airborne sea target; Jet Balls help.",48,38],
    ["Alpha","Alpha Lumineon","Seagrass Haven","Water alpha in the southern sea.",35,76],
    ["Story","Arcanine arena","Firespit Island","Third Noble fight and Heatran location later.",78,70],
    ["Story","Beachside Camp","Ginkgo Landing","Useful reset point for sea routes and Ginter checks.",24,36],
    ["Request","Request 66: The Sea's Legend","Seaside Hollow","Pass between the sea spires at evening with Buizel, Mantyke, and Overqwil.",42,76],
    ["Request","Vulpix request","Veilstone Cape","Request chain involving Vulpix in the Coastlands.",67,32],
    ["Request","Dusclops food request","Deadwood Haunt","Night route for Dusclops request progress.",56,69],
    ["Legendary","Heatran","Firespit Island","Post-game plate mission.",82,72],
    ["Legendary","Thundurus","Sand's Reach waters","Storm weather after Incarnate Forces begins.",32,28],
    ["Farm","Pearl route","Seagrass Haven","Pearls, Water types, and sea catches.",27,66],
    ["Farm","Growlithe route","Windbreak Stand / Veilstone Cape","Hisuian Growlithe checks and Fire Stone planning.",74,29]
  ],
  "Coronet Highlands":[
    ["Alpha","Alpha Luxray","Sacred Plaza approach","High-level Electric alpha.",59,32],
    ["Alpha","Alpha Probopass","Primeval Grotto","Rock/Steel alpha near ore-heavy routes.",50,60],
    ["Alpha","Alpha Rhyperior","Sacred Plaza ridge","Bulky Ground/Rock alpha.",66,55],
    ["Alpha","Alpha Bronzong","Ancient Quarry","Steel/Psychic alpha inside quarry route.",41,44],
    ["Alpha","Alpha Mismagius","Stonetooth Rows / Sacred Plaza","Ghost alpha, often checked at night.",74,46],
    ["Alpha","Alpha Electivire","Cloudcap Pass","High-value Electric alpha.",46,24],
    ["Alpha","Alpha Gligar","Clamberclaw Cliffs","Ground/Flying alpha on cliff routes.",73,34],
    ["Alpha","Alpha Gliscor","Clamberclaw high route","Ground/Flying alpha near cliff climbs.",80,28],
    ["Alpha","Alpha Gabite","Wayward Cave route","Dragon/Ground alpha and Gible line farming.",55,52],
    ["Alpha","Alpha Golem","Bolderoll Ravine","Rock/Ground alpha near ore routes.",53,61],
    ["Alpha","Alpha Goodra","Ancient Quarry / lake route","Steel/Dragon alpha, excellent defensive catch.",44,57],
    ["Alpha","Alpha Carnivine","Lonely Spring","Grass alpha in the Highlands route.",35,67],
    ["Alpha","Alpha Steelix","Celestica Trail","Large Steel/Ground alpha near mountain paths.",36,62],
    ["Alpha","Alpha Clefable","Fabled Spring","Night spawn, Fairy coverage.",32,70],
    ["Alpha","Alpha Mothim","Wayward Wood","Bug/Flying alpha on lower route.",30,38],
    ["Story","Electrode arena","Moonview Arena","Fourth Noble fight.",78,18],
    ["Story","Highlands Camp","Mountain base","Central routing point for Sneasler routes.",47,38],
    ["Request","Request 67: Clefairy's Moonlit Dance","Fabled Spring","Unlocks reliable Clefairy night activity.",34,72],
    ["Request","Nosepass guide request","Coronet trails","Nosepass request route around highland paths.",44,54],
    ["Request","Gone Astray in the Highlands","Highlands route","Ursaluna tracking request across cliffs.",52,48],
    ["Legendary","Cresselia","Moonview Arena","Post-game plate mission.",78,20],
    ["Legendary","Darkrai","Clamberclaw Cliffs","Request 93 with BDSP save data.",66,48],
    ["Farm","Gible and ore route","Wayward Cave / Cliffs","Gible line, Tumblestones, Iron Chunks.",56,46],
    ["Farm","Cleffa night checks","Fabled Spring","Cleffa, Clefairy, Moon Stone and Shiny Stone routing.",33,74]
  ],
  "Alabaster Icelands":[
    ["Alpha","Alpha Abomasnow","Avalanche Slopes","Grass/Ice alpha near slope route.",55,48],
    ["Alpha","Alpha Glalie","Bonechill Wastes cave route","Ice alpha and Snorunt research area.",35,58],
    ["Alpha","Alpha Froslass","Avalugg's Legacy / Heart's Crag","Ice/Ghost alpha, often checked in snowy routes.",52,72],
    ["Alpha","Alpha Glaceon","Avalanche Slopes","Ice alpha and Eevee evolution reference.",62,62],
    ["Alpha","Alpha Garchomp","Avalanche Slopes","One of the highest fixed alpha levels.",65,68],
    ["Alpha","Alpha Gallade","Snowpoint Temple","Psychic/Fighting alpha in the temple route.",57,36],
    ["Alpha","Alpha Gardevoir","Heart's Crag","Psychic/Fairy alpha on late Icelands routes.",44,70],
    ["Alpha","Alpha Mamoswine","Bonechill Wastes","Big Ice/Ground physical attacker.",28,66],
    ["Alpha","Alpha Lucario","Icebound Falls","Strong Fighting/Steel alpha.",70,42],
    ["Alpha","Alpha Machamp","Arena's Approach","Fighting alpha near late route.",68,30],
    ["Alpha","Alpha Hisuian Zoroark","Bonechill Wastes tunnels","Normal/Ghost alpha and high-value team option.",34,74],
    ["Alpha","Alpha Electabuzz","Icebound Falls route","Electric alpha near frozen paths.",74,50],
    ["Alpha","Alpha Piloswine","Avalanche Slopes lower route","Ice/Ground alpha near Swinub groups.",45,68],
    ["Story","Avalugg arena","Icepeak Arena","Fifth Noble fight.",73,20],
    ["Story","Pearl Settlement","Settlement","Story hub for Pearl Clan events.",54,34],
    ["Legendary","Uxie","Lake Acuity","Post-game lake guardian; eye answer is 60131.",22,26],
    ["Legendary","Regigigas","Snowpoint Temple","Requires Icicle, Stone, and Iron Plates, not Regi trio catches.",62,36],
    ["Legendary","Giratina","Turnback Cave path","After the late-story boss sequence, found in Spring Path area.",40,80],
    ["Legendary","Tornadus","Bonechill Wastes","Appears during blizzard weather after Request 94 starts.",25,58],
    ["Request","Alolan Vulpix request","Snowfields route","Late request chain for Alolan Vulpix.",58,58],
    ["Request","Gone Astray in the Icelands","Icelands route","Late-game Ursaluna tracking request.",46,44],
    ["Farm","Zorua tunnels","Bonechill Wastes","Hisuian Zorua/Zoroark and late-game Ice types.",34,72],
    ["Farm","Eevee and Ice Stone checks","Avalanche Slopes","Glaceon route, Ice Stones, and Ice-type research.",60,65]
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

const mapOverlayData = {
  "Obsidian Fieldlands":[
    ["Camp","Fieldlands Camp","Starting camp","Main Fieldlands entry and common reset point.",35,88],
    ["Camp","Heights Camp","Deertrack Heights","Second base camp above the first route.",42,31],
    ["Gate","Fieldlands gate","Southwest entry","Fast travel entry from Jubilife Village.",32,91],
    ["Gate","Grandtree Arena gate","Grandtree Arena","Fast travel near the first Noble arena after story progress.",74,21],
    ["Gate","Lake Verity gate","Lake Verity","Late-route fast travel near the lake.",22,79],
    ["Subarea","Aspiration Hill","Southwest ridge","Tutorial hill and early gathering route.",33,78],
    ["Subarea","Horseshoe Plains","Central plains","Early Bidoof, Starly, Shinx, and Ponyta research.",33,49],
    ["Subarea","Deertrack Heights","Northern heights","Early high ground route and Heights Camp area.",42,31],
    ["Subarea","Floaro Gardens","Northwest flowers","Shinx line and request route.",59,23],
    ["Subarea","Windswept Run","Central river","River crossing route with Floatzel checks.",53,46],
    ["Subarea","Nature's Pantry","Central woods","Cherubi tree checks and alpha Blissey route.",58,62],
    ["Subarea","The Heartwood","Eastern woods","Bug and Grass route near Grandtree Arena.",69,50],
    ["Subarea","Grueling Grove","Northeast woods","Heracross and Bug-type checks.",77,30],
    ["Subarea","Sandgem Flats","West flats","Alpha Snorlax and Alakazam route.",61,40],
    ["Subarea","Obsidian Falls","East falls","Alpha Blissey and waterfall farming route.",83,42],
    ["Subarea","Ramanas Island","Southeast island","Post-game alpha and Landorus route.",68,82],
    ["Subarea","Lake Verity","Southwest lake","Mesprit and water route.",22,78],
    ...[
      [30,79],[33,66],[25,52],[39,47],[45,36],[55,25],[64,27],[73,31],[82,43],[70,53],
      [62,61],[50,59],[42,68],[31,88],[53,81],[67,83],[77,72],[84,56],[21,78],[58,42]
    ].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Obsidian Fieldlands","Wisp checklist marker.",xy[0],xy[1]])
  ],
  "Crimson Mirelands":[
    ["Camp","Mirelands Camp","Southwest entry","Main Mirelands entry from Jubilife Village.",26,82],
    ["Camp","Bogbound Camp","Central bog","Unlocked camp near the main swamp routes.",50,56],
    ["Gate","Diamond Settlement gate","Diamond Settlement","Fast travel point for Diamond Clan routes.",30,31],
    ["Gate","Brava Arena gate","Brava Arena","Fast travel point near the second Noble arena.",75,30],
    ["Gate","Mirelands gate","Southwest entry","Expedition entry point.",26,84],
    ["Subarea","Golden Lowlands","West lowlands","Pachirisu, Raichu, and lowland research.",31,43],
    ["Subarea","Solaceon Ruins","Northwest ruins","Unown and request routing.",44,34],
    ["Subarea","Cloudpool Ridge","North ridge","Onix and Roserade alpha route.",42,24],
    ["Subarea","Diamond Settlement","Northwest camp hub","Diamond Clan settlement.",31,31],
    ["Subarea","Gapejaw Bog","Central bog","Carnivine, Croagunk, and Tangela route.",56,69],
    ["Subarea","Scarlet Bog","Central marsh","Skuntank, Ursaluna digging, and Enamorus route.",38,54],
    ["Subarea","Sludge Mound","Southwest bog","Hippowdon alpha route.",30,66],
    ["Subarea","Ursa's Ring","Central east ring","Teddiursa, Ursaring, and Peat Block planning.",64,58],
    ["Subarea","Droning Meadow","East meadow","Yanma and Yanmega route.",67,47],
    ["Subarea","Cottonsedge Prairie","Northeast prairie","Togepi and Togekiss route.",68,36],
    ["Subarea","Lake Valor","Northeast lake","Lake guardian and Whiscash route.",84,22],
    ["Subarea","Holm of Trials","Southeast island","Late route for Torterra, Sliggoo, and Toxicroak.",74,76],
    ...[
      [25,80],[33,70],[38,58],[48,54],[58,61],[68,58],[76,69],[82,79],[73,44],[66,34],
      [58,27],[44,26],[33,33],[25,43],[30,55],[42,71],[52,78],[63,75],[84,24],[72,30]
    ].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Crimson Mirelands","Wisp checklist marker.",xy[0],xy[1]])
  ],
  "Cobalt Coastlands":[
    ["Camp","Beachside Camp","Ginkgo Landing","Main Coastlands entry and Ginter check route.",24,36],
    ["Camp","Coastlands Camp","Aipom Hill route","Second camp for northern and central sea routes.",47,28],
    ["Gate","Molten Arena gate","Firespit Island","Fast travel near the third Noble arena after progress.",78,70],
    ["Gate","Seaside Hollow gate","Seaside Hollow","Fast travel reference for Request 66 route.",42,76],
    ["Subarea","Ginkgo Landing","Northwest beach","Entry beach and alpha Walrein coastline.",22,42],
    ["Subarea","Aipom Hill","North central hill","Ambipom and central Coastlands routing.",46,27],
    ["Subarea","Crossing Slope","West slope","Purugly and early Coastlands route.",29,32],
    ["Subarea","Veilstone Cape","North ridge","Growlithe and Vulpix request route.",67,32],
    ["Subarea","Castaway Shore","North shore","Machoke and Octillery routes.",69,22],
    ["Subarea","Deadwood Haunt","Southeast haunt","Ghost-type night route.",56,69],
    ["Subarea","Tombolo Walk","South sandbar","Chansey and Manaphy route reference.",60,58],
    ["Subarea","Tranquility Cove","Central sea","Qwilfish, Mantyke, and sea routing.",47,42],
    ["Subarea","Seagrass Haven","Southwest sea","Lumineon and pearl route.",35,76],
    ["Subarea","Lunker's Lair","West sea","Tentacruel and water route.",35,58],
    ["Subarea","Sand's Reach","Northwest waters","Gyarados and Thundurus weather route.",29,22],
    ["Subarea","Firespit Island","East island","Volcano, Heatran, and story boss route.",82,66],
    ...[
      [21,38],[30,29],[42,28],[55,30],[68,27],[76,43],[84,58],[80,73],[66,76],[57,68],
      [47,60],[35,62],[27,72],[40,77],[50,50],[42,42],[30,49],[60,39],[72,34],[86,66]
    ].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Cobalt Coastlands","Wisp checklist marker.",xy[0],xy[1]])
  ],
  "Coronet Highlands":[
    ["Camp","Highlands Camp","Mountain base","Main Highlands entry and central reset point.",47,38],
    ["Camp","Mountain Camp","Cliff route","Second camp for Sneasler and upper routes.",58,31],
    ["Camp","Summit Camp","Summit route","Late camp near upper mountain routes.",72,18],
    ["Gate","Moonview Arena gate","Moonview Arena","Fast travel near fourth Noble arena after progress.",78,18],
    ["Gate","Celestica Ruins gate","Celestica Ruins","Fast travel reference for upper Highlands.",61,39],
    ["Subarea","Heavenward Lookout","Lower west ridge","First Highlands overlook route.",30,38],
    ["Subarea","Wayward Wood","Lower west woods","Mothim and lower route checks.",30,38],
    ["Subarea","Wayward Cave","Central cave","Gible line and cave route.",55,52],
    ["Subarea","Ancient Quarry","Central quarry","Bronzong, Goodra, and ore route.",41,44],
    ["Subarea","Lonely Spring","Southwest spring","Carnivine and water route.",35,67],
    ["Subarea","Fabled Spring","Southwest spring","Cleffa, Clefairy, and Clefable night route.",32,70],
    ["Subarea","Celestica Trail","Southwest trail","Steelix and cliff routing.",36,62],
    ["Subarea","Bolderoll Ravine","South central ravine","Golem and ore route.",53,61],
    ["Subarea","Clamberclaw Cliffs","East cliffs","Gible line, Gligar, and Darkrai request route.",70,38],
    ["Subarea","Stonetooth Rows","East rows","Mismagius and high route checks.",74,46],
    ["Subarea","Sacred Plaza","Northeast plaza","Luxray, Rhyperior, and late story route.",66,55],
    ["Subarea","Moonview Arena","Northeast arena","Fourth story boss and Cresselia route.",78,20],
    ...[
      [28,38],[35,45],[43,42],[51,48],[56,56],[45,62],[33,68],[36,75],[54,70],[65,62],
      [73,55],[80,48],[76,35],[67,29],[58,24],[47,28],[40,34],[61,40],[70,20],[82,18]
    ].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Coronet Highlands","Wisp checklist marker.",xy[0],xy[1]])
  ],
  "Alabaster Icelands":[
    ["Camp","Snowfields Camp","Southwest entry","Main Icelands entry and snowfield reset point.",30,82],
    ["Camp","Icepeak Camp","Northern route","Second camp near Snowpoint and Icepeak routes.",58,35],
    ["Gate","Pearl Settlement gate","Pearl Settlement","Fast travel point for Pearl Clan routes.",54,34],
    ["Gate","Icepeak Arena gate","Icepeak Arena","Fast travel near fifth Noble arena after progress.",73,20],
    ["Gate","Snowpoint Temple gate","Snowpoint Temple","Fast travel reference for temple and Regigigas route.",62,36],
    ["Subarea","Avalanche Slopes","East slopes","Abomasnow, Glaceon, Garchomp, and Piloswine route.",60,64],
    ["Subarea","Arena's Approach","Northeast approach","Machamp and late story arena route.",68,30],
    ["Subarea","Icepeak Arena","Northeast arena","Fifth story boss route.",73,20],
    ["Subarea","Pearl Settlement","North settlement","Pearl Clan route hub.",54,34],
    ["Subarea","Snowpoint Temple","North temple","Gallade and Regigigas route.",62,36],
    ["Subarea","Bonechill Wastes","West wastes","Mamoswine and Tornadus weather route.",28,62],
    ["Subarea","Avalugg's Legacy","Central ice","Ice rock landmark and alpha routes.",52,56],
    ["Subarea","Heart's Crag","South central crag","Gardevoir, Froslass, and Snorunt route.",46,70],
    ["Subarea","Icebound Falls","East falls","Lucario and Electabuzz route.",72,46],
    ["Subarea","Lake Acuity","Northwest lake","Uxie and lake route.",22,26],
    ["Subarea","Snowfall Hot Spring","Central north spring","Gallade/Gardevoir region route.",56,36],
    ...[
      [27,80],[33,70],[25,60],[35,55],[45,58],[55,61],[66,65],[74,58],[78,44],[68,38],
      [58,34],[48,37],[38,42],[29,50],[22,28],[34,27],[46,26],[60,22],[73,20],[52,74]
    ].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Alabaster Icelands","Wisp checklist marker.",xy[0],xy[1]])
  ],
  "Jubilife Village":[
    ["Camp","Front Gate","South gate","Expedition departure and region select point.",50,87],
    ["Gate","Training Grounds gate","Northwest","Fast travel reference for battles and move tutoring.",28,30],
    ["Subarea","Galaxy Hall","Center","Research reports, rank ups, and request board.",50,38],
    ["Subarea","Craftworks","Village center","Recipe unlocks and crafting supplies.",42,50],
    ["Subarea","Pastures","East side","Storage and bulk release for Grit.",70,50],
    ["Subarea","Trading Post","West gate","Merit Points and evolution items.",20,56],
    ["Subarea","Farm","Southwest field","Farm upgrades and material harvests.",28,70],
    ...[[34,34],[45,43],[59,32],[64,48],[48,62],[27,58],[73,67]].map((xy,i) => ["Wisp",`Wisp ${String(i + 1).padStart(2,"0")}`,"Jubilife Village","Village wisp checklist marker.",xy[0],xy[1]])
  ]
};

Object.entries(mapOverlayData).forEach(([region, points]) => {
  if (mapData[region]) mapData[region].push(...points);
});

const trustedMapOverlays = {
  "Obsidian Fieldlands":[
    ["Camp","Fieldlands Camp","Northwest of Aspiration Hill","Starting camp and main Fieldlands entry.",34,82],
    ["Camp","Heights Camp","Center of Deertrack Heights","Unlocked after Mai's early request route.",45,36],
    ["Gate","Fieldlands entry","Southwest approach","Return point from Jubilife Village.",34,88],
    ["Gate","Heights route","Deertrack Heights","Fast-travel anchor around the second camp.",45,36],
    ["Gate","Grandtree Arena","Heartwood route","Fast-travel anchor near Kleavor's arena after story progress.",77,28],
    ["Gate","Lake Verity","Western lake","Post-game lake route and Mesprit area.",18,50],
    ["Subarea","Aspiration Hill","Southwest slopes","Tutorial route and first gathering loop.",38,75],
    ["Subarea","Horseshoe Plains","Southwest plains","Bidoof, Starly, Shinx, Ponyta, and early research.",43,62],
    ["Subarea","Deertrack Heights","Northwest high ground","Heights Camp, Geodude, Kricketot, and early story routing.",45,36],
    ["Subarea","Floaro Gardens","Northwest flowers","Shinx line and Shaymin request area.",52,22],
    ["Subarea","Windswept Run","Central river","Floatzel and river crossing route.",55,46],
    ["Subarea","Nature's Pantry","Central woods","Cherubi tree checks and alpha Blissey farm nearby.",59,58],
    ["Subarea","The Heartwood","Eastern forest","Bug, Grass, and Grandtree Arena approach.",73,45],
    ["Subarea","Grueling Grove","Northeast grove","Heracross and Kricketune checks.",80,27],
    ["Subarea","Sandgem Flats","West-center flats","Alpha Snorlax and Alakazam route.",56,39],
    ["Subarea","Obsidian Falls","East waterfall","Alpha Blissey XP route.",83,42],
    ["Subarea","Ramanas Island","Southern island","Post-game alpha loop and Landorus route.",44,78],
    ["Subarea","Lake Verity","Western lake","Mesprit and water route.",18,50],
    ["Wisp","Southwest wisp route","Fieldlands entry to Aspiration Hill","Route zone for Spiritomb wisp sweep.",33,76],
    ["Wisp","Lake Verity wisp route","Western lake rim","Route zone for Spiritomb wisp sweep.",18,50],
    ["Wisp","Heartwood wisp route","Eastern forest","Route zone for Spiritomb wisp sweep.",74,45],
    ["Wisp","Ramanas wisp route","Southern island and shore","Route zone for Spiritomb wisp sweep.",44,78]
  ],
  "Crimson Mirelands":[
    ["Camp","Mirelands Camp","Northwest of Golden Lowlands","Main Mirelands entry camp.",32,30],
    ["Camp","Bogbound Camp","North of Sludge Mound, south of Scarlet Bog","Swamp route camp unlocked by Request 31.",47,61],
    ["Gate","Mirelands entry","Golden Lowlands","Return point from Jubilife Village.",32,30],
    ["Gate","Bogbound Camp","Central bog","Fast-travel anchor for Scarlet Bog and Sludge Mound.",47,61],
    ["Gate","Diamond Settlement","North settlement","Diamond Clan fast-travel anchor.",46,22],
    ["Gate","Brava Arena","Northeast highlands","Fast-travel anchor near the Lilligant story route.",73,32],
    ["Subarea","Golden Lowlands","Northwest lowlands","Starting field, Pachirisu, Raichu, and Roselia routes.",37,36],
    ["Subarea","Solaceon Ruins","Northwest ruins","Unown and story route.",45,30],
    ["Subarea","Cloudpool Ridge","Northwest ridge","Onix and Roserade alpha route.",37,18],
    ["Subarea","Diamond Settlement","North settlement","Diamond Clan hub.",46,22],
    ["Subarea","Diamond Heath","North central heath","Route between settlement and arena.",59,29],
    ["Subarea","Brava Arena","Northeast highlands","Hisuian Lilligant noble arena.",73,32],
    ["Subarea","Lake Valor","Northeast lake","Azelf and lake route.",78,29],
    ["Subarea","Gapejaw Bog","West-center bog","Tangela, Carnivine, Croagunk, and request routes.",31,61],
    ["Subarea","Sludge Mound","Southwest mound","Hippowdon and mud route.",36,73],
    ["Subarea","Scarlet Bog","Central red marsh","Skuntank, digging route, and Enamorus zone.",55,59],
    ["Subarea","Bolderoll Slope","Northwest slope","Rhyhorn and rocky route.",43,41],
    ["Subarea","Ursa's Ring","East-center ring","Teddiursa, Ursaring, and Peat Block planning.",64,55],
    ["Subarea","Droning Meadow","Southeast meadow","Yanma and Yanmega route.",73,74],
    ["Subarea","Holm of Trials","Southeast island","Torterra, Sliggoo, and late Mirelands route.",78,78],
    ["Wisp","Golden Lowlands wisp route","Northwest lowlands","Route zone for Spiritomb wisp sweep.",37,36],
    ["Wisp","Scarlet Bog wisp route","Central marsh","Route zone for Spiritomb wisp sweep.",55,59],
    ["Wisp","Lake Valor wisp route","Northeast lake","Route zone for Spiritomb wisp sweep.",78,29],
    ["Wisp","Holm of Trials wisp route","Southeast island","Route zone for Spiritomb wisp sweep.",78,78]
  ],
  "Cobalt Coastlands":[
    ["Camp","Beachside Camp","West of Crossing Slope","Main Coastlands entry camp.",23,47],
    ["Camp","Coastlands Camp","Center of Sand's Reach","Unlocked camp for northern shore and sea routes.",40,25],
    ["Gate","Beachside entry","Ginkgo Landing","Return point from Jubilife Village.",23,47],
    ["Gate","Coastlands Camp","Sand's Reach","Fast-travel anchor for northern Coastlands.",40,25],
    ["Gate","Molten Arena","Firespit Island","Fast-travel anchor near Arcanine's arena after progress.",84,15],
    ["Gate","Seaside Hollow","South sea cave","Request 66 Manaphy route anchor.",45,78],
    ["Subarea","Ginkgo Landing","West beach","Entry beach and Ginter check route.",22,47],
    ["Subarea","Crossing Slope","West slope","Purugly and early Coastlands route.",28,39],
    ["Subarea","Aipom Hill","Northwest hill","Aipom and Ambipom routing.",37,22],
    ["Subarea","Sand's Reach","North shore","Coastlands Camp and Thundurus weather route.",40,25],
    ["Subarea","Islespy Shore","Northwest shore","Empoleon and northern shoreline.",31,16],
    ["Subarea","Veilstone Cape","North ridge","Machamp, Vulpix, and Growlithe routes.",58,27],
    ["Subarea","Windbreak Stand","Northeast ridge","Hisuian Growlithe checks.",65,25],
    ["Subarea","Firespit Island","Northeast volcano","Heatran, Magmar line, and story route.",84,15],
    ["Subarea","Tranquility Cove","Central bay","Mantyke, Qwilfish, and sea routing.",48,45],
    ["Subarea","Lunker's Lair","West bay","Tentacruel and water alpha route.",31,55],
    ["Subarea","Bathers' Lagoon","Southwest lagoon","Golduck and southern water route.",38,62],
    ["Subarea","Deadwood Haunt","Southwest shore","Duskull, Dusclops, and Dusknoir at night.",45,72],
    ["Subarea","Tombolo Walk","Southeast sandbar","Chansey and beach route.",62,66],
    ["Subarea","Seagrass Haven","South sea","Lumineon and pearl route.",64,76],
    ["Wisp","Ginkgo wisp route","Western beach","Route zone for Spiritomb wisp sweep.",22,47],
    ["Wisp","Firespit wisp route","Volcano island","Route zone for Spiritomb wisp sweep.",84,15],
    ["Wisp","Deadwood wisp route","Southwest haunt","Route zone for Spiritomb wisp sweep.",45,72],
    ["Wisp","Seagrass wisp route","Southern sea","Route zone for Spiritomb wisp sweep.",64,76]
  ],
  "Coronet Highlands":[
    ["Camp","Highlands Camp","Southeast of Heavenward Lookout","Main Highlands entry camp.",34,64],
    ["Camp","Mountain Camp","South of Lonely Spring, east of Sonorous Path","Unlocked camp for central mountain routes.",51,58],
    ["Camp","Summit Camp","North of Sacred Plaza, east of Moonview Arena","Late-story upper mountain camp.",73,22],
    ["Gate","Highlands entry","Heavenward Lookout","Return point from Jubilife Village.",34,64],
    ["Gate","Mountain Camp","Central mountain","Fast-travel anchor for cave, spring, and quarry routes.",51,58],
    ["Gate","Summit Camp","Upper mountain","Fast-travel anchor for Moonview, Sacred Plaza, and Temple routes.",73,22],
    ["Gate","Moonview Arena","Northeast arena","Electrode and Cresselia route anchor.",76,20],
    ["Gate","Temple of Sinnoh","Summit","Late-story and Arceus route anchor.",79,12],
    ["Subarea","Heavenward Lookout","Southwest lookout","Early Highlands route.",31,65],
    ["Subarea","Wayward Wood","West woods","Mothim and lower forest route.",28,45],
    ["Subarea","Wayward Cave","Lower central cave","Gible line and cave routing.",40,62],
    ["Subarea","Ancient Quarry","Central quarry","Bronzong, Goodra, and ore route.",47,45],
    ["Subarea","Lonely Spring","Southwest spring","Carnivine and water route.",32,72],
    ["Subarea","Fabled Spring","Southwest spring","Cleffa, Clefairy, and Clefable night route.",25,80],
    ["Subarea","Sonorous Path","Lower central path","Mountain Camp approach.",45,63],
    ["Subarea","Celestica Trail","Central trail","Steelix and cliff routing.",42,56],
    ["Subarea","Bolderoll Ravine","South central ravine","Golem, ore, and rocky route.",48,67],
    ["Subarea","Clamberclaw Cliffs","East cliffs","Gible line, Gligar, and Darkrai request route.",66,43],
    ["Subarea","Stonetooth Rows","East rows","Luxray and Mismagius checks.",70,53],
    ["Subarea","Celestica Ruins","East upper ruins","Hisuian Voltorb and upper route.",63,38],
    ["Subarea","Sacred Plaza","Northeast plaza","Late-story route and high-level alphas.",70,31],
    ["Subarea","Moonview Arena","Northeast arena","Hisuian Electrode noble arena and Cresselia post-game.",76,20],
    ["Subarea","Temple of Sinnoh","Summit","Story climax and Arceus route.",79,12],
    ["Wisp","Wayward wisp route","West woods and cave","Route zone for Spiritomb wisp sweep.",31,50],
    ["Wisp","Spring wisp route","Lonely/Fabled Spring","Route zone for Spiritomb wisp sweep.",28,75],
    ["Wisp","Cliff wisp route","Clamberclaw and Stonetooth","Route zone for Spiritomb wisp sweep.",68,47],
    ["Wisp","Summit wisp route","Moonview and temple path","Route zone for Spiritomb wisp sweep.",76,20]
  ],
  "Alabaster Icelands":[
    ["Camp","Snowfields Camp","South of Whiteout Valley","Main Icelands entry camp.",25,77],
    ["Camp","Icepeak Camp","Northwest of Avalugg's Legacy, southeast of Glacier Terrace","Unlocked camp for temple and arena routes.",50,42],
    ["Gate","Snowfields entry","Whiteout Valley","Return point from Jubilife Village.",25,77],
    ["Gate","Icepeak Camp","Central north route","Fast-travel anchor for Lake Acuity, temple, and arena.",50,42],
    ["Gate","Pearl Settlement","East settlement","Pearl Clan fast-travel anchor.",78,45],
    ["Gate","Icepeak Arena","Northeast arena","Fast-travel anchor near Avalugg's arena after progress.",78,24],
    ["Gate","Snowpoint Temple","Northeast temple","Regigigas and temple route anchor.",78,12],
    ["Subarea","Whiteout Valley","Southwest valley","Starting snow route.",24,70],
    ["Subarea","Crevasse Passage","West passage","Route toward Bonechill Wastes.",31,54],
    ["Subarea","Bonechill Wastes","West wastes","Mamoswine, Zorua tunnels, and Tornadus zone.",31,61],
    ["Subarea","Avalugg's Legacy","Center ice formation","Ice landmark and central route.",50,53],
    ["Subarea","Glacier Terrace","Northwest terrace","Lake Acuity approach.",42,35],
    ["Subarea","Lake Acuity","North lake","Uxie and lake route.",50,18],
    ["Subarea","Snowpoint Temple","Northeast temple","Gallade and Regigigas route.",78,12],
    ["Subarea","Hibernal Cave","Northwest cave","Cave route near the frozen lake.",41,42],
    ["Subarea","Icebound Falls","East falls","Lucario and Electabuzz route.",76,50],
    ["Subarea","Avalanche Slopes","Southeast slopes","Abomasnow, Glaceon, Garchomp, and Piloswine route.",63,68],
    ["Subarea","Arena's Approach","Northeast approach","Machamp and late story arena route.",72,31],
    ["Subarea","Pearl Settlement","East settlement","Pearl Clan hub.",78,45],
    ["Subarea","Heart's Crag","Southwest crag","Gardevoir, Froslass, and Snorunt route.",38,75],
    ["Subarea","Snowfall Hot Spring","Southwest spring","Gallade/Gardevoir route and healing landmark.",33,69],
    ["Subarea","Icepeak Arena","Northeast arena","Hisuian Avalugg noble arena.",78,24],
    ["Wisp","Snowfields wisp route","Southwest entry and valley","Route zone for Spiritomb wisp sweep.",25,77],
    ["Wisp","Acuity wisp route","North lake and terrace","Route zone for Spiritomb wisp sweep.",50,18],
    ["Wisp","Pearl wisp route","East settlement and falls","Route zone for Spiritomb wisp sweep.",78,45],
    ["Wisp","Avalanche wisp route","Southeast slopes","Route zone for Spiritomb wisp sweep.",63,68]
  ],
  "Jubilife Village":[
    ["Camp","Front Gate","South gate","Expedition departure and region select point.",50,87],
    ["Gate","Training Grounds gate","Northwest","Fast-travel reference for battles and move tutoring.",28,30],
    ["Subarea","Galaxy Hall","Center","Research reports, rank ups, and request board.",50,38],
    ["Subarea","Craftworks","Village center","Recipe unlocks and crafting supplies.",42,50],
    ["Subarea","Pastures","East side","Storage and bulk release for Grit.",70,50],
    ["Subarea","Trading Post","West gate","Merit Points and evolution items.",20,56],
    ["Subarea","Farm","Southwest field","Farm upgrades and material harvests.",28,70],
    ["Wisp","Village wisp route","Jubilife Village","Route zone for the village Spiritomb wisps.",48,56]
  ]
};

const trustedOverlayKinds = new Set(["Camp", "Gate", "Subarea", "Wisp"]);
Object.entries(trustedMapOverlays).forEach(([region, points]) => {
  if (!mapData[region]) return;
  mapData[region] = mapData[region].filter(point => !trustedOverlayKinds.has(point[0]));
  mapData[region].push(...points);
});

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
  [37,"The Fragrance of Nostalgic Herbs","Crimson Mirelands","Bring Risa a Tangela, found in places such as Gapejaw Bog."],
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
  ["Giratina","Spring Path / Turnback Cave","After the late-story boss sequence."],
  ["Manaphy + Phione","Seaside Hollow","Request 66."],
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
  ["Obsidian Fieldlands","Early research route, alpha Snorlax, alpha Rapidash, Mesprit, Landorus, Shaymin, and the first story boss route."],
  ["Crimson Mirelands","Ursaluna digging, Azelf, Enamorus, Togepi, Petilil, Ursaring, and the second story boss route."],
  ["Cobalt Coastlands","Basculegion routes, Manaphy, Heatran, Thundurus, Growlithe, and the third story boss route."],
  ["Coronet Highlands","Sneasler routes, Cresselia, Darkrai, Gible line, Clefairy, Electabuzz, and the fourth story boss route."],
  ["Alabaster Icelands","Braviary routes, Uxie, Regigigas, Giratina, Zorua, Mamoswine, and the fifth story boss route."]
];

function $(id){ return document.getElementById(id); }

function typeChips(types) {
  return types.map(type => `<span class="type-chip" data-type="${type}" style="background:${TYPE_COLORS[type]}">${type}</span>`).join("");
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
  if (SPRITE_OVERRIDES[name]) return SPRITE_OVERRIDES[name];
  return `https://img.pokemondb.net/sprites/scarlet-violet/normal/${spriteName(name)}.png`;
}

function renderTable(id, headers, rows) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderCards() {
  if ($("starterCards")) $("starterCards").innerHTML = starters.map(p => `<article class="card starter-card"><header><img src="${spriteUrl(p.name)}" alt="${p.name} sprite"><div><h3>${p.name}</h3>${typeChips(p.types)}</div></header>${statChart(p.stats)}<p>${p.text}</p></article>`).join("");
  if ($("nobleCards")) $("nobleCards").innerHTML = nobles.map(n => `<article class="card"><h3>${n[0]}</h3>${typeChips(n[1].split("/"))}<p><strong>Battle answers:</strong> ${n[2]}</p><p>${n[3]}</p></article>`).join("");
  if ($("regionCards")) $("regionCards").innerHTML = regions.map(r => `<article class="card"><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join("");
}

function statChart(stats, extraClass = "") {
  const labels = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed"];
  const rows = stats.map((s,i) => {
    const tier = s >= 120 ? "great" : s >= 90 ? "good" : s >= 65 ? "ok" : "low";
    return `<div class="stat-row ${tier}"><span class="stat-name">${labels[i]}</span><span class="stat-value">${s}</span><span class="stat-track"><span class="stat-fill" style="width:${Math.min(100, s / 160 * 100)}%"></span></span></div>`;
  }).join("");
  return `<div class="stat-chart ${extraClass}"><h4>Base stats</h4>${rows}<div class="stat-total"><span>Total</span><strong>${stats.reduce((sum, stat) => sum + stat, 0)}</strong></div></div>`;
}

function renderMeta() {
  if (!$("metaCards")) return;
  const q = $("metaSearch").value.toLowerCase();
  const role = $("metaRole").value;
  $("metaCards").innerHTML = meta.filter(p => {
    const moves = recommendedMovesetForPokemon(p.name).join(", ") || p.moves;
    const text = `${p.name} ${p.role} ${moves} ${p.note}`.toLowerCase();
    return text.includes(q) && (role === "all" || p.role.includes(role));
  }).map(p => {
    const moves = recommendedMovesetForPokemon(p.name).join(", ") || p.moves;
    return `<article class="card viable-card"><header><img src="${spriteUrl(p.name)}" alt="${p.name} sprite"><div><h3>${p.name}</h3>${typeChips(p.types)}<br>${p.role.split(" ").map(r => `<span class="tag">${r}</span>`).join("")}</div></header>${statChart(p.stats)}<p><strong>Moves:</strong> ${moves}</p><p>${p.note}</p></article>`;
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

function normalizeLookup(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findPokemonByName(name) {
  const normalized = normalizeLookup(name || "");
  return POKEDEX.find(p => normalizeLookup(p.name) === normalized) ||
    POKEDEX.find(p => normalizeLookup(p.name) === normalized.replace(/^hisuian/, ""));
}

function findMoveForSlot(slot, moveName) {
  const normalizedMove = normalizeLookup(moveName || "");
  if (!slot || !normalizedMove) return "";
  return learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value)
    .find(candidate => normalizeLookup(candidate) === normalizedMove) || "";
}

function hasMovePrefixForSlot(slot, moveName) {
  const normalizedMove = normalizeLookup(moveName || "");
  if (!slot || !normalizedMove) return false;
  return learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value)
    .some(candidate => normalizeLookup(candidate).startsWith(normalizedMove));
}

function learnableMovesForPokemon(name) {
  const pokemon = findPokemonByName(name);
  return pokemon ? (window.PLA_LEARNSETS?.[pokemon.name] || []) : [];
}

function pokemonStats(name) {
  const pokemon = findPokemonByName(name);
  return pokemon ? (window.PLA_BASE_STATS?.[pokemon.name] || []) : [];
}

function attackingProfile(member) {
  const stats = pokemonStats(member.pokemon.name);
  const attack = stats[1] || 0;
  const specialAttack = stats[3] || 0;
  return {
    attack,
    specialAttack,
    strongest: Math.max(attack, specialAttack, 1),
    gap: Math.abs(attack - specialAttack)
  };
}

function usesClearlyWeakerAttack(member, details) {
  if (!["Physical", "Special"].includes(details.category)) return false;
  const profile = attackingProfile(member);
  if (profile.gap < 12) return false;
  return (details.category === "Physical" && profile.specialAttack > profile.attack) ||
    (details.category === "Special" && profile.attack > profile.specialAttack);
}

function relevantAttackStat(member, details) {
  const profile = attackingProfile(member);
  if (details.category === "Physical") return profile.attack;
  if (details.category === "Special") return profile.specialAttack;
  return profile.strongest;
}

function moveEntry(move) {
  return {move, details:moveDetails(move)};
}

function memberMoveEntries(member) {
  return member.moves
    .map(move => move.name)
    .filter(Boolean)
    .map(moveEntry)
    .filter(entry => entry.details.type);
}

function isStatusSupport(move) {
  return STATUS_SUPPORT_MOVES.has(move);
}

function isSetupSupport(move) {
  return SETUP_SUPPORT_MOVES.has(move);
}

function isSupportMove(move, details) {
  return details.category === "Status" && (isStatusSupport(move) || isSetupSupport(move));
}

function hasRecommendationException(move, details) {
  return isSupportMove(move, details) || SPECIAL_EFFECT_ATTACKS.has(move) || STATUS_PAYOFF_MOVES.has(move);
}

function passesRecommendationRules(member, move, details, profileIncludes = false) {
  if (details.accuracy < 85) return false;
  if (!details.power && !isSupportMove(move, details)) return false;
  if (details.power && usesClearlyWeakerAttack(member, details)) return false;
  if (details.power && details.power < 70 && !hasRecommendationException(move, details)) return false;
  if (details.power && details.accuracy < 95 && details.power < 90 && !profileIncludes && !hasRecommendationException(move, details)) return false;
  return true;
}

function hasMoveByType(entries, type) {
  return entries.some(entry => entry.details.power && entry.details.type === type);
}

function hasStatusSupport(entries) {
  return entries.some(entry => isStatusSupport(entry.move));
}

function hasSetupSupport(entries) {
  return entries.some(entry => isSetupSupport(entry.move));
}

function hasCritSupport(entries) {
  return entries.some(entry => entry.move === "Triple Arrows" || entry.move === "Focus Energy");
}

function isRedundantMove(member, move, details, entries) {
  if (NEVER_RECOMMENDED_MOVES.has(move)) return true;
  if (isStatusSupport(move)) return hasStatusSupport(entries);
  if (isSetupSupport(move)) return hasSetupSupport(entries);
  if (!details.power) return true;
  if (hasMoveByType(entries, details.type)) return true;
  if (details.type === "Normal" && !member.pokemon.types.includes("Normal") && details.power >= 100) return true;
  return false;
}

function recommendationScoreForEntry(member, move, details, gain, entries) {
  const profileMoves = MOVE_PROFILE_HINTS[member.pokemon.name] || [];
  const profileIndex = profileMoves.indexOf(move);
  if (profileIndex !== -1) return 10000 - profileIndex * 100 + gain;
  if (isStatusSupport(move)) return 250 + details.accuracy + (STATUS_PAYOFF_MOVES.size ? 0 : 0);
  if (isSetupSupport(move)) return 220 + (move === "Victory Dance" ? 60 : 0);
  let score = recommendationScore(member, move, gain);
  if (HIGH_CRIT_MOVES.has(move) && (hasCritSupport(entries) || learnableMovesForPokemon(member.pokemon.name).includes("Triple Arrows"))) score += 50;
  if (STATUS_PAYOFF_MOVES.has(move) && hasStatusSupport(entries)) score += 60;
  if (move === "Triple Arrows" && learnableMovesForPokemon(member.pokemon.name).some(candidate => HIGH_CRIT_MOVES.has(candidate))) score += 60;
  return score;
}

function moveDetails(move) {
  const details = window.PLA_MOVE_DETAILS?.[move] || {};
  return {
    type: details.type || MOVE_TYPE_MAP[move] || "",
    category: details.category || "Status",
    power: details.power || 0,
    accuracy: details.accuracy || MOVE_ACCURACY[move] || 100
  };
}

function moveOptionHtml(move) {
  const details = moveDetails(move);
  const label = details.type ? `${details.type} ${details.category} ${details.power || "-"}` : "";
  return `<option value="${move}">${label}</option>`;
}

function moveTypeForSlot(slot, moveName) {
  const move = findMoveForSlot(slot, moveName);
  return move ? moveDetails(move).type : "";
}

function getTeam() {
  return [...document.querySelectorAll(".team-slot")].map(slot => {
    const pokemonName = slot.querySelector(".team-pokemon")?.value;
    const pokemon = findPokemonByName(pokemonName);
    const moves = [...slot.querySelectorAll(".move-row")].map(row => ({
      name: row.querySelector(".move-name")?.value.trim() || "",
      type: row.querySelector(".move-type")?.value || ""
    })).filter(move => move.type);
    return pokemon ? {pokemon, moves, slotIndex:+slot.dataset.slot} : null;
  }).filter(Boolean);
}

function suggestedMovesForPokemon(name) {
  const generated = recommendedMovesetForPokemon(name);
  if (generated.length) return generated;
  return STARTER_MOVESETS[name] || [];
}

function renderTeamBuilder() {
  if (!$("teamBuilder")) return;
  if (!$("teamBuilder").children.length) {
    $("teamBuilder").innerHTML = Array.from({length: 6}, (_, index) => teamSlotHtml(index)).join("");
  }
  markSelectedTeamSlot();
}

function teamSlotHtml(index) {
  return `<article class="team-slot" data-slot="${index}">
    <div class="team-slot-head">
      <label>Pokemon ${index + 1}<input class="team-pokemon" list="pokemonNames" placeholder="Select or type Pokemon"></label>
      <div class="team-types"></div>
    </div>
    <div class="move-grid">${Array.from({length: 4}, (_, moveIndex) => moveRowHtml(moveIndex, index)).join("")}</div>
    <datalist id="moveNames-${index}"></datalist>
  </article>`;
}

function moveRowHtml(index, slotIndex) {
  return `<div class="move-row">
    <input class="move-name" list="moveNames-${slotIndex}" placeholder="Select Pokemon first">
    <input class="move-type" type="hidden">
    <small class="move-status"></small>
  </div>`;
}

function renderMoveDatalist() {
  if (!$("teamBuilder")) return;
  if (!document.querySelector("#pokemonNames")) {
    const pokemonDatalist = document.createElement("datalist");
    pokemonDatalist.id = "pokemonNames";
    pokemonDatalist.innerHTML = POKEDEX.map(p => `<option value="${p.name}">#${String(p.num).padStart(3,"0")} ${p.types.join("/")}</option>`).join("");
    document.body.appendChild(pokemonDatalist);
  }
  document.querySelectorAll(".team-slot").forEach(updateMoveDatalist);
}

function updateMoveDatalist(slot) {
  const moves = learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value);
  const datalist = slot.querySelector(`datalist`);
  if (datalist) datalist.innerHTML = moves.map(moveOptionHtml).join("");
  slot.querySelectorAll(".move-name").forEach((input, index) => {
    input.placeholder = moves.length ? `Move ${index + 1}` : "Select Pokemon first";
  });
}

function updateSelectedPokemon(slot, pokemonName) {
  const pokemon = findPokemonByName(pokemonName);
  selectRecommendationSlot(slot);
  slot.querySelector(".team-types").innerHTML = pokemon ? typeChips(pokemon.types) : "";
  updateMoveDatalist(slot);
  slot.querySelectorAll(".move-row").forEach(row => applyMoveTypeLock(row, true));
}

function selectRecommendationSlot(slot) {
  if (!slot) return;
  selectedRecommendationSlot = +slot.dataset.slot || 0;
  markSelectedTeamSlot();
}

function markSelectedTeamSlot() {
  document.querySelectorAll(".team-slot").forEach(slot => {
    slot.classList.toggle("selected-team-slot", +slot.dataset.slot === selectedRecommendationSlot);
  });
}

function applyMoveTypeLock(row, clearInvalid = false) {
  const moveName = row.querySelector(".move-name").value.trim();
  const typeInput = row.querySelector(".move-type");
  const moveInput = row.querySelector(".move-name");
  const status = row.querySelector(".move-status");
  const slot = row.closest(".team-slot");
  const move = findMoveForSlot(slot, moveName);
  const details = move ? moveDetails(move) : null;
  row.classList.remove("selected-move", "invalid-move");
  moveInput.style.removeProperty("--move-color");
  typeInput.value = "";
  if (status) status.textContent = "";
  if (!moveName) return;
  if (move && details.type) {
    moveInput.value = move;
    typeInput.value = details.type;
    row.classList.add("selected-move");
    moveInput.style.setProperty("--move-color", TYPE_COLORS[details.type] || "");
    if (status) status.textContent = `${details.type} ${details.category}${details.power ? ` / ${details.power} power` : ""}`;
    return;
  }
  if (clearInvalid || !hasMovePrefixForSlot(slot, moveName)) {
    moveInput.value = "";
    row.classList.add("invalid-move");
    if (status) status.textContent = "Move not learnable by this Pokemon.";
  }
}

function readSavedTeams() {
  try {
    return JSON.parse(localStorage.getItem(TEAM_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeSavedTeams(teams) {
  localStorage.setItem(TEAM_STORAGE_KEY, JSON.stringify(teams));
}

function collectTeamState() {
  return [...document.querySelectorAll(".team-slot")].map(slot => ({
    pokemon: slot.querySelector(".team-pokemon")?.value.trim() || "",
    moves: [...slot.querySelectorAll(".move-name")].map(input => input.value.trim())
  }));
}

function renderSavedTeams() {
  const select = $("savedTeams");
  if (!select) return;
  const current = select.value;
  const names = Object.keys(readSavedTeams()).sort((a,b) => a.localeCompare(b));
  select.innerHTML = `<option value="">Saved teams</option>` + names.map(name => `<option value="${name}">${name}</option>`).join("");
  if (names.includes(current)) select.value = current;
}

function applyTeamState(state) {
  if (!$("teamBuilder")) return;
  $("teamBuilder").innerHTML = Array.from({length: 6}, (_, index) => teamSlotHtml(index)).join("");
  renderMoveDatalist();
  state.slice(0, 6).forEach((savedSlot, index) => {
    const slot = document.querySelectorAll(".team-slot")[index];
    if (!slot) return;
    slot.querySelector(".team-pokemon").value = savedSlot.pokemon || "";
    updateSelectedPokemon(slot, savedSlot.pokemon || "");
    slot.querySelectorAll(".move-row").forEach((row, moveIndex) => {
      row.querySelector(".move-name").value = savedSlot.moves?.[moveIndex] || "";
      applyMoveTypeLock(row, true);
    });
  });
  selectedRecommendationSlot = 0;
  markSelectedTeamSlot();
  renderCoverage();
}

function saveCurrentTeam() {
  if (!$("teamName")) return;
  const name = $("teamName").value.trim() || "Untitled team";
  const teams = readSavedTeams();
  teams[name] = collectTeamState();
  writeSavedTeams(teams);
  renderSavedTeams();
  $("savedTeams").value = name;
}

function loadSelectedTeam() {
  const name = $("savedTeams")?.value;
  if (!name) return;
  const state = readSavedTeams()[name];
  if (!state) return;
  if ($("teamName")) $("teamName").value = name;
  applyTeamState(state);
}

function deleteSelectedTeam() {
  const select = $("savedTeams");
  const name = select?.value;
  if (!name) return;
  const teams = readSavedTeams();
  delete teams[name];
  writeSavedTeams(teams);
  if ($("teamName")) $("teamName").value = "";
  renderSavedTeams();
}

function offensiveCoverageCount(moveTypes) {
  return POKEDEX.filter(target => Math.max(...moveTypes.map(type => damageMultiplier(type, target.types))) >= 2).length;
}

function recommendationScore(member, move, gain) {
  const details = moveDetails(move);
  const profile = attackingProfile(member);
  const categoryMultiplier = details.category === "Status" ? .25 : 1;
  const statMultiplier = relevantAttackStat(member, details) / profile.strongest;
  const stabMultiplier = member.pokemon.types.includes(details.type) ? 1.5 : 1;
  const accuracyMultiplier = details.accuracy / 100;
  const adjustedPower = details.power * categoryMultiplier * statMultiplier * stabMultiplier * accuracyMultiplier;
  return adjustedPower * 2 + gain * .55;
}

function moveRecommendationsForMember(member, currentMoveTypes) {
  const baseTypes = [...new Set(currentMoveTypes)];
  const baseScore = baseTypes.length ? offensiveCoverageCount(baseTypes) : 0;
  const selectedMoves = new Set(member.moves.map(move => normalizeLookup(move.name)));
  const entries = memberMoveEntries(member);
  const candidates = learnableMovesForPokemon(member.pokemon.name)
    .filter(move => !NEVER_RECOMMENDED_MOVES.has(move))
    .filter(move => !selectedMoves.has(normalizeLookup(move)))
    .map(move => {
      const details = moveDetails(move);
      const type = details.type;
      if (!type) return null;
      const profileIncludes = (MOVE_PROFILE_HINTS[member.pokemon.name] || []).includes(move);
      const support = isSupportMove(move, details);
      if (!passesRecommendationRules(member, move, details, profileIncludes)) return null;
      const nextTypes = [...new Set([...baseTypes, type])];
      const gain = offensiveCoverageCount(nextTypes) - baseScore;
      return {...details, move, gain, support, stab:member.pokemon.types.includes(type), score:recommendationScoreForEntry(member, move, details, gain, entries)};
    })
    .filter(Boolean)
    .sort((a,b) => b.score - a.score || b.power - a.power || b.gain - a.gain || a.move.localeCompare(b.move));
  const picked = [];
  const workingEntries = [...entries];
  candidates.forEach(candidate => {
    if (picked.length >= 4) return;
    if (isRedundantMove(member, candidate.move, candidate, workingEntries)) return;
    picked.push(candidate);
    workingEntries.push({move:candidate.move, details:candidate});
  });
  return picked;
}

function recommendedMovesetForPokemon(name) {
  const pokemon = findPokemonByName(name);
  if (!pokemon) return [];
  const profileMoves = MOVE_PROFILE_HINTS[pokemon.name] || [];
  const member = {pokemon, moves:[], slotIndex:0};
  const generated = moveRecommendationsForMember(member, []);
  const validProfileMoves = profileMoves
    .filter(move => learnableMovesForPokemon(pokemon.name).some(candidate => normalizeLookup(candidate) === normalizeLookup(move)))
    .filter(move => !NEVER_RECOMMENDED_MOVES.has(move))
    .filter(move => passesRecommendationRules(member, move, moveDetails(move), true));
  const merged = [...validProfileMoves, ...generated.map(rec => rec.move)];
  return [...new Set(merged)].slice(0, 4);
}

function renderMoveRecommendations(team, moveTypes) {
  const mount = $("moveRecommendations");
  if (!mount) return;
  if (!team.length) {
    mount.innerHTML = `<p class="muted-text">Select Pokemon to see coverage-focused move suggestions.</p>`;
      return;
  }
  const selected = team.find(member => member.slotIndex === selectedRecommendationSlot) || team[0];
  const recs = moveRecommendationsForMember(selected, moveTypes);
  const items = recs.length ? recs.map(rec => {
    const gain = rec.gain > 0 ? `+${rec.gain} super-effective targets` : "no new super-effective targets";
    const damage = rec.power ? `${rec.power} dmg` : rec.category;
    const accuracy = rec.accuracy === 100 ? "100 acc" : `${rec.accuracy} acc`;
    const stab = rec.stab ? `<em>STAB</em>` : "";
    return `<li title="${gain}"><span>${typeChips([rec.type])}<strong>${rec.move}</strong>${stab}<small>${rec.type} / ${damage} / ${accuracy}</small></span><button class="recommendation-button" type="button" data-slot="${selected.slotIndex}" data-move="${rec.move}">Add</button></li>`;
  }).join("") : `<li><span><strong>No available move suggestions</strong><small>Accurate damaging recommendations are already represented or unavailable.</small></span></li>`;
  mount.innerHTML = `<article class="recommendation-card"><h4>${selected.pokemon.name}</h4><p class="muted-text">Recommendations use learnset, STAB, category fit, coverage gain, power, and accuracy.</p><ul>${items}</ul></article>`;
}

function renderCoverage() {
  if (!$("coverageTable") || !$("coverageSummary")) return;
  const team = getTeam();
  const moveTypes = [...new Set(team.flatMap(member => member.moves.map(move => move.type)))];
  const rows = POKEDEX.map(target => {
    const best = moveTypes.length ? Math.max(...moveTypes.map(type => damageMultiplier(type, target.types))) : 1;
    const bestTypes = moveTypes.filter(type => damageMultiplier(type, target.types) === best);
    return {...target, best, bestTypes};
  });
  const superEffective = rows.filter(r => r.best >= 2);
  const neutral = rows.filter(r => r.best === 1);
  const resisted = rows.filter(r => r.best > 0 && r.best < 1);
  const immune = rows.filter(r => r.best === 0);
  const defensive = TYPES.map(type => {
    const multipliers = team.map(member => damageMultiplier(type, member.pokemon.types));
    return {
      type,
      weak: multipliers.filter(mult => mult > 1).length,
      resist: multipliers.filter(mult => mult > 0 && mult < 1).length,
      immune: multipliers.filter(mult => mult === 0).length,
      neutral: multipliers.filter(mult => mult === 1).length
    };
  });
  const problemWeaknesses = defensive.filter(row => row.weak > row.resist + row.immune).sort((a,b) => b.weak - a.weak);
  renderMoveRecommendations(team, moveTypes);
  $("coverageSummary").innerHTML = [
    ["Team members", team.length],
    ["Move types", moveTypes.length],
    ["Hit super-effectively", superEffective.length],
    ["Problem weaknesses", problemWeaknesses.length]
  ].map(([label, val]) => `<div><strong>${val}</strong><span>${label}</span></div>`).join("");
  if ($("offenseBreakdown")) $("offenseBreakdown").innerHTML = [
    ["Powerful to", superEffective],
    ["Neutral to", neutral],
    ["Not very effective to", resisted],
    ["Ineffective to", immune]
  ].map(([label, list]) => coverageGroup(label, list)).join("");
  if ($("defenseBreakdown")) $("defenseBreakdown").innerHTML = defensive.map(row => {
    const label = row.immune ? "Has immunity" : row.weak ? "Weak on team" : row.resist ? "Resisted" : "Neutral";
    return `<div class="defense-row"><span>${typeChips([row.type])}</span><strong>${label}</strong><small>${row.weak} weak / ${row.resist} resist / ${row.immune} immune / ${row.neutral} neutral</small></div>`;
  }).join("");
  renderTable("coverageTable", ["No.","Pokemon","Types","Best hit","Best move types"], rows
    .sort((a,b) => b.best - a.best || a.num - b.num)
    .map(p => [`#${String(p.num).padStart(3,"0")}`, p.name, typeChips(p.types), `${p.best}x`, p.bestTypes.length ? typeChips(p.bestTypes) : "Add move types"]));
}

function coverageGroup(label, list) {
  const preview = list.slice(0, 16).map(p => p.name).join(", ");
  const extra = list.length > 16 ? `, +${list.length - 16} more` : "";
  return `<div class="coverage-group"><strong>${label}</strong><span>${list.length}</span><p>${preview || "None"}${extra}</p></div>`;
}

function multiplierLabel(multiplier) {
  if (multiplier === 0) return "0";
  if (multiplier === .5) return "0.5";
  if (multiplier === 2) return "2";
  return "1";
}

function renderTypeChart() {
  const table = $("typeChartTable");
  if (!table) return;
  const header = `<tr><th class="type-axis-head">Atk / Def</th>${TYPES.map(type => `<th>${typeChips([type])}</th>`).join("")}</tr>`;
  const colgroup = `<colgroup><col class="type-chart-axis-col">${TYPES.map(() => `<col>`).join("")}</colgroup>`;
  const rows = TYPES.map(attack => {
    const cells = TYPES.map(defense => {
      const multiplier = damageMultiplier(attack, [defense]);
      return `<td class="type-matchup type-matchup-${String(multiplier).replace(".","-")}">${multiplierLabel(multiplier)}</td>`;
    }).join("");
    return `<tr><th>${typeChips([attack])}</th>${cells}</tr>`;
  }).join("");
  table.innerHTML = `${colgroup}<thead>${header}</thead><tbody>${rows}</tbody>`;
}

function renderNatures() {
  const table = $("natureTable");
  if (!table) return;
  const cols = ["Attack","Defense","Sp. Atk","Sp. Def","Speed"];
  const rows = [
    ["Attack","Hardy","Lonely","Adamant","Naughty","Brave"],
    ["Defense","Bold","Docile","Impish","Lax","Relaxed"],
    ["Sp. Atk","Modest","Mild","Bashful","Rash","Quiet"],
    ["Sp. Def","Calm","Gentle","Careful","Quirky","Sassy"],
    ["Speed","Timid","Hasty","Jolly","Naive","Serious"]
  ];
  table.classList.add("nature-matrix");
  table.innerHTML = `<thead><tr><th></th>${cols.map(col => `<th>- ${col}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr><th>+ ${row[0]}</th>${row.slice(1).map(nature => `<td>${nature}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function mapMarkerLabel(point) {
  if (point[0] === "Subarea") return point[1];
  if (point[0] === "Camp") return "C";
  if (point[0] === "Gate") return "G";
  if (point[0] === "Wisp") return "W";
  if (point[0] === "Landmark") return "L";
  return point[0][0];
}

function clampMapView() {
  const map = $("regionMap");
  if (!map) return;
  const rect = map.getBoundingClientRect();
  if (mapViewState.scale <= 1) {
    mapViewState.x = 0;
    mapViewState.y = 0;
    return;
  }
  const minX = rect.width - rect.width * mapViewState.scale;
  const minY = rect.height - rect.height * mapViewState.scale;
  mapViewState.x = Math.min(0, Math.max(minX, mapViewState.x));
  mapViewState.y = Math.min(0, Math.max(minY, mapViewState.y));
}

function applyMapTransform() {
  const layer = $("mapLayer");
  if (!layer) return;
  clampMapView();
  layer.style.transform = `translate(${mapViewState.x}px, ${mapViewState.y}px) scale(${mapViewState.scale})`;
  if ($("mapZoomLabel")) $("mapZoomLabel").textContent = `${Math.round(mapViewState.scale * 100)}%`;
}

function setMapZoom(nextScale, anchorX = null, anchorY = null) {
  const map = $("regionMap");
  const rect = map?.getBoundingClientRect();
  const oldScale = mapViewState.scale;
  const scale = Math.min(4, Math.max(1, nextScale));
  if (!rect || scale === oldScale) return;
  const ax = anchorX ?? rect.width / 2;
  const ay = anchorY ?? rect.height / 2;
  mapViewState.x = ax - (ax - mapViewState.x) * (scale / oldScale);
  mapViewState.y = ay - (ay - mapViewState.y) * (scale / oldScale);
  mapViewState.scale = scale;
  applyMapTransform();
}

function resetMapView(region = mapViewState.region) {
  mapViewState.region = region;
  mapViewState.scale = 1;
  mapViewState.x = 0;
  mapViewState.y = 0;
  applyMapTransform();
}

function bindMapInteractions() {
  const map = $("regionMap");
  if (!map || map.dataset.bound === "true") return;
  map.dataset.bound = "true";
  map.addEventListener("pointerdown", event => {
    if (event.target.closest(".marker")) return;
    mapViewState.dragging = true;
    mapViewState.startX = event.clientX;
    mapViewState.startY = event.clientY;
    mapViewState.originX = mapViewState.x;
    mapViewState.originY = mapViewState.y;
    map.setPointerCapture(event.pointerId);
  });
  map.addEventListener("pointermove", event => {
    if (!mapViewState.dragging) return;
    mapViewState.x = mapViewState.originX + event.clientX - mapViewState.startX;
    mapViewState.y = mapViewState.originY + event.clientY - mapViewState.startY;
    applyMapTransform();
  });
  ["pointerup","pointercancel","pointerleave"].forEach(type => {
    map.addEventListener(type, () => { mapViewState.dragging = false; });
  });
  map.addEventListener("wheel", event => {
    event.preventDefault();
    const rect = map.getBoundingClientRect();
    setMapZoom(mapViewState.scale * (event.deltaY < 0 ? 1.18 : .85), event.clientX - rect.left, event.clientY - rect.top);
  }, {passive:false});
}

function renderMap() {
  if (!$("regionMap") || !$("regionSelect")) return;
  const region = $("regionSelect").value;
  if (mapViewState.region !== region) resetMapView(region);
  const enabled = new Set([...document.querySelectorAll(".map-controls input:checked")].map(i => i.value));
  const points = mapData[region].filter(p => enabled.has(p[0]));
  $("regionMap").style.setProperty("--map-aspect", MAP_ASPECTS[region] || "1 / 1");
  const mapImage = MAP_IMAGES[region] ? `url('${MAP_IMAGES[region].replaceAll("'", "\\'")}')` : "linear-gradient(135deg, rgba(112, 166, 109, .18), rgba(90, 153, 199, .14))";
  $("regionMap").innerHTML = `<div id="mapLayer" class="map-layer" style="--map-image:${mapImage}"><div class="map-label">${region}</div>${points.map((p,i) => `<button class="marker" data-index="${i}" data-kind="${p[0]}" style="left:${p[4]}%;top:${p[5]}%" title="${p[1]}">${mapMarkerLabel(p)}</button>`).join("")}</div>`;
  bindMapInteractions();
  applyMapTransform();
  const setDetail = index => {
    const p = points[index] || points[0];
    if (!p) {
      $("mapDetails").innerHTML = "<h3>No markers</h3><p>Enable at least one layer.</p>";
      return;
    }
    document.querySelectorAll(".marker").forEach((m,i) => m.classList.toggle("active", i === index));
    const counts = [...enabled].map(kind => `${kind}: ${mapData[region].filter(x => x[0] === kind).length}`).join(" / ");
    $("mapDetails").innerHTML = `<span class="tag">${p[0]}</span><h3>${p[1]}</h3><p><strong>${p[2]}</strong></p><p>${p[3]}</p><p class="map-counts">${points.length} markers visible. ${counts}</p><div class="map-list">${points.map((x,i) => `<button data-list-index="${i}">${x[1]} <span class="tag">${x[0]}</span></button>`).join("")}</div>`;
    document.querySelectorAll("[data-list-index]").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.listIndex)));
  };
  document.querySelectorAll(".marker").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.index)));
  setDetail(0);
}

function renderRegionButtons() {
  if (!$("regionButtons") || !$("regionSelect")) return;
  $("regionButtons").innerHTML = Object.keys(mapData).map(region => {
    const count = mapData[region].length;
    const active = region === $("regionSelect").value ? " active" : "";
    return `<button class="region-button${active}" data-region="${region}">${region}<span>${count}</span></button>`;
  }).join("");
  document.querySelectorAll(".region-button").forEach(button => {
    button.addEventListener("click", () => {
      $("regionSelect").value = button.dataset.region;
      renderMap();
      renderRegionButtons();
    });
  });
}

function renderStaticTables() {
  renderTable("ballTable", ["Ball","Family","Craft cost","Best use"], balls);
  renderTable("rankTable", ["Rank","Obedience level","Notable unlocks"], ranks);
  renderTable("hisuianTable", ["Pokemon","Type","Location","Method / notes"], hisuian);
  renderTable("evolutionTable", ["Item / method","Evolutions","Source / condition"], evolutions);
  renderNatures();
  renderTypeChart();
  renderTable("requestTable", ["No.","Request","Region","Why it matters"], requests);
  renderTable("legendaryTable", ["Pokemon","Location","Method / correction"], legendaries);
  renderTable("shinyTable", ["Condition","Rolls","Approx odds"], shinyRows);
}

const pageLinks = [
  {title:"Core Guide", url:"guide.html", kind:"Category", text:"Walkthrough, catching, battle styles, Star Rank, and boss guide."},
  {title:"Tips and Tricks", url:"tips.html", kind:"Category", text:"Field habits, XP farms, alpha loops, Star Piece crafting, Ingo battles, and fight prep."},
  {title:"Items", url:"items.html", kind:"Category", text:"Poke Balls, Grit, money, XP, and farming."},
  {title:"Pokemon", url:"pokemon.html", kind:"Category", text:"Starters, viable teams, Hisuian forms, and the full dex."},
  {title:"Maps", url:"maps.html", kind:"Category", text:"Interactive regional maps for alphas, requests, story, legendaries, and farming."},
  {title:"Resources", url:"resources.html", kind:"Category", text:"Type chart, natures, crafting recipes, and evolution item references."},
  {title:"Team Builder", url:"calculator.html", kind:"Tool", text:"Saved teams, filtered learnable moves, and coverage recommendations."},
  {title:"Requests & Post-Game", url:"requests.html", kind:"Category", text:"Requests, legendaries, shiny odds, post-game, and Arceus prep."}
];

function renderHomeCards() {
  if (!$("homeCards")) return;
  $("homeCards").innerHTML = pageLinks.map(page => `<a class="home-card" href="${page.url}"><strong>${page.title}</strong></a>`).join("");
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
  const detailStats = viable ? statChart(viable.stats, "detail-stat-chart") : "";
  const viableMoves = viable ? (recommendedMovesetForPokemon(viable.name).join(", ") || viable.moves) : "";
  mount.innerHTML = `<div class="pokemon-detail">
    <img src="${spriteUrl(viable?.name || dex.name)}" alt="${dex.name} sprite">
    <div>
      <p class="eyebrow">Hisui #${String(dex.num).padStart(3,"0")}</p>
      <h2>${dex.name}</h2>
      <p>${typeChips(dex.types)}</p>
      ${viable ? `<p><strong>Recommended role:</strong> ${viable.role}</p><p><strong>Moves:</strong> ${viableMoves}</p><p>${viable.note}</p>` : `<p>This page has verified typing for ${dex.name}. Detailed moveset notes are focused on the most practical story and post-game Pokemon below.</p>`}
      <p><strong>Weak to:</strong> ${weaknesses.length ? weaknesses.map(([t,m]) => `${t} ${m}x`).join(", ") : "No standard weakness"}</p>
      <p><strong>Resists / immune:</strong> ${resists.length ? resists.map(([t,m]) => `${t} ${m}x`).join(", ") : "No resistances"}</p>
      ${detailStats}
    </div>
  </div>`;
}

function searchIndex() {
  const pokemonItems = POKEDEX.map(p => ({title:p.name, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Pokemon", text:`#${String(p.num).padStart(3,"0")} ${p.types.join("/")}`}));
  const metaItems = meta.map(p => ({title:`${p.name} moveset`, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Moveset", text:recommendedMovesetForPokemon(p.name).join(", ") || p.moves}));
  const mapItems = Object.entries(mapData).flatMap(([region, points]) => points.map(p => ({title:p[1], url:`maps.html?region=${encodeURIComponent(region)}`, kind:p[0], text:`${region}: ${p[2]}`})));
  const requestItems = requests.map(r => ({title:`Request ${r[0]}: ${r[1]}`, url:"requests.html", kind:"Request", text:r[3]}));
  const itemItems = [...balls.map(b => ({title:b[0], url:"items.html", kind:"Ball", text:b[3]})), ...recipes.map(r => ({title:r[0], url:"resources.html", kind:r[1], text:r[2]}))];
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
  if ($("regionSelect")) $("regionSelect").addEventListener("change", () => {
    renderMap();
    renderRegionButtons();
  });
  document.querySelectorAll(".map-controls input").forEach(input => input.addEventListener("change", renderMap));
  if ($("mapZoomIn")) $("mapZoomIn").addEventListener("click", () => setMapZoom(mapViewState.scale * 1.25));
  if ($("mapZoomOut")) $("mapZoomOut").addEventListener("click", () => setMapZoom(mapViewState.scale * .8));
  if ($("mapReset")) $("mapReset").addEventListener("click", () => resetMapView($("regionSelect")?.value || mapViewState.region));
  if ($("teamBuilder")) {
    $("teamBuilder").addEventListener("click", e => {
      selectRecommendationSlot(e.target.closest(".team-slot"));
      renderCoverage();
    });
    $("teamBuilder").addEventListener("focusin", e => {
      selectRecommendationSlot(e.target.closest(".team-slot"));
      renderCoverage();
    });
    $("teamBuilder").addEventListener("change", e => {
      const slot = e.target.closest(".team-slot");
      selectRecommendationSlot(slot);
      if (e.target.matches(".team-pokemon")) updateSelectedPokemon(slot, e.target.value);
      if (e.target.matches(".move-name")) {
        const row = e.target.closest(".move-row");
        applyMoveTypeLock(row, true);
      }
      renderCoverage();
    });
    $("teamBuilder").addEventListener("input", e => {
      selectRecommendationSlot(e.target.closest(".team-slot"));
      if (e.target.matches(".team-pokemon")) updateSelectedPokemon(e.target.closest(".team-slot"), e.target.value);
      if (e.target.matches(".move-name")) {
        const row = e.target.closest(".move-row");
        applyMoveTypeLock(row);
      }
      renderCoverage();
    });
    $("teamBuilder").addEventListener("focusout", e => {
      if (!e.target.matches(".move-name")) return;
      const row = e.target.closest(".move-row");
      applyMoveTypeLock(row, true);
      renderCoverage();
    });
    $("teamBuilder").addEventListener("keydown", e => {
      if (!e.target.matches(".move-name") || e.key !== "Enter") return;
      const row = e.target.closest(".move-row");
      applyMoveTypeLock(row, true);
      renderCoverage();
    });
  }
  if ($("moveRecommendations")) $("moveRecommendations").addEventListener("click", event => {
    const button = event.target.closest(".recommendation-button");
    if (!button) return;
    const slot = document.querySelector(`.team-slot[data-slot="${button.dataset.slot}"]`);
    const emptyMove = slot ? [...slot.querySelectorAll(".move-name")].find(input => !input.value.trim()) : null;
    const targetMove = emptyMove || slot?.querySelector(".move-name");
    if (!targetMove) return;
    targetMove.value = button.dataset.move;
    applyMoveTypeLock(targetMove.closest(".move-row"), true);
    renderCoverage();
  });
  if ($("saveTeam")) $("saveTeam").addEventListener("click", saveCurrentTeam);
  if ($("loadTeam")) $("loadTeam").addEventListener("click", loadSelectedTeam);
  if ($("deleteTeam")) $("deleteTeam").addEventListener("click", deleteSelectedTeam);
  if ($("savedTeams")) $("savedTeams").addEventListener("change", () => {
    if ($("teamName")) $("teamName").value = $("savedTeams").value;
  });
  if ($("clearTeam")) $("clearTeam").addEventListener("click", () => {
    $("teamBuilder").innerHTML = Array.from({length: 6}, (_, index) => teamSlotHtml(index)).join("");
    selectedRecommendationSlot = 0;
    markSelectedTeamSlot();
    renderMoveDatalist();
    renderCoverage();
  });
  if ($("addTeamSlot")) $("addTeamSlot").addEventListener("click", () => {
    const count = document.querySelectorAll(".team-slot").length;
    if (count < 6) {
      $("teamBuilder").insertAdjacentHTML("beforeend", teamSlotHtml(count));
      renderMoveDatalist();
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
  renderTeamBuilder();
  renderMoveDatalist();
  renderSavedTeams();
  if ($("dexType")) $("dexType").innerHTML = `<option value="all">All types</option>` + TYPES.map(t => `<option>${t}</option>`).join("");
  const regionParam = new URLSearchParams(location.search).get("region");
  if (regionParam && $("regionSelect") && mapData[regionParam]) $("regionSelect").value = regionParam;
  renderDex();
  renderRegionButtons();
  renderMap();
  renderCoverage();
  wireSearch();
}

init();
