let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 2) ? 'Novice I'
          : ((user.level >= 2) && (user.level <= 30)) ? 'Novice II'
          : ((user.level >= 30) && (user.level <= 60)) ? 'Novice III'
          : ((user.level >= 60) && (user.level <= 90)) ? 'Novice IV'
          : ((user.level >= 90) && (user.level <= 120)) ? 'Apprentice I'
          : ((user.level >= 120) && (user.level <= 150)) ? 'Apprentice II'
          : ((user.level >= 150) && (user.level <= 180)) ? 'Apprentice III'
          : ((user.level >= 180) && (user.level <= 210)) ? 'Apprentice IV'
          : ((user.level >= 210) && (user.level <= 240)) ? 'Journeyman I'
          : ((user.level >= 240) && (user.level <= 270)) ? 'Journeyman II'
          : ((user.level >= 270) && (user.level <= 300)) ? 'Journeyman III' 
          : ((user.level >= 300) && (user.level <= 330)) ? 'Journeyman IV' 
          : ((user.level >= 330) && (user.level <= 360)) ? 'Adept I' 
          : ((user.level >= 360) && (user.level <= 390)) ? 'Adept II' 
          : ((user.level >= 390) && (user.level <= 420)) ? 'Adept III'
          : ((user.level >= 420) && (user.level <= 450)) ? 'Adept IV'
          : ((user.level >= 450) && (user.level <= 480)) ? 'Elite I'
          : ((user.level >= 480) && (user.level <= 510)) ? 'Elite III'
          : ((user.level >= 510) && (user.level <= 540)) ? 'Elite IV⁴'
          : ((user.level >= 540) && (user.level <= 570)) ? 'Master I' 
          : ((user.level >= 570) && (user.level <= 600)) ? 'Master III' 
          : ((user.level >= 600) && (user.level <= 630)) ? 'Master IV' 
          : ((user.level >= 630) && (user.level <= 660)) ? 'Grandmaster I' 
          : ((user.level >= 660) && (user.level <= 690)) ? 'Grandmaster II' 
          : ((user.level >= 690) && (user.level <= 720)) ? 'Grandmaster III' 
          : ((user.level >= 720) && (user.level <= 750)) ? 'Grandmaster IV'
          : ((user.level >= 750) && (user.level <= 780)) ? 'Legend I'
          : ((user.level >= 780) && (user.level <= 810)) ? 'Legend II'
          : ((user.level >= 810) && (user.level <= 840)) ? 'Legend IIII⁴'
          : ((user.level >= 840) && (user.level <= 870)) ? 'Legend IV'
          : ((user.level >= 870) && (user.level <= 900)) ? 'Supreme'
  user.role = role
  await conn.reply(m.chat, "*Kamu Adalah:* " + user.role, m)
}
handler.help = ['role']
handler.tags = ['rpg']
handler.command = /^(role|levelrole)$/i
handler.register = false
export default handler