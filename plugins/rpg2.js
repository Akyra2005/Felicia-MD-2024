let decreaseElixirLevel = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    if (!user.elixirLevel && user.elixirLevel !== 0) {
        return m.reply(`
            Level Elixir of Life kamu sudah minimum.
        `.trim())
    }

    // Kurangi level elixir pengguna
    user.elixirLevel = Math.max(0, user.elixirLevel - 1)

    m.reply(`
        Kamu berhasil menurunkan Level Elixir of Life menjadi *${user.elixirLevel}*.
    `.trim())
}

decreaseElixirLevel.help = ['downelixir']
decreaseElixirLevel.tags = ['rpg']
decreaseElixirLevel.command = /^downelixir$/i
decreaseElixirLevel.register = true
export default decreaseElixirLevel