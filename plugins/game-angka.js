let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  let bonusExp = Math.floor(Math.random() * 100)
  let bonusMoney = Math.floor(Math.random() * 1000)
  if (!args[0]) return conn.reply(m.chat, `Format: *.tebakangka Angka*`, m)
  if (args[0] < 1 || args[0] > 100) return conn.reply(m.chat, `*Harap Masukkan Angka Antara 1 Dan 100*`, m)
  let number = Math.floor(Math.random() * 100) + 1
  let userGuess = parseInt(args[0])
  let result = (userGuess === number) ? `*SELAMAT ANDA MENANG*\n+${bonusExp} ✨ XP\n+${bonusMoney} 🪙 Flint` : `Maaf Anda Kalah\nAngka Benar Adalah *${number}*`
  let user = global.db.data.users[m.sender]
  if (userGuess === number) {
    user.exp += bonusExp
    user.money += bonusMoney
  }
  conn.reply(m.chat, result, m)
}

handler.help = ['tebakangka <angka>']
handler.tags = ['game']
handler.command = /^(tebakangka)$/i
handler.register = false
handler.limit = 1
export default handler