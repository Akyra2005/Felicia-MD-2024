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
        "info"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("Format: *.deviantart tipe|kata kunci\n\n*Daftar Tipe:*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("Format: *.deviantart tipe|kata kunci*")
            await m.reply(wait)
            try {
                let res = await searchDeviantart(inputs)
                let teks = res.map((item, index) => {
                
                    return `*Hasil Ke ${index + 1}*

Nama: *${item.title}*
Tautan: *${item.link}*
Panduan: *${extractIdFromUrl(item.guid)}*
Tanggal Pub: *${item.pubDate}*
Judul Media: *${item.mediaTitle}*
Kategori Media: *${item.mediaCategory}*
Kredit Media: *${generateOutput(item.mediaCredit)}*
Deskripsi Media: *${removeHtmlTags(item.mediaDescription)}*
`
                }).filter(v => v).join("\n\n________________________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "info") {
            if (!inputs) return m.reply("*Menggunakan Tautan*\nFormat: *.deviantart app|tautan*")
            await m.reply(wait)
            try {
            if (!inputs.startsWith('https://www.deviantart.com/') && !inputs.startsWith('https://backend.deviantart.com/')) return m.reply('*Tautan Tidak Sah*');

                let item = await infoDeviantart(inputs)
                let cap = `*HASIL DEVIANART*

Versi: *${item.version}*
Tipe: *${item.type}*
Nama: *${item.title}*
Kategori: *${item.category}*
Nama Pengarang: *${item.author_name}*
URL Pengarang: *${item.author_url}*
Nama Penyedia: *${item.provider_name}*
URL Penyedia: *${item.provider_url}*
Keamanan: *${item.safety}*
Publikasi: *${item.pubdate}*
Tag: *${item.tags}*
`
                await conn.sendFile(m.chat, item.url || logo, "", cap, m)
                
            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = ["deviantart"]
handler.tags = ["internet"]
handler.command = /^(deviantart)$/i
handler.register = false
handler.limit = 2
export default handler

/* New Line */
function generateOutput(text) {
  const name = text.substr(0, text.indexOf("https"));
  const link = text.substr(text.indexOf("https"));
  return `Kredit: *${name}*\nTautan: *${link}*`;
}

function extractIdFromUrl(url) {
  const regex = /-(\d+)\b/;
  const match = url.match(regex);
  let id = "";
  if (match && match.length > 1) {
    id = match[1];
  }
  return id;
}

function removeHtmlTags(text) {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, '');
}

async function searchDeviantart(input) {
  const urlToFetch = `https://backend.deviantart.com/rss.xml?q=${input}&type=deviation`;
  try {
    const response = await fetch(urlToFetch);
    const xml = await response.text();
    const $ = cheerio.load(xml, { xmlMode: true });
    const items = [];

    $('item').each((index, element) => {
      const item = {};

      item.title = $(element).find('title').text();
      item.link = $(element).find('link').text();
      item.guid = $(element).find('guid').text();
      item.pubDate = $(element).find('pubDate').text();
      item.mediaTitle = $(element).find('media\\:title').text();
      item.mediaCategory = $(element).find('media\\:category').text();
      item.mediaCredit = $(element).find('media\\:credit').text();
      item.mediaDescription = $(element).find('media\\:description').text();
      
      // Mengambil atribut URL dari elemen thumbnail pertama
      item.thumbnailUrl = $(element).find('media\\:thumbnail').eq(0).attr('url');

      items.push(item);
    });

    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function infoDeviantart(url) {
  const modifiedURL = url.includes('https://backend.deviantart.com/oembed?url=') ? url : `https://backend.deviantart.com/oembed?url=${url}&format=json`;
  try {
    const response = await fetch(modifiedURL);
    const items = await response.json();
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}