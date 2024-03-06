const fs = require('fs');
const sharp = require('sharp');

// Путь к папке с исходными изображениями
const sourceDir = './Images';

// Путь к папке для сохранения сжатых изображений
const destinationDir = './small_images';

// Создаем папку для сохранения сжатых изображений, если она не существует
if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
}

// Получаем список файлов в папке sourceDir
fs.readdir(sourceDir, async (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки с изображениями:', err);
        return;
    }

    // Обходим каждый файл
    for (const file of files) {
        // Проверяем, является ли файл изображением
        if (file.endsWith('.png')) {
            try {
                // Читаем исходное изображение
                const inputBuffer = fs.readFileSync(`${sourceDir}/${file}`);

                // Сжимаем изображение без изменения размеров и дополнительно оптимизируем его
                const compressedImageBuffer = await sharp(inputBuffer)
                    .png({ withoutAdaptiveFiltering: true, palette: true, quality: 60, compressionLevel: 9, progressive: true, force: true })
                    .toBuffer();

                // Сохраняем сжатое изображение
                fs.writeFileSync(`${destinationDir}/${file}`, compressedImageBuffer);

                console.log(`Изображение ${file} успешно сжато и сохранено.`);
            } catch (error) {
                console.error(`Ошибка при обработке изображения ${file}:`, error);
            }
        }
    }
});
