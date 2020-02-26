'use strict';

(function () {
  var dialogWindow = document.querySelector('.setup');
  var dialogOpenIcon = document.querySelector('.setup-open-icon');
  var dialogCloseButton = dialogWindow.querySelector('.setup-close');
  var userName = dialogWindow.querySelector('.setup-user-name');

  // кастомизация игрока
  var player = document.querySelector('.setup-player');
  var wizardAppearance = player.querySelector('.setup-wizard-appearance');
  var coat = wizardAppearance.querySelector('.wizard-coat');
  var coatColorInput = wizardAppearance.querySelector('input[name=coat-color]');
  var eyes = wizardAppearance.querySelector('.wizard-eyes');
  var eyesColorInput = wizardAppearance.querySelector('input[name=eyes-color]');
  var fireballWrap = player.querySelector('.setup-fireball-wrap');
  var fireball = fireballWrap.querySelector('.setup-fireball');
  var fireballColorInput = fireballWrap.querySelector('input[name=fireball-color]');

  var onEyesClick = function () {
    window.utils.changeColor(window.data.EYES_COLORS, eyes, eyesColorInput);
  };

  var onCoatClick = function () {
    window.utils.changeColor(window.data.COAT_COLORS, coat, coatColorInput);
  };

  var onFireballClick = function () {
    window.utils.changeColor(window.data.FIREBALL_COLORS, fireballWrap, fireballColorInput);
  };

  // показываем попап
  var onPopupEscPress = function (evt) {
    if (evt.key === window.utils.ESC_KEY) {
      setupClose();
    }
  };

  var onUserNameFocus = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onUserNameBlur = function () {
    document.addEventListener('keydown', onPopupEscPress);
  };

  var setupOpen = function () {
    dialogWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    userName.addEventListener('focusin', onUserNameFocus);
    userName.addEventListener('focusout', onUserNameBlur);
    eyes.addEventListener('click', onEyesClick);
    coat.addEventListener('click', onCoatClick);
    fireball.addEventListener('click', onFireballClick);
  };

  var setupClose = function () {
    dialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    userName.removeEventListener('focusin', onUserNameFocus);
    userName.removeEventListener('focusout', onUserNameBlur);
    eyes.removeEventListener('click', onEyesClick);
    coat.removeEventListener('click', onCoatClick);
    fireball.removeEventListener('click', onFireballClick);
  };

  dialogOpenIcon.addEventListener('click', function () {
    setupOpen();
  });

  dialogOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      setupOpen();
    }
  });

  dialogCloseButton.addEventListener('click', function () {
    setupClose();
  });

  dialogCloseButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      setupClose();
    }
  });
})();
