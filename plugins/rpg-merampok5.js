let handler = async (m, { conn, text, usedPrefix, command }) => {
  let pajak = 0.02
  let minBank = 10000
  let maxPct = 0.01
  let berhasil = Math.random() < 0.6 // 60% chance of success
  let kerugian = 0

  let users = global.db.data.users
  let target = m.mentionedJid[0] || m.chat
  if (typeof users[target] === 'undefined') throw '*Pengguna Tidak Ada Dalam Database*'
  if (users[target].bank < minBank) throw '*Uang Di ATM Target Dibawah Batas Minimal*'
  if (users[m.sender].lastrob && new Date - users[m.sender].lastrob < 24 * 60 * 60 * 1000)
    throw `Anda sudah merampok dan berhasil sembunyi, tunggu ${clockString(new Date - users[m.sender].lastrob)} untuk merampok lagi`

  let targetBank = users[target].bank
  let maxSteal = Math.floor(targetBank * maxPct)
  let stolen = Math.floor(Math.random() * maxSteal)
  if (!berhasil) {
    kerugian = Math.floor(Math.random() * maxSteal)
    stolen = Math.max(stolen - kerugian, 0) // ensure stolen bank >= 0
  }

  users[target].bank -= stolen
  users[m.sender].bank += stolen * (1 - pajak)
  users[m.sender].lastrob = new Date() * 1
  users[m.sender].horizonglory += 50000

  let reply = berhasil
    ? `Berhasil merampok uang target sebesar ${stolen} dan kamu mendapatkan Horizon Glory.\n`
    : `Gagal merampok uang target dan kehilangan uang sebesar ${kerugian}.\n`
  reply += `Uang ${stolen} ditransfer dari ${users[target].name} ke ${users[m.sender].name}`
  conn.reply(m.chat, reply, m)
}
handler.help = ['merampok5 @tag']
handler.tags = ['rpg']
handler.command = /^merampok5$/
handler.limit = 1
handler.group = true
handler.level = 200

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}