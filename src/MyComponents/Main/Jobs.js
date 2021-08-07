import React, { Component } from 'react'
import about_image from './../../argus website/PNG/Video.png'

class About extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             phone: '',
             message: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })

    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.phone} ${this.state.message}`)
        event.preventDefault()
    }
    
    
    render() {
        return (
            <div>
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">JOBS</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page Image"/>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Scope of Service</h2>
                        <p className="leading-relaxed mb-8">Call or visit a Argus Career Centre today. There is no appointment required during
                            regular business hours. We have a wide variety of available roles and jobsites</p>
                        
                        <ul className="flex">
                            <div className="mx-5">
                                <li><span className="text-red-700">✓</span> Retail Malls</li>
                                <li><span className="text-red-700">✓</span> Commercial Properties </li>
                                <li><span className="text-red-700">✓</span> Condominiums </li>
                            </div>
                            <div className="mx-5">
                                <li><span className="text-red-700">✓</span> Industrial Sites</li>
                                <li><span className="text-red-700">✓</span> Healthcare Facilities</li>
                                <li><span className="text-red-700">✓</span> Mobile Guard </li>
                            </div>
                        </ul>
                        
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Employment Requirements</h2>
                        <p className="leading-relaxed mb-8">Call or visit a Argus Career Centre today. There is no appointment required during
                            regular business hours. We have a wide variety of available roles and jobsites</p>
                        <ul className="mb-8">
                            <li><span className="text-red-700">✓</span> A valid Ontario Security Licence </li>
                            <li><span className="text-red-700">✓</span> Previous experience</li>
                            <li><span className="text-red-700">✓</span> Education (Ontario Grade 12 or equivalent)</li>
                            <li><span className="text-red-700">✓</span> Availability to work required shifts </li>
                            <li><span className="text-red-700">✓</span> No criminal record</li>
                            <li><span className="text-red-700">✓</span> Canadian citizen or landed immigrant status</li>
                            <li><span className="text-red-700">✓</span> Available transportation to get to work </li>
                            <li><span className="text-red-700">✓</span> A clean and professional appearance with good hygiene</li>
                        </ul>
                        <p className="leading-relaxed mb-8">If you do not have a valid Ontario Security Licence, we can help you train and
                            apply for one.</p>                  
                        <button className="w-1/3 p-4 rounded-lg text-3xl border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">APPLY NOW</button>
                    </div>
                    <div className=" lg:w-1/3 px-4 md:w-1/2 flex flex-col md:ml-auto w-full md:mt-0">
                        <div className="text-black text-l font-medium bg-gray-300 mb-8">
                            <h1 className="font-bold bg-gray-700 text-white text-xl p-5">Services</h1>
                            <h1 className="rounded-lg py-4 pl-8 hover:bg-red-700 hover:text-white hover:rounded-md">➔ Residential Security</h1>
                            <h1 className="rounded-lg py-4 pl-8 hover:bg-red-700 hover:text-white hover:rounded-md">➔ Commercial Security</h1>
                            <h1 className="rounded-lg py-4 pl-8 hover:bg-red-700 hover:text-white hover:rounded-md">➔ Event Security</h1>
                            <h1 className="rounded-lg py-4 pl-8 hover:bg-red-700 hover:text-white hover:rounded-md">➔ Employment</h1>
                            <h1 className="rounded-lg py-4 pl-8 hover:bg-red-700 hover:text-white hover:rounded-md">➔ Security Guard License</h1>
                        </div>
                        <div className="flex flex-col items-center text-center mx-auto p-10 bg-cover bg-no-repeat bg-callus mb-8">
                            <svg class="w-12" xmlns="http://www.w3.org/2000/svg" width="85.04" height="85.003" viewBox="0 0 85.04 85.003">
                                <g id="Phone_logo" data-name="Phone logo" transform="translate(-36.779 -122.722)">
                                    <g id="Group_7" data-name="Group 7" transform="translate(36.779 122.722)">
                                    <path id="Path_220" data-name="Path 220" d="M79.314,207.685c-9.468,0-18.936-.114-28.4.039A14.16,14.16,0,0,1,36.9,196.274a9.917,9.917,0,0,1-.072-1.8c0-19.279.081-38.557-.051-57.835a14,14,0,0,1,10.785-13.589,12.738,12.738,0,0,1,2.8-.316q28.778-.027,57.553-.012a13.774,13.774,0,0,1,13.6,11.835,25.224,25.224,0,0,1,.283,3.559q.027,27.564.012,55.131a14.357,14.357,0,0,1-11.7,14.357,8.32,8.32,0,0,1-1.646.075Q93.888,207.691,79.314,207.685ZM83,180.3c-.566-.361-1.185-.683-1.724-1.107A60.382,60.382,0,0,1,67.9,164.642c-1.1-1.685-.969-2.452.6-3.643,1.224-.927,2.44-1.871,3.664-2.8a1.574,1.574,0,0,0,.379-2.365,27.928,27.928,0,0,0-3.054-4.206,85.954,85.954,0,0,0-6.559-5.858,2.692,2.692,0,0,0-3.8.274c-3.761,3.634-5.355,8.042-4.242,13.207,2.184,10.163,7.1,18.683,15.545,24.956A37.953,37.953,0,0,0,92.9,192.191c3.288.054,7.287-2.72,8.267-5.6a3.33,3.33,0,0,0-.223-2.635,30.807,30.807,0,0,0-9.465-8.319,2.876,2.876,0,0,0-3.5.2C86.338,177.218,84.78,178.695,83,180.3Zm-4.134-37.973c2.323.3,4.407.445,6.441.848,7.867,1.552,13.24,6.2,16.384,13.5,2.5,5.794,3.18,11.932,3.264,18.159.018,1.282.692,1.938,1.781,1.91a1.6,1.6,0,0,0,1.643-1.892c-.129-2.034-.2-4.074-.3-6.11a38.941,38.941,0,0,0-3.075-13.406c-2.99-7.07-7.964-12.16-15.358-14.666a31.836,31.836,0,0,0-13.92-1.489c-1.965.22-3.923.539-5.861.939a1.577,1.577,0,0,0-1.258,1.925,1.476,1.476,0,0,0,1.622,1.4,9.98,9.98,0,0,0,1.342-.081C74.076,143.017,76.573,142.653,78.871,142.325Zm.4,8.273c-.563,0-1.462-.009-2.365.006a2.7,2.7,0,0,0-.575.15c-1.643.412-2.262,1.107-1.995,2.232.241,1.011,1.393,1.465,2.84,1.249A13.993,13.993,0,0,1,80.436,154a11.8,11.8,0,0,1,8.505,4.037c2.975,3.607,4.158,7.93,4.609,12.488a1.874,1.874,0,0,0,1.862,1.916,1.66,1.66,0,0,0,1.607-2.172,64.193,64.193,0,0,0-1.934-8.514C92.668,154.783,87.087,150.253,79.271,150.6Z" transform="translate(-36.779 -122.722)" fill="#ba0913"/>
                                    </g>
                                </g>
                            </svg>
                            <h1 className="text-l font-bold text-white p-2">Professional Help to get back your peace of mind</h1>
                            <p className="text-3xl text-red-700 font-bold p-2">647-289-1070</p>
                            <p className="text-gray-400 p-2">Confidentiality<br/>Guaranteed</p>
                        </div>
                        <form className="bg-gray-200 p-6" onSubmit={this.handleSubmit}>
                            <input className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700" type="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange}/>
                            <input className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700" type="telephone" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/>
                            <textarea className="w-full h-56 mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700" type="text" placeholder="Write Message" value={this.state.message} onChange={this.handleMessageChange}/>
                            <button className="w-full p-4 rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default About
