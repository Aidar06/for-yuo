import React from "react";
import phone from './../../assets/img/phone3.png'

function Dark(){
    return(
        <div id="dark">
            <div className="container">
                <div className="dark">
                    <h6>Dark mode</h6>
                    <h1>Also available in dark.</h1>
                    <p>Don't get blinded when using the H(app)y app at night, just turn <br/>off the lights. Lorem ipsum dolor sit amet.</p>
                    <img src={phone} alt=""/>
                    <div className='dark--line'/>
                    <div className="dark--modes">
                        <div className="dark--modes__block">
                            <ion-icon className="dark--modes__block--icon" name="sunny-outline"></ion-icon>
                            <p>Light Mode</p>
                        </div>
                        <div className="dark--modes__block">
                            <ion-icon className="dark--modes__block--icon" name="moon-outline"></ion-icon>
                            <p>Dark mode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dark