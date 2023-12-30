import { areJidsSameUser } from '@adiwajshing/baileys'

const leaderboardglorys = [
    'advenaglory',
    'slayerglory',
    'horizonglory',
    'ravennaglory',
    'apocalypseglory',
    'sakanaglory',
    'kazariteglory'
]

// Tambahkan nomor WhatsApp yang ingin dihindari pada leaderboard glory
const excludedNumber = '6281229153877'

let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
        return { ...value, jid: key }
    })

    // Filter pengguna dengan nomor WhatsApp yang tidak diinginkan
    users = users.filter(user => !user.jid.includes(excludedNumber))

    let leaderboardglory = leaderboardglorys.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 100)
    let wrong = `
*VIEWING THE LEADERBOARD GLORY S2*

Advena Glory
Slayer Glory
Horizon Glory
Ravenna Glory
Apocalypse Glory
Sakana Glory
Kazarite Glory

*_Format: ${usedPrefix}${command} <type>_*
*_Contoh: ${usedPrefix}${command} money_*

*Tipe-Tipe LeaderboardGlory*
${leaderboardglory.map(v => `
${rpg.emoticon(v)}${v}
`.trim()).join('\n')}
`.trim()
  if (!leaderboardglory.includes(type)) return m.reply(wrong)
  let page = 0
  let sortedItem = users.map(toNumber(type)).sort(sort(type))
  let userItem = sortedItem.map(enumGetKey)
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `⬣
│ *${rpg.emoticon(type)}${type} LeaderboardGlory*
├─────────────────·····
│ *📑 Page:* ${page} of ${getPage(type)}
│ *👤You:* *${userItem.indexOf(m.sender) + 1}* of *${userItem.length}*
╰────────────·····
${sortedItem.slice(page * 100, page * 100 + 100).map((user, i) => '╭────────────·····\n' + `│ *${i + 1} - ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `(${conn.getName(user.jid)}) wa.me/` : '@'}${user.jid.split`@`[0]}*\n│ *_${user[type]} ${type}${rpg.emoticon(type)}`).join`_*\n╰────────────·····\n\n`}
╰────────────·····
`.trim()
  return m.reply(text, null, {
    mentions: [...userItem.slice(page * 100, page * 100 + 100)].filter(v => !participants.some(p => areJidsSameUser(v, p.id)))
  })
}
handler.help = ['leaderboardglory [jumlah user]', 'lbglory [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboardglory|lbglory)$/i
handler.register = false
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}