import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'

const ItemList = ({product}) => {
    return (
        product.map( product =>  <Item key={product.id} product =  {product}/>
        )

    )
}

export default ItemList