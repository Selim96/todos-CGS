import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from './TabletSlider.module.scss';
import { Pagination, Navigation } from "swiper";
import { IProps } from '../../common/types/student.types';
import Actions from "../../Buttons";


const TabletSlider: React.FC<IProps> = ({ data }) => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <div className={s.slide}>
              <h2 className={s.slide_title}>{item.title}</h2>
              <p className={s.description}>Description:</p>
              <p className={s.slide_text}>{item.description}</p>
              <Actions checked={item.status} itemId={item._id} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TabletSlider;
