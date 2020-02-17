'use strict';
// количество волшебников
var NUMBER_OF_WIZARDS = 4;

// кнопки для обработчиков

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// массивы с данными
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// показываем попап
var setupWindow = document.querySelector('.setup');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupCloseButton = setupWindow.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    setupClose();
  }
};

var setupOpen = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var setupClose = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// генерируем рандомное число
var getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// генерируем волшебника
var getRandomWizard = function () {
  var wizard = {
    name: getRandomItem(names) + ' ' + getRandomItem(surnames),
    coatColor: getRandomItem(coatColors),
    eyesColor: getRandomItem(eyesColors)
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
