let handler = async (m, { conn, args }) => {
  let user = db.data.users[m.sender]
  if (!user.partner) return conn.reply(m.chat, `*Kamu Tidak Memiliki Pasangan*`, m)
  if (user.anakname) return conn.reply(m.chat, `*Kamu Sudah Memiliki Anak*`, m)

  let lastBirth = user.lastBirth || 0
  let time = new Date - lastBirth
  let day = Math.floor(time / 86400000) // 86400000ms = 1 day

  if (day < 9) {
    let sisaHari = 9 - day
    return conn.reply(m.chat, `Tunggu *${sisaHari}* Hari Lagi Sebelum Melahirkan Anak`, m)
  }

  let childGender = Math.floor(Math.random() * 2) // random 0 atau 1
  let childName = args.join` `.trim()

  if (!childName) {
    conn.reply(m.chat, `*Silakan Berikan Nama Kepada Anakmu*`, m)
    return
  }

  user.lastBirth = new Date * 1
  user.anakname = childName
  user.anakgender = childGender

  conn.reply(m.chat, `Kamu Sekarang Memiliki Seorang Anak ${childGender ? 'Perempuan' : 'Laki-Laki'} Yang Diberi Nama *${childName}*`, m)
}
handler.help = ['buatank <nama>', 'buatank']
handler.tags = ['rpg']
handler.command = /^buatank?$/i

export default handler
