// import React from 'react';
// import { useParams } from 'react-router-dom';

// const StudentDetail = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h2>Student Detail for ID: {id}</h2>
//       {/* 在这里添加更多学生详细信息 */}
//     </div>
//   );
// };

// export default StudentDetail;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // 用于获取学生ID
// import './StudentDetail.css'; // 样式文件

// const StudentDetail = () => {
//   const { id } = useParams(); // 获取学生ID
//   const [studentInfo, setStudentInfo] = useState(null); // 存储学生信息

//   // 模拟从数据库获取学生信息
//   useEffect(() => {
//     const fetchStudentData = async () => {
//       // 假设这是从后端数据库获取的数据
//       const data = {
//         email: 'emily.bob@example.com',
//         lastSignIn: '2024-09-20T09:54:20',
//         isMember: true,
//         tags: ['Engineering', 'Lab Access'],
//         upcomingAppointments: ['OnceHub: 2024-09-25 10:00AM'],
//         trainingsCompleted: ['Basic Lab Training', 'Advanced Robotics'],
//         unicornBadgeLevel: 3,
//       };
//       setStudentInfo(data);
//     };
//     fetchStudentData();
//   }, [id]);

//   if (!studentInfo) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="student-detail-container">
//       {/* 左侧签到列表 */}
//       <div className="sign-in-list">
//         <h3>Daily List of People</h3>
//         {/* 这里可以显示签到记录 */}
//         {/* 示例：签到列表数据 */}
//         <ul>
//           <li>Emily Bob - Signed in at 9:54:20 AM</li>
//           <li>John Doe - Signed in at 9:30:10 AM</li>
//         </ul>
//       </div>

//       {/* 右侧学生详细信息 */}
//       <div className="student-info">
//         <h2>{studentInfo.email}</h2>
//         <div className="info-block">
//           <p><strong>Last Sign In:</strong> {new Date(studentInfo.lastSignIn).toLocaleString()}</p>
//           <p><strong>Member Status:</strong> {studentInfo.isMember ? 'Member' : 'Non-member'}</p>
//           <p><strong>Tags:</strong> {studentInfo.tags.join(', ')}</p>
//           <p><strong>Upcoming Appointments:</strong></p>
//           <ul>
//             {studentInfo.upcomingAppointments.map((appointment, index) => (
//               <li key={index}>{appointment}</li>
//             ))}
//           </ul>
//           <p><strong>All the Training Completed:</strong></p>
//           <ul>
//             {studentInfo.trainingsCompleted.map((training, index) => (
//               <li key={index}>{training}</li>
//             ))}
//           </ul>
//           <p><strong>Unicorn Badge Level:</strong> {studentInfo.unicornBadgeLevel}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetail;


// import React from 'react';
// import { useParams } from 'react-router-dom'; // 用于获取URL中的参数

// const StudentDetail = () => {
//   const { id } = useParams(); // 获取学生的 studentId

//   return (
//     <div>
//       <h2>Student Detail for Email: {id}</h2>
//       {/* 在这里显示更多学生的详细信息 */}
//     </div>
//   );
// };

// export default StudentDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 用于获取URL中的studentId
import './StudentDetail.css'; // 引入样式

const StudentDetail = () => {
  const { id } = useParams(); // 获取studentId（email）
  const [studentInfo, setStudentInfo] = useState(null);

  // 模拟从数据库获取学生信息
  useEffect(() => {
    const fetchStudentData = async () => {
      // 这是从后端API获取的数据，实际应用中可以替换为真实API调用
      const data = {
        email: 'emily.bob@example.com',
        lastSignIn: '2024-09-20T09:54:20',
        isMember: true,
        tags: ['Engineering', 'Lab Access'],
        upcomingAppointments: ['OnceHub: 2024-09-25 10:00AM'],
        trainingsCompleted: ['Basic Lab Training', 'Advanced Robotics'],
        unicornBadgeLevel: 3,
      };
      setStudentInfo(data);
    };
    fetchStudentData();
  }, [id]);

  if (!studentInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-detail-container">
      {/* 左侧签到列表 */}
      <div className="sign-in-list">
        <h3>Daily List of People</h3>
        {/* 假设这里是签到记录 */}
        <ul>
          <li>Emily Bob - Signed in at 9:54:20 AM</li>
          <li>John Doe - Signed in at 9:30:10 AM</li>
        </ul>
      </div>

      {/* 右侧学生信息 */}
      <div className="student-info">
        <h2>{studentInfo.email}</h2>
        <div className="info-block">
          <p><strong>Last Sign In:</strong> {new Date(studentInfo.lastSignIn).toLocaleString()}</p>
          <p><strong>Member Status:</strong> {studentInfo.isMember ? 'Member' : 'Non-member'}</p>
          <p><strong>Tags:</strong> {studentInfo.tags.join(', ')}</p>
        </div>
        <div className="info-block">
          <p><strong>Upcoming Appointments:</strong></p>
          <ul>
            {studentInfo.upcomingAppointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        </div>
        <div className="info-block">
          <p><strong>All the Training Completed:</strong></p>
          <ul>
            {studentInfo.trainingsCompleted.map((training, index) => (
              <li key={index}>{training}</li>
            ))}
          </ul>
        </div>
        <div className="info-block">
          <p><strong>Unicorn Badge Level:</strong> {studentInfo.unicornBadgeLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
