import React, {Component} from 'react';

import User from "./User";



export default class Posts extends Component
{
    

    render(){

        const items = this.renderItems(this.props.posts);

        return(
            
            <div className="Left">
                
                {items}

            </div>


        )
    }

    renderItems(arr) {

        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (

                <div key={id} className="post">
                    <User 
                        src = {photo}
                        alt = {altname}
                        name = {name} 
                        min/>
                    
                    <img src={src} alt={alt}></img>
                    
                    <div className="post__name">
                        {name}
                    </div>
                    
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
                
            )

        })

    }

    

}