
import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../Productos/gFetch'
import ItemList from '../Productos/ItemList'

const ItemListContainer = () => {
const [product, setProduct] = useState([])
const [loading, setLoading] = useState(true)  
const { id } = useParams ()
    useEffect(()=>{

        if (id) {
            gFetch()
            .then(data  => setProduct(data.filter(prod => prod.categoria==id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false) )  
            
        } else {
                gFetch()
    .then(data  => setProduct(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false) )     
    
        }
},[id])


    
    return (
        
            <section>
            {loading?
            <h2>Loading...</h2>
            :
                <ItemList product={product}/>
            }
            
        </section>
    )
}
    export default ItemListContainer