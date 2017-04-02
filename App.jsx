import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: 'Header from state'
        }
    }

    render() {
        return (
            <div>
                <Header headerProp = {this.state.header} />
                <Header2 headerProp = {this.props.headerProp} />
                <Content contentProp = {this.props.contentProp} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.headerProp}</h2>
            </div>
        )
    }
}

class Header2 extends React.Component {
    render() {
        return(
            <div>
                <h3>{this.props.headerProp}</h3>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.contentProp}</p>
            </div>
        )
    }
}

App.defaultProps = {
    headerProp: "Header from props default...",
    contentProp: "dupa"
}



export default App;