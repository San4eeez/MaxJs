const fs = require('fs');
const archiver = require('archiver');

// Путь к папке сжатых изображений
const sourceDir = './small_images';

// Путь к файлу архива
const zipFilePath = './small_images.zip';

// Создаем новый архив
const archive = archiver('zip', { zlib: { level: 9 } });

// Создаем поток для записи архива в файл
const output = fs.createWriteStream(zipFilePath);

// Обработчик события ошибки записи
output.on('error', function(err) {
    console.error('Ошибка записи архива:', err);
    process.exit(1);
});

// Обработчик события завершения записи
output.on('close', function() {
    console.log(`Архив успешно создан: ${zipFilePath}`);
});

// Подключаем поток записи к архиву
archive.pipe(output);

// Добавляем все файлы из папки sourceDir в архив
archive.directory(sourceDir, false);

// Финализируем архив (завершаем процесс записи)
archive.finalize();
