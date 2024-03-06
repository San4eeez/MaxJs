const fs = require('fs');
const sharp = require('sharp');

const sourceDir = './Images';
const destinationDir = './small_images';

async function compressImages() {
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir);
    }

    const files = fs.readdirSync(sourceDir);

    for (const file of files) {
        if (file.endsWith('.png')) {
            try {
                const inputBuffer = fs.readFileSync(`${sourceDir}/${file}`);
                const compressedImageBuffer = await sharp(inputBuffer)
                    .png({ withoutAdaptiveFiltering: true, palette: true, quality: 60, compressionLevel: 9, progressive: true, force: true })
                    .toBuffer();
                fs.writeFileSync(`${destinationDir}/${file}`, compressedImageBuffer);
                console.log(`Изображение ${file} успешно сжато и сохранено.`);
            } catch (error) {
                console.error(`Ошибка при обработке изображения ${file}:`, error);
            }
        }
    }
}

module.exports = { compressImages };
