import React from 'react';
import { IProps } from '../../common/types/student.types';
import Actions from '../../Buttons';
import s from './MobileList.module.scss';

const MobileList: React.FC<IProps> = ({ data }) => (
  <ul className={s.list}>
    {data.map((item) => {
      const { _id: id, title, description, status } = item;
      const itemStyle = [s.list_item, s.status_false];
      if (status) {
        itemStyle.splice(1, 1, s.status_true)
      }
      return (
        <li key={id} className={itemStyle.join(" ")}>
          <h2 className={s.list_title}>{title}</h2>
          <p className={s.list_text}>{description}</p>
          <Actions checked={status} itemId={id} /> 
        </li>
      );
    })}
  </ul>
);

export default MobileList;
