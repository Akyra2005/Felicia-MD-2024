import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (id in conn.tebakchara) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Blum Terjawab', m, conn.tebakchara[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebakchara1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebakchara2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebakchara3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebakchara4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let res = await fetch('https://api.jikan.moe/v4/characters')
    let jsons = await res.json()
    let jso = jsons.data
    let json = jso.getRandom()
    let caption = `*${command.toUpperCase()}*\n
*Siapakah Nama Dari Karakter Diatas?*

⏳ Waktu *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hcha* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebakchara[id] = [
        await conn.sendFile(m.chat, `${json.images.jpg.image_url}`, 'anuu.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakchara[id]) conn.sendFile(m.chat, json.images.jpg.image_url, `*Waktu Habis*\nJawabannya Adalah *${json.name}*\nKanji: *${json.name_kanji}*\nURL: *${json.url}*\nDesk: *${json.about}*`, m, conn.tebakchara[id][0])
            delete conn.tebakchara[id]
        }, timeout)
    ]
}

handler.help = ['tebakchara1', 'tebakchara2', 'tebakchara3', 'tebakchara4']
handler.tags = ['game']
handler.command = /^tebakchara[1234]$/i
handler.register = false
handler.limit = true
export default handler

const buttons = [
    ['Bantuan', '/hcha'],
    ['Nyerah', 'menyerah']
]
