import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StudentDetail.css'; // 引入样式文件
import { FaUserCircle, FaCrown, FaCalendarAlt, FaListAlt, FaStar, FaCertificate, FaToolbox, FaWrench, FaLaptopCode } from 'react-icons/fa'; // 使用图标库

const StudentDetail = () => {
  const { id } = useParams(); // 获取学生的id
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      // 模拟后端获取的数据，实际应用中替换为API调用
      const data = {
        email: 'emily.bob@example.com',
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
  }, [id]);

  if (!studentInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-info-container">
      <div className="student-info-card">
        {/* 顶部区域：用户头像和邮箱 */}
        <div className="header-section">
          <FaUserCircle className="user-icon" />
          <h2>{studentInfo.email}</h2>
          <p className={`member-status ${studentInfo.isMember ? 'member' : 'non-member'}`}>
            {studentInfo.isMember ? 'Member' : 'Non-member'}
          </p>
        </div>

        {/* 信息卡片 */}
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

        {/* All Trainings Completed */}
        <div className="info-block training-section">
          <FaListAlt className="info-icon" />
          <p><strong>All the Training Completed:</strong></p>
          <div className="trainings">
            {studentInfo.trainingsCompleted.map((training, index) => (
              <div key={index} className="training-box">
                <p>{training.name}</p>
                <p>Completed Time: {training.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unicorn Badges */}
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
