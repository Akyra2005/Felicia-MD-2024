import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()

    conn.tebaksiapa = conn.tebaksiapa ? conn.tebaksiapa : {}
    let id = m.chat
    if (id in conn.tebaksiapa) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebaksiapa[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebaksiapa1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebaksiapa2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebaksiapa3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebaksiapa4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
*${json.soal}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hsia* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebaksiapa[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaksiapa[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tebaksiapa[id][0])
            delete conn.tebaksiapa[id]
        }, timeout)
    ]
}

handler.help = ['tebaksiapa1', 'tebaksiapa2', 'tebaksiapa3', 'tebaksiapa4']
handler.tags = ['game']
handler.command = /^tebaksiapa[1234]$/i

export default handler
