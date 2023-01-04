import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      {cartList.lenght !== 0 ?
      <>
        {cartList.map(product => <div key={product.id}> 
                                  <img src="{product.foto}" alt="Imagen del Proucto" />
                                  <p>{product.name}</p> 
                                  <p>Precio:{product.precio}</p>
                                  <p>Cantidad:{product.cant}</p>
                                  <button className = "btn btn-danger" onClick = {vaciarCarrito}> Vaciar Carrito </button>
                                  </div>)}
      </> 
      :
      <>
      <Link to ='/'> Volver al Inicio</Link>
      </>
    }</div>
  )
}

export default CartContainer
