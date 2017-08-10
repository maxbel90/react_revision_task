import React, {Component} from 'react'

export default class Block extends Component {
    constructor() {
        super();

        this.deleteItem = this.deleteItem.bind(this);
        this.approveItem = this.approveItem.bind(this);
        this.getBlockId = this.getBlockId.bind(this);
    }

    deleteItem() {
        if (!window.confirm('Are you sure that you want to delete this element ?')) {
            return false;
        }

        this.props.deleteItem(this.getBlockId(), this.props.index);
    }

    approveItem() {
        if (!window.confirm('Are you sure that you want to approve this element ?')) {
            return false;
        }

        this.props.approveItem(this.getBlockId(), this.props.index);
    }

    getBlockId() {
        return this.props.item._id;
    }

    render() {
        return (
            <div id={`block-${this.getBlockId()}`} className="article-advice-block">
                <div>
                    <div>
                        <span>ORIGINAL TEXT</span>
                        <article>{this.props.item.originalText}</article>
                    </div>
                    <div>
                        <span>USERS VERSION</span>
                        <article>{this.props.item.usersText}</article>
                    </div>
                    <div className="text-right controls">
                        <input type="button" value="DELETE" onClick={this.deleteItem} className="btn btn-danger"/>
                        <input type="button" value="Approve" onClick={this.approveItem} className="btn btn-warning"/>
                    </div>
                </div>
            </div>
        )
    }
}