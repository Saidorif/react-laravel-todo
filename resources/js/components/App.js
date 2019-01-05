// resources/assets/js/components/App.js

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import ShowPost from "./ShowPost.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navigation />
                    <main role="main">
                        <Jumbotron />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/post/:id/edit" component={ShowPost} />
                        </Switch>
                    </main>
                    <footer className="container">
                        <p>&copy; Company 2017-2018</p>
                    </footer>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
