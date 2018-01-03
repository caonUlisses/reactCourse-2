let user = {
  name: 'Ulisses',
  age: 23,
  location: 'Porto União'
}

function getLocation (location) {
  return location || 'Unknown'
}

let templateTwo = (
  <div>
    <h1>{ user.name }</h1>
    <p>Age: { user.age }</p>
    <p>Location: { getLocation(user.location) }</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
