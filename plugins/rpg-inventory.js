const inventory = {
  others: {
    health: true,
    money: true,
    pengeluaran: true,
    pajak: true,
    exp: true,
    limit: true,
    os: true,
    gems: true,
    diperkosa: true,
    memperkosa: true,
    level: true,
	levelhunter: true,
    skill: true,
    stamina: true,
    mana: true,
    crystal: true,
    hargadiri: true,
    advenaglory: true,
	slayerglory: true,
	horizonglory: true,
	ravennaglory: true,
	apocalypseglory: true,
	sakanaglory: true,
	kazariteglory: true,
    chname: true,
    tipeyt: true,
    subscriber: true,
    esens: true
  },
  ability: {
    skillsport: true,
    skilladventure: true,
    skillgardening: true    
  },
  artefak: {
    elixirLevel: true,
    vitalityLevel: true
  },
  youtube: {
    chname: true
  },
  items: {
    osr: true,
    potion: true,
	drink: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    coal: true,
    diamond: true,
    gold: true,
    iron: true,
    upgrader: true,
    pet: true,
    botol: true,
    kaleng: true,
    kardus: true,
    ramuan: true,
    weapon: true,
	plastikpvc: true,
	semikonduktor: true,
    anakpancingan: true,
       mie :true,
                    telur: true,
                    bawangmerah: true,
                    bawangputih: true,
                    kecap: true,
                    garam: true,
                    saostiram: true,
                    merica: true,
                    air: true,
                    daunbawang: true,
  },
  fruit: {
    pisang: true,
    anggur: true,
    apel: true,
    mangga: true,
    jeruk: true,
    bibitpisang: true,
    bibitanggur: true,
    bibitapel: true,
    bibitmangga: true,
    bibitjeruk: true,
  },
  food: {
  	minyak: true,
    susu: true,
  pisanggoreng: true,
  jusmangga: true,
    ayambakar: true,
                    gulaiayam: true,
                    rendang: true,
                    ayamgoreng: true,
                    oporayam: true,
                    steak: true,
                    babipanggang: true,
                    ikanbakar: true,
                    lelebakar: true,
                    nilabakar: true,
                    bawalbakar: true,
                    udangbakar: true,
                    pausbakar: true,
                    kepitingbakar: true,      
                    mieayam: true,
  },
  animal: {
    panda: true,
    kambing: true,
    harimau: true,
    gajah: true,
    banteng: true,
    babihutan: true,
    monyet: true,
    kerbau: true,
    sapi: true,
    buaya: true,
    babi: true,
    ayam: true,
},
  fish: {
    paus: true,      
                    kepiting: true,
                    gurita: true,      
                    lobster: true,
                    lumba: true,
                    dory: true,
                    buntal: true,
                    cumi: true,
                    orca: true,
                    ikan: true,      
                    udang: true,
                    hiu: true, 
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    axdurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    ax: {
      '0': '❌',
      '1': 'Wooden Ax',
      '2': 'Stone Ax',
      '3': 'Iron Ax',
      '4': 'Gold Ax',
      '5': 'Copper Ax',
      '6': 'Diamond Ax',
      '7': 'Emerlad Ax',
      '8': 'Crystal Ax',
      '9': 'Obsidian Ax',
      '10': 'Netherite Ax',
      '11': 'Hacker Ax'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  },
}
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const tools = Object.keys(inventory.tools).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const ability = Object.keys(inventory.ability).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const artefak = Object.keys(inventory.artefak).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const youtube = Object.keys(inventory.youtube).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const items = Object.keys(inventory.items).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const fruit = Object.keys(inventory.fruit).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const food = Object.keys(inventory.food).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const animal = Object.keys(inventory.animal).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const fish = Object.keys(inventory.fish).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const dura = Object.keys(inventory.durabi).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const crates = Object.keys(inventory.crates).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
  const pets = Object.keys(inventory.pets).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
const caption = `
👤 Name: ${conn.getName(m.sender)}
🎖️ Tier: ${user.role}
🎖️ Rank Hunter: ${user.rank}
👑 Title: ${user.title}
🛡️ Perisai: ${user.lastperisai == 0 ? 'Non-Aktif' : 'Aktif'}
🌙 Nickname: ${user.nickname}
${Object.keys(inventory.others).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')}${tools ? `
TOOLS
${tools}` : ''}${dura ? `

${dura}` : ''}${ability ? `

ABILITY
${ability}
Total Level Ability: ${Object.keys(inventory.ability).map(v => user[v]).reduce((a, b) => a + b, 0)} Level` : ''}${artefak ? `

ARTEFAK
${artefak}
Total Level Artefak: ${Object.keys(inventory.artefak).map(v => user[v]).reduce((a, b) => a + b, 0)} Level` : ''}${youtube ? `

YOUTUBE
${youtube}
Total Performance: ${Object.keys(inventory.youtube).map(v => user[v]).reduce((a, b) => a + b, 0)} Performa` : ''}${items ? `

ITEMS
${items}
Total Items: ${Object.keys(inventory.items).map(v => user[v]).reduce((a, b) => a + b, 0)} Items` : ''}${fruit ? `

FRUIT
${fruit}
Total Fruit: ${Object.keys(inventory.fruit).map(v => user[v]).reduce((a, b) => a + b, 0)} Fruit` : ''}${food ? `

FOOD
${food}
Total Food: ${Object.keys(inventory.food).map(v => user[v]).reduce((a, b) => a + b, 0)} Food` : ''}${animal ? `

ANIMAL
${animal}
Total Animal: ${Object.keys(inventory.animal).map(v => user[v]).reduce((a, b) => a + b, 0)} Tail` : ''}${fish ? `

FISH
${fish}
Total Fish: ${Object.keys(inventory.fish).map(v => user[v]).reduce((a, b) => a + b, 0)} Fish` : ''}${crates ? `

CRATES
${crates}
Total Crates: ${Object.keys(inventory.crates).map(v => user[v]).reduce((a, b) => a + b, 0)} Crates` : ''}${pets || user.petFood ? `

PETS
${pets ? pets + '\n' : ''}${user.petFood ? '🍖 Peetfood: ' + user.petFood : ''}
`.trim() : ''}
`;

m.reply('*INVENTORY*\n\n' + caption);


}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal(ance)?|money|e?xp)$/i

handler.register = false
export default handler