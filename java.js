document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
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
