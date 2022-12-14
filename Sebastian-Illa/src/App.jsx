/** LIBRERIAS */
import { useState } from 'react'

/* ASSETS*/
import '../css/style.css'
import Header from "./assets/NavBar/Header"
import ItemListContainer2 from '../Clases/Promises'
import NavBarBoostrap from './assets/NavBar/NavBarBoostrap'
import ItemListContainer from '../Clases/ItemListContainer'

/* ESTILOS */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
/*    <div className="App">
    <Header/>

    </div>*/   
    <div>
      <NavBarBoostrap/>
      <ItemListContainer/>
      <ItemListContainer2/>
    </div>
    
  )
}

export default App
