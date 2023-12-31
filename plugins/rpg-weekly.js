const rewards = {
  exp: 70000,
  money: 70000,
  potion: 10,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `*Anda Telah Mengklaim Hadiah Mingguan Ini*\nTunggu Selama *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  let text = '```CLAIMS WEEKLY PRIZES```\n\n'
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  text += '\n*INVENTORY* dengan cara ketik *#inv*'
  conn.sendMessage(m.chat, text.trim(), 'conversation', { quoted: m })
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i
handler.register = false
handler.limit = 1
handler.cooldown = cooldown

export default handler
