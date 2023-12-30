let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw '*Kamu Belum Memiliki Faction*';
  }

  let orgData = users[sender].organization;

  // Mendapatkan argumen dari pesan
  let [trainCount, trainLevel] = m.text.split(' ').slice(1);

  // Validasi argumen
  if (!trainCount || !trainLevel) {
    throw 'Format: *.train JumlahPengikut TingkatLatihan*\nContoh: *.train 5 10*';
  }

  trainCount = parseInt(trainCount);
  trainLevel = parseInt(trainLevel);

  // Validasi jumlah pengikut yang dilatih
  if (isNaN(trainCount) || trainCount <= 0 || trainCount > orgData.followers.length) {
    throw '*Jumlah Pengikut Yang Dilatih Tidak Valid*';
  }

  // Validasi tingkat pelatihan
  if (isNaN(trainLevel) || trainLevel < 1 || trainLevel > 10) {
    throw '*Tingkat Latihan Minimal 1 Dan Maksimal 10*';
  }

  let trainCost = 1000 * trainCount * trainLevel; // Biaya pelatihan
  let trainTime = 10 * 60 * 1000 * trainCount * trainLevel; // Waktu pelatihan (dalam milidetik)

  // Mengurangi waktu pelatihan berdasarkan level artefak Time Shifter
  let timeShifterLevel = Math.min(users[sender].timeShifter, 5); // Maksimal level artefak Time Shifter adalah 5
  let timeShifterReduction = timeShifterLevel * 0.05; // Pengurangan waktu pelatihan per level artefak Time Shifter
  trainTime -= trainTime * timeShifterReduction;

  // Validasi uang pengguna
  if (users[sender].money < trainCost) {
    throw '*Uang Kamu Tidak Cukup Untuk Melatih Pengikut*';
  }

  // Validasi cooldown pelatihan
  if (users[sender].lastbansos && users[sender].lastbansos > Date.now()) {
    let cooldownTime = users[sender].lastbansos - Date.now();
    throw `Tunggu *${formatTime(cooldownTime)}* Untuk Melatih Lagi`;
  }

  // Melakukan pelatihan pengikut
  let message = `*LATIHAN PENGUASAAN*\n\n`;
  message += `Jumlah Pengikut Dilatih: ${trainCount}\n`;
  message += `Tingkat Pelatihan: ${trainLevel}\n`;
  message += `Biaya: ${trainCost} Money\n`;
  message += `Waktu Pelatihan: ${formatTime(trainTime)}\n\n`;

  // Simulasi peningkatan level pengikut
  for (let i = 0; i < trainCount; i++) {
    let follower = orgData.followers[i];
    let levelIncrease = Math.floor(Math.random() * (trainLevel * 10 + 1)); // Peningkatan level acak antara 0 hingga trainLevel * 10
    follower.level += levelIncrease;

    message += `Pengikut ke-${i + 1}:\n`;
    message += `Nama: ${follower.name}\n`;
    message += `Level Sebelumnya: ${follower.level - levelIncrease}\n`;
    message += `Level Saat Ini: ${follower.level}\n\n`;
  }

  // Mengurangi uang pengguna
  users[sender].money -= trainCost;

  // Menjalankan waktu pelatihan
  setTimeout(() => {
    // Menghapus cooldown pelatihan setelah selesai
    users[sender].lastbansos = null;
    conn.reply(m.chat, `*Pelatihan Selesai, Pengikut Anda Telah Naik Level*`, m);
  }, trainTime);

  // Mengatur cooldown pelatihan
  users[sender].lastbansos = Date.now() + trainTime;

  conn.reply(m.chat, message, m);
};

handler.help = ['train <jumlah> <tingkat>'];
handler.tags = ['rpg'];
handler.command = /^train$/i;
handler.group = true;

// Fungsi untuk format waktu dalam hh:mm:ss
function formatTime(ms) {
  let seconds = Math.floor(ms / 1000);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default handler;