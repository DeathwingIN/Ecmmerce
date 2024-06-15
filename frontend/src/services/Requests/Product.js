import fetch from '../../axiosConfig/fetch';

const ProductRequest = {};
const product = 'products';

ProductRequest.getAllProducts = (params) => {
    return fetch({
        url: product,
        method: "get",
        params: params
    });
};


export default ProductRequest;