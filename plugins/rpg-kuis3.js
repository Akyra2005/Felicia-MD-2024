let handler = async m => m.reply(`
*CHEMISTRY QUESTION ⚗️*

*Sebuah tabung tertutup berisi 2 mol gas ideal pada suhu dan tekanan tertentu. Kemudian, setengah dari gas tersebut dihilangkan dengan mengeluarkan gas melalui lubang kecil pada tabung. Sisa gas di dalam tabung kemudian dibiarkan mencapai kesetimbangan. Jika tekanan akhir gas di dalam tabung adalah 3/4 tekanan awalnya, maka berapa suhu akhir gas dalam tabung dalam kelvin?*

Kirimkan Jawabanmu Ke:
wa.me/6281249122429

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis3']
handler.tags = ['rpg']
handler.command = /^kuis3$/i
handler.register = false
handler.premium = false
export default handler