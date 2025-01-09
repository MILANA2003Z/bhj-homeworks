document.addEventListener("DOMContentLoaded", () => {
    const fontSizeControls = document.querySelectorAll(".font-size");
    const book = document.getElementById("book");

    fontSizeControls.forEach((control) => {
        control.addEventListener("click", (event) => {
            event.preventDefault();

            // Удаляем активный класс у всех контролов
            fontSizeControls.forEach((item) => item.classList.remove("font-size_active"));

            // Добавляем активный класс текущему элементу
            control.classList.add("font-size_active");

            // Убираем все классы, связанные с размером шрифта
            book.classList.remove("book_fs-small", "book_fs-big");

            // Добавляем соответствующий класс на элемент book, если он указан в data-size
            const size = control.dataset.size;
            if (size === "small") {
                book.classList.add("book_fs-small");
            } else if (size === "big") {
                book.classList.add("book_fs-big");
            }
        });
    });
});
