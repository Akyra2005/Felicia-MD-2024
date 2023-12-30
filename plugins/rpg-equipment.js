let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let buf = user.kamera
  let buf1 = user.pencahayaan
  let buf2 = user.tripod
  let buf3 = user.se
  let buf4 = user.internet
  let buf5 = user.mb
  let buf6 = user.cpu
  let buf7 = user.gpu
  let buf8 = user.ram
  let buf9 = user.ssds
  let buf10 = user.monitor
  let buf11 = user.hp
  let buf12 = user.mak
  let buf13 = user.att
  let buff = (buf == 0 ? '2500000' : '' || buf == 1 ? '12500000' : '' || buf == 2 ? '17500000' : '' || buf == 3 ? '52500000' : '' || buf == 4 ? '90000000' : '') 
  let buff1 = (buf1 == 0 ? '50000' : '' || buf1 == 1 ? '90000' : '' || buf1 == 2 ? '150000' : '' || buf1 == 3 ? '200000' : '' || buf1 == 4 ? '300000' : '') 
  let buff2 = (buf2 == 0 ? '300000' : '' || buf2 == 1 ? '4000000' : '' || buf2 == 2 ? '20000000' : '' || buf2 == 3 ? '50000000' : '' || buf2 == 4 ? '99999000' : '') 
  let buff3 = (buf3 == 0 ? '600000' : '' || buf3 == 1 ? '800000' : '' || buf3 == 2 ? '1000000' : '' || buf3 == 3 ? '10000000' : '' || buf3 == 4 ? '20000000' : '') 
  let buff4 = (buf4 == 0 ? '1500000' : '' || buf4 == 1 ? '2000000' : '' || buf4 == 2 ? '2500000' : '' || buf4 == 3 ? '250000' : '' || buf4 == 4 ? '3000000' : '') 
  let buff5 = (buf5 == 0 ? '2500000' : '' || buf5 == 1 ? '3500000' : '' || buf5 == 2 ? '4500000' : '' || buf5 == 3 ? '6500000' : '' || buf5 == 4 ? '15000000' : '') 
  let buff6 = (buf6 == 0 ? '1400000' : '' || buf6 == 1 ? '1200000' : '' || buf6 == 2 ? '3500000' : '' || buf6 == 3 ? '3500000' : '' || buf6 == 4 ? '12000000' : '') 
  let buff7 = (buf7 == 0 ? '1500000' : '' || buf7 == 1 ? '2000000' : '' || buf7 == 2 ? '4500000' : '' || buf7 == 3 ? '15000000' : '' || buf7 == 4 ? '50000000' : '') 
  let buff8 = (buf8 == 0 ? '1200000' : '' || buf8 == 1 ? '1400000' : '' || buf8 == 2 ? '2500000' : '' || buf8 == 3 ? '3200000' : '' || buf8 == 4 ? '25000000' : '') 
  let buff9 = (buf9 == 0 ? '100000' : '' || buf9 == 1 ? '500000' : '' || buf9 == 2 ? '1000000' : '' || buf9 == 3 ? '3000000' : '' || buf9 == 4 ? '50000000' : '') 
  let buff10 = (buf10 == 0 ? '1000000' : '' || buf10 == 1 ? '1500000' : '' || buf10 == 2 ? '3000000' : '' || buf10 == 3 ? '35000000' : '' || buf10 == 4 ? '50000000' : '') 
  let buff11 = (buf11 == 0 ? '100000' : '' || buf11 == 1 ? '500000' : '' || buf11 == 2 ? '6500000' : '' || buf11 == 3 ? '12000000' : '' || buf11 == 4 ? '50000000' : '') 
  let buff12 = (buf12 == 0 ? '200000' : '' || buf12 == 1 ? '700000' : '' || buf12 == 2 ? '2500000' : '' || buf12 == 3 ? '3500000' : '' || buf12 == 4 ? '3500000' : '') 
  let buff13 = (buf13 > 0 ? '1' : '' || buf13 > 9 ? '4' : '' || buf12 > 19 ? '9' : '' || buf12 > 29 ? '19' : '' || buf12 > 39 ? '29' : '') 
  let botol = global.botwm
