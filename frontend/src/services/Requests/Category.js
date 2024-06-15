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

export default CategoryRequest;