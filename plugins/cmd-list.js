let handler = async (m, { conn }) => {
    
    let cmdList = Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.* ${value.locked ? '🔒 ' : '🔓'}${key} : ${value.text}`).join('\n');
    let str = cmdList ? `*DAFTAR CMD*\n${cmdList}` : '*Tidak Ada CMD Tersedia*';

    conn.reply(m.chat, str, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    });
};

handler.help = ['listcmd'];
handler.tags = ['database'];
handler.command = ['listcmd'];
handler.register = false
export default handler;