import React, {Component} from 'react';

import AdviceBlock from '../AdviceBlock';

import ApiService from '../ApiService';

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
        ApiService().getArticle(this.getArticleUrl()).then(res => {
            this.setState({
                article: res.data
            });
        });
    }

    saveChanges(index, value) {
        const newAdviceObj = {
            articleUrl: this.getArticleUrl(),
            originalText: this.state.article.blocks[index].originalText,
            usersText: value
        };

        ApiService().createAdvice(this.getArticleUrl(), newAdviceObj).then(res => {
            console.log('data saved', res);
        });
    }

    getArticleUrl() {
        return this.props.match.params.url;
    }

    render() {
        const {article} = this.state;
        return (
            <div>
                <h2>{article.label}</h2>
                {
                    article.blocks && article.blocks.map((item, index) => {
                        return <AdviceBlock key={index} item={item} index={index} saveChanges={this.saveChanges}/>
                    })
                }
            </div>
        );
    }
}