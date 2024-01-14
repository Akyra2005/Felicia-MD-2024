import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw '*Tidak Ada Group Metadata*'
    if (!('participants' in groupMetadata)) throw '*Partisipasi Tidak Terdaftar*'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '*Bot Tidak Berada Digrup Tersebut*'
    if (!me.admin) throw '*Bot Bukan Admin Digrup Tersebut*'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup'].map(v => v + ' <jid>')
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.register = false
handler.botAdmin = true
handler.admin = true
export default handler