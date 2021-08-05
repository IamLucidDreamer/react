import React, { Component } from 'react'
import about_image from './../../argus website/PNG/Video.png'

class Jobs extends Component {
    render() {
        return (
            <div>
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-jobsbg">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-black">Jobs</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-26 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page Image"/>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Scope of Service</h2>
                        <p className="leading-relaxed mb-8">Call or visit a Argus Career Centre today. There is no appointment required during
                            regular business hours. We have a wide variety of available roles and jobsites</p>          
                        
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Employment Requirements</h2>
                        <p className="leading-relaxed mb-8">Call or visit a Argus Career Centre today. There is no appointment required during
                            regular business hours. We have a wide variety of available roles and jobsites</p>
                        <p className="leading-relaxed mb-8">Argus Security provides clients with superior security services for healthcare
                            facilities, residential and commercial buildings, and retail loss prevention. Our
                            services package delivery management, parking enforcement, access control,
                            camera monitoring, and performing periodic patrols.</p>
                        <div>
                            
                        </div>                   
                    
                    </div>
                    <div className=" lg:w-1/3 px-4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="text-black">
                            <h1 className="font-bold bg-gray-700 text-white text-2xl p-5">Services</h1>
                            <h1 className=" bg-gray-200 text-xl py-2 pl-8 hover:bg-red-700 hover:text-white hover:rounded-lg">Commercial Security</h1>
                            <h1 className=" bg-gray-200 text-xl py-2 pl-8 hover:bg-red-700 hover:text-white hover:rounded-lg">Residential Security</h1>
                            <h1 className=" bg-gray-200 text-xl py-2 pl-8 hover:bg-red-700 hover:text-white hover:rounded-lg">Event Security</h1>
                            <h1 className=" bg-gray-200 text-xl py-2 pl-8 hover:bg-red-700 hover:text-white hover:rounded-lg">Security Guard License</h1>
                            <h1 className=" bg-gray-200 text-xl py-2 pl-8 hover:bg-red-700 hover:text-white hover:rounded-lg">Employment</h1>
                        </div>
                        <div className="text-center p-10 bg-gray-900">
                            {/* <img src={} alt=""/> */}
                            <h1 className="text-l font-bold text-white p-2">Professional Help to get back your peace of mind</h1>
                            <p className="text-3xl text-red-700 font-bold p-2">647-289-1070</p>
                            <p className="text-gray-400 p-2">Confidentiality<br/>Guaranteed</p>
                        </div>
                        <div className="bg-gray-200 p-4">
                            <div className="relative mb-4">
                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default Jobs
