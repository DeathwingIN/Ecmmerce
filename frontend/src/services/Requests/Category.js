import fetch from '../../axiosConfig/fetch';

const category = 'categories';

const CategoryRequest = {};


CategoryRequest.getAllCategories = (params) => {
    return fetch({
        url: category,
        method: "get",
        params: params
    });
};

CategoryRequest.getACategory = (id) => {
    return fetch({
        url: `${category}/${id}`,
        method: "get"
    });
};

export default CategoryRequest;