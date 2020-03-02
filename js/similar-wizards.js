'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;
  var setupWindow = document.querySelector('.setup');

  // шаблон с похожими волшебниками
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // создаем элемент
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.сolorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    // создаем фрагмент и добавляем элементы
    var fragment = document.createDocumentFragment();
    var newWizardsArray = window.utils.shuffle(wizards);

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(newWizardsArray[i]));
    }

    similarListElement.appendChild(fragment);

    // отрисовываем раздел похожие персонажи
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(renderWizards, window.error);

})();
