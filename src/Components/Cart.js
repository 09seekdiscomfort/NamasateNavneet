import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from './utils/cartSlice'

const Cart = () => {
    const data = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleRemove = (index) => {
        dispatch(removeFromCart(index))
    }

    const handleClear = (index) => {
        dispatch(clearCart(index))
    }

    return (
        <div className="bg-white shadow-md rounded-md p-4 m-auto">
            <button
                onClick={() => handleClear()}
                className="text-sm text-red-600 hover:text-red-700 focus:outline-none"
            >
                Clear
            </button>
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center mb-2 border-b pb-2"
                >
                    <div className="flex items-center space-x-2">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.imageId}`}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                        />
                        <span className="text-gray-800">{item.name}</span>
                    </div>
                    <button
                        onClick={() => handleRemove(index)}
                        className="text-sm text-red-600 hover:text-red-700 focus:outline-none"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart
