class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = [ 'option one', 'option two', 'option three' ]

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick (e) {
    console.log(e)
  }

  render () {
    return (
      <button onClick={this.handlePick}>What should I do?</button>
    )
  }
}

class Options extends React.Component {
  constructor (props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll () {
    console.log(this.props.options)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        <ol>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <li>
        { this.props.optionText }
      </li>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
      console.log(option)
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
