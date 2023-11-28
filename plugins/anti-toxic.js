const isToxic = /(anj[kg]|ajn[gk]|a?njin[gk]|bajingan|b[a]?[n]?gsa?t|ko?nto?l|me?me?[kq]|pe?pe?[kq]|meki|titi[t,d]|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|[kng]e?nto?[t,d]|jembut|bego|dajjal|janc[uo]k|pantek|puki?(mak)?|kimak|kampang|lonte|col[i,mek]|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole|a[su,w,yu])/i;

import axios from "axios"
import fetch from "node-fetch"

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        var tes = await Analyze(m.text)
var shipverdict = [
    "❤️  ❤️  ❤️  ❤️  ❤️", //1-20
    "☠️  ❤️  ❤️  ❤️  ❤️", //21-40
    "☠️  ☠️  ❤️  ❤️  ❤️",
    "☠️  ☠️  ☠️  ❤️  ❤️",
    "☠️  ☠️  ☠️  ☠️  ❤️",
    "☠️  ☠️  ☠️  ☠️  ☠️"
];
var shipfooter = [
     "*Kamu Sangat Ramah, Senang Sekali Mengenal Anda*",
     "*Kamu Tidak Terlalu Toxic, Menyenangkan?*",
     "*Sepertinya Kamu Toxic, Tenanglah*",
     "*Jangan Terlalu Toxic, Kamu Santai Saja*",
     "*Tidak Ada Lagi Yang Bisa Aku Katakan, Kamu Benar-Benar Orang Paling Toxic Di Dunia*",
     "*Meter Toxicmu Juga Melebihi 100%*"
];

const toxicity = Number(tes.toxicity * 100).toFixed(2)
let sIndexer;
if (toxicity < 15) {
    sIndexer = 0
} else if ((toxicity > 14) && (toxicity < 35)) {
    sIndexer = 1
} else if ((toxicity > 34) && (toxicity < 51)) {
    sIndexer = 2
} else if ((toxicity > 50) && (toxicity < 76)) {
    sIndexer = 3
} else if ((toxicity > 75) && (toxicity < 95)) {
    sIndexer = 4
} else sIndexer = 5

var caption = `*TINGKATAN TOXIC*

${shipverdict[sIndexer]}
${shipfooter[sIndexer]}
`
await this.reply(m.chat, `*KATA ANEH TERDETEKSI* ${isBotAdmin ? '' : '\n\n*Bot Bukan Admin*'}`, m)
if (isBotAdmin && bot.restrict) {
            // await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('*Semoga Harimu Senin Terus*')
    }
    return !0
}


async function Analyze(teks) {
try {
            const result = await axios.post("https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyDh6d2S3S4zOuZSgyySRcnj8uZMNJ6kdFQ", {
                comment: {
                    text: teks,
                    type: 'PLAIN_TEXT'
                },
                languages: ['id'],
                requestedAttributes: { SEVERE_TOXICITY: {}, INSULT: {} }
            });
            return { toxicity: result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value, insult: result.data.attributeScores.INSULT.summaryScore.value, combined: (result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value + result.data.attributeScores.INSULT.summaryScore.value) / 2 };
        }
        catch (e) {
            console.error(e);
            return { toxicity: NaN, insult: NaN, combined: NaN };
        }
}