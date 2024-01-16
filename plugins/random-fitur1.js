import fetch from 'node-fetch'
import { asmaulhusna } from '@bochilteam/scraper'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'jadian2') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`*${toM(a)} ❤️ ${toM(b)}*`, null, {
        mentions: [a, b]
    })
    }
    if (command == 'menikah') {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)} Harus Menikahi ${toM(b)} Agar Menjadi Pasangan Yang Baik 💓*`, null, {
mentions: [a, b]
})
}

if (command == 'metercinta') {
if (!text) throw `Format: *${usedPrefix}${command} Namamu*`
conn.reply(m.chat, `
*Meter Cinta 💓*\n
*Cinta Dari ${text} Itu Untuk Kamu* *${Math.floor(Math.random() * 100)}%* *Dari 100%*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})
}

if (command == 'bertanya') {
if (!text) throw `Format: *${usedPrefix}${command} Pertanyaan*`
m.reply(` 
Pertanyaan: *${text}*
Tanggapan: *${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'].getRandom()}*
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
}



if (command == 'asmaulhusna') {
let xf = await asmaulhusna()
let { index, latin, arabic, translation_id, translation_en } = xf
let teks = `
  ${index}
  ${latin}
  ${arabic}
  ${translation_id}
  ${translation_en}
`
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            
}


if (command == 'memeindo') {
let caption = `*Sukses*`
let url = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.lolkey}`
await conn.sendFile(m.chat, url, '', caption, m)
}

if (command == 'randommeme') {
let caption = `*Sukses*`
let url = `https://api.lolhuman.xyz/api/random/meme?apikey=${global.lolkey}`
await conn.sendFile(m.chat, url, '', caption, m)
}

if (command == 'memedarkjoke') {
let caption = `*Sukses*`
let url = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${global.lolkey}`
await conn.sendFile(m.chat, url, '', caption, m)
}
}
handler.command = handler.help = ['bertanya', 'asmaulhusna', 'memeindo', 'memedarkjoke']
handler.tags = ['internet']
handler.register = false
handler.limit = 1
export default handler