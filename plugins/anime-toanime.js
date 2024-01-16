import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Balas Media Dengan Perintah *.toanime*'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${global.lolkey}&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', '*Sukses*', m)
}
handler.help = ['toanime', 'jadianime']
handler.tags = ['anime', 'ai']
handler.command = /^(jadianime|toanime)$/i
handler.limit = 3
handler.register = false
export default handler