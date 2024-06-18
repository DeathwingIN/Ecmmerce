import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { CategoryDefaultProps } from '../../data/CategoryDefaultProps';

const CategoryCard = ({ category = CategoryDefaultProps, showMore = true }) => {
    return (
        <div className="category my-4">
            <div className='d-flex justify-content-between align-items-center'>
                <h4>{category?.name}</h4>
                {showMore && (
                    <Link to={`category/${category?.id}`}>
                        <button className={'btn  btn-success mb-3 mt-3 btn-sm '}>More</button>
                    </Link>
                )}
            </div>
            <div className="row">
                {category?.products?.length > 0 ? (
                    category?.products?.map(product => (
                        <div className="col-md-3 mb-5" key={product?.id}>
                            <ProductCard product={product} />
                        </div>
                    ))
                ) : (
                    <h4>No Products Available</h4>
                )}
            </div>
        </div>
    );
}

CategoryCard.propTypes = {
    category: PropTypes.object,
    showMore: PropTypes.bool
};

export default CategoryCard;