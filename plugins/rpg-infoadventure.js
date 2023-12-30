let handler = async m => m.reply(`
*Petualangan adalah kegiatan eksplorasi atau perjalanan yang melibatkan risiko dan ketidakpastian. Ini bisa mencakup penjelajahan alam, perjalanan ke tempat-tempat eksotis, atau pengalaman yang menantang secara fisik dan mental. Petualangan sering kali memberikan peluang untuk pertumbuhan pribadi, penemuan diri, dan pengalaman yang tak terlupakan. Beberapa jenis petualangan termasuk hiking, mendaki gunung, menjelajahi gua, dan petualangan air seperti rafting.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoadventure']
handler.tags = ['rpg']
handler.command = /^infoadventure$/i
handler.register = false
handler.premium = false
export default handler