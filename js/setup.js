'use strict';

(function () {
  var dialogWindow = document.querySelector('.setup');
  var dialogOpenIcon = document.querySelector('.setup-open-icon');
  var dialogCloseButton = dialogWindow.querySelector('.setup-close');
  var userName = dialogWindow.querySelector('.setup-user-name');

  var player = document.querySelector('.setup-player');
  var wizardAppearance = player.querySelector('.setup-wizard-appearance');
  var coat = wizardAppearance.querySelector('.wizard-coat');
  var eyes = wizardAppearance.querySelector('.wizard-eyes');
  var fireballWrap = player.querySelector('.setup-fireball-wrap');
  var fireball = fireballWrap.querySelector('.setup-fireball');

  var form = document.querySelector('.setup-wizard-form');
  var submitButton = document.querySelector('.setup-submit');

  // отображение попапа
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
    window.dialog.resetDialogCoords();
    userName.addEventListener('focusin', onUserNameFocus);
    userName.addEventListener('focusout', onUserNameBlur);
    eyes.addEventListener('click', window.playerSetup.onEyesClick);
    coat.addEventListener('click', window.playerSetup.onCoatClick);
    fireball.addEventListener('click', window.playerSetup.onFireballClick);
  };

  var setupClose = function () {
    dialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    userName.removeEventListener('focusin', onUserNameFocus);
    userName.removeEventListener('focusout', onUserNameBlur);
    eyes.removeEventListener('click', window.playerSetup.onEyesClick);
    coat.removeEventListener('click', window.playerSetup.onCoatClick);
    fireball.removeEventListener('click', window.playerSetup.onFireballClick);
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

  // отправка формы
  var successHandler = function () {
    dialogWindow.classList.add('hidden');
    submitButton.textContent = 'Сохранить';
    submitButton.disabled = false;
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), successHandler, window.error);
    submitButton.textContent = 'Данные отправляются...';
    submitButton.disabled = true;
  });
})();
