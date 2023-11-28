import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'
import can from 'knights-canvas'

export async function before(m) {
	let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

	if (user.level <= 5) {
		user.role = 'Newbie ㋡'
	} else if (user.level <= 10) {
		user.role = 'Beginner Grade 1 ⚊¹'
	} else if (user.level <= 20) {
		user.role = 'Beginner Grade 2 ⚊²'
	} else if (user.level <= 30) {
		user.role = 'Beginner Grade 3 ⚊³'
	} else if (user.level <= 40) {
		user.role = 'Beginner Grade 4 ⚊⁴'
	} else if (user.level <= 50) {
		user.role = 'Private Grade 1 ⚌¹'
	} else if (user.level <= 60) {
		user.role = 'Private Grade 2 ⚌²'
	} else if (user.level <= 70) {
		user.role = 'Private Grade 3 ⚌³'
	} else if (user.level <= 80) {
		user.role = 'Private Grade 4 ⚌⁴'
	} else if (user.level <= 90) {
		user.role = 'Private Grade 5 ⚌⁵'
	} else if (user.level <= 100) {
		user.role = 'Corporal Grade 1 ☰¹'
	} else if (user.level <= 110) {
		user.role = 'Corporal Grade 2 ☰²'
	} else if (user.level <= 120) {
		user.role = 'Corporal Grade 3 ☰³'
	} else if (user.level <= 130) {
		user.role = 'Corporal Grade 4 ☰⁴'
	} else if (user.level <= 140) {
		user.role = 'Corporal Grade 5 ☰⁵'
	} else if (user.level <= 150) {
		user.role = 'Sergeant Grade 1 ≣¹'
	} else if (user.level <= 160) {
		user.role = 'Sergeant Grade 2 ≣²'
	} else if (user.level <= 170) {
		user.role = 'Sergeant Grade 3 ≣³'
	} else if (user.level <= 180) {
		user.role = 'Sergeant Grade 4 ≣⁴'
	} else if (user.level <= 190) {
		user.role = 'Sergeant Grade 5 ≣⁵'
	} else if (user.level <= 200) {
		user.role = 'Staff Grade 1 ﹀¹'
	} else if (user.level <= 210) {
		user.role = 'Staff Grade 2 ﹀²'
	} else if (user.level <= 220) {
		user.role = 'Staff Grade 3 ﹀³'
	} else if (user.level <= 230) {
		user.role = 'Staff Grade 4 ﹀⁴'
	} else if (user.level <= 240) {
		user.role = 'Staff Grade 5 ﹀⁵'
	} else if (user.level <= 250) {
		user.role = 'Sergeant Grade 1 ︾¹'
	} else if (user.level <= 260) {
		user.role = 'Sergeant Grade 2 ︾²'
	} else if (user.level <= 270) {
		user.role = 'Sergeant Grade 3 ︾³'
	} else if (user.level <= 280) {
		user.role = 'Sergeant Grade 4 ︾⁴'
	} else if (user.level <= 290) {
		user.role = 'Sergeant Grade 5 ︾⁵'
	} else if (user.level <= 300) {
		user.role = '2nd Lt. Grade 1 ♢¹ '
	} else if (user.level <= 310) {
		user.role = '2nd Lt. Grade 2 ♢²'
	} else if (user.level <= 320) {
		user.role = '2nd Lt. Grade 3 ♢³'
	} else if (user.level <= 330) {
		user.role = '2nd Lt. Grade 4 ♢⁴'
	} else if (user.level <= 340) {
		user.role = '2nd Lt. Grade 5 ♢⁵'
	} else if (user.level <= 350) {
		user.role = '1st Lt. Grade 1 ♢♢¹'
	} else if (user.level <= 360) {
		user.role = '1st Lt. Grade 2 ♢♢²'
	} else if (user.level <= 370) {
		user.role = '1st Lt. Grade 3 ♢♢³'
	} else if (user.level <= 380) {
		user.role = '1st Lt. Grade 4 ♢♢⁴'
	} else if (user.level <= 390) {
		user.role = '1st Lt. Grade 5 ♢♢⁵'
	} else if (user.level <= 400) {
		user.role = 'Major Grade 1 ✷¹'
	} else if (user.level <= 410) {
		user.role = 'Major Grade 2 ✷²'
	} else if (user.level <= 420) {
		user.role = 'Major Grade 3 ✷³'
	} else if (user.level <= 430) {
		user.role = 'Major Grade 4 ✷⁴'
	} else if (user.level <= 440) {
		user.role = 'Major Grade 5 ✷⁵'
	} else if (user.level <= 450) {
		user.role = 'Colonel Grade 1 ✷✷¹'
	} else if (user.level <= 460) {
		user.role = 'Colonel Grade 2 ✷✷²'
	} else if (user.level <= 470) {
		user.role = 'Colonel Grade 3 ✷✷³'
	} else if (user.level <= 480) {
		user.role = 'Colonel Grade 4 ✷✷⁴'
	} else if (user.level <= 490) {
		user.role = 'Colonel Grade 5 ✷✷⁵'
	} else if (user.level <= 500) {
		user.role = 'Brigadier Early ✰'
	} else if (user.level <= 510) {
		user.role = 'Brigadier Silver ✩'
	} else if (user.level <= 520) {
		user.role = 'Brigadier gold ✯'
	} else if (user.level <= 530) {
		user.role = 'Brigadier Platinum ✬'
	} else if (user.level <= 540) {
		user.role = 'Brigadier Diamond ✪'
	} else if (user.level <= 550) {
		user.role = 'Major General Early ✰'
	} else if (user.level <= 560) {
		user.role = 'Major General Silver ✩'
	} else if (user.level <= 570) {
		user.role = 'Major General gold ✯'
	} else if (user.level <= 580) {
		user.role = 'Major General Platinum ✬'
	} else if (user.level <= 590) {
		user.role = 'Major General Diamond ✪'
	} else if (user.level <= 600) {
		user.role = 'Lt. General Early ✰'
	} else if (user.level <= 610) {
		user.role = 'Lt. General Silver ✩'
	} else if (user.level <= 620) {
		user.role = 'Lt. General gold ✯'
	} else if (user.level <= 630) {
		user.role = 'Lt. General Platinum ✬'
	} else if (user.level <= 640) {
		user.role = 'Lt. General Diamond ✪'
	} else if (user.level <= 650) {
		user.role = 'General Early ✰'
	} else if (user.level <= 660) {
		user.role = 'General Silver ✩'
	} else if (user.level <= 670) {
		user.role = 'General gold ✯'
	} else if (user.level <= 680) {
		user.role = 'General Platinum ✬'
	} else if (user.level <= 690) {
		user.role = 'General Diamond ✪'
	} else if (user.level <= 700) {
		user.role = 'Commander Early ★'
	} else if (user.level <= 710) {
		user.role = 'Commander Intermediate ⍣'
	} else if (user.level <= 720) {
		user.role = 'Commander Elite ≛'
	} else if (user.level <= 730) {
		user.role = 'The Commander Hero ⍟'
	} else if (user.level <= 740) {
		user.role = 'Legends 忍'
    }

	if (before !== user.level) {
		let ini_txt = `*Selamat, Kamu Telah Naik Level*\n\nPeningkatan: *${before}* -> *${user.level}*`.trim()
		try {
			let image, data, pp
			try {
				pp = await this.profilePictureUrl(m.sender, 'image')
			} catch {
				pp = 'https://i.ibb.co/m53WF9N/avatar-contact.png'
			}
			image = await new can.Up().setAvatar(pp).toAttachment()
			data = image.toBuffer()
			await this.sendMessage(m.chat, { image: data, caption: ini_txt }, { quoted: m })
		} catch {
			await m.reply(ini_txt)
		}
	}
}
export const disabled = false
