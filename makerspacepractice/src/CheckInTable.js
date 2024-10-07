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


import React from 'react';

const CheckInTable = ({ checkIns, selectedStudentId, onRowClick, onRowDoubleClick }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Last Sign In</th>
          </tr>
        </thead>
        <tbody>
          {checkIns.map((checkIn) => (
            <tr
              key={checkIn.id}
              onClick={() => onRowClick(checkIn.studentId)}
              onDoubleClick={() => onRowDoubleClick(checkIn.studentId)}
              className={checkIn.studentId === selectedStudentId ? 'selected-row' : ''}
            >
              <td>{checkIn.name}</td>
              <td>{checkIn.studentId}</td>
              <td>{new Date(checkIn.signInTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckInTable;
