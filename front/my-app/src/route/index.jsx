import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** トップページ */
import { Top } from '../screens/Top';

/** ルーター */
export const RouterComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );

}