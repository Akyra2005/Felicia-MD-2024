let handler = async (m, { usedPrefix, text }) => {
  let user = global.db.data.users[m.sender]
  if (!user.guild) return m.reply(`*Kamu Tidak Bergabung Dengan Guild Manapun*`)
  
  let guild = global.db.data.guilds[user.guild]
  if (guild.leader !== m.sender) return m.reply(`*Hanya Leader Guild Yang Dapat Membubarkan Guild Ini!*`)
  
  let members = Object.keys(guild.members)
  for (let member of members) {
    let memberUser = global.db.data.users[member]
    memberUser.guild = undefined
  }
  
  delete global.db.data.guilds[user.guild]
  m.reply(`*Guild Telah Berhasil Dibubarkan*`)
}
handler.help = ['disband']
handler.tags = ['rpg']
handler.command = /^disband$/i
handler.register = false
handler.admin = true
handler.limit = 1

module.exports = handler
