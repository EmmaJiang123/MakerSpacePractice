import React, { useEffect, useState } from 'react';
import './StudentDetail.css';
import { FaUserCircle, FaCrown, FaCalendarAlt, FaListAlt, FaStar, FaCertificate, FaToolbox, FaWrench, FaLaptopCode } from 'react-icons/fa';

const StudentDetail = ({ studentId }) => {
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      // 模拟后端获取数据
      const data = {
        email: `${studentId}`,
        lastSignIn: '2024-09-20T09:54:20',
        isMember: true,
        tags: ['Engineering', 'Lab Access'],
        upcomingAppointments: ['OnceHub: 2024-09-25 10:00AM'],
        trainingsCompleted: [
          { name: 'Basic Lab Training', date: 'Sep 20, 2023' },
          { name: 'Advanced Robotics', date: 'Sep 20, 2023' },
        ],
        unicornBadges: [
          { badgeName: 'Creative Badge', icon: <FaStar /> },
          { badgeName: 'Engineering Badge', icon: <FaWrench /> },
          { badgeName: 'Coding Badge', icon: <FaLaptopCode /> },
          { badgeName: 'Builder Badge', icon: <FaToolbox /> },
        ],
      };
      setStudentInfo(data);
    };
    fetchStudentData();
  }, [studentId]);

  if (!studentInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-info-container">
      <div className="student-info-card">
        <div className="header-section">
          <FaUserCircle className="user-icon" />
          <h2>{studentInfo.email}</h2>
          <p className={`member-status ${studentInfo.isMember ? 'member' : 'non-member'}`}>
            {studentInfo.isMember ? 'Member' : 'Non-member'}
          </p>
        </div>
        <div className="info-block">
          <FaCalendarAlt className="info-icon" />
          <p><strong>Last Sign In:</strong> {new Date(studentInfo.lastSignIn).toLocaleString()}</p>
        </div>
        <div className="info-block">
          <FaListAlt className="info-icon" />
          <p><strong>Tags:</strong> {studentInfo.tags.join(', ')}</p>
        </div>
        <div className="info-block">
          <FaCalendarAlt className="info-icon" />
          <p><strong>Upcoming Appointments:</strong></p>
          <ul>
            {studentInfo.upcomingAppointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        </div>
        <div className="info-block training-section">
          <FaListAlt className="info-icon" />
          <p><strong>All Training Completed:</strong></p>
          <div className="trainings">
            {studentInfo.trainingsCompleted.map((training, index) => (
              <div key={index} className="training-box">
                <p>{training.name}</p>
                <p>Completed Time: {training.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="info-block badge-section">
          <FaCrown className="info-icon" />
          <p><strong>Unicorn Badges:</strong></p>
          <div className="badges">
            {studentInfo.unicornBadges.map((badge, index) => (
              <div key={index} className="badge-icon">
                {badge.icon}
                <p>{badge.badgeName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
