
import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/02c3eaa5dd4552112fbc7.jpg`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: '', 
    title: `Memproses Permintaan...`,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: 'http://bit.ly/49PsIf8'
     }}
  })
  
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mang${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'http://bit.ly/49PsIf8',
    mediaType: 2, 
    description: 'http://bit.ly/49PsIf8',
    title: "Mainkan Musik",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/21ab29d2d155bda72dd15.jpg')).buffer(),
    sourceUrl: ''
}
     }
    })
}

handler.help = ['kane25','kane26','kane27','kane28','kane29','kane30','kane31','kane32','kane33','kane34','kane35','kane36','kane37','kane38','kane39','kane40','kane41','kane42','kane43','kane44','kane45','kane46','kane47','kane48','kane49','kane50','kane51','kane52','kane53','kane54']
handler.tags = ['sound']
handler.command = /^(kane25|kane26|kane27|kane28|kane29|kane30|kane31|kane32|kane33|kane34|kane35|kane36|kane37|kane38|kane39|kane40|kane41|kane42|kane43|kane44|kane45|kane46|kane47|kane48|kane49|kane50|kane51|kane52|kane53|kane54)$/i
handler.limit = true
export default handler
