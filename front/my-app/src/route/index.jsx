import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** トップページ */
import { Top } from '../screens/Top';
/** ログインページ */
import { ComponentA } from '../screens/ComponentA';
/** プロフィールページ */
import { ComponentB } from '../screens/ComponentB';


/** ルーター */
export const RouterComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<ComponentA />} />
        <Route path="/profile" element={<ComponentB />} />
      </Routes>
    </BrowserRouter>
  );

}