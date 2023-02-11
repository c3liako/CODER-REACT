

import { useState, useEffect, memo } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore,} from "firebase/firestore"


const CartForm = memo(() => {
    const [dataForm, SetFormData] = useState({ name: '', lastName: '', email: '', confirmEmail: '', phone: '' })
    const [errorForm, setErrorForm] = useState({ name: '', email: '', confirmEmail: '', phone: '' })
    const { cartList, emptyCart, totalPrice} = useCartContext()





    

const handleOnChange = (e) => {

    SetFormData( {
    ...dataForm,
    [e.target.name]: e.target.value
    })
}

const validateForm = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    const regexTel = /^\d{10}$/
    let error = {}

    if (!dataForm.name.trim()) {
        error.name = 'Se requiere un Nombre'
    }

    if (!dataForm.lastName.trim()) {
        error.name = 'Se requiere un Apellido'
    }

    if (!dataForm.name.trim() && !dataForm.lastName.trim()) {
        error.nombre = 'Se requiere Nombre y Apellido'
    }

    if (!dataForm.email.trim()) {
        error.email = 'Se requiere un Email'
    }

    if (dataForm.email.trim() && !regexEmail.test(dataForm.email.trim())) {
        error.email = 'Email no valido, revise'
    }

    if (!dataForm.confirmEmail.trim()) {
        error.confirmEmail = 'Se requiere confirmar email'
    }

    if (dataForm.confirmEmail.trim() && !regexEmail.test(dataForm.confirmEmail.trim())) {
        error.confirmEmail = 'Email no valido, revise'
    }

    if (dataForm.confirmEmail.trim() && dataForm.email.trim() && dataForm.confirmEmail.trim() !== dataForm.email.trim()) {
        error.confirmEmail = 'Los email no son iguales verifique'
    }

    if (!dataForm.phone.trim()) {
        error.phone = 'Se requiere un telefono'
    }

    if (dataForm.phone.trim() && !regexTel.test(dataForm.phone.trim())) {
        error.phone = 'El numero debe tener 10 dígitos'
    }

    setErrorForm(error)
}


useEffect(() => {
    validateForm()
}, [dataForm])



    const addOrder = (e) => {
        e.preventDefault()
        const order = {}
        order.buyer = dataForm 
        order.price = totalPrice()
        order.item = cartList.map (({id, price, name}) => ({id, price, name}))
        
        
        const db = getFirestore()
        const queryCollection = collection (db, 'orders')
        
        

        addDoc(queryCollection, order,)
            .then(resp => alert(resp.id))
            .catch(err => console.log(err))
            .finally(() => emptyCart())
    
    
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
        placeholder="Nombre"
        required
    />
    </div>
    <div className="m-3">
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="lastName"
        value={dataForm.lastName}
        placeholder="Apellido"
        required
    />
    </div>
    {errorForm.name && <sup className='ps-2'>{errorForm.name}</sup>}
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
    {errorForm.phone && <sup className='ps-2'>{errorForm.phone}</sup>}
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
    {errorForm.email && <sup className='ps-2'>{errorForm.email}</sup>}
    <div className="m-3">
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="confirmEmail"
        value={dataForm.confirmEmail}
        placeholder="tucorreo@ejemplo.com"
        required
    />
    </div>
    {errorForm.confirmEmail && <sup className='ps-2'>{errorForm.confirmEmail}</sup>}
    <button className="btn bg-info p-3 m-3 fw-bolder">
    Finalizar Compra
    </button>
</div>
</form>
        </div>
    )
})

export default CartForm