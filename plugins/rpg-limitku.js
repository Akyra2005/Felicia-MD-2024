const rewards = {
  limit: 40,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastlk < cooldown) throw `*Anda Telah Mengklaim Limit Harian Ini*\nTunggu *${((user.lastlk + cooldown) - new Date()).toTimeString()}*`
  if (global.db.data.users[m.sender].limit > 39) throw `*Fitur Ini Hanya Untuk Pemain Miskin Limit*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendMessage(m.chat, `*CLAIM DAILY LIMIT*\n${text.trim()}`)
  user.lastlk = new Date * 1
}
handler.help = ['limitku']
handler.tags = ['xp','rpg']
handler.command = /^(limitku)$/i
handler.register = false
handler.cooldown = cooldown

export default handler
