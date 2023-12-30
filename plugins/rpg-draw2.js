import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  let crystal = user.crystal || 0
  let jum = parseInt(text) || 1
  let draw = JSON.parse(fs.readFileSync('./lib/draw2.json'))
  let prizes = draw.prizes
  let totalChance = prizes.reduce((acc, prize) => acc + prize.chance, 0)
  let message = `Hasil Gacha ${jum}x\n\n`
  
  if (crystal < jum) {
    return conn.reply(m.chat, `Kamu tidak memiliki cukup crystal untuk melakukan draw sebanyak ${jum} kali. Silakan cek ${usedPrefix}inv untuk melihat jumlah crystal kamu dan dapatkan crystal di .misi`, m)
  }

  user.crystal -= jum

  for (let i = 0; i < jum; i++) {
    let random = Math.floor(Math.random() * totalChance)
    let prize
    let cumulativeChance = 0

    for (let j = 0; j < prizes.length; j++) {
      cumulativeChance += prizes[j].chance
      if (random < cumulativeChance) {
        prize = prizes[j]
        break
      }
    }

    message += `Gacha ke-${i+1}: ${prize.name}\n`
    user[prize.item] = (user[prize.item] || 0) + prize.amount
  }

  fs.writeFileSync('./lib/draw2.json', JSON.stringify(draw, null, 2))
  conn.reply(m.chat, message, m)
}

handler.help = ['draw2 <jumlah>']
handler.tags = ['game']
handler.command = /^draw2$/i
handler.register = false

export default handler
