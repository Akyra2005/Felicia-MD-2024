let handler = async m => m.reply(`List of Adventure Destinations 🏔️


Setiap Tempat Memiliki SDA Berbeda.

Towards the East / Timur
.adventure1
• Coal
• Wood
• Fruit
• Sea Animal
• Experience
• Money
• Advena Glory


To the west / Barat
.adventure2
• Iron
• Fruit 
• Forest
• Drink
• Experience
• Money
• Advena Glory

To the South / Selatan
.adventure3
• Fruit
• Wood
• Sea Animal
• Coal
• Experience
• Money
• Advena Glory

Towards the North / Utara
.adventure4
• Wood 
• Fruit
• Sea Animal
• Coal
• Drink
• Experience
• Money
• Advena Glory

About Adventure
.infoadventure
`.trim()) // Tambah sendiri kalo mau


handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^adventure$/i
handler.premium = false
export default handler