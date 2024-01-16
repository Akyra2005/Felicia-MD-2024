let { proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '*Balas Pesan Dengan Perintah .react Emoji*'
  let q = m.quoted ? await m.getQuotedObj() : m
  conn.relayMessage(m.chat, { reactionMessage: proto.ReactionMessage.create({ key: q.key, text: args[0] }) }, { messageId: q.key.id })
}
handler.help = ['react']
handler.tags = ['tools']
handler.command = /^(react)$/i

export default handler
