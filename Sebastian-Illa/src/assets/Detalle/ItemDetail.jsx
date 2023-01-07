import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const ItemDetail = ({product}) => {

    const [isCant, setIsCant] = useState(false)
    const {agregarCarrito} = useCartContext()
    const onAdd = (cant) =>{
        agregarCarrito({ ...product, cant})
        setIsCant(true)
        
    }

    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className='col'>
                <h3>Nombre: {product.name}</h3>
                <h3>Categoria: {product.cat}</h3>
                <h4>Precio: {product.precio}</h4>
                <h4>Stock: {product.stock}</h4>
                </div>
                <div className='col'>
                    
                    {isCant ?
                    <>
                    <Link to = '/cart' >
                        <button className='btn btn-outline-primary'>Ir al Carrito</button>
                    </Link>
                    <Link to = '/'>
                        <button className='btn btn-outline-success'> Seguir Comprando</button>
                    </Link>
                    </>
                    
                    :
                                        <ItemCount stock = {product.stock} initial={1} onAdd={onAdd}/>

                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail