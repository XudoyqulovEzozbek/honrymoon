import React from 'react';
import './header.scss'
import {Fade} from "react-reveal";

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <div className="row">

                    <div className="col-md-6  col-lg-6" data-aos="fade-right">
                        <Fade left cascade>
                            <h1 className="title">Honymoon</h1>
                        </Fade>

                        <ul className="dynamic-txt">
                            <li><span>100% tabiiy </span></li>
                            <li><span>100% sifatli </span></li>
                            <li><span>va samarali. </span></li>
                        </ul>
                        <img className="underline"
                             src="https://sotuvchi.com/files/products/honeymoon/produslim_1_RO/img/line.png"
                             alt="error"/>
                        <br/>
                        <Fade left cascade>
                            <i>Mutloq tabiiy mahsulot bilan sog'ligingizni asrang!</i>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-img" data-aos="fade-left">
                            <img src="img/honejmun3.jpg" alt="error"/>
                    </div>

                </div>
            </div>
            <img className="bg-img" src="img/8.jpg" alt=""/>
        </div>
    );
}

export default Header;