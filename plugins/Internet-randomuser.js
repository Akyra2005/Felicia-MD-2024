import fetch from 'node-fetch';
import sharp from 'sharp';

const handler = async (m, { conn }) => {
  conn.reply(m.chat, '*Memproses Permintaan...*', m);

  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    const user = data.results[0];
    const {
      name: { title, first, last },
      location: {
        street: { number, name },
        city,
        state,
        country,
        postcode,
        coordinates: { latitude, longitude },
        timezone: { offset, description }
      },
      email,
      login: { uuid, username, password, salt, md5, sha1, sha256 },
      dob: { date, age },
      registered: { date: registeredDate, age: registeredAge },
      phone,
      cell,
      id: { name: idName, value: idValue },
      picture: { large },
      nat
    } = user;

    const full_name = `${first} ${last}`;

    const userInfo = `Nama: *${title}*\nNama Depan: *${first}*\nNama Belakang: *${last}*\nNama Lengkap: *${full_name}*\n\n` +
      `Lokasi:\nNomor Jalan: *${number}*\nNama Jalan: *${name}*\nKota: *${city}*\nMunisipalitas: *${state}*\nNegara: *${country}*\nKode Pos: *${postcode}*\nGaris Lintang: *${latitude}*\nGaris Bujur: *${longitude}*\nPengimbangan Zona Waktu: *${offset}*\nDeskripsi Zona Waktu: *${description}*\n\n` +
      `E-Mail: *${email}*\n\n` +
      `Informasi Masuk:\nUUID: *${uuid}*\nNama Pengguna: *${username}*\nKata Sandi: *${password}*\nGaram: *${salt}*\nMD5 Hash: *${md5}*\nSHA1 Hash: *${sha1}*\nSHA256 Hash: *${sha256}*\n\n` +
      `Tanggal Lahir: *${date}*\nUmur: *${age}*\n\n` +
      `Informasi Pendaftaran:\nTanggal Terdaftar: *${registeredDate}*\nUsia Terdaftar: *${registeredAge}*\n\n` +
      `Nomor Telepon: ${phone}\nNomor Handphone: *${cell}*\n\n` +
      `Nama ID: *${idName}*\nNilai ID: *${idValue}*\n\n` +
      `Gambar Besar: *${large}*\n\n` +
      `Kebangsaan: *${nat}*`;

    const imageBuffer = await (await fetch(large)).buffer();
    const resizedImageBuffer = await sharp(imageBuffer).resize(1000).jpeg().toBuffer(); // Resize to width 1000 and convert to JPEG format

    conn.sendFile(m.chat, resizedImageBuffer, 'randomuser.jpg', `*Berikut Informasi Pengguna Acak:*\n\n${userInfo}`, m);
  } catch (error) {
    conn.reply(m.chat, '*E R R O R*', m);
    console.error(error);
  }
};

handler.help = ['randomuser'];
handler.tags = ['internet', 'tools'];
handler.command = /^(randomuser|randuser|ruser|ranuser|rauser|rndmusr)$/i;
handler.register = false
handler.limit = 2
export default handler;