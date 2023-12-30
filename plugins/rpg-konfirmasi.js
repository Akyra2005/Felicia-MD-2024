let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (!user.guild) {
    return m.reply(`*Anda Belum Bergabung Ke Dalam Guild.*`)
  }

  let guild = user.guild

  if (guild.leader !== m.sender) {
    return m.reply(`*Anda Bukan Leader Dari Guild Ini.*`)
  }

  if (!args[0]) {
    return m.reply(`*Silakan Mention Anggota Yang Ingin Dikonfirmasi.*`)
  }

  let mention = m.mentionedJid[0]

  if (!mention) {
    return m.reply(`*Silakan Mention Anggota Yang Ingin Dikonfirmasi.*`)
  }

  let member = global.db.data.users[mention]

  if (!member) {
    return m.reply(`*Anggota Yang Ingin Dikonfirmasi Tidak Ditemukan.*`)
  }

  if (member.guild !== guild) {
    return m.reply(`*Anggota Yang Ingin Dikonfirmasi Bukan Anggota Dari Guild Ini.*`)
  }

  if (!member.requestingToJoin) {
    return m.reply(`*Anggota Ini Tidak Memiliki Permintaan Bergabung.*`)
  }

  let accept = /terima/i.test(args[1] || '')
  let reason = args.slice(2).join(' ')

  if (accept) {
    if (guild.members.length >= 4) {
      return m.reply(`*Maaf, Guild Ini Sudah Mencapai Jumlah Anggota Maksimal.*`)
    }
    member.guild = guild.id
    member.requestingToJoin = false
    guild.members.push(member.jid)

    m.reply(`${member.name} telah bergabung dengan guild ini.`)
  } else {
    member.requestingToJoin = false

    if (reason) {
      m.reply(`*Permintaan Bergabung Dari ${member.name} Telah Ditolak Dengan Alasan: ${reason}*`)
    } else {
      m.reply(`*Permintaan Bergabung Dari ${member.name} Telah Ditolak.*`)
    }
  }
}

handler.help = ['konfirmasi @user [terima|tolak] [alasan]']
handler.tags = ['guild']
handler.command = /^konfirmasi$/i
handler.limit = true
handler.register = false
handler.group = true

export default handler
