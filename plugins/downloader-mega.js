import { File } from "megajs"

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`Format: *${usedPrefix + command} Tautan*`);
        
        const file = File.fromURL(text);
        await file.loadAttributes();
        
        if (file.size >= 300000000) return m.reply('*Maksimal Ukuran File 300MB*');
        
        m.reply(`*Memproses Permintaan...*`);
        
        const data = await file.downloadBuffer();
        
        // Menambahkan ekstensi yang didukung (zip, rar, 7z, jpg, png) ke dalam daftar
        if (/mp4/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "video/mp4", filename: `${file.name}.mp4` }, { quoted: m });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/pdf", filename: `${file.name}.pdf` }, { quoted: m });
        } else if (/zip/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/zip", filename: `${file.name}.zip` }, { quoted: m });
        } else if (/rar/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-rar-compressed", filename: `${file.name}.rar` }, { quoted: m });
        } else if (/7z/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-7z-compressed", filename: `${file.name}.7z` }, { quoted: m });
        } else if (/jpg|jpeg/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/jpeg", filename: `${file.name}.jpg` }, { quoted: m });
        } else if (/png/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/png", filename: `${file.name}.png` }, { quoted: m });
        } else {
            return m.reply('*Format File Tidak Didukung*');
        }
    } catch (error) {
        return m.reply(`*E R R O R*`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
handler.register = false
handler.limit = 1
export default handler
