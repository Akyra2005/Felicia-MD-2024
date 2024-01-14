let handler = async (m, { command, args }) => {
    let type = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let count = args[1] ? Math.max(parseInt(args[1]), 1) : 1

    const cookRecipes = {
        ayambakar: { item: 'ayam', material: 'coal', cookedItem: 'ayambakar' },
        gulaiayam: { item: 'ayam', material: 'coal', cookedItem: 'gulai' },
        rendang: { item: 'sapi', material: 'coal', cookedItem: 'rendang' },
        ayamgoreng: { item: 'ayam', material: 'coal', cookedItem: 'ayamgoreng' },
        oporayam: { item: 'lele', material: 'coal', cookedItem: 'oporayam' },
        steak: { item: 'sapi', material: 'coal', cookedItem: 'steak' },
        babipanggang: { item: 'babi', material: 'coal', cookedItem: 'babipanggang' },
        ikanbakar: { item: 'ikan', material: 'coal', cookedItem: 'ikanbakar' },
        lelebakar: { item: 'lele', material: 'coal', cookedItem: 'lelebakar' },
        nilabakar: { item: 'nila', material: 'coal', cookedItem: 'nilabakar' },
        bawalbakar: { item: 'bawal', material: 'coal', cookedItem: 'bawalbakar' },
        udangbakar: { item: 'udang', material: 'coal', cookedItem: 'udangbakar' },
        pausbakar: { item: 'paus', material: 'coal', cookedItem: 'pausbakar' },
        kepitingbakar: { item: 'kepiting', material: 'coal', cookedItem: 'kepitingbakar' },
    }

    try {
        if (/masak|cook/i.test(command)) {
            if (cookRecipes[type]) {
                const recipe = cookRecipes[type]
                if (user[recipe.item] >= count * 2 && user.coal >= count) {
                    user[recipe.item] -= count * 2
                    user.coal -= count
                    user[recipe.cookedItem] += count
                    conn.reply(m.chat, `Sukses Memasak *${count} ${recipe.cookedItem}*`, m)
                } else {
                    conn.reply(m.chat, `Anda Tidak Memiliki Bahan Untuk Memasak *${recipe.cookedItem}*\nAnda Butuh *2 ${recipe.item} Dan 1 Coal* Untuk Memasak`, m)
                }
            } else {
                // Tampilkan list masakan
                let cokList = Object.keys(cookRecipes).map(recipe => `\n• ${recipe}`).join('')
                conn.reply(m.chat, `*C O O K I N G*\n\nList Masakan Yang Tersedia:${cokList}`, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `*ERROR*`, m)
        console.log(e)
    }
}

handler.help = ['masak <masakan> <jumlah>', 'cook <masakan> <jumlah>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i
handler.register = false
handler.limit = 1
export default handler
