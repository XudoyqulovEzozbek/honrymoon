import React from 'react';
import "./operator.scss"
import {Fade} from "react-reveal";

function Operator(props) {
    return (
        <div className="operators">
            <img className="bg-img" src="img/money-applee.png" alt=""/>

            <div className="container">
                <Fade top big cascade>
                <h1 className="title">Qanday qilib buyurtma berasiz?</h1>
                </Fade>
                <div className="row">
                    <div className="col-md-6 col-lg-4"  data-aos="zoom-out-right">
                        <Fade left big cascade>
                        <div className="icon">
                            <i className=" far fa-keyboard"/>
                        </div>
                        <h3>Buyurtma fo'rmasini to'ldiring.</h3>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="zoom-out">
                        <Fade bottom big cascade>
                        <div className="icon">
                            <i className="fas fa-user-tie"/>
                        </div>
                        <h3>Operatorlarmizdan biri siz bilan bo'glanadi</h3>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="zoom-out-left">
                        <Fade right big cascade>
                        <div className="icon">
                            <i className="fas fa-truck"/>
                        </div>
                        <h3>Kuryer orqali 1-5 kun ichida sizga mahsulot yetib boradi.</h3>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operator;