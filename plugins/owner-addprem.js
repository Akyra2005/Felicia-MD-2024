let handler = async (m, { conn, text, usedPrefix, command }) => {
    // ...

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let user = global.db.data.users[who]
if (!who) throw `Format: *.addprem @Tag Durasi*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `Format: *.addprem @Tag Durasi*`
if (isNaN(txt)) return m.reply(`Format: *.addprem @Tag Durasi*`)
var jumlahHari = 86400000 * txt
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += jumlahHari
else user.premiumTime = now + jumlahHari

// Tambahkan nomor premium ke global.prems
if (!global.prems.includes(who)) {
    global.prems.push(who);
}

user.premium = true
m.reply(`
Nama: *${user.name}*
Durasi: *${txt} Hari*
Hitung Mundur: *${msToTime(user.premiumTime - now)}*`)
}

// ...

handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = true
handler.rowner = true
export default handler

function msToTime(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}