import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import CreatePage from './pages/CreatePage'
import ListPage from './pages/ListPage'

function App (): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ListPage} />
        <Route path='/create' component={CreatePage} />
      </Switch>
    </Router>
  )
}

export default App
