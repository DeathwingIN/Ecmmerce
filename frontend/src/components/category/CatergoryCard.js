import React from 'react';
import ProductCard from '../products/ProductCard';
import PropTypes from 'prop-types'

const CategoryCard = props => {
    return (
        <>
            <div className="category my-4 ">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Food</h1>
                    <h5>More</h5>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard/>
                    </div>

                </div>
            </div>
        </>
    )
}


CategoryCard.propTypes = {
    category: PropTypes.object,
    showMore: PropTypes.bool
};


export default CategoryCard;