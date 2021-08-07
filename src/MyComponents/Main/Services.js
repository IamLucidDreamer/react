import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <div>
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">SERVICES</h1>
                        </div>
                    </div>
                </div>
                
                <div className="">
                    <div className="container px-12 py-24">
                        <div className="flex items-center">
                            <hr className="border-2 border-red-700 w-12"/>
                            <h1 className="text-gray-900 text-3xl p-4">First hand information to our operations</h1>
                            <p>As a client you will gain first hand access to day-today operations and daily occurrence reposts.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
