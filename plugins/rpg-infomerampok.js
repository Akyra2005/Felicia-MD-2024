let handler = async m => m.reply(`
*Merampok adalah tindakan mengambil harta benda atau nilai milik orang lain dengan menggunakan kekerasan, ancaman, atau intimidasi. Ini termasuk tindakan kriminal yang melibatkan penggunaan kekuatan atau ancaman kekerasan untuk mencuri atau merampas properti seseorang. Merampok adalah pelanggaran hukum dan dapat dikenakan sanksi pidana berat.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infomerampok']
handler.tags = ['rpg']
handler.command = /^infomerampok$/i
handler.register = false
handler.premium = false
export default handler