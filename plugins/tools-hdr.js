import FormData from "form-data";
import Jimp from "jimp";

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "remini2":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					throw "*Masih Digunakan, Mohon Tunggu*";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Balas Gambar Dengan Perintah *.remini2*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime *${mime}* Tidak Didukung`;
				else conn.enhancer[m.sender] = true;
				m.reply("*Memproses Permintaan...*");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Sukses*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*E R R O R*");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "color":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				if (m.sender in conn.recolor)
					throw "*Masih Digunakan, Mohon Tunggu*";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Balas Gambar Dengan Perintah *.color*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime *${mime}* Tidak Didukung`;
				else conn.recolor[m.sender] = true;
				m.reply("*Memproses Permintaan...*");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Sukses*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*E R R O R*");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hd":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				if (m.sender in conn.hdr)
					throw "*Masih Digunakan, Mohon Tunggu*";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Balas Gambar Dengan Perintah *.hd*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime *${mime}* Tidak Didukung`;
				else conn.hdr[m.sender] = true;
				m.reply("*Memproses Permintaan...*");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "*Sukses*", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*E R R O R*");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["remini2", "color", "hd", " hdr"];
handler.tags = ["ai"];
handler.limit = 1;
handler.register = false
handler.command = /^(hd|color|remini2|hdr)$/i;
export default handler;
