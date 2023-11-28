const rewards = {
    limit: Math.floor(Math.random() * (40 - 10 + 1)) + 10,
};
const cooldown = 33320000;
const allowedGroup = 'https://chat.whatsapp.com/E01trCuEsNM22uL4hB7ktS'; // Ganti dengan link grup yang diizinkan

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];

    // Cek apakah pengguna berada di grup yang diizinkan
    let isAllowedGroup = m.isGroup && m.chat === allowedGroup;
    if (!isAllowedGroup) {
        throw 'Maaf, Klaim Limit Hanya Dapat Dilakukan Di Grup *https://chat.whatsapp.com/E01trCuEsNM22uL4hB7ktS*';
    }

    if (user.limit > 1) {
        throw '*Anda Masih Memiliki Limit*';
    }

    if (new Date() - user.lastclaim < cooldown) {
        throw `Anda Telah Mengklaim Limit Hari Ini, Silakan Tunggu Hingga *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`;
    }

    let text = '';
    for (let reward of Object.keys(rewards)) {
        if (!(reward in user)) continue;
        user[reward] += rewards[reward];
        text += `*+${rewards[reward]} Limit 🎟️*`;
    }

    conn.reply(m.chat, text.trim(), m);
    user.lastclaim = new Date() * 1;
};

handler.help = ['claimlimit'];
handler.tags = ['main'];
handler.command = /^(claim|gratis)$/i;

handler.cooldown = cooldown;

export default handler;
