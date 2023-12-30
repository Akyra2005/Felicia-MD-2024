let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  if (!user.partner) return conn.reply(m.chat, `Kamu Tidak Memiliki Pasangan`, m)

  let str = `
Nama Pasangan: *${conn.getName(user.partner)}*
${user.anakname ? `Nama Anak: *${user.anakname}*\nGender Anak: *${user.anakgender ? 'Perempuan' : 'Laki-Laki'}*` : ''}
  `.trim()

  conn.reply(m.chat, str, m)
}
handler.help = ['infokeluarga']
handler.tags = ['rpg']
handler.command = /^infokeluarga$/i

export default handler
