import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `Balas Stiker Dengan Perintah *${usedPrefix + command}*`
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || ''
    if (!/webp/g.test(mime)) throw `Balas Stiker Dengan Perintah *${usedPrefix + command}*`
    let media = await q.download?.()
    let out = Buffer.alloc(0)
    if (/webp/g.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendMessage(m.chat, {
                video: { url: out },
                caption: '*Sukses*',
                gifPlayback: true,
                gifAttribution: Math.floor(Math.random() * 2) + 1
            }, {
                quoted: m
            })
}
handler.help = ['togif (reply media)']
handler.tags = ['sticker']
handler.command = /^togifs?$/i
handler.limit = 1
export default handler