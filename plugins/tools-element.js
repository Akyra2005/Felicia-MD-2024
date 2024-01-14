import fetch from 'node-fetch';

let elementHandler = async (m, { conn, text }) => {

if (!text) throw `Format: *.element Tabel Periodik*`;

try {

let res = await fetch(`https://api.popcat.xyz/periodic-table?element=${text}`);

if (!res.ok) {

throw new Error(`Error: *${res.status}*`);

}

let buffer = await res.arrayBuffer();

let json = JSON.parse(Buffer.from(buffer).toString());

console.log('JSON response:', json);

let elementInfo = 
`*PENCARIAN ELEMEN*\n
Nama: *${json.name}*
Simbol: *${json.symbol}*
Nomor Atomik: *${json.atomic_number}*
Masa Atomik: *${json.atomic_mass}*
Periode: *${json.period}*
Fase: *${json.phase}*
Ditemukan Oleh: ${json.discovered_by}*
Ringkasan: *${json.summary}*`;

conn.sendFile(m.chat, json.image, 'element.jpg', elementInfo, m);

} catch (error) {

console.error(error);

// Handle the error appropriately

}

};

elementHandler.help = ['element'];

elementHandler.tags = ['tools'];

elementHandler.command = /^(element|ele)$/i;
handler.register = false
export default elementHandler