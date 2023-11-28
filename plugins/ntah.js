export async function before(m) {
  const { mtype, text, isBaileys, sender } = m;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
  const name = who.split("@")[0]
  const chat = global.db.data.chats[m.chat];
  const { banned } = global.db.data.users[sender];

  if (chat.autoReply && !isBaileys) {
    if (mtype === 'groupInviteMessage' || text.startsWith('https://chat') || text.startsWith('Buka tautan ini')) {
      this.reply(m.chat, `*Hubungi wa.me/6281249122429*`, m, { mentions: [sender] });
      await this.reply(sender + '@s.whatsapp.net', `*Ada Pencuri*\n\nDari: *@${sender.split("@")[0]}*\n\nPesan: *${text}*`, m, { mentions: [sender] });
    }
    
    let reactCaption = '';
if (mtype === 'reactionMessage') {
    const action = m.text ? 'Mengirim' : 'Menghapus';
    const message = m.text ? `Reaction: ${m.text}` : 'Reaction';
    reactCaption = `🎭 *Terdeteksi* @${name} ${action} ${message}`;
}

if (mtype === 'editedMessage') {
    try {
    console.log(mtype);
    const tittle_edit = `*Pesan Diedit* @${m.sender.split('@')[0]}`
    const message_edit = this.loadMessage(m.id).message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text
    const quoted_edit = this.loadMessage(this.loadMessage(m.id).message.editedMessage.message.protocolMessage.key.id)
    return this.sendMessage(m.chat, { text: `${tittle_edit}\n\n${message_edit}`, mentions: [m.sender] }, { quoted: quoted_edit });
    } catch (e) {
      console.log(e);
    }
  }

if (mtype in messages) {
    const caption = messages[mtype];
    const mentions = this.parseMention(caption);
    await this.reply(m.chat, caption, m, { mentions });
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