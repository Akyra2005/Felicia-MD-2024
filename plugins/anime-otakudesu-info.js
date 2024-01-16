import axios from 'axios'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text, usedPrefix: _p }) => {
    if (!text) throw `Format: *.otakuinfo Tautan*`
    if (!text.includes("anime")) throw `Tautan Tidak Sah, Dapatkan Tautan Di *.otaku*`
    let res = (await axios.get(API('can', '/api/anime/otakudesu/info', { link: text } ))).data;
    let vs = res.result
	let arr = []
	let tekss = vs.episode.map(v => { return `${v._title}\n${v._eps}`}).filter(v => v).join('\n\n')
	// for (let x of vs.episode) arr.push({ title: x._title, rowId: `${_p}otakudl ${x._eps}` })
	try {
	await m.reply(`Judul: *${vs.title}*\nJudul Jepang: *${vs.japanese_title || '-'}*\nSkor: *${vs.score || '-'}*\nProdusen: *${vs.producer || '-'}*\n*Tipe: *${vs.type}*\n*Status: *${vs.status || '-'}*\nTotal Eps: *${vs.total_eps || '-'}*\nDurasi: *${vs.duration || '-'}*\nRilis: *${vs.release_date || '-'}*\nStudio: *${vs.studio || '-'}*\nGenre: *${vs.genre}*\n\n*${tekss}*`)
	// await conn.sendMessage(m.chat, { text: `*Title :* ${vs.title}\n*Japanese Title :* ${vs.japanese_title || '-'}\n*Score :* ${vs.score || '-'}\n*Produser :* ${vs.producer || '-'}\n*Type :* ${vs.type}\n*Status :* ${vs.status || '-'}\n*Total Eps :* ${vs.total_eps || '-'}\n*Durasi :* ${vs.duration || '-'}\n*Release :* ${vs.release_date || '-'}\n*Studio :* ${vs.studio || '-'}\n*Genre :* ${vs.genre}`, footer: null, title: null, buttonText: 'Click Here!', sections: [{ title: 'Otakudesu', rows: arr }] }, { quoted: m })
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
handler.help = ['otakuinfo'].map(v => v + ' <url>')
handler.tags = ['tools','anime']
handler.command = /^(otakuinfo|otakudesuinfo)$/i
handler.limit = 1
handler.register = false
export default handler