import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../../../style.css";
import s from './TabletSlider.module.scss';

import { Pagination, Navigation } from "swiper";
import { IProps } from '../../common/types/student.types';
import ViewBtn from '../../Buttons/ViewBtn';
import DeleteBtn from '../../Buttons/DeleteBtn';
import StatusSwitch from '../../Buttons/StatusSwitch';


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
              <h2 className={s.title}>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <ViewBtn itemId={item._id} />
                <DeleteBtn itemId={item._id} />
                <StatusSwitch checked={item.status} itemId={item._id} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TabletSlider;
