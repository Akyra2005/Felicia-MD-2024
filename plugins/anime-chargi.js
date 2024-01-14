import genshin from 'genshin'

let handler = async (m, { text }) => {
	
let list = ['amber','ayaka','baizhu','barbara','beidou','bennett','childe','chongyun','cyno','dainsleif','diluc','diona','fischl','ganyu','jean','kaeya','keqing','klee','lisa','mona','ningguang','noelle','qiqi','razor','sucrose','venti','xiangling','xiao','xingqiu','xinyan','zhongli']

if (!list.includes(text.toLowerCase())) return m.reply('*List of Chara GIs:*\n\n' + list.map(v => v).join('\n'))

let chara = await genshin.characters(text.toLowerCase())
let { name, quote, cv, description, image, city, element, weapon, rating } = chara

let capt = `
Nama: *${name}*
CV: *${cv}*
Kota: *${city}*
Elemen: *${element}*
Senjata: *${weapon}*
Peringkat: *${rating}*
Mengutip: *${quote}*
Keterangan:
${description}
`.trim()

await conn.sendFile(m.chat, image, 'gi.jpg', capt, m)

}
handler.help = ['charagi']
handler.command = /^charagi$/i
handler.tags = ['internet']
handler.register = false
export default handler