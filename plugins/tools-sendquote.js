async function handler(m, { isAdmin, isOwner }) {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    if (!m.quoted) throw '*Balas Pesan*'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw '*Pesan Tersebut Tidak Mengandung Balasan*'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i
export default handler 