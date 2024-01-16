import axios from 'axios'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, args, usedPrefix: _p }) => {
    if (!args[0]) throw `Format *.otaku Kata Kunci*`
    let res = (await axios.get(API('can', '/api/anime/otakudesu/search', { query: args[0] } ))).data;
    let vs = res.result
	let arr = []
	let tekss = res.result.map(v => { return `${v.title}\n${v.link}`}).filter(v => v).join('\n\n')
	// for (let x of vs) arr.push({ title: x.title, rowId: `${_p}otakuinfo ${x.link}` })
	try {
	await m.reply(tekss)
	// await conn.sendMessage(m.chat, { text: `Result from : ${args[0]}`, footer: null, title: null, buttonText: 'Click Here!', sections: [{ title: 'Otakudesu', rows: arr }] }, { quoted: m })
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
handler.help = ['otaku'].map(v => v + ' <anime>')
handler.tags = ['tools','anime']
handler.command = /^(otaku|otakudesu)$/i
handler.limit = 1
handler.register = false
export default handler