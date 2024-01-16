import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { lookup } from 'mime-types';
import { pickRandom } from  '../lib/other-function.js'
let handler = async (m, { conn, args }) => {
	let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
let score = '200'
m.reply(wait)
  let { image, info } = await getYandeImageWithScore(score);
  if (image === 'in_progress') {
  return;
  }

  let mime = await lookup(image);
  let caption = createCaption(info);
  await conn.sendMessage(
    m.chat,
    { [mime.split('/')[0]]: { url: image }, caption: caption },
    { quoted: m }
  );
};
handler.tags = [`anime`,`nsfw`]
handler.help = handler.command = ['btmles']
handler.limit = 3
handler.register = false
handler.nsfw = true
export default handler;
const randomNum = Math.floor(Math.random() * 100) + 1;
let angkah = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45','46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60','61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75','76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90','91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let angka = pickRandom(angkah)
async function getYandeImageWithScore(score) {
  let apiUrl = `https://yande.re/post.json?page=${angka}&tags=bottomless`;


  let res = await fetch(apiUrl);
  let json = await res.json();
    
  if (json.length === 0) {
    throw `Gambar Dengan Skor *${score}* Tidak Ditemukan`;
  }

  let data = json[~~(Math.random() * json.length)];
  if (!data) {
    throw `Gambar Dengan Skor *${score}* Tidak Ditemukan`;
  }

  let imageInfo = {
    id: data.id || 'none',
    tags: data.tags || 'none',
    created_at: data.created_at || 'none',
    updated_at: data.updated_at || 'none',
    creator_id: data.creator_id || 'none',
    approver_id: data.approver_id || 'none',
    author: data.author || 'none',
    change: data.change || 'none',
    source: data.source || 'none',
    score: data.score || 'none',
    md5: data.md5 || 'none',
    file_size: data.file_size || 'none',
    file_ext: data.file_ext || 'none',
    file_url: data.file_url || 'none',
    is_shown_in_index: data.is_shown_in_index || 'none',
    preview_url: data.preview_url || 'none',
    preview_width: data.preview_width || 'none',
    preview_height: data.preview_height || 'none',
    actual_preview_width: data.actual_preview_width || 'none',
    actual_preview_height: data.actual_preview_height || 'none',
    sample_url: data.sample_url || 'none',
    sample_width: data.sample_width || 'none',
    sample_height: data.sample_height || 'none',
    sample_file_size: data.sample_file_size || 'none',
    jpeg_url: data.jpeg_url || 'none',
    jpeg_width: data.jpeg_width || 'none',
    jpeg_height: data.jpeg_height || 'none',
    jpeg_file_size: data.jpeg_file_size || 'none',
    rating: data.rating || 'none',
    is_rating_locked: data.is_rating_locked || 'none',
    has_children: data.has_children || 'none',
    parent_id: data.parent_id || 'none',
    status: data.status || 'none',
    is_pending: data.is_pending || 'none',
    width: data.width || 'none',
    height: data.height || 'none',
    is_held: data.is_held || 'none',
    frames_pending_string: data.frames_pending_string || 'none',
    frames_pending: data.frames_pending || 'none',
    frames_string: data.frames_string || 'none',
    frames: data.frames || 'none',
    is_note_locked: data.is_note_locked || 'none',
    last_noted_at: data.last_noted_at || 'none',
    last_commented_at: data.last_commented_at || 'none'
  };

  return { image: data.file_url, info: imageInfo };
}

function createCaption(info) {
  return `
ID: *${info.id}*
Tag: *${info.tags}*
Pengarang: *${info.author}*
Sumber: *${info.source}*
Skor: *${info.score}*
Lebar: *${info.width}*
Tinggi: *${info.height}*
MD5: *${info.md5}*
Ukuran File: *${info.file_size}*
Format File: *${info.file_ext}*
Ditampilkan di Indeks: *${info.is_shown_in_index}*
Peringkat: *${info.rating}*
Apakah Peringkat Terkunci: *${info.is_rating_locked}*
Memiliki Anak: *${info.has_children}*
Identitas Orang Tua: *${info.parent_id}*
Status: *${info.status}*
  `;
}