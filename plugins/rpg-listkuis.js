let handler = async m => m.reply(`
*Premium Prize Quiz ⭐*

*Jawab Pertanyaan Untuk Mendapatkan Premium Gratis.*

*Fisika 🛰️*
.kuis1
  • Premium 3 Hari
*Matematika ➗*
.kuis2
  • Premium 3 Hari
*Kimia ⚗️*
.kuis3
  • Premium 3 Hari
*Biologi 🔬*
.kuis4
  • Premium 3 Hari
*Astronomi 🔭*
.kuis5
  • Premium 3 Hari
*Bahasa Pemrograman 🈁*
.kuis6
  • Premium 3 Hari

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis']
handler.tags = ['rpg']
handler.command = /^kuis$/i
handler.register = false
handler.premium = false
export default handler