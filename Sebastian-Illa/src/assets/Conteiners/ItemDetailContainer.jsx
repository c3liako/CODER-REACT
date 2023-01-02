import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../Productos/gFetch'
import ItemDetail from '../Detalle/ItemDetail'
import Loading from '../componentes/Loading'

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({}) 
    const [loading, setLoading] = useState (true)
    const  {productId} = useParams()


    useEffect (()=>{
        gFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    })

    return (
        <>

            {loading ? <Loading /> : <ItemDetail product={product}/>}
            
        </>
    )
}

export default ItemDetailContainer