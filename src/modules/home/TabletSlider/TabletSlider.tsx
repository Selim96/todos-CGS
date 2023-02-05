import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import { IProps } from '../../common/types/student.types';
import ViewBtn from '../../Buttons/ViewBtn';
import DeleteBtn from '../../Buttons/DeleteBtn';
import StatusSwitch from '../../Buttons/StatusSwitch';

const carousel: KeenSliderPlugin = (slider) => {
  const z = 480
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

const TabletSlider: React.FC<IProps> = ({ data }) => {

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {data.map((item) => (
            <div key={item._id} className="carousel__cell number-slide ">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <ViewBtn itemId={item._id} />
                <DeleteBtn itemId={item._id} />
                <StatusSwitch checked={item.status} itemId={item._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div ref={sliderRef} className="keen-slider">
    //   Tablet view
    //   {data.map((item) => (
    //     <div style={{ border: '1px solid red' }} key={item._id} className="keen-slider__slide">
    //       {item.title}
    //     </div>
    //   ))}
    // </div>
  );
};

export default TabletSlider;
