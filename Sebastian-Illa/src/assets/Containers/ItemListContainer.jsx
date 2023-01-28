import {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
import ItemList from '../../Products/ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'




const ItemListContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)  
    const { id } = useParams ()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'product')
        const queryFilter = id ?  query(queryCollection, where('category','==', id)) : queryCollection

            getDocs(queryFilter)
            .then(data => setProduct( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
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