import React, {useState} from 'react';
import Logo from "./../../argus website/SVG/logosvg.svg"
import {Link} from 'react-router-dom'
import LogIn from '../User/LogIn';


export default function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="">
      <div className="hidden lg:block px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 bg-red-1 shadow-2xl text-sm">
        <div className="flex flex-row items-center mx-auto justify-between">
          <nav className="flex flex-row items-center">
              <Link to="/technology" className="text-white border-2 rounded px-8 py-3 mr-3.5 hover:bg-white hover:text-red-1">
                Technology
              </Link>
              <Link to="/Training" className="text-white border-2 rounded px-8 py-3 hover:bg-white hover:text-red-1">
                Get Your Security Guard License
              </Link>
          </nav>
          <Link to="/">
            <img src={Logo} alt="Logo of Argus Security" className="w-24 my-2"/>
          </Link>
          <nav className="flex flex-row items-center">
            <Link open={open} onClick={() => setOpen(!open)} className="text-white border-2 rounded px-3 py-3 mr-3 hover:bg-white hover:text-red-1">
              Student Portal
            </Link>
            <Link to="/training" className="text-white border-2 rounded px-3 py-3 mr-3 hover:bg-white hover:text-red-1">
              Client Portal
            </Link>
            <Link to="/training" className="text-white border-2 rounded px-3 py-3 hover:bg-white hover:text-red-1">
              Employee Portal
            </Link>
          </nav>
        </div>
      </div>
      <LogIn open={open}/>
    </div>
  )
}
