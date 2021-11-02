import React from 'react';
import "./information.scss"
import {Bounce, Zoom} from "react-reveal";

function Information(props) {

    return (
        <div>
            <div  className="Information">
                <div className="container">


                    <div className="row my-xl-5">

                        <div  data-aos="fade-up-right" className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                        <img src="img/honemoon1.jpg" alt="bee"/>
                                </div>
                            </div>
                        </div>
                        <div  data-aos="fade-up-left" className="col-md-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="wordCarousel">
                                        <span id="malumotlar" className="mb-3">
                                            <Bounce bottom cascade>Ma'lumotlar.</Bounce></span>
                                    </h4>

                                    <p className="text">
                                            <Zoom right cascade>
                                                Surunkali charchoq, shamollash, grip, bo'g'im og'riqlari,
                                                qon bosimi, oshqozon og'rig'i, jinsiy quvvat, umumiy quvvat, jigar
                                                faoliyatni yaxshilash, ichki orginlar, imunitet yaxshilanadi.
                                                Yuqoridagi muammolarga mutloq tabiiy yechim.
                                            </Zoom>
                                        </p>
                                    <a href="tel:+998555000205">
                                            <span className="btn2">
                                            <button className="btn">Ba'tafsil <i className="fas fa-phone-alt"/></button>
                                                </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="bg-right" src="img/4.png" alt="error"/>
            </div>
        </div>

    );
}

export default Information;