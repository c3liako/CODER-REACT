import React from 'react'
import {useState, useEffect} from 'react'
import { gFetch } from './gFetch'

function Item() {
const [products, setProduct] = useState([])
const [loading, setLoading] = useState(true)    
    useEffect(()=>{

    gFetch()
    .then(data  => setProduct(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false) )     
    },[])
    
    return (
        
            <section>
            {loading?
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

export default Item