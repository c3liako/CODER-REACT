
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../componentes/Loading'
import { gFetch } from '../Productos/gFetch'
import ItemList from '../Productos/ItemList'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'




const ItemListContainer = () => {
const [product, setProduct] = useState([])
const [loading, setLoading] = useState(true)  
const { id } = useParams ()
/*    useEffect(()=>{

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

*/

useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'product')




    
    getDocs(queryCollection)
    .then(data => setProduct( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log())
            .finally(()=> setLoading(false))   
}, [id])



    
    return (
        
            <section>
            {loading?
            <Loading/>
            :

                <ItemList product={product}/>
                
            }
            
        </section>
    )
}
    export default ItemListContainer