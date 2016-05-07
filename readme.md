# tja webpack from scratch

it got:
- usual webpack stuff
- delicious babel for es6+ transpiling
- webpack-dev-server
- postcss (autoprefixer + various features to match sass)
- htmlplugin w/ handlebars template to build index.html
- eslint

---

go:
- clone the repo
- `npm i`

cmds:
- `npm start`: starts a webpack-dev-server, inline, HMR etc
- `npm run prod`: sends a min'd production build to ./build/

---

current branches
- master: currently react based

probable future branches
- master: generic app / static site
- react branch
- vue.js branch