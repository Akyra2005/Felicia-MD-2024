import cheerio from 'cheerio';
import fetch from 'node-fetch';
import mime from 'mime-types';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "search",
        "down"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("Format: *.dafonts tipe|nama font*\n\n*Daftar Tipe:*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("Format: *.dafonts search|nama font*")
            await m.reply(wait)
            try {
                let res = await searchDafont(inputs)
                let teks = res.map((item, index) => {
                    return `*Hasil Ke ${index + 1}*

Nama: *${item.title}*
Tautan: *${item.link}*
Tema: *${item.theme}*
Tautan Tema: *${item.themeLink}*
Nama Pengarang: *${item.author}*
Tautan Pengarang: *${item.authorLink}*
Total Unduhan: *${formatNumber(item.totalDownloads)}*
Pratinjau Gambar: *${item.previewImage}*`

                }).filter(v => v).join("\n\n______________________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "down") {
            if (!inputs) return m.reply("Format: *.dafonts down|nama font*")
            try {
                let item = await downloadDafont(inputs)
                let cap = '*HASIL DAFONTS*\n\nNama: ' + item.title +
          '\nPsngarang: ' + item.author +
          '\nTema: ' + item.theme +
          '\nTotal Unduhan: ' + formatNumber(item.totalDownloads) +
          '\nNama File:\n' + item.filename.map((e, i) => '   ' + (i + 1) + '. \'' + e + '\'').join('\n') +
          '\nGambar: ' + item.image +
          '\nCatatan: ' + item.note.replace(/(Note of the author)(.*)/, '$1\n$2') +
          '\nUnduhan: ' + item.download
          let details = await getFileDetails(item.download)
          
                await conn.sendFile(m.chat, item.image, "", cap, m)
                await conn.sendFile(m.chat, item.download, item.title + details.fileFormat, null, m, true, {
                    quoted: m,
                    mimetype: details.mimeType
                })
                
            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = ["dafonts"]
handler.tags = ["internet"]
handler.command = /^(dafonts)$/i
handler.register = false
handler.limit = 2
export default handler

/* New Line */
async function searchDafont(q) {
  const response = await fetch(`https://www.dafont.com/search.php?q=${q}`);
  const html = await response.text();
  const $ = cheerio.load(html);

  const results = [];

  const regex = /<div class="lv1left dfbg">.*?<span class="highlight">(.*?)<\/span>.*?by <a href="(.*?)">(.*?)<\/a>.*?<\/div>.*?<div class="lv1right dfbg">.*?<a href="(.*?)">(.*?)<\/a>.*?>(.*?)<\/a>.*?<\/div>.*?<div class="lv2right">.*?<span class="light">(.*?)<\/span>.*?<\/div>.*?<div style="background-image:url\((.*?)\)" class="preview">.*?<a href="(.*?)">/g;

  let match;
  while ((match = regex.exec(html)) !== null) {
    const [, title, authorLink, author, themeLink, theme, , totalDownloads, previewImage, link] = match;

    const result = {
      title: title.trim() || '*Tidak Diketahui*',
      authorLink: `https://www.dafont.com/${authorLink.trim()}` || '*Tidak Diketahui*',
      author: author.trim() || '*Tidak Diketahui*',
      themeLink: `https://www.dafont.com/${themeLink.trim()}` || '*Tidak Diketahui*',
      theme: theme.trim() || '*Tidak Diketahui*',
      totalDownloads: totalDownloads.trim().replace(/[^0-9]/g, '') || '*Tidak Diketahui*',
      previewImage: `https://www.dafont.com${previewImage.trim()}` || '*Tidak Diketahui*',
      link: `https://www.dafont.com/${link.trim()}` || '*Tidak Diketahui*',
    };

    results.push(result);
  }

  return results;
}

async function downloadDafont(link) {
  const response = await fetch(link);
  const html = await response.text();
  const $ = cheerio.load(html);

  const getValue = (selector) => $(selector).text().trim();
  const getFilenames = () => $('.filename').toArray().map(element => $(element).text().trim());
  const getImage = () => 'https://www.dafont.com' + $('.preview').css('background-image').replace(/^url\(["']?|['"]?\)$/g, '');
  const getDownloadLink = () => $('a.dl').attr('href') ? 'http:' + $('a.dl').attr('href') : '';

  return {
    title: getValue('.lv1left.dfbg strong'),
    author: getValue('.lv1left.dfbg a'),
    theme: getValue('.lv1right.dfbg a:last-child'),
    totalDownloads: getValue('.lv2right .light').replace(/\D/g, ''),
    filename: getFilenames(),
    image: getImage(),
    note: $('[style^="border-left"]').text().trim(),
    download: getDownloadLink(),
  };
}

async function getFileDetails(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');
  const mimeType = mime.contentType(contentType);
  const extension = mime.extension(contentType);

  return {
    url: url,
    mimeType: await mimeType,
    fileFormat: '.' + await extension
  };
}

function formatNumber(num) {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const numString = Math.abs(num).toString();
  const numDigits = numString.length;

  if (numDigits <= 3) {
    return numString;
  }

  const suffixIndex = Math.floor((numDigits - 1) / 3);
  let formattedNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
  
  // Menghapus desimal jika angka sudah bulat
  if (formattedNum.endsWith('.0')) {
    formattedNum = formattedNum.slice(0, -2);
  }

  return formattedNum + suffixes[suffixIndex];
}