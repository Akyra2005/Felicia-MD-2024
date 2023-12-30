let handler  = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];
  let buf = user.atm;
  let buff = buf == 0 ? '1' : buf == 1 ? '1' : buf == 2 ? '1' : buf == 3 ? '1' : buf == 4 ? '1' : buf == 5 ? '1' : buf == 6 ? '1' : buf == 7 ? '1' : buf == 8 ? '1' : buf == 9 ? '1' : buf == 10 ? '1' : buf == 11 ? '1' : '';
  
  let lgopajak = `*「 TAXATION  」*`;

  let caption = `
*Place of Tax Payment 💲*
*.pajak ruko*
`;

  try {
    if (/pajak|Eat/i.test(command)) {
      switch (args[0]?.toLowerCase()) {
        case 'ruko':
          if (user.pajak < 100) return m.reply('*_Belum Bisa Membayar Pajak_*');
          if (user.money < 25000) return m.reply(`*_Uang Kurang Untuk Membayar Pajak_*`);
          global.db.data.users[m.sender].pajak -= 85;
          global.db.data.users[m.sender].money -= 25000;
          m.reply("*_Sukses Membayar Pajak, Itu Yang Kendaraannya Pajaknya Mafi Dibayar Ya Kontol!_*");
          break;
        default:
          return conn.reply(m.chat, caption, m);
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};

handler.help = ['pajak'];
handler.tags = ['rpg'];
handler.command = /^(pajak)/i;
handler.register = false;
export default handler;
