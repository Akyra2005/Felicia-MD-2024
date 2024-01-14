let handler = async (m, { conn, isBotAdmin }) => {
  try {
    const mtype = m.quoted.mtype;
    const settings = {
      'audioMessage': { viewOnce: true },
      'videoMessage': { viewOnce: true },
      'imageMessage': { viewOnce: true },
      'stickerMessage': { isAvatar: true },
      'documentMessage': { viewOnce: true }
    };

    if (settings[mtype]) {
      let doc = m.quoted.mediaMessage;
      Object.assign(doc[mtype], settings[mtype]);
      await conn.relayMessage(m.chat, doc, { quoted: m });
      
      const hapus = m.quoted.sender ? m.message.extendedTextMessage.contextInfo.participant : m.key.participant;
      const bang = m.quoted.id ? m.message.extendedTextMessage.contextInfo.stanzaId : m.key.id;

      if (isBotAdmin) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
      } else {
        return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
      }
    } else {
      throw "*Tidak Mendukung Tipe Media Tersebut*";
    }
  } catch {
    throw '*Balas Media, Jangan Dengan Keterangan*';
  }
};

handler.help = ['vnc *[reply media]*'];
handler.tags = ['main'];
handler.command = /^(vnc)$/i;
handler.register = false
handler.limit = true
export default handler;