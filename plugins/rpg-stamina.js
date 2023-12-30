let handler = async m => m.reply(`
*How To Increase Stamina ⚡*

Ada Beberapa Fitur Untuk Menambah Stamina / ST
• Eat
• Drink
• Sport

*⚡ Addition*
*Stamina adalah kemampuan tubuh untuk bertahan dalam melakukan aktivitas fisik atau mental yang memerlukan daya tahan yang tinggi dalam waktu yang lama tanpa merasa lelah atau kelelahan yang berlebihan. Stamina bisa diasah melalui latihan teratur dan gaya hidup sehat seperti olahraga, tidur yang cukup, dan konsumsi makanan yang seimbang. Stamina yang baik dapat membantu meningkatkan kualitas hidup, meningkatkan produktivitas, dan mengurangi risiko penyakit yang berhubungan dengan gaya hidup tidak sehat seperti obesitas, diabetes, dan penyakit jantung.*
`.trim()) //


handler.help = ['stamina']
handler.tags = ['rpg']
handler.command = /^stamina$/i
handler.register = false
handler.premium = false
export default handler