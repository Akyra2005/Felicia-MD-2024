import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Format: *.attp2 Teks*'
  m.reply('*Memproses Permintaan...*')
  let res = `https://api.lolhuman.xyz/api/attp2?apikey=${global.lolkey}&text=${response[0]}`
  conn.sendFile(m.chat, res, 'xynz.webp', `*Sukses*`, m, false)
}
handler.help = ['attp2 <teks>']
handler.tags = ['sticker']
handler.command = /^(attp2)$/i
handler.limit = 1
handler.register = false
export default handler