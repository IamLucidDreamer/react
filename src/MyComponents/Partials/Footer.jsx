import React, { useState, useEffect } from 'react';
import Logo from './../../argus website/SVG/logosvg.svg';
import { Link } from 'react-router-dom';
import { subscriber } from '../../helpers/footer';
import { getContact } from '../../helpers/contact';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState({
    email: '',
    phoneNumber: '',
    address: ''
  })

  useEffect(() => {
   getContact().then((data) => {
     setContact({
       email :  data?.email,
       phoneNumber: data?.phoneNumber,
       address: data?.address
     });
   });
  }, [])

  const handleSubscriberChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    subscriber({ email })
      .then((data) => {
        setEmail('');
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='text-white text-xs md:text-sm body-font bg-center bg-no-repeat bg-cover bg-footer'>
      <div className='container px-2 sm:px-8 lg:px-24 xl:pl-48 xl:pr-32 pb-12 mx-auto'>
        <div className='flex flex-col md:flex-row md:text-left text-center order-first items-start'>
          <div className='w-3/4 flex flex-wrap md:text-left text-center order-first mx-auto'>
            <div className='lg:w-1/3 w-full px-4 pt-4'>
              <img
                src={Logo}
                className='w-24 mx-auto md:mx-0 my-2'
                alt='Logo '
              />
              <p className='text-white'>
                Your protection is Our Mission. Proudly serving business and
                residential sector in Ontario.
              </p>
              <hr className='border-1 border-gray-600 w-11/12 my-3' />
              <p href='tel:6472891070' className='px-2 py-1'>
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>{contact?.phoneNumber}</p>
              </p>
              <p
                href='mailto:info@argussecurityservices.ca'
                className='px-2 py-1'>
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>{contact?.email}</p>
              </p>
              {/* <img src={phone_logo} alt="Phone Logo" /> */}
              <p>
                {contact?.address}
              </p>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 pt-10 md:pt-32'>
              <h2 className='title-font font-medium text-white tracking-widest text-2xl md:text-sm mb-3'>
                EXPLORE
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  {' '}
                  <Link to='/about'>
                    <button className='text-white hover:text-red-1'>
                      ➔ About
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Our Services
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Covid-19 Plan
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Organization Structure
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/jobs'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Jobs
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Personnel
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/training'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Training
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/contact'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Contact Us
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/technology'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Technology
                    </button>
                  </Link>{' '}
                </li>
              </nav>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4 pt-10 md:pt-32'>
              <h2 className='title-font font-medium text-white tracking-widest text-2xl md:text-sm mb-3'>
                SERVICES
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Gated Community Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Construction Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Parking Enforcement
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Residential Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Corporate Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Industrial Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Private Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Mobile Security
                    </button>
                  </Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to='/services'>
                    <button className='text-white hover:text-red-1'>
                      ➔ Event Security
                    </button>
                  </Link>{' '}
                </li>
              </nav>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-4/12 bg-red-1'>
            <div className='w-full px-4 text-center items-center pt-8'>
              <div className='flex flex-col bg-red-1 items-center px-10 py-8  mx-auto'>
                <div className="bg-contain bg-no-repeat bg-center bg-shape bg-opacity-5 p-6 ">
                <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3 text-center'>
                  NEWSLETTER
                </h2>
                <p className='text-white text-sm mt-2 text-center'>
                  Signup to get our daily latest security news and updates.
                </p>
                </div>

                <form className='w-full py-2' onSubmit={handleSubmit}>
                  <input
                    type='email'
                    className='w-full my-4 bg-white border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-white focus:border-white text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='Enter Email'
                    value={email}
                    onChange={handleSubscriberChange}
                  />
                  <button
                    className='w-full p-4 rounded-lg border font-bold text-white bg-black hover:bg-white hover:text-red-700 hover:border-black'
                    type='submit'>
                    REGISTER NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2'>
        <div className='container px-4 md:px-16 lg:px-28 xl:px-44 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-xl text-white sm:ml-6 sm:mt-0 mt-4'>
            © Copyright 2021 by Argus Security Services Corp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
