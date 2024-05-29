import {React, useEffect, useState} from "react";
import {Card} from 'react-bootstrap';
import '../styles/App.css'
import { getPostCount, getRandomPost } from "../utils/api";

function Jumbotron() {
    const [postCount, setPostCount] = useState([]);
    const [randomPost, setRandomPost] = useState([]);

    useEffect(() => {
        getPostCount().then((postCount) => setPostCount(postCount));
        getRandomPost().then((randomPost) => setRandomPost(randomPost));
    }, []);

    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container-fluid">
                <h1 className="display-4">{postCount}</h1>
                <p className="lead">Posts stored in our database</p>
            </div>
            <br />


            <div className="container mt-5">
            <Card>
                <Card.Header bg="primary" text="white">
                <h5>A Random Reddit Comment</h5>
                </Card.Header>
                <Card.Body>
                <p className="card-text">
                    {randomPost}
                </p>
                </Card.Body>
                <Card.Footer>
                <button className="btn btn-primary" onClick={() => {
                    getRandomPost().then(newRandomPost => {
                        setRandomPost(newRandomPost);
                        getPostCount().then(newPostCount => {
                            setPostCount(newPostCount);
                        })
                    })
                }}>
                    Refresh
                </button>
                </Card.Footer>
            </Card>
            </div>
        </div>
    );
}
export default Jumbotron;