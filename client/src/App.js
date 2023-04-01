import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
const App = () => {
  return (
      <div>
          <BrowserRouter>
              <Nav />
              <Home/>
              <Routes>
                  <Route path='/home'/>
                  <Route path='/packages'/>
                  <Route path='/about'/>
                  <Route path='/login'/>
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App