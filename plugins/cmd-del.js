let handler = async (m, { conn, text }) => {
    let hash = text;
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
    
    if (!hash) {
        conn.reply(m.chat, '*Hash Tidak Ditemukan*', m);
        return;
    }

    let sticker = global.db.data.sticker;
    if (sticker[hash] && sticker[hash].locked) {
        conn.reply(m.chat, '*Kamu Tidak Memiliki Izin Untuk Menghapus Stiker ini*', m);
    } else {
        delete sticker[hash];
        let str = `*Perintah Stiker Berhasil Dihapus*`;
        conn.reply(m.chat, str, m);
    }
};

handler.help = ['delcmd <teks>'];
handler.tags = ['database'];
handler.command = /^delcmd$/i;
handler.premium = 4;
handler.register = false
export default handler;