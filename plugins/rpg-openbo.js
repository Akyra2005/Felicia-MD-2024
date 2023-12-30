import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 

    try { 

    	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
        let __timers = (new Date - global.db.data.users[m.sender].lastob)

        let _timers = (3600000 - __timers) 

        let timers = clockString(_timers)

        if (global.db.data.users[m.sender].stamina > 99) {

            if (new Date - global.db.data.users[m.sender].lastob > 3600000) {


            let _stamina = `${Math.floor(Math.random() * 199)}`.trim()
            let stamina = (_stamina * 1)
            let uang = `${Math.floor(Math.random() * 200000)}`.trim() 
            let berlian = `${Math.floor(Math.random() * 2)}`.trim() 
            let moon = `${Math.floor(Math.random() * 2)}`.trim() 
            let epp = `${Math.floor(Math.random() * 100000)}`.trim() 
            let star = `${Math.floor(Math.random() * 2)}`.trim() 
            let str = `

            
*「 OPEN BO 」*\n\nKamu Melakukan OPEN Bo Di ${pickRandom(['Federasi Jura Tempest', 'Desa Konoha', 'Isekai', '2D Dimension', '4D Dimension', 'Kuburan Mantan', 'Rumah Mantan', 'Pernikahan Mantan', 'OPM Verse', 'AOT Verse', 'OP Verse', 'Tensura Verse', 'DB Verse', 'BC Verse', 'Japan', 'DS Verse', 'Kamar Anya','Kamar Maple','Israel','United States of America','Russia'])}

Stamina Kamu Berkuras ${stamina * 1}%

Bayaran:
 - Exp ${epp} 💵
 - Money ${uang} 💵
 - Gems ${berlian} 💠
 - Harga Diri -1 🏷️
 - Ravenna Glory
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 600000)


            setTimeout(() => {

                   m.reply(`*Dia Menyewa Kamu Selama ${pickRandom(['1 Menit', '10 Menit', '1 Jam', '10 Jam', '1 Hari', '1 Minggu', '1 Bulan', '1 Tahun', '5 Jam', '10 Hari','Kamu Masih Belum Tobat','Kamu Masih Bernafas'])} ⏳*`)

                  }, 70000)

            setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Akan Jadi Pelangganmu*`)

                  }, 62000)

             setTimeout(() => {

                   m.reply('*Kamu Menunju Ke Tempat Pertunjukan*')

                  }, 1000)

             setTimeout(() => {

                   m.reply('*Menunggu Pelanggan ⌚*')

                  }, 15000)

             setTimeout(() => {

                   m.reply('*Mendapatkan Pelanggan 🔍*')

                  }, 60000)

             setTimeout(() => {

                   m.reply('*Sudah Dimulai...*')

                  }, 80000)

              setTimeout(() => {

                   m.reply(`*Gaya ${pickRandom(['Woman On Top', 'Doggy Style', 'Duduk Mendekap', 'Misionaris', 'Spooning', 'Woman On Top', 'The Rider', 'The Seduction', 'The Close-up', 'Magic Bullet','sexy Spoons','the Rider','Woman On Top'])} Sampai Keluar...*`)

                  }, 240000)

             setTimeout(() => {

                   m.reply('*Sudah Mulai Kehabisan Tenaga ⏳*')

                  }, 300000)

 

             setTimeout(() => {

                   m.reply('*Sudah...*')

                  }, 480000)

             setTimeout(() => {

                   m.reply(`*Rating Dari Pelanggan: ${pickRandom(['Tidak Memberi Rating', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'])}*\n*Ulasan Pelanggan: ${pickRandom(['Tidak Memberi Ulasan', 'Longgar', 'Terlalu Kecil', 'Sempit Sih Tapi Ireng', 'Kntlnya Bau Bet', 'Bengkok Tolol','Tidak Sesuai Pict','Lumayan','Besttt','Next Time Sama Kamu Lagi','Lain Kali Giginya Dijaga','Desahannya kek desahan kuda','ya bolehlah','jelek Anjir','Biarkan bintang yng berbicara',',Tobat kak'])}*`)

                  }, 570000)

					

            global.db.data.users[m.sender].stamina -= stamina * 1
			global.db.data.users[m.sender].ravennaglory += 10000
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].exp += epp * 1
            global.db.data.users[m.sender].gems += berlian * 1
            global.db.data.users[m.sender].hargadiri -= 1
            global.db.data.users[m.sender].lastob = new Date * 1
            } else conn.reply(m.chat, `Anda Sudah Open Bo Dan Kelelahan, Silahkan Tunggu Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Minimal 100 Stamina Untuk Bisa Open Bo, Silahkan Makan Untuk Menambah Stamina Dengan Cara\n\nMemasak\n • *' + usedPrefix + 'cook ayambakar*\nMenggunakan\n • ' + usedPrefix + 'eat ayambakar', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['openbo']

handler.tags = ['rpg']

handler.command = /^(openbo)$/i

handler.limit = 2

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