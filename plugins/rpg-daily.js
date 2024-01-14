const rewards = {
  exp: 10000,
  money: 10000,
  potion: 10,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastbunga < cooldown) throw `*Anda Telah Mengklaim Hadiah Harian Ini*\nTunggu *${((user.lastbunga + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.reply(m.chat, `*GET DAILY*\n${text.trim()}`, m)
  user.lastbunga = new Date() * 1
}
handler.help = ['daily']
handler.tags = ['xp','rpg']
handler.command = /^(daily)$/i
handler.register = false
handler.cooldown = cooldown

export default handler
