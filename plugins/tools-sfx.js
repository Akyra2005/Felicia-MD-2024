import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Format: *${usedPrefix + command} Nomor*`
let json = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${text}`)
        let jsons = await json.json()
        let caption = '*PENCARIAN SFX*'
        for (let x of jsons.results) {
        caption += `
Nama: *${x.name}*
Suara: *${x.sound}*
`}
        return m.reply(caption)
}

handler.command = handler.help = ['sfx']
handler.tags = ['tools']
export default handler