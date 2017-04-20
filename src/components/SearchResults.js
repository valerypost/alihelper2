/**
 * Created by vbalovnev on 3/29/2017.
 */
import React, { PropTypes } from 'react';
import SearchResultItem from './SearchResultItem';
import '../assets/stylesheets/controls.css';
import '../assets/stylesheets/toogle_switch.css';

function SearchResults(props) {
    const numbers = props.items;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
    <SearchResultItem key={number.item.id}
        item={number.item}
        store={number.store}
    />
    );

    return (
        <div className="item-list">
            {listItems}
        </div>
    );
}
export default SearchResults;