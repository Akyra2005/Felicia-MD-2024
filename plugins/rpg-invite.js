let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (!args[0]) {
    return m.reply(`*Silakan Mention Leader Dari Guild Yang Ingin Anda Bergabung.*`)
  }

  let mention = m.mentionedJid[0]

  if (!mention) {
    return m.reply(`*Silakan Mention Leader Dari Guild Yang Ingin Anda Bergabung.*`)
  }

  let leader = global.db.data.users[mention]

  if (!leader.guild) {
    return m.reply(`*Leader Guild Tidak Ditemukan.*`)
  }

  let guild = leader.guild

  if (guild.member.length >= 4) {
    return m.reply(`*Maaf, Guild Sudah Mencapai Batas Maksimal Anggota.*`)
  }

  let request = {
    user: m.sender,
    reason: args[1] || ''
  }

  guild.requests.push(request)

  m.reply(`*Permintaan Bergabung Anda Telah Dikirim Ke ${leader.name}. Silakan Tunggu Konfirmasi Dari Leader. Format Konfirmasi #konfirmasi @user [terima|tolak] [alasan]*`)
}

handler.help = ['requestguild @leader', 'reqguild @leader']
handler.tags = ['rpg']
handler.command = /^(request|req)guild$/i
handler.register = false
handler.group = true

export default handler
