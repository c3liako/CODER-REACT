/*
COMPONENTES = FUNCION
Es una funcion que me retorna (return()) jsx
Los componentes SIEMPRE empiezan con mayuscula
CADA FUNCION PUEDE RETORNAR UN UNICO JSX 
*/
const Titulo = () =>{
    return <h1>Titulo</h1>

}
//Ahi quedo la funcion definida pero falta "llamarla"
//como la llamo?
function App() {
    return (
        <div className="App">
        <Titulo/>
        </div>
    )
}

//COMO SE EXPORTA:
// 1 - export default Titulo  (puede utilizarse una sola vez x archivo)
//2 - export const Titulo

//COMO SE IMPORTA
//1 - import Titulo from './assets/NavBar/NavBar2'
//2 - import { Titulo } from '.assets/NavBar/Navbar2'

//COMPONENTES CON HTML
import React from 'react'

const Formulario = () => {
    return (
        <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido' />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Formulario

/**

*/
