import "./styles.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Expert, Facebook, Instagramm, Telegram, Twitter } from "../../assets";
function CenterMode() {
  const settings = {
    dots: true, // Slide indicatorlar ko'rsatish
    infinite: true, // Cheksiz aylanishni yoqish
    speed: 500,
    slidesToShow: 1, // Bir vaqtning o'zida 1ta slaydni ko'rsatish
    slidesToScroll: 1, // Bitta slaydni scroll qilish
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="slider-item__img">
            <img src={Expert} alt="experts"/>
          </div>
            <div className="slider-item__texts">
                <h3 className="slider-item__title">Dr. Mezbah Uddin Ahmed</h3>
                <div>
                <p className="slider-item__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>
                <div className="slider-item__icons">
                  <Telegram/>
                  <Instagramm/>
                  <Facebook/>
                  <Twitter/>
                </div>
            </div>
        </div>
        <div className="slider-item">
          <div className="slider-item__img">
            <img src={Expert} alt="experts"/>
          </div>
            <div className="slider-item__texts">
                <h3 className="slider-item__title">Dr. Mezbah Uddin Ahmed</h3>
                <p className="slider-item__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <div className="slider-item__icons">
                  <Telegram/>
                  <Instagramm/>
                  <Facebook/>
                  <Twitter/>
                </div>
            </div>
        </div>
        <div className="slider-item">
          <div className="slider-item__img">
            <img src={Expert} alt="experts"/>
          </div>
            <div className="slider-item__texts">
                <h3 className="slider-item__title">Dr. Mezbah Uddin Ahmed</h3>
                <p className="slider-item__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <div className="slider-item__icons">
                  <Telegram/>
                  <Instagramm/>
                  <Facebook/>
                  <Twitter/>
                </div>
            </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default CenterMode