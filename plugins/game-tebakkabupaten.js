import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkabupaten[id][0])
        throw false
    }

    let timeout, poin
    // Tentukan tingkatan berdasarkan perintah
    switch (command.toLowerCase()) {
        case 'tebakkabupaten1':
            timeout = 120000; // 120 detik
            poin = 4999;
            break;
        case 'tebakkabupaten2':
            timeout = 40000; // 40 detik
            poin = 8999;
            break;
        case 'tebakkabupaten3':
            timeout = 10000; // 10 detik
            poin = 19999;
            break;
        case 'tebakkabupaten4':
            timeout = 3000; // 3 detik
            poin = 39999;
            break;
        default:
            conn.reply(m.chat, '*Perintah Tidak Valid*', m)
            return
    }

    let json = await getRandomKabupaten()
    let caption = `*${command.toUpperCase()}*\n
*Kabupaten Apakah Ini?*
⏳ Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎 Ketik *${usedPrefix}hkabu* Untuk Bantuan
🎁 Hadiah: *${poin} ✨ XP*
    `.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendFile(m.chat, json.url, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.reply(m.chat, `*Waktu Habis*\nJawabannya Adalah *${json.title}*`, conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}

handler.help = ['tebakkabupaten1', 'tebakkabupaten2', 'tebakkabupaten3', 'tebakkabupaten4']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i
handler.register = false
handler.limit = true
export default handler

const buttons = [
    ['Hint', '/hkab'],
    ['Nyerah', 'menyerah']
]

const baseUrl = 'https://id.m.wikipedia.org';
async function getRandomKabupaten() {
  try {
    const response = await fetch(baseUrl + '/wiki/Daftar_kabupaten_di_Indonesia');
    const html = await response.text();
    const $ = cheerio.load(html);

    const kabupatenList = $('td a[href^="/wiki/Kabupaten"]').map((index, element) => ({
      link: baseUrl + $(element).attr('href'),
      name: $(element).attr('title')
    })).get().filter(item => item.link && item.name);

    if (kabupatenList.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * kabupatenList.length);
    const randomKabupaten = kabupatenList[randomIndex];

    const imageUrl = await fetchImageUrl(randomKabupaten.link);
    const judul = randomKabupaten.name;
    const judulBaru = judul.replace('Kabupaten ', '');
    const linkGambar = imageUrl;
    const ukuranBaru = linkGambar.replace(/\/\d+px-/, '/1080px-');

    return {
      link: randomKabupaten.link,
      title: judulBaru,
      url: ukuranBaru
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchImageUrl(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    return 'https:' + $('tr.mergedtoprow td.infobox-full-data.maptable div.ib-settlement-cols-row div.ib-settlement-cols-cell a.mw-file-description img.mw-file-element').attr('src') || null;
  } catch (error) {
    return null;
  }
}