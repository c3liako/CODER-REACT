import { memo } from 'react'
import Item from './Item'

const ItemList = memo(({product}) => {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent:'space-around'
                }}
                >
            {product.map( product =>  <Item key={product.id} product =  {product}/>)}
        </div>
    )
}) 

export default ItemList