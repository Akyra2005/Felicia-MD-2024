let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;
  let cost = 10; // Biaya membuat poster
  let cooldown = 3000; // Cooldown dalam milidetik (1 jam)

  if (!users[sender].organization) {
    throw '*Kamu Tidak Memiliki Faction*';
  }

  if (users[sender].lastRecruit && (new Date() - users[sender].lastRecruit) < cooldown) {
    let time = (cooldown - (new Date() - users[sender].lastRecruit)) / 1000;
    throw `Kamu Harus Menunggu ${time.toFixed(0)} Detik Untuk Membuat Poster Lagi`;
  }

  if (users[sender].money < cost) {
    throw '*Uang Kamu Tidak Cukup Untuk Membuat Poster*';
  }

  let followers = Math.floor(Math.random() * 4); // Jumlah pengikut (0-3)

  if (followers === 0) {
    conn.reply(m.chat, 'Sayang sekali, poster rekrutmenmu tidak menarik perhatian siapa pun', m);
    users[sender].lastRecruit = new Date();
    users[sender].money -= cost;
    return;
  }

  let names = generateUniqueNames(followers);

  let message = `[ REKRUTMEN PENGUNJUNG ]\n\n`;

  for (let i = 0; i < followers; i++) {
    let name = names[i];
    let race = getRandomRace();
    let age = getRandomAge();
    let gender = getRandomGender();
    let role = getRandomRole();
    let level = Math.floor(Math.random() * 11);

    let follower = {
      name: name,
      race: race,
      age: age,
      gender: gender,
      role: role,
      level: level
    };

    if (!users[sender].organization.followers) {
      users[sender].organization.followers = [];
    }

    users[sender].organization.followers.push(follower);

    message += `Nama: ${name}\n`;
    message += `Ras: ${race}\n`;
    message += `Umur: ${age} tahun\n`;
    message += `Gender: ${gender}\n`;
    message += `Role: ${role}\n`;
    message += `Level: ${level}\n\n`;
  }

  conn.reply(m.chat, message, m);

  users[sender].lastRecruit = new Date();
  users[sender].money -= cost;
};

handler.help = ['recruit'];
handler.tags = ['rpg'];
handler.command = /^recruit$/i;
handler.group = true;

export default handler;

// Fungsi untuk menghasilkan nama-nama unik
function generateUniqueNames(count) {
  let names = []
  
  while (names.length < count) {
    let name = generateRandomName()
    if (!names.includes(name)) {
      names.push(name)
    }
  }
  
  return names
}

// Fungsi untuk menghasilkan nama acak
function generateRandomName() {
  let syllables = ['ba', 'be', 'bi', 'bo', 'bu', 'ca', 'ce', 'ci', 'co', 'cu', 'da', 'de', 'di', 'do', 'du', 'fa', 'fe', 'fi', 'fo', 'fu', 'ga', 'ge', 'gi', 'go', 'gu', 'ha', 'he', 'hi', 'ho', 'hu', 'ja', 'je', 'ji', 'jo', 'ju', 'ka', 'ke', 'ki', 'ko', 'ku', 'la', 'le', 'li', 'lo', 'lu', 'ma', 'me', 'mi', 'mo', 'mu', 'na', 'ne', 'ni', 'no', 'nu', 'pa', 'pe', 'pi', 'po', 'pu', 'ra', 're', 'ri', 'ro', 'ru', 'sa', 'se', 'si', 'so', 'su', 'ta', 'te', 'ti', 'to', 'tu', 'va', 've', 'vi', 'vo', 'vu', 'wa', 'we', 'wi', 'wo', 'wu', 'ya', 'ye', 'yi', 'yo', 'yu', 'za', 'ze', 'zi', 'zo', 'zu']
  
  let name = ''
  
  for (let i = 0; i < 2; i++) {
    let syllable = syllables[Math.floor(Math.random() * syllables.length)]
    name += syllable
  }
  
  return name
}

