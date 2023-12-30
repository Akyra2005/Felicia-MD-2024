import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

const inventory = {
  others: {
    health: true,
    money: true,
    pengeluaran: true,
    pajak: true,
    exp: true,
    limit: true,
    intelligence: true,
    os: true,
    gems: true,
    diperkosa: true,
    memperkosa: true,
    level: true,
    skill: true,
    ras: true,
    husbu: true,
    waifu: true,
    stamina: true,
    mana: true,
    crystal: true,
    mooncard: true,
    starcard: true,
    hargadiri: true
  },
  ability: {
    skillsport: true,
    skilladventure: true,
    skillgardening: true    
  },
  youtube: {
    chname: true
  },
  items: {
    osr: true,
    potion: true,
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
    c1: {
      '0': '❌',
      '1': 'Toyota Supra',
      '2': '2 Toyota Supra',
      '3': '3 Toyota Supra',
      '4': '4 Toyota Supra',
      '5': '5 Toyota Supra',
   },
   c2: {
      '0': '❌',
      '1': 'Nissan GT-R',
      '2': '2 Nissan GT-R',
      '3': '3 Nissan GT-R',
      '4': '4 Nissan GT-R',
      '5': '5 Nissan GT-R',
    },
   c3: {
      '0': '❌',
      '1': 'Honda NSX',
      '2': '2 Honda NSX',
      '3': '3 Honda NSX',
      '4': '4 Honda NSX',
      '5': '5 Honda NSX',
      },
   c4: {
      '0': '❌',
      '1': 'Mazda RX-7',
      '2': '2 Mazda RX-7',
      '3': '3 Mazda RX-7',
      '4': '4 Mazda RX-7',
      '5': '5 Mazda RX-7',
    },
   c5: {
      '0': '❌',
      '1': 'Mitsubishi Lancer Evolution',
      '2': '2 Mitsubishi Lancer Evolution',
      '3': '3 Mitsubishi Lancer Evolution',
      '4': '4 Mitsubishi Lancer Evolution',
      '5': '5 Mitsubishi Lancer Evolution',
   },
   c6: {
      '0': '❌',
      '1': 'Subaru WRX STI',
      '2': '2 Subaru WRX STI',
      '3': '3 Subaru WRX STI',
      '4': '4 Subaru WRX STI',
      '5': '5 Subaru WRX STI',
      },
   c7: {
      '0': '❌',
      '1': 'Nissan Silvia',
      '2': '2 Nissan Silvia',
      '3': '3 Nissan Silvia',
      '4': '4 Nissan Silvia',
      '5': '5 Nissan Silvia',
      },
   c8: {
      '0': '❌',
      '1': 'Toyota AE86',
      '2': '2 Toyota AE86',
      '3': '3 Toyota AE86',
      '4': '4 Toyota AE86',
      '5': '5 Toyota AE86',
      },
   c9: {
      '0': '❌',
      '1': 'Mazda MX-5 Miata',
      '2': '2 Mazda MX-5 Miata',
      '3': '3 Mazda MX-5 Miata',
      '4': '4 Mazda MX-5 Miata',
      '5': '5 Mazda MX-5 Miata',
      },
   c10: {
      '0': '❌',
      '1': 'Mitsubishi 3000GT',
      '2': '2 Mitsubishi 3000GT',
      '3': '3 Mitsubishi 3000GT',
      '4': '4 Mitsubishi 3000GT',
      '5': '5 Mitsubishi 3000GT',
      }
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
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'weekly',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const tools = Object.keys(inventory.tools).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const caption = `
  
${tools}

`.trim()
  m.reply(`${htki} GARAGE ${htka}\n${caption}\n`);
}
handler.help = ['garage']
handler.tags = ['rpg']
handler.command = /^(garage)$/i

export default handler