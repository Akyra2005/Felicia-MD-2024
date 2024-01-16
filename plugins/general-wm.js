import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*Balas Stiker Dengan Perintah .wm*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '*Balas Stiker Dengan Perintah .wm*'
    let img = await m.quoted.download()
    if (!img) throw '*Balas Stiker Dengan Perintah .wm*'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
    else throw '*Gagal Mengkonversi*'
  }
}
handler.help = ['wm']
handler.tags = ['sticker']
handler.alias = ['wm', 'take']
handler.command = /^(take|wm|swm|stikerwm|stickerwm)$/i
handler.register = false
handler.limit = 3
export default handler