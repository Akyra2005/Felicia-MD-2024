let handler = async m => m.reply(`*List of YTB Supporting Components*


*EQUIPMENT (Maks 5 Lv)*

_Kamera_
.equipment2 kamera

_Pencahayaan_
.equipment2 pencahayaan

_Tripod_
.equipment2 tripod

_Software Editing_
.equipment2 se
_Internet_
.equipment2 internet

_Motherboard_
.equipment2 mb

_Prosesor (CPU)_
.equipment2 cpu

_Kartu Grafis (GPU)_
.equipment2 gpu

_RAM_
.equipment2 ram

_SSDs_
.equipment2 ssds

_Monitor_
.equipment2 monitor

_Headphone_
.equipment2 hp

_Mouse & Keyboard_
.equipment2 mak


*ACCORDING TO TYPE (Maks 40 Lv)*
.equipment2 att
_Lain-Lainnya_
_Peralatan Ini Dikhususkan Sesuai Tipemu, Ini Juga Penting_
`.trim()) // Tambah sendiri kalo mau


handler.help = ['equipment']
handler.tags = ['rpg']
handler.command = /^equipment$/i
handler.premium = false
export default handler