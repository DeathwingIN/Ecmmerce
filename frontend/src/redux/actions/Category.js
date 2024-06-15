const {SAVE_CATEGORIES } = require("../constants/Catagory");

export const setCategories = (payload) => {

    return {
        type: SAVE_CATEGORIES,
        payload
    };
}