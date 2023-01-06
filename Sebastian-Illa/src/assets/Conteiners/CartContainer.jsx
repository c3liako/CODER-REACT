
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"



const CartContainer = () => {

  const [dataForm, SetFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    order.buyer = dataForm 
    order.precio = precioTotal()
    order.item = cartList.map (({id, precio, name}) => ({id, precio, name}))
  
    const db = getFirestore()
    const queryCollection = collection (db, 'orders')
  

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())
    
  }
const handleOnChange = (e) => {

  SetFormData( {
    ...dataForm,
    [e.target.name]: e.target.value
  })
}




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

                              <form onSubmit={addOrder}>
                              <input 
                              type="text"
                              onChange={handleOnChange}
                              name='name'
                              value={dataForm.value}
                              placeholder='Ingrese su Nombre'
                              />
                              <input 
                              type="text"
                              onChange={handleOnChange}
                              name='phone'
                              value={dataForm.phone}
                              placeholder='Ingrese su Telefono'
                              />
                              <input 
                              type="text"
                              onChange={handleOnChange}
                              name='email'
                              value={dataForm.email}
                              placeholder='Ingrese su Email'
                              />
                              <button className='btn btn-outline-success'>Terminar Compra</button>





                              </form>
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
