let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const maxHealth = 200 // maksimum health yang bisa dimiliki
    const healPerpotion = 40 // jumlah health yang diisi per satu potion

    if (user.health >= maxHealth) {
        return m.reply(`
            Health kamu sudah maksimum.
        `.trim())
    }

    const potionsNeeded = Math.ceil((maxHealth - user.health) / healPerpotion) // jumlah potion yang dibutuhkan
    const potionsAvailable = user.potion // jumlah potion yang tersedia

    if (potionsAvailable < potionsNeeded) {
        return m.reply(`
            Tersisa *${potionsAvailable}* potion 🍹
            Kamu membutuhkan *${potionsNeeded}* potion 🍹
            Ketik *${usedPrefix}buy potion ${potionsNeeded - potionsAvailable}* Untuk Membeli potion 🍹
        `.trim())
    }

    user.potion -= potionsNeeded // kurangi jumlah potion yang tersedia
    user.health += potionsNeeded * healPerpotion // tambahkan jumlah health sesuai dengan jumlah potion yang dikonsumsi

    // pastikan health tidak melebihi maksimum
    if (user.health > maxHealth) {
        user.health = maxHealth
    }

    m.reply(`
        Kamu berhasil menggunakan *${potionsNeeded}* potion 🍹
        Health kamu sekarang adalah *${user.health}* / ${maxHealth}
    `.trim())
}

handler.help = ['potion','heal']
handler.tags = ['rpg']
handler.command = /^(potion|heal)$/i
handler.register = false
export default handler
