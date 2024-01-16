import axios from 'axios'

let handler = async(m, { conn, args, usedPrefix, command }) => {

let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/itzy.json`)).data 

let mystic = await res[Math.floor(res.length * Math.random())]

conn.sendFile(m.chat, mystic, 'error.jpg', `*Sukses*`, m)}

//conn.sendButton(m.chat, `_${command}_`, author, mystic, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}

handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
handler.register = false
handler.limit = 1
export default handler