import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Format: *.anime Kata Kunci*`
  let res = await fetch(global.API('https://api.jikan.moe', '/v4/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.data[0]
let animeingfo = `Judul: *${title}*
Episode: *${episodes}*
Tanggal Mulai: *${start_date}*
Tanggal Akhir: *${end_date}*
Jenis Pertunjukan: *${type}*
Peringkat: *${rated}*
Skor: *${score}*
Anggota: *${members}*
Ringkasan: *${synopsis}*
URL: *${url}*`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime'].map(v => v + ' <judul>')
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
handler.limit = 1
handler.register = false
//maapin fatur :<
export default handler