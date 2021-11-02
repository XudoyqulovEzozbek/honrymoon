import React from 'react';
import "./Composition.scss"
import {Bounce} from "react-reveal";

function Composition(props) {
    return (
        <div className="composition">
           <img className="bg-img" src="img/be-left.png" alt=""/>

            <div className="container">
                <div className="d-flex justify-content-center">
                    <Bounce top cascade>
                        <h1 id="tarkibi">Tarkibi</h1>
                    </Bounce>
                </div>
                <div className="d-flex justify-content-center">
                    <Bounce bottom cascade>
                    <h4>Tarkibida 18 tur tabiiy o'simliklar bor.</h4>
                    </Bounce>
                </div>
                <div className="row" data-aos="fade-left">
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5 honey">
                        <img src="img/honey-sweet.jpg" alt=""/>
                        <div className="honey-body">
                            <h3>Honeymoon asaliga </h3>
                            <div className="buttons">
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Buyrutma berish <span>></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="text">
                            <span>Asal</span>
                            Shuningdek, asalda mineral
                            moddalar: kalsiy, natriy, kaliy va
                            boshqalar; mikroelementlar, organik
                            kislotalardan olma, limon kislotalari,
                            vitaminlar (V2, V6, RR, C, E, K) borligi
                            aniqlangan. Asal qandli diabet, qon bosimini,
                            markaziy asab tizimi faoliyatini, yo’talga qarshi, astma, bronxit va ko’z bilan
                            bog’liq muammolarni davolashda ishlatiladi.
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>
                <div className="row mt-3" data-aos="fade-right">
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5" >
                        <div className="text">
                            <span> QICHITQI O'T</span>
                            Qichitqi o'tning biologik faol birikmalari
                            metabolizmni rag'batlantiradi va immunitetni oshiradi.
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 honey">
                        <img src="img/qichitqio't.jpeg" alt=""/>
                        <div className="honey-body">
                            <h3>Honeymoon asaliga </h3>
                            <div className="buttons">
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Buyrutma berish <span>></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>

                <div className="row mt-3" data-aos="fade-left">
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5 honey">
                        <img src="img/fruktoza1.png" alt=""/>
                        <div className="honey-body">
                            <h3>Honeymoon asaliga </h3>
                            <div className="buttons">
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Buyrutma berish <span>></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="text">
                            <span>FURUKTO'ZA</span>
                            Kuşkonmazlar quyidagilarni
                            o'z ichiga oladi vitaminlar: A - 82,8 mg, tiamin B1
                            - 0,1 mg, riboflavin B2 - 0,1 mg, S - 20,2 mg, E - 1,9 mg,
                            beta-karotin - 0,6 mg,
                            PP- 1 mg. Jigar, yurak, meʼda xastaligini davolashda ishlatiladi.
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>


                <div className="row mt-3" data-aos="fade-right">
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5">
                        <div className="text">
                            <span>RAYHON</span>
                            Rayhon havoni va odam vujudini yuqumli
                            kasallik tarqatuvchi mikroblardan va
                            infeksiyalardan tozalaydi va ko‘katining
                            damlamasi gastrit, kolit, pielitda, ko‘kyo‘talda
                            yo‘tal, nevrozda, bosh og‘rig‘ida, bronxial astmada,
                            ichak va jigar, qorin dam bo‘lishida, qon bosimi pasayganida,
                            buyrak va qovuq shamollashlarida, umumiy shamollash va tumovda,
                            shuningdek emizikli onalarda ko‘krak suti
                            ajralishini yaxshilashda iste’mol qilinadi.
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 honey">
                        <img src="img/rayhon.png" alt=""/>
                        <div className="honey-body">
                            <h3>Honeymoon asaliga </h3>
                            <div className="buttons">
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Buyrutma berish <span>></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>

                <div className="row mt-3" data-aos="fade-left">
                    <div className="col-lg-1"/>
                    <div className="col-md-6 col-lg-5 honey">
                        <img src="img/olive.jpg" alt=""/>
                        <div className="honey-body">
                            <h3>Honeymoon asaliga </h3>
                            <div className="buttons">
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Buyrutma berish <span>></span></button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="text">
                            <span> ZAYTUN</span>
                            Zaytun moyi tarkibida mavjud boʻlgan E, A, V, D va K vitaminlari kattalar va bolalarda
                            suyaklarning oʻsib rivojlanishiga yordam berishi va kalsiy miqdorini barqarorlashtirishga
                            yordam beradi.
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>

            </div>
        </div>
    );
}

export default Composition;
