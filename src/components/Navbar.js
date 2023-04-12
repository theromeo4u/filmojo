import React, { useRef } from "react";
import {FaTimes, FaReact} from "react-icons/fa";
import './Navbar.css';
function Navbar(){
    const navRef=useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive");
    }
    return (
        <div className="container">
            <FaReact size={40}/>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
                <a href="/#">Feature</a> 
                <button className="nav-btn nav-close-btn">
                    <FaTimes />
                </button>
            </nav>

        </div>
    )
}
export default Navbar;