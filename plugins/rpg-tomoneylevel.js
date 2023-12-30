let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]
  let expToConvert = parseInt(args[0])
  if (isNaN(expToConvert) || expToConvert < 1 || expToConvert > user.exp) {
    return m.reply(`Masukkan Angka Valid. EXP Kamu Saat Ini Adalah ${user.exp}.`)
  }
  let taxRate = 0.5 // default tax rate for high-level users
  if (user.level < 3000) {
    taxRate = Math.random() * (0.5 - 0) + 0 // generate random tax rate between 0% and 90%
  }
  let moneyToReceive = Math.floor(expToConvert * (1 - taxRate))
  user.money += moneyToReceive
  user.exp -= expToConvert
  m.reply(`Berhasil Mengkonversi ${expToConvert} EXP Menjadi ${moneyToReceive} Uang (Pajak ${Math.floor(taxRate * 100)}%)`)
}

handler.help = ['cv <jumlah exp>']
handler.tags = ['rpg']
handler.command = /^cv$/i
handler.mods = false
handler.group = false
handler.private = false

export default handler