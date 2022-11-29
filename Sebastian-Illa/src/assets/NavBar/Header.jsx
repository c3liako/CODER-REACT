import React from 'react'
import Logo from "./Logo"
import Titulo from "./Titulo"
import Carrito from "./Carrito"
import Redes from "./Redes"
import Nav from "./Nav"




function Header () {
    return (
        <header className='header'>
            <div className='logo'>
                <Logo/>
                <Titulo/>
                <Carrito/>
            </div>
            <Redes/>
            <Nav/>

        </header>
    )
}

export default Header