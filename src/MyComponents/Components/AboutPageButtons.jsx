import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutPageButtons() {
    return (
            <div className="w-full my-6">
                <div className="w-full flex flex-col md:flex-row justify-start">
                    <Link to="/organisationstructure" className="text-left text-xl text-gray-2 w-full pl-4 my-2 py-5 border-4 border-gray-200 hover:border-red-1">
                        <span className="text-red-1 font-bold">1.</span> ORGANISATION STRUCTURE
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <Link to="/harassementpolicy" className="text-left text-xl text-gray-2 w-full pl-4 my-2 py-5 border-4 border-gray-200 hover:border-red-1">
                        <span className="text-red-1 font-bold">2.</span> HARASSMENT POLICY
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <Link to="/personell" className="text-left text-xl text-gray-2 w-full pl-4 my-2 py-5 border-4 border-gray-200 hover:border-red-1">
                        <span className="text-red-1 font-bold">3.</span> PERSONELL
                    </Link>
                </div>
            </div>
    )
}
