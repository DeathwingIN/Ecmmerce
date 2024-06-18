import React from 'react';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';

const ProductDetails = (props) => {

    const {title} = props;
    useDocumentTitle(title);
    return (


        <h4>ProductDetails page</h4>);

}

export default ProductDetails;