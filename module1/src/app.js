console.log('App.js is running')

const app = {
  title: 'Indecision App',
  subtitle: 'Testing'
}

let template = (
  <div>
    <h1>{ app.title }</h1>
    <p>{ app.subtitle }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

let user = {
  name: 'Ulisses',
  age: 23,
  location: 'Porto União'
}

let templateTwo = (
  <div>
    <h1>{ user.name }</h1>
    <p>Age: { user.age }</p>
    <p>Location: { user.location }</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
