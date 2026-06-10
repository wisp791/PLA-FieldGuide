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
  "Obsidian Fieldlands": "Obsidian Fieldlands Map.jpg",
  "Crimson Mirelands": "Crimson Mirelands Map.jpg",
  "Cobalt Coastlands": "Cobalt Coastlands Map.jpg",
  "Coronet Highlands": "Coronet Highlands Map.jpg",
  "Alabaster Icelands": "Alabaster Icelands-Map.jpg",
  "Jubilife Village": "Jubilife Village Map.jpg"
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

const screenshotMapMarkers = {
  "Obsidian Fieldlands":[
    ["Subarea","Floaro Gardens","Northwest flowers","Shinx line, Shaymin request area, and western alpha checks.",26,18],
    ["Subarea","Aspiration Hill","Northwest entry hill","Early tutorial route and first field gathering loop.",43,23],
    ["Subarea","Horseshoe Plains","North plains","Bidoof, Starly, Shinx, Ponyta, and early research.",63,22],
    ["Subarea","Grueling Grove","Northeast grove","Bug-type route and alpha Heracross area.",85,14],
    ["Subarea","Deertrack Path","Central high route","Main path between the first camp routes and Deertrack Heights.",55,39],
    ["Subarea","Deertrack Heights","Central eastern cliffs","Heights Camp route and early Geodude/Kricketot checks.",64,48],
    ["Subarea","Windswept Run","Central riverbank","Floatzel and river-crossing route.",51,57],
    ["Subarea","Nature's Pantry","Central woods","Cherubi tree checks and alpha Parasect/Kricketune route.",61,69],
    ["Subarea","Worn Bridge","Eastern river crossing","Floatzel, Bibarel, and bridge route.",79,35],
    ["Subarea","Obsidian Falls","Eastern falls","Alpha Blissey XP route and waterfall checks.",88,52],
    ["Subarea","Oreburrow Tunnel","East tunnel","Cave route toward Obsidian Falls.",92,62],
    ["Subarea","The Heartwood","Southeast forest","Bug and Grass routes near the Grandtree approach.",83,82],
    ["Subarea","Tidewater Dam","South central dam","Water route and Bibarel checks.",68,79],
    ["Subarea","Sandgem Flats","Southwest flats","Snorlax, Alakazam, and ore route.",23,75],
    ["Subarea","Ramanas Island","South island","Post-game alpha loop and Landorus route.",39,82],
    ["Subarea","Lake Verity","Western lake","Mesprit route and water checks.",19,43],
    ["Camp","Fieldlands Camp","Aspiration Hill entrance","Main Obsidian Fieldlands entry camp.",42,11],
    ["Camp","Heights Camp","Deertrack Heights","Second Obsidian camp.",65,50],
    ["Gate","Fieldlands fast travel","Aspiration Hill entrance","Fast travel point near the starting camp.",41,10],
    ["Gate","Heights fast travel","Deertrack Heights","Fast travel point beside Heights Camp.",64,50],
    ["Gate","Grandtree Arena fast travel","Southeast Heartwood route","Fast travel anchor near the first Noble arena.",86,86],
    ["Gate","Lake Verity fast travel","Western lake","Fast travel anchor near Lake Verity.",20,43],
    ["Gate","Ramanas Island fast travel","Southern island","Post-game fast travel anchor.",37,79],
    ["Transition","Fieldlands entry transition","Aspiration Hill entrance","Transition marker from Jubilife.",40,9],
    ["Transition","Lake Verity transition","Western lake island","Lake cavern transition.",20,43],
    ["Transition","Oreburrow transition","Oreburrow Tunnel","Tunnel transition marker.",91,62],
    ["Transition","Grandtree transition","Grandtree Arena route","Arena transition marker.",87,86],
    ["Cave","Oreburrow Tunnel","Eastern tunnel","Tunnel route through the eastern cliffs.",92,62],
    ["Alpha","Alpha Luxio","Floaro Gardens","Electric alpha in Shinx territory.",26,17],
    ["Alpha","Alpha Rapidash","Horseshoe Plains","Early high-level Fire alpha.",72,26],
    ["Alpha","Alpha Heracross","Grueling Grove","Bug/Fighting alpha in the northeast grove.",86,14],
    ["Alpha","Alpha Floatzel","Worn Bridge","Fast Water alpha by the bridge.",79,35],
    ["Alpha","Alpha Snorlax","Sandgem Flats","Bulky Normal alpha on the western flats.",70,44],
    ["Alpha","Alpha Kricketune","Windswept Run","Bug alpha near central river route.",52,58],
    ["Alpha","Alpha Parasect","Nature's Pantry","Bug/Grass alpha in the woods.",62,72],
    ["Alpha","Alpha Bibarel","Tidewater Dam","Water/Normal alpha near the dam.",70,79],
    ["Alpha","Alpha Gyarados","Lake Verity","Water alpha at the western lake.",20,43],
    ["Alpha","Alpha Lopunny","The Heartwood approach","Normal alpha on the eastern forest route.",91,61],
    ["Alpha","Alpha Infernape","Ramanas Island","Post-game Fire/Fighting alpha.",38,80],
    ["Alpha","Alpha Blissey","Obsidian Falls","High-HP XP farm target.",88,55],
    ["Alpha","Alpha Torterra","Southeast Heartwood","Post-game Grass/Ground alpha.",89,86],
    ["Alpha","Alpha Scyther","Grandtree route","Bug/Flying alpha near the arena route.",88,91],
    ["Story","Kleavor arena","Grandtree Arena","First Noble fight location.",88,86],
    ["Legendary","Mesprit","Lake Verity","Post-game lake guardian.",19,43],
    ["Legendary","Landorus","Ramanas Island","Appears after Request 94 starts.",40,82],
    ["Legendary","Shaymin","Floaro Gardens","Request 92 with Sword/Shield save data.",26,18],
    ["Farm","Alpha Blissey XP route","Obsidian Falls","Farm with a Fighting attacker and refresh by leaving the region.",88,55],
    ["Farm","Early research loop","Horseshoe Plains","Bidoof, Starly, Shinx, Wurmple, Ponyta, and materials.",58,25],
    ["Farm","Ramanas post-game loop","Ramanas Island","High-level alpha loop after post-game access.",39,82],
    ["Wisp","Floaro wisp","Floaro Gardens","Spiritomb wisp collectible.",34,18],
    ["Wisp","Lake Verity wisp","Lake Verity rim","Spiritomb wisp collectible.",25,36],
    ["Wisp","Windswept Run wisp","Central island","Spiritomb wisp collectible.",48,66],
    ["Wisp","Deertrack Heights wisp","Central cliff route","Spiritomb wisp collectible.",57,49],
    ["Wisp","Nature's Pantry wisp","Nature's Pantry","Spiritomb wisp collectible.",63,69],
    ["Wisp","Worn Bridge wisp","East river","Spiritomb wisp collectible.",77,30],
    ["Wisp","Obsidian Falls wisp","Eastern falls","Spiritomb wisp collectible.",88,44],
    ["Wisp","Oreburrow wisp","East tunnel route","Spiritomb wisp collectible.",93,58],
    ["Wisp","Heartwood wisp","Southeast forest","Spiritomb wisp collectible.",76,80],
    ["Wisp","Ramanas wisp","Ramanas Island","Spiritomb wisp collectible.",39,78],
    ["Wisp","South shore wisp","South coast","Spiritomb wisp collectible.",54,95],
    ["Wisp","Southeast shore wisp","Southeast coast","Spiritomb wisp collectible.",66,94]
  ],
  "Jubilife Village":[
    ["Subarea","Galaxy Hall","Village north center","Research reports, rank ups, and request board.",53,24],
    ["Subarea","Training Grounds","Northwest village","Move tutoring and Ingo battles.",43,15],
    ["Subarea","Craftworks","Northwest services","Recipe unlocks and crafting supply route.",37,18],
    ["Subarea","Trading Post","North services","Merit Points and evolution items.",46,19],
    ["Subarea","General Store","North market","Purchased basics and item sales.",60,22],
    ["Subarea","Pastures","West field","Storage and bulk release for Grit.",33,35],
    ["Subarea","Farm","South field","Farm upgrades and harvests.",33,76],
    ["Camp","Front Gate","South gate","Expedition departure point.",54,47],
    ["Gate","Training Grounds fast travel","Northwest village","Fast travel point near the training area.",43,15],
    ["Gate","Farm fast travel","South fields","Fast travel point near the farm.",61,75],
    ["Transition","Front Gate transition","South gate","Region select transition.",54,47],
    ["Wisp","Northwest village wisp","Northwest services","Spiritomb wisp collectible.",31,6],
    ["Wisp","Central village wisp","Central bridge route","Spiritomb wisp collectible.",49,32],
    ["Wisp","West village wisp","West fields","Spiritomb wisp collectible.",25,34],
    ["Wisp","South gate wisp","South path","Spiritomb wisp collectible.",35,82],
    ["Request","Galaxy request board","Galaxy Hall","Main request board location.",53,24],
    ["Farm","Ingo battle farm","Training Grounds","Repeat battles and move mastery.",43,15]
  ],
  "Crimson Mirelands":[
    ["Subarea","Cloudpool Ridge","Northwest ridge","Onix and Roserade alpha route.",32,20],
    ["Subarea","Shrouded Ruins","North ruins","Spiritomb and request routing.",58,13],
    ["Subarea","Diamond Heath","North center","Route toward Diamond Settlement.",55,26],
    ["Subarea","Diamond Settlement","North east-center","Diamond Clan hub.",64,30],
    ["Subarea","Solaceon Ruins","Center-west ruins","Unown and story route.",49,42],
    ["Subarea","Golden Lowlands","West lowlands","Starting field and early Mirelands research.",26,54],
    ["Subarea","Gapejaw Bog","Southwest bog","Tangela, Carnivine, Croagunk, and request routes.",36,69],
    ["Subarea","Scarlet Bog","Center marsh","Skuntank, digging route, and Enamorus zone.",56,58],
    ["Subarea","Sludge Mound","South center","Hippowdon and mud route.",59,81],
    ["Subarea","Bolderoll Slope","East-center slope","Rhyhorn and rocky route.",71,49],
    ["Subarea","Lake Valor","Northeast lake","Azelf and lake route.",82,23],
    ["Subarea","Cottonsedge Prairie","East prairie","Togepi and Togekiss route.",87,64],
    ["Subarea","Droning Meadow","Southeast meadow","Yanma and Yanmega route.",88,76],
    ["Subarea","Ursa's Ring","Southeast ring","Teddiursa, Ursaring, and Peat Block planning.",76,86],
    ["Subarea","Holm of Trials","South island","Torterra, Sliggoo, and Toxicroak route.",43,90],
    ["Camp","Mirelands Camp","Western entry","Main Crimson Mirelands entry camp.",22,38],
    ["Camp","Bogbound Camp","Solaceon Ruins approach","Central camp near the bog route.",40,45],
    ["Gate","Mirelands fast travel","Western entry","Fast travel point near the starting camp.",21,38],
    ["Gate","Bogbound fast travel","Center-west ruins","Fast travel point near Bogbound Camp.",40,45],
    ["Gate","Diamond Settlement fast travel","Diamond Settlement","Fast travel point near the settlement.",64,30],
    ["Gate","Lake Valor fast travel","Lake Valor","Fast travel anchor near the lake.",82,26],
    ["Transition","Lake Valor transition","Lake Valor cavern","Lake cavern transition.",82,26],
    ["Cave","Solaceon Ruins","Center-west ruins","Ruin interior transition.",49,42],
    ["Alpha","Alpha Onix","Cloudpool Ridge","Large Rock/Ground alpha.",32,20],
    ["Alpha","Alpha Roserade","Cloudpool Ridge","Grass/Poison alpha on the ridge.",36,19],
    ["Alpha","Alpha Vespiquen","North woods","Bug/Flying alpha north of Diamond Heath.",58,11],
    ["Alpha","Alpha Lickilicky","Shrouded Ruins","Bulky Normal alpha near the ruins.",58,23],
    ["Alpha","Alpha Whiscash","Lake Valor waters","Water/Ground alpha at Lake Valor.",82,31],
    ["Alpha","Alpha Raichu","Golden Lowlands","Electric alpha in western lowlands.",37,54],
    ["Alpha","Alpha Pachirisu","Golden Lowlands","Electric alpha tied to request routing.",18,68],
    ["Alpha","Alpha Carnivine","Gapejaw Bog","Grass alpha in the southwest bog.",24,78],
    ["Alpha","Alpha Tangrowth","Gapejaw Bog","Large Grass alpha near wetland routes.",40,84],
    ["Alpha","Alpha Hippowdon","Sludge Mound","Ground alpha near the mound.",59,78],
    ["Alpha","Alpha Skuntank","Scarlet Bog","Poison/Dark alpha in the central marsh.",61,60],
    ["Alpha","Alpha Ursaring","Ursa's Ring","Useful alpha for Ursaluna planning.",76,86],
    ["Alpha","Alpha Yanmega","Droning Meadow","Bug/Flying alpha in the southeast meadow.",88,75],
    ["Alpha","Alpha Togekiss","Cottonsedge Prairie","Airborne Fairy/Flying alpha.",87,63],
    ["Alpha","Alpha Torterra","Holm of Trials","Grass/Ground alpha on the south island.",46,87],
    ["Alpha","Alpha Toxicroak","Holm of Trials","Poison/Fighting alpha on the south island.",41,95],
    ["Story","Brava Arena","Northeast highlands","Hisuian Lilligant Noble arena.",75,33],
    ["Legendary","Azelf","Lake Valor","Post-game lake guardian.",82,26],
    ["Legendary","Enamorus","Scarlet Bog","Appears after the other Forces of Nature are caught.",56,58],
    ["Farm","Ursaluna digging route","Scarlet Bog to Ursa's Ring","Peat Blocks, shards, stones, and sellables.",62,69],
    ["Wisp","Cloudpool wisp","Northwest ridge","Spiritomb wisp collectible.",31,7],
    ["Wisp","Golden Lowlands west wisp","Western lowlands","Spiritomb wisp collectible.",18,55],
    ["Wisp","Golden Lowlands east wisp","Western lowlands","Spiritomb wisp collectible.",34,55],
    ["Wisp","Solaceon wisp","Solaceon Ruins","Spiritomb wisp collectible.",48,42],
    ["Wisp","Diamond Settlement wisp","Diamond route","Spiritomb wisp collectible.",63,31],
    ["Wisp","Bolderoll wisp","Bolderoll Slope","Spiritomb wisp collectible.",74,49],
    ["Wisp","Lake Valor south wisp","Lake Valor","Spiritomb wisp collectible.",82,36],
    ["Wisp","Cottonsedge wisp","Cottonsedge Prairie","Spiritomb wisp collectible.",89,62],
    ["Wisp","Droning Meadow wisp","Southeast meadow","Spiritomb wisp collectible.",94,92],
    ["Wisp","Holm west wisp","Holm of Trials","Spiritomb wisp collectible.",27,92],
    ["Wisp","Holm east wisp","Holm of Trials","Spiritomb wisp collectible.",65,91],
    ["Wisp","Gapejaw wisp","Gapejaw Bog","Spiritomb wisp collectible.",31,74]
  ],
  "Cobalt Coastlands":[
    ["Subarea","Spring Path","Northwest ridge","Highland route and alpha checks.",18,24],
    ["Subarea","Islespy Shore","North shore","Empoleon and northern shoreline.",35,16],
    ["Subarea","Windbreak Stand","West ridge","Hisuian Growlithe checks.",25,39],
    ["Subarea","Veilstone Cape","North center ridge","Machamp, Vulpix, and Growlithe routes.",56,38],
    ["Subarea","Castaway Shore","Center shore","Machoke and Octillery routes.",45,44],
    ["Subarea","Tranquility Cove","Central bay","Mantyke, Qwilfish, and sea routing.",58,63],
    ["Subarea","Seagrass Haven","North sea","Lumineon and pearl route.",70,24],
    ["Subarea","Lunker's Lair","East sea","Tentacruel and water alpha route.",92,41],
    ["Subarea","Sand's Reach","Southeast sandbar","Gyarados and Thundurus weather route.",81,76],
    ["Subarea","Deadwood Haunt","South route","Duskull, Dusclops, and Dusknoir at night.",73,84],
    ["Subarea","Tombolo Walk","Southeast beach","Chansey and Manaphy route.",91,89],
    ["Subarea","Ginkgo Landing","West beach","Entry beach and Ginter check route.",28,62],
    ["Subarea","Crossing Slope","West slope","Purugly and early Coastlands route.",20,70],
    ["Subarea","Aipom Hill","Southwest hill","Aipom and Ambipom routing.",32,82],
    ["Subarea","Bathers' Lagoon","Southwest lagoon","Golduck and southern water route.",44,88],
    ["Subarea","Firespit Island","Northeast volcano","Heatran, Magmar line, and Noble route.",87,14],
    ["Camp","Beachside Camp","Ginkgo Landing","Main Coastlands entry camp.",11,63],
    ["Camp","Coastlands Camp","Sand's Reach","Second Coastlands camp for sea routes.",75,76],
    ["Gate","Beachside fast travel","Ginkgo Landing","Fast travel point near Beachside Camp.",11,63],
    ["Gate","Coastlands fast travel","Sand's Reach","Fast travel point near Coastlands Camp.",75,76],
    ["Gate","Firespit fast travel","Firespit Island","Fast travel point on Firespit Island after story progress.",86,14],
    ["Gate","Seagrass fast travel","Seagrass Haven","Fast travel anchor near the northern sea route.",68,32],
    ["Gate","Seaside Hollow fast travel","East sea cave","Fast travel anchor for Manaphy route.",93,63],
    ["Transition","Firespit transition","Firespit Island","Volcano transition marker.",86,14],
    ["Cave","Seaside Hollow","East sea cave","Manaphy and Phione request cave.",93,63],
    ["Alpha","Alpha Purugly","Crossing Slope","Normal alpha near the entry route.",20,71],
    ["Alpha","Alpha Walrein","Ginkgo Landing coast","Ice/Water alpha on the western beach.",29,61],
    ["Alpha","Alpha Ambipom","Aipom Hill","Fast Normal alpha near the hill route.",32,80],
    ["Alpha","Alpha Mothim","Spring Path","Bug/Flying alpha near Spring Path.",18,25],
    ["Alpha","Alpha Machoke","Castaway Shore","Fighting alpha near the center shore.",45,44],
    ["Alpha","Alpha Octillery","Castaway Shore","Water alpha near the center shore.",49,41],
    ["Alpha","Alpha Empoleon","Islespy Shore","Water/Steel alpha at northern shore.",35,17],
    ["Alpha","Alpha Qwilfish","Tranquility Cove","Dark/Poison alpha in sea routes.",52,39],
    ["Alpha","Alpha Tentacruel","Lunker's Lair","Water/Poison alpha in the eastern sea.",92,41],
    ["Alpha","Alpha Dusknoir","Deadwood Haunt","Night Ghost alpha.",72,84],
    ["Alpha","Alpha Chansey","Tombolo Walk","Rare bulky Normal alpha.",90,89],
    ["Alpha","Alpha Ninetales","Firespit Island","Fire alpha on the volcano island.",88,13],
    ["Alpha","Alpha Gyarados","Sand's Reach waters","High-level sea alpha.",81,76],
    ["Alpha","Alpha Lumineon","Seagrass Haven","Water alpha in northern sea route.",70,24],
    ["Story","Molten Arena","Firespit Island","Hisuian Arcanine Noble arena.",86,15],
    ["Legendary","Heatran","Firespit Island","Post-game plate mission.",86,14],
    ["Legendary","Thundurus","Sand's Reach waters","Storm weather after Incarnate Forces begins.",78,76],
    ["Legendary","Manaphy and Phione","Seaside Hollow","Request 66 after the evening sea-spire trigger.",93,63],
    ["Farm","Pearl route","Seagrass Haven to Lunker's Lair","Pearls, Water types, and sea catches.",71,33],
    ["Farm","Growlithe checks","Windbreak Stand / Veilstone Cape","Hisuian Growlithe route and Fire Stone planning.",27,38],
    ["Wisp","Spring Path wisp","Northwest ridge","Spiritomb wisp collectible.",14,25],
    ["Wisp","Islespy wisp","North shore","Spiritomb wisp collectible.",34,7],
    ["Wisp","Veilstone west wisp","Center ridge","Spiritomb wisp collectible.",53,26],
    ["Wisp","Veilstone east wisp","Center ridge","Spiritomb wisp collectible.",56,29],
    ["Wisp","Castaway wisp","Center shore","Spiritomb wisp collectible.",58,50],
    ["Wisp","Ginkgo wisp","Ginkgo Landing","Spiritomb wisp collectible.",19,62],
    ["Wisp","Crossing Slope wisp","Entry slope","Spiritomb wisp collectible.",22,70],
    ["Wisp","Aipom Hill wisp","Southwest hill","Spiritomb wisp collectible.",39,76],
    ["Wisp","Bathers' Lagoon wisp","Southwest lagoon","Spiritomb wisp collectible.",50,80],
    ["Wisp","Deadwood wisp","South route","Spiritomb wisp collectible.",73,71],
    ["Wisp","Tombolo wisp","Southeast beach","Spiritomb wisp collectible.",88,90],
    ["Wisp","Firespit wisp","Firespit Island","Spiritomb wisp collectible.",88,14]
  ],
  "Coronet Highlands":[
    ["Subarea","Temple of Sinnoh","Northwest summit","Late-story and Arceus route.",25,8],
    ["Subarea","Cloudcap Pass","Northwest pass","High-elevation route toward the summit.",34,22],
    ["Subarea","Sacred Plaza","West-center plaza","High-level alpha and story route.",27,50],
    ["Subarea","Stonetooth Rows","West rows","Electric and Ghost checks.",12,57],
    ["Subarea","Bolderoll Ravine","Southwest ravine","Golem, ore, and rocky route.",17,68],
    ["Subarea","Fabled Spring","Southwest spring","Cleffa, Clefairy, and Clefable night route.",20,88],
    ["Subarea","Celestica Ruins","North east-center ruins","Hisuian Voltorb and upper route.",57,40],
    ["Subarea","Primeval Grotto","Center grotto","Probopass and ore-heavy routes.",45,50],
    ["Subarea","Celestica Trail","Center trail","Steelix and cliff routing.",47,64],
    ["Subarea","Sonorous Path","Southeast path","Mountain Camp approach.",62,73],
    ["Subarea","Ancient Quarry","South center quarry","Bronzong, Goodra, and ore route.",52,85],
    ["Subarea","Wayward Wood","South woods","Mothim and lower route checks.",55,94],
    ["Subarea","Heavenward Lookout","Southeast lookout","Early Highlands route.",88,90],
    ["Subarea","Clamberclaw Cliffs","East cliffs","Gible line, Gligar, and Darkrai request route.",83,57],
    ["Subarea","Lonely Spring","Far east spring","Carnivine and water route.",90,61],
    ["Camp","Highlands Camp","Heavenward Lookout","Main Highlands entry camp.",90,92],
    ["Camp","Mountain Camp","Sonorous Path","Central/southeast mountain camp.",78,82],
    ["Camp","Summit Camp","Cloudcap Pass","Upper mountain camp near summit routes.",36,25],
    ["Gate","Highlands fast travel","Heavenward Lookout","Fast travel point near Highlands Camp.",90,92],
    ["Gate","Mountain fast travel","Sonorous Path","Fast travel point near Mountain Camp.",78,82],
    ["Gate","Summit fast travel","Cloudcap Pass","Fast travel point near the upper route.",36,25],
    ["Gate","Temple fast travel","Temple of Sinnoh","Fast travel point near the summit.",26,13],
    ["Gate","Moonview fast travel","North summit route","Fast travel anchor for Electrode route.",37,8],
    ["Transition","Temple transition","Temple of Sinnoh","Summit transition marker.",25,8],
    ["Cave","Wayward Cave","Southeast river cave","Cave route and Gible line routing.",78,82],
    ["Cave","Ancient Quarry","South center quarry","Quarry interior transition.",52,85],
    ["Alpha","Alpha Electivire","Cloudcap Pass","Electric alpha near the upper route.",36,34],
    ["Alpha","Alpha Luxray","Sacred Plaza","Electric alpha near plaza routes.",28,53],
    ["Alpha","Alpha Mothim","Wayward Wood approach","Bug/Flying alpha on lower route.",16,66],
    ["Alpha","Alpha Bronzong","Ancient Quarry","Steel/Psychic alpha inside quarry route.",52,85],
    ["Alpha","Alpha Goodra","Ancient Quarry lake route","Steel/Dragon alpha and strong defensive catch.",60,85],
    ["Alpha","Alpha Rhyperior","Sacred Plaza ridge","Bulky Ground/Rock alpha.",42,58],
    ["Alpha","Alpha Probopass","Primeval Grotto","Rock/Steel alpha near ore-heavy route.",50,57],
    ["Alpha","Alpha Mismagius","Celestica Ruins","Ghost alpha, often checked at night.",65,46],
    ["Alpha","Alpha Gligar","Clamberclaw Cliffs","Ground/Flying alpha on cliff routes.",83,51],
    ["Alpha","Alpha Gliscor","Clamberclaw Cliffs high route","Ground/Flying alpha near cliff climbs.",90,49],
    ["Alpha","Alpha Gabite","Wayward Cave route","Dragon/Ground alpha and Gible line route.",78,83],
    ["Alpha","Alpha Golem","Bolderoll Ravine","Rock/Ground alpha near ore routes.",17,66],
    ["Alpha","Alpha Steelix","Celestica Trail","Large Steel/Ground alpha near mountain paths.",43,59],
    ["Alpha","Alpha Clefable","Fabled Spring","Night Fairy alpha.",21,90],
    ["Story","Moonview Arena","North summit route","Hisuian Electrode Noble arena and Cresselia route.",37,8],
    ["Legendary","Cresselia","Moonview Arena","Post-game plate mission.",37,8],
    ["Legendary","Darkrai","Clamberclaw Cliffs","Request 93 with BDSP save data.",84,58],
    ["Farm","Gible and ore route","Wayward Cave / Ancient Quarry","Gible line, Tumblestones, and Iron Chunks.",76,82],
    ["Farm","Cleffa night checks","Fabled Spring","Cleffa, Clefairy, Moon Stone, and Shiny Stone routing.",20,88],
    ["Wisp","Cloudcap west wisp","Northwest cliffs","Spiritomb wisp collectible.",17,39],
    ["Wisp","Cloudcap center wisp","Cloudcap Pass","Spiritomb wisp collectible.",34,40],
    ["Wisp","Sacred Plaza wisp","Sacred Plaza","Spiritomb wisp collectible.",26,53],
    ["Wisp","Bolderoll wisp","Bolderoll Ravine","Spiritomb wisp collectible.",14,70],
    ["Wisp","Fabled Spring wisp","Fabled Spring","Spiritomb wisp collectible.",22,86],
    ["Wisp","Celestica Trail wisp","Celestica Trail","Spiritomb wisp collectible.",48,55],
    ["Wisp","Primeval Grotto wisp","Primeval Grotto","Spiritomb wisp collectible.",49,50],
    ["Wisp","Clamberclaw west wisp","East cliffs","Spiritomb wisp collectible.",79,45],
    ["Wisp","Lonely Spring wisp","Far east spring","Spiritomb wisp collectible.",91,61],
    ["Wisp","Ancient Quarry wisp","South quarry","Spiritomb wisp collectible.",60,84],
    ["Wisp","Heavenward wisp","Southeast lookout","Spiritomb wisp collectible.",87,82]
  ],
  "Alabaster Icelands":[
    ["Subarea","Lake Acuity","North lake","Uxie and lake route.",48,18],
    ["Subarea","Glacier Terrace","Northwest terrace","Lake Acuity approach.",21,27],
    ["Subarea","Snowfall Hot Spring","West spring","Gallade/Gardevoir route and healing landmark.",14,39],
    ["Subarea","Avalugg's Legacy","Center ice formation","Ice landmark and central route.",49,49],
    ["Subarea","Pearl Settlement","East-center settlement","Pearl Clan hub.",68,33],
    ["Subarea","Heart's Crag","East crag","Gardevoir, Froslass, and Snorunt route.",82,40],
    ["Subarea","Bonechill Wastes","South center wastes","Mamoswine, Zorua tunnels, and Tornadus zone.",52,73],
    ["Subarea","Whiteout Valley","South route","Starting snow route and Snowfields Camp area.",55,88],
    ["Subarea","Arena's Approach","Southwest route","Machamp and late story arena route.",21,68],
    ["Subarea","Avalanche Slopes","Southwest slopes","Abomasnow, Glaceon, Garchomp, and Piloswine route.",15,81],
    ["Subarea","Icebound Falls","Southwest falls","Lucario and Electabuzz route.",30,94],
    ["Subarea","Icepeak Arena","Northeast arena","Hisuian Avalugg Noble arena.",65,3],
    ["Subarea","Snowpoint Temple","North temple","Regigigas and temple route.",66,3],
    ["Camp","Snowfields Camp","Whiteout Valley","Main Icelands entry camp.",63,93],
    ["Camp","Icepeak Camp","Central north route","Second Icelands camp for lake, temple, and arena routes.",39,34],
    ["Gate","Snowfields fast travel","Whiteout Valley","Fast travel point near Snowfields Camp.",63,93],
    ["Gate","Icepeak fast travel","Central north route","Fast travel point near Icepeak Camp.",39,34],
    ["Gate","Lake Acuity fast travel","North lake","Fast travel anchor near the lake.",48,18],
    ["Gate","Snowpoint Temple fast travel","North temple","Fast travel anchor near the temple.",66,3],
    ["Gate","Icepeak Arena fast travel","Northeast arena","Fast travel anchor near Avalugg's arena.",65,3],
    ["Transition","Lake Acuity transition","Lake Acuity cavern","Lake cavern transition.",48,18],
    ["Transition","Icepeak Arena transition","Northeast arena","Arena transition marker.",65,3],
    ["Cave","Hibernal Cave","Glacier Terrace","Cave route near the lake.",41,34],
    ["Cave","Bonechill cave","Bonechill Wastes","Hisuian Zorua and Zoroark tunnel route.",52,73],
    ["Alpha","Alpha Abomasnow","Avalugg's Legacy route","Grass/Ice alpha near central ice route.",49,51],
    ["Alpha","Alpha Glalie","Bonechill Wastes","Ice alpha near Snorunt area.",36,58],
    ["Alpha","Alpha Froslass","Heart's Crag","Ice/Ghost alpha in eastern route.",82,40],
    ["Alpha","Alpha Glaceon","Avalanche Slopes","Ice alpha and Eevee evolution reference.",18,80],
    ["Alpha","Alpha Garchomp","Avalanche Slopes","One of the highest fixed alpha levels.",25,88],
    ["Alpha","Alpha Gallade","Snowpoint Temple route","Psychic/Fighting alpha near the temple route.",65,3],
    ["Alpha","Alpha Gardevoir","Heart's Crag","Psychic/Fairy alpha on late route.",80,38],
    ["Alpha","Alpha Mamoswine","Bonechill Wastes","Ice/Ground physical alpha.",51,73],
    ["Alpha","Alpha Lucario","Icebound Falls","Strong Fighting/Steel alpha.",29,94],
    ["Alpha","Alpha Machamp","Arena's Approach","Fighting alpha near arena route.",22,68],
    ["Alpha","Alpha Hisuian Zoroark","Bonechill Wastes tunnels","Normal/Ghost alpha and high-value team option.",53,82],
    ["Alpha","Alpha Electabuzz","Icebound Falls route","Electric alpha near frozen paths.",30,93],
    ["Alpha","Alpha Piloswine","Avalanche Slopes lower route","Ice/Ground alpha near Swinub groups.",15,97],
    ["Story","Icepeak Arena","Northeast arena","Hisuian Avalugg Noble arena.",65,3],
    ["Legendary","Uxie","Lake Acuity","Post-game lake guardian; eye answer is 60131.",48,18],
    ["Legendary","Regigigas","Snowpoint Temple","Requires Icicle, Stone, and Iron Plates.",66,3],
    ["Legendary","Giratina","Turnback Cave path","After the late-story boss sequence.",52,82],
    ["Legendary","Tornadus","Bonechill Wastes","Appears during blizzard weather after Request 94 starts.",52,73],
    ["Farm","Zorua tunnels","Bonechill Wastes","Hisuian Zorua/Zoroark and late-game Ice types.",52,82],
    ["Farm","Avalanche alpha loop","Avalanche Slopes","Glaceon, Garchomp, Piloswine, and Ice-type research.",18,80],
    ["Wisp","Glacier Terrace wisp","Northwest terrace","Spiritomb wisp collectible.",30,23],
    ["Wisp","Acuity west wisp","Lake Acuity approach","Spiritomb wisp collectible.",39,24],
    ["Wisp","Acuity east wisp","Lake Acuity route","Spiritomb wisp collectible.",49,23],
    ["Wisp","Snowpoint wisp","North temple route","Spiritomb wisp collectible.",66,4],
    ["Wisp","Pearl Settlement wisp","East settlement","Spiritomb wisp collectible.",65,38],
    ["Wisp","Heart's Crag wisp","East crag","Spiritomb wisp collectible.",86,52],
    ["Wisp","Avalugg west wisp","Central snowfield","Spiritomb wisp collectible.",35,47],
    ["Wisp","Avalugg east wisp","Central snowfield","Spiritomb wisp collectible.",53,58],
    ["Wisp","Bonechill wisp","Bonechill Wastes","Spiritomb wisp collectible.",46,73],
    ["Wisp","Whiteout wisp","Whiteout Valley","Spiritomb wisp collectible.",55,84],
    ["Wisp","Avalanche wisp","Avalanche Slopes","Spiritomb wisp collectible.",18,75],
    ["Wisp","Icebound Falls wisp","Icebound Falls","Spiritomb wisp collectible.",8,91]
  ]
};

