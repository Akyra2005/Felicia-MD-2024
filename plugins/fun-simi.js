import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, text }) => {
    if (!text) throw `hah?`;

    let [trigger, message] = text.split("|").map(v => v.trim());
    let apiEndpoint = trigger ? "http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=" + encodeURIComponent(message) : "https://api.simsimi.net/v2/?text=" + text + "&lc=id";

    let api = await fetch(apiEndpoint);
    let res = await api.json();

    let translatedMessage = '';
    if (trigger) {
        let translationApi = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + res.cnt);
        let translatedResponse = await translationApi.json();
        translatedMessage = translatedResponse[0][0][0];
    }

    let replyText = `${translatedMessage || res.success}`;
    m.reply(replyText, null, m.mentionedJid ? {
        mentions: conn.parseMention(m.text)
    } : {});
};

handler.command = ["felicia"];
handler.tags = ["fun"];
handler.help = ["felicia <pesan>"];

export default handler;