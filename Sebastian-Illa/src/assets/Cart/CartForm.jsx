
import { memo } from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore,} from "firebase/firestore"

const CartForm = memo(() => {
    const [dataForm, SetFormData] = useState({
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
    
    

    addDoc(queryCollection, order,)
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
<div className="card input-group p-4 mb-5 ">
    <h5>Completa el formulario para finalizar tu compra.</h5>
    <div className="m-3">
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="name"
        value={dataForm.name}
        placeholder="Tu nombre completo"
        required
    />
    </div>
    <div className="m-3">
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="phone"
        value={dataForm.phone}
        placeholder="Ingresa tu numero de telefono"
        required
    />
    </div>
    <div className="m-3">
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="email"
        value={dataForm.email}
        placeholder="tucorreo@ejemplo.com"
        required
    />
    </div>
    <button className="btn bg-info p-3 m-3 fw-bolder">
    Finalizar Compra
    </button>
</div>
</form>
        </div>
    )
})

export default CartForm