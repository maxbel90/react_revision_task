import React, {Component} from 'react'

export default class Block extends Component {
    constructor() {
        super();

        this.deleteItem = this.deleteItem.bind(this);
        this.approveItem = this.approveItem.bind(this);
        this.getBlockId = this.getBlockId.bind(this);
    }

    deleteItem() {
        this.props.deleteItem(this.getBlockId(), this.props.index);
    }

    approveItem() {
        this.props.approveItem(this.getBlockId(), this.props.index);
    }

    getBlockId() {
        return this.props.item._id;
    }

    render() {
        return (
            <div id={`block-${this.getBlockId()}`}>
                <div>
                    <h4>ORIGINAL TEXT</h4>
                    <span>{this.props.item.originalText}</span>
                </div>
                <div>
                    <h4>USERS VERSION</h4>
                    <span>{this.props.item.usersText}</span>
                </div>
                <div className="text-right">
                    <input type="button" value="DELETE" onClick={this.deleteItem} />
                    <input type="button" value="Approve" onClick={this.approveItem} />
                </div>
            </div>
        )
    }
}