import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default class Articles extends Component {
    constructor() {
        super();

        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5001/api/articles/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            });
    }

    render() {
        return (
            <div>
                <div> Articles Page</div>
                <ul>
                    {this.state.articles.map(article =>
                        <li key={article._id}>
                            <Link to={`/fb/${article.url}`}> {article.label} </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}