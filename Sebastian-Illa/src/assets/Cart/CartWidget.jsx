import  { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../../../../context/CartContext'

export const Cartwidget = () => {

    const {totalAmount} = useCartContext()
        return (
    <div>
        {totalAmount() !== 0 && totalAmount()}
        <AiOutlineShoppingCart />
    </div>
    )
}
AiOutlineShoppingCart