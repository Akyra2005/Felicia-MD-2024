const leaderboards = [
  'level',
  'exp',
  'limit',
  'money',
  'iron',
  'gold',
  'diamond',
  'emerald',
  'trash',
  'potion',
  'petFood',
  'wood',
  'rock',
  'string',
  'common',
  'uncommon',
  'mythic',
  'legendary',
  'diperkosa',
  'memperkosa',
  'rune',
  'subscriber',
  'pengeluaran',
  'levelhunter',
  'pet'
];

// ...

// ...

let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key };
  }).filter(user => user.jid !== '6281229153877@s.whatsapp.net');

  let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v] !== undefined).length);
  let type = (args[0] || '').toLowerCase();
  const getPage = (item) => Math.ceil((users.filter(user => user && user[item] !== undefined).length) / 100);
  let wrong = `
*VIEWING THE LEADERBOARD S3*

*_Format: ${usedPrefix}${command} <type>_*
*_Contoh: ${usedPrefix}${command} money_*

*Tipe-Tipe Leaderboard*
${leaderboard.join('\n')}
`.trim();

  if (!leaderboard.includes(type)) return conn.reply(m.chat, wrong, m);
  let page = 0;
  let sortedItem = users.map(toNumber(type)).sort(sort(type));
  let userItem = sortedItem.map(enumGetKey);

  let text = `⬣
│ *${type} Leaderboard*
├─────────────────·····
│ *📑 Page:* ${page + 1} of ${getPage(type)}
│ *👤You:* *${userItem.indexOf(m.sender) + 1}* of *${userItem.length}*
│ *Simbol 🟢 = Berada Digrup Ini*
│ *Simbol 🔴 = Digrup Lain*
╰────────────·····
${sortedItem.slice(page * 100, page * 100 + 100).map((user, i) => {
    let inSameGroup = participants.some(p => user.jid.endsWith(p.id));
    return '╭────────────·····\n' + `│ *${i + 1} - @${user.jid.split`@`[0]}* ${inSameGroup ? '(🟢)' : '(🔴)'}\n│ *_${user[type]} ${type}_*`;
  }).join`_*\n╰────────────·····\n\n`}
╰────────────·····
`.trim();

  return conn.reply(m.chat, text, null, {
    mentions: [...userItem.slice(page * 100, page * 100 + 100)].filter(v => !participants.some(p => v.endsWith(p.id)))
  });
};

// ...


// ...


handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]'];
handler.tags = ['xp', 'rpg'];
handler.command = /^(leaderboard|lb)$/i;
handler.register = false;
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] };
  };
  else return a => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}

/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == 'number' && !isNaN(number);
}
