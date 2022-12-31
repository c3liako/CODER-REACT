import React from 'react'
import { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
const Item = memo(( { product }) => {
    return (
        <div>
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
}) 

export default Item