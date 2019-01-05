import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowPost extends Component {
    constructor() {
        super();
        this.state = {
            post: []
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        // this.setState({
        //     post: {
        //         [e.target.name]: e.target.value,
        //         image: this.state.post.image
        //     }
        // });
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        fetch(`/api/admin/posts/${id}`)
            .then(res => res.json())
            .then(res => this.setState({ post: res }))
            .catch(err => console.log(err));
    }
    render() {
        const post = this.state.post;
        return (
            <div className="container">
                <Link to="/" className="btn btn-secondary mb-3">
                    <i className="fas fa-arrow-left" /> Back to Home
                </Link>
                <div className="row">
                    <div className="col-sm-4">
                        <p>
                            <img
                                src={`/${post.image}`}
                                alt={post.title}
                                className="img-fluid mb-2"
                            />
                        </p>
                        <p>
                            <span className="ml-auto">{post.created_at}</span>
                        </p>
                        {post.state ? (
                            <span className="alert alert-success">Active</span>
                        ) : (
                            <span className="alert alert-danger">
                                Not Active
                            </span>
                        )}
                    </div>
                    <div className="col-sm-8">
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={post.title}
                                    name="title"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="text"
                                    id="text"
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    value={post.text}
                                    name="text"
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowPost;
