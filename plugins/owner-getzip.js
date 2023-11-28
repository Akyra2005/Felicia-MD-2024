import fs from 'fs';

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('Format: *.getzip Nama File*');
    return;
  }

  const filename = `${text}`;

  try {
    m.reply('*Sedang Mengambil Zip*');
    const sesi = await fs.promises.readFile(`./${filename}`);
    await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/octet-stream', fileName: filename }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply('*E R R O R*');
  }
};

handler.help = ['getzip <namafile>'];
handler.tags = ['owner'];
handler.command = /^(getzip)$/i;
handler.rowner = true;

export default handler;