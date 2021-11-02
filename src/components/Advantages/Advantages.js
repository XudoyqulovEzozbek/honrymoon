import React from 'react';
import "./Advantages.scss"
import {Roll} from "react-reveal";
function Advantages(props) {
    return (
        <div className="Advantages mt-xl-5 pt-xl-5">
            <div className="container">
                <div className="row">
                    <Roll left cascade>
                    <div className="col-md-12 col-lg-6" data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000">

                        <h1 className="title" id="afzalliklari">
                            Afzalliklari.
                        </h1>


                        <div className="text">

                            1 Jinsiy quvvatni yaxshilash va asabni tinchlantiradi. <br/>

                            2 Bepushtlik va bosh og'rig'ini davolaydi. <br/>

                            3 Qon tomirlarini kengaytirib, qonni suyultiradi va tozalaydi, yurak urushuni yaxshilaydi. <br/>

                            100% tabiiy

                        </div>

                    </div>
                </Roll>
                    <div className="col-md-12 col-lg-6" data-aos="flip-right"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000" >
                        <video src="doctor.mp4" autoPlay={true} muted loop={true}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Advantages;