let handler = async m => m.reply(`
*ASTRONOMY QUESTION 🔭*

*Sebuah teleskop dengan aperture 1 meter dan panjang fokus 10 meter digunakan untuk mengamati sebuah bintang yang terletak 100 parsec dari Bumi. Jika ukuran sudut bintang tersebut adalah 0,1 detik busur, berapa magnitude bintang tersebut jika diasumsikan sebagai bintang tunggal?*

Kirimkan Jawabanmu Ke:
wa.me/6281249122429

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis5']
handler.tags = ['rpg']
handler.command = /^kuis5$/i
handler.register = false
handler.premium = false
export default handler