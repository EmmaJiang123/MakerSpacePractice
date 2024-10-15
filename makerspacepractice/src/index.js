import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import StudentDetail from './StudentDetail'; // 学生详细信息页面

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/student/:id" element={<StudentDetail />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
