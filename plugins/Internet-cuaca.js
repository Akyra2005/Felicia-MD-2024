import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Format: *${usedPrefix + command} Lokasi*`
    m.reply(wait)
    let res = await fetch(API('https://api.openweathermap.org', '/data/2.5/weather', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!res.ok) throw '*Lokasi Tidak Ditemukan*'
    let json = await res.json()
    if (json.cod != 200) throw json
    m.reply(`
Lokasi: *${json.name}*
Negara: *${json.sys.country}*
Cuaca: *${json.weather[0].description}*
Suhu Saat Ini: *${json.main.temp} °C*
Suhu Tertinggi: *${json.main.temp_max} °C*
Suhu Terendah: *${json.main.temp_min} °C*
Kelembapan: *${json.main.humidity} %*
Angin: *${json.wind.speed} KM/Jam*
    `.trim())
}

handler.help = ['cuaca']
handler.tags = ['internet']
handler.command = /^(cuaca|weather)$/i
handler.register = false
handler.limit = 1
export default handler