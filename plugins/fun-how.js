let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Format: *${usedPrefix}${command} Nama*`
    m.reply(`
${command} ${text}
${text} is ${(101).getRandom()}% ${command.replace('how', '').toUpperCase()}
`.trim(), null, m.mentionedJid ? {
        mentions: conn.parseMention(m.text)
    } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i
handler.register = false
export default handler