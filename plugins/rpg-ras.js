/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.ras = ["manusia", "elf", "orc", "dwarf", "goblin", "vampir", "werewolf", "demon", "angel", "slime", "yokai", "naga", "mermaid", "dragon", "peri", "kemono", "alien", "android", "shinigami", "siren", "harpy", "phoenix", "troll", "suku kurcaci", "gorgon", "jin", "tengu", "titan", "sphinx", "djinn", "leprechaun", "neko", "kitsune", "magician", "fairy", "golem", "witch", "giant", "saiyan", "zombie", "half-elf", "wyvern", "lamia", "centaur", "ogre", "vampire hunter", "satyr", "hobbit", "celestial", "nymph", "gnome", "valkyrie", "mummy", "inugami", "gargoyle", "frostling", "faun", "kelpie", "wraith", "selkie", "minotaur", "harpie", "chimera", "sylph", "griffin", "dryad", "unicorn", "pegasus", "cyclops", "phooka", "trollkin", "brownie", "pixie", "ogre-mage", "yuki-onna", "banshee", "angeloid", "kraken", "shadowkin", "frostborn", "doppelgänger", "gazellefolk", "golemancer", "arachne", "harmonia", "cactuar", "kami", "succubus", "incubus", "weredragon", "gryphon", "rakshasa", "avatar", "zodiac", "chronomancer", "behemoth", "salamander", "nightmare", "pixiu", "homunculus", "gastrea", "empusa", "beastkin", "celestial", "kenku", "boggart", "shadowcat", "jotunn", "vishkanya", "korrigan", "marid", "hippogriff", "shapeshifter", "drider", "wight", "fae", "satori", "obelisk", "wyrm", "mimic", "gnoll", "emberkin", "iceborn", "lammasu", "clockwork", "dullahan", "wolpertinger", "zephyr", "gorgimera", "grymm", "manticore", "sanguine", "tyrant", "gargoyle", "divine", "skullkin", "magus", "umbra", "sentinel", "drukhari", "banshee", "astral", "marauder", "nyx", "silverscale", "solstice", "darksider", "dreamweaver", "celestial", "cinderkin", "solaris", "threnody", "equinox", "harbinger", "warpriest", "netherling", "ephemera", "ethereal", "sylvan", "celeste", "solar", "empyrean", "umbral", "twilight", "luminary", "waverider", "voidling", "celestial", "avalanche", "aeon", "frostweaver", "soulbound", "etherial", "harmony", "umbrakin", "stormcaller", "shadowling", "empyreal", "sentient", "starcaller", "necromancer", "dragonkin", "celestial", "harmonious", "seraph", "cinderborn", "thunderchild", "spiritkin", "celestial", "mindflayer", "duskborn", "astral", "beastmaster", "faerie", "celestial", "nightfall", "voidborn", "pyromancer", "moonlight", "celestial", "spellbinder", "twilightborn", "stormkin", "lifeweaver", "celestial", "voidwalker", "dreamborn", "sunfire", "arcane", "celestial", "shadowdancer", "stargazer", "voidwalker", "ethereal", "celestial", "illusionist", "nightshade", "lunar", "celestial", "harbinger", "warpriest", "netherling", "ephemera", "ethereal", "sylvan", "celeste", "solar", "empyrean", "umbral", "twilight", "luminary", "waverider", "voidling", "celestial", "avalanche", "aeon", "frostweaver", "soulbound", "etherial", "harmony", "umbrakin", "stormcaller", "shadowling", "empyreal", "sentient", "starcaller", "necromancer", "dragonkin", "celestial", "harmonious", "seraph", "cinderborn", "thunderchild", "spiritkin", "celestial", "mindflayer", "duskborn", "astral", "beastmaster", "faerie", "celestial", "nightfall", "voidborn", "pyromancer", "moonlight", "celestial", "spellbinder", "twilightborn", "stormkin", "lifeweaver", "celestial", "voidwalker", "dreamborn", "sunfire", "arcane", "celestial", "shadowdancer", "stargazer", "voidwalker", "ethereal", "celestial", "illusionist", "nightshade", "lunar"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the ras
   
   let ra = text.trim().toLowerCase() // to filter text
     
   if (!ras.includes(ra)) throw `*Pilih Ras Apa Yg Kamu Inginkan:\n\n${ras.map(ra => `› ${ra}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <nameras>*
     
     Contoh:
     *${usedPrefix + command} manusia*
     `

    if (user.ras == "") {
    user.ras = ra
    m.reply(`*Anda Telah Memilih Ras ${ra}*`)
    } else if (user.ras) {
    m.reply(`*Anda Sudah Punya Ras ${user.ras} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selectras <type>']
handler.tags = ['rpg']
handler.command = /^(slectras|selectras)$/i
handler.limit = 1
handler.register = false
export default handler
