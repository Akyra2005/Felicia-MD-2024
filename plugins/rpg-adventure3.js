const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 95) return m.reply(`
*Dibutuhkan Setidaknya 95HP ❤️ Untuk Berpetualang*
Beli Potion Untuk Return HP Di: *${usedPrefix}buy potion jumlah*,
Dan Ketik *${usedPrefix}heal jumlah* Untuk Menggunakan Potion
`.trim())
if (user.stamina < 95) return m.reply(`
*Dibutuhkan Setidaknya 95ST ⚡ Untuk Berpetualang*
*Cari Cara Menambah Stamina Di #stamina*
`.trim())
if (user.skilladventure < 2) return m.reply(`
*Dibutuhkan Setidaknya Level 2 A-A Untuk Berpetualang*
*Dapatkan Adventure Ability Di #library*
`.trim())
if (user.money < 44999) return m.reply(`
*Dibutuhkan Setidaknya 45K Money💵 Untuk Berpetualang*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Fitur Berpetualang Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*Anda Telah Berpetualang Ke Arah Selatan Dan Sampai Di ${pickRandom(['Argentina', 'Australia', 'Selandia Baru', 'Brasil', 'Chili', 'Uruguay', 'Paraguay', 'Afrika Selatan','Madagaskar'])}`
   
 // Cerita Petualangan
let adventures = [
    "Anda bertemu dengan sekelompok bajak laut di perjalanan dan berhasil mengalahkan mereka dengan kepandaian bertarung.",
    "Anda tersesat di tengah hutan yang lebat, tetapi dengan keberanian dan kecerdikan, Anda berhasil menemukan jalan keluar.",
    "Anda menemukan gua rahasia yang penuh dengan harta karun dan berhasil mengambil beberapa harta karun yang berharga.",
    "Anda bertemu dengan seekor naga legendaris dan berhasil membuatnya menjadi teman dengan memberinya makanan lezat.",
    "Anda menemukan sebuah desa yang sedang diserang oleh monster dan berhasil menyelamatkan penduduk desa dengan kekuatan Anda.",
    "Anda menemukan sebuah pulau tersembunyi yang dihuni oleh makhluk magis dan berhasil mempelajari beberapa sihir dari mereka.",
    "Anda berlayar ke tengah lautan yang luas dan menemukan sebuah pulau terpencil yang dihuni oleh suku pribumi yang ramah.",
    "Anda bertemu dengan seorang petualang legendaris yang memberi Anda pelajaran berharga tentang bertahan hidup di alam liar.",
    "Anda menemukan harta karun kuno yang tersembunyi di dalam reruntuhan kota kuno.",
    "Anda menemukan portal ajaib yang membawa Anda ke dunia paralel yang penuh dengan makhluk mistis.",
    "Anda berhasil melawan dan mengalahkan monster raksasa yang menghancurkan desa-desa sekitar.",
    "Anda menemukan jalan pintas yang belum pernah ditemukan sebelumnya menuju tempat tujuan petualangan Anda.",
    "Anda menemukan sebuah goa misterius yang ternyata menghubungkan ke kerajaan bawah tanah yang indah.",
    "Anda diberi tugas untuk menyelamatkan seorang putri yang diculik oleh seorang penyihir jahat.",
    "Anda berpartisipasi dalam perlombaan balap di hutan yang liar dan berhasil menjadi juara.",
    "Anda menemukan sebuah kapal karam yang berisi harta karun yang belum pernah ditemukan sebelumnya.",
    "Anda bertemu dengan seorang ahli naga yang mengajar Anda cara berkomunikasi dengan naga.",
    "Anda menemukan peti mati kuno yang ternyata berisi pintu menuju dunia setan yang mengerikan.",
    "Anda mendaki gunung tertinggi di dunia dan berhasil mencapai puncaknya dengan selamat.",
    "Anda menjadi penjelajah angkasa dan menjelajahi planet-planet baru yang belum pernah terjamah manusia.",
    "Anda berpetualang di hutan hujan Amazon dan menemukan spesies hewan langka yang belum pernah terlihat sebelumnya.",
    "Anda bertemu dengan makhluk alien yang damai dan menjalin persahabatan dengan mereka.",
    "Anda menemukan pulau tersembunyi yang dihuni oleh suku primitif yang memiliki kebudayaan unik.",
    "Anda berhasil menyelamatkan seorang ilmuwan terkenal yang diculik oleh kelompok teroris.",
    "Anda berlayar melintasi samudra yang ganas dan berhasil menghadapi badai dahsyat dengan keberanian Anda.",
    "Anda menemukan sebuah kota terendam di dasar laut yang memiliki rahasia kuno yang menakjubkan.",
    "Anda berpetualang di hutan salju yang dingin dan bertemu dengan makhluk legendaris yang hanya ada dalam cerita rakyat.",
    "Anda berhasil mengungkap misteri hilangnya harta karun legendaris yang menjadi teka-teki selama berabad-abad.",
    "Anda menemukan sebuah kuil tua yang tersembunyi di dalam gua dan berhasil membuka pintunya.",
    "Anda berperang melawan pasukan penjajah yang mencoba menguasai negeri Anda.",
    "Anda menjadi penjelajah laut dan menjelajahi lautan luas yang belum pernah terjamah manusia sebelumnya.",
    "Anda bertemu dengan seorang penyihir baik hati yang mengajarkan Anda sihir yang kuat.",
    "Anda menyelam ke dalam danau terlarang yang dihuni oleh makhluk air yang mistis.",
    "Anda berpetualang di padang pasir yang tandus dan menemukan oase tersembunyi yang menyegarkan.",
    "Anda berhasil menemukan ramuan ajaib yang dapat menyembuhkan segala penyakit.",
    "Anda berlayar di sungai yang ganas dan menghadapi jeratan air terjun yang menakutkan.",
    "Anda bertemu dengan seorang arkeolog terkenal dan membantunya menggali situs bersejarah yang berharga.",
    "Anda berpetualang di gua yang gelap dan menemukan harta karun yang tersembunyi di dalamnya.",
    "Anda menjadi anggota kelompok penjaga hutan dan melindungi flora dan fauna langka dari perburuan liar.",
    "Anda menemukan sebuah benda mistis yang memberi Anda kekuatan yang luar biasa.",
    "Anda bertemu dengan suku prajurit yang memiliki tradisi unik dalam bertempur.",
    "Anda berpetualang di kota yang ditinggalkan dan menemukan kehidupan baru yang berkembang di dalamnya.",
    "Anda berhasil menemukan sumber air yang ajaib yang dapat memberikan kehidupan abadi.",
    "Anda berlayar melintasi laut yang penuh dengan monster laut yang menakutkan.",
    "Anda bertemu dengan seorang seniman hebat yang mengajarkan Anda seni bela diri yang mematikan.",
    "Anda menemukan sebuah kerajaan tersembunyi yang belum pernah diketahui oleh manusia modern.",
    "Anda berpetualang di hutan yang terlarang dan bertemu dengan suku yang memiliki kekuatan gaib.",
    "Anda menjadi anggota tim penyelamat dan menyelamatkan orang yang terjebak dalam gua yang runtuh.",
    "Anda bertemu dengan seorang penyanyi terkenal yang meminta bantuan Anda untuk menemukan kembali suara yang hilang.",
    "Anda berpetualang di kota yang diambil alih oleh robot dan berhasil membebaskan penduduknya.",
    "Anda berhasil menemukan ramuan cinta yang membuat dua orang yang saling mencintai bersatu kembali.",
    "Anda menjadi arkeolog dan menemukan kota kuno yang hilang di tengah hutan.",
    "Anda berpetualang di kawasan kutub dan berhasil berteman dengan beruang kutub yang jinak.",
    "Anda bertemu dengan makhluk mitos yang dapat membaca pikiran dan memprediksi masa depan.",
    "Anda menemukan sebuah alat canggih yang dapat mengubah bentuk dan ukuran tubuh Anda.",
    "Anda berpetualang di hutan terlarang dan bertemu dengan suku yang menjaga hewan-hewan langka.",
    "Anda menjadi agen rahasia dan berhasil menggagalkan rencana jahat penjahat dunia.",
    "Anda bertemu dengan seorang ahli penjelajah gua yang mengajarkan Anda navigasi dalam kegelapan.",
    "Anda menemukan sebuah kerajaan terapung di atas awan yang penuh dengan misteri.",
    "Anda berpetualang di lautan yang penuh dengan pulau terapung dan menemukan harta karun yang tersembunyi di salah satu pulau tersebut.",
    "Anda menjadi pejuang pemberontak dan memimpin revolusi melawan rezim yang jahat.",
    "Anda bertemu dengan seorang tabib yang memiliki pengetahuan obat-obatan alami yang luar biasa.",
    "Anda menemukan sebuah sungai ajaib yang dapat mengabulkan satu keinginan setiap orang yang melintasinya.",
    "Anda berpetualang di gurun yang tandus dan menemukan oasis yang menyimpan rahasia keabadian.",
    "Anda berhasil menemukan pintu gerbang ke dunia lain yang penuh dengan kehidupan alien.",
    "Anda bertemu dengan seorang penyair terkenal yang mengajarkan Anda seni merangkai kata yang indah.",
    "Anda menemukan sebuah pulau tersembunyi yang dijaga oleh makhluk mitos yang menjaga harta karunnya.",
    "Anda menjadi peneliti bawah air dan menemukan spesies laut baru yang belum pernah terlihat sebelumnya.",
    "Anda berpetualang di gurun salju yang dingin dan bertemu dengan suku yang mampu bertahan hidup di kondisi ekstrem.",
    "Anda berhasil menemukan ramuan keabadian yang membuat Anda hidup selamanya.",
    "Anda bertemu dengan seorang pemburu harta karun yang licik dan berhasil menggagalkan rencananya.",
    "Anda menemukan sebuah taman rahasia yang penuh dengan tumbuhan langka yang memiliki kekuatan penyembuhan.",
    "Anda berpetualang di hutan yang terlarang dan menemukan pintu menuju dunia peri yang magis.",
    "Anda menjadi penjelajah gua dan menemukan gua terdalam yang belum pernah dijelajahi manusia.",
    "Anda bertemu dengan seorang penari yang memiliki gerakan yang anggun dan mengajarkan Anda tarian klasik.",
    "Anda menemukan sebuah buku ajaib yang berisi pengetahuan tentang segala hal di dunia ini.",
    "Anda berpetualang di lautan yang penuh dengan terumbu karang dan bertemu dengan ikan-ikan yang memiliki warna-warna yang menakjubkan.",
    "Anda berhasil menemukan sumber kekuatan yang memberikan Anda kemampuan super.",
    "Anda bertemu dengan seorang penjahat terkenal yang meminta bantuan Anda untuk memperbaiki kesalahannya.",
    "Anda menjadi penjelajah waktu dan menjelajahi masa lalu serta masa depan yang belum terjamah.",
    "Anda menemukan sebuah desa tersembunyi yang hidup dalam harmoni dengan alam dan hewan-hewan di sekitarnya.",
    "Anda berpetualang di hutan yang penuh dengan teka-teki dan berhasil memecahkan semua teka-teki tersebut.",
    "Anda bertemu dengan seorang seniman pahat yang mengajarkan Anda seni memahat yang indah.",
    "Anda menemukan sebuah alat penglihatan baru yang memungkinkan Anda melihat hal-hal yang tak terlihat oleh mata manusia biasa.",
    "Anda berpetualang di padang gurun yang luas dan bertemu dengan suku yang memiliki koneksi spiritual yang kuat.",
    "Anda berhasil menemukan kunci ajaib yang membuka pintu ke dunia yang penuh dengan keajaiban.",
    "Anda bertemu dengan seorang ahli strategi perang yang mengajarkan Anda cara memenangkan pertempuran dengan kecerdikan.",
    "Anda menemukan sebuah sungai dengan air yang dapat menyembuhkan segala jenis penyakit.",
    "Anda berpetualang di hutan bambu yang lebat dan menemukan kuil kuno yang menyimpan rahasia ilmu keabadian.",
    "Anda menjadi ahli pemrograman dan menciptakan program komputer yang dapat mengubah dunia.",
    "Anda bertemu dengan seorang penyair yang mengajarkan Anda cara mengekspresikan emosi Anda melalui kata-kata.",
    "Anda menemukan sebuah kota yang terkubur di bawah tanah dan memulihkan kehidupan di dalamnya.",
    "Anda berpetualang di dunia mimpi dan bertemu dengan makhluk-makhluk fantasi yang hidup di sana.",
    "Anda berhasil menemukan formula ramuan kehidupan yang memberikan keabadian kepada semua makhluk hidup.",
    "Anda bertemu dengan seorang guru yang bijaksana yang mengajarkan Anda nilai-nilai kehidupan yang penting.",
    "Anda menemukan sebuah pintu yang menghubungkan dunia nyata dengan dunia digital.",
    "Anda berpetualang di pegunungan yang terjal dan menemukan terowongan rahasia yang menghubungkan dua negara.",
    "Anda berhasil menemukan harta karun terbesar yang pernah ada di dunia ini.",
    "Anda bertemu dengan seorang ilmuwan jenius yang mengajarkan Anda penemuan-penemuan baru yang mengagumkan.",
    "Anda menemukan sebuah tempat tersembunyi yang dihuni oleh mahluk-mahluk mitos dari berbagai cerita rakyat.",
    "Anda menjadi detektif swasta dan memecahkan misteri pembunuhan yang rumit.",
    "Anda bertemu dengan seorang penyihir yang memiliki kekuatan untuk mengubah waktu.",
    "Anda berpetualang di pulau terpencil yang dijaga oleh makhluk raksasa dan berhasil mengatasi tantangan mereka.",
    "Anda berhasil menemukan portal yang menghubungkan dunia kita dengan dunia paralel yang penuh dengan teknologi canggih.",
    "Anda bertemu dengan seorang guru bela diri yang mengajarkan Anda ilmu bela diri yang mematikan.",
    "Anda menemukan sebuah koloni alien yang damai dan berhasil menjalin hubungan baik dengan mereka.",
    "Anda berpetualang di hutan yang ajaib dan menemukan tanaman langka yang memiliki kekuatan penyembuhan luar biasa.",
    "Anda menjadi pemimpin pasukan penjaga perdamaian dan berhasil menghentikan konflik antar bangsa.",
    "Anda bertemu dengan seorang ahli ilmu pengetahuan yang mengajarkan Anda pengetahuan yang revolusioner.",
    "Anda menemukan sebuah kerajaan di bawah tanah yang dihuni oleh makhluk-makhluk ajaib.",
    "Anda berpetualang di dunia imajinasi dan bertemu dengan tokoh-tokoh fiksi yang hidup di sana.",
    "Anda berhasil menemukan ramuan kebahagiaan yang membuat semua orang hidup dengan damai dan bahagia.",
    "Anda bertemu dengan seorang pemain biola yang hebat yang mengajarkan Anda cara mengungkapkan emosi melalui musik.",
    "Anda menemukan sebuah teknologi baru yang dapat mengubah energi matahari menjadi sumber energi yang tak terbatas.",
    "Anda berpetualang di hutan yang terlarang dan menemukan makhluk magis yang dapat memenuhi satu permintaan Anda.",
    "Anda menjadi pemburu monster dan melindungi manusia dari serangan monster-monster yang ganas.",
    "Anda bertemu dengan seorang penulis terkenal yang mengajarkan Anda seni menulis yang menginspirasi.",
    "Anda menemukan sebuah desa yang tersembunyi di dalam gua dan membantu penduduknya membangun kehidupan yang baru.",
    "Anda berpetualang di kota yang diambil alih oleh makhluk-"
  ];
    // Tambahkan cerita petualangan secara acak hingga mencapai jumlah 40
    while (adventures.length < 40) {
        let randomAdventure = pickRandom(adventures);
        adventures.push(randomAdventure);
    }
    
    let adventure = pickRandom(adventures);
    text += ` dan ${adventure}*\n`;
 
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\n*_Dan Kamu Mendapatkan Hadiah_*'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure3']
handler.tags = ['rpg']
handler.command = /^(adventure3|(ber)?petualang(ang)?)$/i
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 200000,
			advenaglory: 20000,
            money: 300000,
            coal: 10,
            wood: 20,
            anggur: 15,
            lobster: 15,
            lumba: 15,
            dory: 15,
            crystal: 3
        },
        lost: {
            health: 101 - user.cat * 4,
            stamina: 101 - user.cat * 4
        }
    }
    return rewards
}

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}