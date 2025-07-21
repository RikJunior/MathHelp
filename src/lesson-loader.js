// Массивы слайдов для каждого класса

// ==================== 1 КЛАСС ====================
const slides_1_1 = [
  {
    title: "Знакомство с числами",
    visual: "1️⃣2️⃣3️⃣4️⃣5️⃣",
    content: "Это числа от 1 до 5. Каждое число показывает количество предметов.",
    input: false,
  },
  {
    title: "Что такое число?",
    visual: "🍎🍎🍎",
    content: "Число показывает, сколько предметов у нас есть. Здесь 3 яблока.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Сколько конфет? <br>🍬🍬🍬🍬🍬🍬🍬",
    content: "Введите количество конфет:",
    input: true,
    answer: "7",
  },
];

const slides_1_2 = [
  {
    title: "Что такое сложение?",
    visual: "🍎 + 🍎 = ❓",
    content: "Сложение — это объединение предметов. Если взять 1 яблоко и добавить ещё 1, получится 2.",
    input: false,
  },
  {
    title: "Что такое вычитание?",
    visual: "🍎🍎🍎 − 🍎 = ❓",
    content: "Вычитание — это уменьшение. Если у тебя 3 яблока и убрать 1, останется 2.",
    input: false,
  },
  {
    title: "Знаки сложения и вычитания",
    visual: "➕ и ➖",
    content: "Знак ➕ означает сложить, знак ➖ — вычесть.",
    input: false,
  },
  {
    title: "Задание",
    visual: "2 + 3 = ?",
    content: "Посчитай сумму двух чисел и введи ответ.",
    input: true,
    answer: "5",
  },
];

const slides_1_3 = [
  {
    title: "Сравнение предметов",
    visual: "🍎🍎 vs 🍎🍎🍎",
    content: "Где больше яблок? Справа — 3, слева — 2. 2 < 3.",
    input: false,
  },
  {
    title: "Что означает 'больше' и 'меньше'?",
    visual: "2 < 4, 5 > 3",
    content: "Меньшее число означает меньше предметов. Большее — больше.",
    input: false,
  },
  {
    title: "Задание",
    visual: "🍬🍬🍬 vs 🍬🍬",
    content: "Какой знак правильный? (введите <, > или =)",
    input: true,
    answer: ">",
  },
];

const slides_1_4 = [
  {
    title: "Разные цвета",
    visual: "🔴🟡🔵🟢",
    content: "Это круги разных цветов. Цвет помогает различать предметы.",
    input: false,
  },
  {
    title: "Формы",
    visual: "🔵 ◼️ 🔺",
    content: "Формы бывают разными: круг, квадрат, треугольник и т.д.",
    input: false,
  },
  {
    title: "Размеры",
    visual: "🔵 ◼️ (маленький и большой)",
    content: "Объекты отличаются не только цветом и формой, но и размером.",
    input: false,
  },
  {
    title: "Задание",
    visual: "🔴 🔺 ◼️<br>Какого цвета круг?",
    content: "Введите цвет круга (например, 'красный'):",
    input: true,
    answer: "красный",
  },
];

const slides_1_5 = [
  {
    title: "Круг",
    visual: "⚪",
    content: "Круг — фигура без углов и сторон. Она гладкая и ровная.",
    input: false,
  },
  {
    title: "Квадрат",
    visual: "◼️",
    content: "Квадрат — фигура с 4 равными сторонами и 4 углами.",
    input: false,
  },
  {
    title: "Треугольник",
    visual: "🔺",
    content: "Треугольник — фигура с 3 сторонами и 3 углами.",
    input: false,
  },
  {
    title: "Задание",
    visual: "🔵 ◼️ 🔺<br>Какая фигура треугольник?",
    content: "Введите символ фигуры, которая треугольник (например, квадрат = ◼️):",
    input: true,
    answer: "🔺",
  },
];

const slides_1_6 = [
  {
    title: "Что такое текстовая задача?",
    visual: "📘➕❓",
    content: "Текстовая задача — это история, в которой нужно посчитать что-то. Обычно в ней есть герои, предметы и действия.",
    input: false,
  },
  {
    title: "Как решать текстовые задачи?",
    visual: "📦 + 📦 = ❓",
    content: "Сначала внимательно читаем. Потом находим, что нужно сложить или вычесть. После этого считаем и записываем ответ.",
    input: false,
  },
  {
    title: "Задание",
    visual: "",
    content: "У Маши было 3 яблока. Она купила ещё 2. Сколько стало всего яблок?",
    input: true,
    answer: "5",
  },
];

