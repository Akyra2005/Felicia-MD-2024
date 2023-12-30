let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]

  if (!user.guild) {
    return conn.reply(m.chat, `*Anda Belum Bergabung Ke Dalam Guild.*`, m)
  }

  let guild = user.guild

  if (guild.leader === m.sender) {
    return conn.reply(m.chat, `*Leader Tidak Dapat Keluar Dari Guild. Silakan Bubarkan Guild Terlebih Dahulu Atau Memindahkan Kepemimpinan.*`, m)
  }

  guild.members.splice(guild.members.indexOf(m.sender), 1)
  user.guild = null

  conn.reply(m.chat, `*Anda Telah Keluar Dari Guild.*`, m)
}

handler.help = ['leaveguild']
handler.tags = ['rpg']
handler.command = /^leave(guild|g)$/i
handler.register = false
handler.group = true

export default handler
