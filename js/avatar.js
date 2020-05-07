'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  var avatar = document.querySelector('.setup-open-icon');

  var setAvatar = function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        avatar.src = preview.src;
      });

      reader.readAsDataURL(file);
    }
  };

  window.avatar = {
    input: fileChooser,
    set: setAvatar
  };
})();
