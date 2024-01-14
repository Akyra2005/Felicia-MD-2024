import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let timeout, poin

    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebaktebakan1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebaktebakan2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebaktebakan3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebaktebakan4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebaktebakan[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
*${json.soal}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hteb* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebaktebakan[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}

handler.help = ['tebaktebakan1', 'tebaktebakan2', 'tebaktebakan3', 'tebaktebakan4']
handler.tags = ['game']
handler.command = /^tebaktebakan[1234]$/i
handler.register = false
handler.limit = true
export default handler
