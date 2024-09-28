import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    } else {
      // If no user data found, redirect to sign-in page
      navigate('/signin');
    }
  }, [navigate]);
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    // Redirect to sign-in page
    navigate('/signin');
  };
  return (
    <div>
      {userData && (
        <div >
          <h1 className="h-full text-3xl font-bold text-center text-gray-800 mb-8 bg-zinc-400">Dashboard</h1>
          <h2>Welcome, {userData.name}</h2>
          <p>Email: {userData.email}</p>
          <a href="#" id="logout-link" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
