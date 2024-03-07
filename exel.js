const fs = require('fs');
const ExcelJS = require('exceljs');
const trans = require('cyrillic-to-translit-js');

// Путь к папке с изображениями
const pathToImages = 'images';

// Создать новый экземпляр рабочей книги Excel
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Images');

// Функция для генерации случайного имени и фамилии
function generateRandomName() {
    const names = ['Иван', 'Мария', 'Александр', 'Екатерина', 'Михаил', 'Анна', 'Сергей', 'Ольга', 'Дмитрий', 'Татьяна'];
    const surnames = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Забротский', 'Покемонов', 'Новиков', 'Козлов'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    return `${randomName} ${randomSurname}`;
}

// Функция для генерации случайного номера телефона
function generateRandomPhoneNumber() {
    const prefix = '+7';
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 цифр
    return prefix + randomNumber;
}

// Функция для генерации случайного адреса электронной почты
function generateRandomEmail() {
    const domains = ['mail.ru','gmail.com','pokemon.ru','pikachu.com','beedrill.som','spewpa.plow','walerra.yazdes'];
    const randomName = generateRandomName().replace(/\s+/g, '').toLowerCase();
    const transName = trans().transform(randomName, "_");
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomChars = 'abcdefghijklmnopqrstuvwxyz123456789'; // доступные символы
    let additionalChars = '';
    for (let i = 0; i < 5; i++) {
        additionalChars += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return `${transName}${additionalChars}@${randomDomain}`;
}

// Получить список файлов в папке
fs.readdir(pathToImages, (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки:', err);
        return;
    }

    // Записать названия файлов, имя, фамилию, номер телефона и email в документ
    files.forEach((file, index) => {
        const filename = file.split('.').slice(0, -1).join('.'); // Извлечь название без расширения
        const randomName = generateRandomName();
        const randomPhoneNumber = generateRandomPhoneNumber();
        const randomEmail = generateRandomEmail();
        sheet.addRow([filename + '.png', randomName, randomPhoneNumber, randomEmail]);
    });

    // Сохранить документ
    workbook.xlsx.writeFile('image_data_with_email.xlsx')
        .then(() => {
            console.log('Excel документ успешно создан.');
        })
        .catch((error) => {
            console.error('Ошибка сохранения Excel документа:', error);
        });
});
