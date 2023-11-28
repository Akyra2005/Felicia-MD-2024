import fetch from 'node-fetch'
import axios from "axios"
let handler = async (m, { conn, args }) => {
let spas = "                "
  if (!args[0]) throw 'Format: *.tiktokaudio Tautan*'
  try {
 let chat = global.db.data.chats[m.chat]
    let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`, 'Felicia-MD.mp3', `
*PENGUNDUHAN TIKTOK AUDIO*
`.trim(), m, null, {
   document: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
         mediaUrl: sig
        }
     }
  })
  } catch (e) {
  let ler = await(await fetch("https://api.tikdl.caliphdev.codes/video?url=" + args[0])).json()
    let cer = ler.result
	let cap = `${spas}*[ T I K T O K ]*

*ID:* ${cer.id}
*Title:* ${cer.title}
*Created:* ${cer.created_at}

${spas}*[ S T A T S ]*
*Like:* ${cer.stats.likeCount}
*Comment:* ${cer.stats.commentCount}
*Share:* ${cer.stats.shareCount}
*Play:* ${cer.stats.playCount}
*Saved:* ${cer.stats.saveCount}

${spas}*[ A U D I O ]*
*ID:* ${cer.music.id}
*Title:* ${cer.music.title}
*Author:* ${cer.music.author}
*Duration:* ${cer.music.durationFormatted}
`
await conn.sendFile(m.chat, cer.music.play_url, 'Di Unduh Oleh Felicia-MD.mp3', cap, m, null, {
   document: { url: cer.music.play_url }, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
         mediaUrl: sig
        }
     }
  })
  }
}
handler.tags = ['downloader']
handler.command = /^(tiktokaudio)$/i
handler.register = true
handler.limit = true

export default handler