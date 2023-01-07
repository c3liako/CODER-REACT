
import { memo } from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore,} from "firebase/firestore"

const CartForm = memo(() => {
    const [dataForm, SetFormData] = useState({
    name: '',
    email: '',
    phone: ''
    })

    const { cartList, emptyCart, totalPrice} = useCartContext()

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
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent:'space-around'
                }}
                >

                    


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
        </div>
    )
})

export default CartForm