import cheerio from 'cheerio'
import axios from 'axios'

let handler = async (m, { conn, text, __dirname, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
	let user = global.db.data.users[m.sender].age
  if (user < 17) throw m.reply(`*Kamu Belum Cukup Umur*`)
  if (!text) throw 'Format: *.hentaisearch Kata Kunci*'

m.reply(wait)

  let searchResults = await searchHentai(text)
  let teks = searchResults.result.map((v, i) => `
*${i + 1}. ${v.title}*
Penonton: *${v.views}*
Tautan: *${v.url}*`).join('\n\n')

  let randomThumbnail
  if (searchResults.result.length > 0) {
    let randomIndex = Math.floor(Math.random() * searchResults.result.length)
    randomThumbnail = searchResults.result[randomIndex].thumbnail
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
    teks = '*Tidak Ditemukan*'
  }

  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m)
}

handler.command = /^(hentaisearch|searchhentai)$/i
handler.help = ['hentaisearch','searchhentai']
handler.tags = ['nsfw']
handler.limit = 3
export default handler

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}