// ==================== 2 КЛАСС ====================
const slides_2_1 = [
  {
    title: "Числа от 10 до 100",
    visual: "🔟 → 💯",
    content: "Десятки и единицы: число 35 состоит из 3 десятков и 5 единиц.",
    input: false,
  },
  {
    title: "Как читать двузначные числа?",
    visual: "24 = двадцать четыре",
    content: "Первая цифра — десятки, вторая — единицы. 20 + 4 = 24.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Сколько десятков и единиц в числе 57?",
    content: "Введите через пробел (например: 5 7):",
    input: true,
    answer: "5 7",
  },
];

const slides_2_2 = [
  {
    title: "Сложение до 100",
    visual: "25 + 34 = ?",
    content: "Складываем десятки: 20 + 30 = 50. Затем единицы: 5 + 4 = 9. Итого: 50 + 9 = 59.",
    input: false,
  },
  {
    title: "Вычитание до 100",
    visual: "48 - 16 = ?",
    content: "Вычитаем десятки: 40 - 10 = 30. Затем единицы: 8 - 6 = 2. Итого: 30 + 2 = 32.",
    input: false,
  },
  {
    title: "Задание",
    visual: "63 + 28 = ?",
    content: "Решите пример и введите ответ:",
    input: true,
    answer: "91",
  },
];

const slides_2_3 = [
  {
    title: "Таблица умножения",
    visual: "2 × 3 = 6",
    content: "Умножение — это повторное сложение: 2 + 2 + 2 = 6.",
    input: false,
  },
  {
    title: "Деление",
    visual: "8 ÷ 2 = 4",
    content: "Деление — это разбиение на равные части. 8 конфет разделить на 2 детей — по 4 конфеты каждому.",
    input: false,
  },
  {
    title: "Задание",
    visual: "5 × 4 = ?",
    content: "Решите пример и введите ответ:",
    input: true,
    answer: "20",
  },
];

const slides_2_4 = [
  {
    title: "Измерение длины",
    visual: "📏 → 15 см",
    content: "Сантиметр — маленькая единица длины. В 1 метре — 100 сантиметров.",
    input: false,
  },
  {
    title: "Как измерять?",
    visual: "Линейка с предметом",
    content: "Приложи линейку к предмету так, чтобы ноль совпадал с началом предмета.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Карандаш длиной 12 см, а ручка — 18 см. На сколько ручка длиннее?",
    content: "Введите ответ:",
    input: true,
    answer: "6",
  },
];

const slides_2_5 = [
  {
    title: "Что такое диаграмма?",
    visual: "📊 (столбчатая диаграмма)",
    content: "Диаграмма помогает увидеть информацию наглядно. Чем выше столбик — тем больше количество.",
    input: false,
  },
  {
    title: "Чтение таблицы",
    visual: "Таблица с данными о фруктах",
    content: "В таблицах информация организована в строки и столбцы. Находим нужную ячейку и смотрим значение.",
    input: false,
  },
  {
    title: "Задание",
    visual: "На диаграмме: яблоки — 5, груши — 3. Сколько всего фруктов?",
    content: "Введите ответ:",
    input: true,
    answer: "8",
  },
];

const slides_2_6 = [
  {
    title: "Логические задачи",
    visual: "🧩",
    content: "В логических задачах нужно думать, а не просто считать. Часто требуется найти закономерность.",
    input: false,
  },
  {
    title: "Пример задачи",
    visual: "2, 4, 6, ?",
    content: "Какое число следующее? Это чётные числа, каждое следующее на 2 больше предыдущего.",
    input: false,
  },
  {
    title: "Задание",
    visual: "3, 6, 9, ?",
    content: "Какое число следующее? Введите ответ:",
    input: true,
    answer: "12",
  },
];

// ==================== 3 КЛАСС ====================
const slides_3_1 = [
  {
    title: "Числа до 1000",
    visual: "100 → 1000",
    content: "Числа состоят из единиц, десятков и сотен. 365 = 300 + 60 + 5.",
    input: false,
  },
  {
    title: "Сравнение трёхзначных чисел",
    visual: "245 ? 254",
    content: "Сравниваем поразрядно: сначала сотни, потом десятки, потом единицы.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Какое число больше: 378 или 387?",
    content: "Введите большее число:",
    input: true,
    answer: "387",
  },
];

