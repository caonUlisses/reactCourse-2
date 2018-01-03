'use strict';

var user = {
  name: 'Ulisses',
  age: 23,
  location: 'Porto União'
};

function getLocation(location) {
  return location || 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
