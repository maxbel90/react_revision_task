import React, {Component} from 'react';

import Menu from '../Menu';
import App from '../App/App';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Menu />
                <App />
            </div>
        )
    }
}
