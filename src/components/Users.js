import React, {Component} from "react";
import User from "./User";


export default class Users extends Component 
{
    
        render(){
            const usersItems = this.props.users.map((user) =>{
                    
                const {photo, name, altname} = user

                return (<User 
                    src = {photo}
                    alt = {altname}
                    name = {name}
                    min/>
                )
    
            })

            return (
                <div className="right">
                    <User src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Prince_Harry_at_the_2017_Invictus_Games_opening_ceremony.jpg/220px-Prince_Harry_at_the_2017_Invictus_Games_opening_ceremony.jpg"
                        alt = "prince"
                        name = "Harry the Prince" />
                        
                    <div className="users__block">
                        
                        {usersItems}                    

                    </div>

                </div>
            )
        }
    
}