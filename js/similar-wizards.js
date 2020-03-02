'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;
  var setupWindow = document.querySelector('.setup');

  // шаблон с похожими волшебниками
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // // генерируем волшебника
  // var getRandomWizard = function () {
  //   var wizard = {
  //     name: window.utils.getRandomItem(window.data.NAMES) + ' ' + window.utils.getRandomItem(window.data.SURNAMES),
  //     coatColor: window.utils.getRandomItem(window.data.COAT_COLORS),
  //     eyesColor: window.utils.getRandomItem(window.data.EYES_COLORS)
  //   };

  //   return wizard;
  // };

  // создаем элемент
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.сolorEyes;

    return wizardElement;
  };

  // var createWizardsArray = function (number) {
  //   var wizards = [];

  //   for (var i = 0; i < number; i++) {
  //     wizards.push(getRandomWizard());
  //   }

  //   return wizards;
  // };

  // var generatedWizards = createWizardsArray(window.data.NUMBER_OF_WIZARDS);

  var similarWizardsHandler = function (wizards) {
    // создаем фрагмент и добавляем элементы
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    // отрисовываем раздел похожие персонажи
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(similarWizardsHandler, errorHandler);

})();
