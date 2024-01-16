let handler = async (m, { conn, text }) => {

if (!text) throw 'Format: *.ytcomment Teks*'

conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {

avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),

comment: text,

username: conn.getName(m.sender)

}), 'error.png', '*Sukses*', m)

}

handler.help = ['ytcomment <comment>']

handler.tags = ['maker'] 

handler.command = /^(ytcomment)$/i
handler.register = false
handler.limit = 1

export default handler