const originalNamedMapMarkerIndex = Object.fromEntries(Object.entries(mapData).map(([region, points]) => [region, points]));

Object.entries(screenshotMapMarkers).forEach(([region, points]) => {
  mapData[region] = points;
});

const namedMapMarkerIndex = Object.fromEntries(Object.entries(mapData).map(([region, points]) => {
  const combined = [...(originalNamedMapMarkerIndex[region] || []), ...points];
  return [region, combined.filter(point => typeof point[1] === "string" && typeof point[4] === "number" && typeof point[5] === "number")];
}));

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
    "Transition": [
      [
        "Exit",
        31.6,
        24.2,
        "Transition marker."
      ]
    ],
    "Cave": [
      [
        "Verity Cavern",
        13.8,
        52.4,
        "Cave marker."
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
    "Wisp": [
      [
        "Aspiration Hill Wisp",
        27.4,
        31.8,
        "Location: On top of a small hill, next to a tree."
      ],
      [
        "Deertrack Path Wisp",
        53.7,
        44.2,
        "Location: On a small cliff."
      ],
      [
        "Grueling Grove Wisp",
        87.5,
        34.5,
        "Location: On a ledge, near the top of the mountain."
      ],
      [
        "Horseshoe Plains Wisp",
        66.8,
        23.4,
        "Location: On top of a small mountain."
      ],
      [
        "Lake Verity Wisp",
        18.0,
        45.6,
        "Location: On a small ledge, looking over Lake Verity."
      ],
      [
        "Nature's Pantry Wisp",
        58.0,
        62.1,
        "Location: At the very top of the mountain."
      ],
      [
        "Nature's Pantry Wisp 2",
        55.0,
        73.8,
        "Location: On top of the small hill."
      ],
      [
        "Obsidian Falls Wisp",
        78.3,
        59.9,
        "Location: On top of the cliff."
      ],
      [
        "Obsidian Falls Wisp 2",
        87.2,
        49.9,
        "Location: On a small island on the river."
      ],
      [
        "Oreburrow Tunnel Wisp",
        93.5,
        64.6,
        "Location: Above Oreburrow Tunnel."
      ],
      [
        "Ramanas Island Wisp",
        30.9,
        87.6,
        "Location: Atop the cliff, overlooking the island."
      ],
      [
        "Ramanas Island Wisp 2",
        39.9,
        93.9,
        "Location: At the very end of the peninsula."
      ],
      [
        "Sandgem Flat Wisp",
        13.1,
        75.5,
        "Location: At the top of a slanted rock."
      ],
      [
        "The Heartwood Wisp",
        66.6,
        85.1,
        "Location: On top of the hill, looking over the dam."
      ],
      [
        "The Heartwood Wisp 2",
        77.3,
        76.1,
        "Location: At the end of the cliff, near the river."
      ],
      [
        "Tidewater Dam Wisp",
        55.4,
        93.6,
        "Location: On a ledge up the mountain."
      ],
      [
        "Windswept Run Wisp",
        31.9,
        51.9,
        "Location: On a ledge jutting from the mountain range."
      ],
      [
        "Windswept Run Wisp 2",
        40.0,
        70.4,
        "Spiritomb wisp collectible."
      ],
      [
        "Windswept Run Wisp 3",
        47.3,
        57.1,
        "Location: On a high ledge up the moutain."
      ],
      [
        "Worn Bridge Wisp",
        72.2,
        41.5,
        "Location: On ground level, near the worn bridge."
      ]
    ],
    "Unown": [
      [
        "Grueling Grove Unown",
        93.3,
        26.9,
        "Hint: A lone tree in a pond in the grove. Location: Near the bottom of the tree."
      ],
      [
        "Lake Verity Unown",
        13.7,
        51.3,
        "Hint: A lake island where emotion resides. Location: Directly behind Verity Cavern."
      ],
      [
        "Obsidian Falls Unown",
        91.5,
        55.6,
        "Hint: Atop a waterfall of obsidian. Location: On the boulder where the waterfall starts."
      ],
      [
        "The Heartwood Unown",
        88.4,
        87.3,
        "Hint: Scale the Grandtree. Location: On the lowest branch of the tree."
      ],
      [
        "Tidewater Dam Unown",
        61.8,
        78.3,
        "Hint: Where stick and log dam the river. Location: On the western side of the dam."
      ]
    ],
    "Request": [
      [
        "#11: The Timbre of the Fields",
        34.3,
        28.0,
        "*Music lover Yeo is captivated by the sound she hears coming from the Kricketot in the Obsidian Fieldlands. Fill in Kricketot's Pokédex page and show it to her!* How to unlock: Start #5: A Request from Mai. How to start: Speak with Yeo Objectives: - Show Yeo the completed Pokédex entry for Kricketot. Rewards: 1x Vivichoke"
      ],
      [
        "#13: Trees That Bear Berries",
        52.5,
        44.6,
        "*Bjorn of the Agriculture Corps wants you to get a Cheri Berry for him. He says he'll give you a helpful tip if you're able to grant his wish...* How to unlock: Start Story Mission #5. How to start: Speak with Bjorn. Objectives: - Gather the number of Berries Bjorn wanted (3 Cheri Berries), then give them to him. Rewards: 15x Poké Ball"
      ],
      [
        "#15: Balloon Race in the Fieldsland",
        57.4,
        57.0,
        "*The man running the balloon race in the Obsidian Fieldlands has issued you a challenge. You’ll get a special reward if you manage to burst 17 balloons.* How to unlock: Complete Story Mission #7. How to start: Speak with the Balloon Race NPC. Objectives: - Burst 17 balloons within the time limit for the balloon race in the Obsidian Fieldslands. Rewards: - 1x Rare Candy - 15x Feather Ball"
      ],
      [
        "#51: Coming Up Roses",
        24.2,
        82.0,
        "*On Ramanas Island, Hiemo asked you to bring him a Pokémon with a scythe on each arm.* How to unlock: Complete Story Mission #10 How to start: Speak with Hiemo. Objectives: - Find the Pokémon with a scythe on each arm (Scyther) and catch one to show to Hiemo on Ramanas Island. Rewards: 1x Seed of Mastery"
      ],
      [
        "#6: Mushroom Cake Marketing",
        35.9,
        27.6,
        "*A villager named Morel wants everyone to know about the crafting recipe he invented using mushrooms. To that end, he says he'll teach the recipe to you!* How to unlock: Start #5: A Request from Mai. How to start: Speak with Morel Objectives: - Give Morel the item he requested (Springy Mushroom) Rewards: - 1x Mushroom Cake Recipe - 5x Cake-Lure Base"
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
    ],
    "Character": [
      [
        "Medi",
        33.1,
        26.6,
        "Character marker."
      ],
      [
        "Wanda - Fieldslands",
        64.4,
        63.7,
        "Character marker."
      ]
    ],
    "Farm": [
      [
        "Alpha Blissey XP route",
        92.5,
        50.5,
        "High-HP Blissey route at Obsidian Falls."
      ],
      [
        "Horseshoe Plains research loop",
        58.0,
        25.0,
        "Fast early research route."
      ],
      [
        "Ramanas Island alpha loop",
        31.1,
        84.7,
        "Post-game alpha and sellable loop."
      ]
    ],
    "Story": [
      [
        "#5: A Request from Mai",
        61.7,
        51.8,
        "Main story route to Deertrack Heights."
      ],
      [
        "#7: The Frenzy of the Lord of the Woods",
        80.0,
        90.0,
        "Kleavor Noble fight at Grandtree Arena."
      ],
      [
        "#14: The Trial of Lake Verity",
        13.8,
        52.4,
        "Lake Verity trial route."
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
    "Transition": [
      [
        "Exit",
        20.7,
        48.3,
        "Transition marker."
      ]
    ],
    "Cave": [
      [
        "Valor Cavern",
        72.1,
        38.7,
        "Cave marker."
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
    "Wisp": [
      [
        "Bolderoll Slope Wisp",
        55.6,
        51.4,
        "Location: On a cliff overlooking the bog."
      ],
      [
        "Bolderoll Slope Wisp 2",
        66.4,
        54.6,
        "Location: On top of a small rock outcroping, facing the river."
      ],
      [
        "Bolderoll Slope Wisp 3",
        71.3,
        46.5,
        "Location: Between a circle of trees, near Lake Valor."
      ],
      [
        "Cloudpool Ridge Wisp",
        35.8,
        29.8,
        "Location: Behind the trees, near the cliff."
      ],
      [
        "Cloudpool Ridge Wisp 2",
        29.2,
        38.0,
        "Location: On the shore, opposite to the campfire."
      ],
      [
        "Cloudpool Ridge Wisp 3",
        26.9,
        28.2,
        "Location: At the end of a ledge overlooking the river."
      ],
      [
        "Cottonsedge Prairie Wisp",
        82.0,
        65.0,
        "Location: On top of the hill, by a withered tree."
      ],
      [
        "Cottonsedge Prairie Wisp 2",
        67.3,
        66.4,
        "Location: On a small hill overlooking the river."
      ],
      [
        "Cottonsedge Prairie Wisp 3",
        70.0,
        60.9,
        "Location: On top of a small hill."
      ],
      [
        "Diamond Settlement Wisp",
        51.9,
        42.6,
        "Location: On top of a cliff overlooking Diamond Settlement."
      ],
      [
        "Droning Meadow Wisp",
        89.7,
        73.8,
        "Location: On a mountain cliff, near a few trees."
      ],
      [
        "Gapejaw Bog Wisp",
        27.2,
        74.7,
        "Location: On top of a hill."
      ],
      [
        "Golden Lowlands Wisp",
        30.2,
        60.1,
        "Location: On top of the cliff overlooking the river."
      ],
      [
        "Golden Lowlands Wisp 2",
        18.5,
        60.4,
        "Location: Within the valley between the two cliffs."
      ],
      [
        "Holm of Trials Wisp",
        26.2,
        85.7,
        "Location: In the middle of a puddle."
      ],
      [
        "Holm of Trials Wisp 2",
        40.5,
        90.5,
        "Location: On top of a hill, near some trees."
      ],
      [
        "Shrouded Ruins Wisp",
        43.7,
        27.9,
        "Location: On a cliff near Brave Arena."
      ],
      [
        "Sludge Mound Wisp",
        56.6,
        89.4,
        "Location: On a rock in the middle of the lake."
      ],
      [
        "Solaceon Ruins Wisp",
        44.3,
        51.6,
        "Location: On top of a cliff overlooking a ravine."
      ],
      [
        "Ursa's Ring Wisp",
        76.2,
        92.5,
        "Location: On a cliff, near the end of the river."
      ]
    ],
    "Unown": [
      [
        "Cloudpool Ridge Unown",
        25.0,
        38.1,
        "Hint: Among stumps and campire ashes in fields of gold. Location: Sitting on a stump by the campfire."
      ],
      [
        "Diamond Settlement Unown",
        61.4,
        39.2,
        "Hint: Within the settlement where time rules. Location: On top of a tent in Diamond Settlement."
      ],
      [
        "Scarlet Bog Unown",
        46.6,
        61.7,
        "Hint: A withered tree in the sprawling red swamp. Location: On top of a dead tree in the bog."
      ],
      [
        "Shrouded Ruins Unown",
        55.3,
        31.1,
        "Hint: Where stones pile high amid fogbound ruins. Location: On top of the southernmost pillar."
      ],
      [
        "Sludge Mound Unown",
        56.7,
        82.4,
        "Hint: A tree felled on sludge. Location: On a tree in Sludge Mound."
      ]
    ],
    "Request": [
      [
        "#30: A Beautiful Rose...",
        22.6,
        49.7,
        "*Berra, a villager, has been utterly captivated by Roselia’s elegance and wishes to learn more about this Pokémon. Complete Roselia’s Pokédex page, and show it to Berra!* How to unlock: Visit the Crimson Mirelands How to start: Speak with Berra Objectives: - Show Berra the completed Pokédex entry for Roselia. Rewards: - 5x Grain Cake - 2x Exp. Candy S"
      ],
      [
        "#31: Setting Up the Bogbound Camp",
        55.5,
        80.1,
        "*It seems the Construction Corps could use some help setting up the new Bogbound Camp. A villager named Odo is worried about a Sudowoodo that seems to be under the weather. He wants your advice on what to do* How to unlock: Enter the Crimson Mirelands How to start: Speak with Odo Objectives: - Go to help set up the Bogbound Camp. - Chase away the three Stunky. Rewards: Unlocks the Bogbound Camp settlement."
      ],
      [
        "#32: The Headache-Stricken Psyduck",
        55.5,
        43.6,
        "*Description* How to unlock: Enter Diamond Settlement. How to start: Speak with Martia. Objectives: - Gather information in Jubilife Village about medicine that might ease the headaches of suffering Psyduck. (Speak with Tomma) - Deliver the secret medicine to Martia. Rewards: 1x Max Revive"
      ],
      [
        "#40: The Charm Lost in the Swamp",
        59.3,
        73.5,
        "*Yojiro wants you to find his charm that he lost while being chased by an alpha Hippowdon.* How to unlock: Complete Story Mission #8 How to start: Speak with Yojiro Objectives: - Find the charm that Yojiro dropped in the Crimson Mirelands. - Chase away the Hippowdon and retrieve Yojiro’s charm. Rewards: - 5x Iron Chunk - 1x Grit Gravel"
      ],
      [
        "#89: The Diamond's Clan's Treasure",
        65.7,
        34.1,
        "*Adaman of the Diamond Clan has challenged you to a battle. Claim victory against him to find out more about the treasure he mentioned.* How to unlock: Complete Story Mission #19. How to start: Speak with Adaman Objectives: - Speak with Adaman near the Diamond Settlement, and defeat him in battle. - Adaman's team: Leafeon (LV64), Umbreon (LV32), Vaporeon (LV32) Rewards: - 3x Comet Shard - 1x Adamant Crystal"
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
    ],
    "Character": [
      [
        "Arezu",
        45.5,
        53.1,
        "Character marker."
      ],
      [
        "Calaba",
        43.6,
        43.6,
        "Character marker."
      ],
      [
        "Miss Fortune Sisters (M8)",
        25.0,
        38.2,
        "Character marker."
      ],
      [
        "Odo",
        60.9,
        73.9,
        "Character marker."
      ],
      [
        "Ren",
        25.4,
        49.1,
        "Character marker."
      ],
      [
        "Wanda - Mirelands",
        28.5,
        74.4,
        "Character marker."
      ]
    ],
    "Farm": [
      [
        "Scarlet Bog Ursaluna digging route",
        55.0,
        58.0,
        "Peat Blocks, stones, shards, and sellables."
      ]
    ],
    "Story": [
      [
        "#8: Arezu's Predicament",
        35.1,
        22.3,
        "Hisuian Lilligant Noble fight at Brava Arena."
      ],
      [
        "#15: The Trial of Lake Valor",
        72.1,
        38.7,
        "Lake Valor trial route."
      ],
      [
        "#21: The Plate of the Lakes - Azelf",
        72.1,
        38.7,
        "Post-game plate route at Valor Cavern."
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
    "Transition": [
      [
        "Exit",
        3.2,
        67.8,
        "Transition marker."
      ]
    ],
    "Cave": [
      [
        "Veilstone Cape Cave South Exit",
        61.5,
        42.3,
        "Exit to the south"
      ],
      [
        "Veilstone Cape Cave North Exit",
        61.4,
        47.6,
        "Exit to the north"
      ],
      [
        "Lava Dome Sanctum",
        81.1,
        25.5,
        "Cave marker."
      ],
      [
        "Seaside Hollow",
        49.6,
        39.4,
        "Cave marker."
      ],
      [
        "Turnback Cave",
        16.9,
        33.2,
        "Cave marker."
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
    "Wisp": [
      [
        "Bathers' Lagoon Wisp",
        37.2,
        78.8,
        "Location: On a cliff, by the beach."
      ],
      [
        "Bathers' Lagoon Wisp 2",
        50.0,
        82.7,
        "Location: On a small island, in the middle of the lake."
      ],
      [
        "Castaway Shore Wisp",
        44.1,
        38.6,
        "Location: On top of the cliff."
      ],
      [
        "Castaway Shore Wisp 2",
        49.8,
        56.9,
        "Location: At the end of the rocky outcroping."
      ],
      [
        "Crossing Slope Wisp",
        11.1,
        66.4,
        "Location: On top of the cliff just south of the camp."
      ],
      [
        "Crossing Slope Wisp 2",
        15.5,
        73.4,
        "Location: At the end of a ledge, by an Oran Berry tree."
      ],
      [
        "Deadwood Haunt Wisp",
        58.9,
        95.0,
        "Location: On a small island."
      ],
      [
        "Firespit Island Wisp",
        90.7,
        14.9,
        "Location: On an island hidden behind Firespit Island."
      ],
      [
        "Firespit Island Wisp 2",
        86.8,
        38.0,
        "Location: On a small island, just south of Firespit Island."
      ],
      [
        "Firespit Island Wisp 3",
        81.2,
        27.7,
        "Location: On the southern side of the volcano, on a ledge."
      ],
      [
        "Islespy Shore Wisp",
        27.8,
        20.0,
        "Location: At the end of the cliff, behind the trees."
      ],
      [
        "Islespy Shore Wisp 2",
        41.0,
        36.6,
        "Location: At the end of a ledge overlooking the sea."
      ],
      [
        "Sand's Reach Wisp",
        67.2,
        73.7,
        "Location: On a lone rock."
      ],
      [
        "Sand's Reach Wisp 2",
        92.1,
        68.5,
        "Location: At the end of the sandy beach, near the rock archway,"
      ],
      [
        "Seagrass Haven Wisp",
        56.8,
        16.3,
        "Location: On a small lonely island."
      ],
      [
        "Spring Path Wisp",
        9.4,
        35.1,
        "Location: On a curved ledge, behind the spring."
      ],
      [
        "Spring Path Wisp 2",
        20.5,
        34.4,
        "Location: On a ledge, on the eastern side of the spring."
      ],
      [
        "Tombolo Walk Wisp",
        83.5,
        86.1,
        "Location: On a small rocky hill, on an island."
      ],
      [
        "Veilstone Cape Wisp",
        51.5,
        46.4,
        "Location: On a small rock outcroping, high up on the cliff."
      ],
      [
        "Windbreak Stand Wisp",
        25.6,
        52.3,
        "Location: On top of a small hill."
      ]
    ],
    "Unown": [
      [
        "Deadwood Haunt Unown",
        67.3,
        80.9,
        "Hint: A timeworn ship on a sandy shore. Location: Atop the mast of the wrecked ship."
      ],
      [
        "Firespit Island Unown",
        78.3,
        25.9,
        "Hint: Turn your eyes up at the volcanic island. Location: High up on the western side of the volcano"
      ],
      [
        "Lunker's Lair Unown",
        75.3,
        46.6,
        "Hint: By the grave upon the cape. Location: On top of the rocky cliff, past the grave."
      ],
      [
        "Sand's Reach Unown",
        91.2,
        66.2,
        "Hint: Two horns rising from the sea. Location: On the eastern side of the tall rock."
      ],
      [
        "Spring Path Unown",
        14.9,
        34.5,
        "Hint: Twin trees at the spring by the sea. Location: On the southern tree."
      ]
    ],
    "Request": [
      [
        "#46: Setting Up the Coastlands Camp",
        36.6,
        82.6,
        "*Gully of the Supply Corps wants you to find the missing Yorrich and tell him to return to where she’s waiting. He doesn’t seem to have gone to Deadwood Haunt...* How to unlock: Visit the Cobalt Coastlands How to start: Speak with Gully Objectives: - Speak with Gully to learn more about her request. - Look for Yorrich of the Construction Corps. - Drive away the Chatot scaring Yorrich (must be done in nighttime). - Report back to Gully with your progress. Rewards: Unlocks the Coastlands Camp."
      ],
      [
        "#47: Balloon Race in the Coastlands",
        80.7,
        77.4,
        "*The man running the balloon race in the Cobalt Coastlands has issued you a challenge. You’ll get a special reward if you manage to burst 24 balloons.* How to unlock: Complete Request #46. How to start: Speak with the Balloon Race NPC. Objectives: - Burst 24 balloons within the time limit for the balloon race in the Cobalt Coastlands. Rewards: - 1x Nugget - 10x Ultra Ball"
      ],
      [
        "#49: Keep an Eye Out for Aipom!",
        40.3,
        39.8,
        "*Hiko from the village had his pack stolen by some Aipom. He wants you to chase down the Aipom and get his pack back.* How to unlock: Visit the Cobalt Coastlands How to start: Speak with Hiko Objectives: - Chase down the Aipom that stole Hiko’s pack. - They will pause here and here, before stopping here. - Defeat the Aipom, and retrieve the pack. Rewards: - 5x Scatter Bang - 1x Exp. Candy M"
      ],
      [
        "#55: Poor, Peckish Piplup",
        85.6,
        84.5,
        "*Maris of the Supply Corps wants to help a Piplup that’s too famished to move. She’s asked you to help her out by providing a tasty Bean Cake.* How to unlock: Complete Request #46. How to start: Speak with Maris. Objectives: - Give Maris the item she requested (1x Bean Cake). - Bean Cakes can be crafted for 1x Plump Beans and 1x Cake-Lure Base. The recipe can be bought at Craftworks for ₽1,000. Rewards: - 5x Razz Berry - 3x Hyper Potion"
      ],
      [
        "#56: Getting Help from Machoke",
        26.9,
        49.8,
        "*Bosley wants to know more about Machoke so he can have it help with the Construction Corps’ work. Show him Machoke’s Pokédex page after it’s completed.* How to unlock: Complete Story Mission #10. How to start: Speak with Bosley Objectives: - Show Bosley the completed Pokédex entry for Machoke. - Wait for Bosley to invite Machoke to help the Construction Corps. Rewards: - 1x Grit Gravel - 1x Aux Powerguard"
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
    ],
    "Character": [
      [
        "Irida (M9)",
        10.5,
        65.1,
        "Character marker."
      ],
      [
        "Iscan",
        28.7,
        87.7,
        "Character marker."
      ],
      [
        "Miss Fortune Sisters (M10)",
        78.2,
        23.0,
        "Character marker."
      ],
      [
        "Palina",
        74.2,
        47.0,
        "Character marker."
      ],
      [
        "Wanda - Coastlands",
        46.2,
        51.4,
        "Character marker."
      ],
      [
        "Yorrich",
        87.4,
        81.2,
        "Character marker."
      ]
    ],
    "Farm": [
      [
        "Growlithe route",
        24.0,
        38.0,
        "Hisuian Growlithe checks and Fire Stone planning."
      ],
      [
        "Seagrass Haven pearl route",
        69.0,
        32.0,
        "Pearls, Water types, and sea catches."
      ]
    ],
    "Story": [
      [
        "#10: The Lordless Island",
        80.1,
        22.0,
        "Hisuian Arcanine Noble fight at Molten Arena."
      ],
      [
        "#22: The Plate of Firespit Island",
        81.1,
        25.5,
        "Post-game Heatran plate route in Lava Dome Sanctum."
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
    "Transition": [
      [
        "Heavenward Lookout Exit",
        97.0,
        91.7,
        "Transition marker."
      ],
      [
        "Southern Highlands Exit",
        87.5,
        93.3,
        "Transition marker."
      ]
    ],
    "Cave": [
      [
        "Temple Stone Portal",
        23.1,
        30.6,
        "Cave marker."
      ],
      [
        "Cloudcap Stone Portal",
        35.1,
        40.5,
        "Cave marker."
      ],
      [
        "Wayward Cave East Entrance",
        74.1,
        80.5,
        "Cave marker."
      ],
      [
        "Wayward Cave South Entrance",
        70.3,
        84.6,
        "Cave marker."
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
    "Wisp": [
      [
        "Bolderoll Ravine Wisp",
        9.3,
        74.3,
        "Location: At the end of the ravine."
      ],
      [
        "Celestica Trail Wisp",
        27.4,
        73.6,
        "Location: Near the lake, at the start of the waterfall."
      ],
      [
        "Celestica Trail Wisp 2",
        36.4,
        77.1,
        "Location: High up on the northern cliff."
      ],
      [
        "Clamberclaw Cliffs Wisp",
        65.9,
        66.3,
        "Location: At the end of the high ridge, beside a tree."
      ],
      [
        "Clamberclaw Cliffs Wisp 2",
        81.2,
        56.3,
        "Location: On top of the high ledge overlooking the sea."
      ],
      [
        "Clamberclaw Cliffs Wisp 3",
        65.9,
        56.4,
        "Location: At the south end of a rock, in the middle of a puddle."
      ],
      [
        "Fabled Spring Wisp",
        21.1,
        87.0,
        "Location: On top of the hill."
      ],
      [
        "Fabled Spring Wisp 2",
        31.0,
        92.0,
        "Location: On the cliff looking over Fabled Spring."
      ],
      [
        "Heavenward Lookout Wisp",
        71.9,
        85.6,
        "Location: Inside Wayward Cave. In the underwater lake cavern. Stick to the right side."
      ],
      [
        "Heavenward Lookout Wisp 2",
        87.4,
        76.3,
        "Location: At the end of a rising cliff."
      ],
      [
        "Primeval Grotto Wisp",
        39.7,
        57.5,
        "Location: In the the middle of a circle of pillars."
      ],
      [
        "Primeval Grotto Wisp 2",
        39.1,
        62.3,
        "Location: Just above the entrance to Primeval Grotto."
      ],
      [
        "Sacred Plaza Wisp",
        29.0,
        50.5,
        "Location: On top of the cliffs."
      ],
      [
        "Sacred Plaza Wisp 2",
        17.4,
        62.1,
        "Location: Near the gravestones"
      ],
      [
        "Sacred Plaza Wisp 3",
        12.8,
        47.5,
        "Location: On top of a cliff, overlooking Moonview Arena."
      ],
      [
        "Sacred Plaza Wisp 4",
        30.5,
        65.7,
        "Location: On top of a tall stone pillar."
      ],
      [
        "Sonorous Path Wisp",
        62.9,
        73.2,
        "Location: On a small ledge jutting from the cliff."
      ],
      [
        "Sonorous Path Wisp 2",
        69.3,
        84.4,
        "Location: Directly above Wayward Cave's entrance, near the waterfall."
      ],
      [
        "Wayward Wood Wisp",
        65.7,
        94.7,
        "Location: At the far end of the beach."
      ],
      [
        "Wayward Wood Wisp 2",
        55.4,
        85.5,
        "Location: Inside the Ancient Quarry. On top of a square stone pillar."
      ]
    ],
    "Unown": [
      [
        "Fabled Spring Unown",
        20.2,
        89.9,
        "Hint: Among flowers at the spring where fairies dwell. Location: In the center of the purple flower bed."
      ],
      [
        "Heavenward Lookout Unown",
        70.9,
        85.0,
        "Hint: A impasse in a cave adorned by twin falls. Location: Inside Wayward Cave. Find a tunnel blocked by brown boulders; the Unown is at the end of that corridor."
      ],
      [
        "Primeval Grotto Unown",
        39.1,
        56.0,
        "Hint: Look to the ruined pillars of Celestica. Location: On top of a pillar."
      ],
      [
        "Wayward Wood Unown",
        53.5,
        85.7,
        "Hint: A stony outcrop over pools of mud on a mighty mountain. Location: On the north side of the stone pile, at the top of the mountain."
      ],
      [
        "Wayward Wood Unown 2",
        55.6,
        84.6,
        "Hint: A nook within a quarry. Location: Inside the Ancient Quarry. High up on the east wall."
      ]
    ],
    "Request": [
      [
        "#65: Setting Up the Mountain Camp",
        77.4,
        71.6,
        "*A Bronzor is getting in the way of a new base camp’s construction and seems to want to tell you something. Eshim has asked you to investigate.* How to unlock: Visit the Coronet Highlands How to start: Talk to Eshim Objectives: - Find out what Bronzor wants. Rewards: A new base camp."
      ],
      [
        "#87: Rolling with Spheal",
        20.5,
        57.1,
        "*A villager named Senki has asked you to look for his Spheal that went rolling off into Bolderoll Ravine.* How to unlock: Start #17: Atop Mount Coronet. How to start: Speak with Senki. Objectives: - Find Senki’s Spheal, which has rolled off toward Bolderoll Ravine. - The Spheal will briefly stop here, here and here. He will stop here. - Return to the Summit Camp to speak with Senki. Rewards: - 1x Rare Candy - 5x Sticky Glob"
      ]
    ],
    "Story": [
      [
        "#11: Scaling Perilous Heights",
        11.5,
        50.0,
        "Hisuian Electrode Noble fight at Moonview Arena."
      ],
      [
        "#17: Atop Mount Coronet",
        20.0,
        25.4,
        "Late story summit route at the Temple of Sinnoh."
      ],
      [
        "#18: The Counterpart",
        20.0,
        25.4,
        "Second Origin Forme encounter at the Temple of Sinnoh."
      ],
      [
        "#23: The Plate of Moonview Arena",
        9.8,
        50.1,
        "Post-game Cresselia plate route at Moonview Arena."
      ],
      [
        "#26: Seeking the Remaining Plates",
        20.0,
        25.4,
        "Late post-game route toward the Temple of Sinnoh."
      ],
      [
        "#27: The Deified Pokemon",
        19.9,
        29.8,
        "Final Arceus mission at the Temple of Sinnoh."
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
    ],
    "Character": [
      [
        "Gully",
        79.4,
        71.6,
        "Character marker."
      ],
      [
        "Gully (R68)",
        75.4,
        80.6,
        "Note: Located inside the Wayward Cave."
      ],
      [
        "Ingo (Clamberclaw Route)",
        73.0,
        63.6,
        "Character marker."
      ],
      [
        "Ingo (Wayward Route)",
        70.1,
        85.4,
        "Character marker."
      ],
      [
        "Ingo (Wayward Wood)",
        54.4,
        90.6,
        "Character marker."
      ],
      [
        "Wanda - Highlands",
        76.9,
        81.1,
        "Character marker."
      ]
    ],
    "Farm": [
      [
        "Cleffa night checks",
        20.0,
        88.0,
        "Cleffa, Clefairy, Moon Stone, and Shiny Stone routing."
      ],
      [
        "Gible and ore route",
        76.0,
        82.0,
        "Gible line, Tumblestones, and Iron Chunks."
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
    "Transition": [
      [
        "Exit",
        51.2,
        90.4,
        "Transition marker."
      ]
    ],
    "Cave": [
      [
        "Acuity Cavern",
        44.6,
        24.8,
        "Cave marker."
      ],
      [
        "Snowpoint Temple West Entrance",
        64.3,
        19.2,
        "Cave marker."
      ],
      [
        "Snowpoint Temple Main Entrance",
        59.2,
        21.0,
        "Cave marker."
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
    "Wisp": [
      [
        "Arena's Approach Wisp",
        15.8,
        59.1,
        "Location: On a ledge jutting from the cliff."
      ],
      [
        "Arena's Approach Wisp 2",
        30.5,
        60.3,
        "Location: Between the two nearby cliffs."
      ],
      [
        "Arena's Approach Wisp 3",
        23.7,
        72.9,
        "Location: At the end of the tall cliff."
      ],
      [
        "Avalanche Slopes Wisp",
        15.2,
        74.8,
        "Location: On top of a pillar."
      ],
      [
        "Avalanche Slopes Wisp 2",
        5.3,
        86.6,
        "Location: Between the two nearby cliffs."
      ],
      [
        "Avalugg's Legacy Wisp",
        31.3,
        50.8,
        "Location: Near the ledge overlooking the snowy plain."
      ],
      [
        "Avalugg's Legacy Wisp 2",
        54.0,
        60.0,
        "Location: On the side of the hill, on a small outcroping."
      ],
      [
        "Avalugg's Legacy Wisp 3",
        51.3,
        59.0,
        "Location: Undeground, in Ice Rock Cavern (can be accessed through Ice Rock Cavern entrance and Ice Rock Cavern entrance). At the end of a side cavern."
      ],
      [
        "Bonechill Wastes Wisp",
        39.9,
        72.9,
        "Location: At the end of the ledge."
      ],
      [
        "Glacier Terrace Wisp",
        27.0,
        33.4,
        "Location: On a high ledge, near the border of the map."
      ],
      [
        "Heart's Crag Wisp",
        69.2,
        56.3,
        "Location: At the end of a large slanted rock."
      ],
      [
        "Heart's Crag Wisp 2",
        80.4,
        54.8,
        "Location: On a small ledge, high up on the mountain."
      ],
      [
        "Lake Acuity Wisp",
        60.7,
        17.1,
        "Location: On a small hill, north of Snowpoint Temple."
      ],
      [
        "Lake Acuity Wisp 2",
        46.2,
        31.4,
        "Location: On the eastern cliff overlooking the waterfall."
      ],
      [
        "Lake Acuity Wisp 3",
        38.5,
        34.4,
        "Location: Inside the secret hollow, accessed by destroying the large brown rocks at the bottom of the waterfall."
      ],
      [
        "Pearl Settlement Wisp",
        63.2,
        20.0,
        "Location: On the 1st floor of Snowpoint Temple, just past the first puzzle door."
      ],
      [
        "Pearl Settlement Wisp 2",
        73.1,
        28.9,
        "Location: Behind the large tent."
      ],
      [
        "Pearl Settlement Wisp 3",
        60.0,
        45.1,
        "Location: At the end of the large, slanted piece of ice."
      ],
      [
        "Whiteout Valley Wisp",
        43.8,
        79.9,
        "Location: On the north side of a ledge jutting out of the mountain."
      ],
      [
        "Whiteout Valley Wisp 2",
        57.3,
        86.1,
        "Location: At the top of a cliff."
      ]
    ],
    "Unown": [
      [
        "Avalugg's Legacy Unown",
        53.5,
        48.2,
        "Hint: Gaze down upon the greatest glacial legacy. Location: On top of an ice pillar, near Avalugg's Legacy."
      ],
      [
        "Heart's Crag Unown",
        86.1,
        49.3,
        "Hint: The unusual stone staring out across the snowfields. Location: Atop the large stone, near the waterfall."
      ],
      [
        "Icebound Falls Unown",
        19.5,
        86.9,
        "Hint: Three pillars in a world of ice. Location: Underground, inside Ice Column Chamber (access through Ice Column Chamber entrance). On top of the southernmost pillar."
      ],
      [
        "Icebound Falls Unown 2",
        33.3,
        85.3,
        "Hint: Scale the frozen falls. Location: Not quite at the top of the frozen falls."
      ],
      [
        "Snowfall Hot Spring Unown",
        20.8,
        47.8,
        "Hint: A dead tree by the hot spring. Location: Atop a dead tree, on the highest ledge near the spring."
      ]
    ],
    "Request": [
      [
        "#78: Setting Up the Icepeak Camp",
        39.2,
        41.1,
        "*Brice of the Supply Corps wants you to find Craig. They were to meet at the base of the falls in the Alabaster Icelands, yet he hasn’t shown...* How to unlock: Start #12: The Slumbering Lord of the Tundra. How to start: Speak with Brice Objectives: - Look for Craig of the Construction Corps. - Report back to Brice with your findings. Rewards: A new base camp."
      ],
      [
        "#79: Balloon Race in the Icelands",
        38.5,
        45.6,
        "*The man running the balloon race in the Alabaster Icelands has issued you a challenge. You’ll get a special reward if you manage to burst 30 balloons.* How to unlock: Complete #12: The Slumbering Lord of the Tundra and #78: Setting Up the Icepeak Camp. How to start: Speak with the Balloon Race NPC. Objectives: - Burst 30 balloons within the time limit for the balloon race in the Alabaster Icelands. Rewards: 3x Nugget"
      ],
      [
        "#81: In Search of a Fiery Pokémon",
        40.5,
        42.0,
        "*Brice of the Supply Corps is working at the chilly Icepeak Camp and wants a Fire-type Pokémon.* How to unlock: Complete #78: Setting Up the Icepeak Camp. How to start: Speak with Brice Objectives: - Catch a Fire-type Pokémon to give to Brice. Rewards: - 3x Full Restore - 1x Exp. Candy L"
      ],
      [
        "#84: The Bergmite Enthusiast",
        62.2,
        35.3,
        "*Dominia from the Pearl Clan is a big fan of Bergmite and has asked you to show her Bergmite’s completed Pokédex page so she can verify its information.* How to unlock: Complete #12: The Slumbering Lord of the Tundra. How to start: Speak with Dominia. Objectives: - Show Dominia the completed Pokédex entry for Bergmite. Rewards: Grit Pebble x3"
      ],
      [
        "#90: The Pearl's Clan Treasure",
        70.7,
        31.2,
        "*Irida of the Pearl Clan has challenged you to a battle. Claim victory against her to find out more about the treasure she mentioned.* How to unlock: Complete #19: A New Day Dawns. How to start: Speak with Irida. Objectives: - Speak with Irida near the Pearl Settlement, and defeat her in battle. - Irida's team: Glaceon (LV64), Flareon (LV32), Espeon (LV32) Rewards: - 3x Comet Shard - 1x Lustrous Globe"
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
    ],
    "Point": [
      [
        "Ice Column Chamber entrance",
        19.0,
        76.8,
        "Point of Interest marker."
      ],
      [
        "Ice Rock Cavern West Entrance",
        45.7,
        58.9,
        "Point of Interest marker."
      ],
      [
        "Ice Rock Cavern East Entrance",
        64.0,
        65.0,
        "Point of Interest marker."
      ],
      [
        "Icepeak Cavern entrance",
        34.4,
        53.9,
        "Point of Interest marker."
      ]
    ],
    "Character": [
      [
        "Craig",
        46.3,
        37.6,
        "Character marker."
      ],
      [
        "Gaeric",
        57.2,
        49.3,
        "Character marker."
      ],
      [
        "Keaka",
        48.5,
        88.1,
        "Character marker."
      ],
      [
        "Morel (Icelands)",
        70.8,
        41.8,
        "Character marker."
      ],
      [
        "Pippa",
        50.8,
        87.4,
        "Character marker."
      ],
      [
        "Sabi",
        42.3,
        77.8,
        "Character marker."
      ],
      [
        "Zeke",
        34.1,
        54.1,
        "Character marker."
      ]
    ],
    "Farm": [
      [
        "Avalanche alpha loop",
        18.0,
        80.0,
        "Glaceon, Garchomp, Piloswine, and Ice-type research."
      ],
      [
        "Zorua tunnels",
        52.0,
        82.0,
        "Hisuian Zorua/Zoroark and late-game Ice types."
      ]
    ],
    "Story": [
      [
        "#12: The Slumbering Lord of the Tundra",
        10.1,
        54.0,
        "Hisuian Avalugg Noble fight at Icepeak Arena."
      ],
      [
        "#16: The Trial of Lake Acuity",
        44.6,
        24.8,
        "Lake Acuity trial route."
      ],
      [
        "#24: The Plate of Snowpoint Temple",
        64.3,
        19.2,
        "Post-game Regigigas plate route in Snowpoint Temple."
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
    "Transition": [
      [
        "Front Gate",
        73.0,
        29.2,
        "Transition marker."
      ]
    ],
    "Wisp": [
      [
        "Jubilife Village Wisp",
        27.9,
        21.7,
        "Location: Behind the Training Grounds building."
      ],
      [
        "Jubilife Village Wisp 2",
        54.1,
        19.8,
        "Location: Behind the Galaxy Hall."
      ],
      [
        "Jubilife Village Wisp 3",
        42.3,
        34.2,
        "Location: By the river, next to the water wheel. Access from the west, near the Training Grounds."
      ],
      [
        "Jubilife Village Wisp 4",
        46.0,
        45.6,
        "Location: Between the four surrounding buildings. Access from the south."
      ],
      [
        "Jubilife Village Wisp 5",
        26.3,
        45.5,
        "Location: Behind the small building."
      ],
      [
        "Jubilife Village Wisp 6",
        29.3,
        81.5,
        "Location: By a large rock near the shack."
      ],
      [
        "Jubilife Village Wisp 7",
        59.3,
        38.2,
        "Location: By the river, near a tree."
      ]
    ],
    "Unown": [
      [
        "Jubilife Village Unown",
        51.1,
        57.6,
        "Hint: A village gateway. Location: On the village entry sign."
      ],
      [
        "Jubilife Village Unown 2",
        43.9,
        24.1,
        "Hint: The left eye atop the village. Location: Over the left eye of Magikarp's statue. Access through Commander Kamado's chamber."
      ],
      [
        "Jubilife Village Unown 3",
        60.4,
        24.4,
        "Hint: Where things hang to dry at living quarters. Location: Behind your quarters, on a clothesline."
      ]
    ],
    "Request": [
      [
        "#1: Wurmple can Evolve",
        49.2,
        27.3,
        "*Beauregard of the Security Corps heard about Evolution from the professor, and now Beauregard wants to evolve a Wurmple of his own. You need to catch one for him.* How to unlock: Finish Story Mission #3. How to start: Speak with Beauregard Objectives: - Catch a Wurmple to give to Beauregard Rewards: - 3x Dazzling Honey"
      ],
      [
        "#10: Wurmple's Evolved",
        46.2,
        20.7,
        "*It seems Beauregard of the Security Corps has some questions about the Evolution of that Wurmple you gave him. Go find out more from him.* How to unlock: - Complete #5: A Request from Mai. - Evolve a Silcoon into a Beautifly - Complete #1: Wurmple can Evolve. How to start: Speak with Beauregard Objectives: - Speak with Beauregard to learn more about his request. - Catch a Silcoon or evolve a Wurmple into one, then show it to Beauregard. Rewards: 1x Exp. Candy S"
      ],
      [
        "#12: A Perfect Pickling Stone",
        53.1,
        22.1,
        "*A villager named Radisa is hoping a Geodude would be just the right weight to use as a pickling stone. Catch one for her to test out her theory.* How to unlock: Start #5: A Request from Mai. How to start: Speak with Radisa (2nd floor). Objectives: - Catch a Geodude to give to Radisa. Rewards: - 3x Honey Cake - 1x Exp. Candy S"
      ],
      [
        "#14: Berry Helpful",
        70.0,
        32.9,
        "*A villager named Andra is terrified of Pokémon and wants you to find some Oran Berries for him, since they can come in handy when running from Pokémon.* How to unlock: Start #5: A Request from Mai. How to start: Speak with Andra. Objectives: - Gather the number of Berries Andra wanted (5x Oran Berry), then give them to him. Rewards: 3x Revive"
      ],
      [
        "#16: Strange Happenings at Midnight",
        49.8,
        49.2,
        "*Sanqua, the captain of the Construction Corps, says that strange things are happening in her house at night. She wants you to find out what is going on.* How to unlock: Start #7: The Frenzy of the Lord of the Woods and have Pichu in your Pokédex. How to start: Speak with Sanqua. Objectives: - Search Sanqua’s house to solve the mystery. - Investigate the chest by the entrance, both drawers, the drapped mirror and the round table. Then, investigate the chest again. Rewards: 7x Nanab Berry"
      ],
      [
        "#17: To Bloom or Not to Bloom",
        28.4,
        44.1,
        "*Kichi of the Agriculture Corps wants an explanation for Cherrim's changeable appearance. He wants to see a completed Pokédex entry for Cherrim.* How to unlock: Complete Story Mission #5. How to start: Speak with Kichi Objectives: - Show Kicki the completed Pokédex entry for Cherrim Rewards: 5x Vivichoke"
      ],
      [
        "#18: Please! Make Me a Pokéshi Doll!",
        42.5,
        30.7,
        "*Anvin from the craftworks has asked you to show him a Pokéshi Doll you've crafted with your own hands.* How to unlock: Start Story Mission #7. How to start: Speak with Anvin. Objectives: - Craft a Pokéshi Doll (3x Wood), and show it to Anvin. Rewards: 1x Pokéshi Doll"
      ],
      [
        "#19: A Peculiar Ponyta",
        45.2,
        21.1,
        "*Yota is alarmed by the unusual Ponyta that frequents the Horseshoe Plains. He wants you to catch it for him.* How to unlock: Complete #7: The Frenzy of the Lord of the Woods and catch a Ponyta. How to start: Interact with the Blackboard. Objectives: - Speak with Yota to learn more about his request. - Catch the strange Ponyta on the Horseshoe Plains in the Obsidian Fieldlands. - Report back to Yota with your findings. Rewards: 5x Razz Berry"
      ],
      [
        "#2: Adorable Starly",
        55.9,
        30.7,
        "*Show a Starly to Marli of the Supply Corps, who is rather taken with how adorable Starly are.* How to unlock: Complete Story Mission #3. How to start: Speak with Marli. Objectives: - Show Marli the completed Pokedex entry for Starly. - Show Marli a Starly. Rewards: 10x Poké Ball."
      ],
      [
        "#20: The Mysterious Will-o'-the-Wisp",
        56.1,
        40.8,
        "*A villager named Paira wants you to catch the will-o’-the-wisp she saw on Windswept Run to prove to Waka that she’s telling the truth.* How to unlock: Complete #7: The Frenzy of the Lord of the Woods. How to start: Speak with Paira. Objectives: - Catch the mysterious red will-o’-the-wisp on Windswept Run at night. - Catch the Chimchar to show to Paira. Rewards: 2x Exp. Candy S"
      ],
      [
        "#21: Back-Alley Mr. Mime",
        46.2,
        21.4,
        "*That villager named Andra wants your help again, this time about a Mr. Mime that’s behaving suspiciously.* How to unlock: - Complete #7: The Frenzy of the Lord of the Woods - Complete #14: Berry Helpful - Have Mr. Mime in your Pokédex How to start: Interact with the Blackboard. Objectives: - Speak with Andra to learn more about his request. - Find a way to approach Mr. Mime and see what it’s up to. - Chase the fleeing Mr. Mime. Rewards: 2x Aux Guard"
      ],
      [
        "#22: Eerie Apparitions at Night",
        61.9,
        28.9,
        "*Collect the 107 wisps scattered around the Hisui region to seal away the “being who brought calamities” that the young girl in the village told you of.* How to unlock: Complete #7: The Frenzy of the Lord of the Woods How to start: Automatic Objectives: - Gather the wisps found scattered in every corner of the Hisui region (see the Wisp collectibles on the map). - Go to the Shrouded Ruins in the Crimson Mirelands at night. - Receive the last wisp. Rewards: 3x Twice-Spice Radish"
      ],
      [
        "#23: Getting Ahold of New Wares",
        52.8,
        31.1,
        "*Choy from the general store wants you to convince Tao Hua, captain of the Supply Corps, to sell him some new wares for his shop.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Choy. Objectives: - Try to sweeten up Tao Hua with a gift (3x Hearty Grain) so he might sell new wares to the general store. - Report back to Choy about your progress. Rewards: New items added to the General Store (Heavy Ball, Feather Ball, Super Potion, Smoke Bomb, Mushroom Cake and Honey Cake)."
      ],
      [
        "#24: Inspiration from Hippopotas",
        60.2,
        31.1,
        "*The clothier Anthe has asked you to show her a male and a female Hippopotas since she heard that they each have different appearances.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Anthe. Objectives: - Catch a male and a female Hippopotas to show to Anthe. Rewards: New items added to the Clothier."
      ],
      [
        "#25: The Pokémon in the Woodland Photo",
        65.3,
        29.0,
        "*Dagero, who runs the photography studio, thinks a Pokémon that wandered into his photo would make an excellent subject. He wants you to catch one.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Dagero. Objectives: - Catch the Pokémon captured in Dagero’s photo (a Buneary) and show it to him. Rewards: New options added to the photography studio."
      ],
      [
        "#26: Aim for the Big Leagues!",
        50.2,
        40.2,
        "*The fellow running the target practice outside Jubilife Village has issued you a challenge. You’ll get a special reward if you manage to score 10,000 points or more.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with the Target Practice NPC. Objectives: - Get a score of 10,000 points or more at the target practice game hosted in the practice field outside Jubilife Village. Rewards: - 15x Great Ball - 1x Nugget"
      ],
      [
        "#27: Help Wanted: Plowing the Fields",
        34.6,
        41.8,
        "*Miller from the Agriculture Corps says the ground is too hard to plow. He wants to borrow a Pokémon to help with plowing the land to prepare it for planting.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Miller. Objectives: - Lend a Ground-type Pokémon to Miller. Rewards: More fields available for farming."
      ],
      [
        "#28: Measuring Your Compatibility",
        64.6,
        46.6,
        "*A villager named Belamy says you remind him of his grandmother. He wants you to show him that you can likewise befriend Pokémon as she could.* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Belamy. Objectives: - Show a Pokémon with which you have a strong enough bond to satisfy Belamy. - Pokémon with whom you have battled a lot should have high friendship. Rewards: 1x Rare Candy"
      ],
      [
        "#29: The Search for Bitter Leaves",
        49.9,
        44.6,
        "*Shinon wants to make some medicine and asks you to collect the materials needed. Anise of the Medical Corps filled you in on what you need to find to make medicine. Seems you can find the materials in the Crimson Mirelands, but...* How to unlock: Start #8: Arezu's Predicament. How to start: Speak with Shinon. Objectives: - Ask Anise about the materials that are needed for the medicine. - Find the Pokémon with three leaves (Petilil) in the Crimson Mirelands and catch one to give to Anise. Rewards: - 3x Fine Remedy - 5x Hopo Berry"
      ],
      [
        "#3: What Did Shinx's Ears Look Like?",
        64.5,
        29.0,
        "*A villager named Toshi wants you to show him a Shinx, since he can't quite seem to remember what the marks on Shinx's ears look like.* How to unlock: After Story Mission #3. How to start: Speak with Toshi. Objectives: - Catch a Shinx to show to Toshi. Rewards: - Potion x3"
      ],
      [
        "#33: What a Massive Mushroom!",
        45.2,
        21.8,
        "*Go have a chat with Morel, a local fungus expert, and investigate the mushrooom on Parasect's back together.* How to unlock: - Start #8: Arezu's Predicament - Complete #6: Mushroom Cake Marketing - Have Parasect in your Pokédex How to start: Interact with the Blackboard. Objectives: - Speak with Morel to learn more about his request. - Catch a Parasect to give to Morel. Rewards: 1x Candy Truffle"
      ],
      [
        "#34: Croagunk's Curative Poison",
        46.1,
        22.0,
        "*It seems that Pesselle, captain of the Medical Corps, can make medicine using Croagunk’s poison. Ask her for more information so you can help her out.* How to unlock: Start #9: A New Mission and have Croagunk in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Pesselle to learn more about her request. - Catch a Croagunk to give to Pesselle. Rewards: - 3x Full Heal - 3x Exp. Candy S"
      ],
      [
        "#35: Battling with Pachirisu",
        45.2,
        22.5,
        "*Speak with Ren to learn more about his request. Remove all other Pokémon from your party and show Ren a great strategy for battling with a Pachirisu.* How to unlock: Complete #8: Arezu's Predicament and catch a Pachirisu. How to start: Interact with the Blackboard. Objectives: - Speak with Ren to learn more about his request. - Remove all other Pokémon from your party and show Ren a great strategy for battling with a Pachirisu. - You must face an Ursaring LV30 with only Pachirisu in your party (you can have more than 1). Rewards: - 3x Sitrus Berry - 1x Grit Gravel"
      ],
      [
        "#36: Watering with Care",
        46.1,
        22.7,
        "*You’ve been tasked with finding a Pokémon that can use Water Pulse to help perk up the Sudowoodo at the Bogbound Camp in the Crimson Mirelands.* How to unlock: Complete #10: The Lordless Island and have Sudowoodo in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Show a Pokémon that can use Water Pulse to Odo. - Battle the agitated Sudowoodo and calm it down. Rewards: - 15x Heavy Ball - 3x Exp. Candy S"
      ],
      [
        "#37: The Fragrence of Nostalgic Herbs",
        53.3,
        23.9,
        "*A villager named Risa wants you to find a Pokémon that she remembers from back home. It’s covered in herbs shaped like blue vines.* How to unlock: Complete #8: Arezu's Predicament. How to start: Speak with Risa (in the basement) Objectives: - Find the Pokémon covered in herbs shaped like blue vines (Tangela) and catch one to show to Risa. Rewards: - 5x Smoke Bomb - 2x Exp. Candy S"
      ],
      [
        "#38: Gone Astray...In The Mirelands",
        50.0,
        25.3,
        "*A villager named Zeke wants you to find his sister, Wanda. She’s a member of the Security Corps, and she seems to have gone missing in the Crimson Mirelands.* How to unlock: Complete #8: Arezu's Predicament. How to start: Speak with Zeke. Objectives: - Ride on Ursaluna and follow the blue signals to locate Wanda in the Crimson Mirelands. - Report back to Zeke on the first floor of Galaxy Hall. Rewards: 3x Stardust"
      ],
      [
        "#39: All about Magikarp",
        53.9,
        28.8,
        "*A little girl in the village named Ceci has asked you to teach her more about Magikarp.* How to unlock: Have Magikarp in your Pokédex. How to start: Speak with Ceci during the day. Objectives: - Show Ceci the completed Pokédex entry for Magikarp. Rewards: 1x Rare Candu"
      ],
      [
        "#4: Big Buizel, Little Buizel",
        49.6,
        59.2,
        "*Catch a big Buizel for Dorian of the Security Corps, who wants an even bigger specimen to raise alongside the Buizel he already has.* How to unlock: Complete Story Mission #3. How to start: Speak with Dorian Objectives: - Catch a big (2'8\" and taller) Buizel to give to Dorian Rewards: - 5x Oran Berry - 1x Exp. Candy S"
      ],
      [
        "#41: An Elegant Tail",
        37.5,
        56.3,
        "*A villager named Asabei saw the tail of a Pokémon hiding behind some rocks and was captivated by its elegant movements. He wants you to show him this Pokémon.* How to unlock: Start #9: A New Mission How to start: Speak with Asabei Objectives: - Find the Pokémon with the elegant tail that curls like a spring (Glameow), and catch one to show to Asabei. Rewards: - 2x Aux Evasion - 2x Grit Gravel"
      ],
      [
        "#42: Help Wanted: Watering the Fields",
        35.5,
        41.7,
        "*To expand the fields, more irrigation is needed. Lend a Pokémon that can help with the task to Miller from the Agriculture Corps.* How to unlock: Start #9: A New Mission and complete #27: Help Wanted: Plowing the Fields. How to start: Speak with Miller Objectives: - Lend a Pokémon that can use a Water-type move to Miller. Rewards: More fields available for farming."
      ],
      [
        "#43: More New Wares",
        53.5,
        31.1,
        "*Choy from the general store wants you to convince Tao Hua, captain of the Supply Corps, to sell him some new wares for his shop.* How to unlock: Start #9: A New Mission and complete #23: Getting Ahold of New Wares. How to start: Speak with Choy Objectives: - Try to sweeten up Tao Hua with a gift (3x Pop Pods) so he might sell new wares to the general store. - Report back to Choy about your progress. Rewards: New items added to the General Store (Great Ball, Hyper Potion, Full Heal, Stealth Spray, Scatter Bang, Grain Cake)."
      ],
      [
        "#44: The Pokémon in the Nighttime Photo",
        66.2,
        29.0,
        "*Dagero from the photography studio captured another strange Pokémon in one of his photos. He wants you to identify it and catch one for him.* How to unlock: Start #9: A New Mission and complete #25: The Pokémon in the Woodland Photo. How to start: Speak with Dagero Objectives: - Catch the Pokémon captured in Dagero’s photo (Duskull) and show it to him. Rewards: New options added at the photography studio."
      ],
      [
        "#45: Shellos of the East and West",
        60.9,
        31.0,
        "*Shellos can look different depending on where they live, and the clothier Anthe thinks seeing that will inspire her. Show her two Shellos with different appearances.* How to unlock: Start #9: A New Mission and complete #24: Inspiration from Hippopotas. How to start: Speak with Anthe. Objectives: - Catch an East Sea Shellos and a West Sea Shellos to show to Anthe. Rewards: New items added to the Clothier."
      ],
      [
        "#48: The Taste of Home",
        48.0,
        47.0,
        "*Floaro of the Construction Corps is thinking of cooking a treat from his homeland to try to win over an Eevee, and he has asked you to gather some ingredients.* How to unlock: Start #9: A New Mission. How to start: Speak with Floaro. Objectives: - Gather the necessary materials for Floaro (3x Hearty Grain, 2x Hopo Berry, 1x Razz Berry). Rewards: 5x Exp. Candy S"
      ],
      [
        "#5: What It Takes to Be Awesome",
        61.6,
        50.8,
        "*A village boy named Sho is convinced you need a partner Pokémon to become an awesome member of the Galaxy Team. He wants some Poké Balls.* How to unlock: Start #5: A Request from Mai. How to start: Speak with Sho. Objectives: - Craft or buy some Poké Balls to give to Sho (5). Rewards: 3x Grit Dust Notes: No marker will appear for this request initially; it appears after starting #8: Arezu's Predicament."
      ],
      [
        "#50: Double the Tails, Double the Fun",
        64.6,
        48.8,
        "*Netta of the Security Corps says she spotted a Pokémon with two tail fins and would like to see it once more. Try to catch one, and show it to her.* How to unlock: Complete #10: The Lordless Island. How to start: Speak with Netta. Objectives: - Find the Pokémon with two tail fins (Finneonn) and catch one to show to Netta. Rewards: 1x Star Piece"
      ],
      [
        "#52: Eevee's Evolutions",
        45.3,
        23.2,
        "*Floaro of the Construction Corps wants to discuss Eevee’s evolution. You should go and have a chat with him.* How to unlock: - Complete #10: The Lordless Island - Complete #48: The Taste of Home - Have Eevee in your Pokédex How to start: Interact with the Blackboard. Objectives: - Speak with Floaro to learn more about his request. - Search for the missing Eevee. - Feed the hungry Umbreon a muffin (2x Hearty Grains, 2x Hopo Berry, 1x Razz Berry, 1x Cake-Lure Base). Rewards: 1x Rare Candy"
      ],
      [
        "#53: Octillery's Ink",
        66.7,
        31.5,
        "*Radisa from the village sees culinary potential in Octillery ink, and she wants to try using it to make a new dish. Complete Octillery’s Pokédex page, and show it to her.* How to unlock: Complete #10: The Lordless Island. How to start: Speak with Radisa Objectives: - Show Radisa the completed Pokédex entry for Octillery. Rewards: - 5x Bean Cake - 1x Exp. Candy M"
      ],
      [
        "#54: Serving Up Swap Snacks",
        53.0,
        27.2,
        "*Bonn from the candy stand has decided to teach you a recipe of his that was shelved due to complaints from his customers.* How to unlock: Complete #10: The Lordless Island and speak to Bonn at least once before. How to start: Speak with Bonn. Objectives: - Gather the necessary materials for Bonn (1x Sootfoot Root, 1x Spring Mushroom, 1x Hopo Berry). Rewards: 1x Swap Snack"
      ],
      [
        "#57: The Taste of Honey",
        46.2,
        23.3,
        "*Almous of the Agriculture Corps has a request for you regarding the flavor of honey produced by Combee. Go speak to him, and see what you need to do.* How to unlock: Complete #10: The Lordless Island and have Combee in your Pokédex. How to start: Speak with Almous. Objectives: - Speak with Almous to learn more about his request. - Catch a Combee in Grueling Grove, then show it to Almous. - Catch a Combee on Aipom Hill, then show it to Almous. - Catch a Combee on Ramanas Island, then show it to Almous. Rewards: - 3x Dazzling Honey - 3x King's Leaf"
      ],
      [
        "#58: Gone Astray...in the Coastlands",
        51.1,
        25.3,
        "*Zeke from the village wants you to find his sister, Wanda, once again. She seems to have gone missing in the Cobalt Coastlands this time.* How to unlock: Complete #10: The Lordless Island and #38: Gone Astray...In The Mirelands. How to start: Speak with Zeke. Objectives: - Ride on Ursaluna and follow the blue signals to locate Wanda in the Cobalt Coastlands. - Report back to Zeke on the first floor of Galaxy Hall. Rewards: 1x Star Piece"
      ],
      [
        "#59: Misdreavus the Hairstyle Muse",
        57.5,
        30.7,
        "*Arezu thinks she might take inspiration from a good look at a Misdreavus. She wants you to show her one so she can create some new hairstyles.* How to unlock: Start #11: Scaling Perilious Heights. How to start: Speak with Arezu. Objectives: - Catch the Pokémon needed to inspire Arezu (Misdreavus). Rewards: New styles added to the Hairdresser."
      ],
      [
        "#60: Help Wanted: Rock Smashing in the Fields",
        36.3,
        41.6,
        "*Miller from the Agriculture Corps wants to expand the fields even more, but a giant boulder is in the way! Lend him a Pokémon that can smash up the boulder.* How to unlock: Start #11: Scaling Perilious Heights and complete #42: Help Wanted: Watering the Fields. How to start: Speak with Miller. Objectives: - Lend a Pokémon that can use Rock Smash to Miller. Rewards: More fields available for farming."
      ],
      [
        "#61: Even More Wares",
        54.3,
        30.8,
        "*Choy from the general store wants you to convince Tao Hua, captain of the Supply Corps, to sell him some new wares for his shop.* How to unlock: Start #11: Scaling Perilious Heights and complete #43: More New Wares. How to start: Speak with Choy. Objectives: - Try to sweeten up Tao Hua with a gift (3x Crunchy Salt) so he might sell new wares to the general store. - Report back to Choy about your progress. Rewards: New items added to the General Store (Leaden Ball, Wing Ball, Max Potion, Bean Cake)."
      ],
      [
        "#62: The Pokémon in the River Photo",
        66.9,
        29.0,
        "*Dagero from the photography studio suspects that the pair of leaves in one of his landscape photos is actually a Pokémon and wants you to confirm this for him.* How to unlock: Start #11: Scaling Perilious Heights and complete #44: The Pokémon in the Nighttime Photo. How to start: Speak with Dagero Objectives: - Catch the Pokémon captured in Dagero’s photo (Turtwig) and show it to him. Rewards: New options added at the photography studio."
      ],
      [
        "#63: Fancy, Fashionnable Wormadam",
        61.7,
        31.0,
        "*The clothier Anthe wants you to show her a Wormadam, hoping the sight will inspire her to come up with some new clothing designs.* How to unlock: Start #11: Scaling Perilious Heights and complete #45: Shellos of the East and West. How to start: Speak with Anthe. Objectives: - Catch a Wormadam to show to Anthe. Rewards: New items added to the Clothier."
      ],
      [
        "#64: Getting to Know the Ghosts",
        50.6,
        34.0,
        "*A villager named Ward claims his son Conlan is afraid of ghosts. To help him overcome his fear, Ward has asked you to show him Gastly’s completed Pokédex page.* How to unlock: Start #11: Scaling Perilious Heights and have Gastly in your Pokédex. How to start: Speak with Ward. Objectives: - Show Ward the completed Pokédex entry for Gastly. Rewards: 1x Linking Cord"
      ],
      [
        "#66: The Sea's Legend",
        45.2,
        23.9,
        "*The Pokémon that Professor Laventon saw in the ocean might be connected to the Pokémon that appears in “The Sea’s Legend”...* How to unlock: - Start #11: Scaling Perilious Heights - Have Buizel, Mantyke and Qwilfish in your Pokédex - Reach Star Rank 5 How to start: Interact with the Blackboard. Objectives: - Solve the mystery of “The Sea’s Legend,” and catch the Pokémon that Professor Laventon saw. - Go through the stone pillars here, in the evening, with an Overqwil, a Buizel and a Mantyke to solve the mystery. - Report back to Professor Laventon to share what you’ve learned about Manaphy. Rewards: 3x Comet Shard"
      ],
      [
        "#67: The Clefairy's Moonlit Dance",
        46.0,
        24.1,
        "*Astair of the Supply Corps says that Clefairy dance on nights with a full moon where he comes from. Investigate whether they dance here in Hisui.* How to unlock: Complete #11: Scaling Perilious Heights and have Clefairy in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Astair to learn more about his request. - Investigate whether Clefairy dance in the Fabled Spring on nights with a full moon. - Report back to Astair with your findings. Rewards: - 5x Salt Cake - 1x Moon Stone - 2x Exp. Candy M"
      ],
      [
        "#68: A Nosepass to Guide the Way",
        45.2,
        24.5,
        "*There’s an old saying that “A Nosepass never wanders.” Gully of the Supply Corps therefore asks for a Nosepass to keep her from getting lost in Wayward Cave.* How to unlock: - Complete #11: Scaling Perilious Heights - Complete #46: Setting Up the Coastlands Camp - Have Nosepass in your Pokédex How to start: Interact with the Blackboard Objectives: - Talk to Gully to learn more about his request - Catch a Nosepass to give to Gully. - Report back to Gully. Rewards: - 1x Black Augurite - 2x Exp. Candy M"
      ],
      [
        "#69: Gone Astray...in the Highlands",
        52.2,
        25.2,
        "*Zeke from the village wants you to find his sister, Wanda, once again. She seems to have gone missing in the Coronet Highlands this time.* How to unlock: Complete #11: Scaling Perilious Heights and #58: Gone Astray...in the Coastlands. How to start: Speak with Zeke. Objectives: - Ride on Ursaluna and follow the blue signals to locate Wanda in the Coronet Highlands. - Report back to Zeke on the first floor of Galaxy Hall. Rewards: 2x Star Piece"
      ],
      [
        "#7: Playing with Drifloon",
        45.2,
        19.8,
        "*It appears that a Drifloon has been sighted playing with one of the village children. Go speak to Miki of the Security Corps for details.* How to unlock: Complete #5: A Request from Mai and have Drifloon in the Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Miki to learn more about her request. - Investigate the Drifloon playing with a child at Prelude Beach in the evening. - Report back to Miki with your findings. Rewards: 1x Stardust"
      ],
      [
        "#70: Colorful New Looks",
        62.4,
        30.9,
        "*The clothier Anthe wants to create clothes in new colors and has sent you in search of the materials she needs to do so.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #63: Fancy, Fashionnable Wormadam. How to start: Speak with Anthe. Objectives: - Gather the necessary materials for Anthe (1x Green Shard, 1x Red Shard, 1x Blue Shard) Rewards: New items added to the Clothier."
      ],
      [
        "#71: New Wares Yet Again",
        55.1,
        31.1,
        "*Choy from the general store wants you to convince Tao Hua, captain of the Supply Corps, to sell him some new wares for his shop.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #61: Even More Wares. How to start: Speak with Choy. Objectives: - Try to sweeten up Tao Hua with a gift (3x Sand Radishes), so he might sell new wares to the general store. - Report back to Choy about your progress. Rewards: New items added to the General Store (Ultra Ball, Full Restore, Max Revive, Sticky Glob, Salt Cake)."
      ],
      [
        "#72: Pesselle's Easy Errand",
        56.9,
        23.8,
        "*Pesselle of the Medical Corps has asked you to bring her a hundred Medicinal Leeks.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #34: Croagunk's Curative Poison. How to start: Speak with Pesselle Objectives: - Gather the necessary materials (100x Medicinal Leek) for Pesselle. Rewards: - 1x Adamant Mint - 1x Modest Mint"
      ],
      [
        "#73: Which is the Real Burmy?",
        43.2,
        50.6,
        "*Leif, Duna, and Tarush in the village can’t agree on which form of Burmy is the real one. Each of them has asked you to show them a different Burmy.* How to unlock: Start #12: The Slumbering Lord of the Tundra. How to start: Speak with Leif Objectives: - Catch a Burmy to show to Leif, Duna, and Tarush. - Show Leif, Duna, and Tarush the completed Pokédex entry for Burmy. Rewards: - 1x Leaf Stone - 3x Exp. Candy M"
      ],
      [
        "#74: A Bit of Help from Blissey",
        46.1,
        24.7,
        "*It seems Pippa of the Supply Corps has a request concerning Blissey, a Pokémon that once came to her aid.* How to unlock: Start #12: The Slumbering Lord of the Tundra and have Blissey in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Pippa in the Alabaster Icelands to learn more about her request. - Meet up with Pippa. - Battle the angry Abomasnow to calm it down. Rewards: - 1x Shiny Stone - 1x Max Revive"
      ],
      [
        "#75: Kirlia the Hairstyle Muse",
        58.2,
        30.6,
        "*Arezu thinks she might take inspiration from a good look at a Kirlia. She wants you to show her one so she can create some new hairstyles.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #59: Misdreavus the Hairstyle Muse. How to start: Speak with Arezu. Objectives: - Catch the Pokémon needed to inspire Arezu (Kirlia). Rewards: New styles added to the Hairdresser."
      ],
      [
        "#76: Mushroom Hunting with Swinub",
        45.1,
        25.2,
        "*Morel from the village is at Heart’s Crag in the Alabaster Icelands, and he seems to have a request for you concerning a special skill of Swinub’s.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #33: What a Massive Mushroom!. How to start: Interact with the Blackboard. Objectives: - Speak with Morel at Heart’s Crag in the Alabaster Icelands to hear his request. - Add a Swinub to your party, and hunt for mushrooms buried in the snow. - Report back to Morel with your results. Rewards: - 5x Sand Radish - 1x Exp. Candy L"
      ],
      [
        "#77: Gone Astray...in the Fieldlands",
        50.6,
        25.9,
        "*Zeke from the village wants you to find his sister, Wanda, yet again. This time she has somehow gotten lost in the Obsidian Fieldlands right outside the village.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #69: Gone Astray...in the Highlands. How to start: Speak with Zeke Objectives: - Ride on Ursaluna and follow the blue signals to locate Wanda in the Obsidian Fieldlands. - Defeat the three Paras attacking Wanda. - Report back to Zeke on the first floor of Galaxy Hall. Rewards: 3x Star Piece"
      ],
      [
        "#8: Bothersome Bidoof",
        46.3,
        20.0,
        "*It seems that some mischievous Bidoof have been causing quite a lot of trouble around the village lately. Get the details from Tsumugi of the Security Corps.* How to unlock: Complete Story Mission #5. How to start: Interact with the Blackboard. Objectives: - Speak with Tsumugi to learn more about her request. - Add a Bidoof to your team, and go find the bothersome Bidoof troubling the village. They are located here, here and here. Rewards: 1x Rare Candy"
      ],
      [
        "#80: The Perfect Pickle Recipe",
        67.4,
        31.3,
        "*Radisa from the village believes she’s come up with the perfect pickle recipe and has asked you to gather the ingredients before she’ll teach it to you.* How to unlock: Start #12: The Slumbering Lord of the Tundra and complete #53: Octillery's Ink. How to start: Speak with Radisa. Objectives: - Gather the necessary materials for Radisa (2x Crunchy Salt, 2x Plump Beans, 2x King's Leaf). Rewards: 1x Twice-Spice Radish"
      ],
      [
        "#82: Traces of a Lost Village",
        55.6,
        20.5,
        "*Mani from the Ginkgo Guild says his ancestors may have once lived at the Avalanche Slopes in the Alabaster Icelands. See if you can find traces of a village there.* How to unlock: Complete #12: The Slumbering Lord of the Tundra. How to start: Speak with Mani (in the Basement) Objectives: - Search for traces of a village said to have been located at the Avalanche Slopes in the Alabaster Icelands. - You will find them here, then here. - Give the Old Journal to Mani. Rewards: 1x Dawn Stone"
      ],
      [
        "#83: Snow-White Vulpix in the Snow",
        46.1,
        25.4,
        "*Keaka, a Security Corps member from the Alola region, has some peculiar Vulpix that he calls Keokeo. Go ask him about them so you can help with his request.* How to unlock: Complete #12: The Slumbering Lord of the Tundra and have Vulpix in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Keaka to learn more about his request. - Find the Alolan Vulpix hiding out in the Alabaster Icelands. - There are five Alolan Vulpix: #1, #2, #3, #4, #5 - Report back to Keaka with your progress. Rewards: 1x Exp. Candy L"
      ],
      [
        "#85: At Home under the Eaves",
        45.2,
        26.0,
        "*It seems that a wild Chimecho has made itself at home under the eaves of one of the village houses. Talk to a villager named Ida to find out more.* How to unlock: Complete #12: The Slumbering Lord of the Tundra and have Chimecho in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Ida outside one of the village residences to learn more about her request. - Find a place that Chimecho could hang from at the farmhouse near the fields. - Report back to Ida with your findings. - Find a place that Chimecho could hang from at the hut on the beach. - Report back to Ida with your findings. - Find a place that Chimecho could hang from in the training grounds. - Report back to Ida with your findings. - Find a place that Chimecho could hang from at the house next door to Ida’s home. Rewards: - 1x Rare Candy - 1x Sun Stone"
      ],
      [
        "#86: Gone Astray...in the Icelands",
        51.7,
        25.9,
        "*Wanda of the Security Corps wants you to find her brother, the villager Zeke, who went looking for her in the Alabaster Icelands.* How to unlock: Complete #12: The Slumbering Lord of the Tundra and #77: Gone Astray...in the Fieldlands. How to start: Speak with Wanda Objectives: - Ride on Ursaluna and follow the blue signals to locate Zeke in the Alabaster Icelands. - Defeat the Glalie, and save Zeke. Rewards: - 1x Ice Stone - 1x Peat Block - 5x Star Piece"
      ],
      [
        "#88: Steely Lucario",
        48.3,
        24.1,
        "*Rye from the village wants you to battle with him and his partner, Lucario.* How to unlock: Start #17: Atop Mount Coronet. How to start: Speak with Lucario. Objectives: - Battle Lucario at the training grounds. Rewards: 1x Grit Rock"
      ],
      [
        "#9: Zubat's Eyes",
        45.3,
        20.5,
        "*Clarissa of the Security Corps has a request, and it seems to have something to do with Zubat's eyes. Go hear what she has to say!* How to unlock: Complete Story Mission #5 and have Zubat in your Pokédex. How to start: Interact with the Blackboard. Objectives: - Speak with Clarissa to learn more about her request. - Catch a Zubat to show to Clarissa Rewards: 2x Aux Power"
      ],
      [
        "#91: On the Trail of Giratina",
        68.6,
        29.4,
        "*A huge shadow has been seen in Cobalt Coastlands. According to Professor Laventon, there's a strong chance it is Giratina, the fearsome Pokemon you once battled.* How to unlock: Complete #26: Seeking the Remaining Plates. How to start: Speak with Professor Laventon. Objectives: - Find out the truth behind the huge shadow in the Cobalt - Coastlands. - Catch Giratina before it wreaks havoc! - Report back to Professor Laventon to share what you’ve learned. Rewards: - 1x Griseous Core - 1x Grit Rock"
      ],
      [
        "#92: A Token of Gratitude",
        46.0,
        26.2,
        "*Help Medi of the Diamond Clan find the rare Pokémon she met long ago, and survey the Pokémon while you’re at it.* How to unlock: Complete #18: The Counterpart and have a save file from Pokémon Sword or Shield. How to start: Interact with the Blackboard. Objectives: - Talk to Medi to learn more about her request. - Find the field of Gracidea flowers located somewhere in the Obsidian Fieldlands. - Catch Shaymin in the field of Gracidea flowers. Rewards: 1x Grit Rock"
      ],
      [
        "#93: The Darksome Nightmare",
        45.1,
        26.6,
        "*Get more details from Cael of the Pearl Clan about the terrifying Pokémon he saw and find out its location so you can survey it.* How to unlock: Complete #18: The Counterpart and have a save file from Pokémon Brilliant Diamond or Shining Pearl. How to start: Interact with the Blackboard. Objectives: - Speak with Cael to learn more about his request. - Search for the mysterious black Pokémon that appears around the Clamberclaw Cliffs at night. - Catch Darkrai around the Clamberclaw Cliffs. Rewards: 1x Exp. Candy XL"
      ],
      [
        "#94: Incarnate Forces of Hisui",
        51.1,
        18.3,
        "*Legend has it that Hisui is home to a group of Pokémon said to be forces of nature incarnate. Investigate them to bring your Pokédex closer to completion.* How to unlock: Complete #18: The Counterpart. How to start: Enter the Galaxy Hall. Objectives: - Show Cogita the completed Pokédex entries for Tornadus, Thundurus, and Landorus. - Show Cogita the completed Pokédex entry for Enamorus. Rewards: 1x Exp. Candy L"
      ],
      [
        "Blackboard",
        48.3,
        21.9,
        "Interact with this blackboard to start the following requests: - #7: Playing with Drifloon - #8: Bothersome Bidoof - #9: Zubat's Eyes - #10: Wurmple's Evolved - #19: A Peculiar Ponyta - #21: Back-Alley Mr. Mime - #33: What a Massive Mushroom! - #34: Croagunk's Curative Poison - #35: Battling with Pachirisu - #36: Watering with Care - #52: Eevee's Evolutions - #57: The Taste of Honey - #66: The Sea's Legend - #67: The Clefairy's Moonlit Dance - #68: A Nosepass to Guide the Way - #74: A Bit of Help from Blissey - #76: Mushroom Hunting with Swinub - #83: Snow-White Vulpix in the Snow - #85: At Home under the Eaves"
      ]
    ],
    "Story": [
      [
        "#1: In an Unfamiliar Land",
        27.7,
        85.3,
        "*Professor Laventon has brought you to Jubilife Village, an unfamiliar settlement bustling with unfamiliar faces. How will you find your footing in this strange land?* Steps: 1. Head to The Wallflower, which serves as the village canteen. 2. Head to the Survey Corps quarters you’ve been assigned. 3. Sleep until morning in the futon in your quarters. 4. Go to the Galaxy Team headquarters to hear about your trial from Captain Cyllene. Next mission: #2: The Galaxy Team's Entry Trial"
      ],
      [
        "#10: The Lordless Island",
        50.3,
        20.3,
        "*Curious rumors have been pouring in from the Cobalt Coastlands, an area without a noble Pokémon. You must find out what’s behind these strange happenings.* Steps: 1. Head to the Cobalt Coastlands and speak with Irida there. 2. Head to Veilstone Cape to speak with Palina of the Pearl Clan. 3. Find the home of Iscan, a Diamond Clan warden, on Aipom Hill. 4. Obtain a Dusclops, which can be found around Deadwood Haunt during the night, and take it with you to Iscan’s home. 5. Go to Ginkgo Landing to call Basculegion. 6. Ride on Basculegion to follow the bandits across the water to Firespit Island. 7. Take back the Growlithe that the Miss Fortune sisters stole. 8. Quell the frenzy of Arcanine, the Lord of the Isles, at Molten Arena. 9. Report to Commander Kamado that you have accomplished your mission. Next mission: #11: Scaling Perilious Heights"
      ],
      [
        "#11: Scaling Perilious Heights",
        60.1,
        28.8,
        "*Electrode, the Lord of the Hollow, has been driven into a frenzy by the strange lightning. Investigate the matter and find a way to quell its frenzy.* Steps: 1. Battle Adaman to demonstrate what you’re capable of. 2. Complete enough research tasks to reach the rank of Fourth Star. 3. Head to the Jubilife Village training grounds to meet Ingo of the Pearl Clan. 4. Head to the Coronet Highlands for your next mission. 5. Make your way up the mountain with Ingo. 6. Go inside Wayward Cave. 7. Pass through Wayward Cave to continue your journey up the mountain. 8. Make your way up the mountain with Ingo. 9. Defeat Melli in battle to clear your path. 10. Pass through the Ancient Quarry to continue your journey up the mountain. 11. Make your way up the mountain with Ingo. 12. Defeat Ingo in battle to prove your strength to him. 13. Scale the cliffs with Sneasler’s help to reach Moonview Arena. 14. Defeat Melli in battle to clear your path once again. 15. Quell the frenzy of Electrode, the Lord of the Hollow, at Moonview Arena. 16. Report to Commander Kamado that you have accomplished your mission. Next mission: #12: The Slumbering Lord of the Tundra"
      ],
      [
        "#12: The Slumbering Lord of the Tundra",
        51.0,
        20.7,
        "*Avalugg, the Lord of the Tundra, has been driven into a frenzy by the strange lightning. Investigate the matter and find a way to quell his frenzy.* Steps: 1. Complete enough research tasks to reach the rank of Fifth Star. 2. Head to the Alabaster Icelands. 3. Go to meet Gaeric of the Pearl Clan. 4. Defeat Gaeric in battle to prove your strength to him. 5. Speak with Sabi of the Diamond Clan. 6. Catch up to Sabi. 7. Make your way to the top floor of Snowpoint Temple. 8. Solve the stone statues’ puzzles and make your way to Snowpoint Temple’s top floor. 9. Prove your strength to Sabi on the top floor of Snowpoint Temple. 10. Prove your strength to Braviary on the roof of Snowpoint Temple. 11. Glide with Braviary to land atop Avalugg’s Legacy and obtain a piece of Eternal Ice. 12. Make your way to Icepeak Arena. 13. Quell the frenzy of Avalugg, the Lord of the Tundra, at Icepeak Arena. 14. Report to Commander Kamado that you have accomplished your mission. Next mission: #13: Disaster Looming"
      ],
      [
        "#13: Disaster Looming",
        62.8,
        26.7,
        "*The space-time rift has taken a strange and worrisome turn, and you’ve been banished from Jubilife Village. How are you to make your way on your own?* Steps: 1. Go outside and see what’s happening. 2. Seek out Lian. 3. Seek out Mai. 4. Speak to the person who dwells here at the retreat. 5. Complete the trials of the three lakes. 6. Choose whose help you want on the path ahead: Adaman of the Diamond Clan or Irida of the Pearl Clan. Next mission: Can be done in any order - #14: The Trial of Lake Verity - #15: The Trial of Lake Valor - #16: The Trial of Lake Acuity"
      ],
      [
        "#17: Atop Mount Coronet",
        51.4,
        23.6,
        "*Apparently, you’ve just missed Commander Kamado, who has led a force to Mount Coronet to take matters into his own hands. Hurry there to stop his reckless plan!* Steps: 1. Head to Mount Coronet’s peak in pursuit of Commander Kamado. 2. Talk sense into Commander Kamado at Mount Coronet’s peak. 3. Bring the Red Chain to the dais in the Temple of Sinnoh. 4. Approach the dais in the Temple of Sinnoh and catch almighty Sinnoh! - If you chose Adaman, you will face Dialga - If you chose Irida, you will face Palkia Next mission: #18: The Counterpart"
      ],
      [
        "#19: A New Day Dawns",
        61.7,
        26.5,
        "*The rift in space-time has disappeared, and calamity seems to have been averted. At last you can return to the Survey Corps’ main duty: completing the Pokédex.* Steps: - Leave your quarters. - Head to the Survey Corps office to discuss what to do next. Next mission: - #20: The Researcher of Myths"
      ],
      [
        "#2: The Galaxy Team's Entry Trial",
        50.2,
        23.6,
        "*You’ve been set a trial you must clear to join the Galaxy Team. If you want to stay in the village, catch yourself a Bidoof, a Starly, and a Shinx in the Obsidian Fieldlands.* Steps: 1. Choose a Pokémon to be your first partner in preparation for your trial. 2. Depart for the Obsidian Fieldlands from Jubilife Village’s front gate. 3. Catch a Bidoof, the first Pokémon species you need for your trial. 4. Catch a Starly, the second Pokémon species you need for your trial. 5. Catch a Shinx, the third Pokémon species you need for your trial. 6. Report to Captain Cyllene about how your trial went. 7. Use the mirror in your quarters to change into your new Survey Corps uniform and Survey Corps sandals. 8. Report to Commander Kamado in his office on the third floor of Galaxy Hall. Next mission: #3: The Basics of Crafting"
      ],
      [
        "#20: The Researcher of Myths",
        50.9,
        24.2,
        "*To flesh out your Pokédex, look into Legendary Pokémon with the help of the merchant Volo, who is very learned in the myths of the Hisui region.* Steps: 1. Meet Volo at the Heights Camp in the Obsidian Fieldlands. 2. Search for a plate in Grueling Grove in the Obsidian Fieldands. 3. Learn more from Cogita about the myths surrounding Arceus. 4. Collect the five plates that Cogita’s clues point toward. Next mission: Can be done in any order: - #21: The Plate of the Lakes - #22: The Plate of Firespit Island - #23: The Plate of Moonview Arena - #24: The Plate of Snowpoint Temple - #25: The Plate of Prelude Beach"
      ],
      [
        "#3: The Basics of Crafting",
        59.3,
        28.5,
        "*You’ve cleared your trial and joined the Survey Corps. Now it’s time to acquire the skills you’ll need as a recruit. Learn about crafting items to use on your missions.* Steps: 1. Visit the craftworks to learn how to craft items. 2. Use the workbench to make one or more Poké Balls. Next mission: #4: Getting to Work on Research Tasks"
      ],
      [
        "#4: Getting to Work on Research Tasks",
        45.3,
        29.9,
        "*In order to complete the Pokédex, you’ll need to accomplish research tasks set by Professor Laventon. Speak to the professor to learn more.* Steps: 1. Head to the Obsidian Fieldlands and speak to Professor Laventon about research tasks. 2. Follow Akari/Rei to learn some tips for carrying out research tasks. 3. Report your research tasks to Professor Laventon and earn a sufficient number of Pokémon research points (500). 4. Let Captain Cyllene know that you’ve earned enough Pokémon research points to move up to the next rank. Next mission: #5: A Request from Mai"
      ],
      [
        "#5: A Request from Mai",
        34.0,
        25.1,
        "*It seems the Galaxy Team has gotten a request from Mai of the Diamond Clan. Go hear more about it and lend her your help as a member of the Survey Corps.* Steps: 1. Meet Akari/Rei at the training grounds. 2. Have a battle with Akari/Rei before you start your work for the day. 3. Go to the Obsidian Fieldlands to meet Mai of the Diamond Clan. 4. Defeat Mai in battle to prove your strength to her. 5. Make your way to Deertrack Heights, where an alpha Pokémon is causing trouble. 6. Battle the alpha Pokémon causing trouble upon Deertrack Heights. Next mission: #6: Summoned by Commander Kamado"
      ],
      [
        "#6: Summoned by Commander Kamado",
        59.8,
        27.0,
        "*Commander Kamado has summoned you, and it seems urgent. Go find out what the commander needs.* Steps: 1. Report to the commander’s office in Galaxy Hall. Next mission: #7: The Frenzy of the Lord of the Woods"
      ],
      [
        "#7: The Frenzy of the Lord of the Woods",
        51.7,
        20.3,
        "*Kleavor, the Lord of the Woods, seems to have been driven into a frenzy by a strange lightning strike. You must search for a way to quell his frenzy.* How to start: Automatic Steps: 1. Report to your captain in her office to learn more about your next mission. 2. Find your way to Grandtree Arena to speak with Lian and get information on Kleavor. 3. Head to a base camp and report what you’ve learned to Professor Laventon. 4. Return to Galaxy Hall and join the professor in his research lab to formulate a strategy. 5. Work with Lian and Irida to make “Teatime Balls” from Kleavor’s favorite foods. 6. Prove yourself to Irida by defeating her in battle. 7. Quell the frenzy of Kleavor, Lord of the Woods, at Grandtree Arena. 8. Report to Commander Kamado that you have accomplished your mission. Next mission: #8: Arezu's Predicament"
      ],
      [
        "#8: Arezu's Predicament",
        58.2,
        28.8,
        "*Arezu, a warden who serves in the Crimson Mirelands, has come to Jubilife Village. It seems she wants to talk to Commander Kamado about something.* Steps: 1. Follow Arezu to the commander’s office. 2. Complete enough research tasks to reach the rank of Second Star. 3. Head to the Solaceon Ruins, found in the Crimson Mirelands, to meet Calaba. 4. Track down the shady bandits to reclaim the Wall Fragment they stole. 5. Return to the Solaceon Ruins to tell Volo that you’ve retrieved the Wall Fragment. 6. Give the Wall Fragment to Calaba inside the Solaceon Ruins. 7. Head to Sludge Mound to find Ursaluna. 8. Report to Commander Kamado to share what you learned about Ursaluna. 9. Ride on Ursaluna and follow the blue signals to sniff out Arezu in the Crimson Mirelands. 10. Quell the frenzy of Lilligant, the Lady of the Ridge, at Brava Arena. 11. Report to Commander Kamado that you have accomplished your mission. Next mission: #9: A New Mission"
      ],
      [
        "#9: A New Mission",
        28.3,
        86.2,
        "*Commander Kamado has welcomed in new arrivals to the village. You must continue studying the Pokémon of Hisui to ensure that all can live safely here.* Steps: 1. Go to the commander’s office in Galaxy Hall to learn about your next mission. 2. Complete enough research tasks to reach the rank of Third Star. Next mission: #10: The Lordless Island"
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
    "Character": [
      [
        "Almous",
        48.1,
        41.3,
        "Character marker."
      ],
      [
        "Andra",
        46.3,
        35.0,
        "Character marker."
      ],
      [
        "Anise",
        53.8,
        48.3,
        "Character marker."
      ],
      [
        "Astair",
        54.8,
        21.8,
        "Note: Located in the Basement of the Galaxy Hall."
      ],
      [
        "Clarissa",
        41.8,
        47.0,
        "Character marker."
      ],
      [
        "Floaro",
        47.7,
        46.9,
        "Character marker."
      ],
      [
        "Ida",
        62.8,
        40.8,
        "Character marker."
      ],
      [
        "Miki",
        51.9,
        54.0,
        "Character marker."
      ],
      [
        "Morel (Village)",
        48.2,
        43.1,
        "Character marker."
      ],
      [
        "Pesselle",
        56.4,
        23.8,
        "Character marker."
      ],
      [
        "Radisa",
        44.0,
        42.7,
        "Note: Inside the 2nd house (from the North)."
      ],
      [
        "Sanqua",
        47.9,
        49.1,
        "Character marker."
      ],
      [
        "Tao Hua",
        56.3,
        21.7,
        "Note: Located in the Basement of the Galaxy Hall."
      ],
      [
        "Tomma",
        54.9,
        23.8,
        "Character marker."
      ],
      [
        "Tsumugi",
        68.4,
        28.5,
        "Character marker."
      ],
      [
        "Yota",
        68.1,
        36.4,
        "Character marker."
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

const fallbackMarkerNames = {
  "Obsidian Fieldlands":{
    Legendary:["Mesprit","Landorus","Shaymin"],
    Noble:["Kleavor"],
    Arena:["Grandtree Arena"],
    Farm:["Alpha Blissey XP route","Horseshoe Plains research loop","Ramanas Island alpha loop"]
  },
  "Crimson Mirelands":{
    Legendary:["Azelf","Enamorus"],
    Noble:["Hisuian Lilligant"],
    Arena:["Brava Arena"],
    Farm:["Scarlet Bog Ursaluna digging route"]
  },
  "Cobalt Coastlands":{
    Legendary:["Heatran","Thundurus","Manaphy and Phione"],
    Noble:["Hisuian Arcanine"],
    Arena:["Molten Arena"],
    Farm:["Seagrass Haven pearl route","Growlithe route"]
  },
  "Coronet Highlands":{
    Legendary:["Cresselia","Darkrai"],
    Noble:["Hisuian Electrode"],
    Arena:["Moonview Arena"],
    Farm:["Ancient Quarry alpha loop","Fabled Spring night route"]
  },
  "Alabaster Icelands":{
    Legendary:["Uxie","Regigigas","Giratina","Tornadus"],
    Noble:["Hisuian Avalugg"],
    Arena:["Icepeak Arena"],
    Farm:["Alpha Garchomp and Lucario loop","Avalanche Slopes alpha loop"]
  }
};

function nearestNamedMarker(region, kind, x, y, maxDistance = 16) {
  const candidates = (namedMapMarkerIndex[region] || []).filter(point => point[0] === kind);
  if (!candidates.length) return null;
  const nearest = candidates
    .map(point => ({point, distance:Math.hypot(point[4] - x, point[5] - y)}))
    .sort((a,b) => a.distance - b.distance)[0];
  return nearest && nearest.distance <= maxDistance ? nearest.point : null;
}

function fallbackMarkerName(region, kind, index, label, x, y) {
  const fixedName = fallbackMarkerNames[region]?.[kind]?.[index];
  if (fixedName) return fixedName;
  const nearbyArea = nearestNamedMarker(region, "Subarea", x, y, 1000);
  return nearbyArea ? `${nearbyArea[1]} ${label}` : `${region} ${label} ${index + 1}`;
}

function buildExactMapMarkers(region, groups) {
  return Object.entries(groups).flatMap(([kind, coords]) => {
    const [label, detail] = exactMapMarkerText[kind] || [kind, "Map marker."];
    return coords.map((entry, index) => {
      const named = typeof entry[0] === "string";
      const x = named ? entry[1] : entry[0];
      const y = named ? entry[2] : entry[1];
      const nearest = named ? null : nearestNamedMarker(region, kind, x, y);
      const fallbackName = fallbackMarkerName(region, kind, index, label, x, y);
      return [
        kind,
        named ? entry[0] : (nearest?.[1] || fallbackName),
        named ? region : (nearest?.[2] || region),
        named && entry[3] ? entry[3] : (nearest?.[3] || detail),
        x,
        y
      ];
    });
  });
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
  const rows = [...enabled].map(kind => `<span>${mapKindName(kind)} : ${mapData[region].filter(point => point[0] === kind).length}</span>`).join("");
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
  const enabled = new Set([...document.querySelectorAll(".map-controls input:checked")].map(i => i.value));
  const points = mapData[region].filter(p => enabled.has(p[0]));
  $("regionMap").style.setProperty("--map-aspect", MAP_ASPECTS[region] || "1 / 1");
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
