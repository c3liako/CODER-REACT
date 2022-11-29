import React from 'react'


function NavBar() {
return (
<header className="header">
    <section className="logo">
        <div>
            <img className="logoImg"
                src="https://static.tingelmar.com/app/uy/negocios/icono/big/i59651-1-1197112030.jpg" alt="Icono"
                srcset="" width="100" height="100" />
        </div>
        <div>
            <h1 className="titulo">KROSER CENTRO</h1>
        </div>
        <div>
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart"
                    width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg></a>
        </div>
    </section>
    <section className="redes">
        <div className="red1"><svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg></div>
        <div className="red2"><svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg></div>
        <div className="red3"><svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-whatsapp" width="40" height="40" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path
                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg></div>
    </section>
    <section>
        <div id="nav">
            <nav>
                <ul className="nav">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Aerosoles</a></li>
                    <li><a href="">Esmaltes</a></li>
                    <li><a href=""></a></li>
                    <li><a href="">Impermeabilizantes</a></li>
                    <li><a href="">Accsesorios</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </section>
</header>
)
}

export default NavBar