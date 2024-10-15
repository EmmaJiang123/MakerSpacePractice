import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 用于页面跳转
import CheckInTable from './CheckInTable';
import Header from './Header'; // 引入 Header 组件
import './App.css';

const App = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('lastSignIn'); // 默认按 Last Sign In 排序
  const [filter, setFilter] = useState(''); // 存储单个选择的过滤条件

  const navigate = useNavigate(); // 用于页面跳转

  // 模拟获取签到数据
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Emily Bob', studentId: 'emily.bob@wustl.edu', signInTime: '2024-09-20T09:54:20', isMember: true },
        { id: 2, name: 'John Doe', studentId: 'john.doe@wustl.edu', signInTime: '2024-09-19T09:30:10', isMember: false },
        { id: 3, name: 'Emily Bob', studentId: 'emily.bob@wustl.edu', signInTime: '2024-09-20T10:54:20', isMember: true },
        { id: 4, name: 'Brown Johnson', studentId: 'brown.johnson@wustl.edu', signInTime: '2024-09-10T10:45:00', isMember: false },
        { id: 5, name: 'Mary Wang', studentId: 'mary.wang@wustl.edu', signInTime: '2024-10-10T10:40:00', isMember: true }
      ];
      setCheckIns(data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // 只存储单个选择的过滤条件
  };

  const handleRowClick = (studentId) => {
    navigate(`/student/${studentId}`); // 单击时直接跳转到学生详情页面
  };

  const applyFilters = (data) => {
    const now = new Date();
    return data.filter((checkIn) => {
      const signInDate = new Date(checkIn.signInTime);
      if (filter === 'day' && (now - signInDate) / (1000 * 60 * 60 * 24) > 1) {
        return false;
      }
      if (filter === 'week' && (now - signInDate) / (1000 * 60 * 60 * 24) > 7) {
        return false;
      }
      if (filter === 'month' && (now - signInDate) / (1000 * 60 * 60 * 24) > 30) {
        return false;
      }
      return true;
    });
  };

  // 根据排序类型对数据进行排序
  const getSortedCheckIns = (data) => {
    return data.sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name); // 按姓名排序
      } else if (sortType === 'studentId') {
        return a.studentId.localeCompare(b.studentId); // 按学生 ID 排序
      } else {
        return new Date(b.signInTime) - new Date(a.signInTime); // 最新签到时间排在前面
      }
    });
  };

  // 搜索、过滤和排序后的数据
  const filteredAndSortedCheckIns = getSortedCheckIns(
    applyFilters(
      checkIns.filter(
        (checkIn) =>
          checkIn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          checkIn.studentId.includes(searchTerm.toLowerCase())
      )
    )
  );

  return (
    <div className="app-container">
       <Header /> {/* 添加Header组件 */}
      <h1>Student Check In</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search for Student Name, Email"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortType} onChange={handleSort}>
          <option value="lastSignIn">Sort by: Last Sign In</option>
          <option value="name">Sort by: Name</option>
          <option value="studentId">Sort by: Email</option>
        </select>

        <select value={filter} onChange={handleFilterChange}>
          <option value="">No Filter</option>
          <option value="day">Filter: Last Day</option>
          <option value="week">Filter: Last Week</option>
          <option value="month">Filter: Last Month</option>
        </select>
      </div>

      <CheckInTable
        checkIns={filteredAndSortedCheckIns}
        onRowClick={handleRowClick}
      />
      <p>Total Number of Sign-in in the Selected Time Range: {filteredAndSortedCheckIns.length}</p>
    </div>
  );
};

export default App;
