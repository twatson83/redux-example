import React, {PropTypes} from 'react';

export default class AddItem extends React.Component {
    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this._addItem = this._addItem.bind(this);
        this.state = {
            item: ""
        }
    }

    _onChange(e){
        this.setState({
            item: e.currentTarget.value
        });
    }

    _addItem(){
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
        });
    }

    render(){
        return (
            <div>
                <input type="test" value={this.state.item} onChange={this._onChange}/>
                <button onClick={this._addItem}>Add Item</button>
            </div>
        )
    }
}

AddItem.propTypes = {
    addItem: PropTypes.func.isRequired
};