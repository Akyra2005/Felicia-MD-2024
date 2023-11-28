import { tmpdir } from 'os'
import { join } from 'path'
import fs from 'fs'

let handler = async (m, { args, text, usedPrefix, command }) => {

	let info = `Format: *${usedPrefix + command} Nama Lama|Nama Baru*`

if (!args[0]) throw info

if (!args[1] == "|") throw `Format: *${usedPrefix + command} Nama Lama|Nama Baru*`

if (!args[2]) throw `Format: *${usedPrefix + command} Nama Lama|Nama Baru*`

let from = args[0]

let to = args[2]

let ar = Object.keys(plugins)

let ar1 = ar.map(v => v.replace('.js', ''))

if (!ar1.includes(args[0])) return m.reply(`*Tidak Ditemukan*\n\n\n${ar1.map(v => ' ' + v).join`\n`}`)

await fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)

conn.reply(m.chat, `Sukses Mengganti *"plugins/${from}.js" Ke "plugins/${to}.js"*`, m)

}

handler.help = ['renameplugin'].map(_=> _ + " *<old name> | <new name>*")

handler.tags = ['owner']

handler.command = /^(r(ename(file)?|f)|rn)$/i
handler.owner = true
handler.mods = true

export default handler