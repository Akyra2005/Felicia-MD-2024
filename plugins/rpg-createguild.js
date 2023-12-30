const maxGuildMembers = 4

let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (user.guild) {
    return m.reply(`*Anda Sudah Tergabung Di Dalam Guild*`)
  }

  if (!args[0]) {
    return m.reply(`Format: *.createguild NamaGuild*`)
  }

  let guildName = args.join(' ')

  if (guildName.length > 20) {
    return m.reply(`*Nama Guild Terlalu Panjang. Maksimal 20 Karakter*`)
  }

  let guild = {
    name: guildName,
    leader: m.sender,
    members: [m.sender]
  }

  user.guild = guild

  m.reply(`*Guild ${guildName} Berhasil Dibuat, Anda Menjadi Leader*\n*Jangan Lupa Ajak Teman-teman Anda Untuk Bergabung*`)

  return true
}

handler.help = ['createguild <nama>', 'makeguild <nama>']
handler.tags = ['guild']
handler.command = /^(create|make)guild$/i
handler.limit = true
handler.register = false
handler.group = true

export default handler
