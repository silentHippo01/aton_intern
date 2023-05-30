# aton_intern
[РЕЗЮМЕ](https://hh.ru/resume/ac8e8076ff0b90496e0039ed1f34686a596258) <br>
Приложение состоит из двух страниц. 
На главной располагается таблица. В таблице используется серверная пагинация.
На странице "Объекты" располагается кнопка создания объекта и отрисовывается список созданных объектов. Чтобы создать, редактировать или удалить объект необходимо авторизоваться.

### Для запуска:
1) npm start -- собрать и запустить сборку Webpack
2) npm run start:dev:server -- запустить имитацию back-end (необходима для аутентификации)

### Стек технологий: 
  * Webpack 5 <br>
  * React JS <br>
  * TypeScript <br>
  * Redux Toolkit <br> 
  * Ant Design <br>
  * Для получения данных для таблицы используется сервис reqres.in

### Описание
  * Сконфигурирована сборка Webpack 
  * Выполнена декомпозиция конфигурации Webpack
  * Для входа и регистрации пользователя используется json-server для имитации бекэнда
  * Для получения данных и аунтетификации используются async thunk
  * Используется css modules для стилизации
  * Используется Future Sliced Design
  * Настроена конфигурация для тестирования


