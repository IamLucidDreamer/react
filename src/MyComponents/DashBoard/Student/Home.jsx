import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from './Components/SideNav'

export default function Home() {
    return (
        <div className="w-full flex flew-col md:flex-row">
            <div className="w-2/12 h-screen bg-red-1 fixed top-0 left-0 ">
                
                <SideNav />
            
            </div>
            <div className="w-full md:w-2/12 lg:w-3/12">
                
            </div>
            <div className="w-full md:w-2/12 lg:w-3/12">
                
            </div>
        </div>
    )
}
