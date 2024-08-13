import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/auth/signin', { email, password }, { withCredentials: true })
    .then(response => {
        toast.success(response.data.message);
        navigate('/');
    })
    .catch(error => {
        toast.error(error.message); 
    });

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
  <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 max-w-md p-8 space-y-6  rounded-lg shadow-lg">
    <h2 className="text-3xl font-extrabold text-center text-white">Welcome Back!</h2>
    <p className="text-center text-gray-200 font-medium text-lg">Sign in to your account</p>
    <form className="space-y-6 text-gray-900 " onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email Address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-indigo-500 shadow-inherit focus:shadow-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:shadow-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign In
        </button>
        <div className="flex items-center justify-between mt-4">
          <Link className="text-sm text-indigo-500 hover:underline" to="/forgot">
            Forgot Password?
          </Link>
        </div>
        <p className="mt-4 text-center text-gray-200">
          Don't have an account?{' '}
          <Link className="font-medium text-blue-500 hover:underline" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>

  );
};

export default SignIn;
