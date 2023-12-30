let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  
  //----------HARGA
  let hdog = 20
  let hcat = 20
  let hhorse = 40
  let hfox = 60
  let hpetfood = 65000

let caption = `
*「 P E T   S H O P 」*

*Pet List*
🐈 • *Car:* ${hcat} Pet Token
🐕 • *Dog:* ${hdog} Pet Token
🐎 • *Horse:* ${hhorse} Pet Token
🦊 • *Fox:* ${hfox} Pet Token

🥫 • *Pet Food:* ${hpetfood} Money 💵


${htki} ABILITY ${htka}
*🐈 Cat:*
*_- Meningkatkan HP 5%/Level Saat .heal Digunakan_*

`
const sections = [
   {
	title: "𝗣𝗘𝗧 𝗦𝗧𝗢𝗥𝗘",
	rows: [
	    {title: "🐈 • Cat", rowId: ".petshop2 cat"},
	    {title: "🐕 • Dog", rowId: ".petshop2 dog"},
	    {title: "🐎 • Horse", rowId: ".petshop2 horse"},
	    {title: "🦊 • Fox", rowId: ".petshop2 fox"},
	    {title: "🍖 • Pet Food", rowId: ".petshop2 petfood"},
	]
    },
]

const listMessage = {
  text: `*${htki} PET SHOP ${htka}*`,
  footer: caption,
  title: ' ',
  buttonText: "𝗕 𝗨 𝗬",
  sections
}

  try {
    if (/petshop2/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('*_Kamu Sudah Memiliki Pet Tersebut_*')
            if(user.pet < hcat) return m.reply(`*_Pet Token Kamu Tidak Cukup_*`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `*CONGRATS*\n*_Kamu Membeli Pet Cat_*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗙𝗘𝗘𝗗', `.feed ${type}`]],m)
            break
          case 'dog':
          if (user.dog > 0) return m.reply('*_Kamu Sudah Memiliki Pet Tersebut_*')
            if(user.pet < hdog) return m.reply(`*_Pet Token Kamu Tidak Cukup_*`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `*CONGRATS*\n*_Kamu Membeli Pet Dog_*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗙𝗘𝗘𝗗', `.feed ${type}`]],m)
            break
          case 'fox':
          if (user.fox > 0) return m.reply('*_Kamu Sudah Memiliki Pet Tersebut_*')
            if(user.pet < hfox) return m.reply(`*_Pet Token Kamu Tidak Cukup_*`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `*CONGRATS*\n*_Kamu Membeli Pet Fox_*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗙𝗘𝗘𝗗', `.feed ${type}`]],m)
            break
          case 'horse':
          if (user.horse > 0) return m.reply('*_Kamu Sudah Memiliki Pet Tersebut_*')
            if(user.pet < hhorse) return m.reply(`*_Pet Token Kamu Tidak Cukup_*`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `*CONGRATS*\n*_Kamu Membeli Pet Horse_*`, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗙𝗘𝗘𝗗', `.feed ${type}`]],m)
            break
          case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood * count) {
            global.db.data.users[m.sender].petFood += count * 1
            global.db.data.users[m.sender].money -= hpetfood * count
            global.db.data.users[m.sender].pengeluaran += hpetfood * count
            conn.sendButton(m.chat, `*${htki} BUYING ${htka}*`, `Sukses Membeli *${count}* Makanan Pet, Dengan Harga *${hpetfood * count}* Money 💵`,null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv']], m)
          } else conn.reply(m.chat, `*_Money Kamu Tidak Cukup_*`, m) 
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, {quoted: m})
        }
    } else if (/Ughh/i.test(command)) {
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

handler.help = ['petshop2']
handler.tags = ['rpg']
handler.command = /^(petshop2)/i
handler.register = false
export default handler
