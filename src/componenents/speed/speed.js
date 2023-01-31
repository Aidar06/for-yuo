import React from "react";
import phone from './../../assets/img/phone.png'

function Speed(){
    return(
        <div id="speed">
            <div className="container">
                <div className="speed">
                    <img src={phone} alt=""/>
                    <div className="speed--block">
                        <h6>Speed & security</h6>
                        <h1>State-of-the-art <br/>processing capabilities.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speed