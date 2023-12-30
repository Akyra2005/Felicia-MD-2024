let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;
  let senderData = users[sender];

  if (!senderData.organization) {
    throw '*Kamu Belum Memiliki Faction*';
  }

  let target = m.mentionedJid[0];
  let targetData = users[target];

  if (!targetData || !targetData.organization) {
    throw '*Faction Target Tidak Ditemukan*';
  }

  let orgName = senderData.organization.name;
  let targetOrgName = targetData.organization.name;

  // Memeriksa apakah organisasi target telah menerima aliansi
  if (targetData.organization.allianceRequest && targetData.organization.allianceRequest === sender) {
    senderData.organization.alliances.push(target);
    targetData.organization.alliances.push(sender);
    delete targetData.organization.allianceRequest;

    conn.reply(m.chat, `*Faction ${orgName} Dan ${targetOrgName} Telah Membentuk Aliansi*`, m);
  } else {
    // Mengajak organisasi target untuk aliansi
    targetData.organization.allianceRequest = sender;

    conn.reply(m.chat, `*Faction ${orgName} Telah Mengajak ${targetOrgName} Untuk Aliansi*\nTunggu Persetujuan Dari Faction Tersebut.`, m);
  }
};

handler.help = ['inviteorg @target'];
handler.tags = ['rpg'];
handler.command = /^inviteorg$/i;
handler.group = true;

export default handler;
