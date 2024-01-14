import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
     if (!text) throw `Format: *${usedPrefix + command} Nama Nabi*`
     let url = await fetch(`https://raw.githubusercontent.com/Aiinne/scrape/main/data/kisahnabi/${text}.json`)
     let kisah = await url.json()
     let hasil = `Nabi: *${kisah.name}*\nTanggal Lahir: *${kisah.thn_kelahiran}*\nTempat Lahir: *${kisah.tmp}*\nUsia: *${kisah.usia}*\nKisah: *${kisah.description}*`
     conn.reply(m.chat, hasil, m)
     }
handler.help = ['kisahnabi <name>']
handler.tags = ['quran']
handler.command = /^kisahnabi$/i
handler.register = false
export default handler
