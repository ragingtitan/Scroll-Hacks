import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    axios.post('http://localhost:4000/auth/signup',{
        username: formData.username,
        email: formData.email,
        password:  formData.password,
      }).then((response)=> {
        console.log(response);
        if(response.data.status==true){
          toast.success(response.data.message);
          navigate('/signin');
          
        }
        else{
          toast.error(response.data.message);
        }
    }).catch(err=>{
        console.error(err);
        toast.error(`Signup Failed due to ${err.message}`);
    });
  };
  return (
    <div className="h-screen bg-white flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <form className="mt-8 space-y-6 text-black flex flex-col gap-5 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
    <div>
      <h2 className="mt-6 w-full text-center text-3xl font-extrabold text-white">Sign up for an account</h2>
    </div>
      <input type="hidden" name="remember" value="true" />
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
        >
          Sign up
        </button>
        <p className="mt-4 text-center text-gray-200">
         Already have an account?{' '}
          <Link className="font-medium text-blue-500 hover:underline" to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>

  );
}

export default SignUp;
