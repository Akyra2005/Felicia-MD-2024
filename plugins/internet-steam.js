import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Format: *.steam Nama Permainan*';
  
  m.reply('*Memproses Permintaan...*');
  
  let query = encodeURIComponent(args[0]);
  let apiUrl = `https://ll--lasdanon.repl.co/api/search/steam?q=${query}&apikey=Onlasdan`;
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.status === 'Success' && json.data && json.data.length > 0) {
    let game = json.data[0];
    let message = `
*PENCARIAN STEAM*\n
Nama Permainan: *${game.judul}*
Harga: *${game.harga}*
Tanggal Rilis: *${game.rilis}*
Peringkat: *${game.rating}*
Tautan: *${game.link}*
    `;
    
    await conn.sendFile(m.chat, game.img, 'preview.jpg', message, m);
  } else {
    throw '*Tidak Ditemukan*';
  }
};

handler.help = ['steam'];
handler.tags = ['internet'];
handler.command = /^(steam)$/i;
handler.limit = true;
handler.register = false
export default handler;