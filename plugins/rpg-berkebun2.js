const timeout = 10800000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebun + 10800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Kamu Harus Memiliki Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, & Bibit Anggur Minimal 90 Bibit*\n\nKetik :\n${usedPrefix}buy bibitmangga 90\n`)                                  
                                     if (new Date - global.db.data.users[m.sender].lastberkebun< 10800000) throw `*Anda Sudah Menanam*\n*Mohon Tunggu Hasil Panenmu*\nTunggu Selama ${msToTime(time - new Date())} Lagi`
                                     if (global.db.data.users[m.sender].skillgardening < 1) throw `*Minimal Gardening Ability Kamu Level 1*`
                                     if (global.db.data.users[m.sender].bibitmangga > 89) {
                                 	if (global.db.data.users[m.sender].bibitapel > 89) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 89) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 89) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 89) {
                                     let pisangpoin = `${Math.floor(Math.random() * 110)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 110)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 110)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 110)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 110)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1                                 
                                     global.db.data.users[m.sender].bibitpisang -= 90
                                     global.db.data.users[m.sender].bibitanggur -= 90
                                     global.db.data.users[m.sender].bibitmangga -= 90
                                     global.db.data.users[m.sender].bibitjeruk -= 90
                                     global.db.data.users[m.sender].bibitapel -= 90
                                     global.db.data.users[m.sender].lastberkebun = new Date * 1
                                     let hsl = `Selamat ${conn.getName(m.sender)}, Kamu Mendapatkan : \n+${pisangpoin} Pisang 🍌\n+${manggapoin} Mangga 🍋\n+${anggurpoin} Anggur 🍇\n+${jerukpoin} Jeruk 🍊\n+${apelpoin} Apel 🍎`
                                     conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `*Saatnya Berkebun Lagi.*`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan Bibit Anggur Kamu *90* Untuk Bisa Berkebun`)
                              } else m.reply(`Pastikan Bibit Jeruk Kamu *90* Untuk Bisa Berkebun`)
                          } else m.reply(`Pastikan Bibit Pisang Kamu *90* Untuk Bisa Berkebun`)
                      } else m.reply(`Pastikan Bibit Apel Kamu *90* Untuk Bisa Berkebun`)
                  } else m.reply(`Pastikan Bibit Mangga Kamu *90* Untuk Bisa Berkebun`)
              }
handler.help = ['kebun2']
handler.tags = ['rpg']
handler.command = /^(kebun2)/i
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