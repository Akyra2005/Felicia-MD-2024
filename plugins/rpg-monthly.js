const rewards = {
    exp: 300000,
    money: 300000,
    potion: 20,
    mythic: 50,
    legendary: 25
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `*Anda Telah Mengklaim Hadiah Bulanan Ini*\nTunggu *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.reply(m.chat, '*CLAIM MONTHLY REWARDS*\n\n' + text.trim(), m)
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i
handler.register = false
handler.limit = 1
handler.cooldown = cooldown

export default handler
