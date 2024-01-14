import { toAudio } from '../lib/converter.js'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q || q.msg).mimetype || q.mediaType || ''
    if (!/video|audio/.test(mime)) throw `*Balas Media Dengan Perintah ${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw '*Gagal Mengunduh Media*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*Gagal Mengkonversi Media*'
    await conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
    await apivisit
}
handler.help = ['tomp3']
handler.tags = ['tools']
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
handler.register = false
export default handler