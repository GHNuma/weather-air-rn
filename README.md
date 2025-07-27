### 📱 WeatherApp

Мобильное приложение на React Native для просмотра текущей погоды и прогноза на 5 дней по выбранному городу. Используется API OpenWeatherMap.

---

### ⚛️ Возможности

- Поиск города и отображение текущей погоды
- Прогноз на 5 дней (12:00)
- RTK Query для работы с API
- Глобальная тема свет/темн
- Обработка ошибок, индикаторы загрузки

---

### 🧹 Стек

- React Native
- Redux Toolkit + RTK Query
- TypeScript
- React Navigation
- @env (dotenv)
- OpenWeatherMap API

---

### ⚙️ Установка

1. Склонируй репозиторий:

   ```bash
   git clone https://github.com/GHNuma/weather-air-rn.git
   cd weather-app
   ```

2. Установи зависимости:

   ```bash
   npm install
   ```

3. Создай `.env` файл в корне проекта:

   ```env
   WEATHER_API_KEY=Ваш_API_KEY_На_Сайте_OpenWeatherMap
   ```

4. Запусти проект:

   ```bash
   npx react-native start
   # После этого в зависимости от платформы
   # ios
   npx react-native run-ios
   # или для android
   npx react-native run-android
   ```

---

### 🔧 Заметки

- Проверено на iOS/Аndroid
- Стили совмещены с темами
- FSD структура

---

### 📧 Автор

[Нурмухамед](https://github.com/GHNuma)
