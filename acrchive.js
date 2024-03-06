const fs = require('fs');
const archiver = require('archiver');

const sourceDir = './small_images';
const zipFilePath = './small_images.zip';

async function createZipArchive() {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const output = fs.createWriteStream(zipFilePath);

    output.on('error', function(err) {
        console.error('Ошибка записи архива:', err);
        process.exit(1);
    });

    output.on('close', function() {
        console.log(`Архив успешно создан: ${zipFilePath}`);
    });

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
}

module.exports = { createZipArchive };
