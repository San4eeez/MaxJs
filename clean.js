const fs = require('fs');
const path = require('path');

// Функция для удаления содержимого папки
function clearFolder(folderPath) {
    try {
        // Получаем список файлов в папке
        const files = fs.readdirSync(folderPath);

        // Обходим каждый файл и удаляем его
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.unlinkSync(filePath);
            console.log(`Файл ${file} удален.`);
        });

        console.log(`Содержимое папки ${folderPath} успешно удалено.`);
    } catch (error) {
        console.error(`Ошибка при удалении содержимого папки ${folderPath}:`, error);
    }
}

module.exports = { clearFolder };
