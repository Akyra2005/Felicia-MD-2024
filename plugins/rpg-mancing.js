let handler = async m => m.reply(`List of Fishing Destinations 🎣


Setiap Tempat Memiliki SDA Berbeda.

Sungai Amazon, Brasil
Dibutuhkan Pancingan Level 1
.mancing1
• Kepiting 🦀
• Ikan 🐟
• Udang 🦐
• Experience ✨
• Sakana Glory 🔅

Danau Taupo, Selandia Baru
Dibutuhkan Pancingan Level 2
.mancing2
• Lumba 🐬
• Cumi 🦑
• Dory 🐠
• Experience ✨
• Sakana Glory 🔅

Pulau Christmas, Kiribati
Dibutuhkan Pancingan Level 3
.mancing3
• Lobster 🦂
• Buntal 🐡
• Orca 🐳
• Experience ✨
• Sakana Glory 🔅

Laut Karibia, Amerika Tengah
Dibutuhkan Pancingan Level 4
.mancing4
• Paus 🐋
• Gurita 🐙
• Hiu 🦈
• Experience ✨
• Sakana Glory 🔅



About Fishing
.infomancing
`.trim()) // Tambah sendiri kalo mau


handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^mancing$/i
handler.premium = false
export default handler