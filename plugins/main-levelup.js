import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
📊 Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp} ✨ XP* Lagi
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `*Selamat ${conn.getName(m.sender)} Naik Level 👏*`
        let str = `
${teks}\n
*${before} > ${user.level}*
🏅 Role Kamu: *${user.role}*\n
*Pada Pukul ${new Date().toLocaleString('id-ID')}*\n
*.leaderboard* - Untuk Mengecek Papan Peringkat
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['rpg']
handler.register = false
handler.command = /^level(|up)$/i

export default handler