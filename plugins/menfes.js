let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `Format: *${usedPrefix + command} Nomor|Nama Pengirim|Pesan*`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `Format: *${usedPrefix + command} Nomor|Nama Pengirim|Pesan*`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw '*Nomor Tidak Terdaftar Di Whatsapp*';
    if (jid == m.sender) throw '*Tidak Bisa Mengirim Pesan Menfess Ke Diri Sendiri*'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    	let id = + new Date
        let tek = `*Hai @${data.jid.split('@')[0]}, Kamu Menerima Pesan Menfess*\n\nDari: *${name}*\nPesan: \n${pesan}`.trim()
        await conn.reply(data.jid, tek, null)
        .then(() => {
            m.reply('*Berhasil Mengirim Pesan Menfess*')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['main']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true
handler.register = false
export default handler
