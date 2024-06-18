import React from 'react';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';



const Cart = (props) => {
    const {title} = props;
    useDocumentTitle(title);
    return (



        <h4>Cart Details page</h4>
    );
}

export default Cart;
