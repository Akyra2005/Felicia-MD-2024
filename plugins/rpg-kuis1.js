let handler = async m => m.reply(`
*PHYSICS QUESTION 🛰️*

*Sebuah roket berada di angkasa dan bergerak dengan kecepatan konstan 0,8 c (c adalah kecepatan cahaya). Roket tersebut kemudian mengeluarkan sebuah pesawat ruang angkasa yang bergerak relatif terhadap roket dengan kecepatan 0,6 c. Berapa kecepatan pesawat ruang angkasa jika diukur oleh pengamat di Bumi?*

Kirimkan Jawabanmu Ke:
wa.me/6281249122429

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis1']
handler.tags = ['rpg']
handler.command = /^kuis1$/i
handler.register = false
handler.premium = false
export default handler