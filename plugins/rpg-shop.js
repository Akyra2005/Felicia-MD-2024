const items = {
    buy: {
        crystal: {
            money: 10
        },
        limit: {
            money: 6221
        },
        osr: {
            money: 54000
        },
        potion: {
            money: 5000
        },
        trash: {
            money: 102
        },
        wood: {
            money: 3150
        },
        rock: {
            money: 3600
        },
        string: {
            money: 10000
        },
        iron: { 
        	money: 10000
        },
        common: {
            money: 5000
        },
        uncommon: {
            money: 7000
        },
        mythic: {
            money: 9000
        },
        legendary: {
            money: 1
        },
        bibitapel: { 
        	money: 100
        },
        bibitmangga: {
            money: 99
        },
        bibitjeruk: {
            money: 99
        },
        bibitpisang: {
            money: 99
        },
        bibitanggur: {
            money: 99          
        },
        drink: {
            money: 5000          
        },
        manar: {
            money: 19000     
        },
        susu: {
            money: 10000     
        },
        minyak: {
            money: 34000     
            },
        plastikpvc: {
            money: 16000     
            },
        mie: {
            money: 2500     
            },   
        telur: {
            money: 3500     
            },     
        bawangputih: {
            money: 2600     
            },    
        bawangmerah: {
            money: 2600     
            },
        kecap: {
            money: 25000     
            },
        saostiram: {
            money: 15000     
            },  
            garam: {
            money: 5000     
            },   
            merica: {
            money: 5000     
            },
            air: {
            money: 10000     
            },
            daunbawang: {
            money: 20000     
            },
        semikonduktor: {
            money: 150000     
        }
    },
    sell: {
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
*「 ITEM SHOP 」*

*_Format: ${usedPrefix}${command} <crate> <count>_*
*_Contoh: ${usedPrefix}${command} potion 10_*
╭───────⬣  
│ *Item List*
├───────⬣
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `│ *_${global.rpg.emoticon(v)}${v} > ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}_*`.trim()
    }).join('\n')}
╰────────────────⬣
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`*Money Tidak Cukup*\n\n*- Kamu Membutuhkan ${(listItems[item][paymentMethod] * total)} Money💵_*`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total - buff1
        user[item] += total
        user.pengeluaran += listItems[item][paymentMethod] * total - buff1
        return m.reply(`Kamu Membeli *${total} ${global.rpg.emoticon(item)}${item}*`)
    } else {
        if (user[item] < total) return m.reply(`Kamu Tidak Mempunyai Cukup *${global.rpg.emoticon(item)}${item}* Untuk Dijual, Kamu Hanya Mempunya *${user[item]}* Item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Kamu Menjual *${total} ${global.rpg.emoticon(item)}${item}*`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i
handler.register = false
handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}