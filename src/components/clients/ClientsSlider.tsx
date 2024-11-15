import Slider from "react-slick";
import { American, Klarna, Skrill, Western } from "../../assets";

export const AutoPlay1 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2600,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    centerMode: true,          // Enables center mode
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div className="slider-item">
          <American/>
        </div>
        <div className="slider-item">
          <Western/>
        </div>
        <div className="slider-item">
          <Klarna/>
        </div>
        <div className="slider-item">
          <Skrill/>
        </div>
  
      </Slider>
    </div>
  );
}

 export const  AutoPlay2 = ()=> {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2600,
    autoplaySpeed:0,
    cssEase: "linear",
    rtl: true, 
    pauseOnHover: false,
    centerMode: true,          // Enables center mode
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <American />
        </div>
        <div className="slider-item">
          <Western />
        </div>
        <div className="slider-item">
          <Klarna />
        </div>
        <div className="slider-item">
          <Skrill />
        </div>
      </Slider>
    </div>
  );
}



