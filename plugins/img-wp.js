import fg from 'api-dylux';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Format: *.wp Kata Kunci*`
  try {
    let res = await fg.wallpaper(text);
    let re = pickRandom(res);
    await conn.sendMessage(m.chat, { image: { url: re.image[0] }, caption: `` }, { quoted: m });
  } catch (error) {
   m.reply(`*E R R O R*`)
  }
  
}
handler.help = ['wallpapers','wp']
handler.tags = ['tools']
handler.command = ['wallpapers', 'wp']
handler.diamond = true
handler.register = false
handler.limit = 1
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}