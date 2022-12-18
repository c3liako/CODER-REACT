import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {useState, useEffect} from 'react'
import { gFetch } from './gFetch'
export const saludo = () => console.log('saludo')
import Item from './Item'



//acciones api -> resultado (asincronico)

//const task = new Promise((res, rej) =>{})


const ItemListContainer2 = ( { saludo = 'saludo por defecto'}) => {
/*    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        //gFetch() //simulacion de consulta a api
//.then(data  => setProduct(data))
//.catch(err => console.log(err))
//.finally(() => setLoading(false) ) 

}, [])

*/




        return(
        <section>
            <br /><br />
            {Item()}
        </section>
    )

}



    export default ItemListContainer2
