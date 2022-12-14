import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {useState, useEffect} from 'react'
import { gFetch } from './gFetch'
export const saludo = () => console.log('saludo')




//acciones api -> resultado (asincronico)

//const task = new Promise((res, rej) =>{})


const ItemListContainer2 = ( { saludo = 'saludo por defecto'}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        //gFetch() //simulacion de consulta a api
//.then(data  => setProduct(data))
//.catch(err => console.log(err))
//.finally(() => setLoading(false) ) 
useFetch()
}, [])

const useFetch = async () =>{
        try {
        const resp = await fetch('https://pokeapi.co/api/v2/ability/?offset=20&limit=10')
        const respJson = await resp.json()
        setPokemons(respJson)
        } catch (error){
            console.log(error)
        } 


        //.then(resp=> resp.json())
        //.then(data => console.log(data.results))
        //.catch(err => console.log(err))
}
console.log(products)
        return(
        <section>
            
            ItemListContainer
            {loading ? 
                <h2>Loading...</h2>
            :
            products.map( products =>   <div>
                                            <div>
                                                <h2>{`${products.name}`}</h2>
                                                
                                            </div>
                                            
                                            <div>
                                                <h4>Precio</h4>
                                                {`$ ${products.precio}`}
                                            </div>
                                            
                                            <div>
                                                <h4>stock</h4>
                                                {`${products.stock}`}
                                            </div>
                                            <button>Comprar</button>
                                            <br />
                                            <br />
                                            <br />

                                        </div>
                )
            }
        </section>
    )
}




    export default ItemListContainer2
