"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LogoutButton from './components/LogoutButton';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loginStatus) => setIsLoggedIn(loginStatus);
  const handleRegister = (registerStatus) => setIsLoggedIn(registerStatus);
  const handleLogout = () => setIsLoggedIn(false);

  const backgroundImageStyle = {
    backgroundImage: 'url(/journal.jpg)', // Reference your image here
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
    backgroundColor: 'transparent', // Set background to transparent
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={innerDivStyle} className="flex flex-col text-black-600 items-center justify-center min-h-screen">
        <RegisterForm onRegister={handleRegister} />
        <br />
        <h1 className="mb-6 text-4xl font-bold text-pink-600">
          Welcome to Your Personal Journal App!!
        </h1>
        <p className="mb-6 text-lg text-teal-700">
          Where you can feel free to write your most inner thoughts!!!
        </p>
        <LoginForm onLoginSuccess={handleLogin} onLoginError={(error) => console.error(error)} />
        <Link className="m-20 font-bold text-purple-500 hover:text-purple-700" href="/Home">
          Journal Entry
        </Link>
        <LogoutButton onLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Home;
