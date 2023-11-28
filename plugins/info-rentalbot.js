import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let tekss = `——————————————————————————

*Harga RENTAL Bot:*
07 Hari = Rp 5.000
30 Hari = Rp 20.000
30 Hari = Rp 0 - 1× Pembelian
Permanen = Rp 20.000

Keuntungan?
*Aktif 24×365 Jam*
*Rental Permanen Tapi Bot Pensi? Refull*
*Bot Fast Respon Sebab On Di Railway.app*
*Fitur Lumayan, Misalkan? Lihat Di .allmenu*

——————————————————————————

*Harga PREMIUM Bot:*
07 Hari = Rp 4.000
30 Hari = Rp 19.000
Permanen = Rp 19.000

Keuntungan?
*Limit Tak Terbatas*
*Akses Ke Fitur Premium*
*Rental Permanen Tapi Bot Pensi? Refull*

——————————————————————————

Paket Hemat Premium + Rental
30 Hari = Rp 35.000
Permanen = Rp 35.000

——————————————————————————

*Tertarik? Atau Tanya2 Dulu?*
Hubungi *wa.me/6281249122429*`
await m.reply(tekss)
await apivisit
}
handler.help = ['sewa','premium']
handler.tags = ['info']
handler.command = /^(rental|iklan|sewabot|sewa)$/i
export default handler
