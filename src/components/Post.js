import React, {Component} from 'react';
import User from './User';

export default class Post extends Component
{
    render(){
        return(
            <div className="post">
                < User src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Prince_Harry_at_the_2017_Invictus_Games_opening_ceremony.jpg/220px-Prince_Harry_at_the_2017_Invictus_Games_opening_ceremony.jpg"
                alt = "prince"
                name = "Harry the Prince" />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some text
                </div>
                <div className="post__descr">
                    some descr
                </div>
            </div>
            
        )
    }
}