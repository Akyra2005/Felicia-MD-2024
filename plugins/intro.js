import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let pp = await conn.profilePictureUrl(m.chat);

        let kartuIntro = `
╭─「 KARTU INTRO 」
│ Nama     : 
│ Gender   : 
│ Umur      : 
│ Hobby    : 
│ Kelas      : 
│ Asal         : 
│ Status     : 
╰─•══════════════♡
        `;

        m.reply(kartuIntro);
    } catch (error) {
        console.error(error);
        m.reply('*E R R O R*');
    }
};

handler.help = ['intro'];
handler.tags = ['main'];
handler.command = /^(intro)$/i;

export default handler;
