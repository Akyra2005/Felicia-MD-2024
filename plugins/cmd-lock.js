let handler = async (m, { conn, command }) => {
    if (!m.quoted) throw '*Balas Pesan*'
    if (!m.quoted.fileSha256) throw '*SHA256 Hash Tidak Ditemukan*'
    
    let sticker = global.db.data.sticker;
    let hash = m.quoted.fileSha256.toString('hex');
    
    if (!(hash in sticker)) throw '*Hash Tidak Ditemukan Dalam Database*';
    
    if (command === 'lockcmd') {
        sticker[hash].locked = true;
        conn.reply(m.chat, '*Perintah Stiker Berhasil Dikunci 🔒*', m);
    } else if (command === 'unlockcmd') {
        sticker[hash].locked = false;
        conn.reply(m.chat, '*Perintah Stiker Berhasil Dibuka Kuncinya 🔓*', m);
    } else {
        throw `*${command}cmd* Untuk Mengunci Atau Membuka Kunci Perintah`;
    }
};

handler.help = ['lockcmd', 'unlockcmd'];
handler.tags = ['database'];
handler.command = /^(un)?lockcmd$/i;
handler.limit = 4
handler.register = false
export default handler;