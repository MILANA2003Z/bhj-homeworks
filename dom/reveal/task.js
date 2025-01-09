document.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // Можно настроить видимость элемента

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });
});
