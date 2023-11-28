export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys || !(m.mtype === "stickerMessage") || !global.db.data.chats[m.chat]?.antiSticker) return;

  const user = global.db.data.users[m.sender];
  user.warn += 1;
  user.banned = true;

  m.reply('*STIKER TERDETEKSI*\n*Stiker Akan Dihapus Karena Anti-Stiker Aktif Digrup Ini*');

  if (isAdmin || isBotAdmin) {
    const deleteMessage = { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: [m.sender] } };
    m.reply(isAdmin ? '*Kamu Tidak Diizinkan Mengirim Stiker*' : '*Stiker Terdeteksi Dan Akan Dihapus*');
    await this.sendMessage(m.chat, deleteMessage);
  }
}
