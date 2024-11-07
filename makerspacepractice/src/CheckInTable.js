// import React from 'react';
// import './CheckInTable.css'; // 引入样式文件

// const CheckInTable = ({ checkIns, onRowClick }) => {
//   return (
//     <div className="checkin-list">
//       {checkIns.map((checkIn) => (
//         <div
//           key={checkIn.id}
//           className={`checkin-card ${checkIn.isMember ? 'member-card' : 'nonmember-card'}`}
//           onClick={() => onRowClick(checkIn.studentId)}
//         >
//           <div className="checkin-info">
//             <div className="checkin-name">
//               {checkIn.name}
//               {/* {checkIn.isMember && <span className="member-tag"> (Member)</span>} */}
//             </div>
//             <div className="checkin-email">{checkIn.studentId}</div>
//             <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
//           </div>
//           {/* <div className="member-status">
//             {checkIn.isMember ? 'Member' : 'Non-member'}
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CheckInTable;

import React, { useState } from 'react';
import './CheckInTable.css';

const CheckInTable = ({ checkIns, onRowClick }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (studentId) => {
    setSelectedId(studentId);
    onRowClick(studentId);
  };

  return (
    <div className="checkin-list">
      {checkIns.map((checkIn) => (
        <div
          key={checkIn.id}
          className={`checkin-card ${checkIn.isMember ? 'member-card' : 'nonmember-card'} ${
            selectedId === checkIn.id ? 'selected-row' : ''
          }`}
          onClick={() => handleClick(checkIn.studentId)}
        >
          <div className="checkin-info">
            <div className="checkin-name">
              {checkIn.name}
            </div>
            <div className="checkin-email">{checkIn.studentId}</div>
            <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckInTable;
