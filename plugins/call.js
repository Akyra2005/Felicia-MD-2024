import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)

let handler = async (m, { conn, isOwner, command, text }) => {
if (!text) throw "Format: *.call Nomor*"
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('*Memproses Permin...*')
  let o
  try {
    o = await exec('python3 ./py/call/call.py ' + text)
  } catch (e) {
    o = e
  } finally {
    let { stdout } = o
    await conn.reply(m.chat, '*Kode:* ' + stdout, m)
  }
    }
handler.help = ['call']
handler.tags = ['owner']
handler.command = ['call']
handler.owner = true
export default handler