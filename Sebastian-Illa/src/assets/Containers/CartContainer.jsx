import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartList from '../Cart/CartList'





const CartContainer = () => {
  const [product] = useState({})
  const {totalAmount} = useCartContext()
  return (


    <div>
      {totalAmount() > 0 ?
        <CartList product={product}/>
      :
      <>
                <h2>Cart Vacio</h2>
                <Link to = '/' className='btn btn-primary' >Volver a la Tienda</Link>
                </>
      }
    </div>
  )
}

export default CartContainer
