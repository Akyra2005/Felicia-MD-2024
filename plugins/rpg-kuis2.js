let handler = async m => m.reply(`
*MATHEMATICS QUESTION ➗*

*Misalkan f(x) adalah sebuah fungsi kuadratik dengan dua akar real berbeda yang merupakan bilangan bulat positif. Jika nilai minimum dari f(x) pada seluruh domainnya adalah 2019, berapa banyak kemungkinan pasangan bilangan bulat positif (a,b) yang memenuhi f(a) + f(b) = 4038?*

Kirimkan Jawabanmu Ke:
wa.me/6281249122429

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis2']
handler.tags = ['rpg']
handler.command = /^kuis2$/i
handler.register = false
handler.premium = false
export default handler