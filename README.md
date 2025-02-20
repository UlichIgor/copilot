# Создание рабочей среды с помощью Create React App

Следуйте этим шагам для создания рабочей среды с дополнительными настройками:

1. **Создайте новое приложение React:**
   ```sh
   npx create-react-app my-app
   cd my-app
   ```

2. **Установите необходимые зависимости для работы с SASS:**
   ```sh
   npm install sass sass-loader
   ```

3. **Настройте поддержку SASS:**
   - Создайте файл `src/scss/styles.module.scss` и добавьте в него стили.
     ```scss
     @use './scss/_var' as vars;

     .example {
       color: vars.$primary-color;
     }
     ```
   - Импортируйте `styles.module.scss` в `src/App.js`:
     ```jsx
     import styles from './scss/styles.module.scss';
     ```

4. **Настройте ESLint для проверки на ошибки:**
   - Установите ESLint и необходимые плагины:
     ```sh
     npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import --save-dev
     ```
   - Создайте файл `.eslintrc.json` в корне проекта и добавьте следующие настройки:
     ```json
     {
       "extends": [
         "react-app",
         "plugin:react/recommended",
         "plugin:jsx-a11y/recommended",
         "plugin:import/errors",
         "plugin:import/warnings"
       ],
       "plugins": ["react", "jsx-a11y", "import"],
       "rules": {
         // добавьте свои правила здесь
       }
     }
     ```

5. **Настройте поддержку JSX:**
   - Убедитесь, что файлы с расширением `.jsx` обрабатываются Babel. Для этого добавьте следующие настройки в файл `.babelrc`:
     ```js
    {
  "presets": ["@babel/preset-env"]
    };
     ```

Теперь ваша рабочая среда настроена для работы с React, SASS и проверкой на ошибки.
якщо виникають помилки закидуете в чат 
src\index.jsx
  Line 3:17:  Unable to resolve path to module './App'  import/no-unresolved;
  прописуете поясненя івирішуете проблему

