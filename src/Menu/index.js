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
        const {menuItems} = this.state;

        return (
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                menuItems.map((item, index) => {
                                    return <li key={index}><Link to={item.url}>{item.label}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}