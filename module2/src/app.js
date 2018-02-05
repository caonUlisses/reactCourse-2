import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>404</div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact />
      <Route path='/create' component={AddExpenseComponent} exact />
      <Route path='/edit' component={EditExpenseComponent} exact />
      <Route path='/help' component={HelpComponent} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
