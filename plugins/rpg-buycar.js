const items = {
    buycar: {
        c1: {
            money: 700000000
        },
        c2: {
            money: 1400000000
        },
        c3: {
            money: 2100000000
        },
        c4: {
            money: 350000000
        },
        c5: {
            money: 420000000
        },
        c6: {
            money: 560000000
        },
        c7: {
            money: 140000000
        },
        c8: { 
        	money: 280000000
        },
        c9: {
            money: 280000000
        },
        c10: {
            money: 220000000
        }      
     },
    sellcar: {
        potion: {
            money: 900
        },
        trash: {
            money: 8
        },
        wood: {
            money: 700
        },
        rock: {
            money: 700
        },
        string: {
            money: 4900
        },
        iron: {
            money: 4900
        },
        gold: {
            money: 7900
        },
        diamond: {
            money: 7900
        },
        emerald: {
            money: 9000
        },
        apel: { 
        	money: 300
        },
        mangga: {
            money: 300
        },
        jeruk: {
            money: 250
        },
        pisang: {
            money: 200
        },
        anggur: {
            money: 250 
        },
        kaleng: {
            money: 100
        },
        botol: {
            money: 100
        },
        kardus: {
            money: 100
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    let buf1 = user.boosts
    let buff1 = (buf1 == 0 ? '0' : '' || buf1 == 1 ? '156' : '' || buf1 == 2 ? '312' : '' || buf1 == 3 ? '467' : '' || buf1 == 4 ? '623' : '' || buf1 == 5 ? '778' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
「 CAR SHOP 」

Format: ${usedPrefix}${command} <code> <count>
Contoh: ${usedPrefix}${command} c2 1

1. Toyota Supra (Code c1)
Spesifikasi: mesin 6 silinder segaris 3.0 liter twin-turbo, tenaga 335 hp, torsi 365 lb-ft, transmisi 8-speed otomatis atau 6-speed manual, rear-wheel drive
Deskripsi: Toyota Supra adalah mobil legendaris yang dikenal karena performa dan desainnya yang ikonik. Mobil ini menawarkan kinerja yang luar biasa dan kontrol yang tepat sehingga cocok untuk pengemudi yang suka dengan mobil sport.
Harga: sekitar 700000000

2. Nissan GT-R (Code c2)
Spesifikasi: mesin twin-turbo V6 3.8 liter, tenaga 565 hp, torsi 467 lb-ft, transmisi 6-speed otomatis, all-wheel drive
Deskripsi: Nissan GT-R adalah mobil sport super cepat yang terkenal dengan akselerasinya yang sangat cepat dan kontrol yang sangat baik. Mobil ini dilengkapi dengan teknologi canggih yang membuatnya menjadi salah satu mobil sport terbaik di dunia.
Harga: sekitar 1400000000

3. Honda NSX (Code c3)
Spesifikasi: mesin hybrid 3.5 liter V6 twin-turbo, tenaga 573 hp, torsi 476 lb-ft, transmisi 9-speed otomatis, all-wheel drive
Deskripsi: Honda NSX adalah mobil sport hybrid yang menawarkan kinerja yang luar biasa dan desain yang ikonik. Mobil ini dilengkapi dengan teknologi canggih dan sistem hybrid yang membuatnya menjadi salah satu mobil sport paling canggih di dunia.
Harga: sekitar 2100000000

4. Mazda RX-7 (Code c4)
Spesifikasi: mesin rotary 1.3 liter twin-turbo, tenaga 276 hp, torsi 231 lb-ft, transmisi 5-speed manual, rear-wheel drive
Deskripsi: Mazda RX-7 adalah mobil sport legendaris yang terkenal dengan desainnya yang ikonik dan mesin rotarynya yang unik. Mobil ini menawarkan kinerja yang cepat dan kelincahan yang luar biasa sehingga cocok untuk pengemudi yang suka dengan mobil sport.
Harga: sekitar 350000000

5. Mitsubishi Lancer Evolution (Code c5)
Spesifikasi: mesin turbocharged 4 silinder 2.0 liter, tenaga 291 hp, torsi 300 lb-ft, transmisi 5-speed manual atau 6-speed otomatis, all-wheel drive
Deskripsi: Mitsubishi Lancer Evolution adalah mobil sport rally yang terkenal dengan kinerjanya yang luar biasa dan kontrol yang baik. Mobil ini dilengkapi dengan teknologi canggih dan sistem all-wheel drive yang membuatnya sangat cocok untuk berbagai jenis medan dan kondisi cuaca.
Harga: sekitar 420000000

6. Subaru WRX STI (Code c6)
Spesifikasi: mesin turbocharged 4 silinder 2.5 liter, tenaga 310 hp, torsi 290 lb-ft, transmisi 6-speed manual, all-wheel drive
Deskripsi: Subaru WRX STI adalah mobil sport rally yang terkenal dengan kinerjanya yang luar biasa di medan off-road dan trek balap. Mobil ini memiliki sistem all-wheel drive dan suspensi yang cocok untuk berbagai jenis medan, sehingga cocok untuk pengemudi yang suka dengan mobil sport yang serba guna.
Harga: sekitar 560000000

7. Nissan Silvia (Code c7)
Spesifikasi: mesin 4 silinder 2.0 liter turbocharged, tenaga 247 hp, torsi 217 lb-ft, transmisi 6-speed manual, rear-wheel drive
Deskripsi: Nissan Silvia adalah mobil sport yang terkenal dengan kelincahannya dan performa di trek balap. Mobil ini memiliki desain yang sporty dan tenaga yang cukup untuk pengemudi yang ingin mengeksplorasi kecepatan di jalan raya maupun di trek balap.
Harga: sekitar 140000000

8. Toyota AE86 (Code c8)
Spesifikasi: mesin 4 silinder 1.6 liter, tenaga 130 hp, torsi 105 lb-ft, transmisi 5-speed manual, rear-wheel drive
Deskripsi: Toyota AE86 atau dikenal juga sebagai Toyota Corolla GT-S adalah mobil sport yang terkenal dengan kelincahannya dan kemampuan driftingnya yang mengagumkan. Mobil ini memiliki desain yang klasik dan merupakan mobil sport yang populer di kalangan penggemar mobil JDM.
Harga: sekitar 280000000

9. Mazda MX-5 Miata (Code c9)
Spesifikasi: mesin 4 silinder 2.0 liter, tenaga 181 hp, torsi 151 lb-ft, transmisi 6-speed manual atau 6-speed otomatis, rear-wheel drive
Deskripsi: Mazda MX-5 Miata adalah mobil sport yang terkenal dengan desain roadster klasik dan kelincahannya. Mobil ini merupakan salah satu mobil sport paling populer di dunia dan cocok untuk pengemudi yang suka dengan mobil sport yang ringan dan responsif.
Harga: sekitar 280000000

10. Mitsubishi 3000GT (Code c10)
Spesifikasi: mesin twin-turbo V6 3.0 liter, tenaga 320 hp, torsi 315 lb-ft, transmisi 5-speed manual atau 4-speed otomatis, all-wheel drive
Deskripsi: Mitsubishi 3000GT atau dikenal juga sebagai Dodge Stealth adalah mobil sport yang terkenal dengan desainnya yang futuristik dan kinerjanya yang cepat. Mobil ini dilengkapi dengan teknologi canggih seperti sistem all-wheel drive dan suspensi aktif yang membuatnya menjadi salah satu mobil sport paling canggih di masanya.
Harga: sekitar 2200000000

`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buycar') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Money Tidak Cukup\n\n*- Kamu Membutuhkan ${(listItems[item][paymentMethod] * total)} Money💵_*`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total - buff1
        user[item] += total
        user.pengeluaran += listItems[item][paymentMethod] * total - buff1
        return m.reply(`Kamu Membeli ${total} ${global.rpg.emoticon(item)}${item}, Cek Garasimu Di .garage`)
    } else {
        if (user[item] < total) return m.reply(`Kamu Tidak Mempunyai Cukup ${global.rpg.emoticon(item)}${item} Untuk Dijual, Kamu Hanya Mempunya ${user[item]} Item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Kamu Menjual ${total} ${global.rpg.emoticon(item)}${item}`)
    }
}

handler.help = ['buycar', 'sellcar'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buycar|sellcar)$/i
handler.register = false
handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}