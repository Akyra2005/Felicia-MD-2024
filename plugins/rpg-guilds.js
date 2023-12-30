let handler = async (m, { conn }) => {
  let guild = global.db.data.guild || {}
  if (Object.keys(guild).length === 0) {
    return m.reply(`Tidak ada guild yang terdaftar saat ini.`)
  }

  guild = Object.values(guild)

  let message = `Daftar semua guild:\n\n`

  for (let g of guild) {
    let leaderName = global.db.data.users[g.leader]?.name || 'Tidak diketahui'
    let membersCount = g.members.length
    let guildName = g.name || 'Tanpa Nama'

    message += `Nama: ${guildName}\nLeader: ${leaderName}\nAnggota: ${membersCount}\n\n`
  }

  await conn.sendMessage(m.chat, message, MessageType.text)
}

handler.help = ['daftarguild']
handler.tags = ['guild']
handler.command = /^(daftarguild)$/i
handler.register = false
handler.group = true

export default handler
