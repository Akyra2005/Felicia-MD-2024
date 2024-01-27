let upgradeElixir = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    // Memeriksa apakah pengguna memiliki elixir
    if (!user.hasOwnProperty("elixirLevel") || user.elixirLevel < 1) {
        return m.reply("*Kamu Tidak Memiliki Elixir Untuk Di Upgrade.*");
    }

    // Mendefinisikan biaya upgrade berdasarkan level elixir saat ini
    let upgradeCost = 0;
    switch (user.elixirLevel) {
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
            return m.reply("*Elixir Sudah Mencapai Level Maksimum*");
        default:
            return m.reply("*Level Elixir Tidak Valid*");
    }

    // Memeriksa apakah pengguna memiliki cukup esens untuk melakukan upgrade
    if (user.esens < upgradeCost) {
        return m.reply(`
            Kamu tidak memiliki cukup Esens untuk melakukan upgrade elixir.
            Biaya upgrade adalah *${upgradeCost}* Esens.
        `.trim());
    }

    // Mengurangi esens pengguna sesuai dengan biaya upgrade
    user.esens -= upgradeCost;

    // Melakukan upgrade elixir
    user.elixirLevel++;

    m.reply(`
        Elixir Berhasil Diupgrade Ke Level *${user.elixirLevel}*.
    `.trim());
}

upgradeElixir.help = ['upgradeelixir', 'upgradeelixir']
upgradeElixir.tags = ['rpg']
upgradeElixir.command = /^upgradeelixir?$/i
upgradeElixir.register = false
export default upgradeElixir
