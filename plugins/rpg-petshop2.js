let handler = async m => m.reply(`*「 P E T   S H O P 」*

*Pet List*
🐈 • *Cat:* ${hcat} Pet Token
.petshop2 cat
🐕 • *Dog:* ${hdog} Pet Token
.petshop2 dog
🐎 • *Horse:* ${hhorse} Pet Token
.petshop2 horse
🦊 • *Fox:* ${hfox} Pet Token
.petshop2 fox

🥫 • *Pet Food:* ${hpetfood} Money 💵
.petshop2 petfood


${htki} ABILITY ${htka}
*🐈 Cat:*
*_- Meningkatkan HP 5%/Level Saat .heal Digunakan_*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^petshop$/i
handler.premium = false
export default handler