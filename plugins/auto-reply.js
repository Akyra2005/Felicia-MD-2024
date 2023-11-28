export async function before(m) {
  const { mtype, text, isBaileys, sender } = m;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
  const name = who.split("@")[0]
  const chat = global.db.data.chats[m.chat];
  const { banned } = global.db.data.users[sender];

  if (chat.autoReply && !isBaileys) {
    if (mtype === 'groupInviteMessage' || text.startsWith('https://chat') || text.startsWith('Buka tautan ini')) {
      this.reply(m.chat, `*UNDANGAN KEGRUP*\n7 Hari = Rp 5,000\n30 Hari = Rp 18,000\nPermanen = Rp 20,000`, m, { mentions: [sender] });
      await this.reply(sender + '@s.whatsapp.net', `Ada yang mau nyulik nih :v \n\nDari: @${sender.split("@")[0]} \n\nPesan: ${text}`, m, { mentions: [sender] });
    }
    
    let reactCaption = '';
if (mtype === 'reactionMessage') {
    const action = m.text ? 'Mengirim' : 'Menghapus';
    const message = m.text ? `Reaction: ${m.text}` : 'Reaction';
    reactCaption = `🎭 *Terdeteksi* @${name} ${action} ${message}`;
}

if (mtype in messages) {
    const caption = messages[mtype];
    const mentions = this.parseMention(caption);
    await this.reply(m.chat, caption, m, { mentions });
}

    const triggerWords = ['ooijb', 'kokk', 'ggvg', 'vcgg', 'ffgyy', 'hhg', 'jhh', 'hhjh'];
    const lowerText = text.toLowerCase();
    if (triggerWords.some(word => lowerText === word)) { // Check if m.text exactly matches any word in the triggerWords array
      const apsih = ["Kenapa", "Ada apa", "Naon meng", "Iya, bot disini", "Luwak white coffee passwordnya", "Hmmm, kenapa", "Apasih", "Okey bot sudah aktif", "2, 3 tutup botol", "Bot aktif"];
      const caption = `🤖 *${apsih[Math.floor(Math.random() * apsih.length)]}* kak @${name} 🗿`;
      await this.reply(m.chat, caption, m, { mentions: [who] });
    }
    
    if (mtype === 'stickerMessage' || text.includes('🗿')) {
    this.sendMessage(m.chat, {
      react: {
        text: '🗿',
        key: m.key
      }
    });
  }
  
  }

  return true;
}