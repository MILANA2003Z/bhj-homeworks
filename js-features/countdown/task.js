document.addEventListener("DOMContentLoaded", () => {
    // Получаем элемент таймера
    const timerElement = document.getElementById('timer');
    
    // Преобразуем текстовое значение в число
    let timeLeft = parseInt(timerElement.textContent, 10);

    // Функция обратного отсчета
    const countdown = setInterval(() => {
        // Уменьшаем значение на 1
        timeLeft--;

        // Обновляем текст в таймере
        timerElement.textContent = timeLeft;

        // Проверяем, завершился ли таймер
        if (timeLeft <= 0) {
            clearInterval(countdown);  // Останавливаем таймер
            alert("Вы победили в конкурсе!");  // Выводим уведомление
        }
    }, 1000);  // Интервал в 1 секунду (1000 мс)
});
