import React from 'react';
import { Link } from 'react-router-dom';
import { APP_KEYS } from '../../common/consts';
import { Props } from '../index';
import Button from '@mui/material/Button';
import s from './ViewBtn.module.scss';

const ViewBtn: React.FC<Props> = ({ itemId }) => (
  <Link to={`/${APP_KEYS.ROUTER_KEYS.DETAILS}/${itemId}`}>
    <Button variant="contained" >
      View
    </Button>
  </Link>
);

export default ViewBtn;
