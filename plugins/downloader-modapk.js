import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "search",
        "app"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("Format: *.modapk search|kata kunci/tautan*\n\nDaftar Tipe:\n" + lister.map((v, index) => "- " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("Format: *.modapk search|kata kunci*")
            await m.reply(wait)
            try {
                let res = await searchApp(inputs)
                let teks = res.map((item, index) => {
                    return `*Hasil Ke-${index + 1}*

Tautan: *${item.link}*
Judul: *${item.title}*
Menu: *${item.menu}*
Detail: *${item.detail.replace(/\n/g, ' ')}*
Gambar: *${item.image}*
Teks Unduhan: *${item.downloadText}*
`
                }).filter(v => v).join("\n\n_______________________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "app") {
            if (!inputs) return m.reply("Format: *.modapk app|tautan*")
            try {
                let item = await getApp(inputs)
                let cap = `*PENCARIAN MOD APK

Judul: *${item.title}*
Gambar: *${item.image}*
Nama: *${item.name}*
Skor: *${item.score}*
Edisi: *${item.edisi}*
Ukuran: *${item.size}*
Dibuat: *${item.create}*
Tautan: *${item.link}*
Detail: *${item.detail}*
Tangkap Layar: \n*${generateList(item.screenshots)}*
Penjelasan: \n*${addNewline(item.describe)}*
`
                await conn.sendFile(m.chat, item.screenshots[0], "", cap, m)
                await conn.sendFile(m.chat, item.link, item.title, null, m, true, {
                    quoted: m,
                    mimetype: "application/vnd.android.package-archive"
                })
            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = handler.command = ['modapk']
handler.tags = ['downloader']
handler.register = false
handler.limit = 1
export default handler

/* New Line */
async function searchApp(q) {
  try {
    const url = 'https://m.playmods.net/id/search/' + q; // Ganti dengan URL sumber HTML

    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const dataArray = [];

    $('a.beautify.ajax-a-1').each((index, element) => {
      const $element = $(element);

      const data = {
        link: 'https://m.playmods.net' + $element.attr('href'),
        title: $element.find('.common-exhibition-list-detail-name').text().trim(),
        menu: $element.find('.common-exhibition-list-detail-menu').text().trim(),
        detail: $element.find('.common-exhibition-list-detail-txt').text().trim(),
        image: $element.find('.common-exhibition-list-icon img').attr('data-src'),
        downloadText: $element.find('.common-exhibition-line-download').text().trim(),
      };

      dataArray.push(data);
    });
    return dataArray;
  } catch (error) {
    console.log(error);
  }
}

async function getApp(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const data = {
      title: $('h1.name').text().trim(),
      image: $('.icon').attr('src'),
      name: $('.app-name span').text().trim(),
      score: $('.score').text().trim(),
      edisi: $('.edition').text().trim(),
      size: $('.size .operate-cstTime').text().trim(),
      create: $('.size span').text().trim(),
      link: $('a.a_download').attr('href'),
      detail: $('.game-describe-gs').text().trim(),
      screenshots: $('.swiper-slide img').map((index, element) => $(element).attr('data-src')).get(),
      describe: $('.datail-describe-pre div').text().trim(),
    };

    return data;
  } catch (error) {
    console.log(error);
  }
}

function generateList(array) {
  const list = array.map((item, index) => `${index + 1}. ${item}`).join('\n');
  return list;
}

function addNewline(text) {
  const newText = text.replace(/•/g, '\n•');
  return newText;
}