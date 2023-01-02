/** LIBRERIAS */
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContext, CartContextProvider } from './context/CartContext'
/* ASSETS*/
import '../css/style.css'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'
import ItemDetailContainer from './assets/Conteiners/ItemDetailContainer'
import ItemListContainer from './assets/Conteiners/ItemListContainer'
import CartContainer from './assets/Conteiners/CartContainer'
/* ESTILOS */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  


  return (
  <BrowserRouter>
  <CartContextProvider>
    
        <NavBarBoostrap/>

          <Routes>
        <Route path= '/' element ={ <ItemListContainer/> }/>
        <Route path= '/category/:id' element={ <ItemListContainer/> }/>        
        <Route path = '/detalle/:productId' element ={ <ItemDetailContainer/> }/>
        <Route path= '/cart' element ={ <CartContainer/> }/>

        <Route path='*' element = {<Navigate to='/'/>} />
      </Routes>

  </CartContextProvider>







  </BrowserRouter>
    
  )
}

export default App