// Fungsi untuk mendapatkan ras acak
function getRandomRace() {
let races = ['Elf', 'Dwarf', 'Human', 'Orc', 'Goblin', 'Fairy', 'Mermaid', 'Centaur', 'Werewolf', 'Vampire', 'Dragonborn', 'Satyr', 'Nymph', 'Siren', 'Harpy', 'Minotaur', 'Troll', 'Gnome', 'Halfling', 'Kitsune', 'Naga', 'Angel', 'Demon', 'Shapeshifter', 'Gorgon', 'Cyclops', 'Succubus', 'Incubus', 'Elemental', 'Witch', 'Wizard', 'Leprechaun', 'Sprite', 'Ghost', 'Mummy', 'Zombie', 'Phoenix', 'Dryad', 'Sylph', 'Doppelganger', 'Faun', 'Oni', 'Satellite', 'Android', 'Mecha', 'Spirit', 'Frost Giant', 'Salamander', 'Unicorn', 'Pegasus', 'Griffon', 'Banshee', 'Kraken', 'Chimera', 'Hydra', 'Pixie', 'Golem', 'Tengu', 'Centaurs', 'Jinn', 'Lycanthrope', 'Rakshasa', 'Shinigami', 'Thunderbird', 'Yeti', 'Wendigo', 'Giant', 'Valkyrie', 'Djinn', 'Fenghuang', 'Harbinger', 'Incarnate', 'Jotunn', 'Kappa', 'Lamia', 'Manticore', 'Nekomata', 'Pooka', 'Roc', 'Succubi', 'Tanuki', 'Wraith', 'Yokai', 'Ziz', 'Celestial', 'Lich', 'Merman', 'Ghoul', 'Wight', 'Kobold', 'Changeling', 'Gargoyle', 'Imp', 'Satyr', 'Selkie', 'Shade', 'Tiefling']
  return races[Math.floor(Math.random() * races.length)]
}

// Fungsi untuk mendapatkan umur acak
function getRandomAge() {
  return Math.floor(Math.random() * 20) + 10
}

// Fungsi untuk mendapatkan gender acak
function getRandomGender() {
  let genders = ['Male', 'Female']
  return genders[Math.floor(Math.random() * genders.length)]
}

// Fungsi untuk mendapatkan role acak
function getRandomRole() {
let roles = [
  'Warrior', 'Mage', 'Rogue', 'Cleric', 'Archer',
  'Paladin', 'Sorcerer', 'Assassin', 'Priest', 'Hunter',
  'Knight', 'Wizard', 'Thief', 'Druid', 'Sniper',
  'Berserker', 'Warlock', 'Ninja', 'Monk', 'Ranger',
  'Swordsman', 'Enchanter', 'Scout', 'Shaman', 'Trapper',
  'Lancer', 'Illusionist', 'Acrobat', 'Exorcist', 'Tracker',
  'Crusader', 'Elementalist', 'Shadow', 'Healer', 'Marksman',
  'Gladiator', 'Summoner', 'Spy', 'Oracle', 'Warden',
  'Brawler', 'Archmage', 'Duelist', 'High Priest', 'Sentinel',
  'Valkyrie', 'Mystic', 'Ranger', 'Warrior Priest', 'Huntsman',
  'Samurai', 'Necromancer', 'Stealth', 'Diviner', 'Beastmaster',
  'Barbarian', 'Battle Mage', 'Swashbuckler', 'Battle Cleric', 'Sharpshooter',
  'Warlord', 'Arcanist', 'Shadowblade', 'Bishop', 'Runekeeper',
  'Templar', 'Sorceress', 'Infiltrator', 'Sage', 'Scavenger',
  'Dreadknight', 'Pyromancer', 'Nightblade', 'Pilgrim', 'Artificer',
  'Dragoon', 'Chronomancer', 'Tamer', 'Shepherd', 'Arbalest',
  'Berserk', 'Spellbinder', 'Skirmisher', 'Acolyte', 'Ranger',
  'Geomancer', 'Puppeteer', 'Slayer', 'Cantor', 'Marksman'
]
  return roles[Math.floor(Math.random() * roles.length)]
}