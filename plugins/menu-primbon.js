/*
RECODE REYZ HAYANASI
KONTAK ME : 6283181666350
YT : @Litzz445
IG : @reymwmwk112
REQUEST FITUR CHAT GW
FITUR ERROR CHAT GW
BUAT LU YANG RECODE NI KASIH CREDIT
*/

import { Primbon } from 'scrape-primbon'
const primbon = new Primbon()

let handler = async (m, { conn, args, text, usedPrefix, command}) => {
switch (command) { 

case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) return m.reply(`Format: *${usedPrefix + command} Nomor Telepon*`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nomor HP: *${anu.message.nomer_hp}*\nAngka Shuzi: *${anu.message.angka_shuzi}*\nEnergi Positif\n- Kekayaan: *${anu.message.energi_positif.kekayaan}*\n- Kesehatan: *${anu.message.energi_positif.kesehatan}*\n- Cinta: *${anu.message.energi_positif.cinta}*\n- Kestabilan: *${anu.message.energi_positif.kestabilan}*\n- Persentase: *${anu.message.energi_positif.persentase}*\nEnergi Negatif:\n- Perselisihan: *${anu.message.energi_negatif.perselisihan}*\n- Kehilangan: *${anu.message.energi_negatif.kehilangan}*\n- Malapetaka: *${anu.message.energi_negatif.malapetaka}*\n- Kehancuran: *${anu.message.energi_negatif.kehancuran}*\n- Persentase: *${anu.message.energi_negatif.persentase}*`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return m.reply(`Format: *${usedPrefix + command} Mimpimu*`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Mimpi: *${anu.message.mimpi}*\nArti: *${anu.message.arti}*\nSolusi: *${anu.message.solusi}*`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 7, 7, 2005, Nopi, 16, 11, 2004*`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama Anda: *${anu.message.nama_anda.nama}*\nLahir Pada: *${anu.message.nama_anda.tgl_lahir}*\nNama Pasangan: *${anu.message.nama_pasangan.nama}*\nLahir Pada: *${anu.message.nama_pasangan.tgl_lahir}*\nHasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 7, 7, 2005, Nopi, 16, 11, 2004*`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama Anda: *${anu.message.nama_anda.nama}*\nLahir Pada: *${anu.message.nama_anda.tgl_lahir}*\nNama Pasangan: *${anu.message.nama_pasangan.nama}*\nLahir Pada: *${anu.message.nama_pasangan.tgl_lahir}*\nHasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'suamiistri': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 7, 7, 2005, Nopi, 16, 11, 2004*`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama Suami: *${anu.message.suami.nama}*\nLahir Pada: *${anu.message.suami.tgl_lahir}*\nNama Istri: *${anu.message.istri.nama}*\nLahir Pada: *${anu.message.istri.tgl_lahir}*\nHasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 18, 10, 2003, Nopi, 20, 12, 2005*`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama Anda: *${anu.message.nama_anda.nama}*\nLahir Anda: *${anu.message.nama_anda.tgl_lahir}*\nNama Pasangan: *${anu.message.nama_pasangan.nama}*\nLahir Pasangan: *${anu.message.nama_pasangan.tgl_lahir}*\nSisi Positif: *${anu.message.sisi_positif}*\nSisi Negatif: *${anu.message.sisi_negatif}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'artinama': {
if (!text) return m.reply(`Format: *${usedPrefix + command} Nama*`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nArti: *${anu.message.arti}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 18, 10, 2003*`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nLahir: *${anu.message.tgl_lahir}*\nLife Path: *${anu.message.life_path}*\nDestiny: *${anu.message.destiny}*\nDestiny Desire: *${anu.message.destiny_desire}*\nPersonality: *${anu.message.personality}*\nPersentase: *${anu.message.persentase_kecocokan}*`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio|Nopi*`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
conn.sendImage(m.chat,  anu.message.gambar, `Nama Anda: *${anu.message.nama_anda}*\nNama Pasangan: *${anu.message.nama_pasangan}*\nSisi Positif: *${anu.message.sisi_positif}*\nSisi Negatif: *${anu.message.sisi_negatif}*`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 26, 11, 2023*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Tanggal Pernikahan: *${anu.message.tanggal}*\nKarakteristik: *${anu.message.karakteristik}*`)
}
break
case 'sifatusaha': {
if (!ext)return m.reply(`Contoh: *${usedPrefix+ command} 26, 11, 2023*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Lahir: *${anu.message.hari_lahir}*\nUsaha: *${anu.message.usaha}*`)
}
break
case 'rejeki': case 'rezeki': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Lahir: *${anu.message.hari_lahir}*\nRezeki: *${anu.message.rejeki}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Lahir: *${anu.message.hari_lahir}*\nPekerjaan: *${anu.message.pekerjaan}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return m.reply(`Contoh: *.ramalnasib 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Analisa: *${anu.message.analisa}*\nAngka Akar: *${anu.message.angka_akar}*\nSifat: *${anu.message.sifat}*\nElemen: *${anu.message.elemen}*\nAngka Keberuntungan: *${anu.message.angka_keberuntungan}*`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Analisa: *${anu.message.analisa}*\nSektor: *${anu.message.sektor}*\nElemen: *${anu.message.elemen}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendImage(m.chat, anu.message.image, `Lahir: *${anu.message.tgl_lahir}*\nSimbol Tarot: *${anu.message.simbol_tarot}*\nArti: *${anu.message.arti}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'fengshui': {
if (!text) return `Contoh: *${usedPrefix + command} Rio, 1, 2003*\n\nFormat: *${usedPrefix + command} Nama, Gender, Tahun Lahir*\n\nGender: *1 Untuk Laki-Laki & 2 Untuk Perempuan*`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nLahir: *${anu.message.tahun_lahir}*\nGender: *${anu.message.jenis_kelamin}*\nAngka Kua: *${anu.message.angka_kua}*\nKelompok: *${anu.message.kelompok}*\nKarakter: *${anu.message.karakter}*\nSektor Baik: *${anu.message.sektor_baik}*\nSektor Buruk: *${anu.message.sektor_buruk}*`)
}
break
case 'haribaik': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Lahir: *${anu.message.tgl_lahir}*\nKala Tinantang: *${anu.message.kala_tinantang}*\nInfo: *${anu.message.info}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Lahir: *${anu.message.tgl_lahir}*\nHasil: *${anu.message.result}*\nInfo: *${anu.message.info}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Hari Lahir: *${anu.message.hari_lahir}*\nTanggal Lahir: *${anu.message.tgl_lahir}*\nHari Naas: *${anu.message.hari_naas}*\nInfo: *${anu.message.catatan}*\nCatatan: *${anu.message.info}*`)
}
break
case 'nagahari': case 'harinaga': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Hari Lahir: *${anu.message.hari_lahir}*\nTanggal Lahir: *${anu.message.tgl_lahir}*\nArah Naga Hari: *${anu.message.arah_naga_hari}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Hari Lahir: *${anu.message.hari_lahir}*\nTanggal Lahir: *${anu.message.tgl_lahir}*\nArah Rezeki: *${anu.message.arah_rejeki}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'peruntungan': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 18, 10, 2003, 2023*\n\nFormat: *${usedPrefix + command} Nama, Tanggal Lahir, Bulan Lahir, Tahun Lahir, Untuk Tahun*`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nLahir Pada: *${anu.message.tgl_lahir}*\nPeruntungan Tahun: *${anu.message.peruntungan_tahun}*\nHasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 18, 10, 2003*`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Tanggal: *${anu.message.tanggal}*\nJumlah Neptu: *${anu.message.jumlah_neptu}*\nWatak Hari: *${anu.message.watak_hari}*\nNaga Hari: *${anu.message.naga_hari}*\nJam Baik: *${anu.message.jam_baik}*\nWatak Kelahiran: *${anu.message.watak_kelahiran}*`)
}
break
case 'sifat': case 'karakter': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 18, 10, 2003*`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nLahir Pada: *${anu.message.tgl_lahir}*\nGaris Hidup: *${anu.message.garis_hidup}*`)
}
break
case 'keberuntungan': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} Rio, 18, 10, 2003*`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Nama: *${anu.message.nama}*\nLahir: *${anu.message.tgl_lahir}*\nHasil: *${anu.message.result}*`)
}
break
case 'memancing': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 26, 11, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Tanggal: *${anu.message.tgl_memancing}*\nHasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'masasubur': {
if (!text) return m.reply(`Contoh: *${usedPrefix + command} 26, 11, 2023, 28*\n\nCatatan *${usedPrefix + command} Hari Pertama Menstruasi, Siklus*`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Hasil: *${anu.message.result}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return m.reply(`Contoh: *${usedPrefix+ command} 18 10 2003*`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == '*Tanggal Tidak Sah*') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Zodiak: *${anu.message.zodiak}*\nNomor: *${anu.message.nomor_keberuntungan}*\nAroma: *${anu.message.aroma_keberuntungan}*\nPlanet: *${anu.message.planet_yang_mengitari}*\nBunga: *${anu.message.bunga_keberuntungan}*\nWarna: *${anu.message.warna_keberuntungan}*\nBatu: *${anu.message.batu_keberuntungan}*\nElemen: *${anu.message.elemen_keberuntungan}*\nPasangan Zodiak: *${anu.message.pasangan_zodiak}*\nCatatan: *${anu.message.catatan}*`)
}
break
case 'shio': {
if (!text) return m.reply(`Format: *${usedPrefix + command} Shio*\n\nUntuk Detail *https://primbon.com/shio.htm*`)
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`Hasil: *${anu.message}*`)
break;
}
}
};
handler.tags = ['primbon']
handler.help = handler.command = ['nomorhoki',
'artimimpi', 
'artinama', 
'ramaljodoh',
'ramaljodohbali',
'suamiistri',
'ramalcinta',
'cocoknama',
'pasangan',
'jadiannikah',
'sifatusaha',
'rezeki',
'pekerjaan',
'nasib',
'penyakit',
'tarot',
'fengshui',
'haribaik', 
'harisangar',
'harisial',
'nagahari',
'arahrezeki', 
'peruntungan', 
'weton', 
'karakter', 
'keberuntungan', 
'memancing',
'masasubur',
'zodiak', 
'shio']
handler.limit = 1
export default handler