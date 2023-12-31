import fetch from 'node-fetch';
import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  let fload = {
    key: {
      remoteJid: 'status@broadcast',
      participant: '0@s.whatsapp.net'
    },
    message: {
      orderMessage: {
        itemCount: 9998282719181899999,
        status: 404,
        surface: 404,
        message: `${ucapan()}`,
        orderTitle: `${ucapan()}`,
        thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
        sellerJid: '0@s.whatsapp.net'
      }
    }
  };
  let judul = '';

  const listMessage = {
    text: `*YOUTUBERS*

*Your Channel Statistics 📺*  
*Channel: ${user.chname}*
*Like: ${user.like}*
*Dislike: ${user.dislike}*
*Subscriber: ${user.subscriber}*
*Showtime: ${user.showtime}*
*Monet: ${user.monet}*
*Video: ${user.video}*

*CHANNEL NAME*
*.chname*
_Tetapkan Nama Channelmu_

*YOUTUBER TYPE*
*.select-tipeytb*
_Sebagai Apa Kamu Menjadi Youtuber_

*EQUIPMENT*
*.equipment*
_Tingkatkan Peralatan Untuk Meningkatkan Penghasilan_

*UPLOAD OR LIVE*
*.konten*
_Ungah Atau Siaran Langsung_

`,
    footer: wm,
    mentions: await conn.parseMention(judul),
    title: judul.trim(),
  };

  return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply: { showAdAttribution: true } } });
};

handler.help = ['youtuber'];
handler.tags = ['rpg'];
handler.command = /^youtuber|youtubers|ytb|ytbrs|ytbr$/i;
handler.fail = null;
handler.register = false;
handler.limit = 1;

export default handler;

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH');
  if (time >= 0 && time < 4) return 'Selamat Malam🌃';
  if (time >= 4 && time < 12) return 'Selamat Pagi🌄';
  if (time >= 12 && time < 16) return 'Selamat Siang☀️';
  if (time >= 16 && time < 23) return 'Selamat Malam🌇';
  return 'Selamat Malam🌙';
}
