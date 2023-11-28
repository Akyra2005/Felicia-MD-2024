let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw 'Format: *.addowner @Tag*'
    if (global.owner.includes(who.split('@')[0])) throw '*Dia Berstatuskan Owner*'
    global.owner.push([who.split('@')[0], m.name, true])
    const caption = `*Sekarang @${who.split('@')[0]} Telah Dijadikan Sebagai Owner*`
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['addowner @user']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i
handler.owner = true

export default handler