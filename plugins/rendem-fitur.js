let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Format: *${usedPrefix + command} Tipe*

*Daftar Tipe:*
• bully
• cuddle
• cry
• hug
• awoo
• kiss
• lick
• pat
• smug
• bonk
• yeet
• blush
• smile
• wave
• smile
• wave
• highfive
• handhold
• nom
• bite
• glomp
• kill
• slap
• happy
• wink
• poke
• dance
• cringe
• blush`)
        let images = `https://api.lolhuman.xyz/api/random/${text}?apikey=${global.lolkey}`
        await conn.sendFile(m.chat, images, "", `*Sukses*`, m)
}
handler.help = ['randem'].map(v => v + ' <efek>')
handler.tags = ['tools']
handler.command = /^(randem)$/i
handler.register = false
handler.limit = 1
export default handler