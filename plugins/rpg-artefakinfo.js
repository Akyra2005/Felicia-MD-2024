let handler = async m => m.reply(`
*Revitalize with Elixir: Restore Your Essence*
*Berisi Artefak Elixir Dengan Manfaat:*
_Meningkatkan batas maksimal health point (HP) sesuai level artefak Elixir (Lv 1 +50, Lv 2 +100, Lv 3 +150, Lv 4 +200, Lv 3 +250)_

*Vitality Surge: Ignite Your Energy*
*Berisi Artefak Vitality Dengan Manfaat:*
_Mendapatkan bonus Heal sesuai level artefak Vitality (Lv 1 +10%, Lv 2 +50%, Lv 3 +100%, Lv 4 +150%, Lv 3 +200%)_

*Presentasi Item Dalam Banner:*
🌟 Legendary: *Elixir & Vitality 1%*
💠 Epic: *Esens 10 1%*
💠 Epic: *Esens 7 2%*
💠 Epic: *Esens 5 5%*
💠 Epic: *Esens 3 6%*
💠 Epic: *Esens 1 3%*
💠 Epic: *Crystal 2 32%*
🍃 Rare: *Money, Rock & Wood 1 50%*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['artifact']
handler.tags = ['rpg']
handler.command = /^artifact$/i
handler.premium = false
export default handler