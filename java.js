// Код для Панели навигации на мобильных \\

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

// Галерея \\

// Получаем элементы
const imgElements = document.querySelectorAll(".img-element"); // Все элементы с изображениями
const overlay = document.querySelector(".overlay"); // Оверлей
const largeImg = document.querySelector(".large-img"); // Увеличенное изображение
const closeBtn = document.querySelector(".close-btn"); // Кнопка закрытия

// Открываем оверлей при клике на изображение
imgElements.forEach((element) => {
  element.addEventListener("click", () => {
    const imgSrc = element.querySelector("img").src; // Получаем src изображения
    largeImg.src = imgSrc; // Устанавливаем src в увеличенное изображение
    overlay.classList.add("open"); // Показываем оверлей
  });
});

imgElements.forEach((element) => {
  element.addEventListener("click", () => {
    const imgSrc = element.querySelector("img").src; // Получаем src изображения
    largeImg.src = imgSrc; // Устанавливаем src в увеличенное изображение
    overlay.classList.add("open"); // Показываем оверлей
  });
});

// Закрываем оверлей при клике на крестик
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open"); // Скрываем оверлей
});

// Закрываем оверлей при клике вне изображения
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    // Если клик был на оверлей (не на изображение)
    overlay.classList.remove("open"); // Скрываем оверлей
  }
});
