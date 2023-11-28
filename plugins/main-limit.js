let handler = async (m, { conn, args, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    let caption = `
Limit Kamu *${ke1} 🎟️*

Klaim Limit Gratis Di *.claim*
`
  conn.reply(m.chat, caption, m)
}

handler.help = ['limit']
handler.tags = ['main']
handler.command = /^(limit)$/i

export default handler
