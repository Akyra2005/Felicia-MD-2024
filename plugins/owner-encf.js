import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import JavaScriptObfuscator from 'javascript-obfuscator';

let handler = async (m, { conn, text }) => {
  const sourceFolder = text; // Nama folder yang berisi file JavaScript yang akan dienkripsi

  const sourceDir = `./${sourceFolder}`;
  const tmpDir = './tmp';

  if (!fs.existsSync(sourceDir)) {
    m.reply(`*Folder "${sourceFolder}" Tidak Ditemukan*`);
    return;
  }

  try {
    m.reply('*Sedang Enkripsi File...*');

    const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.js'));
    const obfuscatedFiles = [];
    const errorFiles = [];

    for (const file of files) {
      const filePath = path.join(sourceDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      try {
        // Menggunakan javascript-obfuscator untuk mengobfuskasi kode
        const obfuscationResult = JavaScriptObfuscator.obfuscate(fileContents, {
          compact: true, // Menggunakan "true" untuk hasil yang lebih kompak
        });

        const obfuscatedCode = obfuscationResult.getObfuscatedCode();

        const obfuscatedFilePath = path.join(tmpDir, file);
        fs.writeFileSync(obfuscatedFilePath, obfuscatedCode);
        obfuscatedFiles.push(obfuscatedFilePath);
      } catch (error) {
        // Jika terjadi kesalahan saat mengenkripsi file, catat file yang bermasalah dan alasan kesalahan
        console.error(`Error Pada File "${file}": *${error.message}*`);
        errorFiles.push({ fileName: file, errorReason: error.message });
      }
    }

    if (obfuscatedFiles.length === 0) {
      m.reply('*Tidak Ada File JavaScript Yang Dapat Dienkripsi*');
      return;
    }

    if (errorFiles.length > 0) {
      const errorMessages = errorFiles.map(fileError => {
        return `File: *${fileError.fileName}*\nAlasan Error: *${fileError.errorReason}*`;
      });
      m.reply(`*Beberapa File Tidak Dapat Dienkripsi:*\n${errorMessages.join('\n')}`);
    }

    m.reply('*Sedang Membuat File Zip...'*);

    const zipFileName = `${sourceFolder}.zip`;
    const outputZipPath = path.join(tmpDir, zipFileName);

    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Tingkat kompresi (0-9)
    });

    archive.pipe(output);

    for (const obfuscatedFile of obfuscatedFiles) {
      archive.append(fs.createReadStream(obfuscatedFile), { name: path.basename(obfuscatedFile) });
    }

    // Menyelesaikan arsip zip dan menutup aliran tulis
    await archive.finalize();

    // Kirim file zip menggunakan conn.sendFile
    await conn.sendFile(m.chat, outputZipPath, zipFileName);

    // Hapus file-file yang sudah terenkripsi dan file zip
    for (const fileToDelete of [...obfuscatedFiles, outputZipPath]) {
      fs.unlinkSync(fileToDelete);
    }
  } catch (error) {
    console.error(error);
    m.reply(`Terjadi Kesalahan: *${error.message}*`);
  }
};

handler.help = ['encf <namafolder>'];
handler.tags = ['owner'];
handler.command = /^\encf/i;
handler.rowner = true;

export default handler;