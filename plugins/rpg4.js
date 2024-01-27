let decreaseesens = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    if (!user.esens && user.esens !== 0) {
        return m.reply(`
            Level esens of Life kamu sudah minimum.
        `.trim())
    }

    // Kurangi level esens pengguna
    user.esens = 0

    m.reply(`
        Kamu berhasil menurunkan Level esens of Life menjadi *${user.esens}*.
    `.trim())
}

decreaseesens.help = ['downesens']
decreaseesens.tags = ['rpg']
decreaseesens.command = /^downesens$/i
decreaseesens.register = true
export default decreaseesens