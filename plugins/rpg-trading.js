let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Contoh: ${usedPrefix}trading 100000`
  let value = isNaN(text) ? parseInt(text.replace(/k|rb|juta/gi, match => {
    if (match == 'k') return '000'
    if (match == 'rb') return '00000'
    if (match == 'juta') return '000000'
    return ''
  })) : parseInt(text)
  if (value > global.db.data.users[m.sender].money) throw 'Uang Kamu Tidak Cukup Untuk Melakukan Trading'
  if (value < 1000) throw '*Minimal Trading Adalah 1000*'
  let limit = 60 * 1000
  let start = new Date() * 1
  let end = start + limit
  let currentPrice = 100000 // contoh harga saat ini, bisa diubah sesuai kebutuhan
  let buyPrice = currentPrice * (1 - Math.random() * 0.15) // harga beli, turun 0-15% dari harga saat ini secara acak
  let sellPrice = currentPrice * (1 + Math.random() * 0.05) // harga jual, naik 0-5% dari harga saat ini secara acak
  let isProfit = buyPrice < sellPrice // cek apakah bisa untung
  let profit = isProfit ? value * (sellPrice - buyPrice) / buyPrice : 0 // hitung profit
  if (Math.random() <= 0.35) { // Peluang rugi 35%
    isProfit = false
    profit = -value * 0.35
  }
  global.db.data.users[m.sender].money += profit // update money
  let message = isProfit ? `Berhasil trading! Kamu mendapatkan profit sebesar ${profit}.` : `Sayang sekali, tradingmu mengalami kerugian sebesar ${-profit}.`
  conn.reply(m.chat, message, m)
}

handler.help = ['trading <jumlah uang>']
handler.tags = ['rpg']
handler.command = /^trading$/i
handler.limit = 1
handler.group = true

export default handler
