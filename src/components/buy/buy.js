import React from 'react';
import "./buy.scss"
import {Rotate, Zoom} from "react-reveal";

function Buy(props) {
    return (
        <div className="wrapper" id="nega">
            <img className="bg-left" src="img/5.1.png" alt="error"/>
            <div className="container">

                <div className="row">
                    <div className="col-md-6" data-aos="zoom-out-right">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="wordCarousel">
                                        <span>Nega</span>
                                    <div>
                                        <ul className="flip4">
                                            <li>kerak ?</li>

                                            <li>qilishingiz</li>
                                            <li>xarid</li>
                                        </ul>
                                    </div>

                                </h4>

                                <p className="text">
                                    <Rotate cascade>
                                        Surunkali charchoq, shamollash, grip, bo'g'im og'riqlari,
                                        qon bosimi, oshqozon og'rig'i, jinsiy quvvat, umumiy quvvat, jigar
                                        faoliyatni yaxshilash, ichki orginlar, imunitet yaxshilanadi.
                                        Yuqoridagi muammolarga mutloq tabiiy yechim.
                                    </Rotate>
                                </p>


                                    <Zoom bottom>
                                <a href="tel:+998555000205">
                                        <div className="btn1">

                                            <button className="btn">Ba'tafsil <i className="fas fa-phone-alt"/></button>
                                        </div>
                                </a>
                                    </Zoom>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-6 gif"  data-aos="zoom-out-left">
                            <div className="card">
                                <iframe  src="https://www.youtube.com/embed/ZYUj-sL3G3k"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
