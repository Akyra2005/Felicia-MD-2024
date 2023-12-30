import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 
let user = global.db.data.users[m.sender]
let buf1 = user.boostb
let buff1 = (buf1 == 0 ? '0' : '' || buf1 == 1 ? '2' : '' || buf1 == 2 ? '3' : '' || buf1 == 3 ? '4' : '' || buf1 == 4 ? '5' : '' || buf1 == 5 ? '6' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
    try { 

    	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
        let __timers = (new Date - global.db.data.users[m.sender].lastsport)

        let _timers = (3600000 - __timers) 

        let timers = clockString(_timers)

        if (global.db.data.users[m.sender].drink > 9) {

            if (new Date - global.db.data.users[m.sender].lastsport > 3600000) {


            let _drink = `${Math.floor(Math.random() * 10)}`.trim()
            let drink = (_drink * 1)
            let staminaa = `${Math.floor(Math.random() * 370)}`.trim() 
            let str = `

            
*BADMINTON 🏸*\n\nKamu Selesai Berolahraga

Drink Kamu Berkurang ${drink * 1} 🍹

 + Stamina ${staminaa} ⚡
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 600000)


            setTimeout(() => {

                   m.reply(`*Kamu Bertanding Bulu Tangkis Dengannya*`)

                  }, 70000)
                  
             setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Akan Menjadi Pemain Cadangan*`)

                  }, 67000)

            setTimeout(() => {

                   m.reply(`*${pickRandom(['Taufik Hidayat', 'Susi Susanti', 'Liliyana Natsir', 'Tontowi Ahmad', 'Greysia Polii', 'Hendra Setiawan', 'Markis Kindo', 'Mohammad Ahsan','Rian Agung Saputro','Kevin Sanjaya Sukamuljo'])} Akan Bertanding Denganmu*`)

                  }, 62000)

             setTimeout(() => {

                   m.reply(`*Menyiapkan Diri Untuk Berolahraga*`)

                  }, 1000)

             setTimeout(() => {

                   m.reply('*Mencari Pemain Untuk Ditantang 🔎*')

                  }, 15000)

             setTimeout(() => {

                   m.reply('*Berhasil Menemukan Pemain 🔍*')

                  }, 60000)

             setTimeout(() => {

                   m.reply('*. . .*')

                  }, 80000)

            
             setTimeout(() => {

                   m.reply('*Pertandingan Mencapai Akhir...*')

                  }, 300000)

 

             setTimeout(() => {

                   m.reply('*Pertandingan Hampir Selesai...*')

                  }, 480000)

             setTimeout(() => {

                   m.reply(`*Skor Kamu ${pickRandom(['0', '1', '2', '3','4','5','6','7','8','9','10','11'])} - ${pickRandom(['0', '1', '2', '3','4','5','6','7','8','9','10','11'])} Skor Lawan*`)

                  }, 570000)

					

            global.db.data.users[m.sender].drink -= drink * 1
            global.db.data.users[m.sender].stamina += staminaa * 1
            global.db.data.users[m.sender].lastsport = new Date * 1
            } else conn.reply(m.chat, `Anda Sudah Berolahraga, Silahkan Tunggu Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Kamu Membutuhkan 10 Drink Untuk Berolahraga\n\nMembeli\n • *' + usedPrefix + 'buy drink jumlah*\nMenggunakan\n • ' + usedPrefix + 'drink', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['bulutangkis']

handler.tags = ['rpg']

handler.command = /^(bulutangkis)$/i

handler.limit = 1

handler.skillsport = 7

handler.group = true

handler.fail = null



export default handler



function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}



function clockString(ms) {

  let h = Math.floor(ms / 3600000)

  let m = Math.floor(ms / 60000) % 60

  let s = Math.floor(ms / 1000) % 60

  console.log({ms,h,m,s})

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

} 