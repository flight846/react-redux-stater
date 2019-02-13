import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { logo, appLink, code } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <p> Edit <code>{ code }</code> and save to reload. </p>
                    <a className="App-link" href={ appLink } target="_blank" rel="noopener noreferrer" > Learn React </a>
                </header>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return state;
}

export default connect(MapStateToProps)(App);
