import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    let hash = text;
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
    if (!hash) {
        conn.reply(m.chat, '*Hash Tidak Ditemukan*', m);
        return;
    }
    
    let sticker = global.db.data.sticker[hash];
    if (!sticker) {
        conn.reply(m.chat, '*Stiker Tidak Ada Didatabase*', m);
        return;
    }
    
    let cmdMentions = sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:
Nama Sebutan: *${conn.getName(v)} ${v === m.sender ? '👈' : '👤'}*
Nomor Sebutan: *${splitM(v)}*
Sebutan Jid: *${v}*`).join('\n\n');
    
    let lockedEmoji = sticker.locked ? '🔒' : '🔓';
    let str = `
FileSha256: *${hash}*
Teks: *${sticker.text}*
Waktu Diciptakan: *${sticker.at}*
Status: *${lockedEmoji}*
Nama Pencipta: *${conn.getName(sticker.creator)}*
Nomor Pencipta: *${splitM(sticker.creator)}*
Jid Pencipta: *${sticker.creator}*
${sticker.mentionedJid.length > 0 ? `Sebutan CMD:\n*${cmdMentions}*` : ''}`.trim();
    
    conn.reply(m.chat, str, m);
};

handler.help = ['infocmd'];
handler.tags = ['database'];
handler.command = ['infocmd'];
handler.register = false
export default handler;

/**
 * split Jid
 * @param {String} jid
 * @returns {String}
 */
function splitM(jid) {
    return jid.split('@')[0];
}