const slides_3_2 = [
  {
    title: "Умножение в столбик",
    visual: "23 × 4 = ?",
    content: "Умножаем 4 на 3 (единицы) = 12, пишем 2, 1 запоминаем. Затем 4 на 2 (десятки) = 8, плюс 1 = 9. Ответ: 92.",
    input: false,
  },
  {
    title: "Деление с остатком",
    visual: "17 ÷ 5 = 3 (ост. 2)",
    content: "5 × 3 = 15, 17 - 15 = 2. Значит, 17 ÷ 5 = 3 с остатком 2.",
    input: false,
  },
  {
    title: "Задание",
    visual: "32 × 3 = ?",
    content: "Решите пример и введите ответ:",
    input: true,
    answer: "96",
  },
];

const slides_3_3 = [
  {
    title: "Определение времени",
    visual: "🕒 → 3:00",
    content: "Часовая стрелка на 3, минутная на 12 — это ровно 3 часа.",
    input: false,
  },
  {
    title: "Календарь",
    visual: "📅",
    content: "В году 12 месяцев, в неделе 7 дней. Февраль может иметь 28 или 29 дней.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Сколько дней в апреле?",
    content: "Введите ответ:",
    input: true,
    answer: "30",
  },
];

const slides_3_4 = [
  {
    title: "Периметр",
    visual: "◼️◼️◼️<br>◼️◼️◼️<br>◼️◼️◼️",
    content: "Периметр — сумма длин всех сторон. У квадрата со стороной 3 см периметр 3×4=12 см.",
    input: false,
  },
  {
    title: "Площадь",
    visual: "Прямоугольник 4×5",
    content: "Площадь = длина × ширину. Для прямоугольника 4 см × 5 см площадь 20 см².",
    input: false,
  },
  {
    title: "Задание",
    visual: "Квадрат со стороной 6 см. Чему равен периметр?",
    content: "Введите ответ:",
    input: true,
    answer: "24",
  },
];

const slides_3_5 = [
  {
    title: "Что такое дробь?",
    visual: "1/2 пиццы",
    content: "Дробь показывает часть целого. Знаменатель — на сколько частей разделили, числитель — сколько взяли.",
    input: false,
  },
  {
    title: "Сравнение дробей",
    visual: "1/3 < 1/2",
    content: "При одинаковых числителях больше та дробь, где знаменатель меньше.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Какая дробь больше: 1/4 или 1/5?",
    content: "Введите большую дробь (формат 1/2):",
    input: true,
    answer: "1/4",
  },
];

const slides_3_6 = [
  {
    title: "Олимпиадные задачи",
    visual: "🏆",
    content: "Такие задачи требуют нестандартного подхода. Часто нужно найти закономерность или применить логику.",
    input: false,
  },
  {
    title: "Пример задачи",
    visual: "Если 2 кота ловят 2 мышей за 2 минуты, сколько котов поймают 10 мышей за 10 минут?",
    content: "Анализируем: 1 кот ловит 1 мышь за 2 минуты, значит за 10 минут — 5 мышей. Для 10 мышей нужно 2 кота.",
    input: false,
  },
  {
    title: "Задание",
    visual: "У Маши 3 брата и 2 сестры. Сколько всего детей в семье?",
    content: "Включая Машу, введите ответ:",
    input: true,
    answer: "6",
  },
];

// ==================== 4 КЛАСС ====================
const slides_4_1 = [
  {
    title: "Многозначные числа",
    visual: "1 000 → 1 000 000",
    content: "Числа состоят из классов: единицы, тысячи, миллионы. 345 678 — 345 тысяч 678.",
    input: false,
  },
  {
    title: "Разряды чисел",
    visual: "7 654 321",
    content: "7 — миллионы, 6 — сотни тысяч, 5 — десятки тысяч, 4 — тысячи, 3 — сотни, 2 — десятки, 1 — единицы.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Сколько тысяч в числе 45 678?",
    content: "Введите ответ:",
    input: true,
    answer: "45",
  },
];

const slides_4_2 = [
  {
    title: "Умножение многозначных чисел",
    visual: "123 × 45 = ?",
    content: "1. Умножаем 123 на 5 = 615. 2. Умножаем 123 на 40 (добавляем 0) = 4920. 3. Складываем: 615 + 4920 = 5535.",
    input: false,
  },
  {
    title: "Деление многозначных чисел",
    visual: "486 ÷ 3 = ?",
    content: "1. 4 ÷ 3 = 1 (остаток 1). 2. 18 ÷ 3 = 6. 3. 6 ÷ 3 = 2. Ответ: 162.",
    input: false,
  },
  {
    title: "Задание",
    visual: "156 × 4 = ?",
    content: "Решите пример и введите ответ:",
    input: true,
    answer: "624",
  },
];

