let handler = async m => m.reply(`
*Bubble Chat - QC*

*.qc1* - Latar Hitam
*.qc2* - Latar Putih
*.qc3* - Latar WhatsApp Putih
*.qc4* - Latar WhatsApp Hitam`.trim()) Tambah sendiri kalo mau


handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^qc$/i
export default handler