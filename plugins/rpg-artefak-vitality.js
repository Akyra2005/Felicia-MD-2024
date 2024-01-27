let upgradeVitality = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    // Memeriksa apakah pengguna memiliki vitality
    if (!user.hasOwnProperty("vitalityLevel") || user.vitalityLevel < 1) {
        return m.reply("*Kamu Tidak Memiliki Vitality Untuk Di Upgrade.*");
    }

    // Mendefinisikan biaya upgrade berdasarkan level vitality saat ini
    let upgradeCost = 0;
    switch (user.vitalityLevel) {
        case 1:
            upgradeCost = 10;
            break;
        case 2:
            upgradeCost = 20;
            break;
        case 3:
            upgradeCost = 40;
            break;
        case 4:
            upgradeCost = 70;
            break;
        case 5:
            return m.reply("*Vitality Sudah Mencapai Level Maksimum*");
        default:
            return m.reply("*Level Vitality Tidak Valid*");
    }

    // Memeriksa apakah pengguna memiliki cukup esens untuk melakukan upgrade
    if (user.esens < upgradeCost) {
        return m.reply(`
            Kamu tidak memiliki cukup Esens untuk melakukan upgrade vitality.
            Biaya upgrade adalah *${upgradeCost}* Esens.
        `.trim());
    }

    // Mengurangi esens pengguna sesuai dengan biaya upgrade
    user.esens -= upgradeCost;

    // Melakukan upgrade vitality
    user.vitalityLevel++;

    m.reply(`
        Vitality Berhasil Diupgrade Ke Level *${user.vitalityLevel}*
    `.trim());
}

upgradeVitality.help = ['upgradevitality', 'upgradevitality']
upgradeVitality.tags = ['rpg']
upgradeVitality.command = /^upgradevitality?$/i
upgradeVitality.register = false
export default upgradeVitality
