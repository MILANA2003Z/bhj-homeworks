document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        // Открытие/закрытие списка по клику на выбранное значение
        value.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        // Установка нового значения при выборе пункта меню
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedText = item.textContent.trim();
                value.textContent = selectedText;
                list.classList.remove('dropdown__list_active');
            });
        });  
        // Закрытие списка при клике вне выпадающего меню
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });  
});
