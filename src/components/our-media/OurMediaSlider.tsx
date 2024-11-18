import Slider from "react-slick";
import { CardBtn, NextIcon, OurMediaImg1, OurMediaImg2, OurMediaImg3, PrevIcon } from "../../assets";
import * as React from "react";

function MultipleItems() {
    const sliderRef = React.useRef<Slider | null>(null); // Slider uchun ref

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false, // Default tugmalarni o'chiramiz
        autoplay: true, // Avtomatik o'tish
        autoplaySpeed: 2000, // Har bir slayd orasidagi vaqt (2 soniya)
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Sliderni keyingi pozitsiyaga o'tkazish
        }
    };
    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Sliderni oldingi pozitsiyaga o'tkazish
        }
    };

    return (
        <div className="">
            <div className="btn-text-wrapper">
                <h4 className="text">Our media showcase</h4>
                <div className="btnWrapper">
                    <button
                        onClick={handlePrevious}
                        className="prevBtn"
                    >
                        <PrevIcon />
                    </button>

                    <button
                        onClick={handleNext}
                        className="nextBtn"
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
                <div className="slider-item1" style={{ backgroundImage: `url(${OurMediaImg1})` }}>
                    {/* <div className="card-content-wrapper">
                        <p>Why Islamic finance?</p>
                        <button className="card-btn">
                            <CardBtn />
                        </button>
                    </div> */}
                    <img src={OurMediaImg1}/>
                </div>
                <div>
                    <img src={OurMediaImg2} alt="Our media img2" />
                </div>
                <div>
                    <img src={OurMediaImg3} alt="Our media img3" />
                </div>
                <div className="slider-item1">
                <img src={OurMediaImg1}/>

                </div>
                <div>
                    <img src={OurMediaImg2} alt="Our media img2" />
                </div>
                <div>
                    <img src={OurMediaImg3} alt="Our media img3" />
                </div>
                <div className="slider-item1">
                <img src={OurMediaImg1}/>

                </div>
                <div>
                    <img src={OurMediaImg2} alt="Our media img2" />
                </div>
                <div>
                    <img src={OurMediaImg3} alt="Our media img3" />
                </div>
            </Slider>
        </div>
    );
}

export default MultipleItems;
