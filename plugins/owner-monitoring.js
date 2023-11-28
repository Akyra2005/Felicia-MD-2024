import fetch from 'node-fetch';

// const MONITOR_API_KEY = process.env['MONITOR'];
const MONITOR_API_KEY = global.monitor

let handler = async (m, { conn }) => {
  m.reply('*Sedang Memuat Informasi*')
  try {
    const [monitorResponse, accountResponse] = await Promise.all([
      fetch('https://api.uptimerobot.com/v2/getMonitors', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json',
          logs: '1'
        })
      }),
      fetch('https://api.uptimerobot.com/v2/getAccountDetails', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json'
        })
      })
    ]);

    if (!monitorResponse.ok || !accountResponse.ok) {
      throw new Error('*E R R O R*');
    }

    const { monitors } = await monitorResponse.json();
    const { account } = await accountResponse.json();
    const monitorData = monitors.map(monitor => `ID Monitor: *${monitor.id}*\nJudul: *${monitor.friendly_name}*\nURL Monitor: *${monitor.url}*\nStatus Monitor: *${monitor.status}*\nPort: *${monitor.port}*\nSelang: *${monitor.interval}*\n\n`).join('');

    conn.reply(m.chat, `Berikut Adalah Informasi Monitor:\n\n${monitorData}\nTotal Monitor Aktif: *${account.up_monitors}*\nTotal Monitor Tidak Aktif: *${account.down_monitors}*\nTotal Monitor Dinonaktifkan: *${account.paused_monitors}*`, m);
  } catch (error) {
    m.reply('*API KEY Mencapai Batas, Mohon Tunggu 1 Menit Lagi*')
    console.error(error)
  }
};

handler.help = ['monitor']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(monitor)$/i
export default handler