let handler = async m => m.reply(`
*Kontak Admin Pemilik Bot*
— WhatsApp: *wa.me/6281333921094*
— Telegram: *t.me/Kusanali_6*
— MiChat: *085163083750*
— Instagram: *www.instagram.com/kusanali_6/*
— Facebook: *https://bit.ly/3S0g1qP*
— Gmail: *is.keizha@gmail.com*`.trim()) Tambah sendiri kalo mau


handler.help = ['owner']
handler.tags = ['info']
handler.command = /^owner$/i
handler.register = false
handler.premium = false
export default handler