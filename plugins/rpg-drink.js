let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    // variabel untuk menyimpan level Vitality
    const vitalityLevel = user.vitalityLevel !== undefined ? Math.max(0, user.vitalityLevel) : 0;

    const maxHealth = calculateMaxHealth(vitalityLevel) // maksimum health yang bisa dimiliki sesuai dengan level Vitality

    if (user.health >= maxHealth) {
        return m.reply(`*Health Kamu Sudah Maksimum.*`.trim())
    }

    const potionsNeeded = Math.ceil((maxHealth - user.health) / healPerPotion(vitalityLevel)) // jumlah potion yang dibutuhkan
    const potionsAvailable = user.potion // jumlah potion yang tersedia

    if (potionsAvailable < potionsNeeded) {
        return m.reply(`Tersisa *${potionsAvailable}* Potion\nKamu Membutuhkan *${potionsNeeded}* Potion\nKetik *${usedPrefix}buy potion ${potionsNeeded - potionsAvailable}* Untuk Membeli Potion 
        `.trim())
    }

    user.potion -= potionsNeeded // kurangi jumlah potion yang tersedia
    user.health += potionsNeeded * healPerPotion(vitalityLevel) // tambahkan jumlah health sesuai dengan jumlah potion yang dikonsumsi

    // pastikan health tidak melebihi maksimum
    if (user.health > maxHealth) {
        user.health = maxHealth
    }

    m.reply(`Kamu Berhasil Menggunakan *${potionsNeeded}* Potion\nHealth Kamu Sekarang Adalah *${user.health}* / ${maxHealth}
    `.trim())
}

// fungsi untuk menghitung jumlah health yang diisi per satu potion
function healPerPotion(vitalityLevel) {
    switch (vitalityLevel) {
        case 1:
            return 0.1 // Bonus heal sesuai dengan level Vitality
        case 2:
            return 0.5
        case 3:
            return 1
        case 4:
            return 1.5
        case 5:
            return 2
        default:
            return 0
    }
}

// fungsi untuk menghitung maksimum health yang bisa dimiliki sesuai dengan level Vitality
function calculateMaxHealth(vitalityLevel) {
    // Sesuaikan nilai maksimum health sesuai dengan level Vitality
    switch (vitalityLevel) {
        case 1:
            return 250
        case 2:
            return 300
        case 3:
            return 350
        case 4:
            return 400
        case 5:
            return 450
        default:
            return 200
    }
}

handler.help = ['potion','heal']
handler.tags = ['rpg']
handler.command = /^(potion|heal)$/i
handler.register = false
export default handler
