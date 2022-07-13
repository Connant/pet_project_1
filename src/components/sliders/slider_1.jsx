import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../sass/slider.scss'
import Slide1 from './slide/slide_1';
import Slide2 from './slide/slide_2';
import Slide3 from './slide/slide_3';
import Slide4 from './slide/slide_4';


export default function Slider1() {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>

      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>

      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>

      <SwiperSlide>
        <Slide4 />
      </SwiperSlide>

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
}
