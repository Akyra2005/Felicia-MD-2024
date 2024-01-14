let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {

    let a = text.split("|").slice(1)
    if (!a[1]) throw "Format: *" + usedPrefix + command + " Pertanyaan |Pilihan1|Pilihan2"
    if (a[12]) throw "*Maksimal Pilihan Adalah 12*\n\nFormat: *" + usedPrefix + command + " Pertanyaan |Pilihan1|Pilihan2"
    if (checkDuplicate(a)) throw "*Pilihan Tidak Boleh Sama*"
    let cap = "*Permintaan Polling Oleh* " + m.name + "\n*Pesan:* " + text.split("|")[0]

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })

}
handler.help = ["poll pertanyaan|pilihan|pilihan"]
handler.tags = ["group"]
handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i
handler.register = false
export default handler

function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}