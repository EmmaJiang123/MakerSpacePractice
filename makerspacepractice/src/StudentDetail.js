import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Student Detail for ID: {id}</h2>
      {/* 在这里添加更多学生详细信息 */}
    </div>
  );
};

export default StudentDetail;
