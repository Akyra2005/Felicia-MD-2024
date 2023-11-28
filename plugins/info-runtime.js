import fs from "fs";
let handler = async (m, { conn, args, command }) => {
  let _muptime;
  if (process.send) {
    process.send("uptime");
    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(_muptime);
  await conn.sendReact(m.chat, "🕒", m.key)
  await conn.sendReact(m.chat, "1⃣", m.key)
  await conn.sendReact(m.chat, "2⃣", m.key)
  await conn.sendReact(m.chat, "3⃣", m.key)
  await conn.sendReact(m.chat, "☑️", m.key)
  conn.reply(m.chat, `${htki} *R U N T I M E* ${htka}\n${muptime}\n`, m, {
  thumbnail: fs.readFileSync("./thumbnail.jpg"),
    contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
        mediaUrl: sig, 
        mediaType: 1,
        description: "anu",
        title: bottime,
        body: wm2,
        previewType: 0,
        thumbnailUrl : 'https://telegra.ph/file/f4d782b10745606a5b14b.jpg', 
        sourceUrl: sgc,
        renderLargerThumbnail: true       
      },
    },
  });
  await conn.sendFile(m.chat, './mp3/old1.mp3', '', null, m, true)
};

handler.help = ["runtime"];
handler.command = ["runtime", "rt1"];
export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    d,
    " *Hari*\n ",
    h,
    " *Jam*\n ",
    m,
    " *Menit*\n ",
    s,
    " *Detik* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
