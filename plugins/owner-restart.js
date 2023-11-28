import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Jangan: *node main.js*\nLakukan: *node index.js*'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```R E S T A R T . . .```')
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler