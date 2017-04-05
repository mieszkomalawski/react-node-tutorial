import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const newHistory = createBrowserHistory();

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

class Dupa extends Component {
    render(){
        return (<h1>Dupa</h1>);
    }
}

render(
    <Router  history={newHistory}>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/dupa" component={Dupa}/>
        </div>

    </Router>,
    document.getElementById('app')
);