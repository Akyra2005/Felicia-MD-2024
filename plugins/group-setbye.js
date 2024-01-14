let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.db.data.chats.sBye = text
    m.reply('*Teks Bye Berhasil Diatur*\n@Tag (Mention)')
  } else throw 'Format: *.setbye Teks*\n\n@Tag (Mention)'
}
handler.help = ['setbye'].map(v => v + ' <text>')
handler.tags = ['group']
handler.command = /^setbye$/i
handler.group = true
handler.admin = true
handler.register = false
export default handler