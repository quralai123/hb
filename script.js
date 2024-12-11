const button = document.querySelector('.button'); // Первая кнопка
const balloonContainer = document.getElementById('balloon-container'); // Контейнер для шариков




const colors = [
  '#FF33F6', // Ярко-розовый
  '#FFDBE9', // Светло-розовый
  '#A5D8FF', // Небесно-голубой
  '#D4A5A5', // Пыльно-розовый
  '#FF1493', // Глубокий розовый
  '#800080', // Фиолетовый
  '#FFFFFF',  // Белый
  'rgb(221, 175, 175)', // Пастельный розовый
];

let clearButton; // Переменная для второй кнопки

// Слушатель на первую кнопку
button.addEventListener('click', () => {
  let totalBalloons = 2000;
  let balloonsPerBatch = 2;
  let delay = 200;

  function createBalloons() {
    for (let i = 0; i < balloonsPerBatch; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');

      const randomPosition = Math.random() * window.innerWidth;
      balloon.style.left = `${randomPosition}px`; // Исправлено использование интерполяции

      const size = Math.random() * 60 + 20;
      balloon.style.width = `${size}px`; // Исправлено использование интерполяции
      balloon.style.height = `${size}px`; // Исправлено использование интерполяции

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.backgroundColor = randomColor;

      balloonContainer.appendChild(balloon);

      balloon.addEventListener('animationend', () => {
        balloon.remove();
      });
    }
  }

// Изменяем цвет текста и тень медленно
document.querySelector('h1').style.transition = 'color 2s ease, text-shadow 2s ease';
document.querySelector('p').style.transition = 'color 2s ease, text-shadow 2s ease';
document.querySelector('h3').style.transition = 'color 2s ease, text-shadow 2s ease';
document.querySelector('h4').style.transition = 'color 2s ease, text-shadow 2s ease';

document.querySelector('h1').style.color = 'lavender';
document.querySelector('h1').style.textShadow = '10px 10px 10px rgba(255, 255, 255, 0.7)';

document.querySelector('p').style.color = 'lavender';
document.querySelector('p').style.textShadow = '10px 10px 10px rgba(255, 255, 255, 0.7)';

document.querySelector('h3').style.color = 'lavender';
document.querySelector('h3').style.textShadow = '10px 10px 10px rgba(255, 255, 255, 0.7)';


document.querySelector('h4').style.color = 'lavender';
document.querySelector('h4').style.textShadow = '10px 10px 10px rgba(255, 255, 255, 0.7)';


  //transition: 0.15s linear;


  const intervalId = setInterval(() => {
    if (totalBalloons <= 0) {
      clearInterval(intervalId);
    } else {
      createBalloons();
      totalBalloons -= balloonsPerBatch;
    }
  }, delay);

  document.body.classList.add('change-background');

  // // Для первой картинки
  // const firstImageContainer = document.getElementById('image-container');
  // firstImageContainer.classList.add('show'); // Добавляем класс для анимации справа

  // // Для второй картинки
  // const secondImageContainer = document.getElementById('second-image-container');
  // secondImageContainer.classList.add('show'); // Добавляем класс для анимации слева

  // Создаем гирлянду
  createGarland();
});

// Функция для создания гирлянды
function createGarland() {
  const garland = document.createElement("div");
  garland.classList.add("garland");
  document.body.appendChild(garland);

  for (let i = 0; i < 30; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.left = `${Math.random() * 100}vw`; // Исправлено использование интерполяции
    light.style.animationDelay = `${Math.random() * 2}s`; // Исправлено использование интерполяции
    garland.appendChild(light);

    // Удаление элементов после завершения анимации
    light.addEventListener("animationend", () => {
      light.remove();
    });
  }
}



