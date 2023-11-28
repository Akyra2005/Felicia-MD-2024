import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

if (!text) throw `Format: *.spotify Kata Kunci*`

try {

let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=haikalgans&query=${text}`)

let json = await res.json()

let { link } = json.result[0]

let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=haikalgans&url=${link}`)

let json2 = await res2.json()

let { thumbnail, title, artists } = json2.result

let spotifyi = `*PENGUNDUHAN SPOTIFY*\n\nJudul: *${title}*\nArtis: *${artists}*\nURL: *${link}*\nPencarian URL: *${json2.result.link}*\n`

conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)

let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 

if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 

} catch {

throw '*E R R O R*'

}}

handler.command = /^(spotify)$/i
handler.help = ['spotify'].map(v => v + ' <query>')
handler.register = true
handler.limit = true
handler.tags = ['downloader']
export default handler