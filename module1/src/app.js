const app = {
  title: 'Indecision App',
  subtitle: 'Just a tutorial',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p>app.subtitle</p> }
    <p>{ app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
)

const user = {
  name: 'Ulisses',
  age: 23,
  location: 'Porto União'
}

function getLocation (location) {
  return <p>Location: {location}</p> || null
}

const templateTwo = (
  <div>
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    { (user.age && user.age >= 18) && <p>Age: {user.age}</p> }
    { getLocation(user.location) }
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
