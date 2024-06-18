import React from 'react';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';
import {connect} from 'react-redux';
import {setCurrentProduct} from '../../redux/actions';
import useLoading from '../../hooks/useLoading';
import {useParams,useNavigate} from 'react-router-dom';
import ProductRequest from '../../services/Requests/Product';
import {useEffect} from 'react';

const ProductDetails = (props) => {

    const {setCurrentProduct,currentProduct} = props;
    const {loading,withLoading} = useLoading();

    const{id}=useParams();

    const navigateTo = useNavigate();

    const handleGetAProduct = async () => {
        try {
            const product = await withLoading(ProductRequest.getAProduct(id));
            setCurrentProduct(product?.data);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        handleGetAProduct();
    }, [id]);

    return (


        <h4>ProductDetails page</h4>);

}


const mapStateToProps = ({product}) => {
    const {currentProduct} = product;
    return {currentProduct};
};

const mapDispatchToProps =  {
setCurrentProduct,
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);