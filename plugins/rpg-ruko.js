let handler  = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];
  let buf = user.atm;

  let lgojualan = `
*「 SALE 」*
`;

  let caption = `
*Mie Ayam / Chicken Noodle 🍝*
*.jualan mieayam*
+ IDR 20000 💵


*Makanan Didapat Di #cook*
`;

  try {
    if (/jualan|Eat/i.test(command)) {
      switch (args[0]?.toLowerCase()) {
        case 'mieayam':
          if (user.pajak > 100) return m.reply('*_Tidak Bisa Menjual Karena Kamu Belum Membayar Pajak, Bayar Pajak Di #pajak_*');
          if (user.mieayam < 10) return m.reply(`*_Mie Ayam Kurang Dari 10 Porsi_*`);
          global.db.data.users[m.sender].mieayam -= 10;
          global.db.data.users[m.sender].money += 120000;
          global.db.data.users[m.sender].pajak += 10;
          m.reply("*_Sukses Menjual 10 Mie Ayam_*\n*_Penghasilan IDR 120000 💵_*");
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

handler.help = ['jualan'];
handler.tags = ['rpg'];
handler.command = /^(jualan)/i;
handler.register = false;
export default handler;
