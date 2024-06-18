import React from 'react';
import PropTypes from 'prop-types';
import {CategoryDefaultProps} from '../../data/CategoryDefaultProps';
import './ProductCard.css'; // Import the CSS file
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addItem} from "../../redux/actions/Cart";
import {useEffect, useState} from "react";


const ProductCard = ({ product = CategoryDefaultProps.products[0], addItem, items }) => {
    const [itemIsInCart, setItemIsInCart] = useState(false);

    const handleAddItemToCart = () => {
        addItem(product);
        setItemIsInCart(true);
    };

    const handleCheckIfItemIsInCart = () => {
        const item = items?.find(item => item?.id === product?.id);
        if (item) {
            setItemIsInCart(true);
        }
    };

    useEffect(() => {
        handleCheckIfItemIsInCart();
    }, []);

    return (
        <div className="card product-card h-100">
            <img
                src={product.avatar ?? "https://via.placeholder.com/300x200"}
                className="card-img-top"
                alt="Product"
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text product-description flex-grow-1">{product.description}</p>
                <p className="card-text"><strong>Price: ${product.price.toFixed(2)}</strong></p>
                <div className="d-grid gap-2">
                    <button
                        className="btn btn-primary"
                        onClick={handleAddItemToCart}
                        disabled={itemIsInCart}
                    >
                        {itemIsInCart ? "Already in cart" : "Add to Cart"}
                    </button>
                    <Link
                        className="btn btn-secondary"
                        to={`/product/${product?.id}`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const mapStateToProps = ({ cart }) => {
    const { items } = cart;
    return { items };
};

const mapDispatchToProps = {
    addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
