
let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.reply(m.chat, `*Tidak Ada Absen Berlangsung*\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`, m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} TANGGAL ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} SUDAH ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}
`

await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })

}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
handler.register = false
export default handler
