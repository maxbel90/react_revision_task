import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Results from '../Results';
import Advice from '../Advice';
import Articles from '../Articles';
import './App.css';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/fb/articles' component={Articles}/>
                <Route exact path='/fb/results' component={Results}/>
                <Route path='/fb/:url(https://.+)' component={Advice}/>
                <Redirect to="/fb/articles" />
            </Switch>
        );
    }
}

export default App;
