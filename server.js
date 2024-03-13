const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { saveImagesWithDelay } = require('./parse');
const { compressImages } = require('./min');
const { createZipArchive } = require('./acrchive');
const { clearFolder } = require('./clean');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download', async (req, res) => {
    try {
        await saveImagesWithDelay(5);
        await compressImages();

        // Генерация Excel файла
        await require('./exel');
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Создание архива с добавлением Excel файла
        await createZipArchive('./small_images', './data.xlsx', './small_images.zip');

        await new Promise(resolve => setTimeout(resolve, 5000));
        await clearFolder('./images');
        await clearFolder('./small_images');

        const zipFilePath = path.join(__dirname, 'small_images.zip');
        console.log('Успех!');
        res.download(zipFilePath);
    } catch (error) {
        console.error('Ошибка при выполнении скриптов:', error);
        res.status(500).send('Произошла ошибка при обработке запроса.');
    }
});