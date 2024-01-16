import yts from "yt-search"
import {
    generateWAMessageFromContent
} from "@whiskeysockets/baileys"
import { format } from 'util';

let handler = async (m, {
    conn,
    text
}) => {
    if (!text) throw "Format: *.yts Kata Kunci*"
    let results = await yts(text)
    let tes = results.all
    let teks = results.all.map(v => {
        switch (v.type) {
            case "video":
                return `
Tipe: *${v.type}*
Identitas Video: *${v.videoId}*
Tautan: *${v.url}*
Judul: *${v.title}*
Deskripsi: *${v.description}*
Gambar: *${v.image}*
Gambar Mini: *${v.thumbnail}*
Detik: *${v.seconds}*
Stempel Waktu: *${v.timestamp}*
Durasi Stempel Waktu: *${v.duration.timestamp}*
Durasi Detik: *${v.duration.seconds}*
Lalu: *${v.ago}*
Penonton: *${formatNumber(v.views)}*
Nama Pengarang: *${v.author.name}*
Tautan Pengarang: *${v.author.url}*
   `.trim()
            case "canal":
                return `
*${v.name}* (${v.url})
*${v.subCountLabel} (${v.subCount})* Subscriber
*${v.videoCount}*Video
`.trim()
        }
    }).filter(v => v).join("\n\n________________________\n\n")
    
        let ytthumb = await (await conn.getFile(tes[0].thumbnail)).data
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: teks,
                jpegThumbnail: ytthumb,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        body: "S E A R C H",
                        containsAutoReply: true,
                        mediaType: 1,
                        mediaUrl: tes[0].url,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceId: "Keizha",
                        sourceType: "PDF",
                        previewType: "PDF",
                        sourceUrl: tes[0].url,
                        thumbnail: ytthumb,
                        thumbnailUrl: tes[0].thumbnail,
                        title: htki + " Y O U T U B E " + htka
                    }
                }
            }
        }, {
            quoted: m
        })
        await conn.relayMessage(m.chat, msg.message, {})
}
handler.help = ["", "earch"].map(v => "yts" + v + " <pencarian>")
handler.tags = ["downloader"]
handler.command = /^y(outubesearch|ts(earch)?)$/i
handler.register = false
handler.limit = 1
export default handler

function formatNumber(num) {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const numString = Math.abs(num).toString();
  const numDigits = numString.length;

  if (numDigits <= 3) {
    return numString;
  }

  const suffixIndex = Math.floor((numDigits - 1) / 3);
  let formattedNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
  
  // Menghapus desimal jika angka sudah bulat
  if (formattedNum.endsWith('.0')) {
    formattedNum = formattedNum.slice(0, -2);
  }

  return formattedNum + suffixes[suffixIndex];
}