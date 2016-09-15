# tja current react + webpack setup (kinda outdated / in limbo)

a rough starting point for building react web apps. if youre reading this a) damn son how u find this and b) you prob wanna go use [create-react-app](https://github.com/facebookincubator/create-react-app) or [react-boilerplate](https://github.com/mxstbr/react-boilerplate) instead.

its got:
- webpack
- babel
- webpack-dev-server with HMR and react-hot-loader
- css modules (using postcss+cssnext, various postcss plugins)
- htmlplugin w/ handlebars template if you want to build a custom index.html
- eslint (airbnb default)
- image minification

---

go:
- clone the repo
- `npm i`

cmds:
- `npm start`: runs `webpack-dev-server --inline --hot` at `http://localhost:8080/`
- `npm run dist` (or build, or prod): 1. REMOVES ./dist/ DIRECTORY 2. sends a minified production build there