const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastmining))
    if (user.health < 90) return m.reply(`
*Dibutuhkan Setidaknya 90HP ❤️ Untuk Berpetualang*
Beli Potion Untuk Return HP Di: *${usedPrefix}buy potion jumlah*,
Dan Ketik *${usedPrefix}heal jumlah* Untuk Menggunakan Potion
`.trim())
if (user.stamina < 70) return m.reply(`
*Dibutuhkan Setidaknya 70ST ⚡ Untuk Berpetualang*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.pickaxe < 1) return m.reply(`
*Dibutuhkan Setidaknya 1 Pickaxe Untuk Berpetualang*
*Dapatkan Pickaxe Di #craft*
`.trim())
    if (new Date - user.lastmining <= cooldown) return m.reply(`
Fitur Berpetualang Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*_Anda Telah Mining Dikedalaman 30 - 100_*`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\n*_Dan Kamu Mendapatkan_*'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastmining = new Date * 1
}
handler.help = ['mining1']
handler.tags = ['rpg']
handler.command = /^(mining1|(ber)?petualang(ang)?)$/i
handler.register = false
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 100000,
			kazariteglory: 10000,
            rock: 20,
            coal: 10,
            iron: 10,
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

082159013620
087827646771