"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Link from 'next/link'; // Import Link from next/link
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import LogoutButton from '../components/LogoutButton';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Initialize router
  const handleLogin = (loginStatus) => {
    if (loginStatus) {
      setIsLoggedIn(true);
      router.push('/management'); // Redirect to Management page
    }
  };
  const handleRegister = (registerStatus) => {
    if (registerStatus) {
      setIsLoggedIn(true);
      router.push('/management'); // Redirect to Management page
    }
  };
  return (
    <div style={backgroundImageStyle}>
      <div style={innerDivStyle} className="flex flex-col items-center justify-center min-h-screen">
        {isLoggedIn ? (
          <>
            <LogoutButton onLogout={() => setIsLoggedIn(false)} />
            <Link className="m-20 font-bold text-purple-500 hover:text-purple-700" href="/management">
              Journal Entry
            </Link>
          </>
        ) : (
          <>
            <RegisterForm onRegister={handleRegister} />
            <br />
            <br />
            <br />
            <h1 className="mb-6 text-4xl font-bold text-teal-500">
              Welcome to Your Personal Journal App!!
            </h1>
            <br></br>
            <br></br>
            <p className="mb-6 text-lg text-purple-500">
              Where you can feel free to write your most inner thoughts!!!
            </p>
            <LoginForm onLoginSuccess={handleLogin} onLoginError={(error) => console.error(error)} />
          </>
        )}
      </div>
    </div>
  );
};
const backgroundImageStyle = {
  backgroundImage: 'url(/journal.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const innerDivStyle = {
  backgroundColor: 'transparent',
  padding: '20px',
  borderRadius: '10px',
};
export default Home;