const slides_4_3 = [
  {
    title: "Задачи на движение",
    visual: "🚗 → 60 км/ч",
    content: "Расстояние = скорость × время. Если ехать 2 часа со скоростью 60 км/ч, проедем 120 км.",
    input: false,
  },
  {
    title: "Задачи на стоимость",
    visual: "🍎 — 30 руб, 5 кг — ?",
    content: "Цена × количество = стоимость. 30 руб × 5 = 150 руб.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Велосипедист ехал 3 часа со скоростью 15 км/ч. Какое расстояние он проехал?",
    content: "Введите ответ:",
    input: true,
    answer: "45",
  },
];

const slides_4_4 = [
  {
    title: "Объёмные фигуры",
    visual: "Куб",
    content: "Объём = длина × ширину × высоту. Для куба со стороной 2 см объём 8 см³.",
    input: false,
  },
  {
    title: "Площадь поверхности",
    visual: "Куб с гранью 3 см",
    content: "У куба 6 граней. Площадь одной грани 9 см². Общая площадь 54 см².",
    input: false,
  },
  {
    title: "Задание",
    visual: "Сторона куба 4 см. Чему равен объём и общая площадь? (пример: 12, 34)",
    content: "Введите ответ:",
    input: true,
    answer: "64, 96",
  },
];

const slides_4_5 = [
  {
    title: "Сложение дробей",
    visual: "1/4 + 2/4 = 3/4",
    content: "При одинаковых знаменателях складываем числители, знаменатель остаётся прежним.",
    input: false,
  },
  {
    title: "Сравнение дробей",
    visual: "3/5 ? 4/7",
    content: "Приводим к общему знаменателю (35): 21/35 > 20/35, значит 3/5 > 4/7.",
    input: false,
  },
  {
    title: "Задание",
    visual: "1/3 + 1/3 = ?",
    content: "Введите ответ в формате дроби (например, 1/2):",
    input: true,
    answer: "2/3",
  },
];

const slides_4_6 = [
  {
    title: "Что такое процент?",
    visual: "% → сотая часть",
    content: "1% = 1/100. 25% = 25/100 = 1/4. Чтобы найти 20% от числа, умножь его на 0,2.",
    input: false,
  },
  {
    title: "Решение задач на проценты",
    visual: "20% от 50 = ?",
    content: "20% = 0,2. 50 × 0,2 = 10. Или: 50 ÷ 100 × 20 = 10.",
    input: false,
  },
  {
    title: "Задание",
    visual: "Найди 10% от 250:",
    content: "Введите ответ:",
    input: true,
    answer: "25",
  },
];

// Карта всех тем для всех классов
const lessons = {
  // 1 класс
  "1-1": slides_1_1, "1-2": slides_1_2, "1-3": slides_1_3, 
  "1-4": slides_1_4, "1-5": slides_1_5, "1-6": slides_1_6,
  
  // 2 класс
  "2-1": slides_2_1, "2-2": slides_2_2, "2-3": slides_2_3,
  "2-4": slides_2_4, "2-5": slides_2_5, "2-6": slides_2_6,
  
  // 3 класс
  "3-1": slides_3_1, "3-2": slides_3_2, "3-3": slides_3_3,
  "3-4": slides_3_4, "3-5": slides_3_5, "3-6": slides_3_6,
  
  // 4 класс
  "4-1": slides_4_1, "4-2": slides_4_2, "4-3": slides_4_3,
  "4-4": slides_4_4, "4-5": slides_4_5, "4-6": slides_4_6
};

// Порядок тем для каждого класса
const lessonOrder = {
  "1": ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"],
  "2": ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6"],
  "3": ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6"],
  "4": ["4-1", "4-2", "4-3", "4-4", "4-5", "4-6"]
};

// Получаем элементы страницы
const learningTitle = document.getElementById("learning-title");
const slideTitle = document.getElementById("slide-title");
const slideVisual = document.getElementById("slide-visual");
const slideContent = document.getElementById("slide-content");
const answerInput = document.getElementById("answer-input");
const checkAnswerBtn = document.getElementById("check-answer");
const feedback = document.getElementById("feedback");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const slideIndicator = document.getElementById("slide-indicator");
const nextTopicBtn = document.getElementById("next-topic");
const backBtn = document.getElementById("backBtn");

let currentSlideIndex = 0;
let slides = [];
let currentLessonId = null;
let currentClass = null;

