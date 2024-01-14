/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let opponent = m.mentionedJid[0]
  
  if (!user || !global.db.data.users[opponent]) {
    return m.reply('Format: *.fight @Tag*')
  }

  let fightLevel = parseInt(text.trim()) || 1;

  if (fightLevel < 1 || fightLevel > 10) {
    return m.reply('Pilih level pertarungan antara 1 dan 10.')
  }
  
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  
  let alasanKalah = `${pickRandom(['bodoh gitu doang aja kalah tolol lu di denda','lemah lu kontol mending lu di rumah aja dah lu di denda dek','Jangan beratem kalo cupu dek wkwkwk kamu di denda','Dasar tolol lawan itu doang aja ga bisa lu di denda','Hadehh sono lu mending di rumah aja deh lu di denda'])}`
  let alasanMenang = `${pickRandom(['kamu berhasil menggunakan kekuatan elemental untuk menghancurkan pertahanan lawan dan mendapatkan','kamu berhasil melancarkan serangan mematikan dengan gerakan akrobatik yang membingungkan lawan, dan mendapatkan','Kamu berhasil menang karena baru selesai coli dan mendapatkan','Kamu berhasil menang karena menyogok lawan dan mendapatkan','Kamu berhasil menang karena bot merasa kasihan sama kamu dan mendapatkan','Kamu berhasil menang karena kamu melawan orang cupu dan mendapatkan'])}`

  let manaCost = 100;
  let betAmount = manaCost * fightLevel;
  
  if (user.mana < manaCost) {
    return m.reply('*Mana Anda Tidak Mencukupi*')
  }
  
  if (user.lastWar && (new Date - user.lastWar) < 10000) {
    let remainingTime = Math.ceil((10000 - (new Date() - user.lastWar)) / 1000)
    return m.reply(`*Anda Harus Menunggu ${remainingTime} Detik Sebelum Dapat Bertarung Lagi*`)
  }
  
  let opponentName = conn.getName(opponent)
  let opponentLevel = global.db.data.users[opponent].level
  
  m.reply('*Mempersiapkan Arena...*') 
  
  setTimeout(() => {
    m.reply('*Arena Disiapkan...*') 
    
    setTimeout(() => {
      m.reply('*Memulai Pertarungan...*')
      
      setTimeout(() => {
        let userLevel = user.level + fightLevel;
        let opponentEffectiveLevel = opponentLevel + fightLevel;

        let result = Math.random() >= (opponentEffectiveLevel / (userLevel + opponentEffectiveLevel));
        let wonAmount = result ? betAmount : -betAmount;

        user.mana -= manaCost;
        user.money += wonAmount;
        global.db.data.users[opponent].money -= wonAmount;
        
        let caption = `*⚔️ F I G H T ⚔️*\n\n`
        caption += `Lawan Anda Adalah: *${opponentName}*\n📊 Level Anda: *${userLevel}*\n📊 Level Lawan: *${opponentEffectiveLevel}*\n\n`;
        
        if (result) {
          caption += `*Selamat Anda Menang*\n+${betAmount} 🪙 Flint\n-${manaCost} 💧 Mana\n`
          caption += `🪙 Flint Anda Saat Ini: *${user.money}*\n💧 Mana Anda Saat Ini: *${user.mana}*\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/2b5f0e9939726ace14cae.mp4', 'You_Win.mp4', caption, m)
        } else {
          caption += `*Selamat Anda Kalah*\n-${betAmount} 🪙 Flint\n-${manaCost} 💧 Mana\n`
          caption += `🪙 Flint Anda Saat Ini: *${user.money}*\n💧 Mana Anda Saat Ini: *${user.mana}*\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/2b5f0e9939726ace14cae.mp4', 'You_Lose.mp4', caption, m)
        }

        user.lastWar = new Date() 
        
        setTimeout(() => {
          m.reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000)
      }, 2000)
    }, 2000) 
  }, 2000) 
}


handler.help = ['bertarung @user', 'fight @user']
handler.tags = ['game']
handler.command = /^(fight|bertarung)$/i
handler.register = false
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}