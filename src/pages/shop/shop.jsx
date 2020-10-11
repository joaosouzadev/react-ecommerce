import React from 'react';
import SHOP_DATA from './shop_data.js';
import Collection from '../../components/collection/collection';

// import './directory.scss';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }

}

export default ShopPage;