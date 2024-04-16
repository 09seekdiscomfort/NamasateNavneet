import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const indexToRemove = action.payload
            state.items.splice(indexToRemove, 1)
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
