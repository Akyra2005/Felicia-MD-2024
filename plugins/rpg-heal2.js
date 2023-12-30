let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const maxStamina = 200 // maksimum stamina yang bisa dimiliki
    const healPerdrink = 40 // jumlah stamina yang diisi per satu drink

    if (user.stamina >= maxStamina) {
        return m.reply(`
            Stamina kamu sudah maksimum.
        `.trim())
    }

    const drinksNeeded = Math.ceil((maxStamina - user.stamina) / healPerdrink) // jumlah drink yang dibutuhkan
    const drinksAvailable = user.drink // jumlah drink yang tersedia

    if (drinksAvailable < drinksNeeded) {
        return m.reply(`
            Tersisa *${drinksAvailable}* drink 🍹
            Kamu membutuhkan *${drinksNeeded}* drink 🍹
            Ketik *${usedPrefix}buy drink ${drinksNeeded - drinksAvailable}* Untuk Membeli drink 🍹
        `.trim())
    }

    user.drink -= drinksNeeded // kurangi jumlah drink yang tersedia
    user.stamina += drinksNeeded * healPerdrink // tambahkan jumlah stamina sesuai dengan jumlah drink yang dikonsumsi

    // pastikan stamina tidak melebihi maksimum
    if (user.stamina > maxStamina) {
        user.stamina = maxStamina
    }

    m.reply(`
        Kamu berhasil menggunakan *${drinksNeeded}* drink 🍹
        Stamina kamu sekarang adalah *${user.stamina}* / ${maxStamina}
    `.trim())
}

handler.help = ['drink']
handler.tags = ['rpg']
handler.command = /^(drink)$/i
handler.register = false
export default handler
