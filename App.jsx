import React from 'react';


class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        )
    }
}

export {App, Home, About, Contact};