let lgocraft = `
*「 YOUTUBERS EQUIPMENT 」*
`

  let caption = `
*EQUIPMENT (Maks 5 Lv)*

_Kamera_
_Pencahayaan_
_Tripod_
_Software Editing_
_Internet_
_Motherboard_
_Prosesor (CPU)_
_Kartu Grafis (GPU)_
_RAM_
_SSDs_
_Monitor_
_Headphone_
_Mouse & Keyboard_


*ACCORDING TO TYPE (Maks 40 Lv)*
_Lain-Lainnya_
_Peralatan Ini Dikhususkan Sesuai Tipemu, Ini Juga Penting_
`
const sections = [
   {
	title: "𝗘𝗤𝗨𝗜𝗣𝗠𝗘𝗡𝗧 𝗟𝗘𝗩𝗘𝗟",
	rows: [
	    {title: "Kamera", rowId: ".equipment2 kamera", description: "Camera Tiers"},
	    {title: "Pencahayaan", rowId: ".equipment2 pencahayaan", description: "Lighting Tiers"},
	    {title: "Tripod", rowId: ".equipment2 tripod", description: "Tripods Tiers"},
	    {title: "Software Editing", rowId: ".equipment2 se", description: "Software Editing Tiers"},
	    {title: "Internet", rowId: ".equipment2 internet", description: "Internet Tiers"},
	    {title: "Motherboard", rowId: ".equipment2 mb", description: "Motherboard Tiers"},
	    {title: "Prosesor (CPU)", rowId: ".equipment2 cpu", description: "CPU Tiers"},
	    {title: "Kartu Grafis (GPU)", rowId: ".equipment2 gpu", description: "GPU Tiers"},
	    {title: "RAM", rowId: ".equipment2 ram", description: "RAM Tiers"},
	    {title: "SSDs", rowId: ".equipment2 ssds", description: "SSDs Tiers"},
	    {title: "Monitor", rowId: ".equipment2 monitor", description: "Monitor Tiers"},
	    {title: "Headphone", rowId: ".equipment2 hp", description: "Headphone Tiers"},
	    {title: "Mouse & Keyboard", rowId: ".equipment2 mak", description: "Mouse & Keyboard Tiers"},
	    {title: "According To Type", rowId: ".equipment2 att", description: "Mouse & Keyboard Tiers"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/equipment2|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'kamera':
          if (user.kamera > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff} Money 💵 (Harga Asli Kamera)_*`)
            global.db.data.users[m.sender].kamera += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff
            global.db.data.users[m.sender].pengeluaran += 1 * buff
            m.reply("*_Sukses Meningkatkan Kamera_*")
            break       
            case 'pencahayaan':
          if (user.pencahayaan > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff1) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff1} Money 💵 (Kepooo)_*`)
            global.db.data.users[m.sender].pencahayaan += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff1
            global.db.data.users[m.sender].pengeluaran += 1 * buff1
            m.reply("*_Sukses Meningkatkan Pencahayaan_*")
            break       
            case 'tripod':
          if (user.tripod > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff2) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff2} Money 💵 (Harga Asli Tripod)_*`)
            global.db.data.users[m.sender].tripod += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff2
            global.db.data.users[m.sender].pengeluaran += 1 * buff2
            m.reply("*_Sukses Meningkatkan Tripod_*")
            break       
          case 'se':
          if (user.se > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff3) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff3} Money 💵 (Harga Asli Software Editing)_*`)
            global.db.data.users[m.sender].se += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff3
            global.db.data.users[m.sender].pengeluaran += 1 * buff3
            m.reply("*_Sukses Meningkatkan Software Editing_*")
            break       
          case 'internet':
          if (user.internet > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff4) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff4} Money 💵 (Harga Asli Layanan)_*`)
            global.db.data.users[m.sender].internet += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff4
            global.db.data.users[m.sender].pengeluaran += 1 * buff4
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'internet':
          if (user.internet > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff4) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff4} Money 💵 (Harga Asli Layanan)_*`)
            global.db.data.users[m.sender].internet += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff4
            global.db.data.users[m.sender].pengeluaran += 1 * buff4
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'mb':
          if (user.mb > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff5) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff5} Money 💵 (Harga Asli Motherboard)_*`)
            global.db.data.users[m.sender].mb += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff5
            global.db.data.users[m.sender].pengeluaran += 1 * buff5
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'cpu':
          if (user.cpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff6) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff6} Money 💵 (Harga Asli CPU)_*`)
            global.db.data.users[m.sender].cpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff6
            global.db.data.users[m.sender].pengeluaran += 1 * buff6
            m.reply("*_Sukses Meningkatkan Prosesor (CPU)_*")
            break       
            case 'gpu':
          if (user.gpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff7) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff7} Money 💵 (Harga Asli GPU)_*`)
            global.db.data.users[m.sender].gpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff7
            global.db.data.users[m.sender].pengeluaran += 1 * buff7
            m.reply("*_Sukses Meningkatkan Kartu Grafis (GPU)_*")
            break       
            case 'gpu':
          if (user.gpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff7) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff7} Money 💵 (Harga Asli GPU)_*`)
            global.db.data.users[m.sender].gpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff7
            global.db.data.users[m.sender].pengeluaran += 1 * buff7
            m.reply("*_Sukses Meningkatkan Kartu Grafis (GPU)_*")
            break       
            case 'ram':
          if (user.ram > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff8) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff8} Money 💵 (Harga Asli RAM)_*`)
            global.db.data.users[m.sender].ram += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff8
            global.db.data.users[m.sender].pengeluaran += 1 * buff8
            m.reply("*_Sukses Meningkatkan RAM (Random Access Memory)_*")
            break       
            case 'ssds':
          if (user.ssds > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff9) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff9} Money 💵 (Harga Asli SSDs)_*`)
            global.db.data.users[m.sender].ssds += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff9
            global.db.data.users[m.sender].pengeluaran += 1 * buff9
            m.reply("*_Sukses Meningkatkan SSDs (Solid State Drive)_*")
            break       
            case 'monitor':
          if (user.monitor > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff10) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff10} Money 💵 (Harga Asli Monitor)_*`)
            global.db.data.users[m.sender].monitor += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff10
            global.db.data.users[m.sender].pengeluaran += 1 * buff10
            m.reply("*_Sukses Meningkatkan Monitor_*")
            break       
            case 'hp':
          if (user.hp > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff11) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff11} Money 💵 (Harga Asli Headphone)_*`)
            global.db.data.users[m.sender].hp += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff11
            global.db.data.users[m.sender].pengeluaran += 1 * buff11
            m.reply("*_Sukses Meningkatkan Headphone_*")
            break       
            case 'mak':
          if (user.mak > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff12) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff12} Money 💵 (Harga Asli Mouse And Keyboard)_*`)
            global.db.data.users[m.sender].mak += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff12
            global.db.data.users[m.sender].pengeluaran += 1 * buff12
            m.reply("*_Sukses Meningkatkan Headphone_*")
            break       
          case 'att':
          if (user.att > 39) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 500000 * buff13) return m.reply(`*Kamu Memerlukan:*\n*_${500000 * buff13} Money 💵 (ATT)_*`)
            global.db.data.users[m.sender].att += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 500000 * buff13
            global.db.data.users[m.sender].pengeluaran += 500000 * buff13
            m.reply("*_Sukses Meningkatkan ATT_*")
            break       
         

          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['equipment2']
handler.tags = ['rpg']
handler.command = /^(equipment2)/i
handler.register = false
export default handler






let { MessageType } = (await import('@adiwajshing/baileys')).default;

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase();
    let user = global.db.data.users[m.sender];
    let buf = user.kamera
  let buf1 = user.pencahayaan
  let buf2 = user.tripod
  let buf3 = user.se
  let buf4 = user.internet
  let buf5 = user.mb
  let buf6 = user.cpu
  let buf7 = user.gpu
  let buf8 = user.ram
  let buf9 = user.ssds
  let buf10 = user.monitor
  let buf11 = user.hp
  let buf12 = user.mak
  let buf13 = user.att
  let buff = (buf == 0 ? '2500000' : '' || buf == 1 ? '12500000' : '' || buf == 2 ? '17500000' : '' || buf == 3 ? '52500000' : '' || buf == 4 ? '90000000' : '') 
  let buff1 = (buf1 == 0 ? '50000' : '' || buf1 == 1 ? '90000' : '' || buf1 == 2 ? '150000' : '' || buf1 == 3 ? '200000' : '' || buf1 == 4 ? '300000' : '') 
  let buff2 = (buf2 == 0 ? '300000' : '' || buf2 == 1 ? '4000000' : '' || buf2 == 2 ? '20000000' : '' || buf2 == 3 ? '50000000' : '' || buf2 == 4 ? '99999000' : '') 
  let buff3 = (buf3 == 0 ? '600000' : '' || buf3 == 1 ? '800000' : '' || buf3 == 2 ? '1000000' : '' || buf3 == 3 ? '10000000' : '' || buf3 == 4 ? '20000000' : '') 
  let buff4 = (buf4 == 0 ? '1500000' : '' || buf4 == 1 ? '2000000' : '' || buf4 == 2 ? '2500000' : '' || buf4 == 3 ? '250000' : '' || buf4 == 4 ? '3000000' : '') 
  let buff5 = (buf5 == 0 ? '2500000' : '' || buf5 == 1 ? '3500000' : '' || buf5 == 2 ? '4500000' : '' || buf5 == 3 ? '6500000' : '' || buf5 == 4 ? '15000000' : '') 
  let buff6 = (buf6 == 0 ? '1400000' : '' || buf6 == 1 ? '1200000' : '' || buf6 == 2 ? '3500000' : '' || buf6 == 3 ? '3500000' : '' || buf6 == 4 ? '12000000' : '') 
  let buff7 = (buf7 == 0 ? '1500000' : '' || buf7 == 1 ? '2000000' : '' || buf7 == 2 ? '4500000' : '' || buf7 == 3 ? '15000000' : '' || buf7 == 4 ? '50000000' : '') 
  let buff8 = (buf8 == 0 ? '1200000' : '' || buf8 == 1 ? '1400000' : '' || buf8 == 2 ? '2500000' : '' || buf8 == 3 ? '3200000' : '' || buf8 == 4 ? '25000000' : '') 
  let buff9 = (buf9 == 0 ? '100000' : '' || buf9 == 1 ? '500000' : '' || buf9 == 2 ? '1000000' : '' || buf9 == 3 ? '3000000' : '' || buf9 == 4 ? '50000000' : '') 
  let buff10 = (buf10 == 0 ? '1000000' : '' || buf10 == 1 ? '1500000' : '' || buf10 == 2 ? '3000000' : '' || buf10 == 3 ? '35000000' : '' || buf10 == 4 ? '50000000' : '') 
  let buff11 = (buf11 == 0 ? '100000' : '' || buf11 == 1 ? '500000' : '' || buf11 == 2 ? '6500000' : '' || buf11 == 3 ? '12000000' : '' || buf11 == 4 ? '50000000' : '') 
  let buff12 = (buf12 == 0 ? '200000' : '' || buf12 == 1 ? '700000' : '' || buf12 == 2 ? '2500000' : '' || buf12 == 3 ? '3500000' : '' || buf12 == 4 ? '3500000' : '') 
  let buff13 = (buf13 > 0 ? '1' : '' || buf13 > 9 ? '4' : '' || buf12 > 19 ? '9' : '' || buf12 > 29 ? '19' : '' || buf12 > 39 ? '29' : '') 

    let lgocraft = `
