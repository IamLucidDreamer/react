import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import {Link} from 'react-router-dom'
import Hamburger from './../../MyComponents/Partials/Hamburger.jsx';

class Header2 extends Component {

  Header

  render() {
    return (

    <div className="">
      <div className="hidden lg:block px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 text-l -mb-12">
        <nav class="flex flex-wrap items-center text-base">
          <Link to="/about" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            ABOUT
          </Link>

          <Link to="/services" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          SERVICES
          </Link>

          <Link to="/jobs" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          JOBS
          </Link>
          
          <Link to="/training" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          TRAINING
          </Link>

          <Link to="/contact" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          CONTACT
          </Link>
      
        </nav>
      </div>
      <div className="block lg:hidden bg-red-1 flex flex-row justify-between items-center">
        <img src={logo} alt="Logo of Argus Security" className="w-24 mx-4 my-3" />
      </div>
      <Hamburger />
    </div>
    )
  }
}

export default Header2
