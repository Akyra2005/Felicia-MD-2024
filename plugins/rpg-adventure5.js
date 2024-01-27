const cooldown = 3600
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
if (user.skilladventure < 4) return m.reply(`
*Dibutuhkan Setidaknya Level 4 A-A Untuk Berpetualang*
*Dapatkan Adventure Ability Di #library*
`.trim())
    if (user.money < 99999) return m.reply(`
*Dibutuhkan Setidaknya 100K Money💵 Untuk Berpetualang*
*Dapatkan Money Di Fitur Role Playing Game*
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Fitur Berpetualang Sedang CD\nSelama *🕐 ${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*Anda Telah Berpetualang Dan Sampai Di ${pickRandom(['Russia', 'China', 'Jepang', 'Korea Selatan', 'Australia', 'Selandia Baru', 'Indonesia', 'Malaysia','Filipina'])}`

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
    let success = Math.random() > 0.3; // Peluang sukses 70%
    
    if (success) {
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
    } else {
        let reason = `${pickRandom(['bodoh', 'gagal', 'tidak memadai', 'kurang persiapan', 'kondisi cuaca buruk', 'pemimpin tidak efektif', 'peralatan rusak', 'komunikasi terputus', 'konflik internal', 'kurang dukungan tim', 'rencana yang buruk', 'tidak dapat mencapai tujuan', 'terlambat memulai', 'hilang arah', 'terperangkap', 'kegagalan sistem', 'kurangnya pengetahuan', 'kelelahan', 'keputusan yang salah', 'ketidaksiapan mental', 'kurangnya keterampilan', 'gangguan eksternal', 'sumber daya terbatas', 'kendala waktu', 'kesalahan perhitungan', 'konflik kepentingan', 'hambatan fisik', 'kurangnya perencanaan', 'kurangnya motivasi', 'kurangnya koordinasi', 'hilangnya dukungan', 'kehilangan barang berharga', 'keadaan darurat', 'kegagalan teknologi', 'pengawasan yang buruk', 'gangguan alam', 'tindakan tidak terduga', 'kemunduran ekonomi', 'persaingan yang kuat', 'kegagalan pemasaran', 'tidak ada permintaan', 'kurangnya pemasaran', 'krisis finansial', 'kerugian finansial', 'ketidakstabilan pasar', 'kegagalan investasi', 'tidak memenuhi harapan', 'kurangnya strategi', 'perubahan regulasi', 'kegagalan hukum', 'kurangnya perlindungan hukum', 'kegagalan administrasi', 'kesalahan administrasi', 'perubahan kebijakan', 'kegagalan kebijakan', 'kurangnya pendanaan', 'masalah perpajakan', 'kehilangan sumber daya', 'kurangnya keahlian teknis', 'penipuan', 'korupsi', 'kurangnya kepatuhan', 'kegagalan kepatuhan', 'perubahan lingkungan', 'kehilangan pasar', 'ketidakstabilan politik', 'konflik politik', 'kurangnya dukungan politik', 'kegagalan diplomasi', 'ketidakpercayaan', 'kehilangan kepercayaan', 'kehilangan pelanggan', 'kurangnya pelanggan', 'kegagalan bisnis', 'kegagalan kepemimpinan', 'kegagalan tim', 'kurangnya integritas', 'kegagalan komunikasi', 'kegagalan negosiasi', 'kegagalan kerjasama', 'ketidaksepakatan', 'kegagalan adaptasi', 'kegagalan inovasi', 'kurangnya keberanian', 'pengambilan risiko yang buruk', 'kegagalan pemecahan masalah', 'kegagalan evaluasi', 'kegagalan perencanaan', 'kegagalan pengambilan keputusan', 'kurangnya pengalaman', 'kurangnya pemahaman','kegagalan strategi', 'kegagalan implementasi', 'kegagalan kontrol kualitas', 'kegagalan pengawasan', 'kurangnya pemantauan', 'kurangnya responsif', 'kegagalan penyesuaian', 'kegagalan adaptasi', 'kurangnya kesiapan', 'kegagalan komitmen', 'kegagalan koordinasi', 'kurangnya dukungan manajemen', 'kegagalan pengelolaan proyek', 'kegagalan manajemen risiko', 'kurangnya analisis', 'kegagalan pemahaman pasar', 'kegagalan penelitian', 'kurangnya kualifikasi', 'kurangnya fokus', 'kegagalan pendekatan', 'kegagalan pendekatan kreatif', 'kegagalan strategi pemasaran', 'kegagalan operasional', 'kegagalan pengadaan', 'kurangnya pengembangan produk', 'kegagalan pengembangan', 'kegagalan adaptasi teknologi', 'kurangnya penyesuaian budaya', 'kegagalan identifikasi masalah', 'kurangnya pemecahan masalah', 'kegagalan pengawasan keuangan', 'kegagalan manajemen keuangan', 'kegagalan analisis data', 'kurangnya akses informasi', 'kegagalan integrasi sistem', 'kegagalan pengaturan prioritas', 'kurangnya perhatian detail', 'kegagalan pengelolaan konflik', 'kegagalan pengelolaan waktu', 'kegagalan pengelolaan sumber daya manusia', 'kegagalan pengelolaan performa', 'kurangnya pengelolaan stres', 'kurangnya pemenuhan target', 'kegagalan perencanaan keuangan', 'kurangnya analisis keuangan', 'kegagalan evaluasi kinerja', 'kegagalan manajemen kinerja', 'kegagalan manajemen perubahan', 'kurangnya komunikasi timbal balik', 'kurangnya penghargaan', 'kegagalan pemberian umpan balik', 'kegagalan pengembangan keterampilan', 'kegagalan pelatihan', 'kurangnya pengembangan kepemimpinan', 'kurangnya pengembangan tim', 'kegagalan rekruitmen', 'kegagalan retensi karyawan', 'kurangnya budaya kerja yang inklusif', 'kegagalan penghargaan kinerja', 'kegagalan pengenalan produk', 'kegagalan penetapan harga', 'kegagalan distribusi', 'kurangnya pemahaman pasar', 'kegagalan penetrasi pasar', 'kurangnya strategi branding', 'kurangnya strategi promosi', 'kegagalan penjualan', 'kegagalan pemasaran digital', 'kegagalan manajemen rantai pasok', 'kegagalan pengadaan bahan baku', 'kegagalan pengiriman', 'kegagalan manajemen produksi', 'kurangnya perawatan', 'kegagalan perawatan', 'kurangnya pemeliharaan', 'kegagalan perbaikan', 'kegagalan keandalan', 'kegagalan keamanan', 'kurangnya kebersihan', 'kegagalan pengawasan kualitas', 'kurangnya pengendalian mutu', 'kegagalan manajemen inventaris', 'kegagalan manajemen persediaan', 'kegagalan pengendalian biaya', 'kurangnya efisiensi', 'kegagalan penghematan', 'kegagalan manajemen energi', 'kegagalan manajemen risiko lingkungan', 'kurangnya kesadaran lingkungan', 'kegagalan kepatuhan lingkungan', 'kurangnya keamanan data', 'kegagalan kepatuhan privasi', 'kurangnya perlindungan kekayaan intelektual', 'kegagalan pengelolaan resiko teknologi', 'kegagalan perlindungan informasi', 'kurangnya perbaikan berkelanjutan', 'kurangnya inovasi berkelanjutan', 'kegagalan pengelolaan dampak sosial', 'kegagalan tanggung jawab sosial', 'kegagalan etika bisnis', 'kurangnya pengelolaan keragaman', 'kegagalan keragaman dan inklusi', 'kegagalan manajemen reputasi', 'kegagalan kepuasan pelanggan', 'kurangnya pelayanan pelanggan', 'kegagalan penanganan keluhan', 'kegagalan layanan pelanggan', 'kurangnya responsivitas pelanggan', 'kegagalan komunikasi pelanggan', 'kegagalan pemenuhan janji', 'kegagalan kehandalan produk', 'kurangnya kebijakan pengembalian', 'kegagalan kepuasan karyawan', 'kegagalan manajemen keberagaman', 'kurangnya keadilan dalam organisasi', 'kurangnya kepuasan kerja', 'kegagalan pengembangan keterampilan pribadi', 'kegagalan manajemen pengetahuan', 'kurangnya kolaborasi tim', 'kegagalan pembuatan keputusan kolektif', 'kegagalan delegasi tugas', 'kegagalan manajemen waktu individu', 'kurangnya pengembangan karir', 'kegagalan pengembangan kepemimpinan individu', 'kegagalan manajemen keseimbangan kerja-hidup', 'kurangnya manajemen stres', 'kegagalan manajemen konflik tim', 'kegagalan manajemen perubahan individu', 'kegagalan manajemen kinerja individu', 'kurangnya pemenuhan tujuan pribadi', 'kegagalan manajemen ekspektasi', 'kegagalan pengaturan prioritas pribadi', 'kegagalan manajemen keuangan pribadi', 'kurangnya pengelolaan energi pribadi', 'kegagalan manajemen waktu pribadi', 'kurangnya kreativitas', 'kegagalan adaptasi teknologi', 'kegagalan mengikuti tren', 'kurangnya kecerdasan emosional', 'kegagalan pengambilan risiko', 'kegagalan memahami pasar', 'kurangnya pemahaman teknologi'])}`
        let healthReduction = user.health * 0.9; // Mengurangi 90% HP
        let staminaReduction = user.stamina * 0.9; // Mengurangi 90% Stamina
        
        if (Math.random() < 0.2) {
            reason = 'Anda digebal dan kehilangan sebagian uang.';
            let moneyReduction = user.money * 0.005; // Mengurangi 0.5% Money
            user.money -= moneyReduction;
            text += `\n\n*Anda gagal karena ${reason}*`;
            text += `\n*HP* berkurang sebesar ${healthReduction}\n*Stamina* berkurang sebesar ${staminaReduction}\n*Money* berkurang sebesar ${moneyReduction}`;
        } else {
            reason = 'Anda mengalami kegagalan dalam petualangan.';
            text += `\n\n*Anda gagal karena ${reason}*`;
            text += `\n*HP* berkurang sebesar ${healthReduction}\n*Stamina* berkurang sebesar ${staminaReduction}`;
        }
        
        user.health -= healthReduction;
        user.stamina -= staminaReduction;
    }
    
    m.reply(text.trim())
    user.lastadventure = new Date() * 1
}
handler.help = ['adventure5']
handler.tags = ['rpg']
handler.command = /^(adventure5|(ber)?petualang(ang)?)$/i
handler.register = false
handler.limit = 1
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 700000,
            advenaglory: 70000,
            money: 700000,
			diamond: 10,
			crystal: 5
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
