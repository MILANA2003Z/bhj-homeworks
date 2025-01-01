document.addEventListener('DOMContentLoaded', () => {
    // Находим все контейнеры с вкладками
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(tabs => {
        const tabButtons = tabs.querySelectorAll('.tab');
        const tabContents = tabs.querySelectorAll('.tab__content');

        tabButtons.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаляем активные классы со всех вкладок и контента
                tabButtons.forEach(button => button.classList.remove('tab_active'));
                tabContents.forEach(content => content.classList.remove('tab__content_active'));

                // Добавляем активный класс к выбранной вкладке и соответствующему контенту
                tab.classList.add('tab_active');
                tabContents[index].classList.add('tab__content_active');
            });
        });
    });
});
