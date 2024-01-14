import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

    let namae = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "./src/avatar_contact.png")

    if (user.registered === true) throw `*Kamu Sudah Terdaftar*`

    if (!Reg.test(text)) return m.reply(`*Pendaftaran Hanya Dapat Dilakukan 1×*\n\nFormat: *.daftar Nama.Umur*\nContoh: *.daftar Keizha.19*`)

    let [_, name, splitter, age] = text.match(Reg)

    if (!name) throw '*Nama Tidak Boleh Kosong*'
    if (!age) throw '*Umur Tidak Boleh Kosong*'

    age = parseInt(age)

    if (age > 24) throw '*Anda Terlalu TUA*'
    if (age < 11) throw '*Anda Terlalu MUDA*'

    user.name = name.trim()
    user.age = age
    user.regTime = +new Date()
    user.registered = true

    // Peluang mendapatkan premium dengan durasi tertentu
    let chance = Math.random() * 100

    if (chance <= 5) {
        user.premium = true;
        user.premiumTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 hari
        m.reply('*Selamat, Kamu Mendapatkan Status Premium Selama 3 Hari*')
        global.prems.push(m.sender)
    } else if (chance <= 20) {
        user.premium = true;
        user.premiumTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 hari
        m.reply('*Selamat, Kamu Mendapatkan Status Premium Selama 1 Hari*')
        global.prems.push(m.sender)
    } else if (chance <= 40) {
        user.premium = true;
        user.premiumTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 jam
        m.reply('*Selamat, Kamu Mendapatkan Status Premium Selama 12 Jam*')
        global.prems.push(m.sender)
    } else if (chance <= 80) {
        user.premium = true;
        user.premiumTime = new Date().getTime() + 60 * 60 * 1000; // 1 jam
        m.reply('*Selamat, Kamu Mendapatkan Status Premium Selama 1 Jam*')
        global.prems.push(m.sender)
    }

    let sn = createHash('md5').update(m.sender).digest('hex')
    let cap = `
╭━━━━━━━━━━━━━━━╮
┃     *PENDAFTARAN*      
┠──────────────╯
│ Nama: *${namae}*
│ Umur: *${age} Tahun*
│ Status: *Sukses*
┠───────────────╮
╰━━━━━━━━━━━━━━━━━╯

Kamu Wajib Bergabung Ke:
*https://chat.whatsapp.com/FIDmX0nuLWnLOg6NHooo6c*

Manfaat? Lihat Dibawah
*- Biasanya Mengadakan Giveaway*
*- Bisa Menggunakan Semua Fitur Bot*
*- Mendapatkan Informasi Pembaruan*
*- Mendapatkan Informasi Tentang Bot*
*- Bertanya Tentang Cara Menggunakan Bot*
*- Dan Masih Banyak Lagi...*

Lihat Ketentuan Dan Syarat Bot Di:
*https://msha.ke/keizha_bot#about-1*
`

    await conn.sendReact(m.chat, "☑️", m.key)
    await conn.sendMessage(m.chat, { image: { url: pp }, caption: cap }, m)
    await conn.sendFile(m.chat, './mp3/old4.mp3', '', null, m, true)
}

handler.help = ['daftar', 'register']
handler.tags = ['main']
handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler