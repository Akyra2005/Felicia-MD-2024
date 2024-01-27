const rewards = {
    common: {
        money: 1330,
        exp: 1000,
        trash: 2,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        money: 2000,
        exp: 1550,
        trash: 6,
        potion: [0, 1, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0]
    },
    mythic: {
        money: 2500,
        exp: 2000,
        trash: 10,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        crystal: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0],
        rock: [0, 1, 0, 0, 0],
        string: [0, 1, 0, 0, 0]
    },
    legendary: {
        money: 3000,
        exp: 2900,
        trash: 14,
        potion: [0, 1, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        crystal: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
     }
    // pet: {
    //     petFood: [0, 1, 0, 0, 0],
    //     anjing: [],
    // }
}
let handler = async (m, { command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `
*GACHA MYSTERY CRATE*

Format: ${usedPrefix}${command} crate count
Contoh: ${usedPrefix}${command} common 10

*List Of Crate:*
${Object.keys(listCrate).map((v) => `
${rpg.emoticon(v)}${v}
`.trim()).join('\n')}
`.trim()
    let type = (args[0] || '').toLowerCase()
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return m.reply(info)
    if (user[type] < count) return m.reply(`
${rpg.emoticon(type)}${type} Crate Kamu Kurang    
Dibutuhkan ${count - user[type]} Crate Lagi
- Crate Kamu ${user[type]}
    
Ketik ${usedPrefix}buy ${type} ${count - user[type]} Untuk Membeli
`.trim())
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
OPEN CRATE

Anda Telah Membuka ${count} ${global.rpg.emoticon(type)}${type} Crate Dan Mendapatkan:
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/legendary|pet|mythic|diamond|emerald/i.test(v)).map(reward => `
${global.rpg.emoticon(reward)}${reward}: ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    let diamond = crateReward.diamond, mythic = crateReward.mythic, pet = crateReward.pet, legendary = crateReward.legendary, emerald = crateReward.emerald
    if (mythic || diamond) m.reply(`
Selamat Anda Mendapatkan Item Langka, Yaitu ${diamond ? `${diamond} ${rpg.emoticon('diamond')}diamond` : ''}${diamond && mythic ? 'Dan ' : ''}${mythic ? `${mythic} ${rpg.emoticon('mythic')}mythic` : ''}
`.trim())
    if (pet || legendary || emerald) m.reply(`
Selamat Anda Mendapatkan Item Epik, Yaitu ${pet ? `${pet} ${rpg.emoticon('pet')}pet` : ''}${pet && legendary && emerald ? ', ' : (pet && legendary || legendary && emerald || emerald && pet) ? 'Dan ' : ''}${legendary ? `${legendary} ${rpg.emoticon('legendary')}legendary` : ''}${pet && legendary && emerald ? 'Dan ' : ''}${emerald ? `${emerald} ${rpg.emoticon('emerald')}emerald` : ''}
`.trim())
}
handler.help = ['open', 'gacha'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
handler.register = false
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}