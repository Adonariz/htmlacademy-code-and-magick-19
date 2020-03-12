'use strict';

(function () {
  // кнопки для обработчиков
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  // счетчик для перебора массива
  var currentArrayIndex = 0;

  var increaseArrayIndex = function (array) {
    currentArrayIndex++;

    if (currentArrayIndex >= array.length) {
      currentArrayIndex = 0;
    }
    return currentArrayIndex;
  };

  window.utils = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,

    getRandomItem: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    changeColor: function (array, element, input) {
      var color = array[increaseArrayIndex(array)];

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }

      input.value = color;
    }
  };
})();
