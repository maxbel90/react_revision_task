import React, {Component} from 'react';

import AdviceBlock from '../AdviceBlock';

import axios from 'axios';

export default class Advice extends Component {
    constructor() {
        super();
        this.state = {
            article: {}
        };

        this.saveChanges = this.saveChanges.bind(this);
        this.getArticleUrl = this.getArticleUrl.bind(this);
    }

    componentDidMount() {

        axios.get(`http://localhost:5001/api/article/${this.getArticleUrl()}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            });
    }

    saveChanges(index, value) {
        axios.post(`http://localhost:5001/api/article/${this.getArticleUrl()}`, {
            articleUrl: this.getArticleUrl(),
            originalText: this.state.article.blocks[index].originalText,
            usersText: value
        }).then(res => {
            console.log('data saved', res);
        });
    }

    getArticleUrl() {
        return this.props.match.params.url;
    }

    render() {
        return (
            <div>
                <h2>{this.state.article.label}</h2>
                {
                    this.state.article.blocks && this.state.article.blocks.map((item, index) => {
                        return <AdviceBlock key={index} item={item} index={index} saveChanges={this.saveChanges}/>
                    })
                }
            </div>
        );
    }
}