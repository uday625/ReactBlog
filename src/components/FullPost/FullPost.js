import React, { Component } from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state ={
        selectedPost: null
    }

    componentDidUpdate () {
        
        if(this.props.blogID){

            if(!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.blogID)){
                Axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.blogID)
                .then(Response =>{
                    this.setState({selectedPost:Response.data})
                })
            }
        }
    }

    handleDeletePost = () =>{
        Axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.blogID)
            .then(response =>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render () {

        let post = <p>Please select a Post!</p>;

        if(this.props.blogID){
            post = <p>Loading...</p>;
        }

        if(this.state.selectedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button onClick ={this.handleDeletePost}className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }

        return post;
    }
}

export default FullPost;