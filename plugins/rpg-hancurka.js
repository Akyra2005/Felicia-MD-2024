let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw `Tag orang yang ingin dihancurkan perisainya`
  if (typeof global.db.data.users[who] == 'undefined') throw '*Pengguna tidak terdaftar di dalam database*'
  if (typeof global.db.data.users[m.sender] == 'undefined') throw '*Kamu belum terdaftar di dalam database*'
  let users = global.db.data.users
  let target = users[who]
  let attacker = users[m.sender]
  let cost = 100000
  let successProbability = 0.5
  if (target.lastperisai <= 0) throw '*Target tidak memiliki perisai*'
  if (attacker.money < cost) throw `Kamu memerlukan ${cost} untuk menghancurkan perisai`
  if (target.lastperisai > attacker.lastperisai) throw 'Penghancuran perisai gagal, target memiliki perisai yang lebih kuat dari kamu'
  if (Math.random() < successProbability) {
    target.lastperisai = 0
    attacker.money -= cost
    conn.reply(m.chat, `Perisai ${who.replace(/@.+/, '')} berhasil dihancurkan!`, m)
  } else {
    let loss = Math.floor(Math.random() * 300000)
    target.money += loss
    attacker.money -= cost
    conn.reply(m.chat, `Penghancuran perisai gagal! Kamu kehilangan ${cost} dan target kehilangan ${loss} uang`, m)
  }
  global.db.data.users[m.sender] = attacker
  global.db.data.users[who] = target
}
handler.help = ['hancurkan @user']
handler.tags = ['rpg']
handler.command = /^hancurkan$/
handler.group = true
handler.limit = 1
handler.fail = null
handler.exp = 0
handler.private = false

export default handler