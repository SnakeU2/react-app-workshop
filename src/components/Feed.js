import React, {Component} from 'react';
import InstaService from "../services/instacervice";
import ErrorMessage from "./ErrorMessage";
import Posts from './Posts';
import Users from './Users';


export default class Feed extends Component
{
    
    InstaService = new InstaService();

    state = {

        posts: [],
        users: [],
        error: false

    }

    componentDidMount(){

        this.updatePosts();
    
    }

    updatePosts() {

        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)

    }

    onPostsLoaded = (posts) => {

        const users = posts.map((item) => {
            
           const {name, altname, photo} = item;

             return ({
                name,
                altname,
                photo

            }) 

        })

        this.setState({

            posts,
            users,
            error: false

        })

    }

    onError = (err) => {

        this.setState({
            error: true
        })

    }
    
    
    render() {

        const {error, posts} = this.state;

        if(error) {

            return <ErrorMessage/>
        
        }

        return(

            <div className="container feed">
                <Posts posts={this.state.posts}/>
                <Users users={this.state.users}/>
            </div>
        )
    }

}