function calculateMaxHealth(elixirLevel) {
    switch (elixirLevel) {
        case 1:
            return 100;
        case 2:
            return 150;
        case 3:
            return 200;
        case 4:
            return 250;
        default:
            return 100;
    }
}
let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    // variabel untuk menyimpan level Elixir of Life
const elixirLevel = user.elixirLevel !== undefined ? Math.max(0, user.elixirLevel) : 0;

    const maxHealth = calculateMaxHealth(elixirLevel) // maksimum health yang bisa dimiliki sesuai dengan level elixir

    if (user.health >= maxHealth) {
        return m.reply(`*Health Kamu Sudah Maksimum.*`.trim())
    }

    const potionsNeeded = Math.ceil((maxHealth - user.health) / healPerpotion(elixirLevel)) // jumlah potion yang dibutuhkan
    const potionsAvailable = user.potion // jumlah potion yang tersedia

    if (potionsAvailable < potionsNeeded) {
        return m.reply(`Tersisa *${potionsAvailable}* Potion\nKamu Membutuhkan *${potionsNeeded}* Potion\nKetik *${usedPrefix}buy potion ${potionsNeeded - potionsAvailable}* Untuk Membeli Potion 
        `.trim())
    }

    user.potion -= potionsNeeded // kurangi jumlah potion yang tersedia
    user.health += potionsNeeded * healPerpotion(elixirLevel) // tambahkan jumlah health sesuai dengan jumlah potion yang dikonsumsi

    // pastikan health tidak melebihi maksimum
    if (user.health > maxHealth) {
        user.health = maxHealth
    }

    m.reply(`Kamu Berhasil Menggunakan *${potionsNeeded}* Potion\nHealth Kamu Sekarang Adalah *${user.health}* / ${maxHealth}
    `.trim())
}

// fungsi untuk menghitung jumlah health yang diisi per satu potion
function healPerpotion(elixirLevel, vitalityLevel) {
    // Mendapatkan persentase bonus heal sesuai dengan level Vitality
    let bonusPercentage = 0;
    switch (vitalityLevel) {
        case 1:
            bonusPercentage = 0.1;
            break;
        case 2:
            bonusPercentage = 0.5;
            break;
        case 3:
            bonusPercentage = 1;
            break;
        case 4:
            bonusPercentage = 1.5;
            break;
        case 5:
            bonusPercentage = 2;
            break;
        default:
            bonusPercentage = 0;
    }

    // Menghitung jumlah kesehatan yang diisi sesuai dengan level elixir dan bonus heal dari Vitality
    let baseHeal = 50; // Jumlah kesehatan yang diisi per satu potion tanpa bonus
    let totalHeal = baseHeal * (1 + bonusPercentage); // Total kesehatan yang diisi per satu potion termasuk bonus

    switch (elixirLevel) {
        case 1:
            return totalHeal;
        case 2:
            return totalHeal;
        case 3:
            return totalHeal;
        case 4:
            return totalHeal;
        default:
            return totalHeal;
    }
}



handler.help = ['potion','heal']
handler.tags = ['rpg']
handler.command = /^(potion|heal)$/i
handler.register = false
export default handler