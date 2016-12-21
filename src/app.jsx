'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      router = require('react-router'),
      Router = router.Router,
      Route = router.Route,
      Link = router.Link,
      hashHistory = router.hashHistory;

const IvCalculator = require('./IvCalculator');

const App = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        return (
            <div>
                <h1>Moin</h1>
                <Link to="/ivcalculator">IV Calculator</Link>
            </div>
        );
    }
});

// ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/ivcalculator" component={IvCalculator}/>
    </Router>
), document.getElementById('app'));
