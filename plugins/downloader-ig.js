import axios from 'axios'

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, 'Format: *.ig Tautan*', m)
  }

  let url = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(text)}`
  
  try {
    // Fetch the Instagram reel using Axios
    const response = await axios.get(url)
    if (!response.data.status) {
      throw new Error(`*E R R O R*`)
    }

    const data = response.data.data
    if (data && data.data && data.data.length > 0) {
      const videoURL = data.data[0].url
      const caption = data.data[0].type

      // Send the file with type as caption
      await conn.sendFile(m.chat, videoURL, 'instagram_reel.mp4', caption, m)
    } else {
      conn.reply(m.chat, '*Tidak Dapat Menemukan Video*', m)
    }
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, '*Terjadi Kesalahan Saat Mengunduh Reel Instagram*.', m)
  }
}

handler.command = /^(igdl|ig)$/i
handler.tags = ['downloader']
handler.help = ['instagram','ig']
handler.premium = false
handler.limit = 1
handler.register = false
export default handler