import axios from 'axios'
import moment from 'moment-timezone'

let handler = async (m, { conn, text }) => {
if (!text) throw `Format: *.githubstalk Nama Pengguna*`
let Quer = text.replace("https://github.com/", "").replace("@", "")
axios.get(`https://api.github.com/users/${Quer}`)
.then((res) =>{
let {
 login, 
 type,
 name,
 followers, 
 following, 
 created_at, 
 updated_at,
 public_gists,
 public_repos,
 twitter_username,
 bio,
 hireable,
 email,
 location, 
 blog,
 company,
 avatar_url,
 html_url
} = res.data
var teks = `Nama Pengguna: *${login}*
Nama Panggilan: *${name}*
Pengikut: *${followers}*
Mengikuti: *${following}*
Intisari Umum: *${public_gists}*
Repo Publik: *${public_repos}*
Twitter: *${twitter_username==null?'-':twitter_username}*
Email: *${email==null?'-':email}*
Lokasi: *${location==null?'-':location}*
Blog: *${blog}*
Tautan: *${html_url}*
Waktu Dibuat:
  - Tanggal: *${moment(created_at).tz('Asia/Jakarta').format('DD-MM-YYYY')}*
  - Waktu: *${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss')}*
Waktu Diperbarui:
  - Tanggal: *${moment(updated_at).tz('Asia/Jakarta').format('DD-MM-YYYY')}*
  - Waktu: *${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss')}*
Bio: *${bio}*`
conn.sendFile(m.chat, avatar_url, 'github-stalk.png', teks, m)
})

}
handler.help = ['githubstalk']
handler.tags = ['internet']
handler.command = /^(githubstalk)$/i
handler.limit = 2
handler.register = false
export default handler