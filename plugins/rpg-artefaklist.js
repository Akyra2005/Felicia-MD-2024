let handler = async m => m.reply(`
*Artifact Banner v1 27 January - 15 February*


*Revitalize with Elixir: Restore Your Essence*
*.gachaelixir 1-10* - Melakukan Gacha
*.upgradeelixir* - Upgrade Artefak

*Vitality Surge: Ignite Your Energy*
*.gachavitality 1-10* - Melakukan Gacha
*.upgradevitality* - Upgrade Artefak


Informasi Lebih Di *.artifact*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['artefak']
handler.tags = ['rpg']
handler.command = /^artefak$/i
handler.premium = false
export default handler