const maxGuildMembers = 4

let handler = async (m, { args }) => {
  let user = global.db.data.users[m.sender]

  if (!user.guild) {
    return m.reply(`*Anda Tidak Tergabung Dalam Guild*`)
  }

  if (user.guild.leader !== m.sender) {
    return m.reply(`*Anda Bukan Pemimpin Guild*`)
  }

  if (!args[0]) {
    return m.reply(`*Silakan Masukkan @username Atau Nomor WhatsApp Target Yang Ingin Dikeluarkan Dari Guild\nFormat: *${usedPrefix}kickgg @User Atau ${usedPrefix}kickgg 08123456789*`)
  }

  let target = m.mentionedJid ? m.mentionedJid[0] : args[0]
  let targetUser = global.db.data.users[target]

  if (!targetUser) {
    return m.reply(`*Target Tidak Ditemukan*`)
  }

  if (targetUser.guild !== user.guild) {
    return m.reply(`*Target Tidak Tergabung Dalam Guild Anda*`)
  }

  if (targetUser.level <= user.level) {
    return m.reply(`*Anda Tidak Dapat Mengeluarkan Anggota Yang Memiliki Level Yang Sama Atau Lebih Tinggi Dari Anda*`)
  }

  let index = user.guild.members.indexOf(target)
  user.guild.members.splice(index, 1)

  m.reply(`*@${targetUser.name} Berhasil Dikeluarkan Dari Guild*`)
  
  return true
}

handler.help = ['kickg @user', 'kickg <nomorHP>']
handler.tags = ['guild']
handler.command = /^kickg$/i
handler.limit = true
handler.register = false
handler.group = true

export default handler