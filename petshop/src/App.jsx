import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecanho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {
   return(
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path='/categoria/:id'>
            <Categoria />
          </Route>
          <Route path='/post/:id'>
            <Post />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
   )
}

export default App
