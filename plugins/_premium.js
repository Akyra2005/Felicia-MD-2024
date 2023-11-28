let handler = m => m

export async function all(m) {
    let user = global.db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await m.reply(`*Akses Ke Premium Kamu Sudah Habis*`)
            user.premiumTime = 0
            user.premium = false

            // Hapus nomor dari global.prems
            let index = global.prems.indexOf(m.sender)
            if (index !== -1) {
                global.prems.splice(index, 1)
            }
        }
    }
}