// Получаем параметр id из URL
function getParameterByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Инициализация урока
function initLesson() {
  currentLessonId = getParameterByName("id") || "1-1";
  currentClass = currentLessonId.split("-")[0];
  slides = lessons[currentLessonId];

  if (!slides) {
    learningTitle.textContent = "Тема не найдена";
    slideTitle.textContent = "";
    slideVisual.textContent = "";
    slideContent.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  learningTitle.textContent = getLessonTitle(currentLessonId);
  currentSlideIndex = 0;
  updateSlide();
  updateButtons();
  nextTopicBtn.style.display = "none";
  feedback.textContent = "";
}

function getLessonTitle(id) {
  const [classNum, lessonNum] = id.split("-");
  const classTitles = {
    "1": {
      "1": "Числа от 1 до 9",
      "2": "Примеры на сложение и вычитание (1–5)",
      "3": "Сравнение чисел от 1 до 5",
      "4": "Цвет, форма, размер",
      "5": "Геометрические фигуры",
      "6": "Текстовые задачи (от 0 до 10)"
    },
    "2": {
      "1": "Числа от 10 до 100",
      "2": "Сложение и вычитание (до 100)",
      "3": "Умножение и деление",
      "4": "Измерения и длина",
      "5": "Диаграммы и таблицы",
      "6": "Задачи на логику"
    },
    "3": {
      "1": "Числа до 1000",
      "2": "Умножение и деление в столбик",
      "3": "Время и календарь",
      "4": "Геометрические фигуры",
      "5": "Дроби и доли",
      "6": "Олимпиадные задачи"
    },
    "4": {
      "1": "Многозначные числа",
      "2": "Скоростные вычисления",
      "3": "Сложные задачи",
      "4": "Геометрия: объёмные фигуры",
      "5": "Действия с дробями",
      "6": "Проценты и соотношения"
    }
  };
  return classTitles[classNum][lessonNum];
}

// Обновляем слайд
function updateSlide() {
  const slide = slides[currentSlideIndex];
  slideTitle.textContent = slide.title;
  slideVisual.innerHTML = slide.visual;
  slideContent.textContent = slide.content;

  feedback.textContent = "";
  answerInput.style.display = slide.input ? "block" : "none";
  checkAnswerBtn.style.display = slide.input ? "inline-block" : "none";
  answerInput.value = "";

  slideIndicator.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

  // Кнопки навигации
  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === slides.length - 1;

  // Кнопка "Следующая тема" показывается только после успешного задания
  nextTopicBtn.style.display = "none";
}

function previousSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlide();
    feedback.textContent = "";
  }
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    updateSlide();
    feedback.textContent = "";
  }
}

// Проверка ответа на задании
function checkAnswer() {
  const slide = slides[currentSlideIndex];
  const userAnswer = answerInput.value.trim().toLowerCase();

  if (userAnswer === slide.answer.toString().toLowerCase()) {
    feedback.textContent = "✅ Правильно!";
    feedback.style.color = "#2E4A6B";

    // Проверка: последняя тема и последний слайд
    const isLastLesson = lessonOrder[currentClass].indexOf(currentLessonId) === lessonOrder[currentClass].length - 1;
    const isLastSlide = currentSlideIndex === slides.length - 1;

    if (isLastLesson && isLastSlide) {
      nextTopicBtn.textContent = "🎉 Закончить урок";
    } else {
      nextTopicBtn.textContent = "Перейти к следующей теме";
    }

    nextTopicBtn.style.display = "inline-block";
  } else {
    feedback.textContent = "❌ Неправильно. Попробуй ещё раз.";
    feedback.style.color = "red";
    nextTopicBtn.style.display = "none";
  }
}

// Переход к следующей теме (по порядку из lessonOrder)
function goToNextTopic() {
  const currentIndex = lessonOrder[currentClass].indexOf(currentLessonId);

  if (currentIndex === -1 || currentIndex === lessonOrder[currentClass].length - 1) {
    // Если это последняя тема — возвращаем на страницу выбора класса
    window.location.href = `${currentClass}.html`;
  } else {
    const nextLessonId = lessonOrder[currentClass][currentIndex + 1];
    const url = new URL(window.location.href);
    url.searchParams.set("id", nextLessonId);
    window.location.href = url.toString();
  }
}

// Кнопка "Назад"
function goBack() {
  window.location.href = `${currentClass}.html`;
}

// События
prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);
checkAnswerBtn.addEventListener("click", checkAnswer);
nextTopicBtn.addEventListener("click", goToNextTopic);
backBtn.addEventListener("click", goBack);

// Запускаем урок
initLesson();