import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
  conn.reply(m.chat, `*"${indo}"*\n\nOleh: *${character}*\nAnime: *${anime}*`, m)
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|kataanime)$/i
handler.register = false
handler.limit = 1
export default handler 
