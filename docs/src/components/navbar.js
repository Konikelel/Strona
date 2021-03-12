import React, {useRef, useState} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Logo from "../Logo 2.svg"
import "./navbar.css"
import "../fontello-a4ee3ef6/css/game.css"


function Navbar(){

    const reference = useRef(null);
    const [visMenu, setMenu] = useState(false);
    const [menuClass, setClassMenu] = useState("");
    const [visKMinMenu, setMinMenu] = useState(false);
    const [minMenuClass, setClassMinMenu] = useState("icon-down-open");

    const handleToggle = () => {

        if(visMenu)
        setClassMenu("hidden-menu");
        else
        setClassMenu("toggle-menu");
        
        setMenu(!visMenu);

    }
    const handleToggleMinMenu = () => {

        if(visKMinMenu)
        setClassMinMenu("icon-down-open");
        else
        setClassMinMenu("icon-up-open");

        setMinMenu(!visKMinMenu);

    }
   
        return (
            <nav>
                <img src = {Logo} alt = "logo"></img>
                <NavLink to="/games" className = "companyName navbar-brand">Game Hub</NavLink>
                <div className = "navs">
                <NavLink to="/games" activeClassName = "activeNav">Games</NavLink>
                <NavLink to="/support" activeClassName = "activeNav">Support</NavLink>
                <NavLink to="/community" activeClassName = "activeNav">Community</NavLink>
                <div className = "your-account" onClick = {handleToggleMinMenu}>
                    <p>Your Account</p>
                    <i class="icon-user-circle-o"></i>
                    <i className = {minMenuClass} ></i>
                </div>

                <i class="icon-cogs"></i>
                </div>
                <i className = "demo-icon icon-menu menu" onClick = {handleToggle}></i>
                <div ref = {reference} className = {menuClass} >
                    <Link to="/games">Games</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/register">Sign up</Link>
                    <Link to="/login">Log in</Link>
                    
                </div>
            </nav>
        );
    
}

export default Navbar;
