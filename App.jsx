import React from 'react';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },

                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },

                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        var i = 1;

        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };

        return (
            <div>
                <h1 style={myStyle}>Hello</h1>
                <h1>Javscript example {1 == 1 ? 'True' : 'False'}</h1>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}


export default App;