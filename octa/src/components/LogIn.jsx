import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Replace this logic with your authentication logic
    if (username === 'user' && password === 'password') {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true');
      window.location.reload(); 
    } else {
   
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border rounded-md p-3 w-full"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md p-3 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600">
              <p>{error}</p>
            </div>
          )}
          <button
            type="button"
            className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
