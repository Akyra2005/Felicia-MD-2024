let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  if (!user.partner) return conn.reply(m.chat, '*Kamu Belum Menikah*', m)
  let partner = global.db.data.users[user.partner]
  if (!partner) return conn.reply(m.chat, '*Kamu Belum Menikahv', m)
  if (!partner.partner) {
    delete user.partner
    conn.reply(m.chat, `Kamu Sekarang Bercerai Dengan *${partner.name}*`, m, {contextInfo: { mentionedJid: [partner.jid] }})
  } else conn.reply(m.chat, '*Pihak Lawan Belum Menyetujui*', m, {contextInfo: { mentionedJid: [partner.jid] }})
}
handler.help = ['bercerai']
handler.tags = ['rpg']
handler.command = /^bercerai$/i

export default handler
