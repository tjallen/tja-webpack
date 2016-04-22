require('./style.css');
require('!style!css!sass!./example-sass.scss');

var component = require('./example-component.js');
document.body.appendChild(component());

var es6 =  require('./example-es6');
