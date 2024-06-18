import {SAVE_CATEGORIES,SAVE_CATEGORY }  from "../constants/Catagory";

const initState = {
    categories: [],
    currentCategory: null,
}

const Category = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }

        case 'SAVE_CATEGORY':
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state
    }
}

export default Category;