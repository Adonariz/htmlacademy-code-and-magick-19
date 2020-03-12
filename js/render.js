'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;
  var setupWindow = document.querySelector('.setup');

  // шаблон с похожими волшебниками
  var wizardList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // создаем элемент
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    var wizardsAmount = data.length > NUMBER_OF_WIZARDS ? NUMBER_OF_WIZARDS : data.length;

    // создаем фрагмент и добавляем элементы
    var fragment = document.createDocumentFragment();
    wizardList.innerHTML = '';

    for (var i = 0; i < wizardsAmount; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    wizardList.appendChild(fragment);

    // отрисовываем раздел похожие персонажи
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
