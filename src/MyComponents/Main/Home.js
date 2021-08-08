import React from 'react'
import section_img1 from './../../argus website/PNG/Video.png'
import section_img2 from './../../argus website/PNG/sdm.png'
import section3img from './../../argus website/PNG/Group -5.png'
import section4img from './../../argus website/PNG/raw-2_edited.png'

export default function Home() {
  return (
    <div>
     
     <div class="text-gray-600 body-font bg-cover bg-no-repeat bg-center bg-hero">
        <div class="container mx-auto justify-center items-center">
          <div class=" items-center text-center">
            <p class="py-24 sm:py-60"></p>
          </div>
        </div>
      </div>
      <div class="container px-2 mx-auto sm:-mt-20">
          <div class="lg:w-9/12 flex flex-col sm:flex-row sm:items-center mx-auto">
              <h1 class="flex-grow sm:pr-16 text-4xl font-bold title-font text-gray-2">Call us <br/><span class="text-red-700 text-6xl font-bold">647.289.1070</span></h1>
              <button class="flex-shrink-0 font-bold text-white text-sm bg-red-700 border-0 py-5 px-10 focus:outline-none hover:bg-white border-2 border-red-700 hover:text-red-700 rounded-lg text-sm mt-10 sm:mt-0">DISCOVER MORE</button>
          </div>
      </div>

<div class="text-gray-600 body-font overflow-hidden">
  < div class="flex flex-wrap px-8 mt-8 text-white justify-center">
      <div class="bg-red-700 px-16 py-5">
        <div>
          <p>100% Accountable</p>
        </div>
        <h1 class="font-bold">Know the Truth for Peace of Mind</h1>
      </div>
      <div class="bg-gray-700 px-16 py-5">
        <div>
         <p>100% Accountable</p>
        </div>
        <h1 class="font-bold">Direct Updates Regarding Incidents</h1>
      </div>
    </div>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 items-end md:w-1/2 flex flex-col items-start bg-cover bg-no-repeat bg-mapbg">
        <img src={section_img1} alt="Argus Security Services"/>
        <img src={section_img2} alt="Argus Security Services" class="bg-red-700 w-7/12 nborder-t-8 border-l-8 -mt-60"/>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <h2 class="font-bold sm:text-5xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Introducing Argus
          Security Services</h2>
        <p class="leading-relaxed mb-8">Argus Security ensures the team adherence to company rules and
          regulations. Our goal is to make our clients the direct beneficiaries of our
          policies and procedures. </p>
        <div class="flex ">
          <ul class="px-4">
            <li>Optimized Mobile Patrols</li>
            <li>Fool Proof Checkpoints </li>
            <li>GPS Tracking </li>
          </ul>
          <ul class="px-4">
            <li>Reliable Fire Watch</li>
            <li>Tangible Proof of Service</li>
            <li>Efficient Dispatching System </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</div>

<div class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img src={section3img} alt="Residential Security"/>
          <div class="p-6 text-center bg-gray-200">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">RESIDENTIAL</h1>
            <p class="leading-relaxed mb-3">Offering Security Personnel to keep
              your home safe.</p>
            <button class="w-full bg-red-700 py-4 rounded-lg text-white">Read More</button>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img src={section3img} alt="Residential Security"/>
          <div class="p-6 text-center bg-gray-200">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">COMMERCIAL</h1>
            <p class="leading-relaxed mb-3">Let us protect your business so you trade freely and grow.</p>
            <button class="w-full bg-red-700 py-4 rounded-lg text-white">Read More</button>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img src={section3img} alt="Residential Security"/>
          <div class="p-6 text-center bg-gray-200">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">EVENT</h1>
            <p class="leading-relaxed mb-3">Trust us to maintain a safe and secure
            environment</p>
            <button class="w-full bg-red-700 py-4 rounded-lg text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="text-white bg-black body-font overflow-hidden">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="w-6/12">
      <img src={section_img2} alt="Argus Security"/>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <h2 class="sm:text-5xl text-2xl title-font font-bold text-white mt-4 mb-4">Know your
          Partners-in-Protection</h2>
        <div class="flex items-center p-4">
          <button class="px-6 py-2 bg-red-700 mx-2">Our Team</button>
          <button class="px-6 py-2 bg-red-700 mx-2">Argus Hierarchy</button>
          <button class="px-6 py-2 bg-red-700 mx-2">Contact</button>
        </div>
        <p class="leading-relaxed mb-8">At Argus Security Services we maintain a prominent level of
          training for our guards in response to our highly sensitive sites.
          We offer 24/7 fast and reliable security services. Qualifications
          of our Directors are as follows:</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
          <div>
            <img src={section4img} alt=""/>
          </div>
          <div>
          <ul class="px-4">
            <li>Member of Law society of Ontario</li>
            <li>Police Foundation Certified</li>
            <li>7 Years of Security Experience </li>
            <li>Sometimes buys me Coffee</li>
            <li>Good Taste in Movies</li>
            <li>Good Guy Though </li>
          </ul>
          </div>
        </div> 
      </div>
    </div>
  </div>
</div>

<div class="text-gray-600 body-font bg-red-700">
  <div class="container px-5 py-20 mx-auto">
    <div class="lg:w-10/12 flex flex-col sm:flex-row sm:items-center items-center mx-auto">
      <h1 class="flex-grow sm:pr-16 text-5xl font-medium title-font text-white">Covid 19 Procedures and much
        more to safeguard your business.</h1>
      <button class="flex-shrink-0 font-bold text-red-700 bg-white border-0 py-5 px-10 focus:outline-none hover:bg-red-700 border-2 border-white hover:text-white rounded-lg text-sm mt-10 sm:mt-0">DISCOVER MORE</button>
    </div>
  </div>
</div>

    </div>
  )
}
