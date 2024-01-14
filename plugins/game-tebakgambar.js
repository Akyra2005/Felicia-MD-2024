import { tebakgambar } from '@bochilteam/scraper'

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakingambar = conn.tebakingambar ? conn.tebakingambar : {}
    let id = m.chat
    if (id in conn.tebakingambar) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakingambar[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebakgambar1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebakgambar2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebakgambar3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebakgambar4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let json = await tebakgambar()
    let caption = `*${command.toUpperCase()}*\n
*Rangkailah Gambar Ini*
⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hgam* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebakingambar[id] = [
        await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption }, { quoted: m }),
        json, poin,
        setTimeout(() => {
            if (conn.tebakingambar[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.jawaban}*`, conn.tebakingambar[id][0])
            delete conn.tebakingambar[id]
        }, timeout)
    ]
}

handler.help = ['tebakgambar1', 'tebakgambar2', 'tebakgambar3', 'tebakgambar4']
handler.tags = ['game']
handler.command = /^tebakgambar[1234]$/i
handler.register = false
handler.limit = true

export default handler
