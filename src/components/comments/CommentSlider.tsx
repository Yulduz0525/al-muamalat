import Slider from "react-slick";
import { Avatar } from "../../assets";
function CommentSlider() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:false,
    infinite: true,
    autoplay: true, 
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider_item">
          <p className="internal_p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
          <div className="internal_wrap">
            <img src={Avatar} alt="avatar"/>
            <div className="text_wrap">
              <h3 className="internal_title">Finlay Kirk</h3>
              <p className="internal_text">Web designer</p>
            </div>
          </div>
        </div>
        <div className="slider_item">
          <p className="internal_p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
          <div className="internal_wrap">
            <img src={Avatar} alt="avatar"/>
            <div className="text_wrap">
              <h3 className="internal_title">Finlay Kirk</h3>
              <p className="internal_text">Web designer</p>
            </div>
          </div>
        </div>
        <div className="slider_item">
          <p className="internal_p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
          <div className="internal_wrap">
            <img src={Avatar} alt="avatar"/>
            <div className="text_wrap">
              <h3 className="internal_title">Finlay Kirk</h3>
              <p className="internal_text">Web designer</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CommentSlider;
