import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Results from '../Results';
import Advice from '../Advice';
import Articles from '../Articles';
import Menu from '../Menu';
import './App.css';


class App extends Component {
    render() {
        return (
            <main>
                <Menu />
                <div className="container main-block">
                    <Switch>
                        <Route exact path='/fb/articles' component={Articles}/>
                        <Route exact path='/fb/results' component={Results}/>
                        <Route path='/fb/:url(https://.+)' component={Advice}/>
                        <Redirect to="/fb/articles"/>
                    </Switch>
                </div>
            </main>
        );
    }
}

export default App;
