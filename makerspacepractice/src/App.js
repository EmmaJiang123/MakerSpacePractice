
// import React, { useState, useEffect } from 'react';
// //import axios from 'axios';
// import CheckInTable from './CheckInTable';
// import './App.css';

// const App = () => {
//   const [checkIns, setCheckIns] = useState([]);
//   const [filter, setFilter] = useState('Undergrad');
//   const [timeRange, setTimeRange] = useState('9-11AM');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortType, setSortType] = useState('name'); // 默认按 name 排序

// //把comment掉的anxios给打开
//  // 5. 未来连接后端
// //搭建好 MySQL 数据库后，将 useEffect 中的数据获取部分替换成实际的 API 调用，可用：
// // //const fetchData = async () => {
// //   try {
// //     const response = await axios.get('http://your-api-endpoint/checkins');
// //     setCheckIns(response.data);
// //   } catch (error) {
// //     console.error('Error fetching data', error);
// //   }
// // };


//   // 模拟获取签到数据，未来可以通过 axios 请求从数据库获取
//   useEffect(() => {
//     const fetchData = async () => {
//       // 这里用假数据，未来可以用API从MySQL数据库中获取
//       const data = [
//         { id: 1, name: 'Emily Bob', studentId: '409148', signInTime: 'Sep 20, 9:54:20 AM, 2024' },
//         { id: 2, name: 'Yuan Jiang', studentId: '123456', signInTime: 'Sep 20, 9:34:20 AM, 2024' },
//         { id: 3, name: 'Emma B', studentId: '732211', signInTime: 'Sep 20, 9:54:20 AM, 2024' },
//         { id: 4, name: 'Sydna Shima', studentId: '224477', signInTime: 'Sep 20, 9:54:20 AM, 2024' },
//       ];
//       setCheckIns(data);
//     };
//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSort = () => {
//     // 在姓名和学生 ID 之间切换排序方式
//     setSortType((prevType) => (prevType === 'name' ? 'studentId' : 'name'));
//   };

//   // 根据排序类型对数据排序
//   // const sortedCheckIns = [...checkIns].sort((a, b) => {
//   //   if (sortType === 'name') {
//   //     return a.name.localeCompare(b.name); // 按姓名字母顺序排序
//   //   } else {
//   //     return a.studentId.localeCompare(b.studentId); // 按学生 ID 字母顺序排序
//   //   }
//   // });

//   // 根据排序类型对数据进行排序
//   const getSortedCheckIns = (data) => {
//     return data.sort((a, b) => {
//       if (sortType === 'name') {
//         return a.name.localeCompare(b.name); // 按姓名排序
//       } else {
//         return a.studentId.localeCompare(b.studentId); // 按学生 ID 排序
//       }
//     });
//   };

//   const filteredCheckIns = checkIns.filter(
//     (checkIn) =>
//       checkIn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       checkIn.studentId.includes(searchTerm)
//   );

//   return (
//     <div className="app-container">
//       <h1>Student Check In</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search for Student Name, ID"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <button onClick={handleSort}>Sort by: {sortType === 'name' ? 'Name' : 'Student ID'}</button>
//         <button onClick={() => setFilter('Undergrad')}>Filter: {filter}</button>
//         <button onClick={() => setTimeRange('9-11AM')}>Time Range: {timeRange}</button>
//       </div>
//       <CheckInTable checkIns={filteredCheckIns} />
//       <p>Total Number of Sign-in in the Selected Time Range: {filteredCheckIns.length}</p>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import CheckInTable from './CheckInTable';
// import './App.css';

// const App = () => {
//   const [checkIns, setCheckIns] = useState([]);
//   const [filter, setFilter] = useState('Undergrad');
//   const [timeRange, setTimeRange] = useState('9-11AM');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortType, setSortType] = useState('lastSignIn'); // 默认按 Last Sign In 排序

