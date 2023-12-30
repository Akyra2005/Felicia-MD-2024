import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  let crystal = user.crystal || 0
  let jum = parseInt(text) || 1 / 3 // modifikasi ini
  let draw = JSON.parse(fs.readFileSync('./lib/draw.json'))
  let prizes = draw.prizes
  let totalChance = prizes.reduce((acc, prize) => acc + prize.chance, 0)
  let message = `Hasil Gacha ${jum}x\n\n` // modifikasi ini
  let counter = 0 // tambahan ini
  
  if (crystal < jum * 3) { // modifikasi ini
    return conn.reply(m.chat, `Kamu tidak memiliki cukup crystal untuk melakukan draw sebanyak ${jum} kali. Silakan cek ${usedPrefix}inv untuk melihat jumlah crystal kamu dan dapatkan crystal di .misi`, m)
  }

  user.crystal -= jum * 3 // modifikasi ini

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

    message += `Gacha ke-${counter+1}: ${prize.name}\n` // modifikasi ini
    user[prize.item] = (user[prize.item] || 0) + prize.amount
    counter++ // tambahan ini
  }

  fs.writeFileSync('./lib/draw.json', JSON.stringify(draw, null, 2))
  conn.reply(m.chat, message, m)
}

handler.help = ['draw1 <jumlah>']
handler.tags = ['game']
handler.command = /^draw1$/i
handler.register = false

export default handler
