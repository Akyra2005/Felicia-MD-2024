import fetch from "node-fetch";
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    text
}) => {
    conn.secmail = conn.secmail ? conn.secmail : {}
    let id = "secmail"

    let lister = [
        "create",
        "message",
        "delete"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return m.reply("Format: *" + usedPrefix + command + " Tipe*\n\n*Daftar Tipe:*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "create") {

            try {
                let eml = await random_mail()
                let info = eml[0].split('@')
                conn.secmail[id] = [
                    await m.reply("E-Mail: *" + eml[0] + "*\n" + "Login: *" + info[0] + "*\nDomain: *" + info[1] + "*\n\n*" + usedPrefix + command + " message* - Untuk Mengecek Pesan Masuk"),
                    eml[0],
                    info[0],
                    info[1]
                ]
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "message") {
            if (!conn.secmail[id]) return m.reply("*Tidak Ada Pesan, Buat Email Terlebih Dahulu*\n\nFormat: *" + usedPrefix + command + " create*")

            try {
                let eml = await get_mails(conn.secmail[id][2], conn.secmail[id][3])
                let teks = eml.map((v, index) => {
                    return `*E-Mail Ke ${index + 1}*
ID: *${v.id}*
Dari: *${v.from}*

Subjek: *${v.subject}*
Tanggal: *${v.date}*
   `.trim()
                }).filter(v => v).join("\n\n_____________________________________\n\n")
                await m.reply(teks || "*Kosong*" + "\n\n*" + usedPrefix + command + " delete* - Untuk Menghapus E-Mail")
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "delete") {
            if (!conn.secmail[id]) return m.reply("*Tidak Ada E-Mail Terpakai*")

            try {
                delete conn.secmail[id]
                await m.reply("*Sukses Menghapus E-Mail*")
            } catch (e) {
                await m.reply(eror)
            }
        }

    }
}
handler.help = ["secmail"]
handler.tags = ["tools"]
handler.command = /^(secmail)$/i
handler.register = false
handler.limit = 2
export default handler

function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatSize(sizeInBytes) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let index = 0;

    while (sizeInBytes >= 1024 && index < units.length - 1) {
        sizeInBytes /= 1024;
        index++;
    }

    return sizeInBytes.toFixed(2) + " " + units[index];
}

async function random_mail() {
    const link = "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id, domain) {
    const link = `https://www.1secmail.com/api/v1/?action=getMessages&login=${id}&domain=${domain}`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}