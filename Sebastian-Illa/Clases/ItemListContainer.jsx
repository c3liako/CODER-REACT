import React from 'react'
import {useState} from 'react'
export const saludar = () => console.log('saludo')

const ItemListContainer = ( { saludo = 'saludo' } ) => {

//HOOK: es una funcion que me devuelve estados persistentes
//const arrayHook = useState(0)
//DESTRUCTURING DE UN ARRAY
const [count, cambiarValorCount] = useState(0)
//let contador = 0
const [boleano, setBoleano] = useState (true)


    const contadorSuma = () => {
        cambiarValorCount(count+1)
    }
    const contadorResta = () => {
        cambiarValorCount(count-1)
    }

const handleBool = () => {
    setBoleano(!boleano)

}
    console.log(boleano)
    return (
    <section>
        ItemListContainer
        { }
        <p className='alert alert-danger'>{count}</p>
        <button className='btn btn-outline-primary' onClick={  contadorSuma }>+</button>
        <button className='btn btn-outline-primary' onClick={  contadorResta }>-</button>
        <button className='btn btn-outline-primary' onClick={  handleBool }> boleano </button>

    </section>
    )
}

export default ItemListContainer 