let handler = async (m, { conn, text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {};
    if (!m.quoted) throw `Balas Stiker Dengan Perintah *${usedPrefix + command}*`;
    if (!m.quoted.fileSha256) throw '*SHA256 Hash Tidak Ditemukan*';
    if (!text) throw `Balas Stiker Dengan Perintah *${usedPrefix + command}*`;

    let sticker = global.db.data.sticker;
    let hash = m.quoted.fileSha256.toString('base64');

    if (sticker[hash] && sticker[hash].locked) throw '*Kamu Tidak Memiliki Izin*';

    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: +new Date(),
        locked: false,
    };

    conn.reply(m.chat, '*Berhasil Menyimpan CMD*', m);
};

handler.help = ['cmd'].map(v => 'set' + v + ' <teks>');
handler.tags = ['database'];
handler.command = ['setcmd'];
handler.limit = 2
handler.register = false
export default handler;