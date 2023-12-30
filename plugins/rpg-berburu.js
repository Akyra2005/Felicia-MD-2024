const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastberbru))
    if (user.health < 90) return m.reply(`
*Dibutuhkan Setidaknya 90HP ❤️ Untuk Berburu*
Beli Potion Untuk Return HP Di: *${usedPrefix}buy potion jumlah*,
Dan Ketik *${usedPrefix}heal jumlah* Untuk Menggunakan Potion
`.trim())
if (user.stamina < 90) return m.reply(`
*Dibutuhkan Setidaknya 90ST ⚡ Untuk Berburu*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.money < 24999) return m.reply(`
*Dibutuhkan Setidaknya 25K Money💵 Untuk Berburu*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastberbru <= cooldown) return m.reply(`
Fitur Berburu Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*_Anda Telah Berburu_*`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\n*_Dan Kamu Mendapatkan Hadiah Serta Slayer Glory_*'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastberbru = new Date * 1
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^berburu$/i
handler.register = false
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
        	exp: 100000,
			slayerglory: 10000
            panda: 10,
            kambing: 10,
            harimau: 10,
            gajah: 10,
            banteng: 10,
            monyet: 10,
            babihutan: 10,
            kerbau: 10,
            sapi: 10,
            buaya: 10,
            babi: 10,
            ayam: 10,
        },
        lost: {
            health: 101 - user.cat * 4,
            stamina: 101 - user.cat * 4
        }
    }
    return rewards
}

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}