'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');

  // шаблон с похожими волшебниками
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // генерируем волшебника
  var getRandomWizard = function () {
    var wizard = {
      name: window.utils.getRandomItem(window.data.NAMES) + ' ' + window.utils.getRandomItem(window.data.SURNAMES),
      coatColor: window.utils.getRandomItem(window.data.COAT_COLORS),
      eyesColor: window.utils.getRandomItem(window.data.EYES_COLORS)
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

  var generatedWizards = createWizardsArray(window.data.NUMBER_OF_WIZARDS);

  // создаем фрагмент и добавляем элементы
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < generatedWizards.length; i++) {
    fragment.appendChild(renderWizard(generatedWizards[i]));
  }

  similarListElement.appendChild(fragment);

  // отрисовываем раздел похожие персонажи
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');

})();
