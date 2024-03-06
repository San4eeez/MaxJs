const fs = require('fs');
const https = require('https');
const path = require('path');

function saveImage() {
    const imageUrl = 'https://thispersondoesnotexist.com/';

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
        });
    }).on('error', (err) => {
        console.error('Произошла ошибка при загрузке изображения:', err);
    });
}

// Функция для вызова с задержкой
function saveImagesWithDelay(count) {
    let i = 0;
    const intervalId = setInterval(() => {
        saveImage();
        i++;
        if (i === count) {
            clearInterval(intervalId);
        }
    }, 800); // Задержка в 1 секунду
}

// Вызываем функцию saveImagesWithDelay для сохранения 10 изображений с задержкой
saveImagesWithDelay(10);
