const items = ['money', 'bank', 'potion', 'trash', 'wood', 'rock', 'string', 'petFood', 'emerald', 'diamond', 'gold', 'iron', 'common', 'uncommon', 'mythic', 'legendary', 'pet', 'limit'];

let confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
  if (m.sender.endsWith('6281229153877@s.whatsapp.net')) {
    return m.reply('*116 105 100 97 107 32 100 105 105 122 105 110 107 97 110*');
  }

  if (confirmation[m.sender]) return m.reply('*_Kamu Sedang Melakukan Transaksi_*');
  
  let user = global.db.data.users[m.sender];
  const item = items.filter(v => v in user && typeof user[v] == 'number');
  
  let lol = `*TRANSFER ITEMS*

*_Format: ${usedPrefix}${command} <type> <value> <number>_*
*_Contoh: ${usedPrefix}${command} money 9999 @⁨+62 192 7237001⁩_*

*Transferable Items*
${item.map(v => `*_${rpg.emoticon(v)}${v}`.trim()).join('_*\n')}_*
`.trim();

  const type = (args[0] || '').toLowerCase();
  
  if (!item.includes(type)) return m.reply(lol);
  
  const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1;
  
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
  
  if (!who) return m.reply('*_Tag Atau Ketik Nomornya_*');
  
  if (!(who in global.db.data.users)) return m.reply(`*_User ${who} Tidak Ada Dibasis Data_*`);
  
  if (user[type] * 1 < count) return m.reply(`*${rpg.emoticon(type)}${type}${special(type)}* Kamu Kurang *${count - user[type]}*`);
  
  let confirm = `
*T R A N S A C T I O N*

*🗂️ Item:* ${type} ${rpg.emoticon(type)}${special(type)}
*🧮 Count:* ${count} 
*📦 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}

⏰ Timeout *60* Detik
✔️ Atau ✖️
`.trim();

  let c = wm;

  m.reply(confirm, null, { mentions: [who] });

  confirmation[m.sender] = {
    sender: m.sender,
    to: who,
    message: m,
    type,
    count,
    timeout: setTimeout(() => (m.reply('Timeout'), delete confirmation[m.sender]), 60 * 1000),
  };
}

handler.before = async m => {
  if (m.isBaileys) return;
  if (!(m.sender in confirmation)) return;
  if (!m.text) return;
  
  let { timeout, sender, message, to, type, count } = confirmation[m.sender];
  
  if (m.id === message.id) return;
  
  let user = global.db.data.users[sender];
  let _user = global.db.data.users[to];
  
  if (/(✖️|n(o)?)/g.test(m.text.toLowerCase())) {
    clearTimeout(timeout);
    delete confirmation[sender];
    return m.reply('Reject');
  }
  
  if (/(✔️|y(es)?)/g.test(m.text.toLowerCase())) {
    let previous = user[type] * 1;
    let _previous = _user[type] * 1;
    user[type] -= count * 1;
    _user[type] += count * 1;
    
    if (previous > user[type] * 1 && _previous < _user[type] * 1) {
      m.reply(`*T R A N S A C T I O N*\n*📠 Status:* Succeed\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📦 To:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] });
    } else {
      user[type] = previous;
      _user[type] = _previous;
      m.reply(`*T R A N S A C T I O N*\n\n*📠 Status:* Fail\n*🗂️ Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📦 To:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] });
    }
    
    clearTimeout(timeout);
    delete confirmation[sender];
  }
}

handler.help = ['transfer', 'tf'].map(v => v + ' [type] [jumlah] [@tag]');
handler.tags = ['rpg'];
handler.command = /^(transfer|tf)$/i;
handler.register = false;
handler.limit = 1;
handler.disabled = false;

export default handler;

function special(type) {
  let b = type.toLowerCase();
  let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '');
  return special;
}

function isNumber(x) {
  return !isNaN(x);
}
