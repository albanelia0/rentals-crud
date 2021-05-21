import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import ListPage from './pages/ListPage'

function App (): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ListPage} />
      </Switch>
    </Router>
  )
}

export default App
