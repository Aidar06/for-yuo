import React from "react";
import phone from './../../assets/img/phone2.png'

function Technology(){
    return(
        <section id='technology'>
            <div className="container">
                <div className="technology">
                    <div className="technology--block">
                        <h6>technology</h6>
                        <h1>Use H(app)y to give your <br/>digital photos some pop.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                    <img src={phone} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Technology