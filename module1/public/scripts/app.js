'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Just a tutorial',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    'app.subtitle'
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      app.options[0]
    ),
    React.createElement(
      'li',
      null,
      app.options[1]
    )
  )
);

var user = {
  name: 'Ulisses',
  age: 23,
  location: 'Porto União'
};

function getLocation(location) {
  return React.createElement(
    'p',
    null,
    'Location: ',
    location
  ) || null;
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
