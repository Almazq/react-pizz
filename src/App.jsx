import React from 'react'
import MainConteiner from './components/Main-Conteiner';
import BasketConteiner from './components/Basket-Conteiner';
import {Route , Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainConteiner />}/>
        <Route path='/Basket' element={<BasketConteiner />}/>
      </Routes>
    </div>
  )
}


export default App
