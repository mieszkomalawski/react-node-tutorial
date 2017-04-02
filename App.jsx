import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: 'Header from state'
        }

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    setStateHandler() {
        var tmpState = this.state;
        tmpState.header = "New header set";
        this.setState(tmpState);
    }

    render() {
        return (
            <div>
                <Header headerProp={this.state.header}/>
                <Header2 headerProp={this.props.headerProp}/>
                <Content contentProp={this.props.contentProp}/>
                <StateButton />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.headerProp}</h2>
            </div>
        )
    }
}

class Header2 extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.headerProp}</h3>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.contentProp}</p>
            </div>
        )
    }
}

class StateButton extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            </div>
            )

    }
}

// defaults
App.defaultProps = {
    headerProp: "Header from props default...",
    contentProp: "dupa"
}

//validation
App.propTypes = {
    headerProp: React.PropTypes.string,
    contentProp: React.PropTypes.string
}


export default App;