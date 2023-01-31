import React from "react";
import ava from './../../assets/img/ava.svg'
import ava1 from './../../assets/img/ava1.svg'
import ava2 from './../../assets/img/ava2.svg'

function Test(){
    return(
        <div id="test">
            <div className="container">
                <div className="test">
                    <h6 className='test--h6'>Testimonials</h6>
                    <h1>Don't take our word for it.</h1>
                    <p className='test--p'>See what our customers are saying.</p>
                    <div className="test--group">
                        <div className="test--group__block">
                            <p className='test--group__block--p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                            <div className="pricing--group__block--info">
                                <img src={ava} alt=""/>
                                <div>
                                    <h6>Pam Beesly</h6>
                                    <p>Dunder Mifflin</p>
                                </div>
                            </div>
                        </div>
                        <div className="test--group__block">
                            <p className='test--group__block--p'>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</p>
                            <div className="pricing--group__block--info">
                                <img src={ava1} alt=""/>
                                <div>
                                    <h6>Michael Scott</h6>
                                    <p>Dunder Mifflin</p>
                                </div>
                            </div>
                        </div>
                        <div className="test--group__block">
                            <p className='test--group__block--p'>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</p>
                            <div className="pricing--group__block--info">
                                <img src={ava2} alt=""/>
                                <div>
                                    <h6>Angels Schrute</h6>
                                    <p>Dunder Mifflin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test