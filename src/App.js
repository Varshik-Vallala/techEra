import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
// import CourseItem from './components/CourseItem'
import CourseDetails from './components/CourseDetails'
import Header from './components/Header'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
