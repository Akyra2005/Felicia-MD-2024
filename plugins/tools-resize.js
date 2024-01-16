// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw 'Format: *.resize Lebar Tinggi*'
	if (!toheight) throw 'Format: *.resize Lebar Tinggi*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "Balas Media Dengan Perintah *.resize Lebar Tinggi*"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime *${mime}* Tidak Didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*KOMPRES MEDIA*

*Sebelum*
- Lebar: *${size.before.width}*
- Tinggi: *${size.before.height}*

*Setelah*
- Lebar: *${size.after.width}*
- Tinggi: *${size.after.height}*

*Tautan*
Original: *${link}*
Kompres: *${linkcompres}*`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tools']
handler.command = /^(resize)$/i
handler.limit = 1
export default handler
