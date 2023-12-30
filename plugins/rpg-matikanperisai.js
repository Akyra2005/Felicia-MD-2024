let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  if (user.lastperisai <= 0) throw '*Kamu Tidak Menggunakan Perisai.*'
  if (user.money < 5000) throw '*Uangmu Tidak Mencukupi Untuk Mematikan Perisai.*'
  let success = Math.random() < 0.5
  if (success) {
    user.lastperisai = 0
    user.money -= 5000
    return conn.reply(m.chat, '*Perisaimu Berhasil Dimatikan*', m)
  } else {
    let damage = Math.floor(Math.random() * 5000)
    user.money -= damage
    return conn.reply(m.chat, `Maaf, Gagal Mematikan Perisai Dan Kamu Mengalami Kerugian Sebesar *${damage} Money*`, m)
  }
}

handler.help = ['matikanperisai']
handler.tags = ['rpg']
handler.command = /^matikanperisai$/
handler.limit = true

export default handler