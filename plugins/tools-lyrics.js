import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Format: *${usedPrefix}${command} Judul Lagu*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
*PENCARIAN LIRIK*\n
Lirik: *${result.title}*
Pengarang: *${result.author}*
URL: *${result.link}*

${result.lyrics}

`.trim())
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['tools']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = false
handler.limit = 1
export default handler