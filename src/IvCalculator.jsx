'use strict';

const React = require('react'),
    history = require('react-router').hashHistory,
    pokemonService = require('./pokemon-service'),
    Immutable = require('immutable');

const IvCalculator = React.createClass({
    getInitialState() {
        var service = new pokemonService(),
            that = this;

        service.getLanguages(6, function(error, result) {
            if (error) {
                console.error(error);
                return;
            }
            // that.setState({languages: Immutable.List([{id: 25, name: 'Koreanisch'}])});
            that.setState({languages: Immutable.List(result)});
        });
        return {languages: []};
    },
    goBack() {
        history.goBack();
    },
    render() {
        return (
            <div>
                <h1>IV-Calculator</h1>
                <h2>Pokémon</h2>
                <label>Sprache</label>
                <select>
                    {this.state.languages.map(language => <option key={language.id}>{language.name}</option>)}
                </select>

                <br/>
                <button onClick={this.goBack}>Zurück</button>
            </div>
        );
    }
});

module.exports = IvCalculator;
