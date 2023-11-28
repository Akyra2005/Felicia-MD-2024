import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
	let user = global.db.data.users[m.sender].age
  if (user < 17) throw m.reply(`*Kamu Belum Cukup Umur*`)
m.reply(wait)
let res = await fetch('https://api.waifu.pics/nsfw/waifu')

if (!res.ok) return m.react('❌')

let json = await res.json()

if (!json.url) return m.react('❌')

await conn.sendFile(m.chat, json.url, 'xwaifu.png', '*Sukses*', m)


}

handler.help = ['xwaifu']

handler.tags = ['nsfw','anime']

handler.command = ['xwaifu']

handler.limit = 2

export default handler