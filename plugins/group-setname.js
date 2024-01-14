let handler  = async (m, { conn, args, text }) => {
if (!text) throw `Format: *.setname Nama*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*E R R O R*'
}}
handler.help = ['setname'].map(v => v + ' <text>')
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = false
export default handler