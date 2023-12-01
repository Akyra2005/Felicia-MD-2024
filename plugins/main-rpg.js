import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/bot/rules.txt')
let txt = await res.text()
await conn.reply(m.chat, `*Mohon Maaf*\n*Untuk Fitur RPG Akan Dirilis Awal Bulan Desember*
`.trim(), m)
await apivisit
}
handler.help = ['informasi']
handler.tags = ['main']
handler.command = /^(informasi)$/i
export default handler