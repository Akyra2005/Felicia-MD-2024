import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
		let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
	let res = await fetch(`https://xyroinee-apis.claraaaaaaa1909.repl.co/api/anime/nekopoi?apikey=wiWISTatY8`)
	let anu = await res.json()
	const bkp = conn.sendFile(m.chat, anu.data, 'wikwik.mp4', '*Sukses*', m)
} 
handler.command = /^(bokep3)$/i
handler.tags = ['nsfw']
handler.help = ['bokep3']
handler.limit = 3
handler.register = false
export default handler