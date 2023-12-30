let handler = async m => m.reply(`List of Gardening Options 🍒

Setiap Tingkatan Memiliki Untung Berbeda

Beginner Gardening
.kebun1
  • Modal 100 > Untung 100
Expert Gardening
.kebun2
  • Modal 90 > Untung 110
Professional Gardening
.kebun3
  • Modal 70 > Untung 130
The King of Gardening
.kebun4
  • Modal 50 > Untung 150

About Gardening
.infoberkebun
`.trim()) // Tambah sendiri kalo mau


handler.help = ['berkebun']
handler.tags = ['rpg']
handler.command = /^berkebun$/i
handler.premium = false
export default handler