import axios from "axios";
import FormData from "form-data";

let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `Balas Media Dengan Perintah *.nao* Untuk Mencari Sumbernya`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*Mime ${mime} Tidak Support*`;
  let img = await q.download();

  const formData = new FormData();
  formData.append("output_type", "2");
  formData.append("api_key", "58eb687f35decd24507ada808a643fb719931c18");
  formData.append("file", img, "image.jpg");

  await m.reply("*Memproses Permintaan...*");
  let res = await axios.post("https://saucenao.com/search.php", formData, {
    headers: formData.getHeaders(),
  });

  let json = res.data;

  if (!json.results || json.results.length === 0) {
    throw "*Tidak Menemukan Hasil*";
  }

  let result = json.results[0];
  let similarity = result.header.similarity;
  let imageUrl = result.header.thumbnail;

  let { title, author_name, ext_urls } = result.data;

  let _result = `Judul: *${title}*\nPengarang: *${author_name}*\nKesamaan: *${similarity}%*\nSumber: *${ext_urls[0]}*`;

  await conn.sendFile(m.chat, imageUrl, "result.jpg", _result, m);
};

handler.help = ["saucenao",'nao'].map(v => v + ' <reply/caption>')
handler.tags = ["anime","tools"];
handler.command = /^(saucenao|nao)$/i;
handler.limit = 2;
handler.register = false
export default handler;