import React from "react";
import icon from './../../assets/img/icon.svg'
import phone from './../../assets/img/phone1.png'

function Features(){
    return(
        <div id="features">
            <div className="container">
                <div className="features">
                    <div className='features--title'>
                        <p>Features</p>
                        <h1>The latest & greatest in phone photography.</h1>
                    </div>
                    <div className="features--group">
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                        <div className="features--group__block">
                            <img className="features--group__block--phone" src={phone} alt=""/>
                            <div className="features--group__block--info">
                                <div className="features--group__block--info__icon">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1>Calendar view</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Nullam <br/>scelerisque aliquam odio et faucibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features