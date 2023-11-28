import { readFileSync } from 'fs'
let handler = async (m, {conn, command, args, usedPrefix}) => {
let ktnya = ['\n\n\n' + htjava + ' Mungkin menu ini bermanfaat? ' + htjava,
 '\n\n\n' + htjava + ' Terimakasih sudah menggunakan bot ini ' + htjava,
 '\n\n\n' + htjava + ' Semoga gak erorr ' + htjava,
 '\n\n\n' + htjava + ' Jika lama kemungkiman erorr atau delay ' + htjava,
 '\n\n\n' + htjava + ' Menampilkan menu ' + htjava,
 '\n\n\n' + htjava + ' Wait... ' + htjava,
 '\n\n\n' + htjava + ' Dua tiga kucing berlari ' + htjava,
 '\n\n\n' + htjava + ' Bentar bang akan kutampilkan menunya ' + htjava,
 '\n\n\n' + htjava + ' Prosess... ' + htjava]
let ktx = ktnya.getRandom()
const tekss = `Libat Di *.menulist rpg* Atau *.menulist game*`
const listMessage = {
  text: tekss,
  footer: '...',
  
}
  	return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
///AKSJDDJ
handler.help = ['game']
handler.tags = ['rpg']
handler.command = /^gam(es|ing|e)$/i 

export default handler