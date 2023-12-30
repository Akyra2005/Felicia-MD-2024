import axios from 'axios'

let handler = async (m, { conn, text }) => {
  let apiKey = 'Shirooo'; // ganti dengan api key dari lolhuman
  let userUniqueId = 'user-unique-id'; // ganti dengan unique id user

  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apiKey}&text=${encodeURIComponent(text)}&user=${userUniqueId}`);
    let result = response.data.result;
    conn.reply(m.chat, result, m);
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'Iya?', m);
  }
};

handler.command = /^cia$/i;

export default handler