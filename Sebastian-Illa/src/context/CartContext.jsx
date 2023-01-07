import { useContext, createContext,useState } from 'react'


const CartContext = createContext( [] )

export const useCartContext = () =>  useContext(CartContext)



export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const addToCart = (product) => {
        const idx = cartList.findIndex(prod => prod.id === product.id) 
        if (idx !== -1) {
            cartList[idx].quantity +=  product.quantity
            setCartList( [ ...cartList ] ) 
        } else {
            setCartList([...cartList, product]) 
        }  
        
    }

/* ------------------------------ price TOTAL ------------------------------ */
    
    const totalPrice = () => cartList.reduce((counter, product) => counter += (product.price * product.quantity) , 0)
    
/* ----------------------------- CANTIDAD TOTAL ----------------------------- */
    const totalAmount = () => cartList.reduce((counter, product) => counter += product.quantity , 0)


/* ----------------------------- VACIAR CART ----------------------------- */
    const emptyCart = () => {
        setCartList([])
    }

/* ---------------------------- ELIMINAR POR ITEM --------------------------- */
    const deleteItem = (id) =>  {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalAmount,
            deleteItem
        }}>
            { children  }
        </CartContext.Provider>
    )
}