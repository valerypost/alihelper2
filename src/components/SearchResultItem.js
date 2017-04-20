/**
 * Created by vbalovnev on 3/29/2017.
 */
import React, { PropTypes } from 'react';

/**
 * Created by vbalovnev on 3/28/2017.
 */


function Item(props) {
    return (
        <div>
            <img className="Avatar"
                 src={props.item.avatarUrl}
                 alt={props.item.name}/>
            <div className="item-name">
                {props.item.name}
            </div>
            <div className="price">
                {props.item.price}
            </div>
        </div>
    );
}

function Store(props) {
    return (
        <div className="store">
            <div className="store-name">
                {props.store.name}
            </div>
        </div>
    );
}

function SearchResultItem(props) {
    return (
        <div className="item">
            <Item item={props.item} />
            <Store store={props.store} />
        </div>
    );
}

export default SearchResultItem;

