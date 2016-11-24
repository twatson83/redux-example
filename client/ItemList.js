import React, {PropTypes} from 'react';

const ItemList = ({items}) => (
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;