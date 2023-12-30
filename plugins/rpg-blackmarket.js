const items = {
  "limit": { "name": "Limit", "price": 2348 },
  "exp": { "name": "Exp", "price": 2 },
  "semikonduktor": { "name": "Semikonduktor", "price": 50000 },
  "money": { "name": "Money", "price": 2 }
}

let handler = async (m, { conn, args }) => {
  let user = db.data.users[m.sender]
  let txt = args.join` `.toLowerCase()
  let matchedItems = Object.entries(items).filter(([name, { name: itemName }]) => itemName.toLowerCase().includes(txt) || name.includes(txt))
  let itemsStr = matchedItems.map(([name, { name: itemName, price }]) => `${name}: ${itemName} (${price} 💵 Money)`).join`\n`
  if (!txt) return conn.reply(m.chat, `*Daftar Item Di Black Market:*\n${itemsStr}`, m)
  let [buy, count = 1] = txt.split(/\s+/)
  count = parseInt(count)
  let item = items[buy]
  if (!item) return conn.reply(m.chat, `Item *${buy}* Tidak Ditemukan`, m)
  let total = count * item.price
  if (user.money < total) return conn.reply(m.chat, `Money Kamu Tidak Mencukupi Untuk Membeli *${count} ${item.name}*`, m)
  let chance = Math.floor(Math.random() * 2) // random 0 atau 1
  if (chance === 0) {
    user.money -= total * 3 // denda 3 kali lipat dari harga item yang dibeli
    conn.reply(m.chat, `Maaf Kamu Gagal Membeli *${count} ${item.name}* Dan Kamu Dirugikan *${total * 3} 💵 Money*`, m)
  } else {
    user.money -= total
    user[buy] += count
    conn.reply(m.chat, `Kamu Membeli *${count} ${item.name}* Dengan Harga *${total} 💵 Money*`, m)
  }
}
handler.help = ['blackmarket <item> <jumlah>', 'blackmarket']
handler.tags = ['rpg']
handler.command = /^blackmarket?$/i

export default handler