import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Layout, { RouteMatcher } from './components/Layout/Layout'
import MenuContent from './components/MenuContent/MenuContent'
import RegisterForm, { CreditCard } from './components/RegisterForm/RegisterForm'

const routes: RouteMatcher[] = [
  {
    showMenus: true,
    path: '/MenuContent',
    title: 'Menu',
  },
  {
    showMenus: false,
    path: '/RegisterForm',
    title: 'Register card form',
    default: true,
  },
]

const onSubmitCallback = (creditCard: CreditCard): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('Submitting creditCard', creditCard) 
  return Promise.resolve()
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout routes={routes}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/RegisterForm" />
            </Route>
            <Route path="/RegisterForm">
              <RegisterForm onSubmitCallback={onSubmitCallback}/>
            </Route>
            <Route path="/MenuContent">
              <MenuContent />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
