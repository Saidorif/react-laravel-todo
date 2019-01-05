import React from "react";
import { Link } from "react-router-dom";
const SingleNew = props => {
    const post = props.post;
    return (
        <div className="col-sm-4">
            <div className="card card-body">
                <h3 className="text-center">{post.title}</h3>
                <img src={post.image} alt={post.title} className="img-fluid" />
                <p>{post.text}</p>
                <Link className="btn btn-info" to={`post/${post.id}/edit`}>
                    Edit <i className="fas fa-edit" />
                </Link>
                <hr />
                <button
                    className="btn btn-danger"
                    onClick={props.deletePost.bind(this, post.id)}
                >
                    Delete <i className="fas fa-trash" />
                </button>
            </div>
        </div>
    );
};

export default SingleNew;
