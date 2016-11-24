import React from 'react';
import {connect} from 'react-redux';
import ItemList from './ItemList';
import AddItem from './AddItem';
import { addItem } from './actions';

const app = ({items, addItem}) => (
    <div>
        <AddItem addItem={addItem} />
        <ItemList items={items} />
    </div>
);

const mapStateToProps = state => {
    return {
        items: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: text => dispatch(addItem(text))
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(app);

export default App;