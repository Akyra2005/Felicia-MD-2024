import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Format: *.englishai Keywords*`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
    const model = 'llama';
    const endpoint = `https://gurugpt.cyclic.app/gpt4?prompt=${prompt}&model=${model}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.data; 

   m.reply(result);

  } catch (error) {
    console.error('Error:', error);
    throw `*E R R O R*`;
  }
};
handler.help = ['englishai']
handler.tags = ['ai']
handler.command = ['englishai'];
handler.register = true
handler.limit = true
export default handler;

