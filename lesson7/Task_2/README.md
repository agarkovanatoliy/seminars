# Задание 2 (45 минут)

В этом примере мы создадим базовое приложение, используя Redux Saga
длā выполнения асинхронного запроса данных.

  ● npm install redux-saga
  ● Создайте файл саги. Например, src/sagas/usersSaga.js

    function fetchUsersApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    }

  ● Рабочая сага: должна выполняться, когда сага перехватит
    действие `FETCH_USERS_REQUEST`
  ● Настройте Redux Saga middleware. В файле, где вы создаете ваш
    store
  ● Теперь, когда сага подключена к вашему приложению, вý
    можете инициировать загрузку пользователей, отправив
    действие FETCH_USERS_REQUEST
