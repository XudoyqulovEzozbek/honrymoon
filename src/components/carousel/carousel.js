import React from 'react';
import Slider from "react-slick";
import "./carousel.scss"
function Carousels(props) {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="carousels mt-4">
            <div className="container" data-aos="fade-down">
            <div className="row" >
                <div className="col-12">
                    <Slider {...settings}>

                        <div className="img-box">
                            <img src="img/11111.jpg" alt="error"/>
                        </div>
                        <div className="img-box">
                            <img src="img/2222222.jpg" alt="error"/>
                        </div>
                        <div className="img-box">
                            <img src="img/333333333.jpg" alt="error"/>
                        </div>
                        <div className="img-box">
                            <img src="img/honeytel4.jpg" alt="error"/>
                        </div>

                    </Slider>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default Carousels;