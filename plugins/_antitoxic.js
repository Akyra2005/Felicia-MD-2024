const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        await conn.reply(m.chat, `*${name} Terdeteksi Toxic* ${isBotAdmin ? '' : '\n\n*Bot Bukan Admin*'}`)
        if (isBotAdmin && chat.antiToxic) {
            await conn.sendMessage(m.chat, { delete: m.key })
            return !1
        } else if (!chat.antiToxic) {
             await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, '*Pesan Anda Telah Dihapus*')           
            return !1
        }
    }
    return !0
}

export const disable = false