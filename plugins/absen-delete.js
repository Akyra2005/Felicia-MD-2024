let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.reply(m.chat, `*Tidak Ada Absen Berlangsung*\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`, m)
    delete conn.absen[id]
    m.reply(`*Sukses Menghapus Sesi Absen*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
handler.register = false
export default handler
