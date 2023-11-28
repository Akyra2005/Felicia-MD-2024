let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Format: *.addmoney/rem @Tag Jumlah*'
    
    // Extracting the mentioned user and the money value from the command text
    let [who, moneyValue] = text.split(' ')
    if (!who) throw 'Format: *.addmoney/rem @Tag Jumlah*'
    if (isNaN(moneyValue)) throw 'Format: *.addmoney/rem @Tag Jumlah*'

    // Converting moneyValue to a number
    moneyValue = parseInt(moneyValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their money to 0
    if (!users[user]) users[user] = { money: 0 }

    // Determining whether to add or remove money based on the command
    if (command === 'addmoney') {
        // Adding the specified money to the user's account
        users[user].money += moneyValue
        conn.reply(m.chat, `*Berhasil Menambahkan ${moneyValue} 🪙 Flint Untuk @${user.split('@')[0]}*`, m)
    } else if (command === 'removemoney') {
        if (moneyValue > users[user].money) {
            // Set the user's money to 0 if the specified money is greater than the user's current money
            users[user].money = 0
            conn.reply(m.chat, `*Berhasil Mengurangi 🪙 Flint Untuk @${user.split('@')[0]}*`, m)
        } else {
            // Removing the specified money from the user's account
            users[user].money -= moneyValue
            conn.reply(m.chat, `*Berhasil Mengurangi ${moneyValue} 🪙 Flint Untuk @${user.split('@')[0]}*`, m)
        }
    }
}

handler.help = ['addmoney', 'remmoney']
handler.tags = ['owner']
handler.command = /^(add|rem)money$/i
handler.rowner = true

export default handler