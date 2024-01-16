import { capcutdl } from '../lib/capcut.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
  if (!args[0]) throw `Contoh: *${usedPrefix+command} Tautan*`;
  let data = await capcutdl(text);
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let cap = `*PENGUNDUHAN CAPCUT*
  
Judul: *${data.title}*
Deskripsi: *${data.description}*
Pemakai: *${data.usage}*

${footer}`
conn.sendMessage(m.chat, { video: { url: data.originalVideoUrl }, caption: cap }, { quoted: m})
};
handler.help = ['capcut'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(capcut)$/i;
handler.register = false
handler.limit = 1
export default handler;