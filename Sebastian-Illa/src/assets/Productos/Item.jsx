import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from './gFetch'

const Item = () => {
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
            product.map( product =>   <div>
                                            <div>
                                                <h2>{`${product.name}`}</h2>
                                                
                                            </div>
                                            
                                            <div>
                                                <h4>Precio</h4>
                                                {`$ ${product.precio}`}
                                            </div>
                                            
                                            <div>
                                                <h4>stock</h4>
                                                {`${product.stock}`}
                                            </div>
                                            <Link to={`/detalle/${product.id}`}>
                                                <button>Detalle</button>

                                            </Link>
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