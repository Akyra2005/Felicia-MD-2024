let handler  = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];

  let lgocraft = `
*「 R E P A I R 」*`;

  let caption = `
*MATERIALS*
*Pickaxe ⛏️*
*.repair pickaxe*
*_- 20 Kayu_*
*_- 12 Batu_*
*_- 12 Iron_*
*_- 4 Diamond_*

*Ax 🛶*
*.repair ax*
*_- 20 Kayu_*
*_- 12 Batu_*
*_- 12 Iron_*
*_- 4 Diamond_*

*Sword ⚔️*
*.repair sword*
*_- 20 Kayu_*
*_- 36 Iron_*
*_- 4 Diamond_*

*Armor 🥼*
*.repair armor*
*_- 60 Iron_*
*_- 12 Diamond_*`;

  try {
    if (/repair/i.test(command)) {
      switch (args[0]?.toLowerCase()) {
        case 'pickaxe':
        case 'ax':
        case 'sword':
        case 'armor':
          let itemDurability = user[args[0] + 'durability'];
          if (itemDurability > 99) return m.reply('*_Item Ini Belum Memiliki Kerusakan_*');
          if (user[args[0]] == 0) return m.reply('*_Kamu Belum Memiliki Item Ini_*');
          let materials = {
            pickaxe: { diamond: 4, rock: 12, wood: 20, iron: 12 },
            ax: { diamond: 4, rock: 12, wood: 20, iron: 12 },
            sword: { diamond: 4, wood: 20, iron: 36 },
            armor: { diamond: 12, iron: 60 },
          };
          for (let material in materials[args[0]]) {
            if (user[material] < materials[args[0]][material]) {
              return m.reply(`*_Barang Tidak Cukup_*`);
            }
            user[material] -= materials[args[0]][material];
          }
          user[args[0] + 'durability'] = 100;
          m.reply("*_Sukses Memperbaiki_*");
          break;
        default:
          return conn.reply(m.chat, caption, m);
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};

handler.help = ['repair'];
handler.tags = ['rpg'];
handler.command = /^(repair)/i;
handler.register = false;
export default handler;
