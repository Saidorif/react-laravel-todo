import React, { Component } from "react";

class News extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>
                            Donec id elit non mi porta gravida at eget metus.
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Etiam porta sem malesuada magna
                            mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="#"
                                role="button"
                            >
                                View details &raquo;
                            </a>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default News;
