import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import Logo from "./../../argus website/SVG/logosvg.svg"

const Stickynav = () => {
    const [open, setOpen] = useState(false)

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setOpen(true)
    } else {
        setOpen(false)
    }
    }

    return (
    
    <div className={open? "block" : "hidden"}>
        <div className="hidden lg:block w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 text-l fixed top-0 bg-red-1">
            
            <img src={Logo} alt="" className="w-24 fixed top-1 left-2"/>

            <nav class="flex flex-wrap items-center text-base">
            
            <Link to="/about" className="w-1/5 text-white py-4 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
                ABOUT
            </Link>

            <Link to="/services" className="w-1/5 text-white py-4 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            SERVICES
            </Link>

            <Link to="/jobs" className="w-1/5 text-white py-4 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            JOBS
            </Link>
            
            <Link to="/training" className="w-1/5 text-white py-4 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            TRAINING
            </Link>

            <Link to="/contact" className="w-1/5 text-white py-4 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            CONTACT
            </Link>
        
            </nav>
        </div>
      </div>
    )
}

export default Stickynav;