import React from 'react';
import './CheckInTable.css'; // 引入样式文件

const CheckInTable = ({ checkIns, onRowClick }) => {
  return (
    <div className="checkin-list">
      {checkIns.map((checkIn) => (
        <div
          key={checkIn.id}
          className={`checkin-card ${checkIn.isMember ? 'member-card' : 'nonmember-card'}`}
          onClick={() => onRowClick(checkIn.studentId)}
        >
          <div className="checkin-info">
            <div className="checkin-name">
              {checkIn.name}
              {/* {checkIn.isMember && <span className="member-tag"> (Member)</span>} */}
            </div>
            <div className="checkin-email">{checkIn.studentId}</div>
            <div className="checkin-time">{new Date(checkIn.signInTime).toLocaleString()}</div>
          </div>
          {/* <div className="member-status">
            {checkIn.isMember ? 'Member' : 'Non-member'}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CheckInTable;
