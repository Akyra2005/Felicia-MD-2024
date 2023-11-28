let handler = async (m, { conn }) => {
let caption = `Waalaikumussalam`

conn.reply(m.chat, caption, m)
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler