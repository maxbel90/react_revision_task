import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {url: '/fb/articles', label: 'Articles'},
                {url: '/fb/results', label: 'Results'},
            ]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.menuItems.map((item, index) => {
                            return <li key={index}><Link to={item.url}>{item.label}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}