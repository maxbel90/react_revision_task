import React, {Component} from 'react';
import axios from 'axios';

import Block from '../Block';

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            advice: []
        };

        this.approveItem = this.approveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5001/api/advice/')
            .then(res => {
                this.setState({
                    advice: res.data
                });
            });
    }

    approveItem(id, index) {
        axios.put(`http://localhost:5001/api/advice/${id}`)
            .then(res => {
                this.removeItemFromList(index);
            });
    }

    deleteItem(id, index) {
        axios.delete(`http://localhost:5001/api/advice/${id}`)
            .then(res => {
                this.removeItemFromList(index);
            });
    }

    removeItemFromList(index) {
        this.state.advice.splice(index, 1);

        this.setState({
            advice: this.state.advice
        });
    }

    render() {
        return (
            <div>
                <div>Results:</div>
                {this.state.advice.map((block, index) =>
                    <Block key={block._id} item={block} index={index} deleteItem={this.deleteItem}
                           approveItem={this.approveItem}/>
                )}
            </div>
        );
    }
}

Results.contextTypes = {
    router: React.PropTypes.object.isRequired,
};