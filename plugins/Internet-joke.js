import fetch from 'node-fetch';

var handler = async (m, { conn }) => {
  conn.reply(m.chat, '*Memproses Permintaan...*', m);
  let res = await fetch('https://official-joke-api.appspot.com/random_joke');
  if (!res.ok) throw '*E R R O R*';
  let json = await res.json();
  let setup = json.setup;
  let punchline = json.punchline;
  conn.reply(m.chat, `Pertanyaan: *${setup}*\nJawaban: *${punchline}*`, m);
}

handler.help = ['joke'];
handler.tags = ['internet', 'fun'];
handler.command = /^(joke|lelucon)$/i;
handler.register = false
handler.limit = 1
export default handler;