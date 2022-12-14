import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {useState, useEffect} from 'react'
export const saludo = () => console.log('saludo')




//acciones api -> resultado (asincronico)

//const task = new Promise((res, rej) =>{})
const products = [
    {id:'1', name:'Producto1', cat:'Categoria1', stock:'00', precio: '100'},
    {id:'2', name:'Producto2', cat:'Categoria2', stock:'05', precio: '200'},
    {id:'3', name:'Producto3', cat:'Categoria3', stock:'10', precio: '300'},
    {id:'4', name:'Producto4', cat:'Categoria4', stock:'15', precio: '400'}
]
const gFetch = (nro) => {
    return new Promise((resolve, reject) => {
    //acciones
    const condition = true
    setTimeout(() => {
    if(condition){
    resolve(products)
}   else  {
    reject('error')
}
}, 3000)

})
}

const ItemListContainer2 = ( { saludo = 'saludo por defecto'}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        gFetch() //simulacion de consulta a api
.then(data  => setProduct(data))
.catch(err => console.log(err))
.finally(() => setLoading(false) ) 
}, [])
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
                                            <br />

                                        </div>
                )
            }
            
        </section>
    )
}




    export default ItemListContainer2
