/** LIBRERIAS */
import { useState } from 'react'

/* ASSETS*/
import '../css/style.css'
import Header from "./assets/NavBar/Header"
import ItemListContainer from '../Clases/ItemListContainer'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'

/* ESTILOS */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
/*    <div className="App">
    <Header/>

    </div>*/   
    <div>
      <ItemListContainer/>
    </div>
    
  )
}

export default App
