# Тестовое задание Эврика
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](https://sass-lang.com/)

[![image](https://github.com/teplokotov/eureca-test-app/assets/118915923/d04e362f-6c45-4a5b-9beb-517a4953726d)](https://teplokotov.github.io/eureca-test-app/)

🌐 [https://teplokotov.github.io/eureca-test-app/](https://teplokotov.github.io/eureca-test-app/)

Одностраничное веб-приложение состоит из 4 компонентов таблицы:

В таблице хранится информация о выбранных квартирах в двух столбцах:
1. Номер подъезда
2. Список номеров квартир, выбранных в подъезде.

Логика работы с данными:
- Данные из таблице можно очистить нажатием кнопки с иконкой корзины.
- Данные в таблицу можно добавить с помощью кнопки с иконкой плюса. При нажатии на неё открывается первое окно со списком подъездов,
при выборе подъезда открывается второе окно со списком квартир, при нажатии на квартиру происходит её выбор.
- Выбор квартир множественный, можно выбрать как несколько квартир в одном подъезде, так и в разных подъездах.
- При нажатии на кнопку “Добавить” происходит добавление квартир в таблицу а окна выбора закрываются.

Весь функционал также доступен с клавиатуры:
- Навигация по кнопкам таблиц работает через `Tab`.
- В окнах выбора подъезда/квартиры навигация осуществляется с помощью стрелок (вправо-влево переключение между окнами выбора, вверх-вниз переключения между выбираемыми компонентами).
- Выбор квартиры происходит через `Enter`.
- Сохранение выбранных квартир в таблицу происходит через `ctrl` + `Enter`.


### Запуск проекта в 🖐 5 шагов
1. Клонируйте проект
```bash
git clone https://github.com/teplokotov/eureca-test-app.git
```
2. Перейдите в директорию проекта
```bash
cd eureca-test-app
```
3. Установите модули
```bash
npm install
```
4. Запустите проект
```bash
npm run dev
```
5. Откройте страницу
```bash
http://localhost:5173
```

### Используемые технологии
- VS Code
- Git Bash
- Vite
- React 18.2
- SCSS modules
- TypeScript

## Контакты
- Филипп Добриков
- philipp.dobrikov@yandex.ru
- https://t.me/hello_philipp
