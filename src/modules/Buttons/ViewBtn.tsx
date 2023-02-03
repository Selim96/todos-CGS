import React from 'react';
import { Link } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';

type ButtonType = {
  itemId: string;
};

const ViewBtn: React.FC<ButtonType> = ({ itemId }) => (
  <button type="button" onClick={() => console.log('veiw clicked')}>
    <Link to={`/${APP_KEYS.ROUTER_KEYS.DETAILS}/${itemId}`}>Veiw</Link>
  </button>
);

export default ViewBtn;
