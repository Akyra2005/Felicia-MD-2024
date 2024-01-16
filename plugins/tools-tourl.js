import uploadImage from '../lib/uploadImage.js'
import AdmZip from 'adm-zip';

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Balas Media Dengan Perintah *.tourl*'
  let media = await q.download()

  if (mime === 'application/zip') {
    const zip = new AdmZip(media);
    const zipEntries = zip.getEntries();
    const links = []; // Untuk menyimpan semua link yang dihasilkan

    for (let i = 0; i < zipEntries.length; i++) {
      const zipEntry = zipEntries[i];
      const entryMedia = zipEntry.getData();
      
      const link = await uploadImage(entryMedia); // Mengunggah sebagai gambar

      // Menyimpan link dalam array
      links.push(link);
    }

    // Menggabungkan semua link menjadi satu pesan
    const combinedLinks = links.join('\n');
    m.reply(`Tautan Untuk Semua File Dalam ZIP:\n*${combinedLinks}*`);
  } else {
    let link = await uploadImage(media);
    m.reply(`
*KONVERSI MEDIA KE URL*

Tautan: *${link}*
Ukuran: *${media.length} Byte*`);
  }
}

handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(t|tourl)$/i
handler.limit = 1
export default handler