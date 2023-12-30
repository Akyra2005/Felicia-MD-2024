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
    kamera: {
      '0': '❌',
      '1': 'Canon PowerShot SX620 HS',
      '2': 'Fujifilm X-T30',
      '3': 'Sony A6400',
      '4': 'Canon EOS R6',
      '5': 'Sony Alpha 1',
   },
   pencahayaan: {
      '0': '❌',
      '1': 'Beginner',
      '2': 'Reasonable',
      '3': 'Great',
      '4': 'Professional',
      '5': 'Best',
    },
   tripod: {
      '0': '❌',
      '1': 'Tripod Mactrem PT55',
      '2': 'Tripod Manfrotto MT190XPRO4',
      '3': 'Tripod Gitzo GT1542T Series 1 Traveler',
      '4': 'Tripod Really Right Stuff TVC-33 Versa Series 3',
      '5': 'Tripod Really Right Stuff TVC-33 Versa Series 4',
      },
   se: {
      '0': '❌',
      '1': 'Sony Vegas Pro',
      '2': 'Avid Media Composer',
      '3': 'DaVinci Resolve',
      '4': 'Final Cut Pro X',
      '5': 'Adobe Premiere Pro',
    },
   internet: {
      '0': '❌',
      '1': 'IndiHome',
      '2': 'Biznet',
      '3': 'First Media',
      '4': 'MNC Play',
      '5': 'MyRepublic',
   },
   mb: {
      '0': '❌',
      '1': 'Motherboard ASRock A520M-HDV',
      '2': 'Motherboard ASUS ROG STRIX B550-F GAMING (WI-FI)',
      '3': 'Motherboard MSI MPG Z590 GAMING CARBON WIFI',
      '4': 'Motherboard ASUS PRIME TRX40-PRO S',
      '5': 'Motherboard ASUS ROG RAMPAGE VI EXTREME OMEGA ',
      },
   cpu: {
      '0': '❌',
      '1': 'AMD Ryzen 3 3200G',
      '2': 'Intel Pentium Gold G6400',
      '3': 'AMD Ryzen 5 3600',
      '4': 'Intel Core i5-10400F',
      '5': 'AMD Ryzen 9 5900X',
      },
   gpu: {
      '0': '❌',
      '1': 'Nvidia GeForce GT 1030',
      '2': 'AMD Radeon RX 550',
      '3': 'Nvidia GeForce GTX 1650',
      '4': 'AMD Radeon RX 6700 XT',
      '5': 'Nvidia GeForce RTX 3090',
      },
   ram: {
      '0': '❌',
      '1': 'Patriot Viper 4 Blackout Series DDR4 16GB (2 x 8GB) 3200MHz',
      '2': 'Corsair Vengeance LPX DDR4 16GB (2 x 8GB) 3000MHz',
      '3': 'G.Skill Ripjaws V DDR4 32GB (2 x 16GB) 3600MHz',
      '4': 'HyperX Fury DDR4 RGB 32GB (2 x 16GB) 3200MHz',
      '5': 'Corsair Dominator Platinum RGB DDR4 64GB (4 x 16GB) 3200MHz',
      },
   ssds: {
      '0': '❌',
      '1': 'Kingston A400',
      '2': 'WD Blue SN550 NVMe SSD',
      '3': 'Samsung 970 EVO Plus NVMe SSD',
      '4': 'Corsair MP600 Gen4 NVMe SSD',
      '5': 'Samsung PM1733 NVMe SSD',
      },
   monitor: {
      '0': '❌',
      '1': 'ASUS VS197DE',
      '2': 'LG 22MN430M-B',
      '3': 'Dell SE2719H',
      '4': 'Acer Predator X27',
      '5': 'Dell UltraSharp UP3218K',
       },
   hp: {
      '0': '❌',
      '1': 'Panasonic RP-HJE125',
      '2': 'JBL T450BT',
      '3': 'Sony WH-1000XM4',
      '4': 'Sennheiser HD 660 S',
      '5': 'Focal Utopia',
      },
   mak: {
      '0': '❌',
      '1': 'Logitech MK240',
      '2': 'Corsair K55 RGB',
      '3': 'Razer Blackwidow V3',
      '4': 'Logitech MX Keys',
      '5': 'Apple Magic Keyboard dan Magic Mouse 2',
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
*📺 Channel: ${user.chname}*
*▶️ Tipe YT: ${user.tipeyt}*
*👁️ Viewer: ${user.viewer}*
*👍 Like: ${user.like}*
*👎 Dislike: ${user.dislike}*
*☑️ Subscriber: ${user.subscriber}*
*🎦 Showtime: ${user.showtime}*
*💰 Monet: ${user.monet}*
*📼 Video: ${user.video}*

*Equipment*
${tools}

`.trim()
  m.reply(`*${htki} CHANNEL ${htka}*\n${caption}\n`);
}
handler.help = ['stat']
handler.tags = ['rpg']
handler.command = /^(stat)$/i

handler.register = false
export default handler
