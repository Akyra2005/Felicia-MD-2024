import fetch from 'node-fetch'
let bts = []
fetch ('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/batues.txt')
    .then(res => res.text())
    .then(txt => bts = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = bts[Math.floor(Math.random() * bts.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '*Sukses*', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['bts']
handler.tags = ['random']
handler.limit = false
handler.register = true
handler.command = /^(bts)$/i

export default handler
