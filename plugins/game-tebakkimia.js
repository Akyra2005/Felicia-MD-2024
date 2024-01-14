import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()

    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkimia[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebakkimia1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebakkimia2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebakkimia3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebakkimia4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
Usur Kimia: *${json.lambang}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hkim* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebakkimia[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.unsur}* *[ ${json.lambang} ]*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}

handler.help = ['tebakkimia1', 'tebakkimia2', 'tebakkimia3', 'tebakkimia4']
handler.tags = ['game']
handler.command = /^tebakkimia[1234]$/i
handler.register = false
handler.limit = true
export default handler
