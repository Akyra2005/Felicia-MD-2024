import fetch from 'node-fetch'
import { pickRandom } from '../lib/other-function.js'
let handler = async (m, { conn, usedPrefix }) => {
let cecan = pickRandom(global.cecan)
    conn.sendFile(m.chat, cecan, '', "*Sukses*", m, null, {
                mentions: conn.parseMention("*Sukses*")})
}
handler.help = handler.command = ['cecan']
handler.tags = ['asupan']
handler.limit = false
handler.register = false
export default handler