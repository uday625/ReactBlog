import React, { Component, Fragment } from 'react';
import Axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Heading from '../../components/Heading/Heading';

import './Blog.css';

class Blog extends Component {

    state = {
        posts:[],
        blogId: null,
        error:false
    }

    componentDidMount (){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (response=>{
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map ( post => {
                    return{
                        ...post,
                        author:'Uday'
                    }
                })
                this.setState({posts:updatedPost});               
            })
            .catch (error =>{
                this.setState({error:true});
            })
    }

    handleDisplayPost = (id) =>{
        this.setState({blogId:id});
    }

    render () {
    let posts = <p style={{color:'Red'}}> Something went wrong. Can't show the blogs</p> 
    
    if(!this.state.error){
        posts = this.state.posts.map (post =>{
            return (
                <Post 
                    key={post.id} 
                    title={post.title} 
                    author ={post.author}
                    clicked ={()=>this.handleDisplayPost(post.id)}                        
                    />
            )
        })
    }

        return (
            <Fragment>
                <Heading/>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        blogID = {this.state.blogId}
                        />
                </section>
                <section>
                    <NewPost />
                </section>
            </Fragment>
        );
    }
}

export default Blog;