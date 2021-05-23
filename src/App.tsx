import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import ListPage from './pages/ListPage'

function App (): JSX.Element {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ListPage} />
        <Route path='/create' component={CreatePage} />
        <Route path='/edit/:id' component={EditPage} />
      </Switch>
    </Router>
  )
}

export default App
