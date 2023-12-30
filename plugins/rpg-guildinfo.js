let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]

  if (!user.guild) {
    return conn.reply(m.chat, `*Anda Belum Bergabung Ke Dalam Guild.*`, m)
  }

  let guild = user.guild
  let members = Object.entries(global.db.data.users).filter(([_, u]) => u.guild === guild.id)
  let leader = members.find(([_, u]) => u.id === guild.leader)

  let guildName = guild.name ? guild.name : 'Guild'
  let memberList = members.filter(([_, u]) => u.id !== guild.leader).map(([_, u]) => u.name).join('\n')
  let memberCount = members.length

  let caption = `
Nama Guild: *${guildName}*
Jumlah Anggota: *${memberCount}*
Daftar Anggota:
${memberList}
Leader Guild: *@${leader[0]}*
  `.trim()

  conn.reply(m.chat, caption, m, { mentions: [leader[0]] })
}

handler.help = ['guildinfo']
handler.tags = ['rpg']
handler.command = /^guildinfo$/i
handler.register = false
handler.group = true

export default handler
