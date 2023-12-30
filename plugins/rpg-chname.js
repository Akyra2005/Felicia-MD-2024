let handler = async (m, { conn, args, text}) => {
    let [nama] = text.split` `
    if (!nama) throw '*Masukkan Nama Nama CH?*\n\nContoh: *.chname nama*'
    let user = global.db.data.users[m.sender]
  user.chname = nama
  m.reply(`
*Sukses Menetapkan Nama Saluran*\n\n*${nama}*
`)
}
handler.help = ['chname [nama]']
handler.tags = ['rpg']
handler.command = /^chname$/i
handler.register = false
export default handler