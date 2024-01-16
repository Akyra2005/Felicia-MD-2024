import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix }) => {

if (args.length == 0) return conn.reply(m.chat, `Format: *${usedPrefix}kpop Tipe*\n\nDaftar Tipe:\n*Blackpink, Exo, Bts*`, m)

if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {

fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')

.then(res => res.text())

.then(body => {

let randomkpop = body.split('\n')

let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]

conn.sendFile(m.chat, randomkpopx, '', '*Sukses*', m)

})

.catch(() => {

conn.reply(m.chat, '*E R R O R*', m)

})

} else {

conn.reply(m.chat, `*Tidak Tersedia*`, m)

}}

handler.help = ['kpop'].map(v => v + ' <query>')

handler.tags = ['internet']

handler.command = /^(kpop)$/i
handler.register = false
handler.limit = 1
export default handler