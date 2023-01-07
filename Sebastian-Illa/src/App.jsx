/** LIBRERIAS */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

/* ASSETS*/
import '../css/style.css'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'
import ItemDetailContainer from './assets/Containers/ItemDetailContainer'
import ItemListContainer from './assets/Containers/ItemListContainer'
import CartContainer from './assets/Containers/CartContainer'

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
          <Route path = '/detail/:productId' element ={ <ItemDetailContainer/> }/>
          <Route path= '/cart' element ={ <CartContainer /> }/>
          <Route path='*' element = {<Navigate to='/'/>} />
        </Routes>
    </CartContextProvider>
  </BrowserRouter>
    
  )
}

export default App
