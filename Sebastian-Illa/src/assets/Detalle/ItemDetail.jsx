import React from 'react'
import ItemCount from './ItemCount'
import { gFetch } from '../Productos/gFetch'
import { useCartContext } from '../../context/CartContext'



const ItemDetail = ({product}) => {

    const {cartList, agregarCarrito} = useCartContext()


    const onAdd = (cant) =>{
        agregarCarrito({ ... product, cant})
    }

    console.log(cartList)





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
                    <ItemCount stock = {product.stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail