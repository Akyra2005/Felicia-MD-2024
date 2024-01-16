import axios from 'axios'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
    if (!text) throw `Format: *.otakudl Tautan*`
    if (!text.includes("episode")) throw `Tautan Tidak Sah, Dapatkan Tautan Di *.otakuinfo*`
    let res = (await axios.get(API('can', '/api/anime/otakudesu/dl', { link: text } ))).data;
    let x = res.result
    try {
    await conn.reply(m.chat, `Judul: *${x.title}*\n\nKualitas Unduhan 360p: *${x.low}*\nKualitas Unduhan 480p: *${x.medium}*\nKualitas Unduhan 720p: *${x.high}*`, m)
    await apivisit
    } catch (e) {
		console.log(e)
		m.reply(`*E R R O R*`)
	}
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['otakudl'].map(v => v + ' <id>')
handler.tags = ['downloader','anime']
handler.command = /^(otakudl|otakudesudl)$/i
handler.limit = 1
handler.register = false
export default handler