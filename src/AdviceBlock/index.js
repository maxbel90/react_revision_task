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
        const newValue = document.querySelector(`#${this.getBlockId()} textarea`).value;
        this.props.saveChanges(this.props.index, newValue);
    }

    getBlockId() {
        return `advice-block-${this.props.index}`;
    }

    render() {
        return (
            <div id={this.getBlockId()} className="article-advice-block">
                <div>
                    <span>ORIGINAL TEXT:</span>
                    <article>{this.state.item.originalText}</article>
                    <textarea name="usersText" defaultValue={this.state.item.originalText}/>
                    <p className="text-right">
                        <input type="button" value="Save changes" onClick={this.saveChanges}
                               className="btn btn-default"/>
                    </p>
                </div>
            </div>
        )
    }
}


