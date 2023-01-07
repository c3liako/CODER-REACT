
import {useState} from 'react'



const ItemCount = ({stock, initial = 1, onAdd}) => {

const [count, cambiarValorCount,] = useState(initial)

    const Add = () => {
    if(count < stock) {
        cambiarValorCount(count+1)
        }
        
    }
    const Subtraction = () => {
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
                <button className='btn btn-outline-primary' onClick={  Add }>+</button>
                <button className='btn btn-outline-primary' onClick={  Subtraction }>-</button>    
            </div>
            <div className='card-footer'>
                <button className='btn btn-outline-success btn-block' onClick={ handleOnAdd }> Agregar al Carro </button>
            </div>
        </div>
    )
}

export default ItemCount 