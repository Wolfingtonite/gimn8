// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Показать/скрыть кнопку
  function toggleScrollButton() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollBtn.style.display = scrollY > 300 ? "block" : "none";
  }

  // Плавная прокрутка
  function scrollToTop() {
    const scrollStep = -window.scrollY / 15;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  // Альтернатива для современных браузеров
  function smoothScrollToTop() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (e) {
      // Fallback для старых браузеров
      scrollToTop();
    }
  }

  // Слушатели событий
  window.addEventListener("scroll", toggleScrollButton);
  scrollBtn.addEventListener("click", smoothScrollToTop);

  // Инициализация
  toggleScrollButton(); // Проверка при загрузке
});
