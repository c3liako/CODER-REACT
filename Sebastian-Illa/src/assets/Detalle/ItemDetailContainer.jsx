import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../Productos/gFetch'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({}) 

    const  {productId} = useParams()


    useEffect (()=>{
        gFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
    })

    console.log('Product', product)
    
    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className='col'>
                <h3>Nombre: {product.name}</h3>
                <h3>Categoria: {product.cat}</h3>
                <h4>Precio: {product.precio}</h4>
                <h4>Stock: {product.stock}</h4>
                </div>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetailContainer