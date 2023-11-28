import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {

if (!text) throw 'Format: *.define Kata*';

const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `Error: *${json.message}*`;

}

if (!json.list.length) {

throw '*Kata Tidak Ditemukan Dalam Kamus*';

}

const firstEntry = json.list[0];

const definition = firstEntry.definition;

const example = firstEntry.example ? `Contoh: *${firstEntry.example}*` : '';

const message = `Kata: *${text}*\nDefinisi: *${definition}*\n${example}`;

conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });

};

handler.help = ['define <word>'];

handler.tags = ['tools'];

handler.command = /^define/i;

export default handler;