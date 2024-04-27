import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD5QSgXL27GNGyxujkGzwJ_XEx8Iu8t-1s",
  authDomain: "mymatch-dev-a2731.firebaseapp.com",
  projectId: "mymatch-dev-a2731",
  storageBucket: "mymatch-dev-a2731.appspot.com",
  messagingSenderId: "457436251230",
  appId:"1:457436251230:web:790df2cce0cf",
  measurementId: "G-TWHCV72TCN"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

// Initializing Firestore
const db = getFirestore(app);


const usersData = {
  Ninja273: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '3%', sportsmanship: 2, Network: '180ms' },
    Skill: { Rank: 'Diamond', Level: 27 },
    favoriteGameMode: 'Search and destroy'
  },
  Thunder423: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '97%', sportsmanship: 4, Network: '180ms' },
    Skill: { Rank: 'Bronze', Level: 100 },
    favoriteGameMode: 'Search and destroy'
  },
  Marauder846: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '45%', sportsmanship: 2, Network: '57ms' },
    Skill: { Rank: 'Bronze', Level: 64 },
    favoriteGameMode: 'Free for all'
  },
  Destroyer939: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '66ms' },
    Skill: { Rank: 'Gold', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Paladin467: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '22%', sportsmanship: 4, Network: '24ms' },
    Skill: { Rank: 'Diamond', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Mercenary120: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '5%', sportsmanship: 3, Network: '91ms' },
    Skill: { Rank: 'Gold', Level: 22 },
    favoriteGameMode: 'Prop hunt'
  },
  Ranger934: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '9%', sportsmanship: 1, Network: '151ms' },
    Skill: { Rank: 'Silver', Level: 88 },
    favoriteGameMode: 'Free for all'
  },
  Obsidian849: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '3%', sportsmanship: 3, Network: '72ms' },
    Skill: { Rank: 'Platinum', Level: 70 },
    favoriteGameMode: 'Free for all'
  },
  Samurai601: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '33ms' },
    Skill: { Rank: 'Silver', Level: 72 },
    favoriteGameMode: 'Free for all'
  },
  Paladin209: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '76%', sportsmanship: 3, Network: '136ms' },
    Skill: { Rank: 'Silver', Level: 16 },
    favoriteGameMode: 'Free for all'
  },
  Blade615: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 4, Network: '192ms' },
    Skill: { Rank: 'Platinum', Level: 95 },
    favoriteGameMode: 'Free for all'
  },
  Ranger618: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '98%', sportsmanship: 4, Network: '46ms' },
    Skill: { Rank: 'Diamond', Level: 64 },
    favoriteGameMode: 'Team death match'
  },
  Necromancer809: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '63%', sportsmanship: 1, Network: '112ms' },
    Skill: { Rank: 'Silver', Level: 50 },
    favoriteGameMode: 'Search and destroy'
  },
  Viking599: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '87%', sportsmanship: 2, Network: '78ms' },
    Skill: { Rank: 'Gold', Level: 77 },
    favoriteGameMode: 'Free for all'
  },
  Monarch938: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '69%', sportsmanship: 3, Network: '131ms' },
    Skill: { Rank: 'Silver', Level: 85 },
    favoriteGameMode: 'Prop hunt'
  },
  Destroyer377: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '80%', sportsmanship: 5, Network: '68ms' },
    Skill: { Rank: 'Diamond', Level: 75 },
    favoriteGameMode: 'Free for all'
  },
  Emerald844: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '24%', sportsmanship: 3, Network: '175ms' },
    Skill: { Rank: 'Platinum', Level: 16 },
    favoriteGameMode: 'Team death match'
  },
  Spectre192: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '61%', sportsmanship: 3, Network: '132ms' },
    Skill: { Rank: 'Platinum', Level: 48 },
    favoriteGameMode: 'Capture the flag'
  },
  Fox482: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '56%', sportsmanship: 3, Network: '103ms' },
    Skill: { Rank: 'Bronze', Level: 62 },
    favoriteGameMode: 'Capture the flag'
  },
  Juggernaut411: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '8%', sportsmanship: 5, Network: '95ms' },
    Skill: { Rank: 'Gold', Level: 35 },
    favoriteGameMode: 'Free for all'
  },
  Raven239: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '64%', sportsmanship: 2, Network: '192ms' },
    Skill: { Rank: 'Gold', Level: 86 },
    favoriteGameMode: 'Capture the flag'
  },
  Dragon394: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '76%', sportsmanship: 1, Network: '73ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Free for all'
  },
  Vandal314: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '67%', sportsmanship: 4, Network: '120ms' },
    Skill: { Rank: 'Silver', Level: 61 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber693: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 2, Network: '115ms' },
    Skill: { Rank: 'Bronze', Level: 83 },
    favoriteGameMode: 'Prop hunt'
  },
  Mystic979: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '2%', sportsmanship: 4, Network: '186ms' },
    Skill: { Rank: 'Diamond', Level: 96 },
    favoriteGameMode: 'Capture the flag'
  },
  Golem337: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '53%', sportsmanship: 1, Network: '124ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Capture the flag'
  },
  Venom505: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '84%', sportsmanship: 1, Network: '136ms' },
    Skill: { Rank: 'Diamond', Level: 25 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber239: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '23ms' },
    Skill: { Rank: 'Diamond', Level: 87 },
    favoriteGameMode: 'Search and destroy'
  },
  Stealth356: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '85%', sportsmanship: 2, Network: '175ms' },
    Skill: { Rank: 'Gold', Level: 79 },
    favoriteGameMode: 'Search and destroy'
  },
  Warlord918: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 2, Network: '86ms' },
    Skill: { Rank: 'Gold', Level: 68 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber957: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '48%', sportsmanship: 4, Network: '20ms' },
    Skill: { Rank: 'Silver', Level: 15 },
    favoriteGameMode: 'Prop hunt'
  },
  Savage329: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '92%', sportsmanship: 3, Network: '141ms' },
    Skill: { Rank: 'Bronze', Level: 77 },
    favoriteGameMode: 'Prop hunt'
  },
  Lightning524: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '31%', sportsmanship: 5, Network: '40ms' },
    Skill: { Rank: 'Platinum', Level: 57 },
    favoriteGameMode: 'Team death match'
  },
  Viking398: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '90%', sportsmanship: 4, Network: '89ms' },
    Skill: { Rank: 'Bronze', Level: 13 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber119: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '74%', sportsmanship: 3, Network: '25ms' },
    Skill: { Rank: 'Silver', Level: 48 },
    favoriteGameMode: 'Search and destroy'
  },
  Berserker358: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '40%', sportsmanship: 5, Network: '186ms' },
    Skill: { Rank: 'Platinum', Level: 59 },
    favoriteGameMode: 'Free for all'
  },
  Golem308: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '12%', sportsmanship: 2, Network: '20ms' },
    Skill: { Rank: 'Gold', Level: 78 },
    favoriteGameMode: 'Free for all'
  },
  Venom648: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '7%', sportsmanship: 5, Network: '60ms' },
    Skill: { Rank: 'Platinum', Level: 59 },
    favoriteGameMode: 'Search and destroy'
  },
  Viper475: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '20%', sportsmanship: 5, Network: '107ms' },
    Skill: { Rank: 'Diamond', Level: 91 },
    favoriteGameMode: 'Capture the flag'
  },
  Tempest696: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '81%', sportsmanship: 1, Network: '48ms' },
    Skill: { Rank: 'Diamond', Level: 68 },
    favoriteGameMode: 'Prop hunt'
  },
  Viking717: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '73%', sportsmanship: 2, Network: '181ms' },
    Skill: { Rank: 'Gold', Level: 87 },
    favoriteGameMode: 'Prop hunt'
  },
  Inferno984: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '21%', sportsmanship: 3, Network: '52ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Mystic249: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '74%', sportsmanship: 3, Network: '55ms' },
    Skill: { Rank: 'Gold', Level: 44 },
    favoriteGameMode: 'Search and destroy'
  },
  Fox677: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '66%', sportsmanship: 1, Network: '166ms' },
    Skill: { Rank: 'Platinum', Level: 72 },
    favoriteGameMode: 'Free for all'
  },
  Steel229: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '17%', sportsmanship: 4, Network: '100ms' },
    Skill: { Rank: 'Gold', Level: 85 },
    favoriteGameMode: 'Capture the flag'
  },
  Revenant486: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '7%', sportsmanship: 4, Network: '153ms' },
    Skill: { Rank: 'Diamond', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Ninja158: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '49%', sportsmanship: 5, Network: '189ms' },
    Skill: { Rank: 'Diamond', Level: 19 },
    favoriteGameMode: 'Team death match'
  },
  Flame848: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '79%', sportsmanship: 4, Network: '195ms' },
    Skill: { Rank: 'Diamond', Level: 99 },
    favoriteGameMode: 'Free for all'
  },
  Venom711: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '6%', sportsmanship: 1, Network: '33ms' },
    Skill: { Rank: 'Silver', Level: 20 },
    favoriteGameMode: 'Prop hunt'
  },
  Alchemist550: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '77%', sportsmanship: 1, Network: '44ms' },
    Skill: { Rank: 'Bronze', Level: 25 },
    favoriteGameMode: 'Search and destroy'
  },
  Rider487: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '57%', sportsmanship: 2, Network: '128ms' },
    Skill: { Rank: 'Diamond', Level: 35 },
    favoriteGameMode: 'Prop hunt'
  },
  Cobalt902: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '22%', sportsmanship: 2, Network: '42ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Free for all'
  },
  Enigma947: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '81%', sportsmanship: 5, Network: '95ms' },
    Skill: { Rank: 'Platinum', Level: 13 },
    favoriteGameMode: 'Capture the flag'
  },
  Glacier976: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '76%', sportsmanship: 5, Network: '35ms' },
    Skill: { Rank: 'Gold', Level: 79 },
    favoriteGameMode: 'Capture the flag'
  },
  Banshee191: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '52%', sportsmanship: 1, Network: '35ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Free for all'
  },
  Shaman643: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '79%', sportsmanship: 1, Network: '142ms' },
    Skill: { Rank: 'Platinum', Level: 13 },
    favoriteGameMode: 'Capture the flag'
  },
  Spectre846: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '8%', sportsmanship: 2, Network: '63ms' },
    Skill: { Rank: 'Platinum', Level: 32 },
    favoriteGameMode: 'Free for all'
  },
  Emerald573: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '78%', sportsmanship: 1, Network: '96ms' },
    Skill: { Rank: 'Platinum', Level: 62 },
    favoriteGameMode: 'Capture the flag'
  },
  Berserker172: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '87%', sportsmanship: 1, Network: '51ms' },
    Skill: { Rank: 'Gold', Level: 20 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber423: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '113ms' },
    Skill: { Rank: 'Gold', Level: 79 },
    favoriteGameMode: 'Free for all'
  },
  Ghost558: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '30%', sportsmanship: 5, Network: '200ms' },
    Skill: { Rank: 'Gold', Level: 82 },
    favoriteGameMode: 'Team death match'
  },
  Vindicator548: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '42%', sportsmanship: 1, Network: '93ms' },
    Skill: { Rank: 'Gold', Level: 99 },
    favoriteGameMode: 'Search and destroy'
  },
  Frost101: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '71%', sportsmanship: 5, Network: '86ms' },
    Skill: { Rank: 'Bronze', Level: 92 },
    favoriteGameMode: 'Prop hunt'
  },
  Knight687: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '91ms' },
    Skill: { Rank: 'Platinum', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Banshee200: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '12%', sportsmanship: 3, Network: '195ms' },
    Skill: { Rank: 'Platinum', Level: 20 },
    favoriteGameMode: 'Capture the flag'
  },
  Rogue155: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '45%', sportsmanship: 1, Network: '28ms' },
    Skill: { Rank: 'Diamond', Level: 17 },
    favoriteGameMode: 'Search and destroy'
  },
  Sentinel996: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '50%', sportsmanship: 5, Network: '115ms' },
    Skill: { Rank: 'Diamond', Level: 9 },
    favoriteGameMode: 'Prop hunt'
  },
  Predator286: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '48%', sportsmanship: 5, Network: '22ms' },
    Skill: { Rank: 'Diamond', Level: 46 },
    favoriteGameMode: 'Free for all'
  },
  Samurai613: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '83%', sportsmanship: 2, Network: '147ms' },
    Skill: { Rank: 'Platinum', Level: 89 },
    favoriteGameMode: 'Prop hunt'
  },
  Reaper411: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '64%', sportsmanship: 4, Network: '38ms' },
    Skill: { Rank: 'Diamond', Level: 43 },
    favoriteGameMode: 'Capture the flag'
  },
  Vandal463: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '88%', sportsmanship: 2, Network: '172ms' },
    Skill: { Rank: 'Platinum', Level: 2 },
    favoriteGameMode: 'Prop hunt'
  },
  Viper223: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '22%', sportsmanship: 4, Network: '82ms' },
    Skill: { Rank: 'Platinum', Level: 42 },
    favoriteGameMode: 'Capture the flag'
  },
  Quartz910: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '38%', sportsmanship: 3, Network: '30ms' },
    Skill: { Rank: 'Platinum', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Lightning250: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '30%', sportsmanship: 4, Network: '76ms' },
    Skill: { Rank: 'Gold', Level: 94 },
    favoriteGameMode: 'Capture the flag'
  },
  Ranger540: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '85%', sportsmanship: 2, Network: '36ms' },
    Skill: { Rank: 'Silver', Level: 89 },
    favoriteGameMode: 'Free for all'
  },
  Wraith730: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '86%', sportsmanship: 2, Network: '112ms' },
    Skill: { Rank: 'Bronze', Level: 10 },
    favoriteGameMode: 'Free for all'
  },
  Champion578: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '38%', sportsmanship: 5, Network: '184ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Team death match'
  },
  Emerald341: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 2, Network: '21ms' },
    Skill: { Rank: 'Gold', Level: 79 },
    favoriteGameMode: 'Team death match'
  },
  Samurai547: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '15%', sportsmanship: 2, Network: '34ms' },
    Skill: { Rank: 'Platinum', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Raptor981: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '45%', sportsmanship: 5, Network: '37ms' },
    Skill: { Rank: 'Diamond', Level: 29 },
    favoriteGameMode: 'Search and destroy'
  },
  Obsidian943: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '34%', sportsmanship: 5, Network: '52ms' },
    Skill: { Rank: 'Bronze', Level: 80 },
    favoriteGameMode: 'Team death match'
  },
  Crimson812: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '35%', sportsmanship: 2, Network: '191ms' },
    Skill: { Rank: 'Gold', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Guardian457: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '158ms' },
    Skill: { Rank: 'Platinum', Level: 84 },
    favoriteGameMode: 'Prop hunt'
  },
  Blizzard375: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '68%', sportsmanship: 3, Network: '90ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Capture the flag'
  },
  Knight160: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '84%', sportsmanship: 2, Network: '60ms' },
    Skill: { Rank: 'Gold', Level: 12 },
    favoriteGameMode: 'Team death match'
  },
  Maverick522: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '51%', sportsmanship: 2, Network: '62ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Free for all'
  },
  Oracle584: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '41%', sportsmanship: 1, Network: '170ms' },
    Skill: { Rank: 'Silver', Level: 80 },
    favoriteGameMode: 'Search and destroy'
  },
  Fox736: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '94%', sportsmanship: 2, Network: '78ms' },
    Skill: { Rank: 'Silver', Level: 53 },
    favoriteGameMode: 'Free for all'
  },
  Rider194: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '70%', sportsmanship: 1, Network: '174ms' },
    Skill: { Rank: 'Gold', Level: 3 },
    favoriteGameMode: 'Search and destroy'
  },
  Enigma933: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '18%', sportsmanship: 2, Network: '172ms' },
    Skill: { Rank: 'Silver', Level: 38 },
    favoriteGameMode: 'Team death match'
  },
  Blade408: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '31%', sportsmanship: 1, Network: '107ms' },
    Skill: { Rank: 'Diamond', Level: 99 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber903: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '70%', sportsmanship: 2, Network: '134ms' },
    Skill: { Rank: 'Gold', Level: 26 },
    favoriteGameMode: 'Capture the flag'
  },
  Fox531: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '6%', sportsmanship: 5, Network: '96ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Team death match'
  },
  Rogue990: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '7%', sportsmanship: 1, Network: '35ms' },
    Skill: { Rank: 'Diamond', Level: 51 },
    favoriteGameMode: 'Search and destroy'
  },
  Frost215: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '45%', sportsmanship: 3, Network: '34ms' },
    Skill: { Rank: 'Platinum', Level: 10 },
    favoriteGameMode: 'Capture the flag'
  },
  Knight745: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '199ms' },
    Skill: { Rank: 'Silver', Level: 27 },
    favoriteGameMode: 'Team death match'
  },
  Tiger791: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '25%', sportsmanship: 4, Network: '137ms' },
    Skill: { Rank: 'Platinum', Level: 84 },
    favoriteGameMode: 'Team death match'
  },
  Ghost198: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '70%', sportsmanship: 3, Network: '133ms' },
    Skill: { Rank: 'Bronze', Level: 98 },
    favoriteGameMode: 'Free for all'
  },
  Guardian149: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '47%', sportsmanship: 5, Network: '164ms' },
    Skill: { Rank: 'Gold', Level: 98 },
    favoriteGameMode: 'Capture the flag'
  },
  Glacier608: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '57%', sportsmanship: 3, Network: '49ms' },
    Skill: { Rank: 'Silver', Level: 9 },
    favoriteGameMode: 'Prop hunt'
  },
  Destroyer267: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '33%', sportsmanship: 2, Network: '174ms' },
    Skill: { Rank: 'Diamond', Level: 38 },
    favoriteGameMode: 'Free for all'
  },
  Dragon256: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '19%', sportsmanship: 4, Network: '64ms' },
    Skill: { Rank: 'Silver', Level: 71 },
    favoriteGameMode: 'Team death match'
  },
  Thunder640: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '72%', sportsmanship: 1, Network: '22ms' },
    Skill: { Rank: 'Platinum', Level: 21 },
    favoriteGameMode: 'Search and destroy'
  },
  Cleric731: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '90%', sportsmanship: 3, Network: '56ms' },
    Skill: { Rank: 'Diamond', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Ninja293: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '70%', sportsmanship: 5, Network: '167ms' },
    Skill: { Rank: 'Platinum', Level: 63 },
    favoriteGameMode: 'Team death match'
  },
  Dragon289: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '86%', sportsmanship: 3, Network: '133ms' },
    Skill: { Rank: 'Gold', Level: 48 },
    favoriteGameMode: 'Free for all'
  },
  Berserker339: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '58%', sportsmanship: 3, Network: '37ms' },
    Skill: { Rank: 'Bronze', Level: 52 },
    favoriteGameMode: 'Free for all'
  },
  Fury159: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '41%', sportsmanship: 2, Network: '120ms' },
    Skill: { Rank: 'Gold', Level: 94 },
    favoriteGameMode: 'Team death match'
  },
  Enigma880: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '94%', sportsmanship: 5, Network: '133ms' },
    Skill: { Rank: 'Bronze', Level: 36 },
    favoriteGameMode: 'Team death match'
  },
  Marauder416: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '18%', sportsmanship: 1, Network: '136ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Prop hunt'
  },
  Revenant460: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '17%', sportsmanship: 1, Network: '52ms' },
    Skill: { Rank: 'Platinum', Level: 58 },
    favoriteGameMode: 'Team death match'
  },
  Ninja232: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '20%', sportsmanship: 5, Network: '89ms' },
    Skill: { Rank: 'Platinum', Level: 38 },
    favoriteGameMode: 'Free for all'
  },
  Revenant940: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '96%', sportsmanship: 2, Network: '84ms' },
    Skill: { Rank: 'Platinum', Level: 46 },
    favoriteGameMode: 'Free for all'
  },
  Stalker458: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '38%', sportsmanship: 5, Network: '196ms' },
    Skill: { Rank: 'Gold', Level: 4 },
    favoriteGameMode: 'Capture the flag'
  },
  Viking816: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '5%', sportsmanship: 4, Network: '56ms' },
    Skill: { Rank: 'Gold', Level: 54 },
    favoriteGameMode: 'Team death match'
  },
  Elemental405: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '93%', sportsmanship: 2, Network: '161ms' },
    Skill: { Rank: 'Silver', Level: 85 },
    favoriteGameMode: 'Prop hunt'
  },
  Hawk972: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '35%', sportsmanship: 5, Network: '47ms' },
    Skill: { Rank: 'Silver', Level: 21 },
    favoriteGameMode: 'Free for all'
  },
  Spectre328: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '35%', sportsmanship: 5, Network: '85ms' },
    Skill: { Rank: 'Bronze', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Siren124: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '21%', sportsmanship: 3, Network: '140ms' },
    Skill: { Rank: 'Gold', Level: 1 },
    favoriteGameMode: 'Free for all'
  },
  Ghost457: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '4%', sportsmanship: 5, Network: '21ms' },
    Skill: { Rank: 'Gold', Level: 87 },
    favoriteGameMode: 'Free for all'
  },
  Raptor885: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '11%', sportsmanship: 3, Network: '167ms' },
    Skill: { Rank: 'Silver', Level: 66 },
    favoriteGameMode: 'Capture the flag'
  },
  Conqueror451: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 4, Network: '89ms' },
    Skill: { Rank: 'Platinum', Level: 14 },
    favoriteGameMode: 'Prop hunt'
  },
  Shadow188: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '5%', sportsmanship: 2, Network: '60ms' },
    Skill: { Rank: 'Platinum', Level: 55 },
    favoriteGameMode: 'Team death match'
  },
  Fury566: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '6%', sportsmanship: 3, Network: '117ms' },
    Skill: { Rank: 'Platinum', Level: 26 },
    favoriteGameMode: 'Team death match'
  },
  Samurai777: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 1, Network: '147ms' },
    Skill: { Rank: 'Silver', Level: 6 },
    favoriteGameMode: 'Capture the flag'
  },
  Viper752: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '33%', sportsmanship: 4, Network: '39ms' },
    Skill: { Rank: 'Diamond', Level: 17 },
    favoriteGameMode: 'Free for all'
  },
  Viking242: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '5%', sportsmanship: 2, Network: '172ms' },
    Skill: { Rank: 'Platinum', Level: 55 },
    favoriteGameMode: 'Free for all'
  },
  Phoenix289: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '1%', sportsmanship: 5, Network: '186ms' },
    Skill: { Rank: 'Diamond', Level: 66 },
    favoriteGameMode: 'Capture the flag'
  },
  Thunder788: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '27%', sportsmanship: 3, Network: '180ms' },
    Skill: { Rank: 'Bronze', Level: 93 },
    favoriteGameMode: 'Capture the flag'
  },
  Enforcer137: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '12%', sportsmanship: 5, Network: '150ms' },
    Skill: { Rank: 'Bronze', Level: 33 },
    favoriteGameMode: 'Free for all'
  },
  Cobalt749: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '71%', sportsmanship: 2, Network: '189ms' },
    Skill: { Rank: 'Gold', Level: 11 },
    favoriteGameMode: 'Prop hunt'
  },
  Vortex939: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '78%', sportsmanship: 2, Network: '173ms' },
    Skill: { Rank: 'Gold', Level: 16 },
    favoriteGameMode: 'Capture the flag'
  },
  Monarch719: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '54%', sportsmanship: 5, Network: '50ms' },
    Skill: { Rank: 'Platinum', Level: 1 },
    favoriteGameMode: 'Prop hunt'
  },
  Vandal682: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '54%', sportsmanship: 3, Network: '45ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Team death match'
  },
  Warmaster256: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '96%', sportsmanship: 3, Network: '42ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Search and destroy'
  },
  Sorcerer953: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '93%', sportsmanship: 4, Network: '49ms' },
    Skill: { Rank: 'Diamond', Level: 78 },
    favoriteGameMode: 'Free for all'
  },
  Dragon926: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '88%', sportsmanship: 2, Network: '192ms' },
    Skill: { Rank: 'Silver', Level: 69 },
    favoriteGameMode: 'Free for all'
  },
  Samurai620: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '111ms' },
    Skill: { Rank: 'Gold', Level: 100 },
    favoriteGameMode: 'Search and destroy'
  },
  Enforcer670: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '50%', sportsmanship: 5, Network: '158ms' },
    Skill: { Rank: 'Platinum', Level: 83 },
    favoriteGameMode: 'Prop hunt'
  },
  Templar222: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '4%', sportsmanship: 2, Network: '112ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Templar732: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '33%', sportsmanship: 5, Network: '100ms' },
    Skill: { Rank: 'Bronze', Level: 99 },
    favoriteGameMode: 'Capture the flag'
  },
  Fox507: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '57%', sportsmanship: 2, Network: '157ms' },
    Skill: { Rank: 'Gold', Level: 57 },
    favoriteGameMode: 'Capture the flag'
  },
  Reaper624: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '6%', sportsmanship: 3, Network: '134ms' },
    Skill: { Rank: 'Gold', Level: 60 },
    favoriteGameMode: 'Search and destroy'
  },
  Warmaster799: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '50%', sportsmanship: 3, Network: '54ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Prop hunt'
  },
  Guardian399: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '42%', sportsmanship: 4, Network: '190ms' },
    Skill: { Rank: 'Platinum', Level: 91 },
    favoriteGameMode: 'Team death match'
  },
  Stealth198: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '14%', sportsmanship: 5, Network: '96ms' },
    Skill: { Rank: 'Gold', Level: 74 },
    favoriteGameMode: 'Team death match'
  },
  Paladin999: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '14%', sportsmanship: 1, Network: '165ms' },
    Skill: { Rank: 'Diamond', Level: 14 },
    favoriteGameMode: 'Search and destroy'
  },
  Quartz561: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '52%', sportsmanship: 2, Network: '98ms' },
    Skill: { Rank: 'Diamond', Level: 52 },
    favoriteGameMode: 'Prop hunt'
  },
  Corsair780: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '39%', sportsmanship: 3, Network: '142ms' },
    Skill: { Rank: 'Diamond', Level: 69 },
    favoriteGameMode: 'Free for all'
  },
  Wolf757: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '51%', sportsmanship: 5, Network: '148ms' },
    Skill: { Rank: 'Diamond', Level: 4 },
    favoriteGameMode: 'Capture the flag'
  },
  Berserker648: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '65%', sportsmanship: 3, Network: '33ms' },
    Skill: { Rank: 'Silver', Level: 84 },
    favoriteGameMode: 'Free for all'
  },
  Warlord806: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '67%', sportsmanship: 5, Network: '131ms' },
    Skill: { Rank: 'Bronze', Level: 81 },
    favoriteGameMode: 'Team death match'
  },
  Conqueror153: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '74%', sportsmanship: 2, Network: '134ms' },
    Skill: { Rank: 'Silver', Level: 96 },
    favoriteGameMode: 'Capture the flag'
  },
  Emerald313: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '58%', sportsmanship: 1, Network: '53ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlord809: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '75%', sportsmanship: 4, Network: '134ms' },
    Skill: { Rank: 'Gold', Level: 74 },
    favoriteGameMode: 'Prop hunt'
  },
  Barbarian400: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '3%', sportsmanship: 4, Network: '25ms' },
    Skill: { Rank: 'Gold', Level: 21 },
    favoriteGameMode: 'Capture the flag'
  },
  Guardian831: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '26%', sportsmanship: 4, Network: '163ms' },
    Skill: { Rank: 'Platinum', Level: 47 },
    favoriteGameMode: 'Search and destroy'
  },
  Juggernaut772: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '90%', sportsmanship: 4, Network: '147ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Prop hunt'
  },
  Vindicator624: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '92%', sportsmanship: 1, Network: '112ms' },
    Skill: { Rank: 'Platinum', Level: 71 },
    favoriteGameMode: 'Team death match'
  },
  Ninja767: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '89%', sportsmanship: 1, Network: '24ms' },
    Skill: { Rank: 'Platinum', Level: 46 },
    favoriteGameMode: 'Free for all'
  },
  Savage729: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '12%', sportsmanship: 1, Network: '90ms' },
    Skill: { Rank: 'Bronze', Level: 90 },
    favoriteGameMode: 'Search and destroy'
  },
  Savage395: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '17%', sportsmanship: 3, Network: '36ms' },
    Skill: { Rank: 'Gold', Level: 75 },
    favoriteGameMode: 'Capture the flag'
  },
  Storm488: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '48%', sportsmanship: 4, Network: '94ms' },
    Skill: { Rank: 'Bronze', Level: 91 },
    favoriteGameMode: 'Prop hunt'
  },
  Wolf106: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '96%', sportsmanship: 1, Network: '43ms' },
    Skill: { Rank: 'Silver', Level: 50 },
    favoriteGameMode: 'Team death match'
  },
  Spectre233: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '98%', sportsmanship: 5, Network: '70ms' },
    Skill: { Rank: 'Platinum', Level: 8 },
    favoriteGameMode: 'Search and destroy'
  },
  Shadow120: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '42%', sportsmanship: 5, Network: '21ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Capture the flag'
  },
  Overlord133: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '6%', sportsmanship: 3, Network: '124ms' },
    Skill: { Rank: 'Bronze', Level: 37 },
    favoriteGameMode: 'Team death match'
  },
  Steel289: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '69%', sportsmanship: 1, Network: '135ms' },
    Skill: { Rank: 'Gold', Level: 83 },
    favoriteGameMode: 'Team death match'
  },
  Warmaster758: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '15%', sportsmanship: 1, Network: '180ms' },
    Skill: { Rank: 'Diamond', Level: 85 },
    favoriteGameMode: 'Search and destroy'
  },
  Marauder763: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '19%', sportsmanship: 3, Network: '192ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Prop hunt'
  },
  Shadow573: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '55%', sportsmanship: 3, Network: '182ms' },
    Skill: { Rank: 'Diamond', Level: 54 },
    favoriteGameMode: 'Prop hunt'
  },
  Tempest625: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '44%', sportsmanship: 3, Network: '122ms' },
    Skill: { Rank: 'Silver', Level: 57 },
    favoriteGameMode: 'Prop hunt'
  },
  Ninja534: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '72%', sportsmanship: 1, Network: '23ms' },
    Skill: { Rank: 'Bronze', Level: 7 },
    favoriteGameMode: 'Prop hunt'
  },
  Invoker332: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '40%', sportsmanship: 3, Network: '110ms' },
    Skill: { Rank: 'Gold', Level: 32 },
    favoriteGameMode: 'Capture the flag'
  },
  Tiger484: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '98%', sportsmanship: 1, Network: '25ms' },
    Skill: { Rank: 'Silver', Level: 95 },
    favoriteGameMode: 'Search and destroy'
  },
  Revenant580: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '71%', sportsmanship: 3, Network: '75ms' },
    Skill: { Rank: 'Silver', Level: 57 },
    favoriteGameMode: 'Free for all'
  },
  Berserker930: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '53%', sportsmanship: 4, Network: '119ms' },
    Skill: { Rank: 'Bronze', Level: 47 },
    favoriteGameMode: 'Team death match'
  },
  Raptor172: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '69%', sportsmanship: 4, Network: '180ms' },
    Skill: { Rank: 'Diamond', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Hunter632: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '65%', sportsmanship: 5, Network: '53ms' },
    Skill: { Rank: 'Silver', Level: 23 },
    favoriteGameMode: 'Capture the flag'
  },
  Savage586: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '15%', sportsmanship: 5, Network: '198ms' },
    Skill: { Rank: 'Silver', Level: 80 },
    favoriteGameMode: 'Free for all'
  },
  Blade508: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '21%', sportsmanship: 3, Network: '80ms' },
    Skill: { Rank: 'Bronze', Level: 81 },
    favoriteGameMode: 'Free for all'
  },
  Ninja607: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '83%', sportsmanship: 1, Network: '163ms' },
    Skill: { Rank: 'Silver', Level: 4 },
    favoriteGameMode: 'Search and destroy'
  },
  Lightning364: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '1%', sportsmanship: 3, Network: '63ms' },
    Skill: { Rank: 'Silver', Level: 11 },
    favoriteGameMode: 'Prop hunt'
  },
  Tempest748: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '25%', sportsmanship: 4, Network: '143ms' },
    Skill: { Rank: 'Diamond', Level: 14 },
    favoriteGameMode: 'Team death match'
  },
  Warlord953: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '79%', sportsmanship: 4, Network: '191ms' },
    Skill: { Rank: 'Platinum', Level: 41 },
    favoriteGameMode: 'Team death match'
  },
  Rider204: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '8%', sportsmanship: 2, Network: '129ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Prop hunt'
  },
  Marauder336: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '58%', sportsmanship: 1, Network: '129ms' },
    Skill: { Rank: 'Diamond', Level: 29 },
    favoriteGameMode: 'Search and destroy'
  },
  Onyx474: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '56%', sportsmanship: 3, Network: '79ms' },
    Skill: { Rank: 'Platinum', Level: 47 },
    favoriteGameMode: 'Free for all'
  },
  Crimson965: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '59%', sportsmanship: 1, Network: '157ms' },
    Skill: { Rank: 'Silver', Level: 94 },
    favoriteGameMode: 'Prop hunt'
  },
  Revenant594: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '34%', sportsmanship: 2, Network: '22ms' },
    Skill: { Rank: 'Gold', Level: 54 },
    favoriteGameMode: 'Prop hunt'
  },
  Shadow434: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '87%', sportsmanship: 1, Network: '200ms' },
    Skill: { Rank: 'Bronze', Level: 7 },
    favoriteGameMode: 'Capture the flag'
  },
  Quartz586: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '24%', sportsmanship: 2, Network: '65ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Free for all'
  },
  Warmaster672: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '18%', sportsmanship: 2, Network: '65ms' },
    Skill: { Rank: 'Diamond', Level: 16 },
    favoriteGameMode: 'Team death match'
  },
  Sparrow291: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '30%', sportsmanship: 4, Network: '58ms' },
    Skill: { Rank: 'Diamond', Level: 73 },
    favoriteGameMode: 'Free for all'
  },
  Obsidian273: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '77%', sportsmanship: 5, Network: '32ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Capture the flag'
  },
  Revenant364: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '94%', sportsmanship: 2, Network: '25ms' },
    Skill: { Rank: 'Gold', Level: 22 },
    favoriteGameMode: 'Prop hunt'
  },
  Monarch671: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '78%', sportsmanship: 4, Network: '138ms' },
    Skill: { Rank: 'Diamond', Level: 100 },
    favoriteGameMode: 'Search and destroy'
  },
  Destroyer725: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '88%', sportsmanship: 3, Network: '140ms' },
    Skill: { Rank: 'Platinum', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Banshee617: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '51%', sportsmanship: 4, Network: '194ms' },
    Skill: { Rank: 'Silver', Level: 84 },
    favoriteGameMode: 'Prop hunt'
  },
  Zephyr636: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '15%', sportsmanship: 2, Network: '181ms' },
    Skill: { Rank: 'Gold', Level: 35 },
    favoriteGameMode: 'Prop hunt'
  },
  Elemental876: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '34%', sportsmanship: 4, Network: '142ms' },
    Skill: { Rank: 'Gold', Level: 15 },
    favoriteGameMode: 'Free for all'
  },
  Quartz120: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '15%', sportsmanship: 2, Network: '44ms' },
    Skill: { Rank: 'Bronze', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Oracle877: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '35%', sportsmanship: 1, Network: '176ms' },
    Skill: { Rank: 'Gold', Level: 87 },
    favoriteGameMode: 'Capture the flag'
  },
  Champion996: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '5%', sportsmanship: 4, Network: '80ms' },
    Skill: { Rank: 'Gold', Level: 27 },
    favoriteGameMode: 'Search and destroy'
  },
  Panther988: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '95%', sportsmanship: 4, Network: '193ms' },
    Skill: { Rank: 'Silver', Level: 66 },
    favoriteGameMode: 'Prop hunt'
  },
  Panther176: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '22%', sportsmanship: 2, Network: '133ms' },
    Skill: { Rank: 'Bronze', Level: 86 },
    favoriteGameMode: 'Prop hunt'
  },
  Wraith788: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 1, Network: '109ms' },
    Skill: { Rank: 'Diamond', Level: 58 },
    favoriteGameMode: 'Search and destroy'
  },
  Juggernaut537: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 5, Network: '73ms' },
    Skill: { Rank: 'Diamond', Level: 44 },
    favoriteGameMode: 'Search and destroy'
  },
  Obsidian824: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '91%', sportsmanship: 4, Network: '152ms' },
    Skill: { Rank: 'Diamond', Level: 65 },
    favoriteGameMode: 'Prop hunt'
  },
  Guardian261: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '7%', sportsmanship: 4, Network: '124ms' },
    Skill: { Rank: 'Bronze', Level: 44 },
    favoriteGameMode: 'Prop hunt'
  },
  Frost232: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '36%', sportsmanship: 5, Network: '91ms' },
    Skill: { Rank: 'Gold', Level: 77 },
    favoriteGameMode: 'Capture the flag'
  },
  Corsair479: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '2%', sportsmanship: 2, Network: '79ms' },
    Skill: { Rank: 'Gold', Level: 28 },
    favoriteGameMode: 'Capture the flag'
  },
  Crimson594: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '68ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Free for all'
  },
  Amber684: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '28%', sportsmanship: 4, Network: '200ms' },
    Skill: { Rank: 'Gold', Level: 100 },
    favoriteGameMode: 'Team death match'
  },
  Overlord505: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '63%', sportsmanship: 2, Network: '120ms' },
    Skill: { Rank: 'Gold', Level: 67 },
    favoriteGameMode: 'Prop hunt'
  },
  Necromancer572: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '69%', sportsmanship: 1, Network: '117ms' },
    Skill: { Rank: 'Bronze', Level: 78 },
    favoriteGameMode: 'Prop hunt'
  },
  Emerald508: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '82%', sportsmanship: 2, Network: '53ms' },
    Skill: { Rank: 'Bronze', Level: 33 },
    favoriteGameMode: 'Free for all'
  },
  Wolf636: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '59%', sportsmanship: 3, Network: '77ms' },
    Skill: { Rank: 'Diamond', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Warlock629: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '74%', sportsmanship: 4, Network: '153ms' },
    Skill: { Rank: 'Platinum', Level: 32 },
    favoriteGameMode: 'Search and destroy'
  },
  Alchemist708: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '64%', sportsmanship: 4, Network: '72ms' },
    Skill: { Rank: 'Silver', Level: 96 },
    favoriteGameMode: 'Search and destroy'
  },
  Oracle364: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '36%', sportsmanship: 2, Network: '161ms' },
    Skill: { Rank: 'Diamond', Level: 28 },
    favoriteGameMode: 'Free for all'
  },
  Necromancer571: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '69%', sportsmanship: 5, Network: '91ms' },
    Skill: { Rank: 'Gold', Level: 100 },
    favoriteGameMode: 'Free for all'
  },
  Dragon571: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '65%', sportsmanship: 5, Network: '98ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Capture the flag'
  },
  Hawk587: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '57%', sportsmanship: 1, Network: '58ms' },
    Skill: { Rank: 'Gold', Level: 11 },
    favoriteGameMode: 'Search and destroy'
  },
  Barbarian843: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '72%', sportsmanship: 3, Network: '133ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Prop hunt'
  },
  Glacier448: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '31%', sportsmanship: 3, Network: '58ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Onyx877: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '150ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlord149: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '24%', sportsmanship: 1, Network: '148ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Prop hunt'
  },
  Crimson403: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '91%', sportsmanship: 2, Network: '175ms' },
    Skill: { Rank: 'Bronze', Level: 57 },
    favoriteGameMode: 'Team death match'
  },
  Glacier740: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '139ms' },
    Skill: { Rank: 'Platinum', Level: 60 },
    favoriteGameMode: 'Capture the flag'
  },
  Siren241: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '0%', sportsmanship: 5, Network: '120ms' },
    Skill: { Rank: 'Bronze', Level: 100 },
    favoriteGameMode: 'Prop hunt'
  },
  Flame514: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 2, Network: '96ms' },
    Skill: { Rank: 'Diamond', Level: 66 },
    favoriteGameMode: 'Capture the flag'
  },
  Hunter336: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '40%', sportsmanship: 4, Network: '33ms' },
    Skill: { Rank: 'Bronze', Level: 63 },
    favoriteGameMode: 'Capture the flag'
  },
  Warrior738: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '65%', sportsmanship: 2, Network: '122ms' },
    Skill: { Rank: 'Diamond', Level: 27 },
    favoriteGameMode: 'Free for all'
  },
  Fury984: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '42%', sportsmanship: 2, Network: '60ms' },
    Skill: { Rank: 'Silver', Level: 98 },
    favoriteGameMode: 'Search and destroy'
  },
  Enigma506: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '0%', sportsmanship: 1, Network: '126ms' },
    Skill: { Rank: 'Gold', Level: 17 },
    favoriteGameMode: 'Prop hunt'
  },
  Destroyer367: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '57%', sportsmanship: 2, Network: '102ms' },
    Skill: { Rank: 'Gold', Level: 32 },
    favoriteGameMode: 'Prop hunt'
  },
  Fury675: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '60%', sportsmanship: 5, Network: '144ms' },
    Skill: { Rank: 'Diamond', Level: 75 },
    favoriteGameMode: 'Prop hunt'
  },
  Panther308: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '21%', sportsmanship: 2, Network: '46ms' },
    Skill: { Rank: 'Gold', Level: 82 },
    favoriteGameMode: 'Prop hunt'
  },
  Destroyer794: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '90%', sportsmanship: 1, Network: '31ms' },
    Skill: { Rank: 'Bronze', Level: 2 },
    favoriteGameMode: 'Free for all'
  },
  Juggernaut622: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '75%', sportsmanship: 5, Network: '171ms' },
    Skill: { Rank: 'Diamond', Level: 56 },
    favoriteGameMode: 'Capture the flag'
  },
  Flame531: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '58%', sportsmanship: 5, Network: '169ms' },
    Skill: { Rank: 'Platinum', Level: 51 },
    favoriteGameMode: 'Free for all'
  },
  Steel630: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '70%', sportsmanship: 2, Network: '170ms' },
    Skill: { Rank: 'Gold', Level: 92 },
    favoriteGameMode: 'Prop hunt'
  },
  Panther419: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '48%', sportsmanship: 3, Network: '169ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Mercenary373: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '13%', sportsmanship: 3, Network: '198ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Zephyr903: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '29%', sportsmanship: 5, Network: '60ms' },
    Skill: { Rank: 'Gold', Level: 99 },
    favoriteGameMode: 'Capture the flag'
  },
  Colossus711: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '54%', sportsmanship: 1, Network: '139ms' },
    Skill: { Rank: 'Diamond', Level: 28 },
    favoriteGameMode: 'Search and destroy'
  },
  Inferno291: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '44%', sportsmanship: 1, Network: '46ms' },
    Skill: { Rank: 'Diamond', Level: 58 },
    favoriteGameMode: 'Capture the flag'
  },
  Thunder584: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '25%', sportsmanship: 3, Network: '109ms' },
    Skill: { Rank: 'Gold', Level: 23 },
    favoriteGameMode: 'Search and destroy'
  },
  Elemental887: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '36%', sportsmanship: 3, Network: '113ms' },
    Skill: { Rank: 'Diamond', Level: 53 },
    favoriteGameMode: 'Team death match'
  },
  Blizzard999: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '20%', sportsmanship: 2, Network: '155ms' },
    Skill: { Rank: 'Gold', Level: 7 },
    favoriteGameMode: 'Capture the flag'
  },
  Cleric630: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '61%', sportsmanship: 2, Network: '39ms' },
    Skill: { Rank: 'Platinum', Level: 40 },
    favoriteGameMode: 'Capture the flag'
  },
  Invoker967: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '6%', sportsmanship: 2, Network: '178ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Search and destroy'
  },
  Savage907: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '49%', sportsmanship: 5, Network: '22ms' },
    Skill: { Rank: 'Diamond', Level: 32 },
    favoriteGameMode: 'Capture the flag'
  },
  Juggernaut293: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '75%', sportsmanship: 2, Network: '120ms' },
    Skill: { Rank: 'Gold', Level: 100 },
    favoriteGameMode: 'Team death match'
  },
  Thunder449: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '4%', sportsmanship: 5, Network: '168ms' },
    Skill: { Rank: 'Gold', Level: 61 },
    favoriteGameMode: 'Team death match'
  },
  Juggernaut655: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '19%', sportsmanship: 2, Network: '95ms' },
    Skill: { Rank: 'Silver', Level: 34 },
    favoriteGameMode: 'Prop hunt'
  },
  Glacier844: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '96%', sportsmanship: 2, Network: '188ms' },
    Skill: { Rank: 'Silver', Level: 63 },
    favoriteGameMode: 'Capture the flag'
  },
  Shaman893: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '71%', sportsmanship: 1, Network: '26ms' },
    Skill: { Rank: 'Diamond', Level: 51 },
    favoriteGameMode: 'Search and destroy'
  },
  Warlord992: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '91%', sportsmanship: 3, Network: '140ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Capture the flag'
  },
  Warrior215: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '29%', sportsmanship: 5, Network: '192ms' },
    Skill: { Rank: 'Silver', Level: 63 },
    favoriteGameMode: 'Search and destroy'
  },
  Oracle217: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '92%', sportsmanship: 3, Network: '101ms' },
    Skill: { Rank: 'Silver', Level: 50 },
    favoriteGameMode: 'Search and destroy'
  },
  Revenant316: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '79%', sportsmanship: 5, Network: '186ms' },
    Skill: { Rank: 'Diamond', Level: 90 },
    favoriteGameMode: 'Team death match'
  },
  Zephyr790: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '34%', sportsmanship: 1, Network: '159ms' },
    Skill: { Rank: 'Bronze', Level: 51 },
    favoriteGameMode: 'Free for all'
  },
  Raven201: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '84%', sportsmanship: 5, Network: '185ms' },
    Skill: { Rank: 'Platinum', Level: 40 },
    favoriteGameMode: 'Team death match'
  },
  Corsair311: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '80%', sportsmanship: 5, Network: '95ms' },
    Skill: { Rank: 'Bronze', Level: 43 },
    favoriteGameMode: 'Team death match'
  },
  Blizzard628: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '16%', sportsmanship: 2, Network: '112ms' },
    Skill: { Rank: 'Silver', Level: 88 },
    favoriteGameMode: 'Free for all'
  },
  Wraith778: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '69%', sportsmanship: 4, Network: '167ms' },
    Skill: { Rank: 'Diamond', Level: 86 },
    favoriteGameMode: 'Free for all'
  },
  Monarch654: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '88%', sportsmanship: 5, Network: '66ms' },
    Skill: { Rank: 'Bronze', Level: 14 },
    favoriteGameMode: 'Free for all'
  },
  Ranger139: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '71%', sportsmanship: 5, Network: '112ms' },
    Skill: { Rank: 'Platinum', Level: 66 },
    favoriteGameMode: 'Capture the flag'
  },
  Alchemist904: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '98%', sportsmanship: 2, Network: '181ms' },
    Skill: { Rank: 'Silver', Level: 24 },
    favoriteGameMode: 'Free for all'
  },
  Shaman816: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '28%', sportsmanship: 5, Network: '116ms' },
    Skill: { Rank: 'Bronze', Level: 96 },
    favoriteGameMode: 'Free for all'
  },
  Wolf517: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '98%', sportsmanship: 3, Network: '69ms' },
    Skill: { Rank: 'Silver', Level: 81 },
    favoriteGameMode: 'Prop hunt'
  },
  Venom689: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '0%', sportsmanship: 5, Network: '25ms' },
    Skill: { Rank: 'Gold', Level: 41 },
    favoriteGameMode: 'Search and destroy'
  },
  Overlord852: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '88%', sportsmanship: 5, Network: '132ms' },
    Skill: { Rank: 'Platinum', Level: 84 },
    favoriteGameMode: 'Free for all'
  },
  Viking692: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '48%', sportsmanship: 1, Network: '103ms' },
    Skill: { Rank: 'Platinum', Level: 27 },
    favoriteGameMode: 'Search and destroy'
  },
  Guardian622: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '23%', sportsmanship: 4, Network: '142ms' },
    Skill: { Rank: 'Silver', Level: 24 },
    favoriteGameMode: 'Free for all'
  },
  Ninja822: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '51%', sportsmanship: 1, Network: '103ms' },
    Skill: { Rank: 'Platinum', Level: 45 },
    favoriteGameMode: 'Search and destroy'
  },
  Champion149: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '71%', sportsmanship: 5, Network: '26ms' },
    Skill: { Rank: 'Diamond', Level: 14 },
    favoriteGameMode: 'Team death match'
  },
  Invoker925: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '17%', sportsmanship: 4, Network: '94ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Search and destroy'
  },
  Alchemist610: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '65%', sportsmanship: 5, Network: '120ms' },
    Skill: { Rank: 'Platinum', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Monarch722: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '47%', sportsmanship: 1, Network: '176ms' },
    Skill: { Rank: 'Gold', Level: 61 },
    favoriteGameMode: 'Free for all'
  },
  Knight295: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '17%', sportsmanship: 5, Network: '108ms' },
    Skill: { Rank: 'Gold', Level: 98 },
    favoriteGameMode: 'Search and destroy'
  },
  Ninja924: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '41%', sportsmanship: 5, Network: '164ms' },
    Skill: { Rank: 'Diamond', Level: 61 },
    favoriteGameMode: 'Prop hunt'
  },
  Mercenary170: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '14%', sportsmanship: 3, Network: '44ms' },
    Skill: { Rank: 'Silver', Level: 45 },
    favoriteGameMode: 'Free for all'
  },
  Alchemist972: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '13%', sportsmanship: 2, Network: '60ms' },
    Skill: { Rank: 'Bronze', Level: 8 },
    favoriteGameMode: 'Capture the flag'
  },
  Paladin626: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '37%', sportsmanship: 2, Network: '178ms' },
    Skill: { Rank: 'Diamond', Level: 63 },
    favoriteGameMode: 'Prop hunt'
  },
  Storm543: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '52%', sportsmanship: 4, Network: '131ms' },
    Skill: { Rank: 'Bronze', Level: 16 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber879: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '60%', sportsmanship: 3, Network: '132ms' },
    Skill: { Rank: 'Bronze', Level: 94 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber851: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '118ms' },
    Skill: { Rank: 'Silver', Level: 20 },
    favoriteGameMode: 'Team death match'
  },
  Predator312: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '51%', sportsmanship: 1, Network: '182ms' },
    Skill: { Rank: 'Platinum', Level: 95 },
    favoriteGameMode: 'Search and destroy'
  },
  Vortex523: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '90%', sportsmanship: 3, Network: '156ms' },
    Skill: { Rank: 'Bronze', Level: 80 },
    favoriteGameMode: 'Free for all'
  },
  Maverick452: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '73%', sportsmanship: 2, Network: '106ms' },
    Skill: { Rank: 'Diamond', Level: 88 },
    favoriteGameMode: 'Team death match'
  },
  Elemental202: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '1%', sportsmanship: 4, Network: '56ms' },
    Skill: { Rank: 'Bronze', Level: 10 },
    favoriteGameMode: 'Prop hunt'
  },
  Gryphon116: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '17%', sportsmanship: 5, Network: '88ms' },
    Skill: { Rank: 'Diamond', Level: 41 },
    favoriteGameMode: 'Free for all'
  },
  Ninja470: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '47%', sportsmanship: 5, Network: '116ms' },
    Skill: { Rank: 'Diamond', Level: 14 },
    favoriteGameMode: 'Team death match'
  },
  Gryphon735: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '77%', sportsmanship: 4, Network: '106ms' },
    Skill: { Rank: 'Diamond', Level: 59 },
    favoriteGameMode: 'Search and destroy'
  },
  Juggernaut137: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '54%', sportsmanship: 3, Network: '52ms' },
    Skill: { Rank: 'Bronze', Level: 43 },
    favoriteGameMode: 'Team death match'
  },
  Wolf217: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '12%', sportsmanship: 4, Network: '140ms' },
    Skill: { Rank: 'Platinum', Level: 15 },
    favoriteGameMode: 'Team death match'
  },
  Raptor100: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '82%', sportsmanship: 3, Network: '143ms' },
    Skill: { Rank: 'Bronze', Level: 36 },
    favoriteGameMode: 'Free for all'
  },
  Knight400: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '59%', sportsmanship: 1, Network: '72ms' },
    Skill: { Rank: 'Diamond', Level: 87 },
    favoriteGameMode: 'Free for all'
  },
  Steel286: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '61%', sportsmanship: 1, Network: '144ms' },
    Skill: { Rank: 'Gold', Level: 55 },
    favoriteGameMode: 'Free for all'
  },
  Barbarian485: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '23%', sportsmanship: 2, Network: '70ms' },
    Skill: { Rank: 'Silver', Level: 3 },
    favoriteGameMode: 'Capture the flag'
  },
  Maverick289: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '82%', sportsmanship: 3, Network: '119ms' },
    Skill: { Rank: 'Bronze', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Lightning808: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '76%', sportsmanship: 4, Network: '98ms' },
    Skill: { Rank: 'Bronze', Level: 56 },
    favoriteGameMode: 'Capture the flag'
  },
  Conqueror754: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '71%', sportsmanship: 5, Network: '79ms' },
    Skill: { Rank: 'Gold', Level: 25 },
    favoriteGameMode: 'Capture the flag'
  },
  Shaman842: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 1, Network: '74ms' },
    Skill: { Rank: 'Gold', Level: 65 },
    favoriteGameMode: 'Search and destroy'
  },
  Fury236: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '99%', sportsmanship: 1, Network: '148ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Team death match'
  },
  Zephyr256: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '77%', sportsmanship: 5, Network: '155ms' },
    Skill: { Rank: 'Diamond', Level: 29 },
    favoriteGameMode: 'Free for all'
  },
  Warlock401: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '55%', sportsmanship: 4, Network: '136ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Capture the flag'
  },
  Glacier995: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '57%', sportsmanship: 3, Network: '170ms' },
    Skill: { Rank: 'Platinum', Level: 27 },
    favoriteGameMode: 'Prop hunt'
  },
  Panther347: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '8%', sportsmanship: 2, Network: '189ms' },
    Skill: { Rank: 'Silver', Level: 69 },
    favoriteGameMode: 'Prop hunt'
  },
  Obsidian861: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '4%', sportsmanship: 4, Network: '183ms' },
    Skill: { Rank: 'Diamond', Level: 77 },
    favoriteGameMode: 'Free for all'
  },
  Banshee697: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '97%', sportsmanship: 3, Network: '128ms' },
    Skill: { Rank: 'Diamond', Level: 24 },
    favoriteGameMode: 'Prop hunt'
  },
  Mystic291: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '5%', sportsmanship: 5, Network: '147ms' },
    Skill: { Rank: 'Diamond', Level: 6 },
    favoriteGameMode: 'Search and destroy'
  },
  Venom761: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '90%', sportsmanship: 2, Network: '40ms' },
    Skill: { Rank: 'Bronze', Level: 89 },
    favoriteGameMode: 'Capture the flag'
  },
  Overlord700: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '28%', sportsmanship: 5, Network: '107ms' },
    Skill: { Rank: 'Diamond', Level: 59 },
    favoriteGameMode: 'Free for all'
  },
  Warrior276: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '84%', sportsmanship: 3, Network: '137ms' },
    Skill: { Rank: 'Diamond', Level: 65 },
    favoriteGameMode: 'Free for all'
  },
  Vindicator346: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '71%', sportsmanship: 4, Network: '101ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Capture the flag'
  },
  Rogue989: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '21%', sportsmanship: 3, Network: '152ms' },
    Skill: { Rank: 'Bronze', Level: 94 },
    favoriteGameMode: 'Prop hunt'
  },
  Blizzard368: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '90%', sportsmanship: 4, Network: '70ms' },
    Skill: { Rank: 'Platinum', Level: 98 },
    favoriteGameMode: 'Team death match'
  },
  Siren774: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '46%', sportsmanship: 2, Network: '170ms' },
    Skill: { Rank: 'Platinum', Level: 28 },
    favoriteGameMode: 'Search and destroy'
  },
  Crimson383: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '49%', sportsmanship: 5, Network: '43ms' },
    Skill: { Rank: 'Silver', Level: 68 },
    favoriteGameMode: 'Capture the flag'
  },
  Cobalt530: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '49%', sportsmanship: 3, Network: '35ms' },
    Skill: { Rank: 'Bronze', Level: 30 },
    favoriteGameMode: 'Free for all'
  },
  Vandal687: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '40%', sportsmanship: 3, Network: '181ms' },
    Skill: { Rank: 'Silver', Level: 53 },
    favoriteGameMode: 'Team death match'
  },
  Vindicator745: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '82%', sportsmanship: 5, Network: '140ms' },
    Skill: { Rank: 'Diamond', Level: 88 },
    favoriteGameMode: 'Free for all'
  },
  Quartz299: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '6%', sportsmanship: 1, Network: '36ms' },
    Skill: { Rank: 'Platinum', Level: 23 },
    favoriteGameMode: 'Search and destroy'
  },
  Sorcerer184: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '19%', sportsmanship: 3, Network: '141ms' },
    Skill: { Rank: 'Silver', Level: 48 },
    favoriteGameMode: 'Search and destroy'
  },
  Gale566: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 5, Network: '47ms' },
    Skill: { Rank: 'Silver', Level: 55 },
    favoriteGameMode: 'Free for all'
  },
  Fox200: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '75%', sportsmanship: 1, Network: '156ms' },
    Skill: { Rank: 'Gold', Level: 7 },
    favoriteGameMode: 'Team death match'
  },
  Zephyr848: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '66%', sportsmanship: 1, Network: '129ms' },
    Skill: { Rank: 'Diamond', Level: 95 },
    favoriteGameMode: 'Free for all'
  },
  Stalker213: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '35%', sportsmanship: 5, Network: '183ms' },
    Skill: { Rank: 'Bronze', Level: 93 },
    favoriteGameMode: 'Free for all'
  },
  Fox612: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '76%', sportsmanship: 4, Network: '136ms' },
    Skill: { Rank: 'Silver', Level: 22 },
    favoriteGameMode: 'Prop hunt'
  },
  Venom563: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '7%', sportsmanship: 2, Network: '158ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Capture the flag'
  },
  Warrior182: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '82%', sportsmanship: 5, Network: '24ms' },
    Skill: { Rank: 'Bronze', Level: 99 },
    favoriteGameMode: 'Search and destroy'
  },
  Siren119: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '32%', sportsmanship: 2, Network: '173ms' },
    Skill: { Rank: 'Platinum', Level: 19 },
    favoriteGameMode: 'Capture the flag'
  },
  Ninja136: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 5, Network: '177ms' },
    Skill: { Rank: 'Bronze', Level: 33 },
    favoriteGameMode: 'Team death match'
  },
  Guardian838: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 4, Network: '37ms' },
    Skill: { Rank: 'Gold', Level: 40 },
    favoriteGameMode: 'Team death match'
  },
  Berserker602: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '56%', sportsmanship: 2, Network: '177ms' },
    Skill: { Rank: 'Bronze', Level: 56 },
    favoriteGameMode: 'Search and destroy'
  },
  Ghost637: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '65%', sportsmanship: 5, Network: '52ms' },
    Skill: { Rank: 'Silver', Level: 90 },
    favoriteGameMode: 'Free for all'
  },
  Sentinel654: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '9%', sportsmanship: 1, Network: '141ms' },
    Skill: { Rank: 'Gold', Level: 86 },
    favoriteGameMode: 'Search and destroy'
  },
  Fury375: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '45%', sportsmanship: 2, Network: '30ms' },
    Skill: { Rank: 'Gold', Level: 15 },
    favoriteGameMode: 'Prop hunt'
  },
  Guardian873: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '42%', sportsmanship: 4, Network: '21ms' },
    Skill: { Rank: 'Platinum', Level: 70 },
    favoriteGameMode: 'Prop hunt'
  },
  Golem940: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '71%', sportsmanship: 5, Network: '132ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Search and destroy'
  },
  Dragon759: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '45%', sportsmanship: 1, Network: '54ms' },
    Skill: { Rank: 'Gold', Level: 90 },
    favoriteGameMode: 'Capture the flag'
  },
  Vandal595: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '87%', sportsmanship: 1, Network: '103ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Search and destroy'
  },
  Juggernaut252: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '41%', sportsmanship: 2, Network: '179ms' },
    Skill: { Rank: 'Bronze', Level: 15 },
    favoriteGameMode: 'Capture the flag'
  },
  Stalker103: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '62%', sportsmanship: 4, Network: '123ms' },
    Skill: { Rank: 'Diamond', Level: 6 },
    favoriteGameMode: 'Prop hunt'
  },
  Conqueror934: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '45%', sportsmanship: 1, Network: '52ms' },
    Skill: { Rank: 'Platinum', Level: 50 },
    favoriteGameMode: 'Free for all'
  },
  Stalker494: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '21%', sportsmanship: 4, Network: '130ms' },
    Skill: { Rank: 'Gold', Level: 78 },
    favoriteGameMode: 'Free for all'
  },
  Paladin450: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '4%', sportsmanship: 3, Network: '171ms' },
    Skill: { Rank: 'Gold', Level: 52 },
    favoriteGameMode: 'Free for all'
  },
  Tempest341: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '34%', sportsmanship: 3, Network: '137ms' },
    Skill: { Rank: 'Gold', Level: 19 },
    favoriteGameMode: 'Capture the flag'
  },
  Mystic364: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '60%', sportsmanship: 3, Network: '150ms' },
    Skill: { Rank: 'Gold', Level: 78 },
    favoriteGameMode: 'Prop hunt'
  },
  Stalker826: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '93%', sportsmanship: 5, Network: '43ms' },
    Skill: { Rank: 'Gold', Level: 40 },
    favoriteGameMode: 'Capture the flag'
  },
  Colossus933: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '57%', sportsmanship: 5, Network: '183ms' },
    Skill: { Rank: 'Silver', Level: 92 },
    favoriteGameMode: 'Capture the flag'
  },
  Ninja618: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '4%', sportsmanship: 3, Network: '196ms' },
    Skill: { Rank: 'Diamond', Level: 33 },
    favoriteGameMode: 'Search and destroy'
  },
  Storm759: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '8%', sportsmanship: 3, Network: '52ms' },
    Skill: { Rank: 'Gold', Level: 22 },
    favoriteGameMode: 'Free for all'
  },
  Hawk593: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '65%', sportsmanship: 2, Network: '26ms' },
    Skill: { Rank: 'Bronze', Level: 30 },
    favoriteGameMode: 'Prop hunt'
  },
  Vandal305: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '7%', sportsmanship: 2, Network: '176ms' },
    Skill: { Rank: 'Diamond', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Barbarian715: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '17%', sportsmanship: 5, Network: '43ms' },
    Skill: { Rank: 'Gold', Level: 86 },
    favoriteGameMode: 'Team death match'
  },
  Venom459: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '17%', sportsmanship: 4, Network: '66ms' },
    Skill: { Rank: 'Gold', Level: 71 },
    favoriteGameMode: 'Free for all'
  },
  Crimson865: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 2, Network: '190ms' },
    Skill: { Rank: 'Gold', Level: 34 },
    favoriteGameMode: 'Free for all'
  },
  Zephyr769: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '94%', sportsmanship: 5, Network: '25ms' },
    Skill: { Rank: 'Silver', Level: 75 },
    favoriteGameMode: 'Capture the flag'
  },
  Fury295: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '49%', sportsmanship: 5, Network: '174ms' },
    Skill: { Rank: 'Diamond', Level: 17 },
    favoriteGameMode: 'Team death match'
  },
  Banshee153: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '4%', sportsmanship: 2, Network: '67ms' },
    Skill: { Rank: 'Gold', Level: 56 },
    favoriteGameMode: 'Free for all'
  },
  Revenant967: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '18%', sportsmanship: 3, Network: '190ms' },
    Skill: { Rank: 'Diamond', Level: 24 },
    favoriteGameMode: 'Capture the flag'
  },
  Shaman800: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '41%', sportsmanship: 3, Network: '193ms' },
    Skill: { Rank: 'Silver', Level: 20 },
    favoriteGameMode: 'Prop hunt'
  },
  Maverick252: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '30%', sportsmanship: 4, Network: '114ms' },
    Skill: { Rank: 'Gold', Level: 37 },
    favoriteGameMode: 'Team death match'
  },
  Rider904: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '72%', sportsmanship: 5, Network: '54ms' },
    Skill: { Rank: 'Bronze', Level: 79 },
    favoriteGameMode: 'Team death match'
  },
  Tiger567: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '21%', sportsmanship: 5, Network: '151ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Capture the flag'
  },
  Fury377: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '20%', sportsmanship: 4, Network: '176ms' },
    Skill: { Rank: 'Silver', Level: 77 },
    favoriteGameMode: 'Team death match'
  },
  Vandal669: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '2%', sportsmanship: 4, Network: '38ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Team death match'
  },
  Crimson743: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '55%', sportsmanship: 1, Network: '142ms' },
    Skill: { Rank: 'Gold', Level: 99 },
    favoriteGameMode: 'Capture the flag'
  },
  Golem332: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '52%', sportsmanship: 1, Network: '167ms' },
    Skill: { Rank: 'Bronze', Level: 79 },
    favoriteGameMode: 'Capture the flag'
  },
  Viking843: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '33%', sportsmanship: 2, Network: '33ms' },
    Skill: { Rank: 'Platinum', Level: 81 },
    favoriteGameMode: 'Team death match'
  },
  Inferno915: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '58%', sportsmanship: 1, Network: '26ms' },
    Skill: { Rank: 'Silver', Level: 82 },
    favoriteGameMode: 'Search and destroy'
  },
  Enigma680: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '24%', sportsmanship: 3, Network: '130ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Search and destroy'
  },
  Ninja852: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '34%', sportsmanship: 5, Network: '30ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Prop hunt'
  },
  Storm506: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '55%', sportsmanship: 5, Network: '47ms' },
    Skill: { Rank: 'Platinum', Level: 32 },
    favoriteGameMode: 'Prop hunt'
  },
  Venom720: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 2, Network: '94ms' },
    Skill: { Rank: 'Bronze', Level: 93 },
    favoriteGameMode: 'Prop hunt'
  },
  Overlord232: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '16%', sportsmanship: 3, Network: '30ms' },
    Skill: { Rank: 'Silver', Level: 47 },
    favoriteGameMode: 'Capture the flag'
  },
  Tempest342: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '82%', sportsmanship: 2, Network: '49ms' },
    Skill: { Rank: 'Bronze', Level: 1 },
    favoriteGameMode: 'Free for all'
  },
  Warrior512: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '98%', sportsmanship: 5, Network: '178ms' },
    Skill: { Rank: 'Platinum', Level: 59 },
    favoriteGameMode: 'Prop hunt'
  },
  Spectre781: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '41%', sportsmanship: 5, Network: '177ms' },
    Skill: { Rank: 'Platinum', Level: 73 },
    favoriteGameMode: 'Prop hunt'
  },
  Samurai723: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '69%', sportsmanship: 4, Network: '199ms' },
    Skill: { Rank: 'Silver', Level: 36 },
    favoriteGameMode: 'Team death match'
  },
  Templar593: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '1%', sportsmanship: 5, Network: '140ms' },
    Skill: { Rank: 'Bronze', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Conqueror586: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '29%', sportsmanship: 1, Network: '132ms' },
    Skill: { Rank: 'Diamond', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Warmaster264: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '62%', sportsmanship: 3, Network: '103ms' },
    Skill: { Rank: 'Platinum', Level: 72 },
    favoriteGameMode: 'Capture the flag'
  },
  Fox680: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '89%', sportsmanship: 1, Network: '51ms' },
    Skill: { Rank: 'Diamond', Level: 84 },
    favoriteGameMode: 'Prop hunt'
  },
  Ghost809: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '5%', sportsmanship: 4, Network: '87ms' },
    Skill: { Rank: 'Silver', Level: 84 },
    favoriteGameMode: 'Team death match'
  },
  Marauder254: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '78%', sportsmanship: 5, Network: '194ms' },
    Skill: { Rank: 'Bronze', Level: 31 },
    favoriteGameMode: 'Search and destroy'
  },
  Warden468: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '19%', sportsmanship: 4, Network: '66ms' },
    Skill: { Rank: 'Platinum', Level: 23 },
    favoriteGameMode: 'Free for all'
  },
  Spectre363: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '43%', sportsmanship: 4, Network: '123ms' },
    Skill: { Rank: 'Bronze', Level: 23 },
    favoriteGameMode: 'Capture the flag'
  },
  Reaper422: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '21%', sportsmanship: 1, Network: '200ms' },
    Skill: { Rank: 'Silver', Level: 70 },
    favoriteGameMode: 'Prop hunt'
  },
  Invoker641: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '4%', sportsmanship: 3, Network: '120ms' },
    Skill: { Rank: 'Bronze', Level: 43 },
    favoriteGameMode: 'Prop hunt'
  },
  Champion870: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '93%', sportsmanship: 1, Network: '33ms' },
    Skill: { Rank: 'Diamond', Level: 91 },
    favoriteGameMode: 'Team death match'
  },
  Warlord281: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '29%', sportsmanship: 4, Network: '112ms' },
    Skill: { Rank: 'Silver', Level: 58 },
    favoriteGameMode: 'Capture the flag'
  },
  Samurai625: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '71%', sportsmanship: 3, Network: '74ms' },
    Skill: { Rank: 'Bronze', Level: 86 },
    favoriteGameMode: 'Capture the flag'
  },
  Alchemist145: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '20%', sportsmanship: 3, Network: '86ms' },
    Skill: { Rank: 'Gold', Level: 70 },
    favoriteGameMode: 'Team death match'
  },
  Dragon309: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '97%', sportsmanship: 1, Network: '66ms' },
    Skill: { Rank: 'Diamond', Level: 81 },
    favoriteGameMode: 'Capture the flag'
  },
  Templar471: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '36%', sportsmanship: 1, Network: '163ms' },
    Skill: { Rank: 'Bronze', Level: 80 },
    favoriteGameMode: 'Prop hunt'
  },
  Phoenix253: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '20ms' },
    Skill: { Rank: 'Diamond', Level: 77 },
    favoriteGameMode: 'Capture the flag'
  },
  Shaman347: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '62%', sportsmanship: 3, Network: '43ms' },
    Skill: { Rank: 'Bronze', Level: 43 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlock380: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '104ms' },
    Skill: { Rank: 'Bronze', Level: 98 },
    favoriteGameMode: 'Search and destroy'
  },
  Fox585: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '81%', sportsmanship: 4, Network: '114ms' },
    Skill: { Rank: 'Diamond', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Titan931: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '58%', sportsmanship: 3, Network: '65ms' },
    Skill: { Rank: 'Gold', Level: 13 },
    favoriteGameMode: 'Prop hunt'
  },
  Marauder338: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '47%', sportsmanship: 1, Network: '62ms' },
    Skill: { Rank: 'Platinum', Level: 83 },
    favoriteGameMode: 'Capture the flag'
  },
  Hawk680: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '47%', sportsmanship: 1, Network: '22ms' },
    Skill: { Rank: 'Gold', Level: 29 },
    favoriteGameMode: 'Free for all'
  },
  Enigma781: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '73%', sportsmanship: 5, Network: '112ms' },
    Skill: { Rank: 'Bronze', Level: 20 },
    favoriteGameMode: 'Search and destroy'
  },
  Viking485: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '77%', sportsmanship: 1, Network: '131ms' },
    Skill: { Rank: 'Platinum', Level: 76 },
    favoriteGameMode: 'Team death match'
  },
  Flame202: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '15%', sportsmanship: 2, Network: '187ms' },
    Skill: { Rank: 'Bronze', Level: 97 },
    favoriteGameMode: 'Capture the flag'
  },
  Maverick520: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '11%', sportsmanship: 1, Network: '64ms' },
    Skill: { Rank: 'Platinum', Level: 61 },
    favoriteGameMode: 'Team death match'
  },
  Dragon147: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '15%', sportsmanship: 1, Network: '21ms' },
    Skill: { Rank: 'Bronze', Level: 11 },
    favoriteGameMode: 'Team death match'
  },
  Blizzard260: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '13%', sportsmanship: 5, Network: '30ms' },
    Skill: { Rank: 'Silver', Level: 14 },
    favoriteGameMode: 'Search and destroy'
  },
  Raptor105: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '99%', sportsmanship: 3, Network: '75ms' },
    Skill: { Rank: 'Silver', Level: 18 },
    favoriteGameMode: 'Prop hunt'
  },
  Sapphire125: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '79%', sportsmanship: 1, Network: '81ms' },
    Skill: { Rank: 'Silver', Level: 32 },
    favoriteGameMode: 'Free for all'
  },
  Mystic288: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '97%', sportsmanship: 5, Network: '76ms' },
    Skill: { Rank: 'Diamond', Level: 71 },
    favoriteGameMode: 'Capture the flag'
  },
  Tempest716: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '44%', sportsmanship: 1, Network: '80ms' },
    Skill: { Rank: 'Gold', Level: 66 },
    favoriteGameMode: 'Capture the flag'
  },
  Wolf388: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '99%', sportsmanship: 4, Network: '139ms' },
    Skill: { Rank: 'Diamond', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Viper118: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '88%', sportsmanship: 1, Network: '157ms' },
    Skill: { Rank: 'Bronze', Level: 54 },
    favoriteGameMode: 'Capture the flag'
  },
  Hawk333: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '27%', sportsmanship: 4, Network: '83ms' },
    Skill: { Rank: 'Bronze', Level: 98 },
    favoriteGameMode: 'Team death match'
  },
  Viper198: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '63%', sportsmanship: 5, Network: '153ms' },
    Skill: { Rank: 'Gold', Level: 50 },
    favoriteGameMode: 'Capture the flag'
  },
  Tiger832: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '42%', sportsmanship: 1, Network: '132ms' },
    Skill: { Rank: 'Bronze', Level: 90 },
    favoriteGameMode: 'Prop hunt'
  },
  Tiger154: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '0%', sportsmanship: 3, Network: '20ms' },
    Skill: { Rank: 'Gold', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Mercenary944: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '15%', sportsmanship: 4, Network: '86ms' },
    Skill: { Rank: 'Bronze', Level: 56 },
    favoriteGameMode: 'Capture the flag'
  },
  Destroyer935: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '59%', sportsmanship: 3, Network: '164ms' },
    Skill: { Rank: 'Diamond', Level: 26 },
    favoriteGameMode: 'Free for all'
  },
  Obsidian458: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '41%', sportsmanship: 2, Network: '111ms' },
    Skill: { Rank: 'Silver', Level: 92 },
    favoriteGameMode: 'Prop hunt'
  },
  Warden449: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '37%', sportsmanship: 5, Network: '71ms' },
    Skill: { Rank: 'Bronze', Level: 35 },
    favoriteGameMode: 'Capture the flag'
  },
  Quartz610: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '56%', sportsmanship: 2, Network: '100ms' },
    Skill: { Rank: 'Bronze', Level: 46 },
    favoriteGameMode: 'Team death match'
  },
  Warden185: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '29%', sportsmanship: 5, Network: '37ms' },
    Skill: { Rank: 'Silver', Level: 61 },
    favoriteGameMode: 'Prop hunt'
  },
  Amber663: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '60%', sportsmanship: 3, Network: '70ms' },
    Skill: { Rank: 'Gold', Level: 30 },
    favoriteGameMode: 'Prop hunt'
  },
  Vandal469: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '44%', sportsmanship: 2, Network: '98ms' },
    Skill: { Rank: 'Platinum', Level: 81 },
    favoriteGameMode: 'Search and destroy'
  },
  Stealth954: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 2, Network: '132ms' },
    Skill: { Rank: 'Platinum', Level: 31 },
    favoriteGameMode: 'Search and destroy'
  },
  Panther926: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '41%', sportsmanship: 3, Network: '107ms' },
    Skill: { Rank: 'Diamond', Level: 45 },
    favoriteGameMode: 'Prop hunt'
  },
  Siren529: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '74%', sportsmanship: 2, Network: '21ms' },
    Skill: { Rank: 'Gold', Level: 8 },
    favoriteGameMode: 'Capture the flag'
  },
  Ghost302: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '55%', sportsmanship: 2, Network: '164ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Team death match'
  },
  Sapphire465: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '30%', sportsmanship: 4, Network: '108ms' },
    Skill: { Rank: 'Platinum', Level: 12 },
    favoriteGameMode: 'Team death match'
  },
  Raven501: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '97%', sportsmanship: 1, Network: '126ms' },
    Skill: { Rank: 'Platinum', Level: 13 },
    favoriteGameMode: 'Search and destroy'
  },
  Samurai348: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '56%', sportsmanship: 3, Network: '198ms' },
    Skill: { Rank: 'Platinum', Level: 78 },
    favoriteGameMode: 'Free for all'
  },
  Conqueror848: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '75%', sportsmanship: 4, Network: '128ms' },
    Skill: { Rank: 'Gold', Level: 5 },
    favoriteGameMode: 'Free for all'
  },
  Wraith860: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '11%', sportsmanship: 3, Network: '156ms' },
    Skill: { Rank: 'Diamond', Level: 25 },
    favoriteGameMode: 'Prop hunt'
  },
  Spectre140: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '54%', sportsmanship: 3, Network: '95ms' },
    Skill: { Rank: 'Bronze', Level: 51 },
    favoriteGameMode: 'Team death match'
  },
  Rider172: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '45%', sportsmanship: 3, Network: '114ms' },
    Skill: { Rank: 'Silver', Level: 22 },
    favoriteGameMode: 'Capture the flag'
  },
  Cobalt182: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '44%', sportsmanship: 1, Network: '56ms' },
    Skill: { Rank: 'Bronze', Level: 73 },
    favoriteGameMode: 'Search and destroy'
  },
  Revenant682: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '9%', sportsmanship: 1, Network: '122ms' },
    Skill: { Rank: 'Platinum', Level: 22 },
    favoriteGameMode: 'Prop hunt'
  },
  Berserker321: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '52%', sportsmanship: 2, Network: '42ms' },
    Skill: { Rank: 'Diamond', Level: 22 },
    favoriteGameMode: 'Search and destroy'
  },
  Sentinel132: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '67%', sportsmanship: 3, Network: '146ms' },
    Skill: { Rank: 'Gold', Level: 14 },
    favoriteGameMode: 'Team death match'
  },
  Reaper609: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '13%', sportsmanship: 3, Network: '101ms' },
    Skill: { Rank: 'Diamond', Level: 97 },
    favoriteGameMode: 'Prop hunt'
  },
  Samurai413: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '77%', sportsmanship: 2, Network: '78ms' },
    Skill: { Rank: 'Bronze', Level: 82 },
    favoriteGameMode: 'Free for all'
  },
  Guardian599: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '46%', sportsmanship: 1, Network: '110ms' },
    Skill: { Rank: 'Diamond', Level: 41 },
    favoriteGameMode: 'Team death match'
  },
  Warmaster483: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '96%', sportsmanship: 3, Network: '196ms' },
    Skill: { Rank: 'Platinum', Level: 99 },
    favoriteGameMode: 'Team death match'
  },
  Cobalt548: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '9%', sportsmanship: 3, Network: '37ms' },
    Skill: { Rank: 'Platinum', Level: 70 },
    favoriteGameMode: 'Capture the flag'
  },
  Rogue560: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '21%', sportsmanship: 4, Network: '32ms' },
    Skill: { Rank: 'Gold', Level: 40 },
    favoriteGameMode: 'Search and destroy'
  },
  Conqueror659: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '29%', sportsmanship: 3, Network: '56ms' },
    Skill: { Rank: 'Gold', Level: 62 },
    favoriteGameMode: 'Prop hunt'
  },
  Sentinel706: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '68%', sportsmanship: 1, Network: '152ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Free for all'
  },
  Dragon292: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '84%', sportsmanship: 1, Network: '59ms' },
    Skill: { Rank: 'Platinum', Level: 54 },
    favoriteGameMode: 'Capture the flag'
  },
  Fury964: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '26%', sportsmanship: 1, Network: '174ms' },
    Skill: { Rank: 'Gold', Level: 93 },
    favoriteGameMode: 'Free for all'
  },
  Predator600: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '63%', sportsmanship: 5, Network: '85ms' },
    Skill: { Rank: 'Diamond', Level: 33 },
    favoriteGameMode: 'Capture the flag'
  },
  Marauder573: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '90%', sportsmanship: 5, Network: '83ms' },
    Skill: { Rank: 'Platinum', Level: 47 },
    favoriteGameMode: 'Free for all'
  },
  Gale970: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '23%', sportsmanship: 3, Network: '42ms' },
    Skill: { Rank: 'Bronze', Level: 82 },
    favoriteGameMode: 'Capture the flag'
  },
  Paladin776: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '14%', sportsmanship: 4, Network: '65ms' },
    Skill: { Rank: 'Gold', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Emerald287: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '2%', sportsmanship: 3, Network: '84ms' },
    Skill: { Rank: 'Gold', Level: 53 },
    favoriteGameMode: 'Team death match'
  },
  Viking556: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '66%', sportsmanship: 4, Network: '70ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Search and destroy'
  },
  Paladin571: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '68%', sportsmanship: 1, Network: '50ms' },
    Skill: { Rank: 'Silver', Level: 33 },
    favoriteGameMode: 'Team death match'
  },
  Warlord737: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '36%', sportsmanship: 3, Network: '93ms' },
    Skill: { Rank: 'Diamond', Level: 48 },
    favoriteGameMode: 'Prop hunt'
  },
  Invoker596: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '72%', sportsmanship: 2, Network: '72ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Search and destroy'
  },
  Lightning108: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '93%', sportsmanship: 2, Network: '185ms' },
    Skill: { Rank: 'Bronze', Level: 19 },
    favoriteGameMode: 'Prop hunt'
  },
  Wraith530: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '49%', sportsmanship: 2, Network: '198ms' },
    Skill: { Rank: 'Silver', Level: 42 },
    favoriteGameMode: 'Team death match'
  },
  Conqueror126: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '58%', sportsmanship: 4, Network: '161ms' },
    Skill: { Rank: 'Gold', Level: 13 },
    favoriteGameMode: 'Prop hunt'
  },
  Tempest655: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '39%', sportsmanship: 3, Network: '152ms' },
    Skill: { Rank: 'Platinum', Level: 24 },
    favoriteGameMode: 'Prop hunt'
  },
  Vindicator730: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '67%', sportsmanship: 4, Network: '107ms' },
    Skill: { Rank: 'Silver', Level: 13 },
    favoriteGameMode: 'Search and destroy'
  },
  Warrior147: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '25%', sportsmanship: 3, Network: '172ms' },
    Skill: { Rank: 'Silver', Level: 48 },
    favoriteGameMode: 'Free for all'
  },
  Thunder824: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 1, Network: '149ms' },
    Skill: { Rank: 'Gold', Level: 3 },
    favoriteGameMode: 'Free for all'
  },
  Lightning733: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '24%', sportsmanship: 4, Network: '185ms' },
    Skill: { Rank: 'Gold', Level: 48 },
    favoriteGameMode: 'Team death match'
  },
  Alchemist580: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '3%', sportsmanship: 1, Network: '25ms' },
    Skill: { Rank: 'Gold', Level: 78 },
    favoriteGameMode: 'Capture the flag'
  },
  Ranger361: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '43%', sportsmanship: 3, Network: '118ms' },
    Skill: { Rank: 'Diamond', Level: 99 },
    favoriteGameMode: 'Free for all'
  },
  Berserker816: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '72%', sportsmanship: 1, Network: '95ms' },
    Skill: { Rank: 'Platinum', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Panther151: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '86%', sportsmanship: 5, Network: '86ms' },
    Skill: { Rank: 'Diamond', Level: 31 },
    favoriteGameMode: 'Search and destroy'
  },
  Oracle194: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '13%', sportsmanship: 3, Network: '89ms' },
    Skill: { Rank: 'Gold', Level: 31 },
    favoriteGameMode: 'Free for all'
  },
  Hunter938: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '44%', sportsmanship: 5, Network: '146ms' },
    Skill: { Rank: 'Platinum', Level: 61 },
    favoriteGameMode: 'Free for all'
  },
  Spectre932: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '35%', sportsmanship: 2, Network: '166ms' },
    Skill: { Rank: 'Bronze', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Rogue834: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '13%', sportsmanship: 5, Network: '104ms' },
    Skill: { Rank: 'Bronze', Level: 31 },
    favoriteGameMode: 'Capture the flag'
  },
  Warlord400: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '9%', sportsmanship: 4, Network: '166ms' },
    Skill: { Rank: 'Diamond', Level: 57 },
    favoriteGameMode: 'Prop hunt'
  },
  Tempest217: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '95%', sportsmanship: 4, Network: '77ms' },
    Skill: { Rank: 'Silver', Level: 58 },
    favoriteGameMode: 'Search and destroy'
  },
  Siren795: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '89ms' },
    Skill: { Rank: 'Silver', Level: 63 },
    favoriteGameMode: 'Capture the flag'
  },
  Spectre609: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '53%', sportsmanship: 4, Network: '177ms' },
    Skill: { Rank: 'Diamond', Level: 83 },
    favoriteGameMode: 'Capture the flag'
  },
  Mystic553: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '20%', sportsmanship: 2, Network: '117ms' },
    Skill: { Rank: 'Diamond', Level: 47 },
    favoriteGameMode: 'Team death match'
  },
  Cobalt416: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '52%', sportsmanship: 2, Network: '196ms' },
    Skill: { Rank: 'Gold', Level: 80 },
    favoriteGameMode: 'Prop hunt'
  },
  Overlord101: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '84%', sportsmanship: 3, Network: '170ms' },
    Skill: { Rank: 'Bronze', Level: 64 },
    favoriteGameMode: 'Prop hunt'
  },
  Sapphire523: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '70%', sportsmanship: 1, Network: '99ms' },
    Skill: { Rank: 'Silver', Level: 74 },
    favoriteGameMode: 'Free for all'
  },
  Guardian215: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '52%', sportsmanship: 2, Network: '122ms' },
    Skill: { Rank: 'Gold', Level: 99 },
    favoriteGameMode: 'Capture the flag'
  },
  Venom387: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '48%', sportsmanship: 1, Network: '73ms' },
    Skill: { Rank: 'Platinum', Level: 26 },
    favoriteGameMode: 'Team death match'
  },
  Lightning124: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '35%', sportsmanship: 5, Network: '52ms' },
    Skill: { Rank: 'Bronze', Level: 96 },
    favoriteGameMode: 'Capture the flag'
  },
  Sparrow946: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '6%', sportsmanship: 1, Network: '97ms' },
    Skill: { Rank: 'Silver', Level: 27 },
    favoriteGameMode: 'Free for all'
  },
  Gryphon587: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '21%', sportsmanship: 3, Network: '31ms' },
    Skill: { Rank: 'Bronze', Level: 91 },
    favoriteGameMode: 'Prop hunt'
  },
  Obsidian294: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '15%', sportsmanship: 5, Network: '24ms' },
    Skill: { Rank: 'Diamond', Level: 21 },
    favoriteGameMode: 'Capture the flag'
  },
  Gale445: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '69%', sportsmanship: 5, Network: '171ms' },
    Skill: { Rank: 'Silver', Level: 90 },
    favoriteGameMode: 'Prop hunt'
  },
  Savage270: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '21%', sportsmanship: 5, Network: '48ms' },
    Skill: { Rank: 'Platinum', Level: 60 },
    favoriteGameMode: 'Prop hunt'
  },
  Rogue782: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '1%', sportsmanship: 5, Network: '146ms' },
    Skill: { Rank: 'Diamond', Level: 12 },
    favoriteGameMode: 'Prop hunt'
  },
  Sorcerer410: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '36%', sportsmanship: 1, Network: '176ms' },
    Skill: { Rank: 'Gold', Level: 34 },
    favoriteGameMode: 'Team death match'
  },
  Elemental642: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '9%', sportsmanship: 5, Network: '125ms' },
    Skill: { Rank: 'Silver', Level: 47 },
    favoriteGameMode: 'Prop hunt'
  },
  Sapphire921: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '147ms' },
    Skill: { Rank: 'Bronze', Level: 84 },
    favoriteGameMode: 'Search and destroy'
  },
  Banshee196: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '45%', sportsmanship: 3, Network: '121ms' },
    Skill: { Rank: 'Platinum', Level: 21 },
    favoriteGameMode: 'Search and destroy'
  },
  Spectre827: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '12%', sportsmanship: 1, Network: '84ms' },
    Skill: { Rank: 'Diamond', Level: 41 },
    favoriteGameMode: 'Free for all'
  },
  Oracle468: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '26%', sportsmanship: 2, Network: '42ms' },
    Skill: { Rank: 'Bronze', Level: 4 },
    favoriteGameMode: 'Search and destroy'
  },
  Samurai362: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '49%', sportsmanship: 4, Network: '145ms' },
    Skill: { Rank: 'Platinum', Level: 6 },
    favoriteGameMode: 'Team death match'
  },
  Rider296: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '76%', sportsmanship: 5, Network: '164ms' },
    Skill: { Rank: 'Gold', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Wraith200: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '60%', sportsmanship: 5, Network: '180ms' },
    Skill: { Rank: 'Gold', Level: 21 },
    favoriteGameMode: 'Prop hunt'
  },
  Storm739: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '79%', sportsmanship: 1, Network: '106ms' },
    Skill: { Rank: 'Silver', Level: 83 },
    favoriteGameMode: 'Team death match'
  },
  Obsidian254: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '83%', sportsmanship: 2, Network: '78ms' },
    Skill: { Rank: 'Bronze', Level: 3 },
    favoriteGameMode: 'Prop hunt'
  },
  Golem589: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '67%', sportsmanship: 2, Network: '158ms' },
    Skill: { Rank: 'Gold', Level: 14 },
    favoriteGameMode: 'Capture the flag'
  },
  Vortex773: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '87%', sportsmanship: 3, Network: '97ms' },
    Skill: { Rank: 'Gold', Level: 85 },
    favoriteGameMode: 'Prop hunt'
  },
  Glacier392: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '79%', sportsmanship: 4, Network: '110ms' },
    Skill: { Rank: 'Platinum', Level: 37 },
    favoriteGameMode: 'Capture the flag'
  },
  Banshee986: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '65%', sportsmanship: 2, Network: '58ms' },
    Skill: { Rank: 'Gold', Level: 10 },
    favoriteGameMode: 'Prop hunt'
  },
  Shadow102: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '43%', sportsmanship: 1, Network: '49ms' },
    Skill: { Rank: 'Diamond', Level: 30 },
    favoriteGameMode: 'Prop hunt'
  },
  Onyx940: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '34%', sportsmanship: 5, Network: '134ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Free for all'
  },
  Guardian975: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '27%', sportsmanship: 1, Network: '194ms' },
    Skill: { Rank: 'Silver', Level: 94 },
    favoriteGameMode: 'Team death match'
  },
  Wolf447: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '177ms' },
    Skill: { Rank: 'Bronze', Level: 83 },
    favoriteGameMode: 'Free for all'
  },
  Rider202: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '91%', sportsmanship: 4, Network: '164ms' },
    Skill: { Rank: 'Gold', Level: 19 },
    favoriteGameMode: 'Capture the flag'
  },
  Blizzard885: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '69%', sportsmanship: 3, Network: '80ms' },
    Skill: { Rank: 'Platinum', Level: 16 },
    favoriteGameMode: 'Capture the flag'
  },
  Sparrow299: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '47%', sportsmanship: 4, Network: '113ms' },
    Skill: { Rank: 'Bronze', Level: 9 },
    favoriteGameMode: 'Prop hunt'
  },
  Ghost217: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '76%', sportsmanship: 3, Network: '114ms' },
    Skill: { Rank: 'Bronze', Level: 18 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber670: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '21%', sportsmanship: 4, Network: '55ms' },
    Skill: { Rank: 'Bronze', Level: 98 },
    favoriteGameMode: 'Team death match'
  },
  Guardian524: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '78%', sportsmanship: 1, Network: '179ms' },
    Skill: { Rank: 'Gold', Level: 26 },
    favoriteGameMode: 'Search and destroy'
  },
  Frost391: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '28%', sportsmanship: 1, Network: '133ms' },
    Skill: { Rank: 'Platinum', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Fox147: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '34%', sportsmanship: 2, Network: '37ms' },
    Skill: { Rank: 'Silver', Level: 33 },
    favoriteGameMode: 'Free for all'
  },
  Venom768: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '20%', sportsmanship: 5, Network: '57ms' },
    Skill: { Rank: 'Bronze', Level: 85 },
    favoriteGameMode: 'Search and destroy'
  },
  Rider912: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '10%', sportsmanship: 4, Network: '65ms' },
    Skill: { Rank: 'Gold', Level: 41 },
    favoriteGameMode: 'Capture the flag'
  },
  Spectre686: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '29%', sportsmanship: 5, Network: '172ms' },
    Skill: { Rank: 'Bronze', Level: 50 },
    favoriteGameMode: 'Search and destroy'
  },
  Monarch603: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '26%', sportsmanship: 1, Network: '131ms' },
    Skill: { Rank: 'Silver', Level: 61 },
    favoriteGameMode: 'Team death match'
  },
  Cobalt567: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 2, Network: '184ms' },
    Skill: { Rank: 'Gold', Level: 51 },
    favoriteGameMode: 'Team death match'
  },
  Warden147: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '51%', sportsmanship: 5, Network: '43ms' },
    Skill: { Rank: 'Platinum', Level: 68 },
    favoriteGameMode: 'Prop hunt'
  },
  Dragon960: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '67%', sportsmanship: 3, Network: '123ms' },
    Skill: { Rank: 'Diamond', Level: 84 },
    favoriteGameMode: 'Team death match'
  },
  Revenant708: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '14%', sportsmanship: 4, Network: '196ms' },
    Skill: { Rank: 'Platinum', Level: 5 },
    favoriteGameMode: 'Team death match'
  },
  Cobalt125: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '92%', sportsmanship: 5, Network: '153ms' },
    Skill: { Rank: 'Bronze', Level: 50 },
    favoriteGameMode: 'Team death match'
  },
  Destroyer983: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '149ms' },
    Skill: { Rank: 'Platinum', Level: 12 },
    favoriteGameMode: 'Capture the flag'
  },
  Onyx146: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '2%', sportsmanship: 1, Network: '159ms' },
    Skill: { Rank: 'Platinum', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Juggernaut766: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '57%', sportsmanship: 3, Network: '92ms' },
    Skill: { Rank: 'Bronze', Level: 98 },
    favoriteGameMode: 'Capture the flag'
  },
  Sentinel672: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '77%', sportsmanship: 5, Network: '67ms' },
    Skill: { Rank: 'Platinum', Level: 66 },
    favoriteGameMode: 'Team death match'
  },
  Phoenix238: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '92%', sportsmanship: 2, Network: '81ms' },
    Skill: { Rank: 'Bronze', Level: 67 },
    favoriteGameMode: 'Search and destroy'
  },
  Panther605: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '93%', sportsmanship: 4, Network: '135ms' },
    Skill: { Rank: 'Silver', Level: 100 },
    favoriteGameMode: 'Free for all'
  },
  Berserker111: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '57%', sportsmanship: 3, Network: '168ms' },
    Skill: { Rank: 'Platinum', Level: 19 },
    favoriteGameMode: 'Capture the flag'
  },
  Enforcer597: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '58%', sportsmanship: 5, Network: '35ms' },
    Skill: { Rank: 'Diamond', Level: 5 },
    favoriteGameMode: 'Team death match'
  },
  Elemental471: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '3%', sportsmanship: 5, Network: '109ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Capture the flag'
  },
  Frost187: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 4, Network: '132ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Search and destroy'
  },
  Stalker357: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '77%', sportsmanship: 2, Network: '69ms' },
    Skill: { Rank: 'Diamond', Level: 47 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber600: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '84%', sportsmanship: 2, Network: '193ms' },
    Skill: { Rank: 'Diamond', Level: 14 },
    favoriteGameMode: 'Search and destroy'
  },
  Ninja909: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '79%', sportsmanship: 5, Network: '148ms' },
    Skill: { Rank: 'Bronze', Level: 36 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlock368: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '25%', sportsmanship: 3, Network: '132ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Search and destroy'
  },
  Mystic759: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '26%', sportsmanship: 5, Network: '76ms' },
    Skill: { Rank: 'Silver', Level: 58 },
    favoriteGameMode: 'Free for all'
  },
  Shadow425: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '11%', sportsmanship: 3, Network: '184ms' },
    Skill: { Rank: 'Silver', Level: 70 },
    favoriteGameMode: 'Search and destroy'
  },
  Glacier661: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '167ms' },
    Skill: { Rank: 'Bronze', Level: 49 },
    favoriteGameMode: 'Search and destroy'
  },
  Maverick916: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '30%', sportsmanship: 2, Network: '95ms' },
    Skill: { Rank: 'Bronze', Level: 36 },
    favoriteGameMode: 'Team death match'
  },
  Warden222: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '49%', sportsmanship: 1, Network: '43ms' },
    Skill: { Rank: 'Platinum', Level: 9 },
    favoriteGameMode: 'Team death match'
  },
  Emerald408: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '51%', sportsmanship: 1, Network: '86ms' },
    Skill: { Rank: 'Gold', Level: 5 },
    favoriteGameMode: 'Team death match'
  },
  Obsidian104: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '145ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Cobalt939: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '64%', sportsmanship: 3, Network: '100ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Free for all'
  },
  Viking318: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '17%', sportsmanship: 5, Network: '22ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlock323: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '29%', sportsmanship: 5, Network: '94ms' },
    Skill: { Rank: 'Silver', Level: 54 },
    favoriteGameMode: 'Search and destroy'
  },
  Mercenary415: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '70%', sportsmanship: 1, Network: '55ms' },
    Skill: { Rank: 'Silver', Level: 53 },
    favoriteGameMode: 'Capture the flag'
  },
  Hawk735: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '191ms' },
    Skill: { Rank: 'Gold', Level: 65 },
    favoriteGameMode: 'Free for all'
  },
  Sentinel830: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '20%', sportsmanship: 2, Network: '138ms' },
    Skill: { Rank: 'Diamond', Level: 69 },
    favoriteGameMode: 'Search and destroy'
  },
  Revenant325: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '51%', sportsmanship: 4, Network: '143ms' },
    Skill: { Rank: 'Gold', Level: 73 },
    favoriteGameMode: 'Capture the flag'
  },
  Marauder453: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 5, Network: '187ms' },
    Skill: { Rank: 'Diamond', Level: 86 },
    favoriteGameMode: 'Team death match'
  },
  Guardian799: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '58%', sportsmanship: 4, Network: '160ms' },
    Skill: { Rank: 'Bronze', Level: 31 },
    favoriteGameMode: 'Free for all'
  },
  Crimson263: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '48%', sportsmanship: 4, Network: '57ms' },
    Skill: { Rank: 'Diamond', Level: 3 },
    favoriteGameMode: 'Team death match'
  },
  Hunter961: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '85%', sportsmanship: 1, Network: '124ms' },
    Skill: { Rank: 'Gold', Level: 41 },
    favoriteGameMode: 'Team death match'
  },
  Alchemist967: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '98%', sportsmanship: 3, Network: '198ms' },
    Skill: { Rank: 'Bronze', Level: 90 },
    favoriteGameMode: 'Capture the flag'
  },
  Savage199: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '35%', sportsmanship: 1, Network: '47ms' },
    Skill: { Rank: 'Gold', Level: 63 },
    favoriteGameMode: 'Search and destroy'
  },
  Thunder628: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '85%', sportsmanship: 1, Network: '72ms' },
    Skill: { Rank: 'Bronze', Level: 33 },
    favoriteGameMode: 'Prop hunt'
  },
  Panther776: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '65%', sportsmanship: 1, Network: '103ms' },
    Skill: { Rank: 'Gold', Level: 22 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber959: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '34%', sportsmanship: 1, Network: '150ms' },
    Skill: { Rank: 'Gold', Level: 12 },
    favoriteGameMode: 'Team death match'
  },
  Vortex585: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '37%', sportsmanship: 1, Network: '177ms' },
    Skill: { Rank: 'Silver', Level: 24 },
    favoriteGameMode: 'Team death match'
  },
  Stalker772: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '91%', sportsmanship: 4, Network: '37ms' },
    Skill: { Rank: 'Silver', Level: 33 },
    favoriteGameMode: 'Team death match'
  },
  Wraith723: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '83%', sportsmanship: 3, Network: '115ms' },
    Skill: { Rank: 'Bronze', Level: 78 },
    favoriteGameMode: 'Search and destroy'
  },
  Gale818: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '19%', sportsmanship: 5, Network: '184ms' },
    Skill: { Rank: 'Bronze', Level: 46 },
    favoriteGameMode: 'Capture the flag'
  },
  Wraith245: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '77%', sportsmanship: 1, Network: '27ms' },
    Skill: { Rank: 'Diamond', Level: 48 },
    favoriteGameMode: 'Search and destroy'
  },
  Tempest150: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '69%', sportsmanship: 3, Network: '194ms' },
    Skill: { Rank: 'Gold', Level: 60 },
    favoriteGameMode: 'Capture the flag'
  },
  Wolf295: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '8%', sportsmanship: 1, Network: '62ms' },
    Skill: { Rank: 'Platinum', Level: 90 },
    favoriteGameMode: 'Prop hunt'
  },
  Storm827: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '62%', sportsmanship: 3, Network: '180ms' },
    Skill: { Rank: 'Gold', Level: 70 },
    favoriteGameMode: 'Free for all'
  },
  Corsair850: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 3, Network: '48ms' },
    Skill: { Rank: 'Bronze', Level: 16 },
    favoriteGameMode: 'Free for all'
  },
  Corsair112: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '81%', sportsmanship: 4, Network: '102ms' },
    Skill: { Rank: 'Silver', Level: 35 },
    favoriteGameMode: 'Team death match'
  },
  Gryphon322: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '96%', sportsmanship: 5, Network: '112ms' },
    Skill: { Rank: 'Gold', Level: 43 },
    favoriteGameMode: 'Team death match'
  },
  Amber571: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '5%', sportsmanship: 3, Network: '65ms' },
    Skill: { Rank: 'Silver', Level: 64 },
    favoriteGameMode: 'Team death match'
  },
  Thunder516: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '4%', sportsmanship: 1, Network: '41ms' },
    Skill: { Rank: 'Platinum', Level: 74 },
    favoriteGameMode: 'Free for all'
  },
  Vindicator851: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '58%', sportsmanship: 3, Network: '171ms' },
    Skill: { Rank: 'Platinum', Level: 88 },
    favoriteGameMode: 'Free for all'
  },
  Overlord953: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '33%', sportsmanship: 1, Network: '200ms' },
    Skill: { Rank: 'Bronze', Level: 89 },
    favoriteGameMode: 'Team death match'
  },
  Emerald762: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '5%', sportsmanship: 3, Network: '105ms' },
    Skill: { Rank: 'Platinum', Level: 30 },
    favoriteGameMode: 'Team death match'
  },
  Siren455: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '20%', sportsmanship: 5, Network: '116ms' },
    Skill: { Rank: 'Gold', Level: 84 },
    favoriteGameMode: 'Search and destroy'
  },
  Blade486: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '18%', sportsmanship: 5, Network: '127ms' },
    Skill: { Rank: 'Platinum', Level: 80 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlord402: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '10%', sportsmanship: 4, Network: '142ms' },
    Skill: { Rank: 'Platinum', Level: 9 },
    favoriteGameMode: 'Capture the flag'
  },
  Inferno660: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '70%', sportsmanship: 5, Network: '159ms' },
    Skill: { Rank: 'Bronze', Level: 83 },
    favoriteGameMode: 'Capture the flag'
  },
  Wraith769: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '20%', sportsmanship: 5, Network: '30ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Capture the flag'
  },
  Gryphon843: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '72%', sportsmanship: 5, Network: '35ms' },
    Skill: { Rank: 'Diamond', Level: 74 },
    favoriteGameMode: 'Search and destroy'
  },
  Wolf509: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '14%', sportsmanship: 1, Network: '49ms' },
    Skill: { Rank: 'Silver', Level: 32 },
    favoriteGameMode: 'Free for all'
  },
  Oracle993: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '14%', sportsmanship: 4, Network: '162ms' },
    Skill: { Rank: 'Gold', Level: 81 },
    favoriteGameMode: 'Search and destroy'
  },
  Mercenary409: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '22%', sportsmanship: 1, Network: '89ms' },
    Skill: { Rank: 'Gold', Level: 12 },
    favoriteGameMode: 'Search and destroy'
  },
  Sentinel406: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '85%', sportsmanship: 5, Network: '99ms' },
    Skill: { Rank: 'Platinum', Level: 88 },
    favoriteGameMode: 'Prop hunt'
  },
  Fox694: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '7%', sportsmanship: 2, Network: '165ms' },
    Skill: { Rank: 'Silver', Level: 85 },
    favoriteGameMode: 'Capture the flag'
  },
  Banshee173: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '25%', sportsmanship: 4, Network: '147ms' },
    Skill: { Rank: 'Gold', Level: 38 },
    favoriteGameMode: 'Search and destroy'
  },
  Oracle756: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '79%', sportsmanship: 2, Network: '46ms' },
    Skill: { Rank: 'Silver', Level: 9 },
    favoriteGameMode: 'Team death match'
  },
  Dragon334: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '87%', sportsmanship: 5, Network: '41ms' },
    Skill: { Rank: 'Bronze', Level: 30 },
    favoriteGameMode: 'Search and destroy'
  },
  Blade842: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '10%', sportsmanship: 1, Network: '87ms' },
    Skill: { Rank: 'Silver', Level: 41 },
    favoriteGameMode: 'Search and destroy'
  },
  Warmaster426: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '3%', sportsmanship: 3, Network: '43ms' },
    Skill: { Rank: 'Bronze', Level: 51 },
    favoriteGameMode: 'Free for all'
  },
  Warlock307: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '9%', sportsmanship: 2, Network: '102ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Glacier504: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '69%', sportsmanship: 1, Network: '22ms' },
    Skill: { Rank: 'Bronze', Level: 62 },
    favoriteGameMode: 'Prop hunt'
  },
  Onyx840: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '55%', sportsmanship: 2, Network: '176ms' },
    Skill: { Rank: 'Bronze', Level: 65 },
    favoriteGameMode: 'Capture the flag'
  },
  Steel365: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '94%', sportsmanship: 2, Network: '63ms' },
    Skill: { Rank: 'Diamond', Level: 79 },
    favoriteGameMode: 'Search and destroy'
  },
  Thunder300: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '38%', sportsmanship: 3, Network: '183ms' },
    Skill: { Rank: 'Gold', Level: 92 },
    favoriteGameMode: 'Team death match'
  },
  Storm453: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '96%', sportsmanship: 1, Network: '174ms' },
    Skill: { Rank: 'Platinum', Level: 45 },
    favoriteGameMode: 'Prop hunt'
  },
  Inferno581: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '91%', sportsmanship: 1, Network: '185ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Prop hunt'
  },
  Wraith220: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '27%', sportsmanship: 5, Network: '77ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Viper369: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '38%', sportsmanship: 4, Network: '147ms' },
    Skill: { Rank: 'Silver', Level: 95 },
    favoriteGameMode: 'Search and destroy'
  },
  Knight549: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '70%', sportsmanship: 4, Network: '83ms' },
    Skill: { Rank: 'Gold', Level: 90 },
    favoriteGameMode: 'Free for all'
  },
  Warrior103: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '35%', sportsmanship: 3, Network: '25ms' },
    Skill: { Rank: 'Bronze', Level: 51 },
    favoriteGameMode: 'Free for all'
  },
  Enigma155: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '42%', sportsmanship: 2, Network: '102ms' },
    Skill: { Rank: 'Silver', Level: 72 },
    favoriteGameMode: 'Search and destroy'
  },
  Rider378: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '2%', sportsmanship: 2, Network: '39ms' },
    Skill: { Rank: 'Silver', Level: 63 },
    favoriteGameMode: 'Prop hunt'
  },
  Samurai691: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '69ms' },
    Skill: { Rank: 'Silver', Level: 33 },
    favoriteGameMode: 'Capture the flag'
  },
  Templar599: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '13%', sportsmanship: 3, Network: '177ms' },
    Skill: { Rank: 'Bronze', Level: 52 },
    favoriteGameMode: 'Prop hunt'
  },
  Vandal862: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '99%', sportsmanship: 4, Network: '194ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Team death match'
  },
  Warrior650: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '28%', sportsmanship: 5, Network: '67ms' },
    Skill: { Rank: 'Bronze', Level: 76 },
    favoriteGameMode: 'Team death match'
  },
  Berserker729: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '85%', sportsmanship: 4, Network: '135ms' },
    Skill: { Rank: 'Platinum', Level: 24 },
    favoriteGameMode: 'Team death match'
  },
  Flame475: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '12%', sportsmanship: 4, Network: '163ms' },
    Skill: { Rank: 'Silver', Level: 28 },
    favoriteGameMode: 'Capture the flag'
  },
  Conqueror356: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '127ms' },
    Skill: { Rank: 'Bronze', Level: 64 },
    favoriteGameMode: 'Search and destroy'
  },
  Monarch922: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '73%', sportsmanship: 1, Network: '181ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Free for all'
  },
  Crimson436: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '52%', sportsmanship: 2, Network: '129ms' },
    Skill: { Rank: 'Bronze', Level: 45 },
    favoriteGameMode: 'Free for all'
  },
  Warden868: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '81%', sportsmanship: 3, Network: '127ms' },
    Skill: { Rank: 'Platinum', Level: 7 },
    favoriteGameMode: 'Capture the flag'
  },
  Warden527: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '27%', sportsmanship: 5, Network: '199ms' },
    Skill: { Rank: 'Silver', Level: 90 },
    favoriteGameMode: 'Free for all'
  },
  Viking490: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '70%', sportsmanship: 2, Network: '154ms' },
    Skill: { Rank: 'Bronze', Level: 82 },
    favoriteGameMode: 'Capture the flag'
  },
  Vandal907: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '175ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Prop hunt'
  },
  Berserker383: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '17%', sportsmanship: 1, Network: '113ms' },
    Skill: { Rank: 'Bronze', Level: 32 },
    favoriteGameMode: 'Team death match'
  },
  Predator124: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '51%', sportsmanship: 3, Network: '144ms' },
    Skill: { Rank: 'Silver', Level: 9 },
    favoriteGameMode: 'Search and destroy'
  },
  Ninja743: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '65%', sportsmanship: 3, Network: '42ms' },
    Skill: { Rank: 'Silver', Level: 49 },
    favoriteGameMode: 'Capture the flag'
  },
  Fox410: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '72%', sportsmanship: 5, Network: '131ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Search and destroy'
  },
  Viking707: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '81%', sportsmanship: 3, Network: '114ms' },
    Skill: { Rank: 'Silver', Level: 58 },
    favoriteGameMode: 'Prop hunt'
  },
  Warrior674: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '66%', sportsmanship: 3, Network: '118ms' },
    Skill: { Rank: 'Gold', Level: 80 },
    favoriteGameMode: 'Search and destroy'
  },
  Shaman601: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '19%', sportsmanship: 1, Network: '66ms' },
    Skill: { Rank: 'Platinum', Level: 49 },
    favoriteGameMode: 'Team death match'
  },
  Marauder223: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '51%', sportsmanship: 5, Network: '87ms' },
    Skill: { Rank: 'Gold', Level: 57 },
    favoriteGameMode: 'Search and destroy'
  },
  Stealth548: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '62%', sportsmanship: 3, Network: '170ms' },
    Skill: { Rank: 'Bronze', Level: 74 },
    favoriteGameMode: 'Search and destroy'
  },
  Invoker575: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '100%', sportsmanship: 4, Network: '194ms' },
    Skill: { Rank: 'Platinum', Level: 93 },
    favoriteGameMode: 'Search and destroy'
  },
  Wraith270: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '18%', sportsmanship: 3, Network: '100ms' },
    Skill: { Rank: 'Platinum', Level: 27 },
    favoriteGameMode: 'Team death match'
  },
  Cobalt904: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 5, Network: '118ms' },
    Skill: { Rank: 'Diamond', Level: 29 },
    favoriteGameMode: 'Capture the flag'
  },
  Champion154: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '46%', sportsmanship: 5, Network: '153ms' },
    Skill: { Rank: 'Platinum', Level: 70 },
    favoriteGameMode: 'Prop hunt'
  },
  Hunter146: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '18%', sportsmanship: 2, Network: '129ms' },
    Skill: { Rank: 'Gold', Level: 60 },
    favoriteGameMode: 'Capture the flag'
  },
  Gale730: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '0%', sportsmanship: 1, Network: '57ms' },
    Skill: { Rank: 'Diamond', Level: 16 },
    favoriteGameMode: 'Prop hunt'
  },
  Barbarian322: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '89%', sportsmanship: 2, Network: '118ms' },
    Skill: { Rank: 'Gold', Level: 40 },
    favoriteGameMode: 'Team death match'
  },
  Tempest746: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '13%', sportsmanship: 3, Network: '46ms' },
    Skill: { Rank: 'Bronze', Level: 67 },
    favoriteGameMode: 'Team death match'
  },
  Guardian518: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '50%', sportsmanship: 5, Network: '107ms' },
    Skill: { Rank: 'Gold', Level: 12 },
    favoriteGameMode: 'Team death match'
  },
  Sapphire472: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '41%', sportsmanship: 1, Network: '89ms' },
    Skill: { Rank: 'Gold', Level: 71 },
    favoriteGameMode: 'Search and destroy'
  },
  Gale383: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '61%', sportsmanship: 3, Network: '133ms' },
    Skill: { Rank: 'Diamond', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Monarch192: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '132ms' },
    Skill: { Rank: 'Bronze', Level: 57 },
    favoriteGameMode: 'Search and destroy'
  },
  Raven574: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '20%', sportsmanship: 1, Network: '24ms' },
    Skill: { Rank: 'Gold', Level: 53 },
    favoriteGameMode: 'Capture the flag'
  },
  Colossus314: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '65%', sportsmanship: 2, Network: '107ms' },
    Skill: { Rank: 'Gold', Level: 89 },
    favoriteGameMode: 'Search and destroy'
  },
  Predator520: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '85%', sportsmanship: 3, Network: '80ms' },
    Skill: { Rank: 'Diamond', Level: 98 },
    favoriteGameMode: 'Team death match'
  },
  Knight297: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '31%', sportsmanship: 4, Network: '43ms' },
    Skill: { Rank: 'Platinum', Level: 92 },
    favoriteGameMode: 'Prop hunt'
  },
  Paladin486: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '30%', sportsmanship: 1, Network: '175ms' },
    Skill: { Rank: 'Platinum', Level: 13 },
    favoriteGameMode: 'Team death match'
  },
  Monarch126: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '136ms' },
    Skill: { Rank: 'Gold', Level: 8 },
    favoriteGameMode: 'Free for all'
  },
  Colossus818: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '96%', sportsmanship: 4, Network: '178ms' },
    Skill: { Rank: 'Gold', Level: 18 },
    favoriteGameMode: 'Free for all'
  },
  Blade538: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '39%', sportsmanship: 2, Network: '154ms' },
    Skill: { Rank: 'Silver', Level: 4 },
    favoriteGameMode: 'Search and destroy'
  },
  Thunder815: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '6%', sportsmanship: 3, Network: '104ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Free for all'
  },
  Tiger648: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '20%', sportsmanship: 1, Network: '100ms' },
    Skill: { Rank: 'Platinum', Level: 46 },
    favoriteGameMode: 'Search and destroy'
  },
  Rider803: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '58%', sportsmanship: 4, Network: '152ms' },
    Skill: { Rank: 'Platinum', Level: 61 },
    favoriteGameMode: 'Capture the flag'
  },
  Stealth750: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '46%', sportsmanship: 1, Network: '34ms' },
    Skill: { Rank: 'Bronze', Level: 56 },
    favoriteGameMode: 'Free for all'
  },
  Colossus736: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '90%', sportsmanship: 1, Network: '122ms' },
    Skill: { Rank: 'Diamond', Level: 8 },
    favoriteGameMode: 'Free for all'
  },
  Revenant925: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '75%', sportsmanship: 4, Network: '156ms' },
    Skill: { Rank: 'Gold', Level: 33 },
    favoriteGameMode: 'Capture the flag'
  },
  Monarch525: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '165ms' },
    Skill: { Rank: 'Platinum', Level: 3 },
    favoriteGameMode: 'Team death match'
  },
  Sorcerer517: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '97%', sportsmanship: 3, Network: '76ms' },
    Skill: { Rank: 'Silver', Level: 54 },
    favoriteGameMode: 'Prop hunt'
  },
  Sentinel910: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '57%', sportsmanship: 4, Network: '192ms' },
    Skill: { Rank: 'Silver', Level: 58 },
    favoriteGameMode: 'Capture the flag'
  },
  Marauder438: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '49%', sportsmanship: 3, Network: '65ms' },
    Skill: { Rank: 'Bronze', Level: 13 },
    favoriteGameMode: 'Capture the flag'
  },
  Gryphon837: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '48%', sportsmanship: 5, Network: '31ms' },
    Skill: { Rank: 'Gold', Level: 12 },
    favoriteGameMode: 'Free for all'
  },
  Vortex462: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '87%', sportsmanship: 4, Network: '184ms' },
    Skill: { Rank: 'Diamond', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Warlock775: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '37%', sportsmanship: 5, Network: '23ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Conqueror546: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '20%', sportsmanship: 3, Network: '53ms' },
    Skill: { Rank: 'Platinum', Level: 76 },
    favoriteGameMode: 'Capture the flag'
  },
  Blade301: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '6%', sportsmanship: 5, Network: '41ms' },
    Skill: { Rank: 'Silver', Level: 6 },
    favoriteGameMode: 'Capture the flag'
  },
  Reaper831: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '67%', sportsmanship: 3, Network: '187ms' },
    Skill: { Rank: 'Silver', Level: 52 },
    favoriteGameMode: 'Prop hunt'
  },
  Mercenary322: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '42%', sportsmanship: 5, Network: '139ms' },
    Skill: { Rank: 'Gold', Level: 45 },
    favoriteGameMode: 'Prop hunt'
  },
  Shaman827: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '77%', sportsmanship: 4, Network: '144ms' },
    Skill: { Rank: 'Bronze', Level: 99 },
    favoriteGameMode: 'Search and destroy'
  },
  Corsair717: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '66%', sportsmanship: 1, Network: '63ms' },
    Skill: { Rank: 'Diamond', Level: 35 },
    favoriteGameMode: 'Search and destroy'
  },
  Vindicator705: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '32%', sportsmanship: 5, Network: '61ms' },
    Skill: { Rank: 'Silver', Level: 25 },
    favoriteGameMode: 'Prop hunt'
  },
  Champion172: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '54%', sportsmanship: 4, Network: '112ms' },
    Skill: { Rank: 'Silver', Level: 30 },
    favoriteGameMode: 'Team death match'
  },
  Templar157: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '11%', sportsmanship: 4, Network: '30ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Free for all'
  },
  Elemental234: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '64%', sportsmanship: 1, Network: '55ms' },
    Skill: { Rank: 'Platinum', Level: 41 },
    favoriteGameMode: 'Capture the flag'
  },
  Warlord642: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '51%', sportsmanship: 1, Network: '128ms' },
    Skill: { Rank: 'Platinum', Level: 95 },
    favoriteGameMode: 'Team death match'
  },
  Necromancer472: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '82%', sportsmanship: 2, Network: '95ms' },
    Skill: { Rank: 'Platinum', Level: 75 },
    favoriteGameMode: 'Search and destroy'
  },
  Crimson450: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '161ms' },
    Skill: { Rank: 'Bronze', Level: 22 },
    favoriteGameMode: 'Search and destroy'
  },
  Wolf772: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '4%', sportsmanship: 3, Network: '111ms' },
    Skill: { Rank: 'Silver', Level: 66 },
    favoriteGameMode: 'Prop hunt'
  },
  Stalker261: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '19%', sportsmanship: 1, Network: '146ms' },
    Skill: { Rank: 'Silver', Level: 52 },
    favoriteGameMode: 'Team death match'
  },
  Raven393: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '37%', sportsmanship: 2, Network: '126ms' },
    Skill: { Rank: 'Diamond', Level: 97 },
    favoriteGameMode: 'Prop hunt'
  },
  Steel580: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '4%', sportsmanship: 3, Network: '80ms' },
    Skill: { Rank: 'Bronze', Level: 52 },
    favoriteGameMode: 'Capture the flag'
  },
  Hawk169: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '99%', sportsmanship: 4, Network: '66ms' },
    Skill: { Rank: 'Silver', Level: 53 },
    favoriteGameMode: 'Search and destroy'
  },
  Enforcer152: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '89%', sportsmanship: 3, Network: '42ms' },
    Skill: { Rank: 'Bronze', Level: 13 },
    favoriteGameMode: 'Prop hunt'
  },
  Stealth273: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '18%', sportsmanship: 2, Network: '170ms' },
    Skill: { Rank: 'Gold', Level: 77 },
    favoriteGameMode: 'Team death match'
  },
  Vandal867: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '95%', sportsmanship: 4, Network: '137ms' },
    Skill: { Rank: 'Bronze', Level: 15 },
    favoriteGameMode: 'Prop hunt'
  },
  Thunder717: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '4%', sportsmanship: 2, Network: '128ms' },
    Skill: { Rank: 'Platinum', Level: 99 },
    favoriteGameMode: 'Search and destroy'
  },
  Obsidian471: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '58%', sportsmanship: 1, Network: '69ms' },
    Skill: { Rank: 'Gold', Level: 19 },
    favoriteGameMode: 'Team death match'
  },
  Destroyer275: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '12%', sportsmanship: 4, Network: '156ms' },
    Skill: { Rank: 'Platinum', Level: 69 },
    favoriteGameMode: 'Free for all'
  },
  Tempest118: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '89%', sportsmanship: 1, Network: '172ms' },
    Skill: { Rank: 'Platinum', Level: 26 },
    favoriteGameMode: 'Capture the flag'
  },
  Guardian853: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '100%', sportsmanship: 5, Network: '92ms' },
    Skill: { Rank: 'Platinum', Level: 81 },
    favoriteGameMode: 'Prop hunt'
  },
  Raptor840: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '40%', sportsmanship: 5, Network: '51ms' },
    Skill: { Rank: 'Gold', Level: 39 },
    favoriteGameMode: 'Free for all'
  },
  Thunder623: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '63%', sportsmanship: 3, Network: '131ms' },
    Skill: { Rank: 'Gold', Level: 21 },
    favoriteGameMode: 'Free for all'
  },
  Gryphon737: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '86%', sportsmanship: 3, Network: '126ms' },
    Skill: { Rank: 'Bronze', Level: 87 },
    favoriteGameMode: 'Prop hunt'
  },
  Steel840: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '38%', sportsmanship: 3, Network: '51ms' },
    Skill: { Rank: 'Platinum', Level: 6 },
    favoriteGameMode: 'Team death match'
  },
  Hunter253: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '5%', sportsmanship: 1, Network: '180ms' },
    Skill: { Rank: 'Bronze', Level: 5 },
    favoriteGameMode: 'Team death match'
  },
  Tempest337: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '67%', sportsmanship: 2, Network: '114ms' },
    Skill: { Rank: 'Silver', Level: 11 },
    favoriteGameMode: 'Team death match'
  },
  Viper625: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '72%', sportsmanship: 2, Network: '89ms' },
    Skill: { Rank: 'Gold', Level: 4 },
    favoriteGameMode: 'Free for all'
  },
  Cobalt630: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '40%', sportsmanship: 5, Network: '159ms' },
    Skill: { Rank: 'Bronze', Level: 70 },
    favoriteGameMode: 'Free for all'
  },
  Corsair445: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '39%', sportsmanship: 3, Network: '94ms' },
    Skill: { Rank: 'Silver', Level: 36 },
    favoriteGameMode: 'Capture the flag'
  },
  Raven471: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '73%', sportsmanship: 2, Network: '117ms' },
    Skill: { Rank: 'Diamond', Level: 60 },
    favoriteGameMode: 'Search and destroy'
  },
  Wolf239: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '69ms' },
    Skill: { Rank: 'Silver', Level: 72 },
    favoriteGameMode: 'Search and destroy'
  },
  Enigma600: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '75%', sportsmanship: 1, Network: '28ms' },
    Skill: { Rank: 'Diamond', Level: 52 },
    favoriteGameMode: 'Search and destroy'
  },
  Raven979: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '97%', sportsmanship: 4, Network: '123ms' },
    Skill: { Rank: 'Bronze', Level: 87 },
    favoriteGameMode: 'Team death match'
  },
  Invoker761: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '25%', sportsmanship: 5, Network: '116ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Search and destroy'
  },
  Obsidian193: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '70%', sportsmanship: 5, Network: '26ms' },
    Skill: { Rank: 'Diamond', Level: 9 },
    favoriteGameMode: 'Capture the flag'
  },
  Siren859: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '74%', sportsmanship: 2, Network: '189ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Team death match'
  },
  Warlock158: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '10%', sportsmanship: 5, Network: '87ms' },
    Skill: { Rank: 'Bronze', Level: 65 },
    favoriteGameMode: 'Prop hunt'
  },
  Reaper795: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '89%', sportsmanship: 4, Network: '68ms' },
    Skill: { Rank: 'Silver', Level: 50 },
    favoriteGameMode: 'Free for all'
  },
  Rider526: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '91%', sportsmanship: 1, Network: '47ms' },
    Skill: { Rank: 'Diamond', Level: 73 },
    favoriteGameMode: 'Prop hunt'
  },
  Ninja995: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '86%', sportsmanship: 2, Network: '71ms' },
    Skill: { Rank: 'Diamond', Level: 41 },
    favoriteGameMode: 'Search and destroy'
  },
  Barbarian732: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '53%', sportsmanship: 2, Network: '151ms' },
    Skill: { Rank: 'Gold', Level: 85 },
    favoriteGameMode: 'Free for all'
  },
  Amber971: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '133ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Search and destroy'
  },
  Oracle978: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '9%', sportsmanship: 5, Network: '105ms' },
    Skill: { Rank: 'Silver', Level: 17 },
    favoriteGameMode: 'Team death match'
  },
  Raptor453: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '64%', sportsmanship: 1, Network: '62ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Revenant191: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '62%', sportsmanship: 2, Network: '64ms' },
    Skill: { Rank: 'Platinum', Level: 81 },
    favoriteGameMode: 'Free for all'
  },
  Gale816: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '0%', sportsmanship: 5, Network: '148ms' },
    Skill: { Rank: 'Silver', Level: 13 },
    favoriteGameMode: 'Prop hunt'
  },
  Ghost815: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '6%', sportsmanship: 4, Network: '198ms' },
    Skill: { Rank: 'Gold', Level: 86 },
    favoriteGameMode: 'Capture the flag'
  },
  Ninja673: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '52%', sportsmanship: 1, Network: '74ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Prop hunt'
  },
  Raptor708: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '11%', sportsmanship: 3, Network: '77ms' },
    Skill: { Rank: 'Silver', Level: 92 },
    favoriteGameMode: 'Search and destroy'
  },
  Wraith439: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '29%', sportsmanship: 3, Network: '56ms' },
    Skill: { Rank: 'Bronze', Level: 49 },
    favoriteGameMode: 'Free for all'
  },
  Guardian905: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '46%', sportsmanship: 5, Network: '75ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Free for all'
  },
  Ranger251: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '80%', sportsmanship: 2, Network: '193ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Prop hunt'
  },
  Guardian806: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '37%', sportsmanship: 1, Network: '191ms' },
    Skill: { Rank: 'Diamond', Level: 92 },
    favoriteGameMode: 'Search and destroy'
  },
  Knight323: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '81%', sportsmanship: 3, Network: '99ms' },
    Skill: { Rank: 'Gold', Level: 3 },
    favoriteGameMode: 'Team death match'
  },
  Warrior348: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '76%', sportsmanship: 1, Network: '192ms' },
    Skill: { Rank: 'Platinum', Level: 75 },
    favoriteGameMode: 'Search and destroy'
  },
  Stealth829: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '37%', sportsmanship: 4, Network: '100ms' },
    Skill: { Rank: 'Silver', Level: 46 },
    favoriteGameMode: 'Prop hunt'
  },
  Rogue239: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '37%', sportsmanship: 1, Network: '113ms' },
    Skill: { Rank: 'Diamond', Level: 94 },
    favoriteGameMode: 'Free for all'
  },
  Fox122: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '65%', sportsmanship: 1, Network: '30ms' },
    Skill: { Rank: 'Diamond', Level: 96 },
    favoriteGameMode: 'Search and destroy'
  },
  Shaman891: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '41%', sportsmanship: 3, Network: '104ms' },
    Skill: { Rank: 'Platinum', Level: 50 },
    favoriteGameMode: 'Team death match'
  },
  Spectre577: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '55%', sportsmanship: 3, Network: '60ms' },
    Skill: { Rank: 'Bronze', Level: 25 },
    favoriteGameMode: 'Search and destroy'
  },
  Tiger361: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '12%', sportsmanship: 5, Network: '125ms' },
    Skill: { Rank: 'Gold', Level: 92 },
    favoriteGameMode: 'Free for all'
  },
  Guardian354: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '188ms' },
    Skill: { Rank: 'Bronze', Level: 17 },
    favoriteGameMode: 'Capture the flag'
  },
  Glacier547: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '56%', sportsmanship: 3, Network: '30ms' },
    Skill: { Rank: 'Platinum', Level: 8 },
    favoriteGameMode: 'Capture the flag'
  },
  Storm399: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '21%', sportsmanship: 5, Network: '173ms' },
    Skill: { Rank: 'Diamond', Level: 91 },
    favoriteGameMode: 'Prop hunt'
  },
  Dragon232: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '55%', sportsmanship: 3, Network: '188ms' },
    Skill: { Rank: 'Silver', Level: 91 },
    favoriteGameMode: 'Team death match'
  },
  Alchemist455: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '27%', sportsmanship: 1, Network: '117ms' },
    Skill: { Rank: 'Silver', Level: 60 },
    favoriteGameMode: 'Team death match'
  },
  Monarch734: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '20%', sportsmanship: 1, Network: '105ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Prop hunt'
  },
  Vindicator741: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '47%', sportsmanship: 1, Network: '181ms' },
    Skill: { Rank: 'Diamond', Level: 6 },
    favoriteGameMode: 'Free for all'
  },
  Guardian963: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '42%', sportsmanship: 3, Network: '121ms' },
    Skill: { Rank: 'Bronze', Level: 7 },
    favoriteGameMode: 'Team death match'
  },
  Enigma484: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '84%', sportsmanship: 1, Network: '46ms' },
    Skill: { Rank: 'Silver', Level: 78 },
    favoriteGameMode: 'Prop hunt'
  },
  Flame480: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '26%', sportsmanship: 3, Network: '199ms' },
    Skill: { Rank: 'Diamond', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Wraith504: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '52%', sportsmanship: 1, Network: '112ms' },
    Skill: { Rank: 'Bronze', Level: 4 },
    favoriteGameMode: 'Prop hunt'
  },
  Flame960: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '42%', sportsmanship: 5, Network: '153ms' },
    Skill: { Rank: 'Bronze', Level: 22 },
    favoriteGameMode: 'Prop hunt'
  },
  Emerald650: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '59%', sportsmanship: 1, Network: '194ms' },
    Skill: { Rank: 'Bronze', Level: 38 },
    favoriteGameMode: 'Capture the flag'
  },
  Inferno227: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '75%', sportsmanship: 1, Network: '63ms' },
    Skill: { Rank: 'Silver', Level: 14 },
    favoriteGameMode: 'Capture the flag'
  },
  Monarch503: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '64%', sportsmanship: 1, Network: '90ms' },
    Skill: { Rank: 'Bronze', Level: 78 },
    favoriteGameMode: 'Search and destroy'
  },
  Frost847: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '65%', sportsmanship: 2, Network: '55ms' },
    Skill: { Rank: 'Bronze', Level: 31 },
    favoriteGameMode: 'Free for all'
  },
  Tempest549: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '57%', sportsmanship: 4, Network: '169ms' },
    Skill: { Rank: 'Silver', Level: 74 },
    favoriteGameMode: 'Prop hunt'
  },
  Revenant131: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '19%', sportsmanship: 3, Network: '76ms' },
    Skill: { Rank: 'Gold', Level: 16 },
    favoriteGameMode: 'Free for all'
  },
  Cobalt554: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '13%', sportsmanship: 2, Network: '192ms' },
    Skill: { Rank: 'Silver', Level: 93 },
    favoriteGameMode: 'Free for all'
  },
  Hunter784: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '64ms' },
    Skill: { Rank: 'Platinum', Level: 59 },
    favoriteGameMode: 'Capture the flag'
  },
  Zephyr821: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '25%', sportsmanship: 5, Network: '54ms' },
    Skill: { Rank: 'Gold', Level: 82 },
    favoriteGameMode: 'Search and destroy'
  },
  Sorcerer934: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '41%', sportsmanship: 5, Network: '82ms' },
    Skill: { Rank: 'Diamond', Level: 31 },
    favoriteGameMode: 'Capture the flag'
  },
  Templar514: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '34%', sportsmanship: 2, Network: '60ms' },
    Skill: { Rank: 'Platinum', Level: 49 },
    favoriteGameMode: 'Capture the flag'
  },
  Wolf354: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '4%', sportsmanship: 5, Network: '88ms' },
    Skill: { Rank: 'Diamond', Level: 94 },
    favoriteGameMode: 'Capture the flag'
  },
  Enigma788: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '48%', sportsmanship: 1, Network: '65ms' },
    Skill: { Rank: 'Diamond', Level: 2 },
    favoriteGameMode: 'Prop hunt'
  },
  Invoker211: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '19%', sportsmanship: 4, Network: '43ms' },
    Skill: { Rank: 'Silver', Level: 56 },
    favoriteGameMode: 'Search and destroy'
  },
  Blizzard829: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '94%', sportsmanship: 4, Network: '133ms' },
    Skill: { Rank: 'Gold', Level: 28 },
    favoriteGameMode: 'Search and destroy'
  },
  Champion326: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '26%', sportsmanship: 1, Network: '160ms' },
    Skill: { Rank: 'Gold', Level: 69 },
    favoriteGameMode: 'Capture the flag'
  },
  Alchemist710: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '13%', sportsmanship: 1, Network: '84ms' },
    Skill: { Rank: 'Platinum', Level: 3 },
    favoriteGameMode: 'Prop hunt'
  },
  Gale713: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '50%', sportsmanship: 5, Network: '30ms' },
    Skill: { Rank: 'Bronze', Level: 2 },
    favoriteGameMode: 'Prop hunt'
  },
  Overlord544: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '25%', sportsmanship: 2, Network: '103ms' },
    Skill: { Rank: 'Silver', Level: 82 },
    favoriteGameMode: 'Free for all'
  },
  Fury769: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '48%', sportsmanship: 2, Network: '191ms' },
    Skill: { Rank: 'Silver', Level: 38 },
    favoriteGameMode: 'Capture the flag'
  },
  Viper218: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '78%', sportsmanship: 3, Network: '29ms' },
    Skill: { Rank: 'Bronze', Level: 80 },
    favoriteGameMode: 'Prop hunt'
  },
  Oracle900: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '26%', sportsmanship: 1, Network: '170ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Capture the flag'
  },
  Knight895: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '15%', sportsmanship: 1, Network: '65ms' },
    Skill: { Rank: 'Gold', Level: 17 },
    favoriteGameMode: 'Free for all'
  },
  Maverick647: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '79%', sportsmanship: 1, Network: '115ms' },
    Skill: { Rank: 'Bronze', Level: 67 },
    favoriteGameMode: 'Capture the flag'
  },
  Mystic152: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '5%', sportsmanship: 3, Network: '22ms' },
    Skill: { Rank: 'Bronze', Level: 65 },
    favoriteGameMode: 'Capture the flag'
  },
  Champion419: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '4%', sportsmanship: 1, Network: '158ms' },
    Skill: { Rank: 'Silver', Level: 40 },
    favoriteGameMode: 'Team death match'
  },
  Templar240: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '80%', sportsmanship: 5, Network: '111ms' },
    Skill: { Rank: 'Gold', Level: 49 },
    favoriteGameMode: 'Team death match'
  },
  Siren735: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '5%', sportsmanship: 2, Network: '126ms' },
    Skill: { Rank: 'Silver', Level: 68 },
    favoriteGameMode: 'Free for all'
  },
  Fury363: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '54%', sportsmanship: 1, Network: '185ms' },
    Skill: { Rank: 'Platinum', Level: 35 },
    favoriteGameMode: 'Search and destroy'
  },
  Tempest517: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '0%', sportsmanship: 1, Network: '108ms' },
    Skill: { Rank: 'Platinum', Level: 55 },
    favoriteGameMode: 'Capture the flag'
  },
  Gryphon358: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '65%', sportsmanship: 1, Network: '50ms' },
    Skill: { Rank: 'Diamond', Level: 19 },
    favoriteGameMode: 'Free for all'
  },
  Viking386: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '20%', sportsmanship: 1, Network: '108ms' },
    Skill: { Rank: 'Silver', Level: 16 },
    favoriteGameMode: 'Team death match'
  },
  Amber258: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '37%', sportsmanship: 1, Network: '95ms' },
    Skill: { Rank: 'Gold', Level: 33 },
    favoriteGameMode: 'Prop hunt'
  },
  Quartz504: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '7%', sportsmanship: 1, Network: '59ms' },
    Skill: { Rank: 'Platinum', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Dragon991: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '18%', sportsmanship: 1, Network: '171ms' },
    Skill: { Rank: 'Silver', Level: 34 },
    favoriteGameMode: 'Capture the flag'
  },
  Spectre295: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '45ms' },
    Skill: { Rank: 'Silver', Level: 40 },
    favoriteGameMode: 'Prop hunt'
  },
  Flame710: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '41%', sportsmanship: 1, Network: '21ms' },
    Skill: { Rank: 'Bronze', Level: 22 },
    favoriteGameMode: 'Team death match'
  },
  Siren814: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '59%', sportsmanship: 3, Network: '106ms' },
    Skill: { Rank: 'Gold', Level: 27 },
    favoriteGameMode: 'Prop hunt'
  },
  Juggernaut758: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '12%', sportsmanship: 2, Network: '167ms' },
    Skill: { Rank: 'Platinum', Level: 82 },
    favoriteGameMode: 'Team death match'
  },
  Oracle408: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '63%', sportsmanship: 1, Network: '166ms' },
    Skill: { Rank: 'Bronze', Level: 83 },
    favoriteGameMode: 'Team death match'
  },
  Vindicator969: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '30%', sportsmanship: 2, Network: '44ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Capture the flag'
  },
  Enigma619: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '80%', sportsmanship: 2, Network: '93ms' },
    Skill: { Rank: 'Gold', Level: 90 },
    favoriteGameMode: 'Search and destroy'
  },
  Tempest995: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '37%', sportsmanship: 3, Network: '168ms' },
    Skill: { Rank: 'Bronze', Level: 59 },
    favoriteGameMode: 'Capture the flag'
  },
  Knight825: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '84%', sportsmanship: 5, Network: '198ms' },
    Skill: { Rank: 'Platinum', Level: 18 },
    favoriteGameMode: 'Team death match'
  },
  Reaper105: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '80%', sportsmanship: 5, Network: '72ms' },
    Skill: { Rank: 'Gold', Level: 60 },
    favoriteGameMode: 'Team death match'
  },
  Dragon660: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '82%', sportsmanship: 2, Network: '105ms' },
    Skill: { Rank: 'Diamond', Level: 55 },
    favoriteGameMode: 'Team death match'
  },
  Conqueror134: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '46%', sportsmanship: 4, Network: '102ms' },
    Skill: { Rank: 'Silver', Level: 38 },
    favoriteGameMode: 'Capture the flag'
  },
  Gale963: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '70%', sportsmanship: 1, Network: '81ms' },
    Skill: { Rank: 'Bronze', Level: 12 },
    favoriteGameMode: 'Capture the flag'
  },
  Blade236: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '114ms' },
    Skill: { Rank: 'Platinum', Level: 28 },
    favoriteGameMode: 'Capture the flag'
  },
  Flame323: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '88%', sportsmanship: 1, Network: '104ms' },
    Skill: { Rank: 'Bronze', Level: 29 },
    favoriteGameMode: 'Capture the flag'
  },
  Elemental489: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '79%', sportsmanship: 1, Network: '27ms' },
    Skill: { Rank: 'Bronze', Level: 32 },
    favoriteGameMode: 'Team death match'
  },
  Panther452: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '23%', sportsmanship: 1, Network: '170ms' },
    Skill: { Rank: 'Silver', Level: 24 },
    favoriteGameMode: 'Capture the flag'
  },
  Gale217: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '59%', sportsmanship: 4, Network: '34ms' },
    Skill: { Rank: 'Bronze', Level: 95 },
    favoriteGameMode: 'Prop hunt'
  },
  Ranger246: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '70%', sportsmanship: 3, Network: '96ms' },
    Skill: { Rank: 'Platinum', Level: 50 },
    favoriteGameMode: 'Search and destroy'
  },
  Amber374: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '64%', sportsmanship: 4, Network: '111ms' },
    Skill: { Rank: 'Diamond', Level: 30 },
    favoriteGameMode: 'Team death match'
  },
  Enigma332: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '25%', sportsmanship: 1, Network: '149ms' },
    Skill: { Rank: 'Silver', Level: 18 },
    favoriteGameMode: 'Search and destroy'
  },
  Crimson920: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '42%', sportsmanship: 1, Network: '96ms' },
    Skill: { Rank: 'Bronze', Level: 88 },
    favoriteGameMode: 'Team death match'
  },
  Fox673: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '113ms' },
    Skill: { Rank: 'Gold', Level: 88 },
    favoriteGameMode: 'Free for all'
  },
  Samurai805: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '25%', sportsmanship: 1, Network: '64ms' },
    Skill: { Rank: 'Gold', Level: 71 },
    favoriteGameMode: 'Free for all'
  },
  Marauder620: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '38%', sportsmanship: 1, Network: '24ms' },
    Skill: { Rank: 'Diamond', Level: 30 },
    favoriteGameMode: 'Capture the flag'
  },
  Sapphire914: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '98%', sportsmanship: 2, Network: '148ms' },
    Skill: { Rank: 'Silver', Level: 92 },
    favoriteGameMode: 'Free for all'
  },
  Cleric145: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '23%', sportsmanship: 2, Network: '37ms' },
    Skill: { Rank: 'Diamond', Level: 65 },
    favoriteGameMode: 'Team death match'
  },
  Emerald549: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '178ms' },
    Skill: { Rank: 'Bronze', Level: 93 },
    favoriteGameMode: 'Capture the flag'
  },
  Stalker599: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '1%', sportsmanship: 5, Network: '175ms' },
    Skill: { Rank: 'Platinum', Level: 37 },
    favoriteGameMode: 'Free for all'
  },
  Enforcer518: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '11%', sportsmanship: 5, Network: '36ms' },
    Skill: { Rank: 'Bronze', Level: 23 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlock996: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '91%', sportsmanship: 5, Network: '57ms' },
    Skill: { Rank: 'Diamond', Level: 96 },
    favoriteGameMode: 'Search and destroy'
  },
  Panther837: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '60%', sportsmanship: 3, Network: '72ms' },
    Skill: { Rank: 'Silver', Level: 23 },
    favoriteGameMode: 'Capture the flag'
  },
  Guardian498: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '76%', sportsmanship: 3, Network: '111ms' },
    Skill: { Rank: 'Diamond', Level: 24 },
    favoriteGameMode: 'Free for all'
  },
  Invoker508: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '25%', sportsmanship: 2, Network: '22ms' },
    Skill: { Rank: 'Gold', Level: 64 },
    favoriteGameMode: 'Search and destroy'
  },
  Barbarian869: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '73%', sportsmanship: 2, Network: '125ms' },
    Skill: { Rank: 'Gold', Level: 20 },
    favoriteGameMode: 'Prop hunt'
  },
  Blade323: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '76%', sportsmanship: 4, Network: '78ms' },
    Skill: { Rank: 'Gold', Level: 79 },
    favoriteGameMode: 'Team death match'
  },
  Elemental925: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '31%', sportsmanship: 2, Network: '108ms' },
    Skill: { Rank: 'Silver', Level: 18 },
    favoriteGameMode: 'Prop hunt'
  },
  Stalker963: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '40%', sportsmanship: 3, Network: '143ms' },
    Skill: { Rank: 'Platinum', Level: 27 },
    favoriteGameMode: 'Free for all'
  },
  Monarch931: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '78%', sportsmanship: 3, Network: '200ms' },
    Skill: { Rank: 'Diamond', Level: 23 },
    favoriteGameMode: 'Search and destroy'
  },
  Golem497: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '21%', sportsmanship: 1, Network: '31ms' },
    Skill: { Rank: 'Diamond', Level: 83 },
    favoriteGameMode: 'Search and destroy'
  },
  Thunder896: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '93%', sportsmanship: 5, Network: '135ms' },
    Skill: { Rank: 'Platinum', Level: 84 },
    favoriteGameMode: 'Search and destroy'
  },
  Viper528: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '94%', sportsmanship: 4, Network: '52ms' },
    Skill: { Rank: 'Silver', Level: 34 },
    favoriteGameMode: 'Team death match'
  },
  Hawk454: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '95%', sportsmanship: 2, Network: '161ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Capture the flag'
  },
  Warden623: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '32%', sportsmanship: 2, Network: '158ms' },
    Skill: { Rank: 'Gold', Level: 38 },
    favoriteGameMode: 'Team death match'
  },
  Viking760: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '11%', sportsmanship: 2, Network: '28ms' },
    Skill: { Rank: 'Silver', Level: 28 },
    favoriteGameMode: 'Capture the flag'
  },
  Vandal997: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '14%', sportsmanship: 3, Network: '51ms' },
    Skill: { Rank: 'Diamond', Level: 47 },
    favoriteGameMode: 'Search and destroy'
  },
  Golem764: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '98%', sportsmanship: 4, Network: '46ms' },
    Skill: { Rank: 'Platinum', Level: 98 },
    favoriteGameMode: 'Capture the flag'
  },
  Sentinel955: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '38%', sportsmanship: 2, Network: '43ms' },
    Skill: { Rank: 'Gold', Level: 91 },
    favoriteGameMode: 'Free for all'
  },
  Onyx549: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '64%', sportsmanship: 3, Network: '124ms' },
    Skill: { Rank: 'Gold', Level: 8 },
    favoriteGameMode: 'Prop hunt'
  },
  Hawk486: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '54%', sportsmanship: 4, Network: '82ms' },
    Skill: { Rank: 'Diamond', Level: 93 },
    favoriteGameMode: 'Search and destroy'
  },
  Blizzard843: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '67%', sportsmanship: 2, Network: '27ms' },
    Skill: { Rank: 'Bronze', Level: 67 },
    favoriteGameMode: 'Capture the flag'
  },
  Viper217: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '8%', sportsmanship: 1, Network: '132ms' },
    Skill: { Rank: 'Silver', Level: 61 },
    favoriteGameMode: 'Capture the flag'
  },
  Lightning908: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '106ms' },
    Skill: { Rank: 'Bronze', Level: 66 },
    favoriteGameMode: 'Free for all'
  },
  Samurai665: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '60%', sportsmanship: 2, Network: '64ms' },
    Skill: { Rank: 'Silver', Level: 97 },
    favoriteGameMode: 'Capture the flag'
  },
  Gryphon141: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '14%', sportsmanship: 4, Network: '77ms' },
    Skill: { Rank: 'Diamond', Level: 73 },
    favoriteGameMode: 'Free for all'
  },
  Monarch151: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '6%', sportsmanship: 4, Network: '165ms' },
    Skill: { Rank: 'Bronze', Level: 86 },
    favoriteGameMode: 'Search and destroy'
  },
  Mystic603: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '82%', sportsmanship: 5, Network: '70ms' },
    Skill: { Rank: 'Bronze', Level: 27 },
    favoriteGameMode: 'Capture the flag'
  },
  Blade924: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '22%', sportsmanship: 2, Network: '122ms' },
    Skill: { Rank: 'Gold', Level: 9 },
    favoriteGameMode: 'Search and destroy'
  },
  Sorcerer382: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '14%', sportsmanship: 2, Network: '182ms' },
    Skill: { Rank: 'Silver', Level: 45 },
    favoriteGameMode: 'Search and destroy'
  },
  Conqueror301: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '65%', sportsmanship: 5, Network: '194ms' },
    Skill: { Rank: 'Diamond', Level: 20 },
    favoriteGameMode: 'Capture the flag'
  },
  Amber869: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '91%', sportsmanship: 3, Network: '188ms' },
    Skill: { Rank: 'Bronze', Level: 76 },
    favoriteGameMode: 'Search and destroy'
  },
  Juggernaut508: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '22%', sportsmanship: 5, Network: '101ms' },
    Skill: { Rank: 'Platinum', Level: 44 },
    favoriteGameMode: 'Capture the flag'
  },
  Warden392: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '100%', sportsmanship: 1, Network: '160ms' },
    Skill: { Rank: 'Diamond', Level: 67 },
    favoriteGameMode: 'Search and destroy'
  },
  Ghost392: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '61%', sportsmanship: 3, Network: '108ms' },
    Skill: { Rank: 'Diamond', Level: 72 },
    favoriteGameMode: 'Team death match'
  },
  Enforcer431: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '14%', sportsmanship: 2, Network: '137ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Capture the flag'
  },
  Tempest153: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '27%', sportsmanship: 2, Network: '23ms' },
    Skill: { Rank: 'Bronze', Level: 68 },
    favoriteGameMode: 'Capture the flag'
  },
  Hunter828: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '37%', sportsmanship: 5, Network: '90ms' },
    Skill: { Rank: 'Diamond', Level: 96 },
    favoriteGameMode: 'Prop hunt'
  },
  Phoenix408: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '16%', sportsmanship: 2, Network: '57ms' },
    Skill: { Rank: 'Bronze', Level: 71 },
    favoriteGameMode: 'Free for all'
  },
  Fox745: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '12%', sportsmanship: 2, Network: '122ms' },
    Skill: { Rank: 'Bronze', Level: 35 },
    favoriteGameMode: 'Team death match'
  },
  Hunter407: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '7%', sportsmanship: 4, Network: '123ms' },
    Skill: { Rank: 'Diamond', Level: 99 },
    favoriteGameMode: 'Capture the flag'
  },
  Banshee912: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '83%', sportsmanship: 4, Network: '54ms' },
    Skill: { Rank: 'Diamond', Level: 65 },
    favoriteGameMode: 'Search and destroy'
  },
  Phoenix641: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '38%', sportsmanship: 3, Network: '59ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Team death match'
  },
  Enforcer972: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '57%', sportsmanship: 2, Network: '52ms' },
    Skill: { Rank: 'Platinum', Level: 88 },
    favoriteGameMode: 'Capture the flag'
  },
  Elemental427: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '72%', sportsmanship: 2, Network: '91ms' },
    Skill: { Rank: 'Gold', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Berserker364: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '72%', sportsmanship: 3, Network: '139ms' },
    Skill: { Rank: 'Bronze', Level: 76 },
    favoriteGameMode: 'Capture the flag'
  },
  Onyx970: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '45%', sportsmanship: 3, Network: '54ms' },
    Skill: { Rank: 'Gold', Level: 52 },
    favoriteGameMode: 'Search and destroy'
  },
  Enforcer247: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '45%', sportsmanship: 4, Network: '129ms' },
    Skill: { Rank: 'Bronze', Level: 62 },
    favoriteGameMode: 'Search and destroy'
  },
  Tempest121: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '45%', sportsmanship: 5, Network: '21ms' },
    Skill: { Rank: 'Silver', Level: 70 },
    favoriteGameMode: 'Search and destroy'
  },
  Hawk622: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '17%', sportsmanship: 3, Network: '135ms' },
    Skill: { Rank: 'Diamond', Level: 97 },
    favoriteGameMode: 'Search and destroy'
  },
  Alchemist668: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '70%', sportsmanship: 4, Network: '106ms' },
    Skill: { Rank: 'Bronze', Level: 99 },
    favoriteGameMode: 'Team death match'
  },
  Monarch843: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '58%', sportsmanship: 3, Network: '92ms' },
    Skill: { Rank: 'Gold', Level: 38 },
    favoriteGameMode: 'Team death match'
  },
  Marauder937: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '67%', sportsmanship: 3, Network: '182ms' },
    Skill: { Rank: 'Platinum', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Inferno256: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '84%', sportsmanship: 3, Network: '86ms' },
    Skill: { Rank: 'Gold', Level: 91 },
    favoriteGameMode: 'Team death match'
  },
  Mystic892: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '33%', sportsmanship: 3, Network: '78ms' },
    Skill: { Rank: 'Gold', Level: 100 },
    favoriteGameMode: 'Prop hunt'
  },
  Overlord128: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '20%', sportsmanship: 2, Network: '134ms' },
    Skill: { Rank: 'Gold', Level: 72 },
    favoriteGameMode: 'Team death match'
  },
  Tempest899: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '73%', sportsmanship: 4, Network: '45ms' },
    Skill: { Rank: 'Gold', Level: 11 },
    favoriteGameMode: 'Team death match'
  },
  Enforcer645: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '6%', sportsmanship: 5, Network: '181ms' },
    Skill: { Rank: 'Gold', Level: 73 },
    favoriteGameMode: 'Search and destroy'
  },
  Sorcerer676: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '94%', sportsmanship: 3, Network: '65ms' },
    Skill: { Rank: 'Silver', Level: 60 },
    favoriteGameMode: 'Team death match'
  },
  Overlord755: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '10%', sportsmanship: 3, Network: '151ms' },
    Skill: { Rank: 'Platinum', Level: 54 },
    favoriteGameMode: 'Team death match'
  },
  Warden685: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '22%', sportsmanship: 1, Network: '159ms' },
    Skill: { Rank: 'Gold', Level: 31 },
    favoriteGameMode: 'Prop hunt'
  },
  Cleric372: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '66%', sportsmanship: 5, Network: '181ms' },
    Skill: { Rank: 'Bronze', Level: 70 },
    favoriteGameMode: 'Team death match'
  },
  Hawk936: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '43%', sportsmanship: 3, Network: '110ms' },
    Skill: { Rank: 'Gold', Level: 20 },
    favoriteGameMode: 'Capture the flag'
  },
  Mystic984: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '59%', sportsmanship: 5, Network: '124ms' },
    Skill: { Rank: 'Silver', Level: 76 },
    favoriteGameMode: 'Prop hunt'
  },
  Shaman143: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '3%', sportsmanship: 4, Network: '155ms' },
    Skill: { Rank: 'Silver', Level: 97 },
    favoriteGameMode: 'Prop hunt'
  },
  Storm805: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '5%', sportsmanship: 1, Network: '20ms' },
    Skill: { Rank: 'Gold', Level: 90 },
    favoriteGameMode: 'Capture the flag'
  },
  Elemental923: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '98%', sportsmanship: 4, Network: '96ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Prop hunt'
  },
  Savage331: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '56%', sportsmanship: 5, Network: '113ms' },
    Skill: { Rank: 'Diamond', Level: 8 },
    favoriteGameMode: 'Capture the flag'
  },
  Spectre104: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '39%', sportsmanship: 4, Network: '123ms' },
    Skill: { Rank: 'Platinum', Level: 68 },
    favoriteGameMode: 'Team death match'
  },
  Viper221: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '28%', sportsmanship: 1, Network: '157ms' },
    Skill: { Rank: 'Gold', Level: 70 },
    favoriteGameMode: 'Capture the flag'
  },
  Sentinel822: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '96%', sportsmanship: 3, Network: '29ms' },
    Skill: { Rank: 'Gold', Level: 67 },
    favoriteGameMode: 'Free for all'
  },
  Tempest714: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '80%', sportsmanship: 2, Network: '103ms' },
    Skill: { Rank: 'Bronze', Level: 32 },
    favoriteGameMode: 'Free for all'
  },
  Elemental961: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '91%', sportsmanship: 4, Network: '42ms' },
    Skill: { Rank: 'Gold', Level: 27 },
    favoriteGameMode: 'Team death match'
  },
  Crimson841: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '99%', sportsmanship: 4, Network: '132ms' },
    Skill: { Rank: 'Gold', Level: 77 },
    favoriteGameMode: 'Search and destroy'
  },
  Golem392: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '10%', sportsmanship: 3, Network: '44ms' },
    Skill: { Rank: 'Gold', Level: 59 },
    favoriteGameMode: 'Prop hunt'
  },
  Invoker803: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '6%', sportsmanship: 5, Network: '199ms' },
    Skill: { Rank: 'Platinum', Level: 76 },
    favoriteGameMode: 'Prop hunt'
  },
  Shadow722: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '23%', sportsmanship: 5, Network: '28ms' },
    Skill: { Rank: 'Gold', Level: 23 },
    favoriteGameMode: 'Team death match'
  },
  Oracle861: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '85%', sportsmanship: 3, Network: '60ms' },
    Skill: { Rank: 'Gold', Level: 67 },
    favoriteGameMode: 'Capture the flag'
  },
  Zephyr540: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '100%', sportsmanship: 4, Network: '104ms' },
    Skill: { Rank: 'Platinum', Level: 55 },
    favoriteGameMode: 'Team death match'
  },
  Golem837: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '98%', sportsmanship: 3, Network: '183ms' },
    Skill: { Rank: 'Bronze', Level: 42 },
    favoriteGameMode: 'Prop hunt'
  },
  Warlord539: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '87%', sportsmanship: 5, Network: '55ms' },
    Skill: { Rank: 'Gold', Level: 54 },
    favoriteGameMode: 'Prop hunt'
  },
  Colossus456: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '1%', sportsmanship: 5, Network: '149ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Prop hunt'
  },
  Corsair431: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '22%', sportsmanship: 2, Network: '25ms' },
    Skill: { Rank: 'Platinum', Level: 52 },
    favoriteGameMode: 'Search and destroy'
  },
  Sapphire761: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '99%', sportsmanship: 5, Network: '44ms' },
    Skill: { Rank: 'Silver', Level: 64 },
    favoriteGameMode: 'Search and destroy'
  },
  Vandal372: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '55%', sportsmanship: 4, Network: '88ms' },
    Skill: { Rank: 'Diamond', Level: 88 },
    favoriteGameMode: 'Prop hunt'
  },
  Vortex810: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '97%', sportsmanship: 4, Network: '177ms' },
    Skill: { Rank: 'Bronze', Level: 30 },
    favoriteGameMode: 'Capture the flag'
  },
  Champion276: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '36%', sportsmanship: 3, Network: '109ms' },
    Skill: { Rank: 'Diamond', Level: 57 },
    favoriteGameMode: 'Free for all'
  },
  Siren172: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '98%', sportsmanship: 4, Network: '153ms' },
    Skill: { Rank: 'Platinum', Level: 4 },
    favoriteGameMode: 'Free for all'
  },
  Revenant814: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '0%', sportsmanship: 3, Network: '156ms' },
    Skill: { Rank: 'Platinum', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Hunter357: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '9%', sportsmanship: 3, Network: '145ms' },
    Skill: { Rank: 'Diamond', Level: 64 },
    favoriteGameMode: 'Team death match'
  },
  Warmaster444: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '27%', sportsmanship: 4, Network: '138ms' },
    Skill: { Rank: 'Platinum', Level: 7 },
    favoriteGameMode: 'Capture the flag'
  },
  Berserker157: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '39%', sportsmanship: 1, Network: '22ms' },
    Skill: { Rank: 'Silver', Level: 26 },
    favoriteGameMode: 'Free for all'
  },
  Quartz125: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '26%', sportsmanship: 1, Network: '145ms' },
    Skill: { Rank: 'Diamond', Level: 49 },
    favoriteGameMode: 'Capture the flag'
  },
  Venom229: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '34%', sportsmanship: 5, Network: '103ms' },
    Skill: { Rank: 'Gold', Level: 40 },
    favoriteGameMode: 'Search and destroy'
  },
  Onyx811: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '61%', sportsmanship: 3, Network: '165ms' },
    Skill: { Rank: 'Bronze', Level: 37 },
    favoriteGameMode: 'Free for all'
  },
  Enigma917: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '82%', sportsmanship: 3, Network: '133ms' },
    Skill: { Rank: 'Bronze', Level: 100 },
    favoriteGameMode: 'Free for all'
  },
  Oracle809: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '78%', sportsmanship: 2, Network: '174ms' },
    Skill: { Rank: 'Bronze', Level: 38 },
    favoriteGameMode: 'Team death match'
  },
  Overlord112: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '60%', sportsmanship: 4, Network: '104ms' },
    Skill: { Rank: 'Bronze', Level: 51 },
    favoriteGameMode: 'Prop hunt'
  },
  Siren815: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '50%', sportsmanship: 3, Network: '191ms' },
    Skill: { Rank: 'Bronze', Level: 73 },
    favoriteGameMode: 'Team death match'
  },
  Sentinel517: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '88%', sportsmanship: 2, Network: '172ms' },
    Skill: { Rank: 'Diamond', Level: 19 },
    favoriteGameMode: 'Team death match'
  },
  Obsidian391: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '85%', sportsmanship: 3, Network: '41ms' },
    Skill: { Rank: 'Platinum', Level: 67 },
    favoriteGameMode: 'Search and destroy'
  },
  Colossus863: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '68%', sportsmanship: 4, Network: '142ms' },
    Skill: { Rank: 'Gold', Level: 71 },
    favoriteGameMode: 'Search and destroy'
  },
  Champion403: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '100%', sportsmanship: 4, Network: '87ms' },
    Skill: { Rank: 'Bronze', Level: 55 },
    favoriteGameMode: 'Capture the flag'
  },
  Hunter561: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '80%', sportsmanship: 4, Network: '39ms' },
    Skill: { Rank: 'Diamond', Level: 11 },
    favoriteGameMode: 'Capture the flag'
  },
  Destroyer783: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '86%', sportsmanship: 2, Network: '150ms' },
    Skill: { Rank: 'Platinum', Level: 38 },
    favoriteGameMode: 'Prop hunt'
  },
  Hunter891: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '78%', sportsmanship: 5, Network: '34ms' },
    Skill: { Rank: 'Bronze', Level: 15 },
    favoriteGameMode: 'Prop hunt'
  },
  Raven317: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '72%', sportsmanship: 5, Network: '121ms' },
    Skill: { Rank: 'Silver', Level: 98 },
    favoriteGameMode: 'Prop hunt'
  },
  Siren514: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '64%', sportsmanship: 3, Network: '154ms' },
    Skill: { Rank: 'Silver', Level: 74 },
    favoriteGameMode: 'Capture the flag'
  },
  Enigma261: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '0%', sportsmanship: 2, Network: '159ms' },
    Skill: { Rank: 'Silver', Level: 19 },
    favoriteGameMode: 'Team death match'
  },
  Zephyr549: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '69%', sportsmanship: 5, Network: '68ms' },
    Skill: { Rank: 'Gold', Level: 35 },
    favoriteGameMode: 'Free for all'
  },
  Inferno404: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '23%', sportsmanship: 2, Network: '49ms' },
    Skill: { Rank: 'Diamond', Level: 23 },
    favoriteGameMode: 'Capture the flag'
  },
  Maverick295: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '16%', sportsmanship: 2, Network: '81ms' },
    Skill: { Rank: 'Bronze', Level: 48 },
    favoriteGameMode: 'Team death match'
  },
  Warmaster401: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '89%', sportsmanship: 2, Network: '167ms' },
    Skill: { Rank: 'Silver', Level: 74 },
    favoriteGameMode: 'Prop hunt'
  },
  Lightning620: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '78%', sportsmanship: 2, Network: '20ms' },
    Skill: { Rank: 'Silver', Level: 94 },
    favoriteGameMode: 'Search and destroy'
  },
  Gale242: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '40%', sportsmanship: 4, Network: '167ms' },
    Skill: { Rank: 'Platinum', Level: 95 },
    favoriteGameMode: 'Search and destroy'
  },
  Obsidian902: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '60%', sportsmanship: 1, Network: '67ms' },
    Skill: { Rank: 'Silver', Level: 93 },
    favoriteGameMode: 'Capture the flag'
  },
  Guardian503: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '36%', sportsmanship: 2, Network: '56ms' },
    Skill: { Rank: 'Platinum', Level: 90 },
    favoriteGameMode: 'Prop hunt'
  },
  Ranger106: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '89%', sportsmanship: 1, Network: '152ms' },
    Skill: { Rank: 'Silver', Level: 41 },
    favoriteGameMode: 'Team death match'
  },
  Spectre758: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '2%', sportsmanship: 1, Network: '44ms' },
    Skill: { Rank: 'Silver', Level: 4 },
    favoriteGameMode: 'Search and destroy'
  },
  Lightning175: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '22%', sportsmanship: 3, Network: '63ms' },
    Skill: { Rank: 'Platinum', Level: 7 },
    favoriteGameMode: 'Prop hunt'
  },
  Vortex634: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '87%', sportsmanship: 3, Network: '82ms' },
    Skill: { Rank: 'Bronze', Level: 40 },
    favoriteGameMode: 'Capture the flag'
  },
  Oracle690: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '42%', sportsmanship: 2, Network: '85ms' },
    Skill: { Rank: 'Diamond', Level: 34 },
    favoriteGameMode: 'Prop hunt'
  },
  Vandal578: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '100%', sportsmanship: 2, Network: '148ms' },
    Skill: { Rank: 'Bronze', Level: 96 },
    favoriteGameMode: 'Search and destroy'
  },
  Storm198: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '36%', sportsmanship: 3, Network: '195ms' },
    Skill: { Rank: 'Diamond', Level: 18 },
    favoriteGameMode: 'Search and destroy'
  },
  Onyx987: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '82%', sportsmanship: 5, Network: '133ms' },
    Skill: { Rank: 'Platinum', Level: 12 },
    favoriteGameMode: 'Prop hunt'
  },
  Rider451: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '41%', sportsmanship: 2, Network: '118ms' },
    Skill: { Rank: 'Silver', Level: 36 },
    favoriteGameMode: 'Free for all'
  },
  Stalker799: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '33%', sportsmanship: 5, Network: '110ms' },
    Skill: { Rank: 'Platinum', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Cobalt120: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '81%', sportsmanship: 3, Network: '143ms' },
    Skill: { Rank: 'Platinum', Level: 98 },
    favoriteGameMode: 'Free for all'
  },
  Stealth459: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '32%', sportsmanship: 4, Network: '20ms' },
    Skill: { Rank: 'Bronze', Level: 48 },
    favoriteGameMode: 'Team death match'
  },
  Obsidian781: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '41%', sportsmanship: 2, Network: '58ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Prop hunt'
  },
  Necromancer820: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '16%', sportsmanship: 3, Network: '136ms' },
    Skill: { Rank: 'Platinum', Level: 70 },
    favoriteGameMode: 'Capture the flag'
  },
  Enforcer265: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '57%', sportsmanship: 2, Network: '199ms' },
    Skill: { Rank: 'Diamond', Level: 53 },
    favoriteGameMode: 'Prop hunt'
  },
  Stalker872: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '55%', sportsmanship: 4, Network: '43ms' },
    Skill: { Rank: 'Diamond', Level: 98 },
    favoriteGameMode: 'Free for all'
  },
  Ghost292: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '35%', sportsmanship: 4, Network: '77ms' },
    Skill: { Rank: 'Bronze', Level: 50 },
    favoriteGameMode: 'Prop hunt'
  },
  Sparrow407: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '36%', sportsmanship: 1, Network: '128ms' },
    Skill: { Rank: 'Bronze', Level: 54 },
    favoriteGameMode: 'Prop hunt'
  },
  Destroyer309: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '55%', sportsmanship: 5, Network: '30ms' },
    Skill: { Rank: 'Gold', Level: 91 },
    favoriteGameMode: 'Search and destroy'
  },
  Cleric582: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '76%', sportsmanship: 5, Network: '100ms' },
    Skill: { Rank: 'Silver', Level: 51 },
    favoriteGameMode: 'Free for all'
  },
  Panther353: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '9%', sportsmanship: 4, Network: '124ms' },
    Skill: { Rank: 'Gold', Level: 47 },
    favoriteGameMode: 'Capture the flag'
  },
  Shaman998: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '89%', sportsmanship: 3, Network: '191ms' },
    Skill: { Rank: 'Silver', Level: 5 },
    favoriteGameMode: 'Capture the flag'
  },
  Enforcer196: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '46%', sportsmanship: 3, Network: '150ms' },
    Skill: { Rank: 'Diamond', Level: 51 },
    favoriteGameMode: 'Capture the flag'
  },
  Obsidian744: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '62%', sportsmanship: 4, Network: '179ms' },
    Skill: { Rank: 'Diamond', Level: 17 },
    favoriteGameMode: 'Prop hunt'
  },
  Crimson495: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '45%', sportsmanship: 1, Network: '86ms' },
    Skill: { Rank: 'Diamond', Level: 9 },
    favoriteGameMode: 'Prop hunt'
  },
  Tiger314: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '10%', sportsmanship: 3, Network: '81ms' },
    Skill: { Rank: 'Diamond', Level: 84 },
    favoriteGameMode: 'Free for all'
  },
  Rogue699: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '8%', sportsmanship: 3, Network: '164ms' },
    Skill: { Rank: 'Silver', Level: 76 },
    favoriteGameMode: 'Team death match'
  },
  Banshee970: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '3%', sportsmanship: 2, Network: '142ms' },
    Skill: { Rank: 'Gold', Level: 61 },
    favoriteGameMode: 'Capture the flag'
  },
  Elemental660: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '75%', sportsmanship: 2, Network: '95ms' },
    Skill: { Rank: 'Gold', Level: 45 },
    favoriteGameMode: 'Search and destroy'
  },
  Warlord249: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '100%', sportsmanship: 3, Network: '120ms' },
    Skill: { Rank: 'Diamond', Level: 37 },
    favoriteGameMode: 'Search and destroy'
  },
  Spectre337: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '81%', sportsmanship: 2, Network: '97ms' },
    Skill: { Rank: 'Platinum', Level: 2 },
    favoriteGameMode: 'Capture the flag'
  },
  Sapphire801: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '92%', sportsmanship: 4, Network: '194ms' },
    Skill: { Rank: 'Platinum', Level: 80 },
    favoriteGameMode: 'Free for all'
  },
  Templar667: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '70%', sportsmanship: 5, Network: '142ms' },
    Skill: { Rank: 'Diamond', Level: 98 },
    favoriteGameMode: 'Prop hunt'
  },
  Rider935: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '36%', sportsmanship: 3, Network: '109ms' },
    Skill: { Rank: 'Gold', Level: 77 },
    favoriteGameMode: 'Prop hunt'
  },
  Stalker632: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '88%', sportsmanship: 3, Network: '22ms' },
    Skill: { Rank: 'Platinum', Level: 58 },
    favoriteGameMode: 'Capture the flag'
  },
  Crimson166: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '65%', sportsmanship: 3, Network: '50ms' },
    Skill: { Rank: 'Gold', Level: 27 },
    favoriteGameMode: 'Free for all'
  },
  Mystic556: {
    preferences: { communication: 'mic', playstyle: 'Flank' },
    Attributes: { toxicity: '49%', sportsmanship: 1, Network: '138ms' },
    Skill: { Rank: 'Bronze', Level: 44 },
    favoriteGameMode: 'Prop hunt'
  },
  Warden608: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '83%', sportsmanship: 1, Network: '53ms' },
    Skill: { Rank: 'Platinum', Level: 20 },
    favoriteGameMode: 'Search and destroy'
  },
  Tempest784: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '87%', sportsmanship: 2, Network: '25ms' },
    Skill: { Rank: 'Diamond', Level: 8 },
    favoriteGameMode: 'Team death match'
  },
  Samurai107: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '83%', sportsmanship: 2, Network: '145ms' },
    Skill: { Rank: 'Platinum', Level: 87 },
    favoriteGameMode: 'Search and destroy'
  },
  Cleric734: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '46%', sportsmanship: 4, Network: '111ms' },
    Skill: { Rank: 'Gold', Level: 66 },
    favoriteGameMode: 'Prop hunt'
  },
  Golem477: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '61%', sportsmanship: 3, Network: '190ms' },
    Skill: { Rank: 'Silver', Level: 6 },
    favoriteGameMode: 'Capture the flag'
  },
  Venom754: {
    preferences: { communication: 'chat', playstyle: 'Flank' },
    Attributes: { toxicity: '15%', sportsmanship: 1, Network: '192ms' },
    Skill: { Rank: 'Platinum', Level: 56 },
    favoriteGameMode: 'Prop hunt'
  },
  Cleric345: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '16%', sportsmanship: 1, Network: '92ms' },
    Skill: { Rank: 'Platinum', Level: 44 },
    favoriteGameMode: 'Prop hunt'
  },
  Marauder395: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '69%', sportsmanship: 1, Network: '118ms' },
    Skill: { Rank: 'Diamond', Level: 15 },
    favoriteGameMode: 'Team death match'
  },
  Samurai962: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '48%', sportsmanship: 3, Network: '107ms' },
    Skill: { Rank: 'Platinum', Level: 44 },
    favoriteGameMode: 'Search and destroy'
  },
  Venom651: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '80%', sportsmanship: 1, Network: '137ms' },
    Skill: { Rank: 'Bronze', Level: 75 },
    favoriteGameMode: 'Prop hunt'
  },
  Thunder638: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '19%', sportsmanship: 5, Network: '146ms' },
    Skill: { Rank: 'Platinum', Level: 17 },
    favoriteGameMode: 'Search and destroy'
  },
  Warden704: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '86%', sportsmanship: 5, Network: '125ms' },
    Skill: { Rank: 'Bronze', Level: 20 },
    favoriteGameMode: 'Free for all'
  },
  Wolf479: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '98%', sportsmanship: 1, Network: '24ms' },
    Skill: { Rank: 'Bronze', Level: 41 },
    favoriteGameMode: 'Prop hunt'
  },
  Corsair550: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '45%', sportsmanship: 1, Network: '161ms' },
    Skill: { Rank: 'Platinum', Level: 43 },
    favoriteGameMode: 'Team death match'
  },
  Rider916: {
    preferences: { communication: 'mic', playstyle: 'Objective' },
    Attributes: { toxicity: '12%', sportsmanship: 2, Network: '117ms' },
    Skill: { Rank: 'Platinum', Level: 30 },
    favoriteGameMode: 'Search and destroy'
  },
  Inferno118: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '66%', sportsmanship: 1, Network: '115ms' },
    Skill: { Rank: 'Silver', Level: 60 },
    favoriteGameMode: 'Free for all'
  },
  Shadow465: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '33%', sportsmanship: 5, Network: '54ms' },
    Skill: { Rank: 'Bronze', Level: 11 },
    favoriteGameMode: 'Capture the flag'
  },
  Juggernaut485: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '8%', sportsmanship: 4, Network: '52ms' },
    Skill: { Rank: 'Bronze', Level: 49 },
    favoriteGameMode: 'Prop hunt'
  },
  Obsidian192: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '75%', sportsmanship: 1, Network: '98ms' },
    Skill: { Rank: 'Bronze', Level: 81 },
    favoriteGameMode: 'Prop hunt'
  },
  Blizzard895: {
    preferences: { communication: 'mic', playstyle: 'Tank' },
    Attributes: { toxicity: '98%', sportsmanship: 5, Network: '75ms' },
    Skill: { Rank: 'Bronze', Level: 68 },
    favoriteGameMode: 'Team death match'
  },
  Elemental312: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '8%', sportsmanship: 3, Network: '186ms' },
    Skill: { Rank: 'Diamond', Level: 19 },
    favoriteGameMode: 'Prop hunt'
  },
  Sparrow855: {
    preferences: { communication: 'chat', playstyle: 'Tank' },
    Attributes: { toxicity: '86%', sportsmanship: 5, Network: '182ms' },
    Skill: { Rank: 'Silver', Level: 24 },
    favoriteGameMode: 'Capture the flag'
  },
  Quartz518: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '10%', sportsmanship: 5, Network: '104ms' },
    Skill: { Rank: 'Diamond', Level: 61 },
    favoriteGameMode: 'Capture the flag'
  },
  Ninja112: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '14%', sportsmanship: 1, Network: '36ms' },
    Skill: { Rank: 'Bronze', Level: 61 },
    favoriteGameMode: 'Prop hunt'
  },
  Samurai204: {
    preferences: { communication: 'chat', playstyle: 'Objective' },
    Attributes: { toxicity: '51%', sportsmanship: 1, Network: '109ms' },
    Skill: { Rank: 'Gold', Level: 26 },
    favoriteGameMode: 'Free for all'
  },
  Phoenix873: {
    preferences: { communication: 'mic', playstyle: 'Damage' },
    Attributes: { toxicity: '2%', sportsmanship: 1, Network: '139ms' },
    Skill: { Rank: 'Bronze', Level: 70 },
    favoriteGameMode: 'Free for all'
  },
  Lightning480: {
    preferences: { communication: 'chat', playstyle: 'Damage' },
    Attributes: { toxicity: '23%', sportsmanship: 4, Network: '171ms' },
    Skill: { Rank: 'Silver', Level: 87 },
    favoriteGameMode: 'Team death match'
  },
  Lightning242: {
    preferences: { communication: 'chat', playstyle: 'Support' },
    Attributes: { toxicity: '59%', sportsmanship: 5, Network: '77ms' },
    Skill: { Rank: 'Silver', Level: 14 },
    favoriteGameMode: 'Team death match'
  },
  Steel964: {
    preferences: { communication: 'mic', playstyle: 'Support' },
    Attributes: { toxicity: '15%', sportsmanship: 1, Network: '152ms' },
    Skill: { Rank: 'Platinum', Level: 92 },
    favoriteGameMode: 'Free for all'
  }
}





//adding data to firestore
for (const user in usersData) {
  const userRef = doc(db, 'users', user);
  setDoc(userRef, usersData[user]);
}
console.log("done!")