//   // 模拟获取签到数据
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = [
//         { id: 1, name: 'Emily Bob', studentId: '409148', signInTime: 'Sep 20, 9:54:20 AM, 2024' },
//         { id: 2, name: 'John Doe', studentId: '501924', signInTime: 'Sep 20, 9:30:10 AM, 2024' },
//         { id: 3, name: 'Alice Smith', studentId: '302148', signInTime: 'Sep 20, 10:05:30 AM, 2024' },
//         { id: 4, name: 'Bob Johnson', studentId: '451124', signInTime: 'Sep 20, 10:45:00 AM, 2024' },
//       ];
//       setCheckIns(data);
//     };
//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // 根据排序类型对数据进行排序
//   const getSortedCheckIns = (data) => {
//     return data.sort((a, b) => {
//       if (sortType === 'name') {
//         return a.name.localeCompare(b.name); // 按姓名排序
//       } else if (sortType === 'studentId') {
//         return a.studentId.localeCompare(b.studentId); // 按学生 ID 排序
//       } else {
//         // 按 Last Sign In 时间排序
//         return new Date(b.signInTime) - new Date(a.signInTime); // 最新的时间排在前面
//       }
//     });
//   };

//   // 根据搜索关键词和排序结果筛选数据
//   const filteredAndSortedCheckIns = getSortedCheckIns(
//     checkIns.filter(
//       (checkIn) =>
//         checkIn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         checkIn.studentId.includes(searchTerm)
//     )
//   );

//   return (
//     <div className="app-container">
//       <h1>Student Check In</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search for Student Name, ID"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
//           <option value="lastSignIn">Sort by: Last Sign In</option>
//           <option value="name">Sort by: Name</option>
//           <option value="studentId">Sort by: Student ID</option>
//         </select>
//         <button onClick={() => setFilter('Undergrad')}>Filter: {filter}</button>
//         <button onClick={() => setTimeRange('9-11AM')}>Time Range: {timeRange}</button>
//       </div>
//       <CheckInTable checkIns={filteredAndSortedCheckIns} />
//       <p>Total Number of Sign-in in the Selected Time Range: {filteredAndSortedCheckIns.length}</p>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import CheckInTable from './CheckInTable';
// import './App.css';

// const App = () => {
//   const [checkIns, setCheckIns] = useState([]);
//   const [timeRange, setTimeRange] = useState('9-11AM');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortType, setSortType] = useState('lastSignIn'); // 默认按 Last Sign In 排序
//   const [filters, setFilters] = useState([]); // 存储过滤条件

//   // 模拟获取签到数据
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = [
//         { id: 1, name: 'Emily Bob', studentId: '409148', signInTime: 'Sep 20, 9:54:20 AM, 2024' },
//         { id: 2, name: 'John Doe', studentId: '501924', signInTime: 'Sep 19, 9:30:10 AM, 2024' },
//         { id: 3, name: 'Alice Smith', studentId: '302148', signInTime: 'Sep 18, 10:05:30 AM, 2024' },
//         { id: 4, name: 'Bob Johnson', studentId: '451124', signInTime: 'Aug 15, 10:45:00 AM, 2024' },
//       ];
//       setCheckIns(data);
//     };
//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSort = (e) => {
//     setSortType(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     const { value } = e.target;
//     if (filters.includes(value)) {
//       setFilters(filters.filter((filter) => filter !== value)); // 取消选择
//     } else {
//       setFilters([...filters, value]); // 添加选择
//     }
//   };

//   const clearFilters = () => {
//     setFilters([]); // 清除所有过滤条件
//   };

//   // 根据过滤条件筛选数据
//   const applyFilters = (data) => {
//     if (filters.length === 0) return data; // 没有过滤条件时，返回所有数据

//     const now = new Date();

//     return data.filter((checkIn) => {
//       const signInDate = new Date(checkIn.signInTime);

//       if (filters.includes('day') && (now - signInDate) / (1000 * 60 * 60 * 24) <= 1) {
//         return true; // 筛选一天内的数据
//       }

//       if (filters.includes('week') && (now - signInDate) / (1000 * 60 * 60 * 24) <= 7) {
//         return true; // 筛选一周内的数据
//       }

//       if (filters.includes('month') && (now - signInDate) / (1000 * 60 * 60 * 24) <= 30) {
//         return true; // 筛选一个月内的数据
//       }

//       return false; // 不符合任何过滤条件
//     });
//   };

//   // 根据排序类型对数据进行排序
//   const getSortedCheckIns = (data) => {
//     return data.sort((a, b) => {
//       if (sortType === 'name') {
//         return a.name.localeCompare(b.name); // 按姓名排序
//       } else if (sortType === 'studentId') {
//         return a.studentId.localeCompare(b.studentId); // 按学生 ID 排序
//       } else {
//         return new Date(b.signInTime) - new Date(a.signInTime); // 最新签到时间排在前面
//       }
//     });
//   };

//   // 搜索、过滤和排序后的数据
//   const filteredAndSortedCheckIns = getSortedCheckIns(
//     applyFilters(
//       checkIns.filter(
//         (checkIn) =>
//           checkIn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           checkIn.studentId.includes(searchTerm)
//       )
//     )
//   );

//   return (
//     <div className="app-container">
//       <h1>Student Check In</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search for Student Name, ID"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <select value={sortType} onChange={handleSort}>
//           <option value="lastSignIn">Sort by: Last Sign In</option>
//           <option value="name">Sort by: Name</option>
//           <option value="studentId">Sort by: Student ID</option>
//         </select>

//         <select multiple={true} value={filters} onChange={handleFilterChange}>
//           <option value="day">Filter: Last Day</option>
//           <option value="week">Filter: Last Week</option>
//           <option value="month">Filter: Last Month</option>
//         </select>

//         <button onClick={clearFilters}>Clear Filters</button>
//         <button onClick={() => setTimeRange('9-11AM')}>Time Range: {timeRange}</button>
//       </div>

//       {/* 显示选择的过滤条件 */}
//       {filters.length > 0 && (
//         <div className="active-filters">
//           <p>Active Filters: {filters.join(', ')}</p>
//         </div>
//       )}

//       <CheckInTable checkIns={filteredAndSortedCheckIns} />
//       <p>Total Number of Sign-in in the Selected Time Range: {filteredAndSortedCheckIns.length}</p>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import CheckInTable from './CheckInTable';
// import './App.css';

// const App = () => {
//   const [checkIns, setCheckIns] = useState([]);
//   const [timeRange, setTimeRange] = useState('9-11AM');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortType, setSortType] = useState('lastSignIn'); // 默认按 Last Sign In 排序
//   const [filter, setFilter] = useState(''); // 存储单个选择的过滤条件

//   // 模拟获取签到数据
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = [
//         { id: 1, name: 'Emily Bob', studentId: '409148', signInTime: '2024-09-20T09:54:20' },
//         { id: 2, name: 'John Doe', studentId: '501924', signInTime: '2024-09-19T09:30:10' },
//         { id: 3, name: 'Alice Smith', studentId: '302148', signInTime: '2024-09-15T10:05:30' },
//         { id: 4, name: 'Bob Johnson', studentId: '451124', signInTime: '2024-09-10T10:45:00' },
//       ];
//       setCheckIns(data);
//     };
//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSort = (e) => {
//     setSortType(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value); // 只存储单个选择的过滤条件
//   };

//   const applyFilters = (data) => {
//     const now = new Date();
//     return data.filter((checkIn) => {
//       const signInDate = new Date(checkIn.signInTime);
//       // 过滤选择：一天内、一周内、一个月内
//       if (filter === 'day' && (now - signInDate) / (1000 * 60 * 60 * 24) > 1) {
//         return false;
//       }
//       if (filter === 'week' && (now - signInDate) / (1000 * 60 * 60 * 24) > 7) {
//         return false;
//       }
//       if (filter === 'month' && (now - signInDate) / (1000 * 60 * 60 * 24) > 30) {
//         return false;
//       }
//       return true;
//     });
//   };

//   // 根据排序类型对数据进行排序
//   const getSortedCheckIns = (data) => {
//     return data.sort((a, b) => {
//       if (sortType === 'name') {
//         return a.name.localeCompare(b.name); // 按姓名排序
//       } else if (sortType === 'studentId') {
//         return a.studentId.localeCompare(b.studentId); // 按学生 ID 排序
//       } else {
//         return new Date(b.signInTime) - new Date(a.signInTime); // 最新签到时间排在前面
//       }
//     });
//   };

//   // 搜索、过滤和排序后的数据
//   const filteredAndSortedCheckIns = getSortedCheckIns(
//     applyFilters(
//       checkIns.filter(
//         (checkIn) =>
//           checkIn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           checkIn.studentId.includes(searchTerm)
//       )
//     )
//   );

//   return (
//     <div className="app-container">
//       <h1>Student Check In</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search for Student Name, ID"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <select value={sortType} onChange={handleSort}>
//           <option value="lastSignIn">Sort by: Last Sign In</option>
//           <option value="name">Sort by: Name</option>
//           <option value="studentId">Sort by: Student ID</option>
//         </select>

//         {/* 单选过滤器 */}
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="">No Filter</option>
//           <option value="day">Filter: Last Day</option>
//           <option value="week">Filter: Last Week</option>
//           <option value="month">Filter: Last Month</option>
//         </select>

//         <button onClick={() => setFilter('')}>Clear Filter</button>
//       </div>

//       {/* 显示选择的过滤条件 */}
//       {filter && (
//         <div className="active-filter">
//           <p>Active Filter: {filter}</p>
//         </div>
//       )}

//       <CheckInTable checkIns={filteredAndSortedCheckIns} />
//       <p>Total Number of Sign-in in the Selected Time Range: {filteredAndSortedCheckIns.length}</p>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 用于页面跳转
import CheckInTable from './CheckInTable';
import './App.css';

const App = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('lastSignIn'); // 默认按 Last Sign In 排序
  const [filter, setFilter] = useState(''); // 存储单个选择的过滤条件
  const [selectedStudentId, setSelectedStudentId] = useState(null); // 选中的学生ID

  const navigate = useNavigate(); // 用于页面跳转

  // 模拟获取签到数据
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Emily Bob', studentId: '409148', signInTime: '2024-09-20T09:54:20' },
        { id: 2, name: 'John Doe', studentId: '501924', signInTime: '2024-09-19T09:30:10' },
        { id: 3, name: 'Emily Bob', studentId: '409148', signInTime: '2024-09-20T10:54:20' },
        { id: 4, name: 'Bob Johnson', studentId: '451124', signInTime: '2024-09-10T10:45:00' },
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
    setSelectedStudentId(studentId); // 设置选中的学生ID
  };

  const handleRowDoubleClick = (studentId) => {
    navigate(`/student/${studentId}`); // 双击时跳转到学生详情页面
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
          checkIn.studentId.includes(searchTerm)
      )
    )
  );

  return (
    <div className="app-container">
      <h1>Student Check In</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search for Student Name, ID"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortType} onChange={handleSort}>
          <option value="lastSignIn">Sort by: Last Sign In</option>
          <option value="name">Sort by: Name</option>
          <option value="studentId">Sort by: Student ID</option>
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
        selectedStudentId={selectedStudentId}
        onRowClick={handleRowClick}
        onRowDoubleClick={handleRowDoubleClick}
      />
      <p>Total Number of Sign-in in the Selected Time Range: {filteredAndSortedCheckIns.length}</p>
    </div>
  );
};

export default App;
