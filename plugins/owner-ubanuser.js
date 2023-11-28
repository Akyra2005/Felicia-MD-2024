let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Format: *.unban @Tag/Nomor/Reply*'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Format: *.unban @Tag*'
    if (!(mention in global.db.data.users)) throw '*Pengguna Tidak Terdaftar Dalam Database*'
    let user = global.db.data.users[mention]
    if (!user.banned) throw '*Pengguna Tidak Dibanned*'
    user.banned = false
    user.BannedReason = ''
    user.warn = 0
    await m.reply('*Berhasil Diunbanned*')
    m.reply('*Kamu Telah Diunbanned*', mention)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true
export default handler