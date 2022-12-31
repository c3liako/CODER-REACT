import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

        const [cartList, setCartList] = useState([])  //Estado


        const agregarCarrito =(product) =>{    //Funcion
            setCartList([... cartList, product])
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