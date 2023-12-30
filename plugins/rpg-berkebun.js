const timeout = 10800000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebun + 10800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Kamu Harus Memiliki Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, & Bibit Anggur Minimal 100 Bibit*\n\nKetik :\n${usedPrefix}buy bibitmangga 100\n`)
                                     if (new Date - global.db.data.users[m.sender].lastberkebun < 10800000) throw `*Anda Sudah Menanam*\n*Mohon Tunggu Hasil Panenmu*\nTunggu Selama ${msToTime(time - new Date())} Lagi`
                                     if (global.db.data.users[m.sender].bibitmangga > 99) {
                                 	if (global.db.data.users[m.sender].bibitapel > 99) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 99) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 99) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 99) {
                                     let pisangpoin = `${Math.floor(Math.random() * 100)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 100)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 100)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 100)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 100)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1                                 
                                     global.db.data.users[m.sender].bibitpisang -= 100
                                     global.db.data.users[m.sender].bibitanggur -= 100
                                     global.db.data.users[m.sender].bibitmangga -= 100
                                     global.db.data.users[m.sender].bibitjeruk -= 100
                                     global.db.data.users[m.sender].bibitapel -= 100
                                     global.db.data.users[m.sender].lastberkebun = new Date * 1
                                     let hsl = `Selamat ${conn.getName(m.sender)}, Kamu Mendapatkan : \n+${pisangpoin} Pisang 🍌\n+${manggapoin} Mangga 🍋\n+${anggurpoin} Anggur 🍇\n+${jerukpoin} Jeruk 🍊\n+${apelpoin} Apel 🍎`
                                     conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `*Saatnya Berkebun Lagi.*`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan Bibit Anggur Kamu *100* Untuk Bisa Berkebun`)
                              } else m.reply(`Pastikan Bibit Jeruk Kamu *100* Untuk Bisa Berkebun`)
                          } else m.reply(`Pastikan Bibit Pisang Kamu *100* Untuk Bisa Berkebun`)
                      } else m.reply(`Pastikan Bibit Apel Kamu *100* Untuk Bisa Berkebun`)
                  } else m.reply(`Pastikan Bibit Mangga Kamu *100* Untuk Bisa Berkebun`)
              }
handler.help = ['kebun1']
handler.tags = ['rpg']
handler.command = /^(kebun1)/i
handler.group = true
handler.limit = 1
handler.register = false

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}