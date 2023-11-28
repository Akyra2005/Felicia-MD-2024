import fetch from "node-fetch"

let handler = async (m, { conn, text, command, usedPrefix }) => {
let id = m.chat
let UrlSearch = "https://xeno-canto.org/api/2/recordings?query="
	if (!text) throw "Format: *.xen Nama Satwa*"
	try {
	await m.reply(wait)
	let res = await fetch(UrlSearch + text)
	let jso = await res.json()
	let data = jso.recordings
    let list = data.map((item, index) => `*${htki} Suara Burung ${htka}*
ID: *${item.id}*
En: *${item.en}*
Rec: *${item.rec}*
Loc: *${item.loc}*
Unduh: *${item.file}*
`).join("\n")
    await m.reply(list)
    } catch (e) {
    await m.reply(eror)
    }
}
handler.help = ["xeno"]
handler.tags = ["tools"]
handler.command = /^(xeno)$/i

export default handler