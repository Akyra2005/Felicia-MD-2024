/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.skill =  ["swordmaster [Sword Mastery, Parry, Blade Dance]", "necromancer [Necromancy, Soul Harvest, Death Nova]", "witch [Spellcasting, Potion Brewing, Elemental Conjuring]", "archer [Precision Archery, Eagle Eye, Rapid Shot]", "magicswordmaster [Sword Mastery, Elemental Magic Fusion, Arcane Blade]", "thief [Stealth, Lockpicking, Silent Takedown]", "shadow [Shadow Manipulation, Illusion Casting, Assassination]", "synesthesia [Enhanced Senses, Sensory Manipulation, Psychic Projection]", "alphastigma [Enhanced Vision, Rune Casting, Energy Channeling]", "sharingan [Enhanced Perception, Copying Techniques, Time Manipulation]", "rinnegan [Six Paths Techniques, Reality Manipulation, Astral Projection]", "magic [Spellcasting, Elemental Manipulation, Spell Shield]", "pantiesthief [Stealth, Sleight of Hand, Disguise Mastery]", "pyromancer [Fire Manipulation, Flame Burst, Inferno]", "paladin [Divine Smite, Holy Shield, Healing Light]", "gunslinger [Gunplay, Quick Draw, Bullet Time]", "shapeshifter [Shape-shifting, Animal Mimicry, Camouflage]", "summoner [Summoning Magic, Creature Control, Elemental Pact]", "druid [Nature Magic, Shapeshifting, Plant Manipulation]", "bard [Musical Magic, Charisma Boost, Inspiration]", "sorcerer [Arcane Spells, Chaos Magic, Arcane Blast]", "warlock [Dark Arts, Pact Magic, Eldritch Blast]", "enchanter [Enchantment Magic, Mind Control, Charm]", "sniper [Long-range Accuracy, Camouflage, Sniper Shot]", "beastmaster [Animal Companionship, Beast Control, Beast Form]", "brawler [Hand-to-Hand Combat, Unarmed Strikes, Iron Skin]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "ranger [Nature Bond, Tracking, Stealthy Hunter]", "samurai [Bushido Code, Katana Mastery, Zen Focus]", "monk [Martial Arts, Inner Chi, Acrobatic Maneuvers]", "assassin [Stealthy Killings, Poison Mastery, Silent Blade]", "ninja [Ninjutsu, Stealth, Shuriken Techniques]", "elementalist [Elemental Magic, Elemental Fusion, Elemental Burst]", "geomancer [Earth Manipulation, Stone Shaping, Tremor Wave]", "chronomancer [Time Manipulation, Temporal Rift, Time Freeze]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "battlemage [Combat Magic, Spellblade, Arcane Barrage]", "priest [Divine Magic, Healing, Holy Radiance]", "beastkin [Animal Traits, Beast Transformation, Wild Instincts]", "soul reaper [Spiritual Powers, Soul Absorption, Reaper's Scythe]", "vampire [Blood Manipulation, Hypnosis, Immortality]", "stormcaller [Storm Manipulation, Lightning Bolts, Tempest Form]", "spiritwalker [Spiritual Connection, Astral Projection, Shamanic Rituals]", "diviner [Foreseeing, Future Sight, Divination Spells]", "martial artist [Combat Mastery, Martial Techniques, Inner Strength]", "bounty hunter [Tracking, Bounty Hunting, Sharpshooting]", "necro-rogue [Shadow Magic, Stealth, Soul Theft]", "dark knight [Cursed Powers, Shadow Armor, Life Drain]", "runemaster [Rune Magic, Glyph Casting, Ancient Knowledge]", "tactician [Strategic Planning, Tactical Analysis, Leadership]", "runeblade [Rune Enchantments, Swordsmanship, Arcane Strikes]", "sage [Wisdom, Knowledge Magic, Arcane Lore]", "sniper [Long-range Accuracy, Camouflage, Sniper Shot]", "geomancer [Earth Manipulation, Stone Shaping, Tremor Wave]", "chronomancer [Time Manipulation, Temporal Rift, Time Freeze]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "battlemage [Combat Magic, Spellblade, Arcane Barrage]", "priest [Divine Magic, Healing, Holy Radiance]", "beastkin [Animal Traits, Beast Transformation, Wild Instincts]", "soul reaper [Spiritual Powers, Soul Absorption, Reaper's Scythe]", "vampire [Blood Manipulation, Hypnosis, Immortality]", "stormcaller [Storm Manipulation, Lightning Bolts, Tempest Form]", "spiritwalker [Spiritual Connection, Astral Projection, Shamanic Rituals]", "diviner [Foreseeing, Future Sight, Divination Spells]", "martial artist [Combat Mastery, Martial Techniques, Inner Strength]", "bounty hunter [Tracking, Bounty Hunting, Sharpshooting]", "necro-rogue [Shadow Magic, Stealth, Soul Theft]", "dark knight [Cursed Powers, Shadow Armor, Life Drain]", "runemaster [Rune Magic, Glyph Casting, Ancient Knowledge]", "tactician [Strategic Planning, Tactical Analysis, Leadership]", "runeblade [Rune Enchantments, Swordsmanship, Arcane Strikes]", "sage [Wisdom, Knowledge Magic, Arcane Lore]", "pyromancer [Fire Manipulation, Flame Burst, Inferno]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "elementalist [Elemental Magic, Elemental Fusion, Elemental Burst]", "chronomancer [Time Manipulation, Temporal Rift, Time Freeze]", "beastmaster [Animal Companionship, Beast Control, Beast Form]", "druid [Nature Magic, Shapeshifting, Plant Manipulation]", "ranger [Nature Bond, Tracking, Stealthy Hunter]", "bard [Musical Magic, Charisma Boost, Inspiration]", "sorcerer [Arcane Spells, Chaos Magic, Arcane Blast]", "warlock [Dark Arts, Pact Magic, Eldritch Blast]", "enchanter [Enchantment Magic, Mind Control, Charm]", "sniper [Long-range Accuracy, Camouflage, Sniper Shot]", "geomancer [Earth Manipulation, Stone Shaping, Tremor Wave]", "chronomancer [Time Manipulation, Temporal Rift, Time Freeze]", "battlemage [Combat Magic, Spellblade, Arcane Barrage]", "priest [Divine Magic, Healing, Holy Radiance]", "beastkin [Animal Traits, Beast Transformation, Wild Instincts]", "soul reaper [Spiritual Powers, Soul Absorption, Reaper's Scythe]", "vampire [Blood Manipulation, Hypnosis, Immortality]", "stormcaller [Storm Manipulation, Lightning Bolts, Tempest Form]", "spiritwalker [Spiritual Connection, Astral Projection, Shamanic Rituals]", "diviner [Foreseeing, Future Sight, Divination Spells]", "martial artist [Combat Mastery, Martial Techniques, Inner Strength]", "bounty hunter [Tracking, Bounty Hunting, Sharpshooting]", "necro-rogue [Shadow Magic, Stealth, Soul Theft]", "dark knight [Cursed Powers, Shadow Armor, Life Drain]", "runemaster [Rune Magic, Glyph Casting, Ancient Knowledge]", "tactician [Strategic Planning, Tactical Analysis, Leadership]", "runeblade [Rune Enchantments, Swordsmanship, Arcane Strikes]", "sage [Wisdom, Knowledge Magic, Arcane Lore]", "celestial [Celestial Magic, Divine Blessings, Astral Projection]", "summoner [Summoning Magic, Creature Control, Elemental Pact]", "dragonslayer [Dragon Slaying Techniques, Dragonbane Armor, Dragon Breath]", "thundercaller [Thunder Manipulation, Lightning Bolts, Thunderstorm]", "chronomancer [Time Manipulation, Temporal Rift, Time Freeze]", "paladin [Divine Smite, Holy Shield, Healing Light]", "warrior [Weapon Mastery, Battle Rage, Iron Will]", "elementalist [Elemental Magic, Elemental Fusion, Elemental Burst]", "assassin [Stealthy Killings, Poison Mastery, Silent Blade]", "sniper [Long-range Accuracy, Camouflage, Sniper Shot]", "beastmaster [Animal Companionship, Beast Control, Beast Form]", "druid [Nature Magic, Shapeshifting, Plant Manipulation]", "bard [Musical Magic, Charisma Boost, Inspiration]", "sorcerer [Arcane Spells, Chaos Magic, Arcane Blast]", "warlock [Dark Arts, Pact Magic, Eldritch Blast]", "enchanter [Enchantment Magic, Mind Control, Charm]", "samurai [Bushido Code, Katana Mastery, Zen Focus]", "monk [Martial Arts, Inner Chi, Acrobatic Maneuvers]", "ninja [Ninjutsu, Stealth, Shuriken Techniques]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "ranger [Nature Bond, Tracking, Stealthy Hunter]", "brawler [Hand-to-Hand Combat, Unarmed Strikes, Iron Skin]", "pirate [Swashbuckling, Cutlass Mastery, Cannon Barrage]", "elemental knight [Elemental Weaponry, Elemental Shield, Elemental Infusion]", "spiritualist [Spirit Communication, Soul Channeling, Mediumship]", "enchanter [Enchantment Magic, Mind Control, Charm]", "battle mage [Combat Magic, Spellblade, Arcane Barrage]", "beast tamer [Animal Companionship, Beast Control, Beast Form]", "cleric [Divine Magic, Healing, Holy Smite]", "dark magician [Dark Arts, Shadow Manipulation, Dark Energy Blast]", "marksmen [Accuracy, Sharpshooting, Trick Shots]", "illusionist [Illusion Magic, Illusory Duplicates, Mind Tricks]", "shadow dancer [Shadow Manipulation, Stealth, Dance of Shadows]", "shaman [Nature Magic, Spirit Summoning, Tribal Rituals]", "demon hunter [Demon Slayer Techniques, Demonbane Armor, Demon]", "runeblade [Runeblade Mastery, Arcane Strikes, Elemental Infusion]",
"spiritweaver [Spiritual Connections, Nature Channeling, Astral Projection]",
"voidwalker [Void Manipulation, Void Shield, Dark Embrace]",
"bladestormer [Blade Cyclone, Whirling Strikes, Tempest Form]",
"spellbinder [Arcane Binding, Mind Manipulation, Spell Amplification]",
"beastshaper [Beast Whisperer, Animal Bond, Shape-shifting Mastery]",
"stormbringer [Storm Manipulation, Lightning Bolts, Thunderous Fury]",
"soulthief [Soul Extraction, Shadow Veil, Life Draining]",
"divineblade [Divine Smite, Holy Barrier, Radiant Strikes]",
"gunslinger [Gunplay, Quick Draw, Bullet Barrage]",
"voidwalker [Void Manipulation, Void Shield, Dark Embrace]",
"riftwalker [Dimensional Rifts, Reality Shifting, Temporal Distortion]",
"mindbender [Psionic Powers, Mental Manipulation, Psychic Assault]",
"duskblade [Twilight Mastery, Shadowstep, Crescent Slash]",
"celestialist [Celestial Magic, Astral Projection, Divine Blessings]",
"spellweaver [Arcane Spells, Elemental Fusion, Magic Affinity]",
"beastwarden [Nature's Bond, Animal Allies, Nature's Wrath]",
"spiritbound [Spiritual Attunement, Soul Manipulation, Ethereal Form]",
"arcane sentinel [Arcane Mastery, Barrier Magic, Spell Absorption]",
"thunderstruck [Electrokinesis, Thunderous Bolts, Lightning Surge]",
"soulreaver [Soul Manipulation, Life Drain, Reaper's Embrace]",
"mythic knight [Legendary Weaponry, Mythical Shield, Arcane Fury]",
"shadowblade [Shadow Mastery, Stealth Tactics, Shadowstrike]",
"chaosmage [Chaos Magic, Reality Distortion, Entropy Burst]",
"spiritwalker [Spiritual Connection, Shamanic Rituals, Ancestral Guidance]",
"beastbound [Beast Mastery, Animal Empathy, Wild Spirit]",
"blademyst [Mystical Swordsmanship, Arcane Strikes, Blade Surge]",
"pyrokinetic [Fire Manipulation, Inferno Flames, Incinerating Rage]",
"shadowstalker [Shadow Manipulation, Stealth Assassinations, Nightshade Veil]",
"spectralmage [Spectral Magic, Illusory Projections, Astral Shift]",
"druidic shapeshifter [Nature Magic, Shapeshifting Mastery, Wild Essence]",
"harmony bard [Melodic Magic, Harmonic Aura, Inspiring Rhythms]",
"sorcerous warden [Arcane Spells, Protective Magic, Warding Glyphs]",
"hexweaver [Dark Hexes, Cursed Manipulation, Malevolent Energies]",
"mindblade [Psychic Weaponry, Telekinetic Strikes, Mental Barrier]",
"beastcall [Beast Summoning, Creature Control, Nature's Bond]",
"duskshadow [Twilight Manipulation, Stealth Techniques, Shadowsoul Strike]",
"elemental scribe [Elemental Magic, Runescribing, Elemental Infusion]",
"crystalmancer [Crystal Manipulation, Crystalized Spells, Crystal Barrier]",
"astral dancer [Astral Projection, Ethereal Grace, Cosmic Energy]",
"void assassin [Void Manipulation, Silent Shadows, Voidstep]",
"spellwhisper [Arcane Whisperings, Spell Manipulation, Reality Weaving]",
"lunar druid [Lunar Magic, Moonlight Shaping, Celestial Connection]",
"chronowarper [Temporal Manipulation, Time Rifts, Chrono Strikes]",
"mindshifter [Psychic Powers, Reality Distortion, Mental Transcendence]",
"starchaser [Stellar Magic, Starfire Bolts, Cosmic Expansion]",
"beastward [Nature's Guardian, Animal Companions, Nature's Wrath]",
"etherblade [Ether Manipulation, Blade Mastery, Ethereal Strikes]",
"voidbinder [Void Magic, Void Control, Reality Sundering]",
"essence shaman [Essence Manipulation, Spirit Connection, Elemental Attunement]",
"shadowcloak [Shadow Manipulation, Stealth Mastery, Shadow Veil]",
"mystic elementalist [Mystical Elements, Elemental Fusion, Arcane Channeling]",
"soulweaver [Soul Manipulation, Spirit Channeling, Life Energy Siphon]",
"stormcaller [Storm Manipulation, Thunderous Strikes, Tempest Fury]"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the skill
   
   let skil = text.trim().toLowerCase() // to filter text
     
   if (!skill.includes(skil)) throw `*Pilih Skill Apa Yg Kamu Inginkan:\n\n${skill.map(skil => `› ${skil}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <nameskill>*
     
     Contoh:
     *${usedPrefix + command} necromancer*
     `

    if (user.skill == "") {
    user.skill = skil
    m.reply(`*Anda Telah Memilih Skill ${skil}*`)
    } else if (user.skill) {
    m.reply(`*Anda Sudah Punya Skill ${user.skill} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selectskill <type>']
handler.tags = ['rpg']
handler.command = /^(slectskill|selectskill)$/i
handler.limit = 1
handler.register = false
export default handler
