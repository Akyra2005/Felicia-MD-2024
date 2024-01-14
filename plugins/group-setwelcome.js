let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.db.data.chats.sWelcome = text
    m.reply('*Teks Welcome Berhasil Diatur*\n@Tag (Mention)\n@Subject (Nama Grup)')
  } else throw 'Format: *.setwelcome Teks*\n\n@Tag (Mention)\n@Subject (Nama Grup)'
}
handler.help = ['setwelcome'].map(v => v + ' <text>')
handler.tags = ['group']
handler.command = /^setwelcome$/i
handler.group = true
handler.admin = true
handler.register = false
export default handler