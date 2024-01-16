import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {

try {

let res = await fetch('https://api.thecatapi.com/v1/images/search')

let img = await res.json()

let caption = `*Sukses*`.trim()

conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m)

} catch (e) {

console.log(e)

throw '*E R R O R*'

}}

handler.help = ['cat']

handler.tags = ['internet']

handler.command = /^cat$/i
handler.register = false
handler.fail = null

export default handler