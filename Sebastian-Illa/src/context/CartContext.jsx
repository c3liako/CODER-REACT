import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

        const [cartList, setCartList] = useState([])  //Estado

        const isInCart = () => cartList.findIndex(prod => prod.id === product.id) 

        const agregarCarrito = (product) => {
            const idx = cartList.findIndex(prod => prod.id === product.id) //no esta -> -1
            if (idx !== -1) {
                cartList[idx].cant +=  product.cant
                setCartList( [ ...cartList ] ) 
            } else {
                setCartList([...cartList, product]) // push
            }  
        }

        const vaciarCarrito = () =>{
            setCartList ([])
        }




    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>

        {children}

        </CartContext.Provider>
    )
}