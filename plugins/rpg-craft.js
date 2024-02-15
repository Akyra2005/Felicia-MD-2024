let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

  let type = (args[0] || '').toLowerCase()

  let _type = (args[0] || '').toLowerCase()

  let user = global.db.data.users[m.sender]

  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0

  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0

  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0

  let buf = user.atm

  let buff = (buf < 10 ? '5' : '' || buf < 20 ? '10' : '' || buf < 25 ? '15' : '' || buf < 30 ? '20' : '' || buf < 35 ? '25' : '' || buf < 40 ? '30' : '' || buf < 45 ? '55' : '' || buf < 50 ? '60' : '' || buf < 55 ? '65' : '' || buf < 60 ? '70' : '' || buf < 65 ? '75' : '' || buf < 70 ? '80' : '' || buf < 75 ? '85' : '' || buf < 80 ? '90' : '' || buf < 85 ? '95' : '' || buf < 90 ? '100' : '' || buf < 95 ? '105' : '' || buf < 100 ? '110' : '')

  let botol = global.botwm



let lgocraft = `

「 C R A F T I N G 」

`



  let caption = `

MATERIALS

Pickaxe ⛏️

- 40 Kayu

- 20 Batu

- 20 Iron

- 80 String

Level Maks 11 📊



Ax 🛶

- 40 Kayu

- 20 Batu

- 20 Iron

- 80 String

Level Maks 11 📊



Sword ⚔️

- 40 Kayu

- 60 Iron

Level Maks 11 📊



Fishingrod 🎣

- 40 Kayu

- 8 Iron

- 80 String

Level Maks 4 📊



Armor 🥼

- 120 Iron

- 4 Emerald

- 20 Diamond

Level Maks 11 📊



ATM 💳

- ${5 * buff} Plastik PVC

- ${1 * buff} Semikonduktor

- ${40000 * buff} Money (Biaya Admin)

Level Maks 20 📊

`

const sections = [

   {

	title: "𝗖𝗥𝗔𝗙𝗧 𝗔 𝗧𝗢𝗢𝗟",

	rows: [

	    {title: "Sword ⚔️", rowId: ".craft2 sword", description: "Crafting A Sword"},

	    {title: "Pickaxe ⛏️", rowId: ".craft2 pickaxe", description: "Crafting A Pickaxe"},

	    {title: "Ax 🛶", rowId: ".craft2 ax", description: "Crafting A Ax"},

	    {title: "Fishingrod 🎣", rowId: ".craft2 fishingrod", description: "Crafting A Fishingrod"},

	    {title: "Armor 🥼", rowId: ".craft2 armor", description: "Crafting A Armor"},

	    {title: "ATM 💳", rowId: ".craft2 atm", description: "Crafting A Atm"},

	]

    },

]



const listMessage = {

  text: caption,

  footer: wm,

  title: lgocraft,

  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",

  sections

}



  try {

    if (/craft2|Crafting/i.test(command)) {

      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)

        switch (type) {

          case 'pickaxe':

          if (user.pickaxe > 10) return m.reply('Kamu Sudah Memilik Ini')

            if(user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n40 Kayu🪵\n20 Iron⛓\n80 String🕸️\n20 Batu🪨*`)

            global.db.data.users[m.sender].wood -= 40

            global.db.data.users[m.sender].iron -= 20

            user.rock -= 20

            global.db.data.users[m.sender].string -= 80

            global.db.data.users[m.sender].pickaxe += 1

            user.pickaxedurability = 40

            m.reply("Sukses Membuat 1 Pickaxe 🔨")

            break

          case 'ax':

          if (user.ax > 10) return m.reply('Kamu Sudah Memilik Ini')

            if(user.rock < 20 || user.wood < 40 || user.iron < 20 || user.string < 80) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n40 Kayu🪵\n20 Iron⛓\n80 String🕸️\n20 Batu🪨*`)

            global.db.data.users[m.sender].wood -= 40

            global.db.data.users[m.sender].iron -= 20

            user.rock -= 20

            global.db.data.users[m.sender].string -= 80

            global.db.data.users[m.sender].ax += 1

            user.axdurability = 40

            m.reply("Sukses Membuat 1 Ax 🔨")

            break

          case 'sword':

          if (user.sword > 10) return m.reply('Kamu Sudah Memilik Ini')

            if(user.wood < 40 || user.iron < 60) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n40 Kayu🪵\n60 Iron⛓️*`)

            global.db.data.users[m.sender].wood -= 40

            global.db.data.users[m.sender].iron -= 60

            global.db.data.users[m.sender].sword += 1

            user.swordurability = 40

            m.reply("Sukses membuat 1 sword 🗡️")

            break

          case 'fishingrod':

          if (user.fishingrod > 3) return m.reply('Kamu Sudah Memilik Ini')

            if(user.wood < 40 || user.iron < 8 || user.string < 80) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n40 Kayu🪵\n8 Iron⛓\n80 String🕸️*`)

            global.db.data.users[m.sender].wood -= 40

            global.db.data.users[m.sender].iron -= 8

            global.db.data.users[m.sender].string -= 80

            global.db.data.users[m.sender].fishingrod += 1

            user.fishingrodurability = 40

            m.reply("Sukses Membuat 1 Pancingan 🎣")

            break

          case 'armor':

          if (user.armor > 10) return m.reply('Kamu Sudah Memilik Ini')

            if(user.iron < 120 || user.emerald < 4 || user.diamond < 20) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n120 Iron ⛓️\n4 Emerald ❇️\n20 Diamond 💎*`)

            global.db.data.users[m.sender].emerald -= 4

            global.db.data.users[m.sender].iron -= 120

            global.db.data.users[m.sender].diamond -= 20

            global.db.data.users[m.sender].armor += 1

            user.armordurability = 50

            m.reply("Sukses Membuat 1 Armor 🥼")

            break

            case 'atm':

          if (user.atm > 99) return m.reply('Level Max')

            if(user.plastikpvc < 5 * buff || user.money < 40000 * buff || user.semikonduktor < 1 * buff) return m.reply(`Bahan Tidak Cukup\n\n*Kamu Memerlukan:\n${40000 * buff} Money 💵 (Biaya Admin)\n${5 * buff} Plastik PVC ⬜\n${1 * buff} Semikonduktor 💽*`)

            global.db.data.users[m.sender].plastikpvc -= 5 * buff

            global.db.data.users[m.sender].money -= 40000 * buff

            global.db.data.users[m.sender].pengeluaran += 40000 * buff

            global.db.data.users[m.sender].semikonduktor -= 1 * buff

            global.db.data.users[m.sender].atm += 1

            global.db.data.users[m.sender].fullatm += 5000000

            m.reply("Sukses Membuat 1 ATM 💳")

            break



          default:

            return await conn.sendMessage(m.chat, listMessage)

        }

    } else if (/enchant|enchan/i.test(command)) {

      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)

      switch (_type) {

        case 't':

          break

        case '':

          break



        default:

          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m)

      }

    }

  } catch (err) {

    m.reply("Error\n\n\n" + err.stack)

  }

}



handler.help = ['craft2']

handler.tags = ['rpg']

handler.command = /^(craft2|crafting|chant)/i

handler.register = false

export default handler