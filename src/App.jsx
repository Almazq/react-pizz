import React from 'react'
import MainConteiner from './components/Main-Conteiner';
import Basket from './components/Basket';
import {Route , Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainConteiner />}/>
        <Route path='/Basket' element={<Basket />}/>
      </Routes>
    </div>
  )
}


export default App
