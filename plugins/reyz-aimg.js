import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Format: *${usedPrefix + command} Prompt*`;

  try {
    m.reply('*Memproses Permintaan...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.result && Array.isArray(data.result)) {
      for (let i = 0; i < Math.min(data.result.length, 2); i++) {
        const imageUrl = data.result[i];
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer();
        await conn.sendFile(m.chat, imageBuffer, null, null, m);
      }
    } else {
      throw '*Gagal*';
    }
  } catch {
    throw '*Error, Silahkan Coba Lagi*';
  }
};

handler.help = ['aiimage', 'dalle', 'gen', 'gimg', 'openai2']
handler.tags = ['openai']
handler.command = ['aiimage', 'dalle', 'gen', 'gimg', 'openai2'];
handler.limit = true
export default handler;