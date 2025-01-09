function startRotators() {
    // Находим все элементы ротаторов
    const rotators = document.querySelectorAll(".rotator");

    // Для каждого ротатора запускаем отдельный цикл смены текста
    rotators.forEach((rotator) => {
        const cases = rotator.querySelectorAll(".rotator__case");
        let activeIndex = 0;

        setInterval(() => {
            // Убираем активный класс у текущего элемента
            cases[activeIndex].classList.remove("rotator__case_active");

            // Определяем следующий индекс
            activeIndex = (activeIndex + 1) % cases.length;

            // Добавляем активный класс следующему элементу
            cases[activeIndex].classList.add("rotator__case_active");
        }, 1000); // Интервал 1 секунда
    });
}

// Запускаем ротаторы после загрузки DOM
document.addEventListener("DOMContentLoaded", startRotators);
