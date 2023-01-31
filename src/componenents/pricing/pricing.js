import React from "react";

function Pricing(){
    return(
        <div id="pricing">
            <div className="container">
                <div className="pricing">
                    <h6>Pricing</h6>
                    <h1>A plan for every need.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                    <div className="pricing--group">
                        <div className="pricing--group__block Standard">
                            <h6>Standard</h6>
                            <h1>$9</h1>
                            <p>Monthly</p>
                            <button>Buy now</button>
                        </div>
                        <div className="pricing--group__block Premium">
                            <h6>Premium</h6>
                            <h1>$99</h1>
                            <p>Monthly</p>
                            <button>Buy now</button>
                        </div>
                        <div className="pricing--group__block Lifetime">
                            <h6>Lifetime</h6>
                            <h1>$9</h1>
                            <p>Monthly</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing