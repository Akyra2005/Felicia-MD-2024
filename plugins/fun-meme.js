import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  m.reply('*Memproses Permintaan...*');

  let apiUrl = 'https://skizo.tech/api/randommeme?apikey=charlotte';
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.caption && json.media) {
    let caption = json.caption;
    let mediaUrl = json.media;
    
    await conn.sendFile(m.chat, mediaUrl, '', caption, m);
  } else {
    throw '*E R R O R*';
  }
};

handler.help = ['meme'];
handler.tags = ['internet'];
handler.command = /^(meme)$/i;
handler.limit = true;

export default handler;