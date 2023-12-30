let handler = async m => m.reply(`*DRAW*

*/draw1* (3 Crystal)
- Item Limited

*/draw2* (1 Crystal)
- Item Standar
`.trim()) // Tambah sendiri kalo mau


handler.help = ['draw']
handler.tags = ['rpg']
handler.command = /^draw$/i
handler.premium = false
export default handler