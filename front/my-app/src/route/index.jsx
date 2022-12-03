import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** トップページ */
import { Top } from '../screens/Top';
/** ログインページ */
import { Login } from '../screens/ComponentA';
/** プロフィールページ */
import { Profile } from '../screens/ComponentB';


/** ルーター */
export const RouterComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );

}