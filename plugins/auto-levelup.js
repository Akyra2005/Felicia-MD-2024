import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* ✨ EXP Lagi
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat *${this.getName(m.sender)}* Telah Naik Level\n.             ${user.role}`
        let str = `*${this.getName(m.sender)}* Naik Level\n.             ${user.role}

*CONGRATULATIONS*
*${before}* ➔ *${user.level}*

- Role: *${user.role}*
- Sebelum: *Lv. ${before}*
- Setelah Naik: *Lv. ${user.level}*
- Pada Pukul: *${new Date().toLocaleString('id-ID')}*

Note:\n*Semakin Sering Berinteraksi Dengan Bot Semakin Tinggi Level Kamu*
`.trim()
            
            try {
            let img = await levelup(teks, user.level)
            await this.sendFile(m.chat, img, "", str, m)
            } catch (e) {
            
            await this.sendFile(m.chat, fla + "levelup", "", str, m)
            }

    }
}