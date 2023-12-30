let handler = async m => m.reply(`
*BIOLOGY QUESTION 🔬*

*Seorang peneliti ingin mempelajari efek radiasi sinar-X terhadap kromosom manusia. Untuk itu, ia memapar sel-sel manusia dengan dosis radiasi yang berbeda dan mengamati kromosom pada setiap dosis. Setelah analisis data, ia menemukan bahwa pada dosis rendah, jumlah mutasi kromosom lebih rendah dari pada dosis sedang, namun pada dosis tinggi, jumlah mutasi kromosom justru lebih rendah daripada pada dosis sedang. Mengapa hal ini terjadi?*

Kirimkan Jawabanmu Ke:
wa.me/6281249122429

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis4']
handler.tags = ['rpg']
handler.command = /^kuis4$/i
handler.register = false
handler.premium = false
export default handler