let handler = async (m, {
    conn,
    usedPrefix,
    text,
    command,
    args
}) => {
    let pc = (Object.entries(await conn.chats).map(([nama, isi]) => {
        return {
            nama,
            ...isi
        }
    })).filter(v => !v.nama.endsWith('g.us'))
    let list = pc.map((chat, index) => `*${index + 1}.* wa.me/${chat.id.split('@')[0]}`).join('\n')

    if (!args[0]) {
        m.reply(`*.listpm Nomor* Untuk Melihat Informasi\n\nDaftar Obrolan Pribadi:\n${list}`)
        return
    }

    let i = parseInt(args[0]) - 1
    if (!pc[i]) {
        return m.reply('*Indeks Tidak Sah*')
    }

    let pp = await conn.profilePictureUrl(pc[i].id, 'image')
    let str = `Informasi Tentang *${await conn.getName(pc[i].id)}*\n\n`
    str += `Nama: *${pc[i].name || 'Tidak Diketahui'}*\n`
    str += `ID: *@${pc[i].id.replace('@s.whatsapp.net', '')}*\n`
    str += `Kehadiran: *${pc[i].presences || 'Tidak Diketahui'}*\n`

    await conn.sendFile(m.chat, pp, 'profile.jpg', str, m, null, {
        mentions: [pc[i].id]
    })
}

handler.help = ['listpm']
handler.tags = ['owner']
handler.command = ['listpm']
handler.owner = true
export default handler