let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊' : '' || type == 'cat' ? '🐈' : '' || type == 'dog' ? '🐕' : '' || type == 'horse' ? '🐴' : '')
    let user = global.db.data.users[m.sender]
    let pet = global.db.data.users[m.sender][type]

    if (pet == 0) return m.reply(`*_Kamu Tidak Memiliki Pet_*`)
    if (pet == 10) return m.reply(`*_Level Pet Kamu Sudah Maks_*`)

    let cooldown = new Date() - user[`${type}lastfeed`]
    if (cooldown < 600000) return m.reply(`Pet Kamu Sudah Kenyang, Tunggu Lagi Selama *${clockString(600000 - cooldown)}*`)

    if (user.petFood > 0) {
        user.petFood -= 1
        user[`${type}exp`] += 20
        user[`${type}lastfeed`] = new Date() * 1
        m.reply(`Memberi Makan *${type}*...\n*${emo} ${type.capitalize()}:* Nyummm~`)
        let levelUpExp = (pet * 100) - 1
        if (user[`${type}exp`] > levelUpExp) {
            user[type] += 1
            user[`${type}exp`] -= (pet * 100)
            m.reply(`*CONGRATS*, Level Pet Kamu Naik`)
        }
    } else m.reply(`*_Kamu Tidak Memiliki Makanan Pet_*`)
}

handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i
handler.register = false
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
