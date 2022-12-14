import React from 'react'
import {useState, useEffect} from 'react'
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



//USE EFFECT

//se ejecuta siempre en un nuevo render
useEffect (()=>{
    console.log('carga Segundo')

    return() =>{
        console.log('renderiza antes que  carga segundo')
    }
})

//se ejecuta una sola vez despues del primer render
useEffect (()=>{
    console.log('carga Tercero')
}, [])
// [] array de dependecia vacio, es lo que hace que no vuelva a renderizar


useEffect (()=>{
    console.log('render solo cuando cambie boleano')
}, [boleano])







console.log('carga Primero')

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