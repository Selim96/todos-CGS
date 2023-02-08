import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home';
import DetailPaige from '../Details/DetailPage';
import { APP_KEYS } from '../common/consts';

const MainRouter: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path={`/${APP_KEYS.ROUTER_KEYS.HOME}`} />
    <Route element={<DetailPaige />} path={`/${APP_KEYS.ROUTER_KEYS.DETAILS}/:id`} />
  </Routes>
);

export default MainRouter;
