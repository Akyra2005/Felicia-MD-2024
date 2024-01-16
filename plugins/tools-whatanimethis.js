import uploadImage from "../lib/uploadImage.js";
import fetch from "node-fetch";
import * as fs from "fs";

let handler = async (m, { conn, usedPrefix }) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || "";
	if (!mime) throw `Balas Gambar Dengan Perintah *.whatanime*`;
	if (!/image\/(jpe?g|png)/.test(mime)) throw `*Mime ${mime} Tidak Didukung*`;
	let img = await q.download();
	let upld = await uploadImage(img);
	await m.reply(wait);
	let res = await fetch(
		`https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(upld)}`
	);
	let json = await res.json();
	let { id, idMal, title, synonyms, isAdult } = json.result[0].anilist;
	let { filename, episode, similarity, video, image } = json.result[0];
	let _result = `Judul: *${title.romaji} (${title.native})*\nSinonim: *${synonyms}*\nDewasa: *${isAdult}*\nKesamaan: *${(similarity * 100).toFixed(1)}*\nEpisode: *${episode}*`;
	await conn.sendFile(m.chat, image, "wait.jpg", _result, m);
};
handler.help = ["whatanime"];
handler.tags = ["tools"];
handler.command = /^(wait|whatanime|source)$/i;
handler.limit = 1
export default handler;