'use strict';

console.log('App.js is running');

var template = React.createElement(
  'h2',
  null,
  'Hello'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
