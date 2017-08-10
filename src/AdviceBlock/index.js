import React, {Component} from 'react';

export default class AdviceBlock extends Component {
    constructor(props) {
        super();

        this.props = props;
        this.state = {
            item: this.props.item
        };

        this.saveChanges = this.saveChanges.bind(this);
        this.getBlockId = this.getBlockId.bind(this);
    }

    saveChanges() {
        const newValue = document.getElementById(this.getBlockId()).childNodes[1].value;
        this.props.saveChanges(this.props.index, newValue);
    }

    getBlockId() {
        return `advice-block-${this.props.index}`;
    }

    render() {
        return <div id={this.getBlockId()}>
            <div>{this.state.item.originalText}</div>
            <textarea name="usersText" defaultValue={this.state.item.originalText} />
            <input type="button" value="Save changes" onClick={this.saveChanges} />
        </div>
    }
}


