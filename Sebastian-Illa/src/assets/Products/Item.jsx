import { memo } from 'react'
import { Link} from 'react-router-dom'



const Item = memo(( { product }) => {
    return (
        <div>
            <div>
                <h2>{`${product.name}`}</h2>
            </div>

            <div>
                <h4>PRECIO</h4>
                {`$ ${product.price}`}
            </div>

            <div>
                <h4>STOCK</h4>
                {`${product.stock}`}
            </div>
            <Link to={`/detail/${product.id}`}>
                <button>Detail</button>
            </Link>
            <br />
            <br />
            <br />
        </div>
    )
}) 

export default Item