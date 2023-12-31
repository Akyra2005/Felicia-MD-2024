let handler = async (m, { conn, usedPrefix, text, command }) => {
  var user = global.db.data.users[m.sender];

  let skillDescriptions = {
    swordmaster: "*Ahli pedang yang memiliki keahlian dalam Sword Mastery, kemampuan Parry, dan tarian Blade Dance.*\n",
    necromancer: "*Pengendali kekuatan kematian dengan kemampuan Necromancy, Soul Harvest, dan serangan Death Nova.*\n",
    witch: "*Penyihir yang mempunyai kemampuan dalam Spellcasting, Potion Brewing, dan Elemental Conjuring.*\n",
    archer: "*Pemanah ulung dengan keahlian dalam Precision Archery, Eagle Eye, dan tembakan cepat Rapid Shot.*\n",
    magicswordmaster: "*Gabungan ahli pedang dan ahli sihir dengan Sword Mastery, Elemental Magic Fusion, dan serangan Arcane Blade.*\n",
    thief: "*Maling ulung dengan kemampuan Stealth, Lockpicking, dan serangan Silent Takedown.*\n",
    shadow: "*Manipulator bayangan yang memiliki kemampuan Shadow Manipulation, Illusion Casting, dan serangan Assassination.*\n",
    synesthesia: "*Individu dengan kemampuan Enhanced Senses, Sensory Manipulation, dan proyeksi Psychic.*\n",
    alphastigma: "*Pengguna kemampuan Enhanced Vision, Rune Casting, dan Energy Channeling.*\n",
    sharingan: "*Pemilik Sharingan dengan kemampuan Enhanced Perception, Copying Techniques, dan Time Manipulation.*\n",
    rogue: "*Pengelana licin dengan keahlian dalam Evasion, Dirty Tricks, dan serangan Sneak Attack.*\n",
    druid: "*Pemelihara alam dengan kemampuan Shape-shifting, Nature's Wrath, dan summoning Elemental Companions.*\n",
    engineer: "*Ahli teknologi dengan kemampuan Invention, Mechanical Mastery, dan serangan menggunakan gadgets.*\n",
    cleric: "*Pelindung spiritual dengan kemampuan Healing Prayers, Divine Shield, dan serangan Holy Smite.*\n",
    warlock: "*Pemanggil kekuatan gelap dengan kemampuan Eldritch Invocations, Demon Pact, dan serangan Cursed Bolts.*\n",
    bard: "*Seniman serbaguna dengan keahlian dalam Inspiring Melodies, Charm, dan serangan Sonic Wave.*\n",
    paladin: "*Ksatria suci dengan kemampuan Divine Aura, Smite Evil, dan perlindungan menggunakan Heavy Armor.*\n",
    marksman: "*Penembak jitu yang ahli dalam Sniper Precision, Camouflage, dan serangan Piercing Shot.*\n",
    enchantress: "*Penyihir penyihir yang menguasai Enchantment Magic, Charm Spells, dan serangan dengan Magic-infused Weapons.*\n",
    timebender: "*Manipulator waktu dengan kemampuan Time Warping, Temporal Shield, dan serangan Chrono Strike.*\n",
    beastmaster: "*Penguasa binatang dengan kemampuan Beast Taming, Feral Roar, dan serangan bersama Companion Creatures.*\n",
    berserker: "*Pejuang gila yang menguasai Rage Mode, Berserker's Might, dan serangan berserk Frenzy Slash.*\n",
    elementalist: "*Manipulator elemen dengan kemampuan Elemental Infusion, Cyclone Burst, dan serangan Inferno Wave.*\n",
    sniper: "*Penembak jitu spesialis jarak jauh dengan keahlian Long-range Accuracy, Spotter's Vision, dan serangan Precision Barrage.*\n",
    alchemist: "*Ilmuwan ramuan dengan kemampuan Potion Mastery, Alchemical Explosions, dan serangan Toxic Vapor.*\n",
    illusionist: "*Pencipta ilusi ulung dengan kemampuan Illusory Duplicates, Mind Distortion, dan serangan Phantasmal Blades.*\n",
    celestialguardian: "*Penjaga surgawi dengan kemampuan Celestial Blessing, Astral Ward, dan serangan Divine Judgment.*\n",
    thundercaller: "*Pemanggil petir dengan kemampuan Thunderstorm Invocation, Lightning Strike, dan serangan Electric Surge.*\n",
    chronomancer: "*Manipulator waktu tingkat tinggi dengan kemampuan Time Manipulation Mastery, Temporal Rift, dan serangan Epoch Annihilation.*\n",
    psion: "*Ahli kekuatan pikiran dengan kemampuan Telekinesis, Mind Shield, dan serangan Psionic Blast.*\n",
    drakonrider: "*Ksatria naga dengan kemampuan Dragon Bond, Flame Breath, dan serangan Dragon's Fury.*\n",
    stormweaver: "*Pengendali badai dengan kemampuan Storm Manipulation, Galeforce Winds, dan serangan Tornado Tempest.*\n",
    lunarshaper: "*Pencipta perubahan bulan dengan kemampuan Lunar Transformation, Moonlight Veil, dan serangan Eclipse Cascade.*\n",
    terraforger: "*Pencipta daratan dengan kemampuan Terraforming Mastery, Earthquake Slam, dan serangan Stone Avalanche.*\n",
    psionicreaver: "*Penyiksa pikiran dengan kemampuan Psionic Torture, Mental Shredding, dan serangan Abyssal Mindcrush.*\n",
    frostfiremage: "*Pemanggil perpaduan es dan api dengan kemampuan Frostfire Manipulation, Blizzard Blaze, dan serangan Elemental Fusion.*\n",
    stargazer: "*Pembaca bintang dengan kemampuan Celestial Insights, Astral Projection, dan serangan Starfall Surge.*\n",
    shadowstepmaster: "*Ahli langkah bayangan dengan kemampuan Shadowstep Precision, Umbra Strike, dan serangan Void Assault.*\n",
    celestialmonk: "*Biksu surga dengan kemampuan Celestial Meditation, Divine Fist, dan serangan Tranquil Serenity.*\n",
    voidreaper: "*Penuai kekosongan dengan kemampuan Void Harvest, Soul Siphon, dan serangan Dimensional Reap.*\n",
    infernosorcerer: "*Penyihir api dengan kemampuan Inferno Sorcery, Magma Burst, dan serangan Pyroclasmic Eruption.*\n",
    aetherialdruid: "*Pemelihara aether dengan kemampuan Aetherial Connection, Vortex Bloom, dan serangan Aetheric Surge.*\n",
    frostbitearcher: "*Pemanah pembeku dengan kemampuan Frostbite Arrows, Glacial Precision, dan serangan Arctic Hail.*\n",
    voidwhisperer: "*Pengirim bisikan kekosongan dengan kemampuan Void Whispers, Whispering Shadows, dan serangan Echoing Silence.*\n",
    pyrokineticist: "*Ahli kendali api dengan kemampuan Pyrokinetic Mastery, Inferno Burst, dan serangan Flame Inferno.*\n",
    stormbringer: "*Pemanggil badai dengan kemampuan Storm Conduit, Thunderous Strikes, dan serangan Tempest Fury.*\n",
    crystalweaver: "*Pemintal kristal dengan kemampuan Crystal Manipulation, Prism Shield, dan serangan Crystal Barrage.*\n",
    mindalchemist: "*Ahli ramuan pikiran dengan kemampuan Mind Elixir, Cognitive Enhancement, dan serangan Mental Explosion.*\n",
    astralduelist: "*Pendekar astral dengan kemampuan Astral Blade Techniques, Starfall Parry, dan serangan Celestial Duel.*\n",
    venomancer: "*Pengendali racun dengan kemampuan Toxic Infusion, Venomous Cloud, dan serangan Poison Nova.*\n",
    astraldrifter: "*Pelintas dimensi dengan kemampuan Astral Riftwalk, Voidbound Dash, dan serangan Dimensional Slash.*\n",
    zenithknight: "*Ksatria puncak dengan kemampuan Zenith Strike, Radiant Defense, dan serangan Celestial Impact.*\n",
    voidharbinger: "*Pembawa kekosongan dengan kemampuan Voidwave Emission, Netherpulse Burst, dan serangan Oblivion Cleave.*\n",
    technosorcerer: "*Penyihir teknologi dengan kemampuan Technomagic Sorcery, Arcane Circuitry, dan serangan Cybernetic Surge.*\n",
    primalbeastmaster: "*Penguasa makhluk purba dengan kemampuan Primal Bond, Roar of the Ancients, dan serangan Savage Pounce.*\n",
    etherealblade: "*Pemangsa dari dimensi lain dengan kemampuan Ethereal Phase, Void Slash, dan serangan Phantom Assault.*\n",
    tempestarcher: "*Pemanah badai dengan kemampuan Tempest Arrows, Cyclonic Shot, dan serangan Lightning Volley.*\n",
    aquamancer: "*Penguasa elemen air dengan kemampuan Hydro Manipulation, Tidal Surge, dan serangan Aqua Vortex.*\n",
    mindflayer: "*Pemakan pikiran dengan kemampuan Mind Devour, Psychic Onslaught, dan serangan Neural Drain.*\n",
    runechanneler: "*Penghubung tanda mistik dengan kemampuan Rune Linking, Glyphic Ward, dan serangan Runic Blast.*\n",
    frostwarden: "*Pelindung beku dengan kemampuan Frost Barrier, Arctic Gale, dan serangan Glacial Shatter.*\n",
    sunfiretemplar: "*Ksatria matahari dengan kemampuan Solar Radiance, Blazing Sword, dan serangan Sunfire Burst.*\n",
    nightmareweaver: "*Penggelap mimpi dengan kemampuan Nightmare Stitching, Dream Eater, dan serangan Abyssal Incursion.*\n",
    soulforged: "*Pembentuk jiwa dengan kemampuan Soul Infusion, Spiritforge Armor, dan serangan Soulburst Hammer.*\n",
    celestialranger: "*Penjaga langit dengan kemampuan Celestial Arrow, Skyward Vigil, dan serangan Heavenly Barrage.*\n",
    spiritshifter: "*Pengubah roh dengan kemampuan Spirit Form, Ancestral Communion, dan serangan Ethereal Embrace.*\n",
    voidwalker: "*Penjelajah kekosongan dengan kemampuan Void Manipulation, Nullification Field, dan serangan Void Eruption.*\n",
    runeblade: "*Pengguna pedang penuh tanda dengan kemampuan Rune Carving, Runic Empowerment, dan serangan Runic Blade Storm.*\n",
    plaguebringer: "*Pembawa wabah dengan kemampuan Virulent Plague, Contagion Cloud, dan serangan Pestilent Burst.*\n",
    technomancer: "*Ahli teknologi magis dengan kemampuan Technomagic Infusion, Golem Engineering, dan serangan Arcane Beam Cannon.*\n",
    astralwalker: "*Penjelajah alam semesta dengan kemampuan Astral Projection, Starfall, dan serangan Celestial Nova.*\n",
    gravitybender: "*Manipulator gravitasi dengan kemampuan Gravitational Shift, Singularity Crush, dan serangan Galactic Force.*\n",
    dreamweaver: "*Pembuat mimpi dengan kemampuan Dream Manipulation, Nightmare Infliction, dan serangan Astral Illusion.*\n",
    souldancer: "*Penari jiwa dengan kemampuan Soul Weaving, Essence Channeling, dan serangan Spirit Waltz.*\n",
    chroniclemage: "*Penyihir kronis dengan kemampuan Chronomancy, Reality Distortion, dan serangan Temporal Convergence.*\n",
    voidstalker: "*Pemburu kehampaan dengan kemampuan Void Stealth, Shadowmeld Strike, dan serangan Nether Surge."   
  };

  let skillCodes = Object.keys(skillDescriptions);
  let skillCode = text.trim().toLowerCase();

  if (!skillCodes.includes(skillCode)) {
    let skillList = skillCodes.map(code => `› ${code}: ${skillDescriptions[code]}`).join('\n');
    return conn.reply(m.chat, `*Pilih Skill Apa Yang Kamu Inginkan:*\n\n${skillList}\n\n*Cara Menggunakan:*\n*${usedPrefix + command} <kode skill>*\n\n*Contoh:*\n*${usedPrefix + command} necro*\n`, m);
  }

  if (!user.skill) {
    user.skill = skillCode;
    conn.reply(m.chat, `*Anda Telah Memilih Skill dengan Kode ${skillCode.toUpperCase()}*\n*Deskripsi: ${skillDescriptions[skillCode]}*`);
  } else if (user.skill) {
    conn.reply(m.chat, `*Anda Sudah Punya Skill ${user.skill.toUpperCase()} Tidak Bisa Diganti*`);
  }
};

handler.help = ['selectskill <kode skill>'];
handler.tags = ['rpg'];
handler.command = /^(selectskill|slectskill)$/i;
handler.limit = 1;
handler.register = false;
export default handler;
