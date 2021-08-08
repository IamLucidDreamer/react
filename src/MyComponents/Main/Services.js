import React, { Component } from 'react'
import bghead from './../../argus website/PNG/Path 217.png';

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
                <div class="px-2 sm:px-40 bg-cover bg-no-repeat bg-mapbg">
                    <div class="container px-5 py-4 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full flex-wrap items-center">
                            <div class="flex flex-wrap items-center w-1/2">
                                <hr class="border-4 border-red-700 w-6/12 lg:w-1/12 mb-2 lg:m-4"/>
                                <h1 class="sm:text-3xl text-2xl font-medium lg:w-10/12 lg:mb-0 mb-4">First hand information to our operations</h1>
                            </div>
                            <p class="lg:pl-6 lg:w-1/2 mx-auto leading-relaxed text-base">As a client you will gain first hand access to day-today operations and daily occurrence reposts.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-full">
                        <div>
                            <div class="my-2 md:w-1/3">
                                <div class="h-full overflow-hidden text-center">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
                                    <div class="-mt-5">
                                        <img class="w-10/12 mx-auto" src={bghead} alt=""/>
                                        <h1 class="title-font text-lgfont-medium text-gray-900 -mt-8">Shooting Stars</h1>
                                    </div>
                                    <div class="bg-gray-200 mx-4 mb-2">
                                        <div class="p-6 mx-1 mb-1 bg-white -mt-2 ">
                                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <button class="">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
