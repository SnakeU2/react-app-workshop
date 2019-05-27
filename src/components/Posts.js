import React, {Component} from 'react';
import Post from "./Post";


export default class Posts extends Component
{
    render(){
        return(
            
            <div className="Left">
                
                <Post alt = "nature"
                src = "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />


                <Post alt = "nature"
                src = "https://media.graytvinc.com/images/810*455/NATURE+GENERIC+TREES.jpg" />
            </div>


        )
    }
}