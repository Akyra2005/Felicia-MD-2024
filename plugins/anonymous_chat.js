async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return this.reply(m.chat, `*Kamu Tidak Sedang Berada Di Anonymous Chat*\n\n*.start* - Untuk Mencari Partner`, m)
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await this.reply(other, `*Partner Meninggalkan Chat*\n\n*.start* - Untuk Mencari Partner`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.reply(m.chat, `_Kamu masih berada di dalam anonymous chat, menunggu partner_\n\nKetik .leave ( untuk keluar )`, m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.reply(room.a, `*Partner Ditemukan*\n\n*.next* - Untuk Melewati Partner`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.reply(room.b, `*Partner Ditemukan*\n\n*.next* - Untuk Melewati Partner`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.reply(m.chat, `*Menunggu Partner...*\n\n*.leave* - Untuk Keluar Dari Anonymous Chat`, m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
handler.register = true
export default handler