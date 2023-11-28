import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Format: *${usedPrefix}${command} Kata Kunci*`
    const res = await wallpaper(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `Hasil Dari: *${text}*`, m)
}
handler.help = ['wallpaper' + ' <query>']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^(wallpaper)$/i

export default handler