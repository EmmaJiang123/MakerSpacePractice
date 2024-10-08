// import React from 'react';

// const CheckInTable = ({ checkIns }) => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Student ID</th>
//             <th>Last Sign In</th>
//           </tr>
//         </thead>
//         <tbody>
//           {checkIns.map((checkIn) => (
//             <tr key={checkIn.id}>
//               <td>{checkIn.name}</td>
//               <td>{checkIn.studentId}</td>
//               <td>{checkIn.signInTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CheckInTable;


// import React from 'react';

// const CheckInTable = ({ checkIns, selectedStudentId, onRowClick, onRowDoubleClick }) => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Student Email</th>
//             <th>Last Sign In</th>
//           </tr>
//         </thead>
//         <tbody>
//           {checkIns.map((checkIn) => (
//             <tr
//               key={checkIn.id}
//               onClick={() => onRowClick(checkIn.studentId)}
//               onDoubleClick={() => onRowDoubleClick(checkIn.studentId)}
//               className={checkIn.studentId === selectedStudentId ? 'selected-row' : ''}
//             >
//               <td>{checkIn.name}</td>
//               <td>{checkIn.studentId}</td>
//               <td>{new Date(checkIn.signInTime).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CheckInTable;


// import React from 'react';
// import './CheckInTable.css'; // 引入样式文件

// const CheckInTable = ({ checkIns, selectedStudentId, onRowClick, onRowDoubleClick }) => {
//   return (
//     <div className="checkin-list">
//       {checkIns.map((checkIn) => (
//         <div
//           key={checkIn.id}
//           className={`checkin-card ${checkIn.studentId === selectedStudentId ? 'selected-row' : ''}`}
//           onClick={() => onRowClick(checkIn.studentId)}
//           onDoubleClick={() => onRowDoubleClick(checkIn.studentId)}
//         >
//           <div className="checkin-info">
//             <div className="checkin-name">{checkIn.name}</div>
//             <div className="checkin-email">{checkIn.studentId}</div>
//             <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CheckInTable;


// import React from 'react';
// import './CheckInTable.css';

// const CheckInTable = ({ checkIns, selectedStudentId, onRowClick, onRowDoubleClick }) => {
//   return (
//     <div className="checkin-list">
//       {checkIns.map((checkIn) => (
//         <div
//           key={checkIn.id}
//           className={`checkin-card ${checkIn.studentId === selectedStudentId ? 'selected-row' : ''}`}
//           onClick={() => onRowClick(checkIn.id)} // 使用唯一的 checkIn.id
//           onDoubleClick={() => onRowDoubleClick(checkIn.studentId)}
//         >
//           <div className="checkin-info">
//             <div className="checkin-name">{checkIn.name}</div>
//             <div className="checkin-email">{checkIn.studentId}</div>
//             <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CheckInTable;


import React from 'react';
import './CheckInTable.css';

const CheckInTable = ({ checkIns, onRowClick }) => {
  return (
    <div className="checkin-list">
      {checkIns.map((checkIn) => (
        <div
          key={checkIn.id}
          className="checkin-card"
          onClick={() => onRowClick(checkIn.studentId)}  // 单击时跳转到学生详情页面
        >
          <div className="checkin-info">
            <div className="checkin-name">{checkIn.name}</div>
            <div className="checkin-email">{checkIn.studentId}</div>
            <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckInTable;
