import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
		let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
	let user = global.db.data.users[m.sender].age
  if (user < 17) throw m.reply(`*Kamu Belum Cukup Umur*`)
    let url = 'https://api.waifu.im/search?included_tags=paizuri';
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.images && data.images.length > 0) {
            const imageInfo = data.images[0];
            const caption = `
Tanda Tangan: *${imageInfo.signature}*
Ekstensi: *${imageInfo.extension}*
ID Gambar: *${imageInfo.image_id}*
Favorit: *${imageInfo.favorites}*
Sumber: *${imageInfo.source}*
Lebar: *${imageInfo.width}*
Tinggi: *${imageInfo.height}*
Ukuran Byte: *${imageInfo.byte_size}*
URL: *${imageInfo.url}*
            `;
            const imageUrl = imageInfo.url;

            conn.sendFile(m.chat, imageUrl, null, caption, m);
        } else {
            conn.reply(m.chat, '*Tidak Ditemukan*', m);
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, '*E R R O R*', m);
    }
}
handler.help = handler.command = ['xpaizuri']
handler.tags = ['nsfw', 'anime']
handler.limit = 2
export default handler