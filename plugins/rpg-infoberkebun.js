let handler = async m => m.reply(`
*Berkebun adalah kegiatan bercocok tanam yang melibatkan penanaman, perawatan, dan panen tanaman. Ini bisa dilakukan di halaman belakang rumah, taman, atau lahan pertanian. Beberapa aspek berkebun yang umum melibatkan pemilihan tanaman, penyiraman, pemupukan, dan penanganan hama. Berkebun tidak hanya memberikan hasil tanaman yang dapat dikonsumsi, tetapi juga memberikan manfaat psikologis dan fisik, seperti kegiatan olahraga ringan dan relaksasi.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoberkebun']
handler.tags = ['rpg']
handler.command = /^infoberkebun$/i
handler.register = false
handler.premium = false
export default handler