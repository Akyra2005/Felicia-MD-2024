let handler = async (m, { conn, text, usedPrefix, command }) => {
  let duration = parseInt(text)
  let validDurations = [12, 24, 72, 168] // Valid durations in hours

  if (!duration || !validDurations.includes(duration)) {
    return conn.reply(m.chat, `Silakan masukkan durasi yang valid. Durasi yang tersedia adalah ${validDurations.join(', ')} jam.`, m)
  }

  let cost = duration * 4000 // Harga per jam adalah 4000
  let user = global.db.data.users[m.sender]

  if (user.money < cost) {
    return conn.reply(m.chat, `Money kamu tidak mencukupi untuk membeli perisai selama ${duration} jam. Harga perisai selama ${duration} jam adalah ${cost} money.`, m)
  }

  user.money -= cost
  user.lastperisai = duration * 3600000 // Konversi dari jam ke milidetik
  conn.reply(m.chat, `Perisai Kamu Berhasil Diaktifkan Selama *${duration} Jam* Dengan Harga *${cost} Money.*`, m)
}

handler.help = ['shield <durasi>', 'perisai']
handler.tags = ['rpg']
handler.command = /^(beli perisai|shield)$/i

export default handler
