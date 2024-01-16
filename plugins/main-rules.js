import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/bot/rules.txt')
let txt = await res.text()
await conn.reply(m.chat, `*KETENTUAN & SYARAT*

Dengan menggunakan bot ini, Anda setuju dengan ketentuan dan persyaratan berikut:


1.   Penggunaan yang Diizinkan
Bot ini disediakan untuk penggunaan pribadi dan non-komersial saja. Anda tidak boleh menggunakan bot untuk tujuan apa pun yang melanggar hukum, berbahaya, atau merugikan orang lain. Anda tidak boleh menggunakan bot untuk menyalin, memodifikasi, atau membuat karya turunan dari bot atau kontennya.

2.   Penggunaan yang Tidak Diizinkan
Penggunaan bot untuk tujuan apa pun yang dilarang dalam bagian ini termasuk tetapi tidak terbatas pada:
• Menggunakan bot untuk mengirimkan spam atau konten yang tidak diinginkan
• Menggunakan bot untuk melanggar hak cipta atau merek dagang pihak lain
• Menggunakan bot untuk menyebarkan informasi yang salah atau menyesatkan
• Menggunakan bot untuk melakukan aktivitas ilegal

3.   Pembatalan
Pemilik Bot berhak untuk membatalkan akun Anda dan akses Anda ke bot kapan saja, tanpa pemberitahuan sebelumnya, jika Anda melanggar ketentuan dan persyaratan ini.

4.   Pengecualian Jaminan
BOT INI DIBERIKAN "SEBAGAIMANA ADANYA" DAN PEMILIK BOT TIDAK MEMBUAT JAMINAN APA PUN, TERSURAT ATAU TERSIRAT, TERMASUK TETAPI TIDAK TERBATAS PADA JAMINAN KESESUAIAN UNTUK TUJUAN TERTENTU, PENJUALAN, ATAU TIDAK ADA PELANGGARAN. PEMILIK BOT TIDAK BERTANGGUNG JAWAB ATAS KERUSAKAN APA PUN YANG TIMBUL DARI PENGGUNAAN BOT INI, TERMASUK TETAPI TIDAK TERBATAS PADA KERUSAKAN LANGSUNG, TIDAK LANGSUNG, INSIDENTAL, KHUSUS, ATAU KONSEKUENSIAL, TERMASUK TETAPI TIDAK TERBATAS PADA KERUSAKAN KEUNTUNGAN, DATA, ATAU KEUNTUNGAN.

5.   Hukum yang Berlaku
Ketentuan dan persyaratan ini akan diatur oleh dan ditafsirkan sesuai dengan hukum negara bagian Indonesia. Anda setuju bahwa tindakan hukum apa pun yang timbul dari atau terkait dengan bot ini akan diajukan di pengadilan negara bagian atau federal yang berada di Indonesia.

6.   Keseluruhan Perjanjian
Ketentuan dan persyaratan ini merupakan keseluruhan perjanjian antara Anda dan Pemilik Bot sehubungan dengan bot ini dan menggantikan semua komunikasi dan proposal sebelumnya atau saat ini, baik lisan maupun tertulis, sehubungan dengan bot ini.

7.   Perubahan Ketentuan dan Persyaratan
Pemilik Bot berhak untuk mengubah ketentuan dan persyaratan ini kapan saja. Perubahan akan berlaku segera setelah mereka diposting di situs web bot. Anda bertanggung jawab untuk memeriksa situs web bot secara berkala untuk mengetahui perubahan apa pun. Dengan terus menggunakan bot setelah perubahan tersebut diposting, Anda setuju untuk terikat oleh perubahan tersebut.


Hubungi Kami Jika Anda memiliki pertanyaan tentang ketentuan dan persyaratan ini, silakan hubungi Pemilik Bot di is.keizha@gmail.com
`.trim(), m)
await apivisit
}
handler.help = ['rules']
handler.tags = ['main','info']
handler.command = /^(rules|peraturan)$/i
export default handler