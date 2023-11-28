/*
RECODE REYZ HAYANASI
KONTAK ME : 6285159258830
YT : @Litzz445
IG : @reymwmwk112
REQUEST FITUR CHAT GW
FITUR ERROR CHAT GW
BUAT LU YANG RECODE NI KASIH CREDIT
*/

import { pickRandom} from './lib/other-function.js'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import moment from 'moment-timezone'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
//TIME
global.waktu = `${date}`
global.namabot = '© 𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗠𝗗'
global.v = '-'   
global.botdate = `⎔ 𝗗𝗔𝗧𝗘: ${week} ${date}\n⎔ 𝗧𝗜𝗠𝗘: ${wktuwib}`
global.bottime = `𝗧 𝗜 𝗠 𝗘: ${wktuwib}`
// Sticker WM
global.packname = `🖍️ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗕𝗼𝘁 ⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗\n\n• 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 么 𝗞𝗲𝗶𝘇𝗵𝗮\n• 𝗕𝗼𝘁 𝗡𝘂𝗺𝗯𝗲𝗿 𝟬𝟴𝟱𝟭-𝟱𝟵𝟮𝟱-𝟴𝟴𝟯𝟬\n• 𝗕𝗼𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟱𝟮`
global.author = ``

/* ===========Hiasan=========== */
global.eror = '*E R R O R*'
global.lopr = '🅟'
global.lolm = '🅛'
global.dmenut = '⎔═════⎔'
global.dmenub = '╟• '
global.dmenub2 = '║'
global.dmenuf = '⎔═════════⎔'
global.cmenut = '⎔═════⎔'
global.cmenuh = '⎔═════⎔'
global.cmenub = '╟• '
global.cmenuf = '⎔══════════⎔\n'
global.cmenua = '\n     '
global.dashmenu = '⎔════⎔ *DASHBOARD* ⎔════⎔'
global.pmenus = '⎔'
global.htjava = '⛶'
global.htki = '─ ─ ─ ─  ─ ｢' // Hiasan Titile (KIRI)
global.htka = '｣ ─ ─ ─ ─ ─' // Hiasan Title  (KANAN)
global.emojis = pickRandom(["👑", "🎗", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])

//--------[WATERMARK]
global.wm = '© 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗞𝗲𝗶𝘇𝗵𝗮'
global.wm2 = '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗 '
global.wm3 = '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗠𝘂𝗹𝘁𝗶-𝗗𝗲𝘃𝗶𝗰𝗲'
global.md = '𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗠𝘂𝗹𝘁𝗶-𝗗𝗲𝘃𝗶𝗰𝗲'
//-----[OWNER]
global.nomorown = '6281249122429'
global.owner = [
['6281249122429'], // global owner 0
['6281249122429'], // global owner 1
['6281249122429'], // global owner 2
['6281249122429', '𝗞𝗲𝗶𝘇𝗵𝗮', true] // global owner 3
]
global.mods = [] // siapa partner mu? 
global.prems = ['6281249122429'] //premium unlimited

// =================={[(API KEYS)]}==================
global.mupar = 'OnLasdan'
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = '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'
global.APIs = {
can: 'https://pnggilajacn.my.id',
xteam: 'https://api.xteam.xyz', 
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol: 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics: 'https://violetics.pw',
zenz: 'https://zenzapi.xyz',
xzn: 'https://skizo.tech',
ibeng: 'https://api.ibeng.tech', 

}

global.APIKeys = {
'https://pnggilajacn.my.id': 'ItsukaChan',
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zenzapis.xyz': '675e34de8a', 
'https://api-fgmods.ddns.net': 'Pa5SYPbA',
'https://zenzapi.xyz': '01ABEB1E11',
'https://violetics.pw': 'beta',
'https://api.lolhuman.xyz': 'haikalgans',
'https://skizo.tech': 'konekocyz', 
'https://api.ibeng.tech' : 'QeyZTULyQg', 

}

//-----------[ APIKEY BUAT CPANEL ]----------//
global.domain = 'https://xxxxx'
global.plta = 'plta_xxxxx'
global.pltc = 'pltc_xxxxx'
//------------------------------------------------------------------//

global.lolkey = 'haikalgans'
global.lolkeysapi = [ 'haikalgans' ]
global.lol = 'haikalgans'
global.rose = 'Rs-Zeltoria'
global.xzn = 'konekocyz'
global.fgmods = 'fg-dylux'
global.ibeng = 'UvjqppFxma'

//-----------------[ GLOBAL LOADING ]---------------//

global.wait = '*Memproses Permintaan...*'

///==================/thumbnail 
global.thumb = 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg'
global.thumbbc = 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/63854b2a01477c9b2cb01.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'
global.footer = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ ฅ˘ᴋᴏɴᴇᴋᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com'
global.sgh = 'https://github.com'
global.sgc = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
global.sdc = 'https://discord.gg'
global.snh = 'https://nhentai.net'
global.sfb = 'https://www.facebook.com'
global.syt = 'https://youtube.com'
//====== Url Template Buttons ======//
global.dtu = '𝗗𝗼𝗻𝗮𝘀𝗶'
global.urlnya = "wa.me/6285159258830"
//========== callButtons ==========//
global.dtc = '𝗛𝘂𝗯𝘂𝗻𝗴𝗶 𝗣𝗲𝗺𝗶𝗹𝗶𝗸'
global.phn = '+62 812-4912-2429'
global.ephemeral = '86400'
global.monitor = "u1930884-ae15d00ab6652ab7dfa5f610"
global.multiplier = 25
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '999'
global.fpagedoc = '999'
global.htjava = '⎔' 
global.fgig = '⎔ 𝗞𝗲𝗶𝘇𝗵𝗮'
global.docs = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// =============={[(END)]}=================
global.ppbot = 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg'
// ================={[(THUMBNAIL)]}===========
    global.hwaifu= 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg'
//===[THUMBNAIL MENU]===

    global.thumbnailUrl= 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg'
global.Pallmenu = 'https://telegra.ph/file/6372ee7f40d93db1da497.jpg'
global.AraChu2 = [
  "https://telegra.ph/file/6372ee7f40d93db1da497.jpg",
  "https://telegra.ph/file/6372ee7f40d93db1da497.jpg",
  "https://telegra.ph/file/6372ee7f40d93db1da497.jpg",
  "https://telegra.ph/file/6372ee7f40d93db1da497.jpg",
  "https://telegra.ph/file/6372ee7f40d93db1da497.jpg"
]
global.fla = pickRandom(ImgLogoFlam())

function ImgLogoFlam() {
    let Flam = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return Flam
}

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//=========/===