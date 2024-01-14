let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.reply(m.chat, `*Masih Ada Sesi Absen Digrup Ini*\n\n*${usedPrefix}hapusabsen* - Untuk Menghapus Absen`, m)
    }
    conn.absen[id] = [
        await conn.reply(m.chat, `*Sukses Memulai Absen*\n\n*${usedPrefix}absen* - Untuk Absen\n*${usedPrefix}cekabsen* - Untuk Mengecek Absen\n*${usedPrefix}hapusabsen* - Untuk Menghapus Sesi Absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
handler.register = false
export default handler
