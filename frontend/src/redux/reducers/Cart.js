import {ADD_ITEM, REMOVE_ITEM} from "../constants/Cart";

const initState = {
    items: [],
    total: 0,
}

const Cart = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            }
        case 'REMOVE_ITEM':
            const index = state.items.findIndex(item => item.id === action.payload.id)
            return {
                ...state,
                items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
                total: state.items?.length === 1 ? 0  :state.total - action.payload.price,
            }


        default:
            return state
    }
}

export default Cart;