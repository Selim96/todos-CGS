import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../../style.css";
import './TabletSlider.module.css';
// import required modules
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      {/* {data.map((item) => (
            <SwiperSlide key={item._id}>
              <h2 className="title">{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <ViewBtn itemId={item._id} />
                <DeleteBtn itemId={item._id} />
                <StatusSwitch checked={item.status} itemId={item._id} />
              </div>
            </SwiperSlide>
          ))} */}
        
      </Swiper>
    </>
  );
};

export default TabletSlider;
