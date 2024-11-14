// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const goToApp = () => {
//     navigate('/app'); // 跳转到 App 页面
//   };

//   return (
//     <div className="home-container">
//       <h1>Welcome to the Student Check-In System</h1>
//       <p>Click the button below to go to the Check-In Dashboard</p>
//       <button className="go-to-app-button" onClick={goToApp}>
//         Go to Check-In Dashboard
//       </button>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const goToBillingSite = () => {
    navigate('/billing_site'); // 跳转到 /billing_site 页面
  };

  const goToSignIn = () => {
    navigate('/sign_in'); // 跳转到 /sign_in 页面
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Platform</h1>
      <p>Select an option to proceed:</p>
      <button className="button" onClick={goToBillingSite}>
        Go to Billing Site
      </button>
      <button className="button" onClick={goToSignIn}>
        Go to Sign-In Page
      </button>
    </div>
  );
};

export default HomePage;
