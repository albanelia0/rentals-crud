import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Header from './components/Header'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import EditPage from './pages/EditPage'
import ListPage from './pages/ListPage'

function App (): JSX.Element {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route exact path='/' component={ListPage} />
          <Route path='/create' component={CreatePage} />
          <Route path='/edit/:id' component={EditPage} />
          <Route path='/detail/:id' component={DetailPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
