import {SAVE_CATEGORIES }  from "../constants/Catagory";

export const setCategories = (payload) => {

    return {
        type: SAVE_CATEGORIES,
        payload
    };
}