import React from 'react';
import "./effective.scss"

function Effective(props) {

    return (
        <div className="effective">
            <div className="container">
                <div className="typing">
                    <div id="typings">Honeymoon asali <span>Samarali, Sifatli va Tabiiy.</span></div>
                    <div id="crow">|</div>
                </div>
                <div className="row">
                        <div className="col-md-6 col-lg-5 offset-lg-1 col-sm-6"  data-aos="flip-up">
                            <div className="left">
                                <img className="honymoon" src="img/honey-footer1.jpg" alt="error"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6"  data-aos="flip-down">
                            <div className="right">
                                <div className="images">
                                    <img src="img/footer-img.png" alt="error"/>
                                </div>
                                <h1>Aksiya</h1>
                                <h2>Chegirma 30%!</h2>
                                <h4>Aksiya tugashiga oz qoldi!</h4>
                                <img className="underline"
                                     src="https://sotuvchi.com/files/products/honeymoon/produslim_1_RO/img/line.png"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-1"/>
                </div>
            </div>
        </div>
    );
}

export default Effective;

