let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw '*Kamu Belum Memiliki Faction*';
  }

  let orgData = users[sender].organization;

  // Memeriksa apakah pengguna memiliki cukup money untuk mengganti nama organisasi
  if (users[sender].money < 30000) {
    throw '*Money Tidak Mencukupi*';
  }

  // Mendapatkan argumen dari pesan
  let newName = m.text.split(' ')[1];
  if (!newName) {
    throw '';
  }

  // Mengurangi money dari pengguna
  users[sender].money -= 30000;

  // Mengganti nama organisasi
  users[sender].name = newName;

  conn.reply(m.chat, `Nama Faction Berhasil Diubah Menjadi *${newName}*`, m);
};

handler.help = ['changefctname <nama_baru>'];
handler.tags = ['rpg'];
handler.command = /^changefctname$/i;
handler.group = true;

export default handler;
