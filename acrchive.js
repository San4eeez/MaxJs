const fs = require('fs');
const archiver = require('archiver');

async function createZipArchive(imagesFolderPath, excelFilePath, zipFilePath) {
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
    archive.directory(imagesFolderPath, false);

    // Добавление Excel файла в архив
    const excelFileData = fs.readFileSync(excelFilePath);
    archive.append(excelFileData, { name: 'data.xlsx' });

    archive.finalize();
}

module.exports = { createZipArchive };
