/** LIBRERIAS */
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

/* ASSETS*/
import '../css/style.css'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'
import CartContainer from './assets/Carrito/CartContainer'
import ItemDetailContainer from './assets/Conteiners/ItemDetailContainer'
import ItemListContainer from './assets/Conteiners/ItemListContainer'

/* ESTILOS */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  


  return (
  <BrowserRouter>
    <NavBarBoostrap/>

      <Routes>
        <Route path= '/' element ={ <ItemListContainer/> }/>
        <Route path = '/detalle/:productId' element ={ <ItemDetailContainer/> }/>
        <Route path= '/cart' element ={ <CartContainer/> }/>
        <Route path= '/category/:id' element={ <ItemListContainer/> }/>
        <Route path='*' element = {<Navigate to='/'/>} />
      </Routes>

  </BrowserRouter>
    
  )
}

export default App
