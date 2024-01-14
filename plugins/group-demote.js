let handler = async (m, { conn, text, participants }) => {
if (!text) throw `Format: *.demote @Tag*`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
m.reply(`*@${users.split("@")[0]}* Sekarang Bukan Admin`, { mentions: [users]})
}
handler.help = ['demote'].map(v => v + ' @tag')
handler.tags = ["group"]
handler.command = /^(demote)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.register = false
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))