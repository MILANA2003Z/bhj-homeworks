let counter = 0;
const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("clicker__counter");

// Добавляем слушатель события клика на печеньку
cookie.addEventListener("click", () => {
    // Увеличиваем счётчик
    counter++;
    counterDisplay.textContent = counter;

    // Чередуем увеличение и уменьшение печеньки
    if (cookie.width === 200) {
        cookie.width = 250; // Увеличиваем
    } else {
        cookie.width = 200; // Возвращаем к исходному размеру
    }
});
