import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()


  return (
    <div>
      {cartList.length !== 0 ?
      <>
        {cartList.map(product => <div key={product.id}> 
                                  <img src="{product.foto}" alt="Imagen del Producto" />
                                  <p>{product.name}</p> 
                                  <p>Precio:{product.precio}</p>
                                  <p>Cantidad:{product.cant}</p>
                                  <button className='btn btn-danger' onClick={() => eliminarPorItem(product.id)}> X </button>
                                </div>
                                )
        }
                              <h4>Valor Total : {precioTotal()}</h4>
                              <button className = "btn btn-danger" onClick = {vaciarCarrito}> Vaciar Carrito </button>
      </>
      :
        <>
        <h2>Carrito Vacio</h2>
        <Link to = '/' className='btn btn-primary' >Volver a la Tienda</Link>
        </>


}
    </div>
  )
}

export default CartContainer
