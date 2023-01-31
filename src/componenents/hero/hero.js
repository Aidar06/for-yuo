import React from "react";
import logo from './../../assets/img/Group (2).svg'
import phone from './../../assets/img/phone.png'

function Hero(){
    return(
        <section id='hero'>
            <div className="container">
                <div className="hero">
                    <div className="hero--block">
                        <img src={logo} alt=""/>
                        <h1>The future of <br/>digital photos.</h1>
                        <p>The H(app)y app is the latest & greatest in <br/>phone photography. It's available in the App <br/>Store right now. Go check it out!</p>
                        <div className="hero--block__btn">
                            <button>Download</button>
                            <button>Read more</button>
                        </div>
                    </div>
                    <img src={phone} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Hero