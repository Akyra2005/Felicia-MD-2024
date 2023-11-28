let handler = async (m, { conn, text }) => {
  if (!text) throw `Format: *.setbio Bio*`
  try {
    await conn.setStatus(text)
    m.reply('*Sukses*')
  } catch (e) {
    console.log(e)
    throw `*E R R O R*`
  }
}
handler.help = ['setbio <teks>']
handler.tags = ['owner']
handler.command = /^set(bio|status)$/i
handler.owner = true

export default handler
