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
*Bot Fast Respon Sebab On Di Railway.app*
*Fitur Lumayan, Misalkan? Lihat Di .allmenu*

——————————————————————————

*Harga LIMIT Bot:*
150 Limit = Rp 7.000
240 Limit = Rp 10.000

——————————————————————————

Paket Hemat Limit + Rental
30 Hari + 240 Limit= Rp 16.000

——————————————————————————

*Tertarik? Atau Tanya2 Dulu?*
*Kontak Admin Pemilik Bot*
— WhatsApp: *wa.me/6281333921094*
— Telegram: *t.me/Kusanali_6*
— MiChat: *085163083750*
— Instagram: *www.instagram.com/kusanali_6/*
— Facebook: *https://bit.ly/3S0g1qP*
— Gmail: *is.keizha@gmail.com*
await m.reply(tekss)
await apivisit
}
handler.help = ['sewa','premium']
handler.tags = ['info','main']
handler.command = /^(rental|iklan|sewabot|sewa)$/i
export default handler
