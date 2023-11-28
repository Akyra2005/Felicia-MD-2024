import axios from "axios"
import { readFileSync } from "fs"


let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Balas Media Dengan Perintah *.differentme*'
if (!text) throw 'Masukkan Salah Satu Style Berikut:\n\n- color_line\n- fresh\n- cat_ears\n- full_bloom\n- angel\n- gracefull\n- cool\n- manga\n- charming\n- idol\n- comic_world\n- stipple\n- cg\n- princess\n- manhwa_female\n- manwha_male\n- comic\n- etc'
m.reply(wait)
let media = await q.download()
const imageBufer = media
const form = new FormData();
const blob = new Blob([imageBufer], { type: "image/jpg" });
form.append("file", blob, "image.jpg");
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/differentMe",
		method: "POST",
		params: {
			style: text,
         	json: true, 
		    apikey: global.rose,
		},
		data: form,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data;

if (!status) {
	return console.error(message); 
}
const { result } = data;
console.log(result);
const buffer = Buffer.from(result.base64Image, 'base64')
await conn.sendFile(m.chat, buffer, 'conco.jpg', '*Sukses*', m)
}
handler.help = ['differentme']
handler.tags = ['ai']
handler.command = /^(differentme)$/i
handler.premium = true
handler.register = true

export default handler