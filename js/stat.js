'use strict';

var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_X = 100; // расположение облака по горизонтали
var CLOUD_Y = 10; // расположение облака по вертикали
var CLOUD_COLOR = '#ffffff'; // цвет облака
var SHADOW_GAP = 10; // смещение тени
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)'; // цвет тени
var TEXT_MARGIN_LEFT = 20; // левый маргин для текста
var TEXT_MARGIN_TOP = 30; // верхний маргин для текста
var TEXT_LINE_HEIGHT = 20; // отступ между строками текста
var TEXT_FONT = '16px PT Mono'; // шрифт текста
var TEXT_COLOR = '#000000'; // цвет текста
var TEXT_FIRST_LINE = 'Ура вы победили!'; // первая строка
var TEXT_SECOND_LINE = 'Список результатов:'; // вторая строка
var TEXT_HEIGHT = 10; // высота текста (для имен и времени)
var BAR_WIDTH = 40; // ширина столбца гистограммы
var BAR_HEIGHT = 140; // высота столбца гистограммы
var BAR_MARGIN_LEFT = 50; // левый отступ столбцов
var BAR_COLOR_PLAYER = 'rgba(255, 0, 0, 1)'; // цвет столбца игрока
var BAR_VERTICAL_MODIFIER = 30; // дополнительный модификатор вертикального смещения столбцов

var textHorizontalPosition = CLOUD_X + TEXT_MARGIN_LEFT; // координаты первой строки текста по горизонтали
var textVerticalPosition = CLOUD_Y + TEXT_MARGIN_TOP; // координаты первой строки текста по вертикали

// отрисовка столбцов гистограммы
var renderRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

// отрисовка облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// отрисовка текста
var renderText = function (ctx, x, y, text, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

// поиск максимального элемента для составления пропорций столбцов
var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

// вывод статистики
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR); // тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR); // облако

  renderText(ctx, textHorizontalPosition, textVerticalPosition, TEXT_FIRST_LINE, TEXT_COLOR, TEXT_FONT); // первая строка текста
  renderText(ctx, textHorizontalPosition, textVerticalPosition + TEXT_LINE_HEIGHT, TEXT_SECOND_LINE, TEXT_COLOR, TEXT_FONT); // вторая строка текста

  var maxTime = getMaxElement(times); // получаем максимальное значение времени

  for (var i = 0; i < names.length; i++) {
    var barColor = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%'; // генератор цвета столбцов гистограммы
    var playerBarColor = (names[i] === 'Вы') ? BAR_COLOR_PLAYER : barColor; // присвоение цвета столбцу

    var playerNameVertical = CLOUD_HEIGHT - TEXT_HEIGHT; // расположение имени игрока по вертикали

    var playerBarHorizontal = CLOUD_X + BAR_MARGIN_LEFT + (BAR_MARGIN_LEFT + BAR_WIDTH) * i; // расположение имени игрока и столбца по горизонтали
    var playerBarHeight = (BAR_HEIGHT * times[i]) / maxTime; // рассчет высоты столбца игрока от его времени
    var playerBarVertical = BAR_HEIGHT - playerBarHeight + CLOUD_Y + TEXT_HEIGHT + TEXT_MARGIN_TOP + TEXT_LINE_HEIGHT + BAR_VERTICAL_MODIFIER; // очень длинный рассчет вертикального расположения столбца

    var playerTime = Math.round(times[i]); // округляем время игрока
    var playerTimeVertical = playerBarVertical - TEXT_HEIGHT; // расположение времени игрока по вертикали

    renderRectangle(ctx, playerBarHorizontal, playerBarVertical, BAR_WIDTH, playerBarHeight, playerBarColor); // рисует гистограмму
    renderText(ctx, playerBarHorizontal, playerNameVertical, names[i], TEXT_COLOR, TEXT_FONT); // выводит имя игрока
    renderText(ctx, playerBarHorizontal, playerTimeVertical, playerTime, TEXT_COLOR, TEXT_FONT); // выводит время игрока
  }
};
