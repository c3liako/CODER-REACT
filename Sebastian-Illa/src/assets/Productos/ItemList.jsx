import React from 'react'
import { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'

const ItemList = memo(({product}) => {
    return (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-between'
            }}
            >
        {product.map( product =>  <Item key={product.id} product =  {product}/>
        )}
</div>
    )
}) 

export default ItemList