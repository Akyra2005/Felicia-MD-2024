import fetch from 'node-fetch';

let imdbHandler = async (m, { conn, text }) => {
  if (!text) throw 'Format: *.imdb Judul*';

  try {
    let res = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`Error: *${res.status}*`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let ratings = json.ratings.map(rating => `${rating.source}: *${rating.value}*`).join('\n');

    let movieInfo = 
    `*PENCARIAN MOVIE*\n
Judul: *${json.title}*
Tahun: *${json.year}*
Dinilai: *${json.rated}*
Dirilis: *${json.released}*
Durasi: *${json.runtime}*
Genre: *${json.genres}*
Direktur: *${json.director}*
Penulis: *${json.writer}*
Aktor: *${json.actors}*
Plot: *${json.plot}*
Bahasq: *${json.languages}*
Negara: *${json.country}*
Penghargaan: *${json.awards}*
Skor Meta: *${json.metascore}*
Peringkat: *${json.rating}*
Suara: *${json.votes}*
ID IMDB: *${json.imdbid}*
Tipe: *${json.type}*
DVD: *${json.dvd}*
Film Laris: *${json.boxoffice}*
Produksi: *${json.production}*
Situs: *${json.website}*
Nilai: ${ratings}`;

    // send the movie poster along with the movie information as caption
    await conn.sendFile(m.chat, json.poster, 'poster.jpg', movieInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

imdbHandler.help = ['imdb','movie'];
imdbHandler.tags = ['tools'];
imdbHandler.command = /^(imdb|movie)$/i;
handler.register = true
handler.limit = true
export default imdbHandler;