import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'

import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>This is the dashboard</div>
)

const AddExpenseComponent = () => (
  <div>This is the expense</div>
)

const EditExpenseComponent = () => (
  <div>This is the edit page</div>
)

const HelpComponent = () => (
  <div>This is the help component</div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact />
      <Route path='/create' component={AddExpenseComponent} exact />
      <Route path='/edit' component={EditExpenseComponent} exact />
      <Route path='/help' component={HelpComponent} exact />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
