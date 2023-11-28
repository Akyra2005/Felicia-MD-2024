export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isAudio = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiAudio && isAudio) {
    if(isAudio === "audioMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*AUDIO TERDETEKSI*\n\n*Audio Akan Dihapus Karena Anti-Audio Aktif Digrup Ini*`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}