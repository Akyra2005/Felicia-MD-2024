let resetHealth = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    if (user.health === 0) {
        return m.reply(`
            Health kamu sudah 0.
        `.trim())
    }

    // Set health pengguna menjadi 0
    user.health = 0

    m.reply(`
        Kamu berhasil menghapus Health kamu menjadi *0*.
    `.trim())
}

resetHealth.help = ['resethealth']
resetHealth.tags = ['rpg']
resetHealth.command = /^resethealth$/i
resetHealth.register = true
export default resetHealth