*「 YOUTUBERS EQUIPMENT 」*
`;

    let caption = `
*EQUIPMENT (Maks 5 Lv)*

_Kamera_
_Pencahayaan_
_Tripod_
_Software Editing_
_Internet_
_Motherboard_
_Prosesor (CPU)_
_Kartu Grafis (GPU)_
_RAM_
_SSDs_
_Monitor_
_Headphone_
_Mouse & Keyboard_


*ACCORDING TO TYPE (Maks 40 Lv)*
_Lain-Lainnya_
_Peralatan Ini Dikhususkan Sesuai Tipemu, Ini Juga Penting_
`;

    try {
        if (/equipment2|Crafting/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count);

            switch (type) {
            case 'kamera':
                    if (user.kamera > 4) return m.reply('*_Level Sudah Maks_*');
                    if (user.money < 1 * buff) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff} Money 💵 (Harga Asli Kamera)_*`);
                    global.db.data.users[m.sender].kamera += 1;
                    global.db.data.users[m.sender].skillyt += 1;
                    global.db.data.users[m.sender].money -= 1 * buff;
                    global.db.data.users[m.sender].pengeluaran += 1 * buff;
                    m.reply("*_Sukses Meningkatkan Kamera_*");
                    break;
               case 'pencahayaan':
          if (user.pencahayaan > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff1) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff1} Money 💵 (Kepooo)_*`)
            global.db.data.users[m.sender].pencahayaan += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff1
            global.db.data.users[m.sender].pengeluaran += 1 * buff1
            m.reply("*_Sukses Meningkatkan Pencahayaan_*")
            break       
            case 'tripod':
          if (user.tripod > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff2) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff2} Money 💵 (Harga Asli Tripod)_*`)
            global.db.data.users[m.sender].tripod += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff2
            global.db.data.users[m.sender].pengeluaran += 1 * buff2
            m.reply("*_Sukses Meningkatkan Tripod_*")
            break       
          case 'se':
          if (user.se > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff3) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff3} Money 💵 (Harga Asli Software Editing)_*`)
            global.db.data.users[m.sender].se += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff3
            global.db.data.users[m.sender].pengeluaran += 1 * buff3
            m.reply("*_Sukses Meningkatkan Software Editing_*")
            break       
          case 'internet':
          if (user.internet > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff4) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff4} Money 💵 (Harga Asli Layanan)_*`)
            global.db.data.users[m.sender].internet += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff4
            global.db.data.users[m.sender].pengeluaran += 1 * buff4
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'internet':
          if (user.internet > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff4) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff4} Money 💵 (Harga Asli Layanan)_*`)
            global.db.data.users[m.sender].internet += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff4
            global.db.data.users[m.sender].pengeluaran += 1 * buff4
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'mb':
          if (user.mb > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff5) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff5} Money 💵 (Harga Asli Motherboard)_*`)
            global.db.data.users[m.sender].mb += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff5
            global.db.data.users[m.sender].pengeluaran += 1 * buff5
            m.reply("*_Sukses Meningkatkan Layanan Internet_*")
            break       
            case 'cpu':
          if (user.cpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff6) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff6} Money 💵 (Harga Asli CPU)_*`)
            global.db.data.users[m.sender].cpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff6
            global.db.data.users[m.sender].pengeluaran += 1 * buff6
            m.reply("*_Sukses Meningkatkan Prosesor (CPU)_*")
            break       
            case 'gpu':
          if (user.gpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff7) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff7} Money 💵 (Harga Asli GPU)_*`)
            global.db.data.users[m.sender].gpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff7
            global.db.data.users[m.sender].pengeluaran += 1 * buff7
            m.reply("*_Sukses Meningkatkan Kartu Grafis (GPU)_*")
            break       
            case 'gpu':
          if (user.gpu > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff7) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff7} Money 💵 (Harga Asli GPU)_*`)
            global.db.data.users[m.sender].gpu += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff7
            global.db.data.users[m.sender].pengeluaran += 1 * buff7
            m.reply("*_Sukses Meningkatkan Kartu Grafis (GPU)_*")
            break       
            case 'ram':
          if (user.ram > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff8) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff8} Money 💵 (Harga Asli RAM)_*`)
            global.db.data.users[m.sender].ram += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff8
            global.db.data.users[m.sender].pengeluaran += 1 * buff8
            m.reply("*_Sukses Meningkatkan RAM (Random Access Memory)_*")
            break       
            case 'ssds':
          if (user.ssds > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff9) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff9} Money 💵 (Harga Asli SSDs)_*`)
            global.db.data.users[m.sender].ssds += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff9
            global.db.data.users[m.sender].pengeluaran += 1 * buff9
            m.reply("*_Sukses Meningkatkan SSDs (Solid State Drive)_*")
            break       
            case 'monitor':
          if (user.monitor > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff10) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff10} Money 💵 (Harga Asli Monitor)_*`)
            global.db.data.users[m.sender].monitor += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff10
            global.db.data.users[m.sender].pengeluaran += 1 * buff10
            m.reply("*_Sukses Meningkatkan Monitor_*")
            break       
            case 'hp':
          if (user.hp > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff11) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff11} Money 💵 (Harga Asli Headphone)_*`)
            global.db.data.users[m.sender].hp += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff11
            global.db.data.users[m.sender].pengeluaran += 1 * buff11
            m.reply("*_Sukses Meningkatkan Headphone_*")
            break       
            case 'mak':
          if (user.mak > 4) return m.reply('*_Level Sudah Maks_*')
          if(user.money < 1 * buff12) return m.reply(`*Kamu Memerlukan:*\n*_${1 * buff12} Money 💵 (Harga Asli Mouse And Keyboard)_*`)
            global.db.data.users[m.sender].mak += 1
            global.db.data.users[m.sender].skillyt += 1
            global.db.data.users[m.sender].money -= 1 * buff12
            global.db.data.users[m.sender].pengeluaran += 1 * buff12
            m.reply("*_Sukses Meningkatkan Headphone_*")
            break             
                case 'att':
                    if (user.att > 39) return m.reply('*_Level Sudah Maks_*');
                    if (user.money < 500000 * buff) return m.reply(`*Kamu Memerlukan:*\n*_${500000 * buff} Money 💵 (ATT)_*`);
                    global.db.data.users[m.sender].att += 1;
                    global.db.data.users[m.sender].skillyt += 1;
                    global.db.data.users[m.sender].money -= 500000 * buff;
                    global.db.data.users[m.sender].pengeluaran += 500000 * buff;
                    m.reply("*_Sukses Meningkatkan ATT_*");
                    break;

                default:
                    return await conn.sendMessage(m.chat, caption);
            }
        } else if (/enchant|enchan/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count);

            switch (type) {
                case 't':
                    // Logika untuk enchant type 't'
                    break;
                case '':
                    // Logika untuk enchant tanpa type
                    break;

                default:
                    return conn.sendButton(m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m);
            }
        }
    } catch (err) {
        m.reply("Error\n\n\n" + err.stack);
    }
};

handler.help = ['equipment2'];
handler.tags = ['rpg'];
handler.command = /^(equipment2)/i;
handler.register = false;
export default handler;
