import { extractMetadata } from 'wa-sticker-formatter'
import { format } from 'util'

let handler = async (m, { conn }) => {
    if (m.quoted && /sticker/.test(m.quoted.mtype)) {
        let img = await m.quoted.download()
        if (!img) throw '*Gagal Ekstraksi Data Meta Stiker*'
        let metaData = await extractMetadata(img)
        await m.reply(format(metaData))
    } else throw 'Balas Stiker Dengan Perintah *.getexif*'
}
handler.help = handler.alias = ['getexif']
handler.tags = ['tools']
handler.command = /^(getexif)$/i
handler.register = false
export default handler