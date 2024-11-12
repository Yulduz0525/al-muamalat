import './styles.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Img, Avatars, Stars, Calendar } from '../../assets';

const HeaderSlider = () => {
  const settings = {
    dots: true, // Slide indicatorlar ko'rsatish
    infinite: true, // Cheksiz aylanishni yoqish
    speed: 500,
    slidesToShow: 1, // Bir vaqtning o'zida 1ta slaydni ko'rsatish
    slidesToScroll: 1, // Bitta slaydni scroll qilish

    // responsive: [
    //   {
    //     breakpoint: 1160,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 790,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className='headerSlider'>
      <Slider {...settings} className="">
        <div className="container-item">
          <div className='inner-item'>
            <div className='item-one'>
              <p className='inner-item-text1'>Seeking Knowledge is an Obligation in Islam</p>
              <h1 className='inner-item-mainText'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</h1>
              <div className='btn-avatar-wrap'>
                <button className='btn'>STUDENTS' OPINION</button>
                <div className='avatar-stars'>
                  <img src={Avatars} width={100} alt="Avatar" />
                  <div className='stars-text'>
                    <img src={Stars} alt="" />
                    <p>( 10k+ Reviews)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item-two'>
              <div className='student-num'>
                <div className='calendar-text'>
                  <Calendar/>
                  <div className='text-num'>
                    <p className='textNum1'>250k</p>
                    <p className='textNum2'>Assisted Student</p>
                  </div>
                </div>
              </div>
              <img src={Img} alt='header-image' />
            </div>
          </div>
        </div>
        <div className="container-item">
          <h3>2</h3>
        </div>
        <div className="container-item">
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  )
}

export default HeaderSlider