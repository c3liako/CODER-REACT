import React from 'react'
import {useState, useEffect} from 'react'



const ItemCount = ({stock = 10, initial = 1, onAdd}) => {

const [count, cambiarValorCount,] = useState(initial)


    const Suma = () => {
    if(count < stock) {
        cambiarValorCount(count+1)
        }
        
    }
    const Resta = () => {
        if(count > initial){
            cambiarValorCount(count-1)
    }
        }
        
        const handleOnAdd = () =>{
            onAdd(count)
        }
    return (
        <div className='card'>
            <div className='card-header'>
                <label htmlFor="">{count}</label>
            </div>
            <div className='card-body'>
                <button className='btn btn-outline-primary' onClick={  Suma }>+</button>
                <button className='btn btn-outline-primary' onClick={  Resta }>-</button>    
            </div>
            <div className='card-footer'>
                <button className='btn btn-outline-success btn-block' onClick={ handleOnAdd }> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemCount 