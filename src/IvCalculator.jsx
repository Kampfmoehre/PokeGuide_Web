'use strict';

const React = require('react'),
      history = require('react-router').hashHistory;

const IvCalculator = React.createClass({
    getInitialState() {
        return {};
    },
    goBack() {
        history.goBack();
    },
    render() {
        return (
            <div>
                <h1>IV-Calculator</h1>
                <h2>Pokémon</h2>
                <button onClick={this.goBack}>Zurück</button>
            </div>
        );
    }
});

module.exports = IvCalculator;
