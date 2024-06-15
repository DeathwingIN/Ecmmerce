import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { CategoryDefaultProps } from '../../data/CategoryDefaultProps';

const CategoryCard = ({ category, showMore }) => {
    return (
        <div className="category my-4">
            <div className="d-flex justify-content-between align-items-center">
                <h4>{category.name}</h4>
                {showMore && (
                    <Link
                        to={`/categories/${category.id}`}
                        className="btn btn-primary btn-sm"
                    >
                        View More
                    </Link>
                )}
            </div>
            <div className="row">
                {/* Map through the products array to render multiple ProductCard components */}
                {category.products.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired,
    showMore: PropTypes.bool
};

CategoryCard.defaultProps = {
    category: CategoryDefaultProps,
    showMore: true
};

export default CategoryCard;