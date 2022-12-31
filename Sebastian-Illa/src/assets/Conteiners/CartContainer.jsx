import React, { useContext } from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      {cartList.map(product => <div key={product.id}> 
                                <img src="{product.foto}" alt="Imagen del Producto" />
                                <p>{product.name}</p> 
                                <p>Precio:{product.precio}</p>
                                <p>Cantidad:{product.cant}</p>
                                <button className = "btn btn-danger" onClick = {vaciarCarrito}> Vaciar Carrito </button>
                                </div>)}
    </div>
  )
}

export default CartContainer
