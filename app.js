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

const MAP_IMAGES = {
  "Obsidian Fieldlands": "assets/maps/reference/obsidian-fieldlands-reference.jpg",
  "Crimson Mirelands": "assets/maps/reference/crimson-mirelands-reference.jpg",
  "Cobalt Coastlands": "assets/maps/reference/cobalt-coastlands-reference.jpg",
  "Coronet Highlands": "assets/maps/reference/coronet-highlands-reference.jpg",
  "Alabaster Icelands": "assets/maps/reference/alabaster-icelands-reference.jpg",
  "Jubilife Village": "assets/maps/reference/jubilife-village-reference.jpg"
};

const MAP_ASPECTS = {
  "Obsidian Fieldlands": "1 / 1",
  "Crimson Mirelands": "1 / 1",
  "Cobalt Coastlands": "1 / 1",
  "Coronet Highlands": "1 / 1",
  "Alabaster Icelands": "1146 / 991",
  "Jubilife Village": "954 / 948"
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
  Samurott:["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"],
  "Hisuian Samurott":["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"],
  Typhlosion:["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
  "Hisuian Typhlosion":["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
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
const DRAWBACK_MOVES = new Set(["Brave Bird", "Close Combat", "Double-Edge", "Draco Meteor", "Flare Blitz", "Head Smash", "Headlong Rush", "Hydro Pump", "Leaf Storm", "Overheat", "Raging Fury", "Self-Destruct", "Steel Beam", "Take Heart", "Volt Tackle", "Wave Crash", "Wild Charge", "Wood Hammer"]);
const SPECIAL_EFFECT_ATTACKS = new Set([
  "Triple Arrows", "Ceaseless Edge", "Stone Axe", "Infernal Parade", "Bitter Malice", "Dire Claw", "Barb Barrage",
  "Mystical Fire", "Mystical Power", "Esper Wing", "Ominous Wind", "Silver Wind", "Ancient Power", "Hex", "Venoshock",
  "Thunder Fang", "Ice Fang", "Fire Fang", "Spark", "Water Pulse", "Charge Beam", "Icy Wind", "Snarl",
  "Acid Spray", "Bulldoze", "Rock Smash", "Aqua Jet", "Shadow Sneak", "Quick Attack", "Draining Kiss"
]);

const MOVE_EFFECT_NOTES = {
  "Aerial Ace":"never misses",
  "Aqua Jet":"priority",
  "Barb Barrage":"strong-style evolution utility; better with poison",
  "Bitter Malice":"can lower offensive pressure",
  "Ceaseless Edge":"sets jagged splinters",
  "Dire Claw":"can poison, paralyze, or drowsy",
  "Drain Punch":"heals from damage dealt",
  "Draining Kiss":"heals from damage dealt",
  "Esper Wing":"high crit; may raise action speed",
  "Hex":"stronger into statused targets",
  "Infernal Parade":"stronger into statused targets",
  "Mystical Fire":"can lower target offense",
  "Poison Jab":"can poison",
  "Psycho Cut":"high crit",
  "Leaf Blade":"high crit",
  "Shadow Claw":"high crit",
  "Stone Axe":"sets jagged splinters",
  "Triple Arrows":"raises crit chance and can lower Defense",
  "Victory Dance":"boosts offense and defense",
  "Thunder Wave":"paralysis support for catching and speed control",
  "Hypnosis":"drowsy support for catching",
  "Sleep Powder":"drowsy support for catching",
  "Stun Spore":"paralysis support for catching",
  "Spore":"drowsy support for catching",
  "Shelter":"boosts defenses and evasion",
  "Swords Dance":"boosts Attack",
  "Calm Mind":"boosts special offense and special defense",
  "Bulk Up":"boosts physical offense and defense",
  "Nasty Plot":"boosts special offense",
  "Focus Energy":"raises critical-hit chance"
};

const STARTER_MOVESETS = {
  "Decidueye":["Triple Arrows","Leaf Blade","Brave Bird","Shadow Claw"],
  "Hisuian Decidueye":["Triple Arrows","Leaf Blade","Brave Bird","Shadow Claw"],
  "Typhlosion":["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
  "Hisuian Typhlosion":["Infernal Parade","Flamethrower","Shadow Ball","Mystical Fire"],
  "Samurott":["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"],
  "Hisuian Samurott":["Ceaseless Edge","Aqua Tail","Ice Beam","Poison Jab"]
};

const RANDOM_TEAM_POOL = [
  "Decidueye", "Typhlosion", "Samurott", "Bibarel", "Staraptor", "Luxray", "Beautifly", "Dustox", "Rapidash",
  "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Crobat", "Drifblim",
  "Golem", "Wyrdeer", "Snorlax", "Raichu", "Alakazam", "Infernape", "Lopunny", "Golduck", "Vespiquen", "Scyther",
  "Scizor", "Kleavor", "Heracross", "Mr. Mime", "Gyarados", "Gastrodon", "Ambipom", "Overqwil", "Roserade",
  "Lilligant", "Tangrowth", "Carnivine", "Whiscash", "Toxicroak", "Gardevoir", "Gallade", "Yanmega", "Hippowdon",
  "Skuntank", "Lucario", "Ursaluna", "Goodra", "Steelix", "Rhyperior", "Torterra", "Porygon-Z", "Lickilicky",
  "Porygon2", "Gengar", "Honchkrow", "Walrein", "Drapion", "Arcanine", "Purugly", "Machamp", "Dusknoir",
  "Empoleon", "Mantine", "Basculegion", "Ninetales", "Tentacruel", "Lumineon", "Magmortar", "Magneton",
  "Magnezone", "Bronzong", "Electivire", "Gliscor", "Garchomp", "Probopass", "Electrode", "Mismagius",
  "Clefable", "Sneasel", "Weavile", "Froslass", "Glalie", "Mamoswine", "Avalugg", "Abomasnow", "Zoroark",
  "Braviary"
];

const RANDOM_TEAM_EXCLUSIONS = new Set([
  "Spiritomb", "Uxie", "Mesprit", "Azelf", "Heatran", "Regigigas", "Cresselia",
  "Tornadus", "Thundurus", "Landorus", "Enamorus", "Dialga", "Palkia", "Giratina",
  "Arceus", "Phione", "Manaphy", "Shaymin", "Darkrai", "Unown"
]);

const RANDOM_TEAM_STARTERS = new Set(["Decidueye", "Typhlosion", "Samurott"]);
const RANDOM_TEAM_EEVEELUTIONS = new Set(["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"]);

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
const TEAM_AUTOSAVE_KEY = "plaCurrentTeam";
let selectedRecommendationSlot = 0;
let floatingJumpDismissed = false;
let floatingJumpLastY = 0;
let mapFocusName = "";
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
  ["Max Potion","Heal","1 Sitrus Berry + 1 King's Leaf"],
  ["Full Restore","Heal","1 Max Potion + 1 Full Heal"],
  ["Revive","Heal","1 Vivichoke + 2 Medicinal Leeks"],
  ["Max Revive","Heal","1 Revive + 2 King's Leaf"],
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

const mapData = {};

const exactMapMarkerText = {
  Alpha:["Alpha Pokemon", "Fixed alpha or alpha-class marker."],
  Subarea:["Subarea", "Named subarea or landmark."],
  Wisp:["Wisp", "Spiritomb wisp collectible marker."],
  Unown:["Unown", "Unown letter marker."],
  Point:["Point", "Travel, route, or point-of-interest marker."],
  Story:["Story", "Main story or progression marker."],
  Character:["Character", "NPC or character marker."],
  Camp:["Camp", "Base camp marker."],
  Gate:["Fast travel", "Fast travel marker."],
  Transition:["Transition", "Area transition marker."],
  Cave:["Cave", "Cave or interior marker."],
  Arena:["Arena", "Boss or arena marker."],
  Noble:["Noble", "Noble Pokemon marker."],
  Request:["Request", "Request or field-note marker."],
  Legendary:["Legendary", "Legendary or mythical Pokemon marker."],
  Farm:["Farm", "Useful farming route or reset point."]
};

const exactMapMarkerGroups = {
  "Obsidian Fieldlands": {
    "Subarea": [
      [
        "Aspiration Hill",
        38.0,
        34.8,
        "Named subarea marker."
      ],
      [
        "Deertrack Heights",
        61.7,
        51.8,
        "Named subarea marker."
      ],
      [
        "Deertrack Path",
        47.9,
        47.4,
        "Named subarea marker."
      ],
      [
        "Floaro Gardens",
        12.9,
        29.9,
        "Named subarea marker."
      ],
      [
        "Grueling Grove",
        80.8,
        25.6,
        "Named subarea marker."
      ],
      [
        "Horseshoe Plains",
        59.3,
        30.6,
        "Named subarea marker."
      ],
      [
        "Lake Verity",
        13.7,
        48.8,
        "Named subarea marker."
      ],
      [
        "Nature's Pantry",
        58.0,
        70.0,
        "Named subarea marker."
      ],
      [
        "Obsidian Falls",
        84.9,
        55.3,
        "Named subarea marker."
      ],
      [
        "Oreburrow Tunnel",
        87.2,
        63.5,
        "Named subarea marker."
      ],
      [
        "Ramanas Island",
        27.4,
        85.5,
        "Named subarea marker."
      ],
      [
        "Sandgem Flat",
        15.9,
        74.6,
        "Named subarea marker."
      ],
      [
        "The Heartwood",
        72.1,
        82.9,
        "Named subarea marker."
      ],
      [
        "Tidewater Dam",
        62.7,
        78.0,
        "Named subarea marker."
      ],
      [
        "Windswept Run",
        42.9,
        63.3,
        "Named subarea marker."
      ],
      [
        "Worn Bridge",
        75.0,
        42.0,
        "Named subarea marker."
      ]
    ],
    "Alpha": [
      [
        "Alpha Golbat",
        95.4,
        64.4,
        "Fixed alpha Pokemon. Level 35. Location: Near Oreburrow Tunnel."
      ],
      [
        "Alpha Parasect",
        60.3,
        73.4,
        "Fixed alpha Pokemon. Level 30. Location: Nature's Pantry."
      ],
      [
        "Alpha Alakazam",
        17.8,
        73.2,
        "Fixed alpha Pokemon. Level 60. Location: Sandgem Flats."
      ],
      [
        "Alpha Graveler",
        95.2,
        41.4,
        "Fixed alpha Pokemon. Level 30. Location: Near Obsidian Falls."
      ],
      [
        "Alpha Rapidash",
        71.8,
        27.1,
        "Fixed alpha Pokemon. Level 40. Location: Horseshoe Plains."
      ],
      [
        "Alpha Scyther",
        91.8,
        86.2,
        "Fixed alpha Pokemon. Level 42. Location: Near Grandtree Arena."
      ],
      [
        "Alpha Magikarp",
        94.8,
        47.6,
        "Fixed alpha Pokemon. Level 55. Location: Near Oreburrow Tunnel."
      ],
      [
        "Alpha Gyarados",
        21.6,
        42.4,
        "Fixed alpha Pokemon. Level 60. Location: Lake Verity."
      ],
      [
        "Alpha Snorlax",
        20.8,
        74.4,
        "Fixed alpha Pokemon. Level 45. Location: Near Sandgem Flats."
      ],
      [
        "Alpha Heracross",
        86.3,
        10.9,
        "Fixed alpha Pokemon. Level 45. Location: Grueling Grove."
      ],
      [
        "Alpha Stantler",
        64.4,
        50.6,
        "Fixed alpha Pokemon. Level 42. Location: Deertrack Heights."
      ],
      [
        "Alpha Blissey",
        88.8,
        61.4,
        "Fixed alpha Pokemon. Level 62. Location: Near Obsidian Falls."
      ],
      [
        "Alpha Infernape",
        38.8,
        82.8,
        "Fixed alpha Pokemon. Level 65. Location: Ramanas Island."
      ],
      [
        "Alpha Staravia",
        52.7,
        56.7,
        "Fixed alpha Pokemon. Level 32. Location: Windswept Run."
      ],
      [
        "Alpha Bibarel",
        64.0,
        78.6,
        "Fixed alpha Pokemon. Level 16. Location: Tidewater Dam."
      ],
      [
        "Alpha Kricketune",
        55.0,
        75.8,
        "Fixed alpha Pokemon. Level 30. Location: Near Tidewater Dam."
      ],
      [
        "Alpha Luxio",
        26.6,
        20.9,
        "Fixed alpha Pokemon. Level 40. Location: Floaro Gardens."
      ],
      [
        "Alpha Floatzel",
        72.9,
        53.0,
        "Fixed alpha Pokemon. Level 31. Location: Near Worn Bridge."
      ],
      [
        "Alpha Lopunny",
        87.9,
        91.6,
        "Fixed alpha Pokemon. Level 40. Location: Near The Heartwood."
      ]
    ],
    "Camp": [
      [
        "Fieldlands Camp",
        34.3,
        26.5,
        "Base camp marker."
      ],
      [
        "Heights Camp",
        57.7,
        57.8,
        "Base camp marker."
      ]
    ],
    "Gate": [
      [
        "Fieldlands Camp Fast Travel",
        34.3,
        26.5,
        "Fast travel point at this base camp."
      ],
      [
        "Grandtree Arena Fast Travel",
        85.3,
        85.5,
        "Fast travel point at this arena."
      ],
      [
        "Heights Camp Fast Travel",
        57.7,
        57.8,
        "Fast travel point at this base camp."
      ]
    ],
    "Arena": [
      [
        "Grandtree Arena",
        85.3,
        85.5,
        "Arena marker."
      ]
    ],
    "Noble": [
      [
        "Kleavor",
        80.0,
        90.0,
        "Noble Pokemon marker."
      ]
    ],
    "Legendary": [
      [
        "Landorus",
        27.3,
        85.1,
        "How to catch: Part of the #94: Incarnate Forces of Hisui request."
      ],
      [
        "Mesprit",
        15.3,
        52.2,
        "Level: 70 How to catch: Part of the #21: The Plate of the Lakes story mission. Can be found within Verity Cavern."
      ],
      [
        "Shaymin",
        14.9,
        28.2,
        "How to catch: Part of the #92: A Token of Gratitude request."
      ]
    ]
  },
  "Crimson Mirelands": {
    "Subarea": [
      [
        "Bolderoll Slope",
        62.5,
        53.7,
        "Named subarea marker."
      ],
      [
        "Cloudpool Ridge",
        32.0,
        32.2,
        "Named subarea marker."
      ],
      [
        "Cottonsedge Prairie",
        77.9,
        64.9,
        "Named subarea marker."
      ],
      [
        "Diamond Heath",
        48.7,
        36.3,
        "Named subarea marker."
      ],
      [
        "Diamond Settlement",
        55.8,
        39.2,
        "Named subarea marker."
      ],
      [
        "Droning Meadow",
        78.9,
        71.8,
        "Named subarea marker."
      ],
      [
        "Gapejaw Bog",
        32.8,
        68.9,
        "Named subarea marker."
      ],
      [
        "Golden Lowlands",
        27.7,
        56.5,
        "Named subarea marker."
      ],
      [
        "Holm of Trials",
        43.6,
        88.3,
        "Named subarea marker."
      ],
      [
        "Lake Valor",
        72.2,
        32.8,
        "Named subarea marker."
      ],
      [
        "Scarlet Bog",
        51.4,
        61.6,
        "Named subarea marker."
      ],
      [
        "Shrouded Ruins",
        52.5,
        26.9,
        "Named subarea marker."
      ],
      [
        "Sludge Mound",
        56.4,
        78.2,
        "Named subarea marker."
      ],
      [
        "Solaceon Ruins",
        41.3,
        48.3,
        "Named subarea marker."
      ],
      [
        "Ursa's Ring",
        67.5,
        83.2,
        "Named subarea marker."
      ]
    ],
    "Alpha": [
      [
        "Alpha Raichu",
        21.6,
        41.6,
        "Fixed alpha Pokemon. Level 52. Location: Near Golden Lowlands."
      ],
      [
        "Alpha Onix",
        53.2,
        48.3,
        "Fixed alpha Pokemon. Level 50. Location: Near Diamond Settlement."
      ],
      [
        "Alpha Rhyhorn",
        51.2,
        36.7,
        "Fixed alpha Pokemon. Level 45. Location: Diamond Heath."
      ],
      [
        "Alpha Ursaring (Gapejaw Bog)",
        18.6,
        68.3,
        "Fixed alpha Pokemon. Level 55. Location: Near Gapejaw Bog."
      ],
      [
        "Alpha Ursaring (Ursa's Ring)",
        70.9,
        90.9,
        "Fixed alpha Pokemon. Level 41. Location: Ursa's Ring."
      ],
      [
        "Alpha Whiscash",
        71.8,
        43.9,
        "Fixed alpha Pokemon. Level 64. Location: Lake Valor."
      ],
      [
        "Alpha Torterra",
        41.5,
        84.2,
        "Fixed alpha Pokemon. Level 65. Location: Holm of Trials."
      ],
      [
        "Alpha Roserade",
        32.7,
        31.6,
        "Fixed alpha Pokemon. Level 50. Location: Cloudpool Ridge."
      ],
      [
        "Alpha Vespiquen",
        80.6,
        56.2,
        "Fixed alpha Pokemon. Level 61. Location: Near Cottonsedge Prairie."
      ],
      [
        "Alpha Pachirisu",
        20.6,
        76.5,
        "Fixed alpha Pokemon. Level 40. Location: Near Gapejaw Bog."
      ],
      [
        "Alpha Honchkrow",
        31.4,
        31.6,
        "Fixed alpha Pokemon. Level 55. Location: Cloudpool Ridge."
      ],
      [
        "Alpha Skuntank",
        52.6,
        64.9,
        "Fixed alpha Pokemon. Level 45. Location: Scarlet Bog."
      ],
      [
        "Alpha Hippowdon",
        49.5,
        77.5,
        "Fixed alpha Pokemon. Level 46. Location: Gapejaw Bog."
      ],
      [
        "Alpha Toxicroak",
        35.0,
        80.4,
        "Fixed alpha Pokemon. Level 47. Location: Holm of Trials."
      ],
      [
        "Alpha Carnivine",
        76.7,
        53.7,
        "Fixed alpha Pokemon. Level 43. Location: Near Cottonsedge Prairie."
      ],
      [
        "Alpha Lickilicky",
        50.8,
        24.6,
        "Fixed alpha Pokemon. Level 52. Location: Shrouded Ruins."
      ],
      [
        "Alpha Tangrowth",
        36.8,
        59.2,
        "Fixed alpha Pokemon. Level 45. Location: Gapejaw Bog."
      ],
      [
        "Alpha Yanmega",
        82.7,
        74.5,
        "Fixed alpha Pokemon. Level 58. Location: Droning Meadow."
      ],
      [
        "Alpha Hisuian Sliggoo",
        56.7,
        89.3,
        "Fixed alpha Pokemon. Level 50. Location: Holm of Trials."
      ]
    ],
    "Camp": [
      [
        "Bogbound Camp",
        60.4,
        73.4,
        "Base camp marker."
      ],
      [
        "Mirelands Camp",
        24.1,
        50.1,
        "Base camp marker."
      ]
    ],
    "Gate": [
      [
        "Bogbound Camp Fast Travel",
        60.4,
        73.4,
        "Fast travel point at this base camp."
      ],
      [
        "Brava Arena Fast Travel",
        33.8,
        22.5,
        "Fast travel point at this arena."
      ],
      [
        "Diamond Settlement Fast Travel",
        57.7,
        42.1,
        "Fast travel point."
      ],
      [
        "Mirelands Camp Fast Travel",
        24.1,
        50.1,
        "Fast travel point at this base camp."
      ]
    ],
    "Arena": [
      [
        "Brava Arena",
        33.8,
        22.5,
        "Arena marker."
      ]
    ],
    "Noble": [
      [
        "Lilligant",
        35.1,
        22.3,
        "Noble Pokemon marker."
      ]
    ],
    "Legendary": [
      [
        "Azelf",
        73.7,
        38.6,
        "Level: 70 How to catch: Part of the #21: The Plate of the Lakes story mission. Can be found within Valor Cavern"
      ],
      [
        "Enamorus",
        51.9,
        60.2,
        "How to catch: Part of the #94: Incarnate Forces of Hisui request."
      ]
    ]
  },
  "Cobalt Coastlands": {
    "Subarea": [
      [
        "Aipom Hill",
        24.6,
        80.8,
        "Named subarea marker."
      ],
      [
        "Bathers' Lagoon",
        45.2,
        87.6,
        "Named subarea marker."
      ],
      [
        "Castaway Shore",
        45.0,
        50.8,
        "Named subarea marker."
      ],
      [
        "Crossing Slope",
        10.5,
        72.4,
        "Named subarea marker."
      ],
      [
        "Deadwood Haunt",
        62.2,
        83.0,
        "Named subarea marker."
      ],
      [
        "Firespit Island",
        80.4,
        30.0,
        "Named subarea marker."
      ],
      [
        "Ginkgo Landing",
        23.0,
        67.0,
        "Named subarea marker."
      ],
      [
        "Hideaway Bay",
        44.3,
        92.7,
        "Named subarea marker."
      ],
      [
        "Islespy Shore",
        30.8,
        27.0,
        "Named subarea marker."
      ],
      [
        "Lunker's Lair",
        81.5,
        48.8,
        "Named subarea marker."
      ],
      [
        "Sand's Reach",
        74.5,
        73.1,
        "Named subarea marker."
      ],
      [
        "Seagrass Haven",
        65.3,
        36.4,
        "Named subarea marker."
      ],
      [
        "Spring Path",
        15.3,
        36.3,
        "Named subarea marker."
      ],
      [
        "Tombolo Walk",
        86.3,
        88.7,
        "Named subarea marker."
      ],
      [
        "Tranquility Cove",
        56.1,
        64.7,
        "Named subarea marker."
      ],
      [
        "Veilstone Cape",
        56.2,
        44.3,
        "Named subarea marker."
      ],
      [
        "Windbreak Stand",
        19.1,
        46.7,
        "Named subarea marker."
      ]
    ],
    "Alpha": [
      [
        "Alpha Ninetales",
        78.2,
        25.2,
        "Fixed alpha Pokemon. Level 61. Location: Firespit Island."
      ],
      [
        "Alpha Golduck",
        49.6,
        85.4,
        "Fixed alpha Pokemon. Level 50. Location: Bathers' Lagoon."
      ],
      [
        "Alpha Machoke",
        26.2,
        53.6,
        "Fixed alpha Pokemon. Level 40. Location: Ginkgo Landing."
      ],
      [
        "Alpha Tentacruel",
        86.8,
        43.0,
        "Fixed alpha Pokemon. Level 50. Location: Near Lunker's Lair."
      ],
      [
        "Alpha Chansey",
        87.0,
        88.0,
        "Fixed alpha Pokemon. Level 51. Location: Tombolo Walk."
      ],
      [
        "Alpha Gyarados",
        85.8,
        57.7,
        "Fixed alpha Pokemon. Level 58. Location: Near Sand's Reach."
      ],
      [
        "Alpha Hisuian Qwilfish",
        45.0,
        27.6,
        "Fixed alpha Pokemon. Level 55. Location: Near Islespy Shore."
      ],
      [
        "Alpha Octillery",
        44.7,
        49.8,
        "Fixed alpha Pokemon. Level 46. Location: Castaway Shore."
      ],
      [
        "Alpha Mantine",
        57.6,
        57.9,
        "Fixed alpha Pokemon. Level 50. Location: Tranquility Cove."
      ],
      [
        "Alpha Walrein",
        25.7,
        71.6,
        "Fixed alpha Pokemon. Level 50. Location: Ginkgo Landing."
      ],
      [
        "Alpha Empoleon",
        31.3,
        28.6,
        "Fixed alpha Pokemon. Level 69. Location: Islespy Shore."
      ],
      [
        "Alpha Mothim",
        12.3,
        37.8,
        "Fixed alpha Pokemon. Level 56. Location: Spring Path."
      ],
      [
        "Alpha Gastrodon",
        56.8,
        26.8,
        "Fixed alpha Pokemon. Level 61. Location: Seagrass Haven."
      ],
      [
        "Alpha Ambipom",
        37.9,
        89.0,
        "Fixed alpha Pokemon. Level 50. Location: Near Hideaway Bay."
      ],
      [
        "Alpha Purugly",
        58.6,
        44.1,
        "Fixed alpha Pokemon. Level 45. Location: Veilstone Cape."
      ],
      [
        "Alpha Drapion",
        20.1,
        57.3,
        "Fixed alpha Pokemon. Level 45. Location: Near Ginkgo Landing."
      ],
      [
        "Alpha Lumineon",
        62.3,
        39.1,
        "Fixed alpha Pokemon. Level 60. Location: Seagrass Haven."
      ],
      [
        "Alpha Dusknoir",
        71.8,
        82.2,
        "Fixed alpha Pokemon. Level 65. Location: Deadwood Haunt."
      ]
    ],
    "Camp": [
      [
        "Beachside Camp",
        6.3,
        64.8,
        "Base camp marker."
      ],
      [
        "Coastlands Camp",
        77.7,
        78.8,
        "Base camp marker."
      ]
    ],
    "Gate": [
      [
        "Beachside Camp Fast Travel",
        6.3,
        64.8,
        "Fast travel point at this base camp."
      ],
      [
        "Coastlands Camp Fast Travel",
        77.7,
        78.8,
        "Fast travel point at this base camp."
      ],
      [
        "Molten Arena Fast Travel",
        83.0,
        22.2,
        "Fast travel point at this arena."
      ]
    ],
    "Arena": [
      [
        "Molten Arena",
        83.0,
        22.2,
        "Arena marker."
      ]
    ],
    "Noble": [
      [
        "Arcanine",
        80.1,
        22.0,
        "Noble Pokemon marker."
      ]
    ],
    "Legendary": [
      [
        "Giratina",
        18.0,
        33.8,
        "Level: 70 How to catch: Part of the #91: On the Trail of Giratina request. Can be found inside of Turnback Cave."
      ],
      [
        "Heatran",
        82.2,
        25.3,
        "Level: 70 How to catch: Part of the #22: The Plate of Firespit Island story mission. Can be found within Lava Dome Sanctum."
      ],
      [
        "Manaphy",
        48.8,
        38.4,
        "Level: 50 How to catch: Part of the #66: The Sea's Legend request. Can be found within Seaside Hollow."
      ],
      [
        "Thundurus",
        79.4,
        58.6,
        "How to catch: Part of the #94: Incarnate Forces of Hisui request. Note: Only spawns during thunderstorms."
      ]
    ]
  },
  "Coronet Highlands": {
    "Subarea": [
      [
        "Ancient Quarry",
        47.0,
        83.7,
        "Named subarea marker."
      ],
      [
        "Bolderoll Ravine",
        8.0,
        72.0,
        "Named subarea marker."
      ],
      [
        "Celestica Ruins",
        55.2,
        50.7,
        "Named subarea marker."
      ],
      [
        "Celestica Trail",
        42.8,
        69.2,
        "Named subarea marker."
      ],
      [
        "Clamberclaw Cliffs",
        75.1,
        62.6,
        "Named subarea marker."
      ],
      [
        "Cloudcap Pass",
        24.4,
        36.2,
        "Named subarea marker."
      ],
      [
        "Fabled Spring",
        15.5,
        87.5,
        "Named subarea marker."
      ],
      [
        "Heavenward Lookout",
        82.3,
        86.2,
        "Named subarea marker."
      ],
      [
        "Lonely Spring",
        82.4,
        66.3,
        "Named subarea marker."
      ],
      [
        "Primeval Grotto",
        43.0,
        61.0,
        "Named subarea marker."
      ],
      [
        "Sacred Plaza",
        23.6,
        57.8,
        "Named subarea marker."
      ],
      [
        "Sonorous Path",
        58.9,
        76.5,
        "Named subarea marker."
      ],
      [
        "Stonetooth Rows",
        5.2,
        62.7,
        "Named subarea marker."
      ],
      [
        "Temple of Sinnoh",
        20.0,
        25.4,
        "Named subarea marker."
      ],
      [
        "Wayward Wood",
        50.4,
        91.0,
        "Named subarea marker."
      ]
    ],
    "Alpha": [
      [
        "Alpha Clefable",
        24.7,
        92.7,
        "Fixed alpha Pokemon. Level 62. Location: Fabled Spring."
      ],
      [
        "Alpha Golem",
        13.0,
        71.5,
        "Fixed alpha Pokemon. Level 60. Location: Bolderoll Ravine."
      ],
      [
        "Alpha Crobat",
        69.8,
        85.1,
        "Fixed alpha Pokemon. Level 60. Location: Wayward Cave."
      ],
      [
        "Alpha Gligar",
        56.5,
        52.0,
        "Fixed alpha Pokemon. Level 52. Location: Near Celestica Ruins."
      ],
      [
        "Alpha Steelix",
        43.8,
        70.2,
        "Fixed alpha Pokemon. Level 60. Location: Celestica Trail."
      ],
      [
        "Alpha Luxray",
        35.3,
        55.1,
        "Fixed alpha Pokemon. Level 55. Location: Sacred Plaza."
      ],
      [
        "Alpha Mothim",
        58.6,
        89.9,
        "Fixed alpha Pokemon. Level 55. Location: Wayward Wood."
      ],
      [
        "Alpha Mismagius",
        18.3,
        63.1,
        "Fixed alpha Pokemon. Level 61. Location: Stonetooth Rows."
      ],
      [
        "Alpha Bronzong",
        78.8,
        58.5,
        "Fixed alpha Pokemon. Level 55. Location: Near Clamberclaw Cliffs."
      ],
      [
        "Alpha Gabite",
        76.2,
        58.0,
        "Fixed alpha Pokemon. Level 56. Location: Near Clamberclaw Cliffs."
      ],
      [
        "Alpha Carnivine",
        82.4,
        66.3,
        "Fixed alpha Pokemon. Level 52. Location: Lonely Spring."
      ],
      [
        "Alpha Rhyperior",
        28.1,
        66.2,
        "Fixed alpha Pokemon. Level 74. Location: Near Sacred Plaza."
      ],
      [
        "Alpha Electivire",
        30.2,
        45.4,
        "Fixed alpha Pokemon. Level 69. Location: Cloudcap Pass."
      ],
      [
        "Alpha Gliscor",
        54.6,
        61.6,
        "Fixed alpha Pokemon. Level 77. Location: Near Primeval Grotto."
      ],
      [
        "Alpha Probopass",
        40.6,
        66.4,
        "Fixed alpha Pokemon. Level 73. Location: Near Primeval Grotto."
      ],
      [
        "Alpha Hisuian Goodra",
        47.6,
        85.1,
        "Fixed alpha Pokemon. Level 70. Location: Near Ancient Quarry."
      ]
    ],
    "Camp": [
      [
        "Highlands Camp",
        84.8,
        90.4,
        "Base camp marker."
      ],
      [
        "Mountain Camp",
        78.3,
        71.4,
        "Base camp marker."
      ],
      [
        "Summit Camp",
        17.2,
        53.5,
        "Base camp marker."
      ]
    ],
    "Gate": [
      [
        "Highlands Camp Fast Travel",
        84.8,
        90.4,
        "Fast travel point at this base camp."
      ],
      [
        "Moonview Arena Fast Travel",
        9.8,
        50.1,
        "Fast travel point at this arena."
      ],
      [
        "Mountain Camp Fast Travel",
        78.3,
        71.4,
        "Fast travel point at this base camp."
      ],
      [
        "Summit Camp Fast Travel",
        17.2,
        53.5,
        "Fast travel point at this base camp."
      ]
    ],
    "Arena": [
      [
        "Moonview Arena",
        9.8,
        50.1,
        "Arena marker."
      ]
    ],
    "Noble": [
      [
        "Electrode",
        11.5,
        50.0,
        "Noble Pokemon marker."
      ]
    ],
    "Legendary": [
      [
        "Arceus",
        19.9,
        29.8,
        "Level: 70 How to catch: Part of the #27: The Deified Pokémon mission."
      ],
      [
        "Cresselia",
        8.1,
        49.7,
        "Level: 70 How to catch: Part of the #23: The Plate of Moonview Arena story mission."
      ],
      [
        "Darkrai",
        59.3,
        66.3,
        "How to catch: Part of the #93: The Darksome Nightmare request."
      ],
      [
        "Dialga",
        18.8,
        28.9,
        "In #13: Disaster Looming, you have to choose to side with Adaman or Irina. This choice changes how you encounter this Pokémon. - If you chose Adaman, you will encounter this Pokémon during #17: Atop Mount Coronet, in its standard form. - If you chose Irina, you will encounter this Pokémon during #18: The Counterpart, in its origin form."
      ],
      [
        "Palkia",
        21.1,
        28.8,
        "In #13: Disaster Looming, you have to choose to side with Adaman or Irina. This choice changes how you encounter this Pokémon. - If you chose Irina, you will encounter this Pokémon during #17: Atop Mount Coronet, in its standard form. - If you chose Adaman, you will encounter this Pokémon during #18: The Counterpart, in its origin form."
      ]
    ]
  },
  "Alabaster Icelands": {
    "Subarea": [
      [
        "Arena's Approach",
        20.2,
        66.0,
        "Named subarea marker."
      ],
      [
        "Avalanche Slopes",
        12.7,
        76.0,
        "Named subarea marker."
      ],
      [
        "Avalugg's Legacy",
        49.7,
        52.0,
        "Named subarea marker."
      ],
      [
        "Bonechill Wastes",
        49.3,
        69.8,
        "Named subarea marker."
      ],
      [
        "Glacier Terrace",
        21.4,
        34.7,
        "Named subarea marker."
      ],
      [
        "Heart's Crag",
        76.2,
        45.9,
        "Named subarea marker."
      ],
      [
        "Icebound Falls",
        27.4,
        86.3,
        "Named subarea marker."
      ],
      [
        "Lake Acuity",
        43.4,
        29.5,
        "Named subarea marker."
      ],
      [
        "Pearl Settlement",
        63.0,
        39.5,
        "Named subarea marker."
      ],
      [
        "Snowfall Hot Spring",
        13.2,
        44.2,
        "Named subarea marker."
      ],
      [
        "Whiteout Valley",
        49.7,
        81.5,
        "Named subarea marker."
      ]
    ],
    "Alpha": [
      [
        "Alpha Machamp",
        27.5,
        55.3,
        "Fixed alpha Pokemon. Level 70. Location: Arena's Approach."
      ],
      [
        "Alpha Electabuzz",
        28.2,
        78.3,
        "Fixed alpha Pokemon. Level 65. Location: Icebound Falls."
      ],
      [
        "Alpha Sneasel",
        46.5,
        50.4,
        "Fixed alpha Pokemon. Level 61. Location: Near Avalugg's Legacy."
      ],
      [
        "Alpha Swinub",
        44.1,
        61.2,
        "Fixed alpha Pokemon. Level 62. Location: Near Bonechill Wastes."
      ],
      [
        "Alpha Piloswine",
        32.2,
        65.6,
        "Fixed alpha Pokemon. Level 65. Location: Arena's Approach."
      ],
      [
        "Alpha Gardevoir",
        78.8,
        46.6,
        "Fixed alpha Pokemon. Level 70. Location: Heart's Crag."
      ],
      [
        "Alpha Chimecho",
        40.5,
        31.3,
        "Fixed alpha Pokemon. Level 65. Location: Near Lake Acuity."
      ],
      [
        "Alpha Glalie",
        53.8,
        64.0,
        "Fixed alpha Pokemon. Level 62. Location: Bonechill Wastes."
      ],
      [
        "Alpha Garchomp",
        10.8,
        90.8,
        "Fixed alpha Pokemon. Level 85. Location: Avalanche Slopes."
      ],
      [
        "Alpha Lucario",
        26.8,
        88.2,
        "Fixed alpha Pokemon. Level 70. Location: Icebound Falls."
      ],
      [
        "Alpha Abomasnow",
        61.0,
        59.7,
        "Fixed alpha Pokemon. Level 68. Location: Bonechill Wastes."
      ],
      [
        "Alpha Mamoswine",
        58.4,
        49.9,
        "Fixed alpha Pokemon. Level 68. Location: Avalugg's Legacy."
      ],
      [
        "Alpha Gallade",
        62.6,
        19.0,
        "Fixed alpha Pokemon. Level 70. Location: Snowpoint Temple."
      ],
      [
        "Alpha Froslass",
        22.4,
        84.4,
        "Fixed alpha Pokemon. Level 72. Location: Ice Column Chamber."
      ]
    ],
    "Camp": [
      [
        "Icepeak Camp",
        39.4,
        42.5,
        "Base camp marker."
      ],
      [
        "Snowfields Camp",
        49.6,
        87.8,
        "Base camp marker."
      ]
    ],
    "Gate": [
      [
        "Icepeak Arena Fast Travel",
        8.3,
        54.0,
        "Fast travel point at this arena."
      ],
      [
        "Icepeak Camp Fast Travel",
        39.4,
        42.5,
        "Fast travel point at this base camp."
      ],
      [
        "Snowfields Camp Fast Travel",
        49.6,
        87.8,
        "Fast travel point at this base camp."
      ]
    ],
    "Arena": [
      [
        "Icepeak Arena",
        8.3,
        54.0,
        "Arena marker."
      ]
    ],
    "Noble": [
      [
        "Avalugg",
        10.1,
        54.0,
        "Noble Pokemon marker."
      ]
    ],
    "Legendary": [
      [
        "Regigigas",
        65.0,
        17.7,
        "Level: 70 How to catch: Part of the #24: The Plate of Snowpoint Temple story mission. Can be found at the bottom of Snowpoint Temple."
      ],
      [
        "Tornadus",
        53.2,
        65.8,
        "How to catch: Part of the #94: Incarnate Forces of Hisui request. Note: Only spawns in blizzards."
      ],
      [
        "Uxie",
        43.1,
        24.1,
        "Level: 70 How to catch: Part of the #21: The Plate of the Lakes story mission. Can be found within Acuity Cavern."
      ]
    ]
  },
  "Jubilife Village": {
    "Gate": [
      [
        "Farm Fast Travel",
        32.6,
        40.0,
        "Fast travel point."
      ],
      [
        "Front Gate Fast Travel",
        69.7,
        30.2,
        "Fast travel point."
      ],
      [
        "Galaxy Hall Fast Travel",
        51.0,
        28.3,
        "Fast travel point."
      ],
      [
        "Practice Field Fast Travel",
        64.0,
        77.0,
        "Fast travel point."
      ]
    ],
    "Point": [
      [
        "Candy Stand",
        46.9,
        27.5,
        "Point of Interest marker."
      ],
      [
        "Farm",
        32.6,
        45.8,
        "Point of Interest marker."
      ],
      [
        "Galaxy Hall",
        51.0,
        22.6,
        "Point of Interest marker."
      ],
      [
        "Ginkgo Guild Cart",
        55.8,
        27.1,
        "Point of Interest marker."
      ],
      [
        "Pastures",
        66.9,
        40.0,
        "Point of Interest marker."
      ],
      [
        "Prelude Beach",
        32.3,
        84.0,
        "Point of Interest marker."
      ],
      [
        "Sevii Kitchen",
        65.3,
        32.7,
        "Point of Interest marker."
      ],
      [
        "The Wallflower",
        47.6,
        32.5,
        "Point of Interest marker."
      ]
    ],
    "Farm": [
      [
        "Farm",
        33.0,
        76.0,
        "Harvest route for crafting materials."
      ],
      [
        "Training Grounds",
        43.0,
        15.0,
        "Ingo battles and move mastery practice."
      ]
    ]
  }
};

const mapSubareaLabelOffsets = {
  "Obsidian Fieldlands":{
    "Grandtree Arena":[-60,-28],
    "The Heartwood":[58,8],
    "Moss Rock":[40,38],
    "Tidewater Dam":[-48,18],
    "Verity Cavern":[50,26]
  },
  "Crimson Mirelands":{
    "Cloudpool Ridge":[-18,18],
    "Brava Arena":[24,-12],
    "Valor Cavern":[36,28],
    "Lake Valor":[-28,-10],
    "Diamond Settlement":[28,12],
    "Cottonsedge Prairie":[-22,18],
    "Droning Meadow":[18,-14],
    "Ursa's Ring":[-12,20]
  },
  "Cobalt Coastlands":{
    "Spring Path":[-38,18],
    "Turnback Cave":[42,-22],
    "Veilstone Cape":[18,-18],
    "Tidal Passage":[-28,-18],
    "Seagrass Haven":[22,16],
    "Firespit Island":[54,-24],
    "Molten Arena":[-56,34],
    "Lava Dome Sanctum":[4,64],
    "Bathers' Lagoon":[-18,22],
    "Hideaway Bay":[28,-16],
    "Tombolo Walk":[-26,18],
    "Seaside Hollow":[-46,14]
  },
  "Coronet Highlands":{
    "Temple of Sinnoh":[0,-20],
    "Moonview Arena":[34,18],
    "Cloudcap Pass":[-22,18],
    "Sacred Plaza":[-22,-18],
    "Celestica Ruins":[24,-18],
    "Primeval Grotto":[28,18],
    "Celestica Trail":[-20,18],
    "Fabled Spring":[-28,20],
    "Ancient Quarry":[-24,-18],
    "Heavenward Lookout":[-24,18],
    "Clamberclaw Cliffs":[-42,-18],
    "Lonely Spring":[44,18]
  },
  "Alabaster Icelands":{
    "Snowpoint Temple":[46,-24],
    "Icepeak Arena":[-60,20],
    "Icepeak Cavern":[8,40],
    "Lake Acuity":[-28,-18],
    "Acuity Cavern":[32,20],
    "Glacier Terrace":[-18,18],
    "Avalugg's Legacy":[-18,-18],
    "Ice Rock":[30,20],
    "Pearl Settlement":[26,-16],
    "Heart's Crag":[-20,18],
    "Arena's Approach":[-56,20],
    "Avalanche Slopes":[-24,-18],
    "Icebound Falls":[30,20],
    "Secret Hollow":[62,-34],
    "Hibernal Cave":[28,18]
  }
};

function buildExactMapMarkers(region, groups) {
  return Object.entries(groups).flatMap(([kind, entries]) => entries.map(entry => [
    kind,
    entry[0],
    region,
    entry[3] || (exactMapMarkerText[kind]?.[1] || "Map marker."),
    entry[1],
    entry[2]
  ]));
}

Object.entries(exactMapMarkerGroups).forEach(([region, groups]) => {
  mapData[region] = buildExactMapMarkers(region, groups);
});

const nobles = [
  ["Kleavor","Bug/Rock","Water, Rock, Steel","Dodge through axe swings. Throw balms after jump-stomp recovery."],
  ["Hisuian Lilligant","Grass/Fighting","Flying, Psychic, Fire, Poison, Ice, Fairy","Flying is 4x effective. Throw after dash and dance recovery."],
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

function typeChips(types, compact = false) {
  const abbr = {Normal:"NOR", Fire:"FIR", Water:"WTR", Electric:"ELC", Grass:"GRS", Ice:"ICE", Fighting:"FGT", Poison:"PSN", Ground:"GRD", Flying:"FLY", Psychic:"PSY", Bug:"BUG", Rock:"RCK", Ghost:"GST", Dragon:"DRG", Dark:"DRK", Steel:"STL", Fairy:"FAI"};
  return types.map(type => `<span class="type-chip${compact ? " compact" : ""}" data-type="${type}" title="${type}" style="background:${TYPE_COLORS[type]}">${compact ? abbr[type] : type}</span>`).join("");
}

const HISUIAN_SPRITE_BY_DEX = {
  3:"decidueye-hisuian", 6:"typhlosion-hisuian", 9:"samurott-hisuian",
  84:"qwilfish-hisuian", 85:"overqwil", 94:"lilligant-hisuian", 116:"sliggoo-hisuian", 117:"goodra-hisuian",
  150:"growlithe-hisuian", 151:"arcanine-hisuian", 192:"voltorb-hisuian", 193:"electrode-hisuian",
  202:"sneasel-hisuian", 203:"sneasler", 216:"avalugg-hisuian", 219:"zorua-hisuian", 220:"zoroark-hisuian", 222:"braviary-hisuian"
};

function spriteName(input) {
  const pokemon = typeof input === "object" ? input : findPokemonByName(input);
  if (pokemon && HISUIAN_SPRITE_BY_DEX[pokemon.num]) return HISUIAN_SPRITE_BY_DEX[pokemon.num];
  const name = typeof input === "object" ? input.name : input;
  return (name || "").toLowerCase().replaceAll(".","").replaceAll("'","").replaceAll(" ","-").replace("mime-jr","mime-jr");
}

function spriteUrl(input) {
  return `https://img.pokemondb.net/sprites/home/normal/${spriteName(input)}.png`;
}

function localSpriteUrl(input) {
  return `assets/pokemon/${spriteName(input)}.png`;
}

function spriteFallbackUrl(input) {
  return `https://img.pokemondb.net/sprites/scarlet-violet/normal/${spriteName(input)}.png`;
}

window.plaSwapImageFallback = function plaSwapImageFallback(img) {
  const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
  if (!fallbacks.length) return;
  const [next, ...remaining] = fallbacks;
  img.dataset.fallbacks = remaining.join("|");
  img.src = next;
};

function fallbackImageAttrs(sources) {
  const cleanSources = sources.filter(Boolean);
  const [first, ...rest] = cleanSources;
  return `src="${first}"${rest.length ? ` data-fallbacks="${rest.join("|")}" onerror="window.plaSwapImageFallback && window.plaSwapImageFallback(this)"` : ""}`;
}

function pokemonSpriteAttrs(input) {
  return fallbackImageAttrs([localSpriteUrl(input), spriteUrl(input), spriteFallbackUrl(input)]);
}

function setPokemonSprite(img, input) {
  if (!img || !input) return;
  const sources = [localSpriteUrl(input), spriteUrl(input), spriteFallbackUrl(input)].filter(Boolean);
  const [first, ...rest] = sources;
  img.src = first;
  img.dataset.fallbacks = rest.join("|");
  img.onerror = () => window.plaSwapImageFallback && window.plaSwapImageFallback(img);
}

function pokemonLinkTarget(name) {
  if (!name) return null;
  const direct = findPokemonByName(name);
  if (direct) return direct;
  const stripped = name.replace(/^Hisuian\s+/i, "");
  return stripped !== name ? findPokemonByName(stripped) : null;
}

function pokemonLink(name, className = "") {
  const pokemon = pokemonLinkTarget(name);
  if (!pokemon) return name;
  const classes = className ? ` class="${className}"` : "";
  return `<a${classes} href="pokemon.html?pokemon=${encodeURIComponent(pokemon.name)}">${name}</a>`;
}

function pokemonListLinks(text) {
  return String(text).split(/(\s*(?:\/|->|;|,|\+|\band\b)\s*)/i).map(part => {
    const trimmed = part.trim();
    if (!trimmed || /^(\/|->|;|,|\+|and)$/i.test(trimmed)) return part;
    return pokemonLinkTarget(trimmed) ? part.replace(trimmed, pokemonLink(trimmed, "pokemon-inline-link")) : part;
  }).join("");
}

function pokemonTitleLinks(text) {
  const title = String(text);
  const prefixed = title.match(/^(Alpha|Noble)\s+(.+)$/);
  return prefixed ? `${prefixed[1]} ${pokemonListLinks(prefixed[2])}` : pokemonListLinks(title);
}

function statTotal(stats) {
  return stats.reduce((sum, stat) => sum + stat, 0);
}

function defensiveProfile(types) {
  const rows = TYPES.map(type => [type, damageMultiplier(type, types)]);
  return {
    weaknesses: rows.filter(([,mult]) => mult > 1).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])),
    resists: rows.filter(([,mult]) => mult > 0 && mult < 1).sort((a,b) => a[1] - b[1] || a[0].localeCompare(b[0])),
    immunities: rows.filter(([,mult]) => mult === 0).sort((a,b) => a[0].localeCompare(b[0]))
  };
}

function stabTargets(types) {
  return TYPES
    .map(type => [type, Math.max(...types.map(attack => damageMultiplier(attack, [type])))])
    .filter(([,mult]) => mult >= 2)
    .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function abilitySummary(pokemon) {
  const special = {
    Cherrim:"Flower Gift is represented through Cherrim's sunshine form behavior.",
    Regigigas:"Slow Start is represented in PLA, reducing early battle pressure.",
    Arceus:"Multitype is represented through plates and Judgment."
  };
  return special[pokemon.name] || "Standard abilities are not active battle mechanics in Pokemon Legends: Arceus.";
}

function renderTable(id, headers, rows) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderCards() {
  if ($("starterCards")) $("starterCards").innerHTML = starters.map(p => `<article class="card starter-card"><header><img ${pokemonSpriteAttrs(p.name)} alt="${p.name} sprite"><div><h3>${pokemonLink(p.name, "pokemon-name-link")}</h3>${typeChips(p.types)}</div></header>${statChart(p.stats)}<p>${p.text}</p></article>`).join("");
  if ($("nobleCards")) $("nobleCards").innerHTML = nobles.map(n => `<article class="card"><h3>${pokemonLink(n[0], "pokemon-name-link")}</h3>${typeChips(n[1].split("/"))}<p><strong>Battle answers:</strong> ${n[2]}</p><p>${n[3]}</p></article>`).join("");
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
    return `<article class="card viable-card"><header><img ${pokemonSpriteAttrs(p.name)} alt="${p.name} sprite"><div><h3>${pokemonLink(p.name, "pokemon-name-link")}</h3>${typeChips(p.types)}<br>${p.role.split(" ").map(r => `<span class="tag">${r}</span>`).join("")}</div></header>${statChart(p.stats)}<p><strong>Moves:</strong> ${moves}</p><p>${p.note}</p></article>`;
  }).join("");
}

function itemSpriteName(name) {
  return name
    .toLowerCase()
    .replace(/pok[eé]/g, "poke")
    .replace(/king's/g, "kings")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pokemonDbItemSpriteName(name) {
  return name
    .toLowerCase()
    .replace(/pok[eé]/g, "poke")
    .replace(/xp-candy/g, "exp-candy")
    .replace(/king's/g, "kings")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function itemAssetUrl(name) {
  return `assets/items/${pokemonDbItemSpriteName(name)}.png`;
}

const ARCHIVE_ITEM_NAME_OVERRIDES = {
  "Poke Ball":"Pok\u00e9 Ball"
};

function archiveItemName(name) {
  const archiveName = ARCHIVE_ITEM_NAME_OVERRIDES[name] || name;
  return archiveName
    .replace(/^Poke /, "Pok\u00e9 ")
    .replace(/^XP Candy /, "Exp. Candy ")
    .replace(/['\u2019]/g, "")
    .replace(/\s+/g, "_");
}

function archiveItemSpriteUrl(name, version) {
  const file = `Bag_${archiveItemName(name)}_${version}_Sprite.png`;
  return `https://archives.bulbagarden.net/wiki/Special:Redirect/file/${encodeURIComponent(file)}`;
}

const ITEM_DIRECT_SPRITES = {
  "Poke Ball":archiveItemSpriteUrl("Poke Ball", "LA"),
  "Great Ball":archiveItemSpriteUrl("Great Ball", "LA"),
  "Ultra Ball":archiveItemSpriteUrl("Ultra Ball", "LA"),
  "Heavy Ball":archiveItemSpriteUrl("Heavy Ball", "LA"),
  "Leaden Ball":archiveItemSpriteUrl("Leaden Ball", "LA"),
  "Gigaton Ball":archiveItemSpriteUrl("Gigaton Ball", "LA"),
  "Feather Ball":archiveItemSpriteUrl("Feather Ball", "LA"),
  "Wing Ball":archiveItemSpriteUrl("Wing Ball", "LA"),
  "Jet Ball":archiveItemSpriteUrl("Jet Ball", "LA"),
  "Origin Ball":archiveItemSpriteUrl("Origin Ball", "LA"),
  "Potion":archiveItemSpriteUrl("Potion", "LA"),
  "Super Potion":archiveItemSpriteUrl("Super Potion", "LA"),
  "Hyper Potion":archiveItemSpriteUrl("Hyper Potion", "LA"),
  "Max Potion":archiveItemSpriteUrl("Max Potion", "LA"),
  "Full Restore":archiveItemSpriteUrl("Full Restore", "LA"),
  "Revive":archiveItemSpriteUrl("Revive", "LA"),
  "Max Revive":archiveItemSpriteUrl("Max Revive", "LA"),
  "Remedy":archiveItemSpriteUrl("Remedy", "LA"),
  "Fine Remedy":archiveItemSpriteUrl("Fine Remedy", "LA"),
  "Superb Remedy":archiveItemSpriteUrl("Superb Remedy", "LA"),
  "Full Heal":archiveItemSpriteUrl("Full Heal", "LA"),
  "Smoke Bomb":"https://archives.bulbagarden.net/media/upload/1/1c/Bag_Smoke_Bomb_LA_Sprite.png",
  "Scatter Bang":"https://archives.bulbagarden.net/media/upload/3/32/Bag_Scatter_Bang_LA_Sprite.png",
  "Sticky Glob":"https://archives.bulbagarden.net/media/upload/9/99/Bag_Sticky_Glob_LA_Sprite.png",
  "Mushroom Cake":"https://archives.bulbagarden.net/media/upload/c/cc/Bag_Mushroom_Cake_LA_Sprite.png",
  "Honey Cake":"https://archives.bulbagarden.net/media/upload/7/71/Bag_Honey_Cake_LA_Sprite.png",
  "Grain Cake":"https://archives.bulbagarden.net/media/upload/9/91/Bag_Grain_Cake_LA_Sprite.png",
  "Bean Cake":"https://archives.bulbagarden.net/media/upload/d/d7/Bag_Bean_Cake_LA_Sprite.png",
  "Salt Cake":"https://archives.bulbagarden.net/media/upload/e/e0/Bag_Salt_Cake_LA_Sprite.png",
  "Star Piece":archiveItemSpriteUrl("Star Piece", "LA"),
  "Linking Cord":archiveItemSpriteUrl("Linking Cord", "LA"),
  "Metal Coat":archiveItemSpriteUrl("Metal Coat", "LA"),
  "Black Augurite":archiveItemSpriteUrl("Black Augurite", "LA"),
  "Protector":archiveItemSpriteUrl("Protector", "LA"),
  "Upgrade":"https://archives.bulbagarden.net/media/upload/f/f1/Bag_Upgrade_LA_Sprite.png",
  "Dubious Disc":archiveItemSpriteUrl("Dubious Disc", "LA"),
  "Magmarizer":archiveItemSpriteUrl("Magmarizer", "LA"),
  "Electirizer":archiveItemSpriteUrl("Electirizer", "LA"),
  "Reaper Cloth":archiveItemSpriteUrl("Reaper Cloth", "LA"),
  "Peat Block":archiveItemSpriteUrl("Peat Block", "LA"),
  "Razor Claw":archiveItemSpriteUrl("Razor Claw", "LA"),
  "Razor Fang":archiveItemSpriteUrl("Razor Fang", "LA"),
  "Shiny Stone":archiveItemSpriteUrl("Shiny Stone", "LA"),
  "Moon Stone":archiveItemSpriteUrl("Moon Stone", "LA"),
  "Sun Stone":archiveItemSpriteUrl("Sun Stone", "LA"),
  "Leaf Stone":archiveItemSpriteUrl("Leaf Stone", "LA"),
  "Ice Stone":archiveItemSpriteUrl("Ice Stone", "LA"),
  "Dawn Stone":archiveItemSpriteUrl("Dawn Stone", "LA")
};

function itemSpriteHtml(name) {
  if (!name || name === "Move condition") return `<span class="item-cell no-sprite"><span class="item-fallback">?</span><span>${name}</span></span>`;
  const localFallbacks = name === "Leaden Ball" ? ["assets/items/leaden-ball-la.png"] : [];
  const sources = [
    itemAssetUrl(name),
    ...localFallbacks,
    ITEM_DIRECT_SPRITES[name],
    archiveItemSpriteUrl(name, "LA"),
    archiveItemSpriteUrl(name, "SV"),
    `https://img.pokemondb.net/sprites/items/${pokemonDbItemSpriteName(name)}.png`,
    ""
  ];
  return `<span class="item-cell"><img ${fallbackImageAttrs(sources)} alt=""><span>${name}</span></span>`;
}

function renderRecipes() {
  if (!$("recipeTable")) return;
  const q = $("recipeSearch").value.toLowerCase();
  const cat = $("recipeCategory").value;
  const rows = recipes
    .filter(r => (cat === "all" || r[1] === cat) && r.join(" ").toLowerCase().includes(q))
    .map(r => [itemSpriteHtml(r[0]), r[1], r[2]]);
  renderTable("recipeTable", ["Item","Category","Materials"], rows);
}

function renderDex() {
  if (!$("pokedexGrid")) return;
  const q = $("dexSearch").value.toLowerCase();
  const type = $("dexType").value;
  $("pokedexGrid").innerHTML = POKEDEX.filter(p => {
    return p.name.toLowerCase().includes(q) && (type === "all" || p.types.includes(type));
  }).map(p => {
    const stats = pokemonStats(p.name);
    const total = stats.length ? statTotal(stats) : "-";
    return `<a class="dex-card" href="pokemon.html?pokemon=${encodeURIComponent(p.name)}">
      <img ${pokemonSpriteAttrs(p)} alt="${p.name} sprite" loading="lazy">
      <span><strong>#${String(p.num).padStart(3,"0")} ${p.name}</strong>${typeChips(p.types)}<small>BST ${total}</small></span>
    </a>`;
  }).join("");
}

function damageMultiplier(attack, defenderTypes) {
  return defenderTypes.reduce((mult, def) => mult * (TYPE_CHART[attack]?.[def] ?? 1), 1);
}

function normalizeLookup(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function searchTokens(value) {
  return (value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
}

function editDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({length:b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      previous = tmp;
    }
  }
  return row[b.length];
}

function findPokemonByName(name) {
  const normalized = normalizeLookup(name || "");
  return POKEDEX.find(p => normalizeLookup(p.name) === normalized) ||
    POKEDEX.find(p => normalizeLookup(p.name) === normalized.replace(/^hisuian/, ""));
}

function fuzzyMoveCandidates(slot, query) {
  const normalizedMove = normalizeLookup(query || "");
  if (!slot) return [];
  const moves = learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value);
  const terms = searchTokens(query);
  if (!normalizedMove) return moves.map(move => ({move, score:1, exact:false}));
  return moves.map(move => {
    const normalizedCandidate = normalizeLookup(move);
    const moveTerms = searchTokens(move);
    let score = 0;
    if (normalizedCandidate === normalizedMove) score += 1000;
    if (normalizedCandidate.startsWith(normalizedMove)) score += 520;
    if (normalizedCandidate.includes(normalizedMove)) score += 360 - Math.min(120, normalizedCandidate.indexOf(normalizedMove) * 8);
    terms.forEach(term => {
      const bestTerm = Math.min(...moveTerms.map(candidate => editDistance(term, candidate)));
      if (moveTerms.some(candidate => candidate === term)) score += 180;
      else if (moveTerms.some(candidate => candidate.includes(term) || term.includes(candidate))) score += 130;
      else if (bestTerm <= Math.max(1, Math.floor(term.length * .34))) score += 85;
    });
    const wholeDistance = editDistance(normalizedMove, normalizedCandidate);
    if (wholeDistance <= Math.max(2, Math.floor(normalizedCandidate.length * .28))) score += 240 - wholeDistance * 18;
    return score > 0 ? {move, score, exact:normalizedCandidate === normalizedMove} : null;
  })
    .filter(Boolean)
    .sort((a,b) => b.score - a.score || a.move.localeCompare(b.move));
}

function findMoveForSlot(slot, moveName, fuzzy = false) {
  const normalizedMove = normalizeLookup(moveName || "");
  if (!slot || !normalizedMove) return "";
  const exact = learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value)
    .find(candidate => normalizeLookup(candidate) === normalizedMove);
  if (exact || !fuzzy) return exact || "";
  const [best, second] = fuzzyMoveCandidates(slot, moveName);
  if (!best || best.score < 85) return "";
  if (second && best.score < 260 && best.score - second.score < 30) return "";
  return best.move;
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
  if (details.accuracy < 80) return false;
  if (!details.power && !isSupportMove(move, details)) return false;
  if (details.power && usesClearlyWeakerAttack(member, details)) return false;
  if (details.power && details.power < 70 && !hasRecommendationException(move, details)) return false;
  if (details.power && details.accuracy < 90 && details.power < 100 && !profileIncludes && !hasRecommendationException(move, details)) return false;
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

function drawbackCount(entries) {
  return entries.filter(entry => DRAWBACK_MOVES.has(entry.move)).length;
}

function isRedundantMove(member, move, details, entries) {
  if (NEVER_RECOMMENDED_MOVES.has(move)) return true;
  if (isStatusSupport(move)) return hasStatusSupport(entries);
  if (isSetupSupport(move)) return hasSetupSupport(entries);
  if (!details.power) return true;
  if (hasMoveByType(entries, details.type)) return true;
  if (DRAWBACK_MOVES.has(move) && drawbackCount(entries) >= 2) return true;
  if (details.type === "Normal" && !member.pokemon.types.includes("Normal") && details.power >= 100) return true;
  return false;
}

function recommendationScoreForEntry(member, move, details, gain, entries) {
  const profileMoves = MOVE_PROFILE_HINTS[member.pokemon.name] || [];
  const profileIndex = profileMoves.indexOf(move);
  if (profileIndex !== -1) return 10000 - profileIndex * 100 + gain;
  if (isStatusSupport(move)) {
    const paysOffStatus = learnableMovesForPokemon(member.pokemon.name).some(candidate => STATUS_PAYOFF_MOVES.has(candidate));
    return (paysOffStatus ? 130 : 55) + details.accuracy + gain * .2;
  }
  if (isSetupSupport(move)) return 105 + (move === "Victory Dance" ? 90 : 0) + gain * .15;
  let score = recommendationScore(member, move, gain);
  if (HIGH_CRIT_MOVES.has(move) && (hasCritSupport(entries) || learnableMovesForPokemon(member.pokemon.name).includes("Triple Arrows"))) score += 50;
  if (STATUS_PAYOFF_MOVES.has(move) && hasStatusSupport(entries)) score += 60;
  if (move === "Triple Arrows" && learnableMovesForPokemon(member.pokemon.name).some(candidate => HIGH_CRIT_MOVES.has(candidate))) score += 60;
  if (SPECIAL_EFFECT_ATTACKS.has(move)) score += 32;
  if (MOVE_EFFECT_NOTES[move]) score += 16;
  if (DRAWBACK_MOVES.has(move)) score -= 18 + drawbackCount(entries) * 34;
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

function moveEffectSummary(move) {
  if (MOVE_EFFECT_NOTES[move]) return MOVE_EFFECT_NOTES[move];
  if (isStatusSupport(move)) return "catch/status support";
  if (isSetupSupport(move)) return "stat setup";
  if (HIGH_CRIT_MOVES.has(move)) return "high critical-hit ratio";
  if (STATUS_PAYOFF_MOVES.has(move)) return "stronger into status";
  if (SPECIAL_EFFECT_ATTACKS.has(move)) return "added effect";
  return "";
}

function moveSummaryText(move, details) {
  const attackType = details.category === "Status" ? `${details.type} Status` : `${details.type} ${details.category}`;
  const damage = details.power ? `${details.power} dmg` : "status";
  const accuracy = `${details.accuracy} acc`;
  return [attackType, damage, accuracy, moveEffectSummary(move)].filter(Boolean).join(" / ");
}

function moveOptionHtml(move) {
  const details = moveDetails(move);
  const label = details.type ? `${details.type} ${details.category} ${details.power || "-"}` : "";
  return `<option value="${move}">${label}</option>`;
}

function moveTypeForSlot(slot, moveName) {
  const move = findMoveForSlot(slot, moveName, true);
  return move ? moveDetails(move).type : "";
}

function getTeam() {
  return [...document.querySelectorAll(".team-slot")].map(slot => {
    const pokemonName = slot.querySelector(".team-pokemon")?.value;
    const pokemon = findPokemonByName(pokemonName);
    const moves = [...slot.querySelectorAll(".move-row")].map(row => ({
      name: row.dataset.move || row.querySelector(".move-name")?.value.trim() || "",
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
      <img class="team-sprite" src="" alt="" hidden>
      <label><span>Pokemon ${index + 1}</span><input class="team-pokemon" list="pokemonNames" placeholder="Select or type Pokemon"></label>
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
  document.querySelectorAll(".team-slot").forEach(slot => updateMoveDatalist(slot));
}

function updateMoveDatalist(slot, query = "") {
  const moves = learnableMovesForPokemon(slot.querySelector(".team-pokemon")?.value);
  const datalist = slot.querySelector(`datalist`);
  const queryText = String(query || "");
  const displayMoves = queryText.trim() ? fuzzyMoveCandidates(slot, queryText).slice(0, 80).map(candidate => candidate.move) : moves;
  if (datalist) datalist.innerHTML = displayMoves.map(moveOptionHtml).join("");
  slot.querySelectorAll(".move-name").forEach((input, index) => {
    input.placeholder = moves.length ? `Move ${index + 1}` : "Select Pokemon first";
  });
}

function updateSelectedPokemon(slot, pokemonName) {
  const pokemon = findPokemonByName(pokemonName);
  selectRecommendationSlot(slot);
  slot.querySelector(".team-types").innerHTML = pokemon ? typeChips(pokemon.types) : "";
  const sprite = slot.querySelector(".team-sprite");
  if (sprite) {
    sprite.hidden = !pokemon;
    if (pokemon) {
      setPokemonSprite(sprite, pokemon);
      sprite.alt = `${pokemon.name} sprite`;
    }
  }
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

function duplicateMoveInSlot(row, move) {
  const slot = row.closest(".team-slot");
  if (!slot || !move) return false;
  return [...slot.querySelectorAll(".move-row")].some(otherRow => {
    if (otherRow === row) return false;
    const otherMove = otherRow.dataset.move || otherRow.querySelector(".move-name")?.value.trim() || "";
    return normalizeLookup(otherMove) === normalizeLookup(move);
  });
}

function applyMoveTypeLock(row, clearInvalid = false) {
  const moveName = row.querySelector(".move-name").value.trim();
  const typeInput = row.querySelector(".move-type");
  const moveInput = row.querySelector(".move-name");
  const status = row.querySelector(".move-status");
  const slot = row.closest(".team-slot");
  const move = findMoveForSlot(slot, moveName, true);
  const details = move ? moveDetails(move) : null;
  row.classList.remove("selected-move", "invalid-move");
  moveInput.style.removeProperty("--move-color");
  typeInput.value = "";
  row.dataset.move = "";
  if (status) status.textContent = "";
  if (!moveName) return;
  if (move && details.type) {
    if (duplicateMoveInSlot(row, move)) {
      row.classList.add("invalid-move");
      if (status) status.textContent = "Move already selected for this Pokemon.";
      if (clearInvalid) moveInput.value = "";
      return;
    }
    if (clearInvalid || normalizeLookup(moveName) === normalizeLookup(move)) moveInput.value = move;
    row.dataset.move = move;
    typeInput.value = details.type;
    row.classList.add("selected-move");
    moveInput.style.setProperty("--move-color", TYPE_COLORS[details.type] || "");
    if (status) status.textContent = moveSummaryText(move, details);
    return;
  }
  if (clearInvalid) {
    moveInput.value = "";
    row.classList.add("invalid-move");
    if (status) status.textContent = "Move not learnable by this Pokemon.";
  } else {
    if (status) status.textContent = "Keep typing. Use a learnable move for this Pokemon.";
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

function hasTeamState(state) {
  return Array.isArray(state) && state.some(slot => slot.pokemon || slot.moves?.some(move => move));
}

function readCurrentTeamDraft() {
  try {
    return JSON.parse(localStorage.getItem(TEAM_AUTOSAVE_KEY) || "null");
  } catch {
    return null;
  }
}

function writeCurrentTeamDraft() {
  if (!$("teamBuilder")) return;
  const draft = {
    teamName:$("teamName")?.value.trim() || "",
    slots:collectTeamState()
  };
  localStorage.setItem(TEAM_AUTOSAVE_KEY, JSON.stringify(draft));
}

function restoreCurrentTeamDraft() {
  if (!$("teamBuilder")) return;
  const draft = readCurrentTeamDraft();
  if (!draft || !hasTeamState(draft.slots)) return;
  if ($("teamName")) $("teamName").value = draft.teamName || "";
  applyTeamState(draft.slots);
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
  writeCurrentTeamDraft();
}

function loadSelectedTeam() {
  const name = $("savedTeams")?.value;
  if (!name) return;
  const state = readSavedTeams()[name];
  if (!state) return;
  if ($("teamName")) $("teamName").value = name;
  applyTeamState(state);
  writeCurrentTeamDraft();
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
  writeCurrentTeamDraft();
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
  candidates.forEach(candidate => {
    if (picked.length >= 4) return;
    if (picked.some(p => p.move === candidate.move)) return;
    if (NEVER_RECOMMENDED_MOVES.has(candidate.move)) return;
    picked.push({...candidate, fallback:true});
  });
  if (picked.length < 4) {
    learnableMovesForPokemon(member.pokemon.name)
      .filter(move => !NEVER_RECOMMENDED_MOVES.has(move))
      .filter(move => !selectedMoves.has(normalizeLookup(move)))
      .map(move => {
        const details = moveDetails(move);
        if (!details.type || details.accuracy < 80) return null;
        if (!details.power && !isSupportMove(move, details)) return null;
        if (details.power && details.power < 70 && !hasRecommendationException(move, details)) return null;
        const nextTypes = [...new Set([...baseTypes, details.type])];
        const gain = offensiveCoverageCount(nextTypes) - baseScore;
        return {...details, move, gain, support:isSupportMove(move, details), stab:member.pokemon.types.includes(details.type), score:recommendationScoreForEntry(member, move, details, gain, workingEntries) - 90, fallback:true};
      })
      .filter(Boolean)
      .sort((a,b) => b.score - a.score || b.power - a.power || a.move.localeCompare(b.move))
      .forEach(candidate => {
        if (picked.length >= 4) return;
        if (picked.some(p => p.move === candidate.move)) return;
        picked.push(candidate);
      });
  }
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
  const picked = [];
  const workingMember = {pokemon, moves:[], slotIndex:0};
  const addCandidate = (move, allowRedundant = false) => {
    if (!move || picked.includes(move)) return;
    const details = moveDetails(move);
    const entries = picked.map(name => ({move:name, details:moveDetails(name)}));
    if (!allowRedundant && isRedundantMove(workingMember, move, details, entries)) return;
    picked.push(move);
    workingMember.moves.push({name:move, type:details.type});
  };
  [...validProfileMoves, ...generated.map(rec => rec.move)].forEach(move => addCandidate(move));
  [...validProfileMoves, ...generated.map(rec => rec.move)].forEach(move => {
    if (picked.length < 4) addCandidate(move, true);
  });
  return picked.slice(0, 4);
}

function shuffle(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function bumpTypeCount(counts, type, amount = 1) {
  if (!type) return;
  counts.set(type, (counts.get(type) || 0) + amount);
}

function randomMoveTypePenalty(type, teamMoveTypeCounts) {
  return (teamMoveTypeCounts?.get(type) || 0) * 55;
}

function randomTeamCandidates() {
  return [...new Set(RANDOM_TEAM_POOL)]
    .map(name => findPokemonByName(name))
    .filter(Boolean)
    .filter(pokemon => !RANDOM_TEAM_EXCLUSIONS.has(pokemon.name))
    .filter(pokemon => learnableMovesForPokemon(pokemon.name).length);
}

function randomMovesetForPokemon(name, teamMoveTypeCounts = new Map()) {
  const pokemon = findPokemonByName(name);
  if (!pokemon) return [];
  const profile = MOVE_PROFILE_HINTS[pokemon.name] || [];
  const suggested = recommendedMovesetForPokemon(pokemon.name);
  const member = {pokemon, moves:[], slotIndex:0};
  const learnable = learnableMovesForPokemon(pokemon.name);
  const learnableByKey = new Map(learnable.map(move => [normalizeLookup(move), move]));
  const pool = learnable
    .filter(move => !NEVER_RECOMMENDED_MOVES.has(move))
    .map(move => {
      const details = moveDetails(move);
      if (!details.type || details.accuracy < 80) return null;
      if (details.power && details.power < 70 && !hasRecommendationException(move, details)) return null;
      if (!details.power && !isSupportMove(move, details)) return null;
      const gain = offensiveCoverageCount([details.type]);
      const teamPenalty = randomMoveTypePenalty(details.type, teamMoveTypeCounts);
      return {...details, move, gain, score:recommendationScoreForEntry(member, move, details, gain, []) + (profile.includes(move) ? 100 : 0) - teamPenalty + Math.random() * 18};
    })
    .filter(Boolean)
    .sort((a,b) => b.score - a.score || b.power - a.power);
  const picked = [];
  const addMove = move => {
    const canonical = learnableByKey.get(normalizeLookup(move));
    if (!canonical || picked.includes(canonical)) return;
    move = canonical;
    const details = moveDetails(move);
    if (isRedundantMove(member, move, details, picked.map(name => ({move:name, details:moveDetails(name)})))) return;
    picked.push(move);
    member.moves.push({name:move, type:details.type});
    bumpTypeCount(teamMoveTypeCounts, details.type);
  };
  const forceAddMove = move => {
    const canonical = learnableByKey.get(normalizeLookup(move));
    if (!canonical || picked.includes(canonical)) return;
    const details = moveDetails(canonical);
    picked.push(canonical);
    member.moves.push({name:canonical, type:details.type});
    bumpTypeCount(teamMoveTypeCounts, details.type);
  };
  [...new Set([...suggested, ...profile])]
    .sort((a,b) => randomMoveTypePenalty(moveDetails(a).type, teamMoveTypeCounts) - randomMoveTypePenalty(moveDetails(b).type, teamMoveTypeCounts))
    .forEach(addMove);
  pool.forEach(entry => {
    if (picked.length >= 4) return;
    addMove(entry.move);
  });
  pool.forEach(entry => {
    if (picked.length >= 4 || picked.includes(entry.move)) return;
    forceAddMove(entry.move);
  });
  return picked.slice(0, 4);
}

function randomizeTeam() {
  if (!$("teamBuilder")) return;
  const remaining = shuffle(randomTeamCandidates());
  const selected = [];
  while (selected.length < 6 && remaining.length) {
    const choice = remaining.shift();
    if (RANDOM_TEAM_STARTERS.has(choice.name) && selected.some(pokemon => RANDOM_TEAM_STARTERS.has(pokemon.name))) continue;
    if (RANDOM_TEAM_EEVEELUTIONS.has(choice.name) && selected.filter(pokemon => RANDOM_TEAM_EEVEELUTIONS.has(pokemon.name)).length >= 2) continue;
    selected.push(choice);
  }
  const teamMoveTypeCounts = new Map();
  const state = selected
    .map(pokemon => ({pokemon:pokemon.name, moves:randomMovesetForPokemon(pokemon.name, teamMoveTypeCounts)}));
  applyTeamState(state);
  writeCurrentTeamDraft();
}

function updateFloatingJumpVisibility() {
  const button = $("jumpToCoverage");
  if (!button) return;
  const y = window.scrollY;
  const nearBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 96;
  if (y < 160 || (floatingJumpDismissed && y < floatingJumpLastY - 300 && y < 900)) floatingJumpDismissed = false;
  button.classList.toggle("is-visible", y > 520 && !floatingJumpDismissed && !nearBottom);
  floatingJumpLastY = y;
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
    const effect = moveEffectSummary(rec.move);
    return `<li title="${gain}"><span>${typeChips([rec.type])}<strong>${rec.move}</strong>${stab}<small>${[`${rec.type} ${rec.category}`, damage, accuracy, effect].filter(Boolean).join(" / ")}</small></span><button class="recommendation-button" type="button" data-slot="${selected.slotIndex}" data-move="${rec.move}">Add</button></li>`;
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
    ["Best neutral", neutral.length],
    ["Not very effective", resisted.length],
    ["Ineffective", immune.length],
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
  const names = list.map(p => pokemonLink(p.name, "pokemon-inline-link")).join(", ");
  return `<div class="coverage-group"><strong>${label}</strong><span>${list.length}</span><p>${names || "None"}</p></div>`;
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
  const header = `<tr><th class="type-axis-head">Atk / Def</th>${TYPES.map(type => `<th>${typeChips([type], true)}</th>`).join("")}</tr>`;
  const colgroup = `<colgroup><col class="type-chart-axis-col">${TYPES.map(() => `<col>`).join("")}</colgroup>`;
  const rows = TYPES.map(attack => {
    const cells = TYPES.map(defense => {
      const multiplier = damageMultiplier(attack, [defense]);
      return `<td class="type-matchup type-matchup-${String(multiplier).replace(".","-")}">${multiplierLabel(multiplier)}</td>`;
    }).join("");
    return `<tr><th>${typeChips([attack], true)}</th>${cells}</tr>`;
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
  if (point[0] === "Gate") return "F";
  if (point[0] === "Transition") return "T";
  if (point[0] === "Cave") return "Cv";
  if (point[0] === "Wisp") return "W";
  if (point[0] === "Unown") return "U";
  if (point[0] === "Point") return "P";
  if (point[0] === "Character") return "NPC";
  if (point[0] === "Arena") return "A";
  if (point[0] === "Noble") return "N";
  if (point[0] === "Landmark") return "L";
  return point[0][0];
}

function mapMarkerStyle(point, region) {
  if (point[0] !== "Subarea") return "";
  const offset = mapSubareaLabelOffsets[region]?.[point[1]];
  if (!offset) return "";
  return ` style="--label-dx:${offset[0]}px;--label-dy:${offset[1]}px"`;
}

function mapKindName(kind) {
  return exactMapMarkerText[kind]?.[0] || kind;
}

function mapCountsHtml(region, enabled, visibleCount) {
  const rows = [...enabled]
    .map(kind => [kind, mapData[region].filter(point => point[0] === kind).length])
    .filter(([, count]) => count > 0)
    .map(([kind, count]) => `<span>${mapKindName(kind)} : ${count}</span>`)
    .join("");
  return `<div class="map-counts"><strong>${visibleCount} markers visible</strong>${rows}</div>`;
}

function selectedMarkerListHtml(points, selectedIndex) {
  const selected = points[selectedIndex];
  if (!selected) return "";
  const label = mapKindName(selected[0]);
  const rows = points
    .map((point, index) => ({point, index}))
    .filter(({point}) => point[0] === selected[0]);
  return `<div class="map-list collectible-list"><h4>${label}</h4>${rows.map(({point, index}) => `<button class="${index === selectedIndex ? "active" : ""}" data-list-index="${index}">${point[1]} <span class="tag">${point[0]}</span></button>`).join("")}</div>`;
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
  const map = $("regionMap");
  const rect = map?.getBoundingClientRect();
  $("regionMap")?.style.setProperty("--map-scale", mapViewState.scale);
  layer.style.transform = `translate(${mapViewState.x}px, ${mapViewState.y}px) scale(${mapViewState.scale})`;
  if (rect) {
    document.querySelectorAll(".marker").forEach(marker => {
      const x = (+marker.dataset.x / 100) * rect.width * mapViewState.scale + mapViewState.x;
      const y = (+marker.dataset.y / 100) * rect.height * mapViewState.scale + mapViewState.y;
      marker.style.left = `${x}px`;
      marker.style.top = `${y}px`;
    });
  }
  if ($("mapZoomLabel")) $("mapZoomLabel").textContent = `${Math.round(mapViewState.scale * 100)}%`;
  syncMapDetailsHeight();
}

function syncMapDetailsHeight() {
  const map = $("regionMap");
  const details = $("mapDetails");
  if (!map || !details) return;
  const height = Math.round(map.getBoundingClientRect().height);
  if (height) details.style.setProperty("--map-box-height", `${height}px`);
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
  const mapControlInputs = [...document.querySelectorAll(".map-controls input")];
  const enabled = new Set(mapControlInputs.length ? mapControlInputs.filter(i => i.checked).map(i => i.value) : mapData[region].map(point => point[0]));
  const points = mapData[region].filter(p => enabled.has(p[0]));
  $("regionMap").style.setProperty("--map-aspect", MAP_ASPECTS[region] || "1 / 1");
  $("regionMap").classList.toggle("reference-map", Boolean(MAP_IMAGES[region]));
  const mapImage = MAP_IMAGES[region] ? `url('${MAP_IMAGES[region].replaceAll("'", "\\'")}')` : "linear-gradient(135deg, rgba(112, 166, 109, .18), rgba(90, 153, 199, .14))";
  $("regionMap").innerHTML = `<div id="mapLayer" class="map-layer" style="--map-image:${mapImage}"></div><div id="mapMarkerLayer" class="map-marker-layer">${points.map((p,i) => `<button class="marker" data-index="${i}" data-kind="${p[0]}" data-x="${p[4]}" data-y="${p[5]}" title="${p[1]}"${mapMarkerStyle(p, region)}>${mapMarkerLabel(p)}</button>`).join("")}</div>`;
  bindMapInteractions();
  applyMapTransform();
  const setDetail = index => {
    const p = points[index] || points[0];
    if (!p) {
      $("mapDetails").innerHTML = "<h3>No markers</h3><p>Enable at least one layer.</p>";
      return;
    }
    document.querySelectorAll(".marker").forEach((m,i) => m.classList.toggle("active", i === index));
    $("mapDetails").innerHTML = `<span class="tag">${p[0]}</span><h3>${pokemonTitleLinks(p[1])}</h3><p><strong>${p[2]}</strong></p><p>${p[3]}</p>${mapCountsHtml(region, enabled, points.length)}${selectedMarkerListHtml(points, index)}`;
    syncMapDetailsHeight();
    document.querySelectorAll("[data-list-index]").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.listIndex)));
  };
  document.querySelectorAll(".marker").forEach(btn => btn.addEventListener("click", () => setDetail(+btn.dataset.index)));
  const requestedMarker = normalizeSearch(mapFocusName);
  let defaultIndex = requestedMarker ? points.findIndex(point => normalizeSearch(point[1]) === requestedMarker) : -1;
  if (defaultIndex === -1 && requestedMarker) defaultIndex = points.findIndex(point => normalizeSearch(point[1]).includes(requestedMarker));
  if (defaultIndex === -1) defaultIndex = points.findIndex(point => !["Wisp", "Unown"].includes(point[0]));
  setDetail(defaultIndex === -1 ? 0 : defaultIndex);
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
  renderTable("hisuianTable", ["Pokemon","Type","Location","Method / notes"], hisuian.map(row => [pokemonListLinks(row[0]), row[1], row[2], row[3]]));
  renderTable("evolutionTable", ["Item / method","Evolutions","Source / condition"], evolutions.map(row => [itemSpriteHtml(row[0]), pokemonListLinks(row[1]), row[2]]));
  renderNatures();
  renderTypeChart();
  renderTable("requestTable", ["No.","Request","Region","Why it matters"], requests);
  renderTable("legendaryTable", ["Pokemon","Location","Method / correction"], legendaries.map(row => [pokemonListLinks(row[0]), row[1], row[2]]));
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
  if (!wanted) {
    mount.classList.add("is-hidden");
    return;
  }
  mount.classList.remove("is-hidden");
  const normalized = wanted.toLowerCase().replace(/[^a-z0-9]/g, "");
  const dex = POKEDEX.find(p => p.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized);
  if (!dex) {
    mount.innerHTML = `<h2>Pokemon not found</h2><p>Try the search bar or browse the full Hisui Pokedex below.</p>`;
    return;
  }
  const viable = meta.find(p => p.name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(normalized) || normalized.includes(p.name.toLowerCase().replace(/[^a-z0-9]/g, "")));
  const stats = pokemonStats(dex.name);
  const profile = defensiveProfile(dex.types);
  const offensive = stabTargets(dex.types);
  const detailStats = stats.length ? statChart(stats, "detail-stat-chart") : "";
  const viableMoves = recommendedMovesetForPokemon(dex.name);
  const matchupText = list => list.length ? list.map(([t,m]) => `${t} ${m}x`).join(", ") : "None";
  const moveList = viableMoves.length ? viableMoves.map(move => {
    const details = moveDetails(move);
    const effect = MOVE_EFFECT_NOTES[move] ? `, ${MOVE_EFFECT_NOTES[move]}` : "";
    return `<li>${typeChips([details.type])}<strong>${move}</strong><span>${details.category}${details.power ? ` / ${details.power} power` : ""} / ${details.accuracy} acc${effect}</span></li>`;
  }).join("") : `<li><span>Use its STAB moves and reliable coverage from Zisu if building it for battle.</span></li>`;
  mount.innerHTML = `<div class="pokemon-detail">
    <img ${pokemonSpriteAttrs(dex)} alt="${dex.name} sprite">
    <div>
      <p class="eyebrow">Hisui #${String(dex.num).padStart(3,"0")}</p>
      <h2>${dex.name}</h2>
      <p>${typeChips(dex.types)}</p>
      ${viable ? `<p>${viable.note}</p>` : ""}
      ${detailStats}
      <div class="pokemon-facts">
        <p><strong>Weak to:</strong> ${matchupText(profile.weaknesses)}</p>
        <p><strong>Resists:</strong> ${matchupText(profile.resists)}</p>
        <p><strong>Immune to:</strong> ${profile.immunities.length ? profile.immunities.map(([t]) => t).join(", ") : "None"}</p>
        <p><strong>STAB hits super-effectively:</strong> ${offensive.length ? offensive.map(([t,m]) => `${t} ${m}x`).join(", ") : "No single-type target super-effectively by STAB alone"}</p>
      </div>
      <div class="pokemon-move-summary"><h3>Useful moves</h3><ul>${moveList}</ul></div>
    </div>
  </div>`;
}

function normalizeSearch(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function searchScore(item, query, normalizedQuery) {
  const title = item.title.toLowerCase();
  const normalizedTitle = normalizeSearch(item.title);
  const body = `${item.kind} ${item.text}`.toLowerCase();
  if (title === query || normalizedTitle === normalizedQuery) return 0;
  if (title.startsWith(query) || normalizedTitle.startsWith(normalizedQuery)) return 1;
  if (title.includes(query) || normalizedTitle.includes(normalizedQuery)) return 2;
  if (body.includes(query) || normalizeSearch(body).includes(normalizedQuery)) return 3;
  return 99;
}

function searchIndex() {
  const pokemonItems = POKEDEX.map(p => ({title:p.name, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Pokemon", text:`#${String(p.num).padStart(3,"0")} ${p.types.join("/")}`}));
  const metaItems = meta.map(p => ({title:`${p.name} moveset`, url:`pokemon.html?pokemon=${encodeURIComponent(p.name)}`, kind:"Moveset", text:recommendedMovesetForPokemon(p.name).join(", ") || p.moves}));
  const mapItems = Object.entries(mapData).flatMap(([region, points]) => points.map(p => ({title:p[1], url:`maps.html?region=${encodeURIComponent(region)}&marker=${encodeURIComponent(p[1])}`, kind:p[0], text:`${region}: ${p[2]}`})));
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
    const nq = normalizeSearch(q);
    const results = items
      .map((item, index) => ({item, index, score:searchScore(item, q, nq)}))
      .filter(result => result.score < 99)
      .sort((a,b) => a.score - b.score || a.index - b.index)
      .slice(0, 10)
      .map(result => result.item);
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

function markActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".top-nav a").forEach(link => {
    const target = link.getAttribute("href");
    if (target === current) link.setAttribute("aria-current", "page");
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
    mapFocusName = "";
    renderMap();
    renderRegionButtons();
  });
  document.querySelectorAll(".map-controls input").forEach(input => input.addEventListener("change", renderMap));
  if ($("mapSelectAll")) $("mapSelectAll").addEventListener("click", () => {
    document.querySelectorAll(".map-controls input[type='checkbox']").forEach(input => { input.checked = true; });
    renderMap();
  });
  if ($("mapClearAll")) $("mapClearAll").addEventListener("click", () => {
    mapFocusName = "";
    document.querySelectorAll(".map-controls input[type='checkbox']").forEach(input => { input.checked = false; });
    renderMap();
  });
  if ($("mapZoomIn")) $("mapZoomIn").addEventListener("click", () => setMapZoom(mapViewState.scale * 1.25));
  if ($("mapZoomOut")) $("mapZoomOut").addEventListener("click", () => setMapZoom(mapViewState.scale * .8));
  if ($("mapReset")) $("mapReset").addEventListener("click", () => resetMapView($("regionSelect")?.value || mapViewState.region));
  if ($("regionMap")) window.addEventListener("resize", syncMapDetailsHeight, {passive:true});
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
      writeCurrentTeamDraft();
    });
    $("teamBuilder").addEventListener("input", e => {
      selectRecommendationSlot(e.target.closest(".team-slot"));
      if (e.target.matches(".team-pokemon")) updateSelectedPokemon(e.target.closest(".team-slot"), e.target.value);
      if (e.target.matches(".move-name")) {
        const row = e.target.closest(".move-row");
        updateMoveDatalist(row.closest(".team-slot"), e.target.value);
        applyMoveTypeLock(row);
      }
      renderCoverage();
      writeCurrentTeamDraft();
    });
    $("teamBuilder").addEventListener("focusout", e => {
      if (!e.target.matches(".move-name")) return;
      const row = e.target.closest(".move-row");
      applyMoveTypeLock(row, true);
      renderCoverage();
      writeCurrentTeamDraft();
    });
    $("teamBuilder").addEventListener("keydown", e => {
      if (!e.target.matches(".move-name") || e.key !== "Enter") return;
      const row = e.target.closest(".move-row");
      applyMoveTypeLock(row, true);
      renderCoverage();
      writeCurrentTeamDraft();
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
    writeCurrentTeamDraft();
  });
  if ($("saveTeam")) $("saveTeam").addEventListener("click", saveCurrentTeam);
  if ($("loadTeam")) $("loadTeam").addEventListener("click", loadSelectedTeam);
  if ($("deleteTeam")) $("deleteTeam").addEventListener("click", deleteSelectedTeam);
  if ($("randomTeam")) $("randomTeam").addEventListener("click", randomizeTeam);
  if ($("jumpToCoverage")) $("jumpToCoverage").addEventListener("click", () => {
    floatingJumpDismissed = true;
    updateFloatingJumpVisibility();
    const target = $("coverageTable") || $("coverageSummary");
    if (target) target.scrollIntoView({behavior:"smooth", block:"end"});
  });
  if ($("jumpToCoverage")) {
    updateFloatingJumpVisibility();
    window.addEventListener("scroll", updateFloatingJumpVisibility, {passive:true});
  }
  if ($("savedTeams")) $("savedTeams").addEventListener("change", () => {
    if ($("teamName")) $("teamName").value = $("savedTeams").value;
    writeCurrentTeamDraft();
  });
  if ($("clearTeam")) $("clearTeam").addEventListener("click", () => {
    $("teamBuilder").innerHTML = Array.from({length: 6}, (_, index) => teamSlotHtml(index)).join("");
    selectedRecommendationSlot = 0;
    markSelectedTeamSlot();
    renderMoveDatalist();
    renderCoverage();
    writeCurrentTeamDraft();
  });
  if ($("addTeamSlot")) $("addTeamSlot").addEventListener("click", () => {
    const count = document.querySelectorAll(".team-slot").length;
    if (count < 6) {
      $("teamBuilder").insertAdjacentHTML("beforeend", teamSlotHtml(count));
      renderMoveDatalist();
      renderCoverage();
      writeCurrentTeamDraft();
    }
  });
  window.addEventListener("beforeunload", writeCurrentTeamDraft);
  wireGlobalSearch();
}

function init() {
  markActiveNav();
  renderStaticTables();
  renderCards();
  renderHomeCards();
  renderPokemonDetail();
  renderRecipes();
  renderMeta();
  renderTeamBuilder();
  renderMoveDatalist();
  renderSavedTeams();
  restoreCurrentTeamDraft();
  if ($("dexType")) $("dexType").innerHTML = `<option value="all">All types</option>` + TYPES.map(t => `<option>${t}</option>`).join("");
  const params = new URLSearchParams(location.search);
  const regionParam = params.get("region");
  mapFocusName = params.get("marker") || "";
  if (regionParam && $("regionSelect") && mapData[regionParam]) $("regionSelect").value = regionParam;
  if (mapFocusName && $("regionSelect")) {
    const region = $("regionSelect").value;
    const focusPoint = mapData[region]?.find(point => normalizeSearch(point[1]) === normalizeSearch(mapFocusName));
    const focusInput = focusPoint ? document.querySelector(`.map-controls input[value="${focusPoint[0]}"]`) : null;
    if (focusInput) focusInput.checked = true;
  }
  renderDex();
  renderRegionButtons();
  renderMap();
  renderCoverage();
  wireSearch();
}

init();
