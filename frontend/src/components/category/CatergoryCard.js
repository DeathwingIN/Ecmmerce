import React from 'react';
import ProductCard from '../products/ProductCard';
import PropTypes from 'prop-types'
import {CategoryDefaultProps} from '../../data/CategoryDefaultProps';
import {Link} from 'react-router-dom';

const CategoryCard = props => {

    const {category, showMore} = props;


    return (
        <>
            <div className="category my-4 ">
                <div className="d-flex justify-content-between align-items-center">
                    <h4>{category?.name}</h4>

                    {
                        showMore &&
                        <Link
                            to={`/categories/${category?.id}`}
                            className="btn btn-primary btn-sm"
                        >
                            View More
                        </Link>
                    }
                </div>
                <div className=" row">
                    <div className=" col-md-3">
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
CategoryCard.defaultProps = {
    category: CategoryDefaultProps,
    showMore: true
};


export default CategoryCard;