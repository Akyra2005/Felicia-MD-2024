import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
    if (!text) throw `Format: *.anoboydl ID*`
    let ress = await fetch(`http://weeb-scraper.onrender.com/api/anoboy/` + text)
    if (!ress) throw '*Tidak Ditemukan*'
    let res = await ress.json()
    let v = res.data
    let linkvi = res.data.video_embed_links
    let miror = res.data.video_mirrors
    let cap = `*Judul:* ${res.data.name || res.data.episode_navigation.nav_name}\n*Ringkasan:* ${res.data.synopsis || '-'}\n\n*Tautan Untuk Unduh Dan Tonton Vidionya:*\n`
    for (let x of linkvi) {
    for (let z of miror) {
    cap += `*Tautan 1:*\n${x.resolution || '-'} : ${x.link || '-'}\n*Tautan 2:*\n${z.resolution || '-'} : ${z.link || '-'}`
    cap += '' + '\n'
  	} }
    await conn.reply(m.chat, cap, m)
    await apivisit
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['anoboydl'].map(v => v + ' <id>')
handler.tags = ['tools']
handler.command = /^(anoboydl)$/i
handler.register = true
export default handler
