// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { registerUser } from '../utils/authUtils';

// export default function RegisterForm({ onRegister }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false); 
//   const handleSubmit = (event) => {
//     event.preventDefault();
   

    
//     setIsRegistered(true); 
//     setUsername('');
//     setPassword('');
//   };


//   return (
//     <div>
//       {isRegistered ? (
        
//         <p>Registration successful! Welcome, {username}!</p>
//       ) : (
        
//         <form onSubmit={handleSubmit}>
//           <h2>Register</h2>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ backgroundColor: 'transparent' }} 
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ backgroundColor: 'transparent' }} 
//           />
//           <button type="submit">Register</button>
//         </form>
//       )}
//     </div>
//   );
// }

// RegisterForm.propTypes = {
//   onRegister: PropTypes.func.isRequired,
// };


import React, { useState } from "react";
import { registerUser } from "../utils/authUtils";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerUser(email, password);
      // Optionally redirect or show success message
      setEmail("");
      setPassword("");
      // Example: redirect to login page or home page
      // window.location.href = "/login";
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-left" style={{ backgroundColor: "transparent" }}>
        {/* <p className="py-2 text-2xl font-bold text-left text-purple-300">Register here!</p> */}
        <div>
          {/* Other form elements */}
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* <h2>Register</h2> */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} 
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} 
          />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegisterForm

//   return (
//     // <div>
//     //   {isRegistered ? (
        
//     //     <p>Registration successful! Welcome, {username}!</p>
//     //   ) : (
        
//         <form onSubmit={handleSubmit}>
//           <h2>Register</h2>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ backgroundColor: 'transparent' }} 
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ backgroundColor: 'transparent' }} 
//           />
//           <button type="submit">Register</button>
//           <form onSubmit={handleSubmit} className="space-y-6">
//   {/* Other form elements */}
//   <button type="submit">Register</button>
// </form>

       
//       )}
//     </div>
//   );
// }

// export default RegisterForm;


