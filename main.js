import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const newHistory = createBrowserHistory();

class Main extends Component {
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/dupa">Dupa</Link>
            </div>
        );
    }
}


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
            <Route path="/" component={Main}/>
            <Route path="/dupa" component={Dupa}/>
        </div>

    </Router>,
    document.getElementById('app')
);