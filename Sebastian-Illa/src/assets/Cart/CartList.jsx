import { memo, Link } from 'react'
import { useCartContext } from '../../context/CartContext'
import CartForm from './CartForm'


const CartList = memo(({product}) => {
  const { cartList, deleteItem, totalPrice, emptyCart } = useCartContext()
  return (
      <div 
          style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent:'space-around'
              }}
              >
                <>
                {cartList.map(product => <div key={product.id}> 
                                  <img src={product.img} alt="Imagen del Producto" />
                                  <p>{product.name}</p> 
                                  <p>Precio:{product.price}</p>
                                  <p>Cantidad:{product.quantity}</p>
                                  <button className='btn btn-danger' onClick={() => deleteItem(product.id)}> X </button>
                                </div>
                                )}
                <h4>Valor Total : {totalPrice()}</h4>
                <button className = "btn btn-danger" onClick = {emptyCart}> Vaciar Carro </button>
                <CartForm product={product}/>
                </>
      </div>
  )
}) 

export default CartList