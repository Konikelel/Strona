import React, {Component} from 'react'
import Navbar from "./navbar"
import "./login.css"
import PanelLarge from "../Component 1.svg";
import PanelSmall from "../Component 2.svg";
import Tower from "../Tower.svg";



class login extends Component{


    render(){
    return (
        <div>
        <Navbar/>
        <div className = "PanelLarge">
        <img src = {PanelLarge} alt = ""/>
        </div>
        <div className = "PanelSmall">
        <img src = {PanelSmall} alt = ""/>
        </div>
        <div className = "Tower">
        <img src = {Tower} alt = ""/>
        </div>
        </div>
    )
    }
}

export default login;
