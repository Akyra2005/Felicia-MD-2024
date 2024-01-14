let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*Jumlah Database Saat Ini ${totalreg} User*\n*Dan User Terdaftar Saat Ini ${rtotalreg} User*`)
}
handler.help = ['database']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.register = false
export default handler
