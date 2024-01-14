import fetch from 'node-fetch';
import cheerio from 'cheerio';
import path from 'path';

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakhewan = conn.tebakhewan ? conn.tebakhewan : {}
    let id = m.chat
    if (id in conn.tebakhewan) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakhewan[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebakhewan1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebakhewan2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebakhewan3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebakhewan4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let src = await tebakHewan()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*\n
*Hewan Apakah Ini?*
⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🎁 Bonus: *${poin} ✨ XP*
    `.trim()
    conn.tebakhewan[id] = [
        await conn.sendFile(m.chat, json.url, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakhewan[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.title}*`, conn.tebakhewan[id][0])
            delete conn.tebakhewan[id]
        }, timeout)
    ]
}

handler.help = ['tebakhewan1', 'tebakhewan2', 'tebakhewan3', 'tebakhewan4']
handler.tags = ['game']
handler.command = /^tebakhewan[1234]$/i
handler.register = false
handler.limit = true
export default handler

const buttons = [
    ['Hint', '/hhew'],
    ['Nyerah', 'menyerah']
]

async function tebakHewan() {
    const randomPageNumber = Math.floor(Math.random() * 20) + 1;
    const url = `https://rimbakita.com/daftar-nama-hewan-lengkap/${randomPageNumber}/`;
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        return $('div.entry-content.entry-content-single img[class*=wp-image-][data-src]').map((_, element) => {
            const src = $(element).attr('data-src');
            const alt = path.basename(src, path.extname(src)).replace(/-/g, ' ');
            const capitalizedAlt = alt.charAt(0).toUpperCase() + alt.slice(1);
            return { title: capitalizedAlt, url: src };
        }).get();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
