import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CadastraCliente from './pages/CadastraCliente'

import './App.css'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/cadastrar-cliente' Component={CadastraCliente} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
