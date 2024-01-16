import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Format: *.playlist Kata Kunci*`;
  try {
    let vids_ = {
      from: m.sender,
      urls: []
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      delete global.videoList;
    }
    let results = await yts(text);
    let textoInfo = `*PENCARIAN PLAYLIST*\n\nFormat:
*${usedPrefix}audio nomor*
*${usedPrefix}video nomor*

Contoh:
*${usedPrefix}audio 5*
*${usedPrefix}video 8*\n`.trim();
    let teks = results.all.map((v, i) => {
      let link = v.url;
      vids_.urls.push(link);
      return `*${i + 1}. ${v.title}*
Tautan: *${v.url}*
Durasi: *${v.timestamp}*
Diunggah: *${v.ago}*
Ditonton: *${v.views}*`
    }).join('\n\n_______________________________________\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*Nomor Tidak Sah*');
  }
}
handler.help = ['playlist *<teks>*'];
handler.tags = ['downloader'];
handler.command = /^playlist|playlist2$/i;
handler.register = false
handler.limit = 1
export default handler;