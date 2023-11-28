let handler = async (m, { usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`tag or mention someone!\n\nexample:\n${usedPrefix + command} @${m.sender.split`@`[0]}`)
    user.premium = false
    user.premiumTime = 0

    // Hapus nomor dari global.prems
    let index = global.prems.indexOf(who)
    if (index !== -1) {
        global.prems.splice(index, 1)
    }

    m.reply(`*Sukses Menghapus ${user.name} Dari Premium*`)
}

handler.help = ['delprem [@user]']
handler.tags = ['owner']
handler.command = /^(-|del)p(rem)?$/i

handler.group = true
handler.rowner = true

export default handler
