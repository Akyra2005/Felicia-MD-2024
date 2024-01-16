import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *${usedPrefix}enable 33*`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `*Kamu Belum Cukup Umur*`
  if (!text) throw `Format Pencarian: *${usedPrefix + command} Kata Kunci*\n\nFormat Unduhan: *${usedPrefix + command} Tautan*`
   m.react = ('🔄')
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`Masukkan Tautan Dari *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
*PENGUNDUHAN XNXX*
            
Judul: *${xn.result.title}*
Durasi: *${xn.result.duration}*
Kualitas: *${xn.result.quality}*
`.trim(), m, false, { asDocument: chat.useDocument })
           m.react = ('✅')
 } catch (e) {
    m.reply(`*E R R O R*`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}. Judul: *${v.title}*\nTautan: *${v.link}*\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`*E R R O R*`)
               }
    }
}
handler.help = ['xnxx'].map(v => v + ' <query/url>')
handler.tags = ['nsfw']
handler.command = ['xnxxsearch', 'xnxx'] 
handler.premium = false
handler.limit = 3
handler.register = false

export default handler