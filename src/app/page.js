// import React from "react";
"use client"
import Link from "next/link";
import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import LogoutButton from "./components/LogoutButton";
// import JournalEntry from "./singleEntry/JournalEntry";

// import LogoutButton from './LogoutButton';



// export default function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // Logged in state
  
    const handleLogin = (loginStatus) => setIsLoggedIn(loginStatus);
    const handleRegister = (registerStatus) => setIsLoggedIn(registerStatus);
    const handleLogout = () => setIsLoggedIn(false);
  
//     return (
//       <div className="login-register-app">
//         {isLoggedIn ? (
//           <div>
//             <h1>Welcome!</h1>
//             <LogoutButton onLogout={handleLogout} />
//           </div>
//         ) : (
//           <div>
//             <LoginForm onLogin={handleLogin} />
//             <RegisterForm onRegister={handleRegister} />
  

const Home = () => (
    

 <div className="flex flex-col text-green-600 items-center justify-center min-h-screen p-6 bg-gray-100">
 <RegisterForm onRegister={handleRegister} />
 <br></br>
 <h1 className="mb-6 text-4xl font-bold text-blue-600">

 Welcome to Your Personal Journal App!!

 </h1>

 <p className="mb-6 text-lg text-gray-700">

 Where you can feel free to write your most inner thoughts.

 </p>


 <Link
              className="m-1 text-pink-500 hover:text-pink-700"
              href="/"
            >
              Main
            </Link>
            <Link
              className="m-1 text-purple-500 hover:text-purple-700"
              href="/singleEntry"
            >
            Journal Entry 
            </Link>
            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/newEntry"
            >
              New Journal Entry
            </Link>



 </div>

);



export default Home;