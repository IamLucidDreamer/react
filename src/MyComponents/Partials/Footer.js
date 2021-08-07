import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import phone_logo from './../../argus website/SVG/Phone logo.svg'

class Footer extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             subscriber: ''
        }
    }

    handleSubscriberChange = (event) => {
        this.setState({
            subscriber: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`${this.state.subscriber}`)
        event.preventDefault()
    }


    
    render() {
        return (


<div class="text-white body-font bg-center bg-no-repeat bg-cover bg-footer">
  <div class="container px-24 py-12 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <img class="w-24 items-center" src={logo} alt="Logo of Argus Security"/>
        <p class="text-white">Your protection is Our Mission. Proudly serving business and residential sector in Ontario.</p>
        <hr class="border-1 border-gray-600 w-11/12 my-3" />
        <a href="tel:6472891070" class="p-1">
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>647-289-1070</p>
        </a>
        <a href="mailto:info@argussecurityservices.ca" class="p-1">
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>info@argussecurityservices.ca</p>
        </a>
            {/* <img src={phone_logo} alt="Phone Logo" /> */}
            <p>350 Rutherford Road South Brampton ON L6W-4N6 Suite 210 Plaza 2</p>
    </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-red-700">➔ About</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Our Services</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Covid-19 Plan</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Organization Structure</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Jobs</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Personnel</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Training</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Contact Us</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Technology</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-red-700">➔ Gated Community Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Construction Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Parking Enforcement</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Residential Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Corporate Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Industrial Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Private Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Mobile Security</a>
          </li>
          <li>
            <a class="text-white hover:text-red-700">➔ Event Security</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 text-center items-center">
        <div class="flex flex-col bg-red-700 items-start p-6 ">
          <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 text-center">NEWSLETTER</h2>
          <p class="text-white text-sm mt-2 text-center">Signup to get our daily latest
          security news and updates.</p>
          <form class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button className="w-full p-4 rounded-lg border text-white bg-black hover:bg-white hover:text-red-700 hover:border-black">REGISTER NOW</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="border-t-2">
    <div class="container px-20 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <p class="text-xl text-white sm:ml-6 sm:mt-0 mt-4">© Copyright 2021 by Argus Security Services Corp.</p>
    </div>
  </div>
</div>

        )
    }
}

export default Footer
