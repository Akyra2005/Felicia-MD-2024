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
    sourceUrl: 'https://bit.ly/3O686WH'
     }}
  })
  
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mang${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://bit.ly/3O686WH',
    mediaType: 2, 
    description: 'https://bit.ly/3O686WH',
    title: "Mainkan Musik",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/21ab29d2d155bda72dd15.jpg')).buffer(),
    sourceUrl: ''
}
     }
    })
}
handler.help = ['kane1','kane2','kane3','kane4','kane5','kane6','kane7','kane8','kane9','kane10','kane11','kane12','kane13','kane14','kane15','kane16','kane17','kane18','kane19','kane20','kane21','kane22','kane23','kane24']
handler.tags = ['sound']
handler.command = /^(kane1|kane2|kane3|kane4|kane5|kane6|kane7|kane8|kane9|kane10|kane11|kane12|kane13|kane14|kane15|kane16|kane17|kane18|kane19|kane20|kane21|kane22|kane23|kane24)$/i
handler.limit = 1
export default handler