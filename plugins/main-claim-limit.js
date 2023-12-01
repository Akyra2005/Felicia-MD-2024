let handler = async (m, { db }) => {
    let user = global.db.data.users[m.sender]

    // Check if the user has more than 1 limit
    if (user.limit > 0) {
        return m.reply(`*Kamu Masih Memiliki Limit*`)
    }

    // Check if 24 hours have passed since the last claim
    let lastClaim = user.lastclaim || 0
    let cooldown = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    if (Date.now() - lastClaim < cooldown) {
        return m.reply(`*Klaim Hanya Dapat Dilakukan 24 Jam Sekali*`)
    }

    // Generate a random limit between 20 and 50
    let claimedLimit = Math.floor(Math.random() * (50 - 20 + 1)) + 20

    // Update user data
    user.limit = claimedLimit
    user.lastclaim = Date.now()

    m.reply(`Berhasil Klaim *${claimedLimit} 🎟️ Limit*\n*Beli Premium Untuk Unlimited Limit*`)
}

handler.help = ['claim']
handler.tags = ['main']
handler.command = /^claim$/i

handler.group = true

export default handler
