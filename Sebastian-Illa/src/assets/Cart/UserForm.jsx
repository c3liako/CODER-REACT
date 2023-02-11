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
    />
    <input
        className="form-control"
        type="text"
        onChange={handleOnChange}
        name="emailConfirm"
        value={dataForm.emailConfirm}
        placeholder="Verifica tu E-mail"
    />
    </div>
    <button className="btn bg-info p-3 m-3 fw-bolder">
    Finalizar Compra
    </button>
</div>
</form>




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