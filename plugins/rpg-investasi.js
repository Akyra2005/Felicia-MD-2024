let handler = async (m, { conn, text, usedPrefix, command }) => {
  let investments = {
    saham: { risk: 0.2, minReturn: 0.1, maxReturn: 0.3 },
    properti: { risk: 0.1, minReturn: 0.05, maxReturn: 0.2 },
    emas: { risk: 0.15, minReturn: 0.07, maxReturn: 0.25 },
    kripto: { risk: 0.25, minReturn: 0.15, maxReturn: 0.4 },
    obligasi: { risk: 0.08, minReturn: 0.03, maxReturn: 0.15 },
    startup: { risk: 0.3, minReturn: 0.2, maxReturn: 0.5 },
    forex: { risk: 0.18, minReturn: 0.08, maxReturn: 0.25 },
    komoditas: { risk: 0.22, minReturn: 0.12, maxReturn: 0.35 },
    reksadana: { risk: 0.12, minReturn: 0.06, maxReturn: 0.18 },
    indeks_saham: { risk: 0.15, minReturn: 0.09, maxReturn: 0.22 }
    obligasi_korporasi: { risk: 0.1, minReturn: 0.05, maxReturn: 0.15 },
    properti_komersial: { risk: 0.18, minReturn: 0.08, maxReturn: 0.25 },
    energi: { risk: 0.2, minReturn: 0.1, maxReturn: 0.3 },
    teknologi: { risk: 0.25, minReturn: 0.15, maxReturn: 0.35 },
    logam_mulia: { risk: 0.15, minReturn: 0.07, maxReturn: 0.2 },
    sektor_kesehatan: { risk: 0.12, minReturn: 0.06, maxReturn: 0.18 },
    obligasi_pemerintah: { risk: 0.08, minReturn: 0.03, maxReturn: 0.12 },
    valuta_asing: { risk: 0.22, minReturn: 0.12, maxReturn: 0.28 },
    real_estate: { risk: 0.2, minReturn: 0.1, maxReturn: 0.25 },
    saham_dividen: { risk: 0.15, minReturn: 0.08, maxReturn: 0.18 },
    sektor_konsumen: { risk: 0.2, minReturn: 0.1, maxReturn: 0.25 },
    sektor_keuangan: { risk: 0.18, minReturn: 0.09, maxReturn: 0.22 }
  };

  let destination = text.split(' ')[0].toLowerCase();
  if (!investments[destination]) throw `Daftar Destinasi Investasi: ${Object.keys(investments).join(', ')}`;
  if (!text.split(' ')[1]) throw `Format: *${usedPrefix}investasi <destinasi> <jumlah>*`;

  let value = isNaN(text.split(' ')[1]) ? parseInt(text.split(' ')[1].replace(/k|rb|juta/gi, match => {
    if (match == 'k') return '000';
    if (match == 'rb') return '00000';
    if (match == 'juta') return '000000';
    return '';
  })) : parseInt(text.split(' ')[1]);

  if (value > global.db.data.users[m.sender].money) throw '*Uang Kamu Tidak Cukup Untuk Melakukan Investasi*';
  if (value < 1000) throw '*Minimal Investasi Adalah 1000*';

  let investment = investments[destination];
  let minProfit = value * investment.minReturn;
  let maxProfit = value * investment.maxReturn;
  let profit = Math.floor(Math.random() * (maxProfit - minProfit + 1) + minProfit);
  let limit = 7 * 24 * 60 * 60 * 1000;
  let expiration = new Date() * 1 + limit;

  global.db.data.users[m.sender].money -= value;
  global.db.data.users[m.sender].invest += value;
  global.db.data.users[m.sender].investExpiration = expiration;
  global.db.data.users[m.sender].investProfit = profit;

  conn.reply(m.chat, `Berhasil Melakukan Investasi Sebesar ${value} ke ${destination}. Dengan tingkat risiko ${investment.risk * 100}%. Keuntungan Investasi Sebesar Akan Diterima Setelah ${clockString(limit)}.`, m);

  setInterval(() => {
    let user = global.db.data.users[m.sender];
    if (user.invest > 0 && new Date() * 1 >= user.investExpiration) {
      let profit = user.investProfit;
      global.db.data.users[m.sender].money += profit;
      global.db.data.users[m.sender].invest = 0;
      global.db.data.users[m.sender].investExpiration = 0;
      global.db.data.users[m.sender].investProfit = 0;
      conn.reply(m.chat, `Investasi Sebesar ${user.invest} di ${destination} Telah Berakhir. Kamu Mendapatkan Keuntungan Sebesar ${profit}.`, m);
    }
  }, 1000);
}

// ...


handler.help = ['investasi <jumlah uang>']
handler.tags = ['economy']
handler.command = /^investasi$/i
handler.limit = 1
handler.group = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h} jam ${m} menit ${s} detik`
}
