let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (users[sender].organization) {
    throw '*Kamu Sudah Memiliki Sebuah Faction*';
  }

  let orgName = m.text.split(' ')[1];

  if (!orgName) {
    throw 'Format:*.createorg Nama Faction*';
  }

  users[sender].organization = {
    name: orgName,
    level: 0,
    totalFollowers: 0,
    followersDestroyed: 0,
    organizationsDestroyed: 0,
    followers: []
  };

  conn.reply(m.chat, `Faction *"${orgName}"* Telah Berhasil Dibuat`, m);
};

handler.help = ['createorg <nama>'];
handler.tags = ['rpg'];
handler.command = /^createorg$/i;
handler.group = true;

export default handler;
