let handler  = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];
  let type = (args[0] || '').toLowerCase();

  let lgocraft = `
*「 YOUTUBERS TYPE 」*
`;

  let caption = `
Format: *.select-tipeytb Tipe*

*TIPE:*
*VLOGGER*
_YouTubers yang membuat konten yang berpusat pada kehidupan sehari-hari, termasuk cerita pribadi, pengalaman, dan aktivitas sehari-hari._

*GAMER*
_YouTubers yang membuat konten yang berfokus pada permainan video, termasuk review, walkthrough, dan gameplay._

*BEAUTY GURU*
_YouTubers yang membuat konten seputar kecantikan, termasuk tutorial makeup, ulasan produk kecantikan, dan perawatan kulit._

*COOKING/BAKING*
_YouTubers yang membuat konten tentang memasak dan baking, termasuk tutorial, resep, dan review peralatan memasak._

*FITNESS*
_YouTubers yang membuat konten tentang kesehatan dan kebugaran, termasuk rutinitas latihan, diet, dan tips kesehatan._

*TRAVELER*
_YouTubers yang membuat konten tentang perjalanan, termasuk video tentang destinasi wisata, pengalaman perjalanan, dan petualangan._

*EDUKASI*
_YouTubers yang membuat konten tentang pendidikan, termasuk tutorial, pengetahuan, dan kurikulum pendidikan._

*KOMEDI*
_YouTubers yang membuat konten tentang komedi, termasuk video parodi, sketsa, dan prank._

*MUSIK*
_YouTubers yang membuat konten tentang musik, termasuk video klip, live perform, dan tutorial musik._

*REVIEWER*
_YouTubers yang membuat konten tentang ulasan produk, termasuk review gadget, fashion, makanan, dan lainnya._
`;

  try {
    if (/select-tipeytb|Crafting/i.test(command)) {
      if (user.tipeyt > 0) return m.reply('*_Kamu Sudah Memilih Tipemu_*');
      
      switch (type) {
        case 'vlog':
        case 'game':
        case 'beauty':
        case 'cook':
        case 'fit':
        case 'travel':
        case 'edukasi':
        case 'komedi':
        case 'musik':
        case 'review':
          global.db.data.users[m.sender].tipeyt += ['vlog', 'game', 'beauty', 'cook', 'fit', 'travel', 'edukasi', 'komedi', 'musik', 'review'].indexOf(type) + 1;
          m.reply("*_Sukses Memilih Tipe Ini_*");
          break;

        default:
          return conn.reply(m.chat, caption, m);
      }
    } else if (/enchant|enchan/i.test(command)) {
      switch (args[0]?.toLowerCase()) {
        case 't':
          break;
        case '':
          break;

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m);
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};

handler.help = ['select-tipeytb'];
handler.tags = ['rpg'];
handler.command = /^(select-tipeytb)/i;
handler.register = false;
export default handler;
