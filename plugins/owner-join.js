let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285346545126@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Format: *.join Tautan Durasi*` 
  if (!code) throw `*Tautan Tidak Sah*`
  if (!args[1]) throw `Format: *.join Tautan Durasi*` 
  if (isNaN(args[1])) throw `*Hanya Angka*`
  let anubot = nomorown
  m.reply(`*Tunggu 3 Detik, Bot Akan Bergabung*`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  let jumlahHari = 86400000 * args[1]
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`Sukses Memasukkan Bot Ke:\n*${await conn.getName(res)}*\n\nBot Akan Keluar Secara Otomatis Setelah *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await conn.reply(res, `Haiii *@${anubot}*`, fkonn, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `Hehehe`, 0)
     await conn.reply(nomorown+'@s.whatsapp.net', `*UNDANGAN*\n\n*@${m.sender.split('@')[0]}* Telah Mengundang *${conn.user.name}* Ke Grup:\n*${await conn.getName(res)}*\n\n${res}\n\nPesan: *${args[0]}*\n\nBot Akan Keluar Otomatis Setelah *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(nomorown+'@s.whatsapp.net', `*UNDANGAN*\n\n*@${m.sender.split('@')[0]}* Telah Mengundang *${conn.user.name}* Ke Grup\n*${await conn.getName(res)}*\n\n${res}\n\nPesan: *${args[0]}*\n\nBot Akan Keluar Otomatis Setelah *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`Sukses Mengundang Bot Ke Group\n*${await conn.getName(res)}*\n\nBot Akan Keluar Secara Otomatis Setelah *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `*Hai Semuanya 👋*\n
*${conn.user.name}* Adalah Salah Satu Bot WhatsApp Multi-Device Dan *${conn.user.name}* Baru Saja Diundang Oleh *${m.name}*
Untuk Menggunakan *${conn.user.name}* Silahkan Ketik *.menu*
\n*@${conn.user.jid.split('@')[0]}* Akan Keluar Secara Otomatis Setelah *${msToDate(global.db.data.chats[res].expired - now)}*`
  await conn.reply(res, mes, fkonn, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(nomorown+'@s.whatsapp.net', e)
      throw `*Bot Tidak Bisa Bergabung Ke Grup*`
      }
}
handler.help = ['joins <chat.whatsapp.com> <day>']
handler.tags = ['owner']
handler.command = /^join(ewa)?$/i

handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik'].map(v => v.toString().padStart(2, 0)).join('')
}