let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const elixirLevel = user.elixirLevel || 1

    m.reply(`
        Level Elixir of Life kamu adalah *${elixirLevel}*
    `.trim())
}

handler.help = ['elixir']
handler.tags = ['rpg']
handler.command = /^elixir$/i
handler.register = true
export default handler