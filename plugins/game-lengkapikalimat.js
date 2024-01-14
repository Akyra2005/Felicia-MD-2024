import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let timeout, poin

    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'lengkapikalimat1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'lengkapikalimat2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'lengkapikalimat3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'lengkapikalimat4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, 'Perintah tidak valid', m)
            return
    }

    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {}
    let id = m.chat
    if (id in conn.lengkapikalimat) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.lengkapikalimat[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
*${json.pertanyaan}*

⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hlen* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.lengkapikalimat[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.lengkapikalimat[id][0])
            delete conn.lengkapikalimat[id]
        }, timeout)
    ]
}

handler.help = ['lengkapikalimat1', 'lengkapikalimat2', 'lengkapikalimat3', 'lengkapikalimat4']
handler.tags = ['game']
handler.command = /^lengkapikalimat[1234]$/i
handler.register = false
handler.limit = true

export default handler
