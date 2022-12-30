import React from 'react'
import {useState, useEffect} from 'react'


const ItemCount = () => {

const [count, cambiarValorCount] = useState(0)

    const contadorSuma = () => {
        cambiarValorCount(count+1)
    }
    const contadorResta = () => {
        cambiarValorCount(count-1)
    }

    return (
    <section>
        <p className='alert alert-danger'>{count}</p>
        <button className='btn btn-outline-primary' onClick={  contadorSuma }>+</button>
        <button className='btn btn-outline-primary' onClick={  contadorResta }>-</button>
    </section>
    )
}

export default ItemCount 