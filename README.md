# Создание рабочей среды с помощью Create React App

## Следуйте этим шагам для создания рабочей среды с дополнительными настройками:

1.  **Создайте новое приложение React:**

    ```sh
    npx create-react-app my-app
    cd my-app
    ```

2.  **Установите необходимые зависимости для работы с SASS:**

    ```sh
    npm install sass sass-loader
    ```

3.  **Настройте поддержку SASS:**

    - Создайте файл `src/scss/styles.module.scss` и добавьте в него стили.

      ```scss
      @use "./scss/_var" as vars;

      .example {
        color: vars.$primary-color;
      }
      ```

    - Импортируйте `styles.module.scss` в `src/App.jsx`:

      ```jsx
      import styles from "./scss/styles.module.scss";
      ```

4.  **Настройте ESLint для проверки на ошибки:**

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
          "no-unused-vars": [
            "error",
            {
              "vars": "all",
              "args": "after-used",
              "caughtErrors": "all",
              "ignoreRestSiblings": false,
              "reportUsedIgnorePattern": false
            }
          ]
        }
      }
      ```

5.  **Настройте поддержку JSX:**

    - Убедитесь, что файлы с расширением `.jsx` обрабатываются Babel. Для этого добавьте следующие настройки в файл `.babelrc`:

      ```json
      {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
      }
      ```

6.  **Настройте Webpack:**

    - Установите необходимые зависимости для Webpack:

      ```sh
      npm install webpack webpack-cli webpack-dev-server --save-dev
      npm install babel-loader css-loader style-loader sass-loader --save-dev
      ```

    - Создайте файл `webpack.config.js` в корне проекта и добавьте следующие настройки:

      ```js
      const path = require("path");
      const HtmlWebpackPlugin = require("html-webpack-plugin");
      const isProduction = process.env.NODE_ENV === "production";
      const MiniCssExtractPlugin = require("mini-css-extract-plugin");
      const sass = require("sass");

      const result = sass.renderSync({
        silenceDeprecations: ["legacy-js-api"],
      });

      module.exports = {
        mode: isProduction ? "production" : "development",
        devtool: "source-map", // включає source-map для sass-loader
        entry: "./src/index.jsx",
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: "bundle.js",
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                },
              },
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== "production"
                  ? "style-loader"
                  : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
            },
          ],
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: "./public/index.html",
          }),
          new MiniCssExtractPlugin({
            // Параметри, подібні до тих самих параметрів у webpackOptions.output
            // обидва параметри необов'язкові
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
        ],
        devServer: {
          setupMiddlewares: (middlewares) => {
            // Ваші middleware функції
            middlewares.push(
              // Приклад middleware
              (req, res, next) => {
                console.log("Middleware працює!");
                next();
              }
            );

            return middlewares;
          },
        },
      };
      ```

    - Добавьте скрипты для запуска Webpack в `package.json`:

      ```json
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
        "build:webpack": "webpack --mode production"
      }
      ```

Теперь ваша рабочая среда настроена для работы с React, SASS, проверкой на ошибки и сборкой с помощью Webpack.

Если возникают ошибки, например:

```
src/index.jsx
  Line 3:17:  Unable to resolve path to module './App'  import/no-unresolved
```

пропишите пояснения и решите проблему, например, добавив расширение файла при импорте:

```jsx
import App from "./App.jsx";
```
