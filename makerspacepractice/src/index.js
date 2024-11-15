
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Homepage';
//import BillingSite from './BillingSite'; // 假设 BillingSite 是账单页面组件
//import SignIn from './SignIn'; // 假设 SignIn 是登录页面组件
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* 默认主页路径 / 显示 HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* /billing_site 路径显示 BillingSite 页面 
        <Route path="/billing_site" element={<BillingSite />} />*/}

        {/* /sign_in 路径显示 SignIn 页面 */}
        <Route path="/sign_in" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
