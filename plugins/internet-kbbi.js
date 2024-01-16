import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Format: *${usedPrefix}${command} Kata Kunci*`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
*${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

*Catatan:*
P = Partikel: 
*Kelas Kata Yang Meliputi Kata Depan, Kata Sambung, Kata Seru, Kata Sandang, Ucapan Salam*
N = Nomina: 
*Kata Benda*
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
handler.register = false
handler.limit = 1
export default handler