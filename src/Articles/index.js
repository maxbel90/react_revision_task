import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ApiService from '../ApiService';

export default class Articles extends Component {
    constructor() {
        super();

        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        ApiService().getArticles().then(res => {
                this.setState({
                    articles: res.data
                });
            });
    }

    render() {
        const {articles} = this.state;
        return (
            <div>
                <h1> Articles Page</h1>
                <ul>
                    {
                        articles.map(article =>
                            <li key={article._id}>
                                <Link to={`/fb/${article.url}`}> {article.label} </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}