'use strict';
// количество волшебников
var NUMBER_OF_WIZARDS = 4;

// кнопки для обработчиков
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// массивы с данными
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// попап
var setupWindow = document.querySelector('.setup');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupCloseButton = setupWindow.querySelector('.setup-close');

// кастомизация игрока
var setupPlayer = document.querySelector('.setup-player');

var setupWizardAppearance = setupPlayer.querySelector('.setup-wizard-appearance');
var setupCoatColor = setupWizardAppearance.querySelector('.wizard-coat');
var coatColorInput = setupWizardAppearance.querySelector('input[name=coat-color]');
var setupEyesColor = setupWizardAppearance.querySelector('.wizard-eyes');
var eyesColorInput = setupWizardAppearance.querySelector('input[name=eyes-color]');

var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
var setupFireball = setupFireballWrap.querySelector('.setup-fireball');
var fireballColorInput = setupFireballWrap.querySelector('input[name=fireball-color]');

// шаблон с похожими волшебниками
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// генерируем рандомное число
var getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// генерируем волшебника
var getRandomWizard = function () {
  var wizard = {
    name: getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
    coatColor: getRandomItem(COAT_COLORS),
    eyesColor: getRandomItem(EYES_COLORS)
  };

  return wizard;
};

// создаем элемент
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardsArray = function (number) {
  var wizards = [];

  for (var i = 0; i < number; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};

var generatedWizards = createWizardsArray(NUMBER_OF_WIZARDS);

// создаем фрагмент и добавляем элементы
var fragment = document.createDocumentFragment();

for (var i = 0; i < generatedWizards.length; i++) {
  fragment.appendChild(renderWizard(generatedWizards[i]));
}

similarListElement.appendChild(fragment);

// отрисовываем раздел похожие персонажи
setupWindow.querySelector('.setup-similar').classList.remove('hidden');

// кастомизируем игрока
var changeColor = function (array, element, input) {
  var color = getRandomItem(array);
  element.style.fill = color;
  input.value = color;
};

var onEyesClick = function () {
  changeColor(EYES_COLORS, setupEyesColor, eyesColorInput);
};

var onCoatClick = function () {
  changeColor(COAT_COLORS, setupCoatColor, coatColorInput);
};

var onFireballClick = function () {
  var color = getRandomItem(FIREBALL_COLORS);
  setupFireballWrap.style.backgroundColor = color;
  fireballColorInput.value = color;
};

// показываем попап
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    setupClose();
  }
};

var setupOpen = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupEyesColor.addEventListener('click', onEyesClick);
  setupCoatColor.addEventListener('click', onCoatClick);
  setupFireball.addEventListener('click', onFireballClick);
};

var setupClose = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupEyesColor.removeEventListener('click', onEyesClick);
  setupCoatColor.removeEventListener('click', onCoatClick);
  setupFireball.removeEventListener('click', onFireballClick);
};

setupOpenIcon.addEventListener('click', function () {
  setupOpen();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setupOpen();
  }
});

setupCloseButton.addEventListener('click', function () {
  setupClose();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setupClose();
  }
});
