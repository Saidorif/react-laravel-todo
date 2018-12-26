import React, { Component } from "react";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import News from "./News";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <main role="main">
                    <Jumbotron />
                    <News />
                </main>
                <footer className="container">
                    <p>&copy; Company 2017-2018</p>
                </footer>
            </div>
        );
    }
}

export default Home;
