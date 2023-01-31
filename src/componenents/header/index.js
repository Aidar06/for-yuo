import React from "react";
import logo from './../../assets/img/Group (2).svg'

function Header(){
    return(
        <header id='header'>
            <div className="container">
                <div className="navbar">
                    <img src={logo} alt=""/>
                    <nav className="navbar--nav">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Instructions</a>
                        <button>Get template</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;