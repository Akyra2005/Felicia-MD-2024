let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n•> ${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    await m.reply(`*Daftar Grup:*

${txt}
`.trim())
}
handler.help = ['listgc']
handler.tags = ['info']
handler.command = /^listgc|grouplist$/i
handler.register = true
handler.limit = true
export default handler
