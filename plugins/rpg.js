let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const maxElixirLevel = 4 // maksimum level elixir yang dapat dicapai

    if (user.elixirLevel >= maxElixirLevel) {
        return m.reply(`
            Kamu sudah mencapai level Elixir of Life tertinggi.
        `.trim())
    }

    user.elixirLevel++ // Tingkatkan level elixir pengguna

    m.reply(`
        Selamat! Kamu berhasil meningkatkan Elixir of Life ke level *${user.elixirLevel}*.
    `.trim())
}

handler.help = ['handler']
handler.tags = ['rpg']
handler.command = /^handler$/i
handler.register = true
export default handler