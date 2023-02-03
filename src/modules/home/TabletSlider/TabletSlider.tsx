import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { IProps } from '../../common/types/student.types';

const TabletSlider: React.FC<IProps> = ({ data }) => {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      }
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      Tablet view
      {data.map((item) => (
        <div style={{ border: '1px solid red' }} key={item._id} className="keen-slider__slide">
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TabletSlider;
