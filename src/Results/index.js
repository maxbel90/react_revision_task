import React, {Component} from 'react';
import ApiService from '../ApiService';

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
        this.immutableSplice = this.immutableSplice.bind(this);
    }

    componentDidMount() {
        ApiService().getAllAdvice().then(res => {
            this.setState({
                advice: res.data
            });
        });
    }

    approveItem(id, index) {
        ApiService().approveAdvice(id).then(res => {
            this.removeItemFromList(index);
        });
    }

    deleteItem(id, index) {
        ApiService().deleteAdvice(id).then(res => {
            this.removeItemFromList(index);
        });
    }

    immutableSplice(arr, indexToRemove, deleteCount=1) {
        return [ ...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + deleteCount) ]
    }

    removeItemFromList(index) {
        this.setState({
            advice: this.immutableSplice(this.state.advice, index)
        });
    }

    render() {
        const {advice} = this.state;
        return (
            <div>
                <h1>Results:</h1>
                {
                    advice.map((block, index) =>
                        <Block key={block._id} item={block} index={index} deleteItem={this.deleteItem}
                               approveItem={this.approveItem}/>
                    )
                }
            </div>
        );
    }
}

Results.contextTypes = {
    router: React.PropTypes.object.isRequired,
};