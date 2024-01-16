import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {

let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()

let nek = ne.split('\n')

let neko = await nek[Math.floor(Math.random() * nek.length)]

if (neko == '') throw '*E R R O R*'

conn.sendFile(m.chat, neko, 'error.jpg', `*Sukses*`, m)}


handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.register = false
handler.limit = 1
export default handler