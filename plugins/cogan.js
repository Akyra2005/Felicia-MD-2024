import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/cogan?apikey=${global.lolkey}`
	conn.sendFile(m.chat, url, 'anu.jpg', '*Sukses*', m)
}
handler.command = /^(cogan)$/i
handler.tags = ['asupan']
handler.help = ['cogan']
handler.premium = false
handler.register = false
handler.limit = 1
 
export default handler