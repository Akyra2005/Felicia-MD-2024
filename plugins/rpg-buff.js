let { MessageType } = (await import('@adiwajshing/baileys')).default;

let handler = async (m, { conn, command, args }) => {
  let type = (args[0] || '').toLowerCase();
  let user = global.db.data.users[m.sender];
  let buf1 = user.boosta;
  let buf2 = user.boostb;
  let buf3 = user.boosts;
  let buf4 = user.boostk;
  let buff1 = (buf1 <= 10 ? (buf1 * 5).toString() : '');
  let buff2 = (buf2 <= 10 ? (buf2 * 5).toString() : '');
  let buff3 = (buf3 <= 10 ? (buf3 * 5).toString() : '');
  let buff4 = (buf4 <= 10 ? (buf4 * 5).toString() : '');

  try {
    if (/boost|Boost/i.test(command)) {
      let buff;
      switch (type) {
        case 'adventure':
          buff = buff1;
          break;
        case 'begal':
          buff = buff2;
          break;
        case 'shop':
          buff = buff3;
          break;
        case 'korupsi':
          buff = buff4;
          break;
        default:
          return conn.sendMessage(
            m.chat,
            `*🏰 BOOSTER SHOP 🏰*\n\nYour Booster Level 📊\n• Adventure: *${user.boosta}*\n• Begal: *${user.boostb}*\n• Shop: *${user.boosts}*\n\nBooster List:\n• Adventure + 100% All Item Per-Level\n• Begal + 100% Limit Per-Level\n• Shop - 2% Harga Item Per-Level\n• Korupsi + 300K Uang Korupsi Per-Level\n\n*❗Information*\n• Dapatkan Gems Di #TopUp & Fitur RPG`,
            MessageType.text,
            { quoted: m }
          );
      }

      if (user[buff] > 4) return m.reply('*_Level Boost Kamu Sudah Max_*');
      if (user.gems < 59 * buff || user.money < 39999 * buff)
        return m.reply(
          `*Kamu Membutuhkan*\n• Gems ${59 * buff} 💠\n• Money ${39999 * buff} 💵`
        );

      global.db.data.users[m.sender][buff] += 1;
      global.db.data.users[m.sender].gems -= 59 * buff;
      global.db.data.users[m.sender].money -= 39999 * buff;

      return m.reply(`*_Sukses Meningkatkan Booster ${type} ⚡_*`);
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};

handler.help = ['boost'];
handler.tags = ['rpg'];
handler.command = /^(boost)/i;
handler.register = false;

export default handler;
