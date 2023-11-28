import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)

let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait)
    if (!isROwner) return
    if (!text) throw `Format: *${usedPrefix + command} Folder/File*`
    let o
    try {
        o = await exec('ls ' + text)
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) {
            m.reply(stdout)
        } else if (stderr.trim()) {
            if (stderr.includes('*Tidak Ada Berkas Atau Direktori Seperti Itu*')) {
                let path = text.substring(0, text.lastIndexOf('/'))
                let lsOutput = await exec('ls ' + path)
                let { stdout: lsStdout, stderr: lsStderr } = lsOutput
                if (lsStderr.trim()) {
                    m.reply(lsStderr)
                } else {
                    m.reply(`*Tidak Ditemukan*\n────────────────────────────\n\n${lsStdout}`)
                }
            } else {
                m.reply(stderr)
            }
        }
    }
}
handler.help = ['getplugin'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(getplugin|plist)$/i
handler.rowner = true

export default handler