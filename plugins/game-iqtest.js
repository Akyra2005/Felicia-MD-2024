let handler  = async (m, { conn }) => {
  // Menentukan nilai IQ secara acak dari 1 sampai 10000
  let iq = Math.floor(Math.random() * 1000) + 1
  // Menentukan pesan respon berdasarkan nilai IQ
  let response = `IQ Anda Sebesar : ${iq}\n`
  if (iq < 50) {
    response += 'Anda sangat bodoh, mungkin Anda harus belajar lebih keras.'
  } else if (iq < 100) {
    response += 'Anda cukup pintar, tapi masih bisa lebih baik.'
  } else if (iq < 200) {
    response += 'Anda sangat pintar, Anda pasti suka membaca dan belajar.'
  } else if (iq < 500) {
    response += 'Anda luar biasa cerdas, Anda mungkin adalah seorang jenius.'
  } else if (iq < 900) {
    response += 'Anda menakjubkan, Anda memiliki IQ yang setara dengan Albert Einstein.'
  } else {
    response += 'Anda tidak manusiawi, Anda memiliki IQ yang melebihi batas kemampuan otak manusia.'
  }
  // Mengirim respon ke pengguna
  conn.reply(m.chat, response, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
