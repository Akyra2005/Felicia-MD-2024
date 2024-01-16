import fetch from 'node-fetch';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    throw `Format: *${usedPrefix + command} URL*`;
  }

  const url = `https://tr.deployers.repl.co/cj?u=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw '*E R R O R*';
    }

    const data = await response.json();
    const mySecret = process.env['nomer']

    // Reply to the user with all the fetched data
    const replyText = `
Dipindai Pada: *${data.current_time}*
URL: *${data.url}*
Alamat IP: *${data.ip_address}*
Alamat IP Asli: *${data.real_ip_address}*
Hasil Pesan: *${data.result_message}*
\n
===============================
${data.how_to_protect}
    `;
//     const replyText = `
// Server Scanning at: ${data.current_time}
// URL: ${data.url}
// IP Address: ${data.ip_address}
// Is Vulnerable: *_${data.is_vulnerable}_*
// Real IP Address: ${data.real_ip_address}
// Result Message: ${data.result_message}
// Donasi: https://tr.deployers.repl.co/images or Dana ${mySecret}
// \n\n
// ===========================================
// ${data.how_to_protect}
//     `;

    await conn.reply(m.chat, replyText, m);
  } catch (error) {
    console.error('Error:', error);
    // Reply to the user with an error message (optional):
    await conn.reply(m.chat, '*E R R O R*', m);
  }
};

handler.command = /^(cj|clickjacking|clickjack|clickjacker)?$/i;
handler.tags = ['internet'];
handler.help = ['cj <URL>'];
handler.register = false
handler.limit = 1
export default handler;
