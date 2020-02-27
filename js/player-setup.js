'use strict';

(function () {
  // кастомизация игрока
  var player = document.querySelector('.setup-player');
  var wizardAppearance = player.querySelector('.setup-wizard-appearance');
  var coat = wizardAppearance.querySelector('.wizard-coat');
  var coatColorInput = wizardAppearance.querySelector('input[name=coat-color]');
  var eyes = wizardAppearance.querySelector('.wizard-eyes');
  var eyesColorInput = wizardAppearance.querySelector('input[name=eyes-color]');
  var fireballWrap = player.querySelector('.setup-fireball-wrap');
  var fireballColorInput = fireballWrap.querySelector('input[name=fireball-color]');

  window.playerSetup = {
    onEyesClick: function () {
      window.utils.changeColor(window.data.EYES_COLORS, eyes, eyesColorInput);
    },

    onCoatClick: function () {
      window.utils.changeColor(window.data.COAT_COLORS, coat, coatColorInput);
    },

    onFireballClick: function () {
      window.utils.changeColor(window.data.FIREBALL_COLORS, fireballWrap, fireballColorInput);
    }
  };
})();
