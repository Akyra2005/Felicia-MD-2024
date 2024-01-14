import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()

    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebaklirik[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebaklirik1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebaklirik2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebaklirik3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebaklirik4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `*${command.toUpperCase()}*\n
*${json.soal}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hlir* Untuk Bantuan
🎁 Bonus: *${poin} ✨ XP*
    `.trim()
    conn.tebaklirik[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}

handler.help = ['tebaklirik1', 'tebaklirik2', 'tebaklirik3', 'tebaklirik4']
handler.tags = ['game']
handler.command = /^tebaklirik[1234]$/i
handler.register = false
handler.limit = true
export default handler
