let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  if (user.lastperisai == 0) {
    conn.reply(m.chat, `*Anda Tidak Sedang Menggunakan Perisai.*`, m)
    return
  }
  let waktuSekarang = new Date() * 1
  let durasi = (user.lastperisai - waktuSekarang) / 1000
  let durasiText = clockString((user.lastperisai - waktuSekarang))
  conn.reply(m.chat, `Perisai Anda Akan Berakhir Dalam ${durasiText}.`, m)
}
handler.help = ['cekperisai']
handler.tags = ['rpg']
handler.command = /^cekperisai$/

export default handler