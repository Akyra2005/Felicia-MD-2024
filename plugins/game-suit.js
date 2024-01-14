let handler = async (m, { text, usedPrefix }) => {
    let salah = `*Pilihan Tersedia:*\n\ngunting, kertas, batu\n\nFormat: *${usedPrefix}suit gunting*`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`*SERI*\nKamu: *${text}*\nBot: *${astro}*`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`*Kamu Menang +1000 🪙 Flint*\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`*Kamu Menang +1000 🪙 Flint*\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`*Kamu Menang +1000 🪙 Flint*\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`*Kamu Kalah*\nKamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = false
handler.limit = true
export default handler
