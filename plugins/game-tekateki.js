import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tekateki[id][0])
        throw false
    }

    let pp = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`
    
    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tekateki1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tekateki2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tekateki3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tekateki4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
*${json.soal}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}htek* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tekateki[id] = [
        await conn.sendFile(m.chat, pp, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['tekateki1', 'tekateki2', 'tekateki3', 'tekateki4']
handler.tags = ['game']
handler.command = /^tekateki[1234]$/i
handler.register = false
handler.limit = true
export default handler
