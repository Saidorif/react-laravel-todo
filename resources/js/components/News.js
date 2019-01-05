import React, { Component } from "react";
import SingleNew from "./SingleNew";

class News extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
        this.deletePost = this.deletePost.bind(this);
    }
    editPost() {
        alert("edit");
    }
    componentDidMount() {
        fetch("api/admin/posts")
            .then(res => res.json())
            .then(res => {
                this.setState({ posts: res });
            });
    }
    deletePost(id) {
        if (confirm("Are you sure")) {
            fetch(`api/admin/posts/${id}`, {
                method: "delete"
            })
                .then(res =>
                    fetch("api/admin/posts")
                        .then(response => response.json())
                        .then(response => this.setState({ posts: response }))
                )
                .catch(err => console.log(err))
                .catch(err => console.log(err));
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.posts.map(post => {
                        return (
                            <SingleNew
                                key={post.id}
                                post={post}
                                editPost={this.editPost}
                                deletePost={this.deletePost}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default News;
