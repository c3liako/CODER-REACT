import {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'
import Loading from '../componentes/Loading'
import ItemList from '../Productos/ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'




const ItemListContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)  
    const { id } = useParams ()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'product')
        if (id) {
            const queryFiltrada =  query(queryCollection, where('categoria','==', id))

            getDocs(queryFiltrada)
            .then(data => setProduct( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getDocs(queryCollection)
            .then(data => setProduct( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log())
            .finally(()=> setLoading(false))  
        }

    }, [id])



    
    return (
        
            <>
            {loading?
            <Loading/>
            :

                <ItemList product={product}/>
                
            }
            
        </>
    )
}
    export default ItemListContainer