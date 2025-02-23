// Код для Панели навигации на мобильных

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const topContainer = document.querySelector(".top-container");

  // Добавляем обработчик события на кнопку
  burgerMenu.addEventListener("click", function () {
    topContainer.classList.toggle("active");

    // Анимация иконки бургера
    this.textContent = topContainer.classList.contains("active") ? "✕" : "☰";
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (e) => {
    if (!topContainer.contains(e.target) && !burgerMenu.contains(e.target)) {
      topContainer.classList.remove("active");
      burgerMenu.textContent = "☰";
    }
  });
});

// Кнопка для прокрутки наверх
const jumpToTopBtn = document.getElementById("jumpToTopBtn");

// Плавная прокрутка страниц вверх при нажатии на кнопку
jumpToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
