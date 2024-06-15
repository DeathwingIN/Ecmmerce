import React from 'react';
import PropTypes from 'prop-types';
import { CategoryDefaultProps } from '../../data/CategoryDefaultProps';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product }) => {
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
                <p className="card-text">
                    <strong>Price: ${product.price.toFixed(2)}</strong>
                </p>
                <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {
    product: CategoryDefaultProps.products[0]
};

export default ProductCard;
