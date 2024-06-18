import React from 'react';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';
import {connect} from 'react-redux';
import {setCurrentProduct,addItem} from '../../redux/actions';
import useLoading from '../../hooks/useLoading';
import {useParams, useNavigate} from 'react-router-dom';
import ProductRequest from '../../services/Requests/Product';
import {useEffect, useState} from "react";

const ProductDetails = props => {
    const {currentProduct, setCurrentProduct,items} = props;
    const [loading, withLoading] = useLoading();
    const {id} = useParams();

    const handleGetAProduct = async () => {
        try {
            const product = await withLoading(ProductRequest.getAProduct(id));
            setCurrentProduct(product?.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [itemIsInCart, setItemIsInCart] = useState(false);

    const handleAddItemToCart = () => {
        addItem(currentProduct);
        setItemIsInCart(true);
    };

    const handleCheckIfItemIsInCart = () => {
        const item = items?.find(item => item?.id === currentProduct?.id);
        if (item) {
            setItemIsInCart(true);
        }
    };


    useEffect(() => {
        handleGetAProduct();
        handleCheckIfItemIsInCart();
    }, [id]);

    return (

        <>
            {
                loading ?
                    <h4>Loading Product ...</h4>
                    :
                    <div className="container">
                        <h1 className="mt-4 mb-3">{currentProduct?.name}</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid rounded mb-4" src={currentProduct?.avatar ?? "https://via.placeholder.com/500x500"}
                                     alt="Product"/>
                            </div>
                            <div className="col-lg-6">
                                <h3>Product Description</h3>
                                <p>{currentProduct?.description}</p>
                                <h4>Product Details</h4>
                                <h4>{currentProduct?.price}</h4>
                                <button
                                    className="btn btn-primary"
                                    disabled={itemIsInCart}
                                    onClick={handleAddItemToCart}
                                >
                                    {itemIsInCart ? "Already in cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>)

}


const mapStateToProps = ({product,cart}) => {
    const {currentProduct} = product;
    const {items} = cart;
    return {currentProduct,items};
};


const mapDispatchToProps = {
    setCurrentProduct,
    addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);