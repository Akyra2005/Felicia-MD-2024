let handler = async m => m.reply(`Mining Options List ⛰️

Setiap Tingkatan Memiliki SDA Berbeda

Kedalaman Blok 30 - 100
.mining1
 • Rock
 • Coal
 • Iron
 • Experience
 • Money
 • Kazarite Glory
 
 
Kedalaman Blok 01 - 50
.mining2
 • Rock
 • Coal
 • Iron
 • Emerald
 • Diamond
 • Experience
 • Money
 • Kazarite Glory
 
Mining
.infomining
`.trim()) // Tambah sendiri kalo mau


handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^mining$/i
handler.premium = false
export default handler