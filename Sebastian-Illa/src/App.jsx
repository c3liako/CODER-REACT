/** LIBRERIAS */
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

/* ASSETS*/
import '../css/style.css'
import ItemListContainer2 from './assets/Productos/ItemListContainer'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'
import CartContainer from './assets/Carrito/CartContainer'
import ItemDetailContainer from './assets/Detalle/ItemDetailContainer'


/* ESTILOS */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
  <BrowserRouter>
    <NavBarBoostrap/>

      <Routes>
        <Route path= '/' element ={ <ItemListContainer2/> }/>
        <Route path = '/detalle/:productId' element ={ <ItemDetailContainer/> }/>
        <Route path= '/cart' element ={ <CartContainer/> }/>
        <Route path= '/category/:id' element={ <ItemListContainer2/> }/>
        <Route path='*' element = {<Navigate to='/'/>} />
      </Routes>

  </BrowserRouter>
    
  )
}

export default App
