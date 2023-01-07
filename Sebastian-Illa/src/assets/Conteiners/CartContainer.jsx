
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

  const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    order.buyer = dataForm 
    order.price = totalPrice()
    order.item = cartList.map (({id, price, name}) => ({id, price, name}))
  
    const db = getFirestore()
    const queryCollection = collection (db, 'orders')
  

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => emptyCart())
    
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
                                  <img src="{product.img}" alt="Imagen del Producto" />
                                  <p>{product.name}</p> 
                                  <p>price:{product.price}</p>
                                  <p>Cantidad:{product.quantity}</p>
                                  <button className='btn btn-danger' onClick={() => deleteItem(product.id)}> X </button>
                                </div>
                                )
        }
                              <h4>Valor Total : {totalPrice()}</h4>
                              <button className = "btn btn-danger" onClick = {emptyCart}> Vaciar Carrito </button>

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
