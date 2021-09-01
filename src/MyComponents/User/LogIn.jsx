import React, { useState } from 'react';
import logo from './../../argus website/PNG/Logo Vectors.png';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { aunthenticate, signin, isAuthenticated } from '../../helpers/auth';

const LogIn = ({ open }) => {
  
  
  const [data, setData] = useState({
    email: '',
    password: '',
    loading: false,
    didRedirect: false,
  });

  const handleEmailChange = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setData({
      ...data,
      password: event.target.value,
    });
  };

  const { email, password } = data;

  //const { user, token } = isAuthenticated();

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log(data);
        aunthenticate(data, () => {
          setData({ ...data, didRedirect: true });
        });
        setData({
          ...data,
          email: '',
          password: '',
        });
      })
      .catch((err) => console.log(err));

    //console.log(token, '----> FROM LOCAL STORAGE');
  };
  return (
    <div class={open ? 'block fixed top-0 z-100' : 'hidden'}>
      <div className='p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black bg-opacity-80'>
        <div className='content text-3xl text-center md:text-left lg:w-2/3'>
          <h1 className='text-5xl text-white font-bold'>Argus Security</h1>
          <p className='text-gray-200'>Your partners in protection</p>
        </div>
        <div className='container mx-auto flex flex-col items-center'>
          <form
            className='shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center'
            onSubmit={handleSubmit}>
            <img src={logo} alt='Logo' className='w-20 mb-3' />

            <input
              className='w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1'
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className='w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1'
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              className='w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg'
              onClick={handleSubmit}>
              Login
            </button>
            <p className='text-gray-900 font-bold text-center my-2'>
              Not yet Registered ?
              <Link to='/signup'>
                <span className='text-blue-500'> Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
