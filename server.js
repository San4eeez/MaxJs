const express = require('express');
const app = express();
const path = require('path');
const { saveImagesWithDelay } = require('./parse');
const { compressImages } = require('./min');
const { createZipArchive } = require('./acrchive');
const { clearFolder } = require('./clean'); // Путь к файлу, где определена функция clearFolder


// Обработчик GET-запроса на маршрут '/download'
app.get('/download', async (req, res) => {
    try {
        // Вызываем нужные функции для создания и скачивания архива
        await saveImagesWithDelay(10);
        await compressImages();
        await createZipArchive();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await clearFolder('./images');
        await clearFolder('./small_images');

        // Отправляем архив клиенту
        const zipFilePath = path.join(__dirname, 'small_images.zip');
        console.log('Успех!');
        res.download(zipFilePath);
    } catch (error) {
        console.error('Ошибка при выполнении скриптов:', error);
        // Отправляем статус ошибки 500 и сообщение об ошибке
        res.status(500).send('Произошла ошибка при обработке запроса.');
    }
});

// Указываем Express.js слушать определенный порт
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
