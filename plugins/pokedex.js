import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {

if (!text) throw 'Format: *.pokedex Nama Pokemon*';

const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `Error: *${json.error}*`;

}

const message = `
Nama: *${json.name}*
ID: *${json.id}*
Tipe: *${json.type}*
Kemampuan: *${json.abilities}*
Tinggi: *${json.height}*
Berat: *${json.weight}*
Deskripsi: *${json.description}*

`;

conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });

};

handler.help = ['pokedex <pokemon>'];

handler.tags = ['internet'];

handler.command = /^pokedex/i;
handler.register = false
handler.limit = 1
export default handler;