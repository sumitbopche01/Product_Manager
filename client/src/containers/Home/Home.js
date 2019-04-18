import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import ListProducts from '../../components/ListingProducts/ListingProducts';

class ProductsMain extends Component {
    render(){
        return (
            <Aux>
                <ListProducts />
            </Aux>
        )
    }
}

export default ProductsMain;
