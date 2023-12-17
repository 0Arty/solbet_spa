import 'swiper/css';
import style from "./Slider.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../../assets/main/features/Image 2.png'
import image2 from '../../../../assets/main/features/Image 3.png'
import image3 from '../../../../assets/main/features/Image 4.png'
import image4 from '../../../../assets/main/features/Image 5.png'
import image5 from '../../../../assets/main/features/Image holder.png'
const Slider = ({ props }) => {

  return (
    <div className={style.slider}>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
    </div>
  )
};

export default Slider;
