'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SEND_URL = 'https://js.dump.academy/code-and-magick/';
  var TIMEOUT_IN_MS = 10000; // 10 сек
  
  // обрабатываем ответ сервера
  var serverStatusHandler = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';
    // загрузка
    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 403:
          error = 'Доступ запрещен';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        case 500:
          error = 'Ошибка сервера';
          break;
        case 502:
          error = 'Неверный ответ сервера';
          break;
        case 503:
          error = 'Сервер временно недоступен';
          break;
        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }
  
      if (error) {
        onError(error);
      }
      // ошибка запроса
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      // превышение лимита времени
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
        
      xhr.timeout = TIMEOUT_IN_MS;
    });
  }

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();

      serverStatusHandler(xhr, onLoad, onError);

      xhr.open('GET', LOAD_URL);
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();

      serverStatusHandler(xhr, onLoad, onError);

      xhr.open('POST', SEND_URL);
      xhr.send(data);
    }
  };
})();
