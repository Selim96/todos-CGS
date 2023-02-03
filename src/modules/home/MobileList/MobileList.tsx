import React from 'react';
import { IProps } from '../../common/types/student.types';
import ViewBtn from '../../Buttons/ViewBtn';
import DeleteBtn from '../../Buttons/DeleteBtn';
import StatusSwitch from '../../Buttons/StatusSwitch';

const MobileList: React.FC<IProps> = ({ data }) => (
  <ul>
    {data.map((item) => {
      const { _id: id, title, description, status } = item;
      return (
        <li key={id}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            <ViewBtn itemId={id} />
            <DeleteBtn itemId={id} />
            <StatusSwitch checked={status} itemId={id} />
          </div>
        </li>
      );
    })}
  </ul>
);

export default MobileList;
