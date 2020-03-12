'use strict';

(function () {
  // массивы с данными
  var Color = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    DEFAULT_COAT: 'rgb(101, 137, 164)',
    DEFAULT_EYES: 'black'
  };

  // кастомизация игрока
  var player = document.querySelector('.setup-player');
  var wizardAppearance = player.querySelector('.setup-wizard-appearance');
  var coat = wizardAppearance.querySelector('.wizard-coat');
  var coatColorInput = wizardAppearance.querySelector('input[name=coat-color]');
  var eyes = wizardAppearance.querySelector('.wizard-eyes');
  var eyesColorInput = wizardAppearance.querySelector('input[name=eyes-color]');
  var fireballWrap = player.querySelector('.setup-fireball-wrap');
  var fireballColorInput = fireballWrap.querySelector('input[name=fireball-color]');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {},
    Color: Color
  };

  window.playerSetup = {
    onEyesClick: function () {
      window.utils.changeColor(Color.EYES_COLORS, eyes, eyesColorInput);
      wizard.onEyesChange(eyes.style.fill);
    },

    onCoatClick: function () {
      window.utils.changeColor(Color.COAT_COLORS, coat, coatColorInput);
      wizard.onCoatChange(coat.style.fill);
    },

    onFireballClick: function () {
      window.utils.changeColor(Color.FIREBALL_COLORS, fireballWrap, fireballColorInput);
    },

    wizard: wizard
  };
})();
