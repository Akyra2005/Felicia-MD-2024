let gachaElixir = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

    const crystalNeeded = 4 // jumlah crystal yang dibutuhkan untuk 1x gacha
    let gachaCount = parseInt(args[0]) || 1 // jumlah gacha yang akan dilakukan, defaultnya 1

    // Cek apakah gachaCount merupakan nilai yang valid (hanya 1 sampai 10)
    if (gachaCount < 1 || gachaCount > 10 || gachaCount !== Math.floor(gachaCount)) {
        return m.reply('Gacha hanya bisa dilakukan 1 sampai 10×.')
    }

    const totalCrystalNeeded = crystalNeeded * gachaCount // total crystal yang dibutuhkan untuk semua gacha

    if (user.crystal < totalCrystalNeeded) {
        return m.reply(`
            Kamu tidak memiliki cukup crystal untuk melakukan gacha.
            Crystal yang dibutuhkan untuk ${gachaCount}× gacha adalah *${totalCrystalNeeded}*.
            Dapatkan Crystal di *Adventure, Misi & Crate.*
        `.trim())
    }

    let result = []
    let itemCount = {} // Objek untuk menyimpan jumlah item yang didapatkan

    for (let i = 0; i < gachaCount; i++) {
        const gachaResult = doGacha(user) // Mengirimkan data pengguna ke fungsi doGacha
        result.push(gachaResult)
        // Tambahkan item yang didapatkan ke data pengguna
        if (gachaResult.startsWith("Item ")) {
            const item = gachaResult.split(": ")[1]
            itemCount[item] = (itemCount[item] || 0) + 1 // Menambahkan jumlah item yang didapatkan
        }
    }

    let reply = `Hasil gacha:\n`
    // Menampilkan hasil gacha
    result.forEach((item, index) => {
        reply += `${index + 1}. ${item}\n`
    })

    // Menambahkan jumlah item yang didapatkan ke dalam pesan reply
    for (const item in itemCount) {
        reply += ``
    }

    // Kurangi jumlah crystal pengguna sesuai dengan jumlah crystal yang dibutuhkan
    user.crystal -= totalCrystalNeeded

    m.reply(reply.trim())
}

// Fungsi untuk melakukan gacha
function doGacha(user) {
    const randomNumber = Math.random() * 100 // generate angka random antara 0 dan 100

    // Jika pengguna sudah memiliki elixir (level elixir lebih besar dari 0), maka saat mendapatkan Elixir lagi akan digantikan dengan Esens sebesar 15
    if (user.elixirLevel > 0) {
        return randomNumber < 1 ? "🌟 Item Legendary: Esens 15" : doNormalGacha(user)
    } else {
        return doNormalGacha(user)
    }
}

// Fungsi untuk melakukan gacha normal
function doNormalGacha(user) {
    const randomNumber = Math.random() * 100 // generate angka random antara 0 dan 100

    if (randomNumber < 1) {
        user.elixirLevel += 1
        return "🌟 Item Legendary: Elixir"
    } else if (randomNumber < 2) {
        user.esens += 10
        return "💠 Item Epic: Esens 10"
    } else if (randomNumber < 4) {
        user.esens += 7
        return "💠 Item Epic: Esens 7"
    } else if (randomNumber < 9) {
        user.esens += 5
        return "💠 Item Epic: Esens 5"
    } else if (randomNumber < 15) {
        user.esens += 3
        return "💠 Item Epic: Esens 3"
    } else if (randomNumber < 18) {
        user.esens += 1
        return "💠 Item Epic: Esens 1"
    } else if (randomNumber < 50) {
        user.crystal += 2
        return "🍃 Item Rare: Crystal 2"
    } else {
        // rock atau wood, dan uang dengan peluang 50%
        const randomNumber2 = Math.random()
        if (randomNumber2 < 0.25) {
            user.wood += 1
            return "🍃 Item Rare: Wood"
        } else if (randomNumber2 < 0.5) {
            user.rock += 1
            return "🍃 Item Rare: Rock"
        } else {
            const money = Math.floor(Math.random() * 801) + 200
            user.money += money
            return `🍃 Item Rare: Money ${money}`
        }
    }
}

gachaElixir.help = ['gachaelixir', 'gachaelixir']
gachaElixir.tags = ['rpg']
gachaElixir.command = /^gachaelixir?$/i
gachaElixir.register = true
export default gachaElixir
