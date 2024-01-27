let handler = async (m, { db }) => {
  try {
    // Access user data using destructured property
    const user = db.data.users[m.sender];

    // Ensure user exists
    if (!user) {
      return m.reply('Pengguna tidak ditemukan. Silakan coba lagi.');
    }

    // Improved regex for code extraction
    const codeRegex = /^\/redeem\s+(\w+)<span class="math-inline">/i;
const codeMatch = m.text.match(codeRegex);  // Removed backslash
    if (!codeMatch || !codeMatch[1]) {
      return m.reply('Silakan masukkan kode redeem dengan benar. Contoh: /redeem KODE123');  // Removed backslashes
    }
    const redemptionCode = codeMatch[1];  // Removed backslash

// Check if the redemption code is valid and hasn't been used before
if (!redemptionCode.match(/^[a-zA-Z0-9]{4,16}$/i)) {  // Removed invalid part
  throw new Error('Kode redeem tidak valid.');
}

    // Check which code was used
    const codeType = redemptionCode.slice(0, 2);

    if (codeType === '764PV') {
      // Check if the first code has been used by 100 users
      if (db.data.usedCodes764PV.length >= 100) {
        return m.reply('Kode redeem 764PV sudah digunakan oleh 100 pengguna. Silakan gunakan kode redeem P6V40.');
      }

      // Check if the user has used the code before
      if (!user.usedCodes.includes(redemptionCode)) {
        // Give the user a reward of 40 limits
        user.limit += 20;

        // Mark the code as used
        user.usedCodes.push(redemptionCode);
        db.data.usedCodes764PV.push(redemptionCode);

        // Update the code usage data in JSON file
        const rdData = await readFile('./lib/rd.json');
        rdData[redemptionCode] = rdData[redemptionCode] || 0;
        rdData[redemptionCode]++;
        await writeFile('./lib/rd.json', JSON.stringify(rdData));

        await db.save(); // Save database changes
        m.reply('Berhasil meredeem kode 764PV! Kamu mendapatkan *40 Limit*. Terima kasih!');
      } else {
        return m.reply('Kode redeem 764PV sudah pernah digunakan sebelumnya.');
      }
    } else if (codeType === 'P6V40') {
      // Check if the second code has been used by 10 users
      if (db.data.usedCodesP6V40.length >= 10) {
        return m.reply('Kode redeem P6V40 sudah digunakan oleh 10 pengguna. Silakan gunakan kode redeem 764PV.');
      }

      // Check if the user has used the code before
      if (!user.usedCodes.includes(redemptionCode)) {
        // Give the user a reward of 40 limits
        user.limit += 40;

        // Mark the code as used
        user.usedCodes.push(redemptionCode);
        db.data.usedCodesP6V40.push(redemptionCode);

        // Update the code usage data in JSON file
        const rdData = await readFile('./lib/rd.json');
        rdData[redemptionCode] = rdData[redemptionCode] || 0;
        rdData[redemptionCode]++;
        await writeFile('./lib/rd.json', JSON.stringify(rdData));

        await db.save(); // Save database changes
        m.reply('Berhasil meredeem kode P6V40! Kamu mendapatkan *40 Limit*. Terima kasih!');
      } else {
        return m.reply('Kode redeem P6V40 sudah pernah digunakan sebelumnya.');
      }
    } else {
      return m.reply('Kode redeem tidak valid.');
    }
  } catch (error) {
    console.error('Error handling redeem code:', error);
    m.reply('Terjadi kesalahan saat memproses kode redeem. Silakan coba lagi nanti.');
  }
};



// Metadata for command usage
handler.help = ['redeem'];
handler.tags = ['main', 'rpg'];
handler.command = /^redeem$/i;
handler.group = true; // Assuming this is meant to be `handler.group = true;`

export default handler;
