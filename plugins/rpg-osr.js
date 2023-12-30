let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.os >= 100) return m.reply(`
*_O/S 💦_*
*_Sudah Penuh.._.*
`.trim())
let buf = user.cat
let buff = (buf == 0 ? '5' : '' || buf == 1 ? '10' : '' || buf == 2 ? '15' : '' || buf == 3 ? '20' : '' || buf == 4 ? '25' : '' || buf == 5 ? '30' : '' || buf == 6 ? '35' : '' || buf == 7 ? '40' : '' || buf == 8 ? '45' : '' || buf == 9 ? '50' : '' || buf == 10 ? '100' : '' || buf == 11 ? '100' : '') 
    const heal = 15 + (buff * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.os) / heal)))) * 1
    if (user.osr < count) return m.reply(`
Tersisa *${user.osr}* 💦O/S Restorer
Ketik *${usedPrefix}buy osr ${count - user.osr}* Untuk Membeli 💦O/S Restorer
`.trim())
    user.osr -= count * 1
    user.os += heal * count
    m.reply(`
Sukses Meminum *${count}* 💦O/S Restorer
`.trim())
}

handler.help = ['osr']
handler.tags = ['rpg']
handler.command = /^(osr)$/i
handler.register = false
handler.limit = 3
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}