import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from './Home'
import About from './About'
import asyncComponent from "./AsyncComponent";
class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    handleClick() {
        let { count } = this.state;
        this.setState({
            count: count + 1
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <div>{this.state.count}</div>
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            background: "red"
                        }}
                        onClick={this.handleClick.bind(this)}
                    >
                        +
                    </div>
                    <hr />

                    <Route
                        exact
                        path="/"
                        component={asyncComponent(() =>
                            import(/* webpackChunkName: "Home" */ "./Home")
                        )}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}



function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>
                        Rendering with React
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default App;
