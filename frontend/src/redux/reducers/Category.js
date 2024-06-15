const {SAVE_CATEGORIES } = require("../constants/Catagory");

const initState = {
    categories: [],
}

const Category = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default Category;