import React, { useState, useEffect } from 'react';
import CheckInTable from './CheckInTable';
import StudentDetail from './StudentDetail';
import Header from './Header';
import './App.css';

const App = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('lastSignIn');
  const [filter, setFilter] = useState('');

  // mock the id got
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
    setFilter(e.target.value);
  };

  const handleRowClick = (studentId) => {
    setSelectedStudentId(studentId); 
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

  const getSortedCheckIns = (data) => {
    return data.sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'studentId') {
        return a.studentId.localeCompare(b.studentId);
      } else {
        return new Date(b.signInTime) - new Date(a.signInTime);
      }
    });
  };

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
      <Header />
      <h1 value = "2b" >Member Check In</h1>
      <div className="main-content">
        {/* left side CheckInTable */}
        <div className="left-panel">
          <input
            type="text"
            className="search-box"
            placeholder="Search for Member Name, Email"
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

          <CheckInTable
            checkIns={filteredAndSortedCheckIns}
            onRowClick={handleRowClick}
          />
          <p>Total Number of Sign-ins in Selected Time Range: {filteredAndSortedCheckIns.length}</p>
        </div>

        {/* right side StudentDetail */}
        <div className="right-panel">
          {selectedStudentId ? (
            <StudentDetail studentId={selectedStudentId} />
          ) : (
            <p>Select a student to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
