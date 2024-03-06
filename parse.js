const fs = require('fs');
const https = require('https');
const path = require('path');

async function saveImage() {
    const imageUrl = 'https://thispersondoesnotexist.com/';

    return new Promise((resolve, reject) => {
        https.get(imageUrl, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const imageData = Buffer.concat(chunks);
                const imageFolder = 'images';
                const imageName = `image_${Date.now()}.png`;
                const imagePath = path.join(imageFolder, imageName);

                if (!fs.existsSync(imageFolder)) {
                    fs.mkdirSync(imageFolder);
                }

                fs.writeFileSync(imagePath, imageData);
                console.log(`Изображение сохранено как ${imagePath}`);
                resolve();
            });
        }).on('error', (err) => {
            console.error('Произошла ошибка при загрузке изображения:', err);
            reject(err);
        });
    });
}

async function saveImagesWithDelay(count) {
    let i = 0;
    while (i < count) {
        await saveImage();
        i++;
        await new Promise(resolve => setTimeout(resolve, 800)); // Задержка в 800 миллисекунд

    }
}

module.exports = { saveImagesWithDelay };
