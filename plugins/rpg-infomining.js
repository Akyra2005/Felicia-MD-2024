let handler = async m => m.reply(`
*Menambang adalah kegiatan ekstraksi atau penggalian bahan tambang atau sumber daya alam dari suatu lokasi di bumi. Kegiatan ini dapat mencakup pengambilan logam, mineral, batu bara, minyak bumi, atau bahan tambang lainnya. Menambang sering melibatkan proses pengeboran, peledakan, dan pengangkutan untuk mendapatkan sumber daya tersebut. Ini merupakan sektor ekonomi yang penting, tetapi juga dapat memiliki dampak lingkungan yang serius jika tidak diatur dengan baik.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infomining']
handler.tags = ['rpg']
handler.command = /^infomining$/i
handler.register = false
handler.premium = false
export default handler