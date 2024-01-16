import {
    cpus as _cpus,
    totalmem,
    freemem
} from 'os'
import util from 'util'
import os from 'os'
import osu from 'node-os-utils'
import fetch from 'node-fetch'
import {
    performance
} from 'perf_hooks'
import {
    sizeFormatter
} from 'human-readable'
let format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, {
    conn,
    isRowner
}) => {
    let _muptime
    if (process.send) {
        process.send('uptime')
        _muptime = await new Promise(resolve => {
            process.once('message', resolve)
            setTimeout(resolve, 1000)
        }) * 1000
    }
    let muptime = clockString(_muptime)
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
    const used = process.memoryUsage()
    const cpus = _cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, {
        length
    }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })
    let NotDetect = 'Not Detect'
    let cpux = osu.cpu
    let cpuCore = cpux.count()
    let drive = osu.drive
    let mem = osu.mem
    let netstat = osu.netstat
    let HostN = osu.os.hostname()
    let OS = osu.os.platform()
    let ipx = osu.os.ip()
    let cpuModel = cpux.model()
    let cpuPer
    let p1 = cpux.usage().then(cpuPercentage => {
        cpuPer = cpuPercentage
    }).catch(() => {
        cpuPer = NotDetect
    })
    let driveTotal, driveUsed, drivePer
    let p2 = drive.info().then(info => {
        driveTotal = (info.totalGb + ' GB'),
            driveUsed = info.usedGb,
            drivePer = (info.usedPercentage + '%')
    }).catch(() => {
        driveTotal = NotDetect,
            driveUsed = NotDetect,
            drivePer = NotDetect
    })
    let ramTotal, ramUsed
    let p3 = mem.info().then(info => {
        ramTotal = info.totalMemMb,
            ramUsed = info.usedMemMb
    }).catch(() => {
        ramTotal = NotDetect,
            ramUsed = NotDetect
    })
    let netsIn, netsOut
    let p4 = netstat.inOut().then(info => {
        netsIn = (info.total.inputMb + ' MB'),
            netsOut = (info.total.outputMb + ' MB')
    }).catch(() => {
        netsIn = NotDetect,
            netsOut = NotDetect
    })
    await Promise.all([p1, p2, p3, p4])
    let _ramTotal = (ramTotal + ' MB')
    let cek = await (await fetch("https://api.myip.com")).json().catch(_ => 'error')

    let ip = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.ip)
    let cr = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.country)
    let cc = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.cc)

    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let dates = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let times = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })

    let old = performance.now()
    let neww = performance.now()
    let speed = neww - old
    let str = `*KECEPATAN*
${Math.round(neww - old)}ms
${speed}ms

*WAKTU JALANKAN*
${muptime}
${readMore}
*OBROLAN*
• *${groupsIn.length}* Obrolan Grup
• *${groupsIn.length}* Grup Bergabung
• *${groupsIn.length - groupsIn.length}* Keluar Grup
• *${chats.length - groupsIn.length}* Obrolan Pribadi
• *${chats.length}* Total Obrolan

*SERVER*
Ram: *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Ram Kosong: *${format(freemem())}*
Platform: *${os.platform()}*
Server: *${os.hostname()}*
OS: *${OS}*
IP: *${ip}*
Negara: *${cr}*
Kode Negara: *${cc}*
Model CPU: *${cpuModel}*
Inti CPU: *${cpuCore} Core*
CPU: *${cpuPer}%*
Waktu Server: *${times}*

*LAIN-LAINNYA*
Hari: *${weeks}*
Tanggal: *${dates}*
Jaringan Masuk: *${netsIn}*
Jaringan Keluar: *${netsOut}*
Total Drive: *${driveTotal}*
Drive Digunakan: *${driveUsed} GB*
Drive: *${drivePer}*

${readMore}
*${htjava} Penggunaan Memori NodeJS*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'
}
`
const userInput = Math.round(neww - old);
const input = userInput === 0 ? 1000 : userInput === 2 ? 2000 : userInput;
const result = Number(input.toString().replace(/[^0-9]/g, ''));
await m.reply(wait)
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: result,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: str,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['ping', 'speed']
handler.tags = ['info']

handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}