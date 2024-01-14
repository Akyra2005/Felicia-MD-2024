let handler  = async (m, { conn }) => {
	let chat = global.db.data.chats[m.chat]
	if (!chat.nsfw) throw `*Grup Ini Tidak Mengizinkan NSFW*\nIzinkan Dengan *.enable 33*`
	let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`*Kamu Belum Cukup Umur*`)
	await m.reply('*Memproses Permintaan...*')
  conn.reply(m.chat,`${global.bokep}`, m)
}
handler.help = ['bokep']
handler.tags = ['nsfw']
handler.command = /^(bokep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.register = false

export default handler 

global.bokep = '*The list is Cosplayer*\n\nEps 1 SweetRabbit233 - Nahida Part 1\n- Preview: *https://pomf2.lain.la/f/fcrjj7pw.jpg*\n- Link: *https://terabox.fun/sl/4vQ5my2uY1*\n\nBakalan Di-update Kalau Ramai\n\nGunakan VPN Kanada Untuk Mempersingkat Step.\n\n*...*'
//KALAU MAU TAMBAHIN JUGA BISA