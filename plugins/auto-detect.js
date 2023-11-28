import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return;
	const edtr = `🧙‍♂️ @${m.sender.split('@')[0]} 🧙‍♂️`;

	const messages = {
		21: `Mengubah Subject Grup Menjadi:\n*${m.messageStubParameters[0]}*`,
		33: `Telah Mengganti Nomornya`,
		22: `Telah Mengubah Ikon Grup`,
		1: `*Mereset* Tautan Grup`,
		23: `*Mereset* Tautan Grup`,
		132: `*Mereset* Tautan Grup`,
		24: `*Mengubah Deskripsi Grup*\n\n${m.messageStubParameters[0]}`,
		25: `Telah Mengatur Agar *${m.messageStubParameters[0] == 'on' ? 'Hanya Admin' : 'Semua Peserta'}* Yang Dapat Mengedit Info Grup`,
		26: `Telah *${m.messageStubParameters[0] == 'on' ? 'Menutup' : 'Membuka'}* Grup\nSekarang *${m.messageStubParameters[0] == 'on' ? 'Hanya Admin Yang' : 'Semua Peserta'}* Dapat Mengirim Pesan`,
		29: `Telah Menjadikan @${m.messageStubParameters[0].split('@')[0]} Sebagai Admin`,
		30: `Telah Memberhentikan @${m.messageStubParameters[0].split('@')[0]} Dari Admin`,
		72: `Mengubah Durasi Pesan Sementara Menjadi *@${m.messageStubParameters[0]}*`,
		123: `*Menonaktifkan* Pesan Sementara`,
		45: `Memulai Panggilan Video/Audio Di Grup`,
		46: `Memulai Panggilan Video/Audio Di Grup`,
		71: `Mau Bergabung Ke Grup Ini`,
		74: `Mengirim Media Sekali Tampil`,
		141: `Bergabung Melalui Tautan`,
		142: `Membuat Grup Komunitas`,
		143: `Menghapus Grup Komunitas`,
		156: `Melakukan Polling Di Grup`,
	};

	const messageType = messages[m.messageStubType];
	
	if (messageType) {
		await this.sendMessage(m.chat, { text: `${edtr} ${messageType}`, mentions: m.messageStubParameters[0] !== undefined ? [m.sender, m.messageStubParameters[0]] : [m.sender] }, { quoted: fakes });
	} else {
		console.log({
			messageStubType: m.messageStubType,
			messageStubParameters: m.messageStubParameters,
			type: WAMessageStubType[m.messageStubType],
		});
	}
}

export const disabled = false;
